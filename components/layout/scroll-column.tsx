import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

type ScrollColumnProps = {
  ariaLabel: string
  children: ReactNode
  className?: string
  contentClassName?: string
}

export function ScrollColumn({
  ariaLabel,
  children,
  className,
  contentClassName,
}: ScrollColumnProps) {
  return (
    <div
      role="region"
      aria-label={ariaLabel}
      tabIndex={0}
      className={cn(
        "relative no-scrollbar focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring md:overflow-y-auto",
        className
      )}
    >
      <div className={contentClassName}>{children}</div>
    </div>
  )
}
