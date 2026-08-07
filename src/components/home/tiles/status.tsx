"use client"

import { FunTileShell } from "@/components/home/fun-tile-shell"
import { LocaleText } from "@/components/i18n/locale-text"
import type { Dictionary } from "@/content/types"
import { useAvailability } from "@/hooks/use-availability"
import { availabilityDotClass } from "@/lib/availability"
import { cn } from "@/lib/utils"

type StatusLabels = Dictionary["ui"]["status"]

type StatusTileProps = {
  labels: StatusLabels
  span: string
}

export function StatusTile({ labels, span }: StatusTileProps) {
  const status = useAvailability()

  return (
    <FunTileShell span={span} label={labels.label}>
      <div className="flex items-center gap-2">
        <span
          aria-hidden
          className={cn("size-2.5 rounded-full", availabilityDotClass[status])}
        />
        <p className="text-lg font-medium tracking-tight">
          <LocaleText>{labels[status]}</LocaleText>
        </p>
      </div>
    </FunTileShell>
  )
}
