export const TIME_ZONE = "America/Sao_Paulo"

export type AvailabilityStatus = "available" | "around" | "offline"

/**
 * Rough "is João likely to answer" signal, derived from wall-clock time in
 * TIME_ZONE. Weekdays 9–18 count as available, evenings until 22 as around,
 * weekends as around only over the middle of the day.
 */
export function availabilityAt(date: Date): AvailabilityStatus {
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

export const availabilityDotClass: Record<AvailabilityStatus, string> = {
  available: "bg-emerald-500",
  around: "bg-amber-400",
  offline: "bg-muted-foreground/50",
}
