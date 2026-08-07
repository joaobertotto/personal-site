"use client"

import type { ReactNode } from "react"

import { useDictionary } from "@/components/i18n/language-provider"
import { LocaleText } from "@/components/i18n/locale-text"
import { SiteHeader } from "@/components/layout/site-header"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function PortfolioLayout({ children }: { children: ReactNode }) {
  const { intro } = useDictionary()

  return (
    <main className="flex min-h-dvh flex-col bg-background text-foreground">
      <SiteHeader />

      <div className="flex w-full flex-1 items-start justify-center overflow-x-clip pt-[4vh] lg:pt-[6vh]">
        <div className="w-full space-y-16 pb-24">
          <div className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-4 sm:px-6">
            <Avatar className="size-20 rounded-full" size="lg">
              <AvatarImage
                src="/avatar.png"
                alt={intro.avatarAlt}
                className="rounded-full"
              />
              <AvatarFallback className="rounded-full text-lg">
                JB
              </AvatarFallback>
            </Avatar>
            <p className="max-w-xl text-2xl font-medium text-pretty text-muted-foreground">
              <LocaleText>{intro.portfolioBio}</LocaleText>
            </p>
          </div>

          {children}
        </div>
      </div>
    </main>
  )
}
