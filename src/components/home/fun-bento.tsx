import { MosaicTile } from "@/components/home/mosaic-tile"
import { CoffeeTile } from "@/components/home/tiles/coffee"
import { LocalTimeTile } from "@/components/home/tiles/local-time"
import { MapTile } from "@/components/home/tiles/map"
import { StatusTile } from "@/components/home/tiles/status"
import { WeatherTile } from "@/components/home/tiles/weather"
import { LocaleText } from "@/components/i18n/locale-text"
import type { Dictionary, HomeTile, Project } from "@/content/types"

type FunBentoProps = {
  dictionary: Dictionary
}

function projectById(projects: Project[], id: string) {
  return projects.find((project) => project.id === id)
}

function renderFunTile({
  tile,
  ui,
  projects,
}: {
  tile: HomeTile
  ui: Dictionary["ui"]
  projects: Project[]
}) {
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
    case "project": {
      const project = projectById(projects, tile.projectId)
      if (!project) {
        return null
      }

      return (
        <MosaicTile
          key={tile.id}
          project={project}
          category={ui.fun}
          span={tile.span}
        />
      )
    }
    default:
      return null
  }
}

export function FunBento({ dictionary }: FunBentoProps) {
  const { ui, fun, mosaic } = dictionary

  return (
    <section
      aria-labelledby="fun-bento-heading"
      className="flex flex-col gap-2"
    >
      <h2
        id="fun-bento-heading"
        className="px-0.5 text-sm font-medium tracking-wide text-muted-foreground uppercase"
      >
        <LocaleText>{ui.fun}</LocaleText>
      </h2>
      <ul className="grid list-none grid-flow-dense auto-rows-[minmax(10rem,auto)] grid-cols-2 gap-1.5 p-0 md:auto-rows-[minmax(10rem,1fr)] md:grid-cols-4">
        {mosaic.fun.map((tile) =>
          renderFunTile({
            tile,
            ui,
            projects: fun,
          })
        )}
      </ul>
    </section>
  )
}
