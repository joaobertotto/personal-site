"use client"

import { useSyncExternalStore } from "react"

import { availabilityAt, type AvailabilityStatus } from "@/lib/availability"

function subscribe(onStoreChange: () => void) {
  const id = window.setInterval(onStoreChange, 60_000)
  return () => window.clearInterval(id)
}

function getSnapshot(): AvailabilityStatus {
  return availabilityAt(new Date())
}

function getServerSnapshot(): AvailabilityStatus {
  return "offline"
}

/**
 * Current availability, refreshed every minute. Renders as "offline" on the
 * server and during hydration so markup matches, then settles on the real
 * value. Snapshots are plain strings, so React's identity check is stable.
 */
export function useAvailability(): AvailabilityStatus {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}
