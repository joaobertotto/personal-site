"use client"

import type { ReactNode } from "react"

import { AvailabilityBadge } from "@/components/contact/availability-badge"
import { useDictionary } from "@/components/i18n/language-provider"
import { LocaleText } from "@/components/i18n/locale-text"
import { SiteHeader } from "@/components/layout/site-header"

export default function ContactLayout({ children }: { children: ReactNode }) {
  const { ui, contactPage } = useDictionary()

  return (
    <main className="flex min-h-dvh flex-col bg-background text-foreground">
      <SiteHeader />

      <div className="flex w-full flex-1 items-start justify-center overflow-x-clip pt-[4vh] lg:pt-[6vh]">
        <div className="w-full space-y-12">
          <div className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-4 sm:px-6">
            <h1 className="text-display text-4xl">
              <LocaleText>{contactPage.heading}</LocaleText>
            </h1>
            <p className="max-w-xl text-lg text-pretty text-muted-foreground">
              <LocaleText>{contactPage.body}</LocaleText>
            </p>
            <AvailabilityBadge
              labels={contactPage.availability}
              statusLabels={ui.status}
            />
          </div>

          {children}
        </div>
      </div>
    </main>
  )
}
