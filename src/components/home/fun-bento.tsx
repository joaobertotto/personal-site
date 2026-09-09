import { renderHomeTile } from "@/components/home/tile-registry"
import { LocaleText } from "@/components/i18n/locale-text"
import type { Dictionary } from "@/content/types"

type FunBentoProps = {
  dictionary: Dictionary
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
          renderHomeTile({
            tile,
            ui,
            projects: fun,
            category: ui.fun,
          })
        )}
      </ul>
    </section>
  )
}
