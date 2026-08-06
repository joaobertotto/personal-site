import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

import { locales } from "@/lib/i18n/config"
import { getLocaleFromRequest } from "@/lib/i18n/get-locale"

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) {
    return
  }

  const locale = getLocaleFromRequest(request)
  request.nextUrl.pathname = `/${locale}${pathname === "/" ? "" : pathname}`

  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
}
