import type { Metadata } from "next"

import { HomeProjects } from "@/components/home/home-projects"
import { getDictionary } from "@/lib/i18n/get-dictionary"
import { getRequestLocale } from "@/lib/i18n/get-locale"
import { buildPageMetadata } from "@/lib/seo/site"

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getRequestLocale()
  const dictionary = await getDictionary(locale)

  return buildPageMetadata({
    ...dictionary.meta.home,
    path: "/",
    locale,
  })
}

export default function HomePage() {
  return <HomeProjects />
}
