import { match } from "@formatjs/intl-localematcher"
import Negotiator from "negotiator"
import type { NextRequest } from "next/server"

import { defaultLocale, locales, type Locale } from "@/lib/i18n/config"

export function getLocaleFromRequest(request: NextRequest): Locale {
  const languages = new Negotiator({
    headers: {
      "accept-language": request.headers.get("accept-language") ?? undefined,
    },
  }).languages()

  return match(languages, locales, defaultLocale) as Locale
}
