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

  return match(languages, locales, defaultLocale) as Locale
}

export async function getRequestLocale(): Promise<Locale> {
  const headerStore = await headers()
  return getLocaleFromAcceptLanguage(headerStore.get("accept-language"))
}
