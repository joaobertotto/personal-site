import type { ReactNode } from "react"

import { LocaleText } from "@/components/i18n/locale-text"
import { cn } from "@/lib/utils"

type FunTileShellProps = {
  span: string
  label: string
  children: ReactNode
  className?: string
  as?: "div" | "button"
  onClick?: () => void
  ariaLabel?: string
  /** Ambient layer rendered behind the content, clipped to the tile radius. */
  backdrop?: ReactNode
}

export function FunTileShell({
  span,
  label,
  children,
  className,
  as = "div",
  onClick,
  ariaLabel,
  backdrop,
}: FunTileShellProps) {
  const sharedClassName = cn(
    "relative flex h-full min-h-40 w-full flex-col justify-between gap-3 overflow-hidden rounded-xl bg-muted/80 p-3 text-left",
    as === "button" &&
      "cursor-pointer transition-[filter] outline-none hover:brightness-[0.97] focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    className
  )

  const content = (
    <>
      {backdrop}
      <p className="relative text-xs font-medium tracking-wide text-muted-foreground uppercase">
        <LocaleText>{label}</LocaleText>
      </p>
      <div className="relative">{children}</div>
    </>
  )

  return (
    <li className={cn("min-h-40 list-none p-0.5", span)}>
      {as === "button" ? (
        <button
          type="button"
          onClick={onClick}
          aria-label={ariaLabel}
          className={sharedClassName}
        >
          {content}
        </button>
      ) : (
        <div className={sharedClassName}>{content}</div>
      )}
    </li>
  )
}
