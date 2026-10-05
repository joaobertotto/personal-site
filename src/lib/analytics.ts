type UmamiEventData = Record<string, string | number | boolean>

declare global {
  interface Window {
    umami?: { track: (event: string, data?: UmamiEventData) => void }
  }
}

/**
 * Sends a custom Umami event. No-ops when the script isn't loaded (dev,
 * previews, ad blockers). Prefer `data-umami-event` attributes for plain
 * links and buttons; use this for events tied to logic rather than a click.
 */
export function track(event: string, data?: UmamiEventData) {
  window.umami?.track(event, data)
}
