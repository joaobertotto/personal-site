import Link from "next/link"
import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

/**
 * Card chrome for the mosaic: at rest the media fills the tile edge to edge;
 * on hover or keyboard focus it insets slightly and a caption band resolves in
 * the gap along the bottom, inside the card's own bounds.
 *
 * Adapted from the showcase card on https://diip3sh.xyz (MIT — see CREDITS.md).
 * The original drives the inset with a Motion spring; this rebuild is pure CSS
 * against a `linear()` easing, so the tile ships no JavaScript at all — the
 * whole interaction is `group-hover` / `group-focus-visible`.
 *
 * Two constraints shaped the adaptation:
 *
 * 1. The resting state stays legible with no cover image, because screenshots
 *    land in `public/work/` over time. The original hides its title until
 *    hover, which would leave blank plates here.
 * 2. Only the padding of a contained subtree animates, so the per-frame layout
 *    work cannot escape the card.
 */

/** Gap opened around the media on reveal. */
const INSET = "3px"
/** Bottom gap — tall enough to seat the caption band. */
const BAND_HEIGHT = "2.5rem"

type InsetRevealTileProps = {
  href: string
  /** Grid span classes for the cell. */
  span: string
  /** Small label pinned top-left, visible at rest. */
  eyebrow: ReactNode
  /** Shown bottom-left at rest, and again in the band on reveal. */
  title: ReactNode
  /** Optional supporting line, resting state only. */
  caption?: ReactNode
  /** Trailing element in the caption band — an arrow, a count, anything. */
  bandTrailing?: ReactNode
  /** Media layer, rendered behind everything and clipped to the radius. */
  media?: ReactNode
  /** Whether to lay a legibility scrim over the media at rest. */
  scrim?: boolean
  ariaLabel?: string
  className?: string
}

export function InsetRevealTile({
  href,
  span,
  eyebrow,
  title,
  caption,
  bandTrailing,
  media,
  scrim = false,
  ariaLabel,
  className,
}: InsetRevealTileProps) {
  return (
    <li className={cn("min-h-40 list-none p-0.5", span, className)}>
      <Link
        href={href}
        aria-label={ariaLabel}
        className={cn(
          "group relative block h-full min-h-40 rounded-xl border border-transparent bg-secondary",
          "transition-[border-color,box-shadow] duration-320 ease-spring",
          // Raising the card lets its shadow sit over the neighbouring tiles
          // instead of being overlapped by them.
          "hover:z-20 hover:border-border hover:shadow-lg",
          "focus-visible:z-20 focus-visible:border-border focus-visible:shadow-lg",
          "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none",
          "motion-reduce:transition-none"
        )}
      >
        {/* Padding is the whole trick: it squeezes the media inward and opens
            the band's gap in one property. `contain` keeps the reflow local. */}
        <div
          className={cn(
            "h-full transition-[padding] duration-320 ease-spring [contain:layout]",
            "p-0 group-hover:[padding:var(--inset)_var(--inset)_var(--band)]",
            "group-focus-visible:[padding:var(--inset)_var(--inset)_var(--band)]",
            "motion-reduce:transition-none"
          )}
          style={
            {
              "--inset": INSET,
              "--band": BAND_HEIGHT,
            } as React.CSSProperties
          }
        >
          <div
            className={cn(
              "relative h-full overflow-hidden rounded-xl bg-muted",
              "transition-[border-radius] duration-320 ease-spring",
              "group-hover:rounded-md group-focus-visible:rounded-md",
              "motion-reduce:transition-none"
            )}
          >
            {media}

            {scrim ? (
              <div
                aria-hidden
                className="absolute inset-0 bg-linear-to-t from-background/80 via-background/20 to-transparent"
              />
            ) : null}

            {/* Resting content. Fades as the band takes over so the title does
                not read twice during the transition. */}
            <div
              className={cn(
                "relative z-10 flex h-full flex-col justify-between gap-3 p-3",
                "transition-opacity duration-200 ease-out",
                "group-hover:opacity-0 group-focus-visible:opacity-0",
                "motion-reduce:transition-none"
              )}
            >
              <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                {eyebrow}
              </p>
              <div className="flex flex-col gap-0.5">
                <p className="text-sm font-medium tracking-tight">{title}</p>
                {caption ? (
                  <p className="text-xs text-muted-foreground">{caption}</p>
                ) : null}
              </div>
            </div>
          </div>
        </div>

        {/* The band sits in the padding gap, so it is revealed rather than
            drawn on top of the media. */}
        <div
          aria-hidden
          className={cn(
            "pointer-events-none absolute inset-x-0 bottom-0 flex h-10 items-center justify-between gap-3 px-3.5",
            "translate-y-1 opacity-0 transition-[opacity,translate] duration-320 ease-spring",
            "group-hover:translate-y-0 group-hover:opacity-100",
            "group-focus-visible:translate-y-0 group-focus-visible:opacity-100",
            "motion-reduce:transition-none"
          )}
        >
          <span className="min-w-0 truncate text-xs font-medium tracking-tight">
            {title}
          </span>
          {bandTrailing ? (
            <span className="flex shrink-0 items-center text-muted-foreground">
              {bandTrailing}
            </span>
          ) : null}
        </div>
      </Link>
    </li>
  )
}
