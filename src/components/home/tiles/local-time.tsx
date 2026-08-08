"use client"

import { useEffect, useState } from "react"

import { FunTileShell } from "@/components/home/fun-tile-shell"
import { AnalogClock } from "@/components/home/tiles/analog-clock"
import { useLocale } from "@/components/i18n/language-provider"
import { LocaleText } from "@/components/i18n/locale-text"
import type { Dictionary } from "@/content/types"
import { TIME_ZONE } from "@/lib/availability"
import type { Locale } from "@/lib/i18n/config"

type LocalTimeLabels = Dictionary["ui"]["localTime"]

type LocalTimeTileProps = {
  labels: LocalTimeLabels
  span: string
}

type ClockParts = {
  time: string
  day: string
  hours: number
  minutes: number
  seconds: number
}

/**
 * The analog face needs numbers, not a formatted string, and they have to be
 * in `TIME_ZONE` rather than the visitor's — so the numeric values come from
 * `formatToParts` on the same formatter that produces the digits, instead of
 * from `date.getHours()`.
 */
function formatParts(date: Date, locale: Locale): ClockParts {
  const timeFormatter = new Intl.DateTimeFormat(locale, {
    timeZone: TIME_ZONE,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  })

  const parts = timeFormatter.formatToParts(date)

  const numeric = (type: Intl.DateTimeFormatPartTypes) =>
    Number(parts.find((part) => part.type === type)?.value ?? 0)

  const day = new Intl.DateTimeFormat(locale, {
    timeZone: TIME_ZONE,
    weekday: "short",
    month: "short",
    day: "numeric",
  }).format(date)

  return {
    time: timeFormatter.format(date),
    day,
    // `hour: "2-digit"` with hour12: false yields 24 rather than 0 in some
    // locales; the analog face wants 0–23.
    hours: numeric("hour") % 24,
    minutes: numeric("minute"),
    seconds: numeric("second"),
  }
}

export function LocalTimeTile({ labels, span }: LocalTimeTileProps) {
  const { locale } = useLocale()
  const [now, setNow] = useState<ClockParts | null>(null)

  useEffect(() => {
    function update() {
      setNow(formatParts(new Date(), locale))
    }

    update()
    const id = window.setInterval(update, 1000)
    return () => window.clearInterval(id)
  }, [locale])

  return (
    <FunTileShell
      span={span}
      label={labels.label}
      backdrop={
        now ? (
          <AnalogClock
            hours={now.hours}
            minutes={now.minutes}
            seconds={now.seconds}
          />
        ) : null
      }
    >
      <div className="flex flex-col gap-1">
        <p className="text-3xl font-medium tracking-tight tabular-nums">
          {now?.time ?? "--:--:--"}
        </p>
        <p className="text-sm text-muted-foreground">
          {now ? <LocaleText>{now.day}</LocaleText> : "—"}
        </p>
        <p className="text-xs text-muted-foreground">
          <LocaleText>{labels.timezone}</LocaleText>
        </p>
      </div>
    </FunTileShell>
  )
}
