import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

type FunTileShellProps = {
  span: string
  label: string
  children: ReactNode
  className?: string
  as?: "div" | "button"
  onClick?: () => void
  ariaLabel?: string
}

export function FunTileShell({
  span,
  label,
  children,
  className,
  as = "div",
  onClick,
  ariaLabel,
}: FunTileShellProps) {
  const sharedClassName = cn(
    "flex h-full min-h-40 w-full flex-col justify-between gap-3 rounded-xl bg-muted/80 p-3 text-left",
    as === "button" &&
      "cursor-pointer outline-none transition-[filter] hover:brightness-[0.97] focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    className
  )

  const content = (
    <>
      <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
        {label}
      </p>
      {children}
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
