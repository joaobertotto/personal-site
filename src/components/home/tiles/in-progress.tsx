import { FunTileShell } from "@/components/home/fun-tile-shell"
import { LocaleText } from "@/components/i18n/locale-text"
import type { Dictionary } from "@/content/types"

type InProgressLabels = Dictionary["ui"]["inProgress"]

type InProgressTileProps = {
  labels: InProgressLabels
  category: string
  span: string
}

export function InProgressTile({
  labels,
  category,
  span,
}: InProgressTileProps) {
  return (
    <FunTileShell span={span} label={category}>
      <div className="flex items-center gap-2">
        <span className="text-xl leading-none" aria-hidden>
          🚧
        </span>
        <p className="text-sm font-medium tracking-tight">
          <LocaleText>{labels.label}</LocaleText>
        </p>
      </div>
    </FunTileShell>
  )
}
