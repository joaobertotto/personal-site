"use client"

import { useEffect, useState } from "react"

import { LocaleText } from "@/components/layout/locale-text"
import type { Dictionary } from "@/lib/i18n/types"
import { cn } from "@/lib/utils"

/** Porto Alegre, Brazil */
const LAT = -30.0346
const LON = -51.2177

type WeatherLabels = Dictionary["ui"]["weather"]

type WeatherCardProps = {
  labels: WeatherLabels
  span: string
  className?: string
}

type WeatherState =
  | { status: "loading" }
  | { status: "error" }
  | { status: "ready"; temperature: number; code: number }

function conditionFromCode(
  code: number,
  conditions: WeatherLabels["conditions"]
): string {
  // WMO weather interpretation codes (Open-Meteo)
  if (code === 0) return conditions.clear
  if (code <= 3) return conditions.partlyCloudy
  if (code <= 48) return conditions.fog
  if (code <= 57) return conditions.drizzle
  if (code <= 67) return conditions.rain
  if (code <= 77) return conditions.snow
  if (code <= 82) return conditions.showers
  if (code <= 99) return conditions.thunderstorm
  return conditions.mixed
}

export function WeatherCard({ labels, span, className }: WeatherCardProps) {
  const [weather, setWeather] = useState<WeatherState>({ status: "loading" })

  useEffect(() => {
    let cancelled = false

    async function load() {
      try {
        const url = new URL("https://api.open-meteo.com/v1/forecast")
        url.searchParams.set("latitude", String(LAT))
        url.searchParams.set("longitude", String(LON))
        url.searchParams.set("current", "temperature_2m,weather_code")
        url.searchParams.set("timezone", "America/Sao_Paulo")

        const response = await fetch(url)
        if (!response.ok) {
          throw new Error("Weather request failed")
        }

        const data = (await response.json()) as {
          current?: { temperature_2m?: number; weather_code?: number }
        }

        const temperature = data.current?.temperature_2m
        const code = data.current?.weather_code

        if (
          typeof temperature !== "number" ||
          typeof code !== "number" ||
          cancelled
        ) {
          throw new Error("Invalid weather payload")
        }

        setWeather({ status: "ready", temperature, code })
      } catch {
        if (!cancelled) {
          setWeather({ status: "error" })
        }
      }
    }

    void load()

    return () => {
      cancelled = true
    }
  }, [])

  return (
    <li className={cn("min-h-40 list-none p-0.5", span, className)}>
      <div
        className="flex h-full min-h-40 flex-col justify-between gap-3 rounded-xl bg-muted/80 p-3"
        aria-live="polite"
      >
        <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
          <LocaleText>{labels.label}</LocaleText>
        </p>

        {weather.status === "loading" ? (
          <p className="text-sm text-muted-foreground">
            <LocaleText>{labels.loading}</LocaleText>
          </p>
        ) : null}

        {weather.status === "error" ? (
          <p className="text-sm text-muted-foreground">
            <LocaleText>{labels.error}</LocaleText>
          </p>
        ) : null}

        {weather.status === "ready" ? (
          <div className="flex flex-col gap-1">
            <p className="text-3xl font-medium tracking-tight tabular-nums">
              {Math.round(weather.temperature)}°
            </p>
            <p className="text-sm text-muted-foreground">
              <LocaleText>
                {conditionFromCode(weather.code, labels.conditions)}
              </LocaleText>
            </p>
            <p className="text-xs text-muted-foreground">
              <LocaleText>{labels.place}</LocaleText>
            </p>
          </div>
        ) : null}
      </div>
    </li>
  )
}
