import Image from "next/image"

import { LocaleText } from "@/components/i18n/locale-text"
import type { Dictionary } from "@/content/types"
import { cn } from "@/lib/utils"

/** Porto Alegre — opens in Apple Maps */
const APPLE_MAPS_URL =
  "https://maps.apple.com/?ll=-30.0346,-51.2177&q=Porto%20Alegre&z=13"

type MapLabels = Dictionary["ui"]["map"]

type MapTileProps = {
  labels: MapLabels
  span: string
  className?: string
}

export function MapTile({ labels, span, className }: MapTileProps) {
  return (
    <li className={cn("min-h-40 list-none p-0.5", span, className)}>
      <a
        href={APPLE_MAPS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex h-full min-h-40 overflow-hidden rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        <Image
          src="/maps/porto-alegre.png"
          alt={labels.alt}
          fill
          className="scale-[1.15] object-cover saturate-150 transition-transform duration-500 group-hover:scale-[1.2]"
          sizes="(max-width: 768px) 50vw, 25vw"
        />

        <div className="absolute inset-0 bg-linear-to-t from-background/70 via-transparent to-transparent" />

        <span
          aria-hidden
          className="absolute top-1/2 left-1/2 z-10 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ff3b30] shadow-[0_0_0_3px_rgba(255,255,255,0.95),0_4px_12px_rgba(0,0,0,0.25)]"
        />

        <div className="relative z-10 mt-auto flex w-full flex-col gap-0.5 p-3">
          <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
            <LocaleText>{labels.label}</LocaleText>
          </p>
          <p className="text-sm font-medium tracking-tight">
            <LocaleText>{labels.place}</LocaleText>
          </p>
        </div>
      </a>
    </li>
  )
}
