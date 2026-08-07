import { FunBento } from "@/components/home/fun-bento"
import { MosaicTile } from "@/components/home/mosaic-tile"
import { ScrollColumn } from "@/components/layout/scroll-column"
import type { Locale } from "@/lib/i18n/config"
import type { Dictionary, Project, ProjectHomeTile } from "@/lib/i18n/types"

type WorkColumnProps = {
  locale: Locale
  dictionary: Dictionary
}

function projectById(projects: Project[], id: string) {
  return projects.find((project) => project.id === id)
}

function ProjectBand({
  headingId,
  label,
  tiles,
  projects,
  locale,
}: {
  headingId: string
  label: string
  tiles: ProjectHomeTile[]
  projects: Project[]
  locale: Locale
}) {
  if (tiles.length === 0) {
    return null
  }

  return (
    <section aria-labelledby={headingId} className="flex flex-col gap-2">
      <h2
        id={headingId}
        className="px-0.5 text-sm font-medium tracking-wide text-muted-foreground uppercase"
      >
        {label}
      </h2>
      <ul className="grid list-none grid-flow-dense grid-cols-2 gap-1.5 p-0 auto-rows-[minmax(10rem,auto)] md:grid-cols-4 md:auto-rows-[minmax(10rem,1fr)]">
        {tiles.map((tile) => {
          const project = projectById(projects, tile.projectId)
          if (!project) {
            return null
          }

          return (
            <MosaicTile
              key={tile.id}
              locale={locale}
              project={project}
              category={label}
              span={tile.span}
            />
          )
        })}
      </ul>
    </section>
  )
}

export function WorkColumn({ locale, dictionary }: WorkColumnProps) {
  const { ui, work, maker, mosaic } = dictionary

  const workTiles = mosaic.work.filter(
    (tile): tile is ProjectHomeTile => tile.kind === "project"
  )
  const makerTiles = mosaic.maker.filter(
    (tile): tile is ProjectHomeTile => tile.kind === "project"
  )

  return (
    <ScrollColumn
      ariaLabel={ui.projectGallery}
      className="size-full md:h-dvh"
      contentClassName="flex size-full flex-col gap-6 p-2 md:pl-0"
    >
      <ProjectBand
        headingId="work-band"
        label={ui.work}
        tiles={workTiles}
        projects={work}
        locale={locale}
      />
      <ProjectBand
        headingId="maker-band"
        label={ui.maker}
        tiles={makerTiles}
        projects={maker}
        locale={locale}
      />
      <FunBento locale={locale} dictionary={dictionary} />
    </ScrollColumn>
  )
}
