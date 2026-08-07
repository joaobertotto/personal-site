"use client"

import { useEffect, useState } from "react"

import { FunTileShell } from "@/components/home/fun-tile-shell"
import { useLocale } from "@/components/i18n/language-provider"
import { LocaleText } from "@/components/i18n/locale-text"
import type { Dictionary } from "@/content/types"
import type { Locale } from "@/lib/i18n/config"

const TIME_ZONE = "America/Sao_Paulo"

type LocalTimeLabels = Dictionary["ui"]["localTime"]

type LocalTimeCardProps = {
  labels: LocalTimeLabels
  span: string
}

type ClockParts = {
  time: string
  day: string
}

function formatParts(date: Date, locale: Locale): ClockParts {
  const time = new Intl.DateTimeFormat(locale, {
    timeZone: TIME_ZONE,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(date)

  const day = new Intl.DateTimeFormat(locale, {
    timeZone: TIME_ZONE,
    weekday: "short",
    month: "short",
    day: "numeric",
  }).format(date)

  return { time, day }
}

export function LocalTimeCard({ labels, span }: LocalTimeCardProps) {
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
    <FunTileShell span={span} label={labels.label}>
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
