"use client"

import type { ReactNode } from "react"

import { AboutColumn } from "@/components/home/about-column"
import { useDictionary } from "@/components/i18n/language-provider"

export default function HomeLayout({ children }: { children: ReactNode }) {
  const dictionary = useDictionary()

  return (
    <main className="min-h-dvh bg-background text-foreground md:h-dvh md:overflow-hidden">
      <div className="flex min-h-dvh flex-col md:h-full md:flex-row">
        <div className="w-full md:h-dvh md:w-1/2 lg:w-1/3">
          <AboutColumn dictionary={dictionary} />
        </div>
        <div className="w-full md:h-dvh md:w-1/2 lg:w-2/3">{children}</div>
      </div>
    </main>
  )
}
