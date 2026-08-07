"use client"

import { AboutColumn } from "@/components/portfolio/about-column"
import { WorkColumn } from "@/components/home/work-column"
import { useDictionary } from "@/components/layout/language-provider"

export function HomeLayout() {
  const dictionary = useDictionary()

  return (
    <main className="min-h-dvh bg-background text-foreground md:h-dvh md:overflow-hidden">
      <div className="flex min-h-dvh flex-col md:h-full md:flex-row">
        <div className="w-full md:h-dvh md:w-1/2 lg:w-1/3">
          <AboutColumn dictionary={dictionary} />
        </div>
        <div className="w-full md:h-dvh md:w-1/2 lg:w-2/3">
          <WorkColumn dictionary={dictionary} />
        </div>
      </div>
    </main>
  )
}
