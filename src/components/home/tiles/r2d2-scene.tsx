"use client"

import { useEffect, useRef, useState } from "react"
import * as THREE from "three"
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js"

/**
 * The WebGL half of the R2-D2 tile. Kept in its own module so the tile can
 * `next/dynamic` it with `ssr: false` — three.js touches `window` at import
 * time, and the ~150KB of renderer has no business in the initial bundle for
 * a tile that may never scroll into view.
 *
 * Everything here is imperative and lives outside React state on purpose: the
 * render loop must not cause re-renders. The only state that crosses back into
 * React is the load phase, which drives the overlay the tile paints on top.
 */

export type SceneStatus = "loading" | "ready" | "missing" | "unsupported"

type R2D2SceneProps = {
  /** Public path to the .glb. Draco-compressed files are supported. */
  src: string
  /** Drives light intensity and the ground shadow — not the clear colour. */
  theme: "light" | "dark"
  onStatusChange?: (status: SceneStatus) => void
  /**
   * Incremented by the parent on click. Each new value plays one reaction —
   * a prop rather than an imperative handle so the tile stays declarative.
   */
  poke: number
  className?: string
}

/** Seconds a click reaction lasts before easing back to idle. */
const REACTION_DURATION = 1.6

/** Peak height of the click hop, in framed units (model is normalised to 2). */
const REACTION_HOP = 0.12

/** Peak height of the idle bob, same units. */
const IDLE_BOB = 0.02

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

/**
 * Probing for WebGL costs a throwaway context, so the answer is cached for the
 * lifetime of the page — it cannot change under us.
 */
let webGLSupport: boolean | null = null

function supportsWebGL() {
  if (webGLSupport !== null) {
    return webGLSupport
  }

  try {
    const canvas = document.createElement("canvas")
    webGLSupport = Boolean(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl2") ?? canvas.getContext("webgl"))
    )
  } catch {
    webGLSupport = false
  }

  return webGLSupport
}

/**
 * Bounding box of `root`'s meshes expressed in `root`'s own local frame.
 *
 * `Box3.setFromObject` answers in *world* space, which makes it useless here
 * twice over: the result would change as the idle spin rotates the parent, and
 * it would already include whatever transform we are about to overwrite —
 * so re-framing on resize would compound instead of settle.
 */
function localBounds(root: THREE.Object3D) {
  const box = new THREE.Box3()

  root.updateWorldMatrix(true, true)
  const toLocal = new THREE.Matrix4().copy(root.matrixWorld).invert()
  const transform = new THREE.Matrix4()

  root.traverse((child) => {
    const mesh = child as THREE.Mesh
    if (!mesh.isMesh || !mesh.geometry) {
      return
    }

    if (!mesh.geometry.boundingBox) {
      mesh.geometry.computeBoundingBox()
    }
    if (!mesh.geometry.boundingBox) {
      return
    }

    box.union(
      mesh.geometry.boundingBox
        .clone()
        .applyMatrix4(transform.multiplyMatrices(toLocal, mesh.matrixWorld))
    )
  })

  return box
}

/**
 * Frames the droid in the portrait viewport: recentres it on the origin,
 * normalises it to a known height, and pushes the camera back far enough that
 * the whole model fits the *narrow* axis with a little breathing room.
 *
 * Takes the wrapper group, not the loaded model — exports disagree wildly
 * about scale, origin, and root transform, and clobbering the model's own
 * transform is how a .glb authored in millimetres ends up off-camera. The
 * wrapper absorbs the framing so the model keeps whatever the artist set.
 */
function frameModel(
  holder: THREE.Object3D,
  camera: THREE.PerspectiveCamera,
  aspect: number
) {
  const box = localBounds(holder)
  if (box.isEmpty()) {
    return
  }

  const size = box.getSize(new THREE.Vector3())
  const center = box.getCenter(new THREE.Vector3())

  const maxAxis = Math.max(size.x, size.y, size.z) || 1
  const scale = 2 / maxAxis

  holder.scale.setScalar(scale)
  holder.position.set(-center.x * scale, -center.y * scale, -center.z * scale)

  // Reserve room for the motion, not just the model: the droid bobs while idle
  // and hops on click, and framing to the resting silhouette clips the top of
  // the dome at the peak of the hop.
  const fitHeight = size.y * scale + (REACTION_HOP + IDLE_BOB) * 2
  // The droid spins, so the silhouette that has to fit is the *swept* one —
  // the bounding cylinder's diameter, not the axis-aligned width. Framing on
  // `size.x` alone looks right at load and then clips a quarter-turn later,
  // which is exactly the sort of bug a narrow portrait tile makes obvious.
  const fitWidth = Math.hypot(size.x, size.z) * scale

  // `fov` is the *vertical* field of view, so the horizontal fit has to be
  // divided through by the aspect rather than multiplied.
  const fov = THREE.MathUtils.degToRad(camera.fov)
  const distanceForHeight = fitHeight / 2 / Math.tan(fov / 2)
  const distanceForWidth = fitWidth / 2 / Math.tan(fov / 2) / aspect

  camera.position.set(
    0,
    0.15,
    Math.max(distanceForHeight, distanceForWidth) * 1.2
  )
  camera.lookAt(0, 0, 0)
  camera.updateProjectionMatrix()
}

