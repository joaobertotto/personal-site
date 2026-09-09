"use client"

import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { useState } from "react"

import { InsetRevealTile } from "@/components/home/inset-reveal-tile"
import { LocaleText } from "@/components/i18n/locale-text"
import type { Project } from "@/content/types"

type MosaicTileProps = {
  project: Project
  category: string
  span: string
  className?: string
}

export function MosaicTile({
  project,
  category,
  span,
  className,
}: MosaicTileProps) {
  const cover = project.images[0]

  // Screenshots land in `public/work/` over time, so a tile may point at a
  // file that is not there yet. Dropping the image on error falls back to the
  // typographic card instead of a torn layout with a broken-image box.
  const [coverFailed, setCoverFailed] = useState(false)
  const showCover = Boolean(cover?.src) && !coverFailed

  return (
    <InsetRevealTile
      href={`/portfolio#${project.id}`}
      span={span}
      className={className}
      scrim={showCover}
      eyebrow={<LocaleText>{category}</LocaleText>}
      title={<LocaleText>{project.title}</LocaleText>}
      caption={cover?.caption ? <LocaleText>{cover.caption}</LocaleText> : null}
      bandTrailing={<ArrowUpRight className="size-3.5" aria-hidden />}
      media={
        showCover && cover?.src ? (
          <Image
            src={cover.src}
            alt={cover.alt}
            fill
            onError={() => setCoverFailed(true)}
            className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02] motion-reduce:transition-none"
            sizes="(max-width: 768px) 50vw, 25vw"
          />
        ) : null
      }
    />
  )
}
