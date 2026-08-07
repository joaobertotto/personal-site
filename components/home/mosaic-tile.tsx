import Image from "next/image"
import Link from "next/link"

import type { Locale } from "@/lib/i18n/config"
import type { Project } from "@/lib/i18n/types"
import { cn } from "@/lib/utils"

type MosaicTileProps = {
  locale: Locale
  project: Project
  category: string
  span: string
  className?: string
}

export function MosaicTile({
  locale,
  project,
  category,
  span,
  className,
}: MosaicTileProps) {
  const cover = project.images[0]
  const href = `/${locale}/portfolio#${project.id}`

  return (
    <li className={cn("min-h-40 list-none p-0.5", span, className)}>
      <Link
        href={href}
        className="group relative flex h-full min-h-40 flex-col overflow-hidden rounded-xl bg-muted outline-none transition-[filter] duration-300 hover:brightness-[0.97] focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        {cover?.src ? (
          <Image
            src={cover.src}
            alt={cover.alt}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 50vw, 25vw"
          />
        ) : null}

        <div
          className={cn(
            "relative z-10 flex h-full flex-col justify-between gap-3 p-3",
            cover?.src && "bg-linear-to-t from-background/80 via-background/20 to-transparent"
          )}
        >
          <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
            {category}
          </p>
          <div className="flex flex-col gap-0.5">
            <p className="text-sm font-medium tracking-tight">{project.title}</p>
            {cover?.caption ? (
              <p className="text-xs text-muted-foreground">{cover.caption}</p>
            ) : null}
          </div>
        </div>
      </Link>
    </li>
  )
}
