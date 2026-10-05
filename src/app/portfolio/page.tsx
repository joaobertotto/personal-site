import type { Metadata } from "next"

import { ProjectGroups } from "@/components/portfolio/project-groups"
import { getDictionary } from "@/lib/i18n/get-dictionary"
import { getRequestLocale } from "@/lib/i18n/get-locale"
import { buildPageMetadata } from "@/lib/seo/site"

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale()
  const dictionary = await getDictionary(locale)

  return buildPageMetadata({
    ...dictionary.meta.portfolio,
    path: "/portfolio",
    locale,
  })
}

export default function PortfolioPage() {
  return <ProjectGroups />
}
