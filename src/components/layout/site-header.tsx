"use client"

import { useDictionary } from "@/components/i18n/language-provider"
import { LanguageSwitcher } from "@/components/i18n/language-switcher"
import { SiteNav } from "@/components/layout/site-nav"

/** Sticky header shared by the routes that use the centred single-column shell. */
export function SiteHeader() {
  const { ui } = useDictionary()

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex h-14 w-full max-w-3xl items-center justify-between px-4 sm:px-6">
        <SiteNav labels={ui.nav} />
        <LanguageSwitcher label={ui.language} />
      </div>
    </header>
  )
}
