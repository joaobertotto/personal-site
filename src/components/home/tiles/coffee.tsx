"use client"

import { useSyncExternalStore } from "react"

import { FunTileShell } from "@/components/home/fun-tile-shell"
import { LocaleText } from "@/components/i18n/locale-text"
import type { Dictionary } from "@/content/types"

const STORAGE_KEY = "personal-site:coffee-count"
const CHANGE_EVENT = "personal-site:coffee-count"

type CoffeeLabels = Dictionary["ui"]["coffee"]

type CoffeeTileProps = {
  labels: CoffeeLabels
  span: string
}

type CoffeeState = {
  date: string
  count: number
}

function todayKey() {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Sao_Paulo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date())
}

function readCount(): number {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) {
      return 0
    }

    const parsed = JSON.parse(raw) as CoffeeState
    if (parsed.date !== todayKey()) {
      return 0
    }

    return typeof parsed.count === "number" ? parsed.count : 0
  } catch {
    return 0
  }
}

function writeCount(count: number) {
  const payload: CoffeeState = { date: todayKey(), count }
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload))
  window.dispatchEvent(new Event(CHANGE_EVENT))
}

function subscribe(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange)
  window.addEventListener(CHANGE_EVENT, onStoreChange)
  return () => {
    window.removeEventListener("storage", onStoreChange)
    window.removeEventListener(CHANGE_EVENT, onStoreChange)
  }
}

export function CoffeeTile({ labels, span }: CoffeeTileProps) {
  const count = useSyncExternalStore(subscribe, readCount, () => 0)

  return (
    <FunTileShell
      span={span}
      label={labels.label}
      as="button"
      ariaLabel={labels.add}
      onClick={() => writeCount(count + 1)}
    >
      <div className="flex flex-col gap-1">
        <p className="text-3xl font-medium tracking-tight tabular-nums">
          {count}
        </p>
        <p className="text-sm text-muted-foreground">
          <LocaleText>{labels.unit}</LocaleText>
        </p>
      </div>
    </FunTileShell>
  )
}
