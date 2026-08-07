"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import type { Locale } from "@/lib/i18n/config"
import { cn } from "@/lib/utils"

type SiteNavProps = {
  locale: Locale
  labels: {
    home: string
    portfolio: string
    label: string
  }
}

export function SiteNav({ locale, labels }: SiteNavProps) {
  const pathname = usePathname()
  const homeHref = `/${locale}`
  const portfolioHref = `/${locale}/portfolio`

  const links = [
    { href: homeHref, label: labels.home, exact: true },
    { href: portfolioHref, label: labels.portfolio, exact: false },
  ]

  return (
    <nav aria-label={labels.label} className="flex items-center gap-4">
      {links.map((link) => {
        const isActive = link.exact
          ? pathname === link.href
          : pathname === link.href || pathname.startsWith(`${link.href}/`)

        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "text-sm underline-offset-4 transition-colors hover:text-foreground",
              isActive
                ? "font-medium text-foreground"
                : "text-muted-foreground hover:underline"
            )}
          >
            {link.label}
          </Link>
        )
      })}
    </nav>
  )
}
