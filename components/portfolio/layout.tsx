import { AboutColumn } from "@/components/portfolio/about-column"
import { WorkColumn } from "@/components/portfolio/work-column"
import type { Locale } from "@/lib/i18n/config"
import type { Dictionary } from "@/lib/i18n/types"

type PortfolioLayoutProps = {
  locale: Locale
  dictionary: Dictionary
}

export function PortfolioLayout({ locale, dictionary }: PortfolioLayoutProps) {
  return (
    <main className="min-h-dvh bg-background text-foreground md:h-dvh md:overflow-hidden">
      <div className="flex min-h-dvh flex-col md:h-full md:flex-row">
        <div className="w-full md:h-dvh md:w-1/2 lg:w-1/3">
          <AboutColumn locale={locale} dictionary={dictionary} />
        </div>
        <div className="w-full md:h-dvh md:w-1/2 lg:w-2/3">
          <WorkColumn dictionary={dictionary} />
        </div>
      </div>
    </main>
  )
}
