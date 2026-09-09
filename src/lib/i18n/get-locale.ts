import { match } from "@formatjs/intl-localematcher"
import Negotiator from "negotiator"
import { headers } from "next/headers"

import { defaultLocale, locales, type Locale } from "@/lib/i18n/config"

export function getLocaleFromAcceptLanguage(
  acceptLanguage: string | null | undefined
): Locale {
  const languages = new Negotiator({
    headers: {
      "accept-language": acceptLanguage ?? undefined,
    },
  }).languages()

  // Negotiator answers `["*"]` when the header is missing or wildcard-only,
  // and `match` throws a RangeError on it rather than falling back — which
  // 500s the page for curl, health checks, and any bot that omits the header.
  const candidates = languages.filter((language) => language !== "*")

  if (candidates.length === 0) {
    return defaultLocale
  }

  return match(candidates, locales, defaultLocale) as Locale
}

export async function getRequestLocale(): Promise<Locale> {
  const headerStore = await headers()
  return getLocaleFromAcceptLanguage(headerStore.get("accept-language"))
}
