import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

import { locales } from "@/lib/i18n/config"

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  const localeFromPath = locales.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (!localeFromPath) {
    return
  }

  const stripped = pathname.slice(`/${localeFromPath}`.length) || "/"
  const url = request.nextUrl.clone()
  url.pathname = stripped

  return NextResponse.redirect(url)
}

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
}
