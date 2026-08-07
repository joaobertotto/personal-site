"use client"

import { useEffect, useState } from "react"

import { FunTileShell } from "@/components/home/fun-tile-shell"
import { LocaleText } from "@/components/i18n/locale-text"
import type { Dictionary } from "@/content/types"
import { cn } from "@/lib/utils"

const TIME_ZONE = "America/Sao_Paulo"

type StatusLabels = Dictionary["ui"]["status"]

type StatusTileProps = {
  labels: StatusLabels
  span: string
}

type StatusKey = "available" | "around" | "offline"

function statusFromLocalTime(date: Date): StatusKey {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: TIME_ZONE,
    weekday: "short",
    hour: "numeric",
    hour12: false,
  }).formatToParts(date)

  const weekday = parts.find((part) => part.type === "weekday")?.value
  const hour = Number(parts.find((part) => part.type === "hour")?.value ?? "0")
  const isWeekend = weekday === "Sat" || weekday === "Sun"

  if (isWeekend) {
    return hour >= 11 && hour < 18 ? "around" : "offline"
  }

  if (hour >= 9 && hour < 18) {
    return "available"
  }

  if (hour >= 18 && hour < 22) {
    return "around"
  }

  return "offline"
}

export function StatusTile({ labels, span }: StatusTileProps) {
  const [status, setStatus] = useState<StatusKey>("offline")

  useEffect(() => {
    function update() {
      setStatus(statusFromLocalTime(new Date()))
    }

    update()
    const id = window.setInterval(update, 60_000)
    return () => window.clearInterval(id)
  }, [])

  const copy = labels[status]

  return (
    <FunTileShell span={span} label={labels.label}>
      <div className="flex items-center gap-2">
        <span
          aria-hidden
          className={cn(
            "size-2.5 rounded-full",
            status === "available" && "bg-emerald-500",
            status === "around" && "bg-amber-400",
            status === "offline" && "bg-muted-foreground/50"
          )}
        />
        <p className="text-lg font-medium tracking-tight">
          <LocaleText>{copy}</LocaleText>
        </p>
      </div>
    </FunTileShell>
  )
}
