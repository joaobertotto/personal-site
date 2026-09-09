import { FunBento } from "@/components/home/fun-bento"
import { renderHomeTile } from "@/components/home/tile-registry"
import { LocaleText } from "@/components/i18n/locale-text"
import { ScrollColumn } from "@/components/layout/scroll-column"
import type { Dictionary, HomeTile, Project } from "@/content/types"

type WorkColumnProps = {
  dictionary: Dictionary
}

/**
 * A titled band of the mosaic. Bands are tile-agnostic — the maker band mixes
 * project cards with widgets (the R2-D2 scene), and the work band happens to
 * hold only projects today. Which tiles appear is content, not layout, so it
 * lives in the dictionary's `mosaic` map.
 */
function MosaicBand({
  headingId,
  label,
  tiles,
  projects,
  ui,
}: {
  headingId: string
  label: string
  tiles: HomeTile[]
  projects: Project[]
  ui: Dictionary["ui"]
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
        <LocaleText>{label}</LocaleText>
      </h2>
      <ul className="grid list-none grid-flow-dense auto-rows-[minmax(10rem,auto)] grid-cols-2 gap-1.5 p-0 md:auto-rows-[minmax(10rem,1fr)] md:grid-cols-4">
        {tiles.map((tile) =>
          renderHomeTile({ tile, ui, projects, category: label })
        )}
      </ul>
    </section>
  )
}

export function WorkColumn({ dictionary }: WorkColumnProps) {
  const { ui, work, maker, mosaic } = dictionary

  return (
    <ScrollColumn
      ariaLabel={ui.projectGallery}
      className="size-full md:h-dvh"
      contentClassName="flex size-full flex-col gap-6 p-2 md:pl-0"
    >
      <MosaicBand
        headingId="work-band"
        label={ui.work}
        tiles={mosaic.work}
        projects={work}
        ui={ui}
      />
      <MosaicBand
        headingId="maker-band"
        label={ui.maker}
        tiles={mosaic.maker}
        projects={maker}
        ui={ui}
      />
      <FunBento dictionary={dictionary} />
    </ScrollColumn>
  )
}
