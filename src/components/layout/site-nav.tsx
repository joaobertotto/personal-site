"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { LocaleText } from "@/components/i18n/locale-text"
import { cn } from "@/lib/utils"

type SiteNavProps = {
  labels: {
    home: string
    portfolio: string
    label: string
  }
}

export function SiteNav({ labels }: SiteNavProps) {
  const pathname = usePathname()

  const links = [
    { href: "/", label: labels.home, exact: true },
    { href: "/portfolio", label: labels.portfolio, exact: false },
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
            <LocaleText>{link.label}</LocaleText>
          </Link>
        )
      })}
    </nav>
  )
}
