"use client"

import dynamic from "next/dynamic"
import { useTheme } from "next-themes"
import { useCallback, useState } from "react"

import { FunTileShell } from "@/components/home/fun-tile-shell"
import type { SceneStatus } from "@/components/home/tiles/r2d2-scene"
import { LocaleText } from "@/components/i18n/locale-text"
import type { Dictionary } from "@/content/types"

/**
 * Portrait 3D tile. The droid is the whole point, so the scene is the tile's
 * backdrop and the copy sits on top of it — same arrangement as the map tile,
 * different medium.
 *
 * Drop your model at `public/models/r2d2.glb`. Draco-compressed exports work —
 * three resolves the decoder through the bundler, so there is nothing to
 * vendor. If the file is missing the tile degrades to a plain labelled card
 * rather than an empty black box.
 */

const MODEL_SRC = "/models/r2d2.glb"

const R2D2Scene = dynamic(
  () =>
    import("@/components/home/tiles/r2d2-scene").then((mod) => mod.R2D2Scene),
  { ssr: false }
)

type R2D2Labels = Dictionary["ui"]["r2d2"]

type R2D2TileProps = {
  labels: R2D2Labels
  span: string
}

export function R2D2Tile({ labels, span }: R2D2TileProps) {
  const { resolvedTheme } = useTheme()
  const [status, setStatus] = useState<SceneStatus>("loading")
  const [poke, setPoke] = useState(0)

  const handleStatusChange = useCallback((next: SceneStatus) => {
    setStatus(next)
  }, [])

  const interactive = status === "ready"

  const caption =
    status === "ready"
      ? labels.hint
      : status === "loading"
        ? labels.loading
        : labels.unavailable

  return (
    <FunTileShell
      span={span}
      label={labels.label}
      as={interactive ? "button" : "div"}
      onClick={interactive ? () => setPoke((value) => value + 1) : undefined}
      ariaLabel={interactive ? labels.action : undefined}
      className="min-h-[21rem] md:min-h-full"
      backdrop={
        <>
          <div
            aria-hidden
            className="absolute inset-0 bg-radial-[at_50%_35%] from-foreground/5 to-transparent"
          />
          <R2D2Scene
            src={MODEL_SRC}
            theme={resolvedTheme === "dark" ? "dark" : "light"}
            onStatusChange={handleStatusChange}
            poke={poke}
            className="absolute inset-0"
          />
          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-2/5 bg-linear-to-t from-muted/95 via-muted/50 to-transparent"
          />
        </>
      }
    >
      <div className="flex flex-col gap-0.5">
        <p className="text-sm font-medium tracking-tight">
          <LocaleText>{labels.title}</LocaleText>
        </p>
        <p className="text-xs text-muted-foreground">
          <LocaleText>{caption}</LocaleText>
        </p>
      </div>
    </FunTileShell>
  )
}