/**
 * R2-D2's dome is the expressive part, so the reaction spins it rather than
 * the whole droid. Node names vary by model, so match loosely and fall back to
 * the tallest direct child — which on essentially every R2 model is the dome.
 */
function findDome(model: THREE.Object3D): THREE.Object3D | null {
  let named: THREE.Object3D | null = null

  model.traverse((child) => {
    if (named) {
      return
    }
    if (/dome|head|top/i.test(child.name)) {
      named = child
    }
  })

  if (named) {
    return named
  }

  let highest: THREE.Object3D | null = null
  let highestY = -Infinity

  for (const child of model.children) {
    const y = new THREE.Box3().setFromObject(child).max.y
    if (y > highestY) {
      highestY = y
      highest = child
    }
  }

  return highest
}

/** Frees GPU memory for a subtree. Three does not do this for you. */
function disposeObject(root: THREE.Object3D) {
  root.traverse((child) => {
    const mesh = child as THREE.Mesh
    if (!mesh.isMesh) {
      return
    }

    mesh.geometry?.dispose()

    const materials = Array.isArray(mesh.material)
      ? mesh.material
      : [mesh.material]

    for (const material of materials) {
      if (!material) {
        continue
      }
      for (const value of Object.values(material)) {
        if (value instanceof THREE.Texture) {
          value.dispose()
        }
      }
      material.dispose()
    }
  })
}

