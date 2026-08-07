"use client"

import { useEffect, useState } from "react"

import { useLocale } from "@/components/i18n/language-provider"
import { LocaleText } from "@/components/i18n/locale-text"
import type { Dictionary } from "@/content/types"
import { useAvailability } from "@/hooks/use-availability"
import { availabilityDotClass, TIME_ZONE } from "@/lib/availability"
import type { Locale } from "@/lib/i18n/config"
import { cn } from "@/lib/utils"

type AvailabilityBadgeProps = {
  labels: Dictionary["contactPage"]["availability"]
  statusLabels: Dictionary["ui"]["status"]
}

function formatLocalTime(locale: Locale) {
  return new Intl.DateTimeFormat(locale, {
    timeZone: TIME_ZONE,
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(new Date())
}

export function AvailabilityBadge({
  labels,
  statusLabels,
}: AvailabilityBadgeProps) {
  const { locale } = useLocale()
  const status = useAvailability()

  // Rendered client-side only: the server has no idea what time it is where
  // the visitor's clock would disagree, so hold a placeholder until mounted.
  const [localTime, setLocalTime] = useState<string | null>(null)

  useEffect(() => {
    function update() {
      setLocalTime(formatLocalTime(locale))
    }

    update()
    const id = window.setInterval(update, 30_000)
    return () => window.clearInterval(id)
  }, [locale])

  return (
    <div className="flex flex-col gap-2">
      <p className="text-sm text-muted-foreground">
        <LocaleText>{labels.label}</LocaleText>
      </p>
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-muted-foreground">
        <span className="flex items-center gap-2">
          <span
            aria-hidden
            className={cn(
              "size-2.5 rounded-full",
              availabilityDotClass[status]
            )}
          />
          <span className="font-medium text-foreground">
            <LocaleText>{statusLabels[status]}</LocaleText>
          </span>
        </span>
        <span>
          <span className="tabular-nums">{localTime ?? "--:--"}</span> ·{" "}
          <LocaleText>{labels.replyTime}</LocaleText>
        </span>
      </div>
    </div>
  )
}
