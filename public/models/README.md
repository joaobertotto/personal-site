# 3D models

Binary glTF assets loaded by the home page tiles.

## `r2d2.glb` — required by the Maker band's droid tile

The tile at `src/components/home/tiles/r2d2.tsx` loads `/models/r2d2.glb`. The
file is **not** committed — drop your own copy here.

Requirements:

- **Format** — `.glb` (binary glTF). Draco compression is supported. The
  decoder ships with `three` and is emitted by the bundler on demand, so
  nothing is fetched from a CDN and there is no decoder to vendor by hand.
- **Scale and origin** — irrelevant. The scene re-centres the model on the
  origin and normalises it to a fixed height before framing the camera, so an
  export in millimetres sitting a hundred units off-origin still frames
  correctly.
- **Up axis** — Y-up (the glTF default). Blender's glTF exporter does this by
  default.
- **Animation** — optional. If the file ships `AnimationClip`s, clicking the
  tile plays one of them. Without clips, the tile falls back to spinning the
  dome procedurally.
- **Dome node** — for the procedural fallback, the head is found by matching a
  node name against `/dome|head|top/i`, falling back to the tallest top-level
  child. Naming the dome node `dome` makes this deterministic.
- **Budget** — keep it under ~2 MB. This is a decorative tile on the home
  page, not a product viewer. Decimate in Blender and bake to a single
  material if the source is heavy.

## Licensing

R2-D2 is a Lucasfilm/Disney trademark. Use a model you have the right to
publish — check the licence on anything sourced from Sketchfab, Poly Haven, or
similar, and keep attribution here if the licence requires it.

| File | Source | Licence | Attribution |
| ---- | ------ | ------- | ----------- |
| `r2d2.glb` | _fill in_ | _fill in_ | _fill in_ |
