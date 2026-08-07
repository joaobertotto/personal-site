import { CoffeeCard } from "@/components/home/coffee-card"
import { LocalTimeCard } from "@/components/home/local-time-card"
import { MapCard } from "@/components/home/map-card"
import { MosaicTile } from "@/components/home/mosaic-tile"
import { StatusCard } from "@/components/home/status-card"
import { WeatherCard } from "@/components/home/weather-card"
import type { Locale } from "@/lib/i18n/config"
import type { Dictionary, HomeTile, Project } from "@/lib/i18n/types"

type FunBentoProps = {
  locale: Locale
  dictionary: Dictionary
}

function projectById(projects: Project[], id: string) {
  return projects.find((project) => project.id === id)
}

function renderFunTile({
  tile,
  locale,
  ui,
  projects,
}: {
  tile: HomeTile
  locale: Locale
  ui: Dictionary["ui"]
  projects: Project[]
}) {
  switch (tile.kind) {
    case "weather":
      return <WeatherCard key={tile.id} labels={ui.weather} span={tile.span} />
    case "map":
      return <MapCard key={tile.id} labels={ui.map} span={tile.span} />
    case "status":
      return <StatusCard key={tile.id} labels={ui.status} span={tile.span} />
    case "localTime":
      return (
        <LocalTimeCard
          key={tile.id}
          locale={locale}
          labels={ui.localTime}
          span={tile.span}
        />
      )
    case "coffee":
      return <CoffeeCard key={tile.id} labels={ui.coffee} span={tile.span} />
    case "project": {
      const project = projectById(projects, tile.projectId)
      if (!project) {
        return null
      }

      return (
        <MosaicTile
          key={tile.id}
          locale={locale}
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

export function FunBento({ locale, dictionary }: FunBentoProps) {
  const { ui, fun, mosaic } = dictionary

  return (
    <section aria-labelledby="fun-bento-heading" className="flex flex-col gap-2">
      <h2
        id="fun-bento-heading"
        className="px-0.5 text-sm font-medium tracking-wide text-muted-foreground uppercase"
      >
        {ui.fun}
      </h2>
      <ul className="grid list-none grid-flow-dense grid-cols-2 gap-1.5 p-0 auto-rows-[minmax(10rem,auto)] md:grid-cols-4 md:auto-rows-[minmax(10rem,1fr)]">
        {mosaic.fun.map((tile) =>
          renderFunTile({
            tile,
            locale,
            ui,
            projects: fun,
          })
        )}
      </ul>
    </section>
  )
}
