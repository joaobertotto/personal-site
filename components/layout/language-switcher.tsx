"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { buttonVariants } from "@/components/ui/button"
import {
  localeLabels,
  locales,
  type Locale,
} from "@/lib/i18n/config"
import { cn } from "@/lib/utils"

type LanguageSwitcherProps = {
  locale: Locale
  label: string
}

function swapLocalePath(pathname: string, nextLocale: Locale) {
  const segments = pathname.split("/")
  segments[1] = nextLocale
  return segments.join("/") || `/${nextLocale}`
}

export function LanguageSwitcher({ locale, label }: LanguageSwitcherProps) {
  const pathname = usePathname()

  return (
    <div className="flex items-center gap-1" aria-label={label}>
      {locales.map((item) => {
        const isActive = item === locale

        return (
          <Link
            key={item}
            href={swapLocalePath(pathname, item)}
            hrefLang={item}
            lang={item}
            aria-current={isActive ? "true" : undefined}
            className={cn(
              buttonVariants({
                variant: isActive ? "secondary" : "ghost",
                size: "xs",
              }),
              !isActive && "text-muted-foreground"
            )}
          >
            {localeLabels[item]}
          </Link>
        )
      })}
    </div>
  )
}
