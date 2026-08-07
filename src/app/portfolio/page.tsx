import type { Metadata } from "next"

import { PortfolioLayout } from "./layout"
import { getDictionary } from "@/lib/i18n/get-dictionary"
import { getRequestLocale } from "@/lib/i18n/get-locale"

export async function generateMetadata(): Promise<Metadata> {
  const dictionary = await getDictionary(await getRequestLocale())

  return {
    title: dictionary.meta.portfolio.title,
    description: dictionary.meta.portfolio.description,
  }
}

export default function PortfolioPage() {
  return <PortfolioLayout />
}