export function R2D2Scene({
  src,
  theme,
  onStatusChange,
  poke,
  className,
}: R2D2SceneProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  // Resolved at first render rather than in the effect: the component only
  // ever mounts on the client (`ssr: false`), and settling it up front keeps
  // the unsupported path from flashing a "loading" state it will never leave.
  const [status, setStatus] = useState<SceneStatus>(() =>
    supportsWebGL() ? "loading" : "unsupported"
  )

  // Mutable handles the render loop reads without re-subscribing.
  const modelRef = useRef<THREE.Object3D | null>(null)
  const domeRef = useRef<THREE.Object3D | null>(null)
  const mixerRef = useRef<THREE.AnimationMixer | null>(null)
  const clipsRef = useRef<THREE.AnimationClip[]>([])
  const keyLightRef = useRef<THREE.DirectionalLight | null>(null)
  const fillLightRef = useRef<THREE.HemisphereLight | null>(null)
  const reactionRef = useRef(0)
  const reducedMotionRef = useRef(false)

  // Status is owned here and mirrored outward, rather than the parent being
  // called from three separate places inside the load callbacks.
  useEffect(() => {
    onStatusChange?.(status)
  }, [onStatusChange, status])

  // One effect owns the entire lifetime of the WebGL context. Splitting setup
  // across effects is how you end up leaking renderers on Fast Refresh.
  useEffect(() => {
    const container = containerRef.current
    if (!container) {
      return
    }

    // `status` already reflects this from the initialiser; bail before we
    // construct a renderer that cannot exist.
    if (!supportsWebGL()) {
      return
    }

    reducedMotionRef.current = prefersReducedMotion()

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100)

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "low-power",
    })
    renderer.setClearAlpha(0)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    container.appendChild(renderer.domElement)
    renderer.domElement.style.display = "block"
    renderer.domElement.style.width = "100%"
    renderer.domElement.style.height = "100%"

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.2)
    keyLight.position.set(2.5, 4, 3)
    const rimLight = new THREE.DirectionalLight(0x9fc7ff, 1.1)
    rimLight.position.set(-3, 1.5, -2.5)
    const fillLight = new THREE.HemisphereLight(0xffffff, 0x60646c, 1.1)
    scene.add(keyLight, rimLight, fillLight)

    keyLightRef.current = keyLight
    fillLightRef.current = fillLight

    // Three nested transforms, one concern each: `pivot` owns the idle yaw and
    // click reactions, `holder` owns the framing (centre + normalised scale),
    // and the loaded model keeps whatever transform its author baked in. They
    // would otherwise all be fighting over the same matrix.
    const pivot = new THREE.Group()
    const holder = new THREE.Group()
    pivot.add(holder)
    scene.add(pivot)

    let disposed = false

    // No `setDecoderPath` on purpose: three ≥ r17x resolves the decoder with
    // `new URL(..., import.meta.url)`, so the bundler emits and fingerprints
    // it for us. Setting a path here would replace that with a hand-managed
    // copy under `public/` for no gain.
    const dracoLoader = new DRACOLoader()
    const loader = new GLTFLoader()
    loader.setDRACOLoader(dracoLoader)

    loader.load(
      src,
      (gltf) => {
        if (disposed) {
          disposeObject(gltf.scene)
          return
        }

        const model = gltf.scene
        model.traverse((child) => {
          const mesh = child as THREE.Mesh
          if (mesh.isMesh) {
            mesh.frustumCulled = false
          }
        })

        holder.add(model)
        modelRef.current = model
        domeRef.current = findDome(model)

        if (gltf.animations.length > 0) {
          const mixer = new THREE.AnimationMixer(model)
          mixerRef.current = mixer
          clipsRef.current = gltf.animations
        }

        const { clientWidth, clientHeight } = container
        frameModel(holder, camera, (clientWidth || 1) / (clientHeight || 1))
        setStatus("ready")
      },
      undefined,
      () => {
        if (!disposed) {
          setStatus("missing")
        }
      }
    )

    // --- sizing -------------------------------------------------------------
    function resize() {
      const width = container?.clientWidth ?? 0
      const height = container?.clientHeight ?? 0
      if (width === 0 || height === 0) {
        return
      }

      renderer.setSize(width, height, false)
      camera.aspect = width / height

      if (modelRef.current) {
        frameModel(holder, camera, camera.aspect)
      } else {
        camera.updateProjectionMatrix()
      }
    }

    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(container)
    resize()

    // --- visibility gating --------------------------------------------------
    // A tile below the fold has no business burning a RAF slot, and neither
    // does a backgrounded tab.
    let onScreen = false

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        onScreen = entry.isIntersecting
        if (onScreen) {
          start()
        } else {
          stop()
        }
      },
      { threshold: 0.05 }
    )
    intersectionObserver.observe(container)

    function handleVisibility() {
      if (document.hidden) {
        stop()
      } else if (onScreen) {
        start()
      }
    }
    document.addEventListener("visibilitychange", handleVisibility)

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    function handleMotionPreference(event: MediaQueryListEvent) {
      reducedMotionRef.current = event.matches
    }
    motionQuery.addEventListener("change", handleMotionPreference)

    // --- render loop --------------------------------------------------------
    const clock = new THREE.Clock()
    let frame = 0

    function tick() {
      frame = requestAnimationFrame(tick)

      const delta = Math.min(clock.getDelta(), 0.1)
      const elapsed = clock.elapsedTime
      const reduced = reducedMotionRef.current

      mixerRef.current?.update(delta)

      if (reactionRef.current > 0) {
        reactionRef.current = Math.max(0, reactionRef.current - delta)
      }

      // Normalised 1 → 0 ease so the reaction decays instead of snapping.
      const reaction = reactionRef.current / REACTION_DURATION
      const eased = reaction * reaction

      if (!reduced) {
        pivot.rotation.y = elapsed * 0.25
        pivot.position.y = Math.sin(elapsed * 1.4) * IDLE_BOB
      }

      if (domeRef.current) {
        const idleSway = reduced ? 0 : Math.sin(elapsed * 0.8) * 0.35
        domeRef.current.rotation.y = idleSway + eased * Math.PI * 4
      } else if (reaction > 0) {
        pivot.rotation.y += eased * Math.PI * 4
      }

      // A short hop sells the reaction more than rotation alone.
      pivot.position.y += Math.sin(eased * Math.PI) * REACTION_HOP

      renderer.render(scene, camera)
    }

    function start() {
      if (frame === 0 && !document.hidden) {
        clock.getDelta()
        frame = requestAnimationFrame(tick)
      }
    }

    function stop() {
      if (frame !== 0) {
        cancelAnimationFrame(frame)
        frame = 0
      }
    }

    return () => {
      disposed = true
      stop()
      resizeObserver.disconnect()
      intersectionObserver.disconnect()
      document.removeEventListener("visibilitychange", handleVisibility)
      motionQuery.removeEventListener("change", handleMotionPreference)

      mixerRef.current?.stopAllAction()
      mixerRef.current = null
      clipsRef.current = []

      disposeObject(scene)
      renderer.dispose()
      dracoLoader.dispose()
      renderer.domElement.remove()

      modelRef.current = null
      domeRef.current = null
    }
  }, [src])

  // Lighting follows the site theme rather than the scene being re-created:
  // swapping intensities is a two-property write, tearing down WebGL is not.
  useEffect(() => {
    const dark = theme === "dark"
    if (keyLightRef.current) {
      keyLightRef.current.intensity = dark ? 1.6 : 2.4
    }
    if (fillLightRef.current) {
      fillLightRef.current.intensity = dark ? 0.5 : 1.2
    }
  }, [theme])

  // `poke` changing means the tile was clicked. If the .glb shipped its own
  // animation clips, play one; otherwise fall back to the procedural spin the
  // render loop drives off `reactionRef`.
  useEffect(() => {
    if (poke === 0) {
      return
    }

    reactionRef.current = REACTION_DURATION

    const mixer = mixerRef.current
    const clips = clipsRef.current
    if (!mixer || clips.length === 0) {
      return
    }

    const clip = clips[poke % clips.length]
    const action = mixer.clipAction(clip)
    action.reset()
    action.setLoop(THREE.LoopOnce, 1)
    action.clampWhenFinished = true
    action.play()
  }, [poke])

  return (
    <div
      ref={containerRef}
      aria-hidden
      data-status={status}
      className={className}
    />
  )
}

export default R2D2Scene
