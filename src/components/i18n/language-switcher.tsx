"use client"

import { useLocale } from "@/components/i18n/language-provider"
import { buttonVariants } from "@/components/ui/button"
import { localeLabels, locales } from "@/lib/i18n/config"
import { cn } from "@/lib/utils"

type LanguageSwitcherProps = {
  label: string
}

export function LanguageSwitcher({ label }: LanguageSwitcherProps) {
  const { locale, setLocale } = useLocale()

  return (
    <div className="flex items-center gap-1" aria-label={label}>
      {locales.map((item) => {
        const isActive = item === locale

        return (
          <button
            key={item}
            type="button"
            lang={item}
            aria-current={isActive ? "true" : undefined}
            onClick={() => setLocale(item)}
            className={cn(
              buttonVariants({
                variant: isActive ? "secondary" : "ghost",
                size: "xs",
              }),
              !isActive && "text-muted-foreground"
            )}
          >
            {localeLabels[item]}
          </button>
        )
      })}
    </div>
  )
}
