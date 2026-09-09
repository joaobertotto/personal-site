import { MosaicTile } from "@/components/home/mosaic-tile"
import { CoffeeTile } from "@/components/home/tiles/coffee"
import { LocalTimeTile } from "@/components/home/tiles/local-time"
import { MapTile } from "@/components/home/tiles/map"
import { R2D2Tile } from "@/components/home/tiles/r2d2"
import { StatusTile } from "@/components/home/tiles/status"
import { WeatherTile } from "@/components/home/tiles/weather"
import type { Dictionary, HomeTile, Project } from "@/content/types"

/**
 * Single place that maps a `HomeTile` onto a component, so any band — work,
 * maker, fun — can mix project cards and widgets without each one growing its
 * own switch. Adding a widget kind means touching this file and the tile
 * union in `content/types`, nothing else.
 */

type RenderHomeTileArgs = {
  tile: HomeTile
  ui: Dictionary["ui"]
  /** Projects the band's `project` tiles resolve against. */
  projects: Project[]
  /** Category label printed on project cards, e.g. "Maker". */
  category: string
}

function projectById(projects: Project[], id: string) {
  return projects.find((project) => project.id === id)
}

export function renderHomeTile({
  tile,
  ui,
  projects,
  category,
}: RenderHomeTileArgs) {
  switch (tile.kind) {
    case "weather":
      return <WeatherTile key={tile.id} labels={ui.weather} span={tile.span} />
    case "map":
      return <MapTile key={tile.id} labels={ui.map} span={tile.span} />
    case "status":
      return <StatusTile key={tile.id} labels={ui.status} span={tile.span} />
    case "localTime":
      return (
        <LocalTimeTile key={tile.id} labels={ui.localTime} span={tile.span} />
      )
    case "coffee":
      return <CoffeeTile key={tile.id} labels={ui.coffee} span={tile.span} />
    case "r2d2":
      return <R2D2Tile key={tile.id} labels={ui.r2d2} span={tile.span} />
    case "project": {
      const project = projectById(projects, tile.projectId)
      if (!project) {
        return null
      }

      return (
        <MosaicTile
          key={tile.id}
          project={project}
          category={category}
          span={tile.span}
        />
      )
    }
    default:
      return null
  }
}
