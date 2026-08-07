import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { PortfolioLayout } from "@/components/portfolio/layout"
import { isLocale } from "@/lib/i18n/config"
import { getDictionary } from "@/lib/i18n/dictionaries"

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/portfolio">): Promise<Metadata> {
  const { lang } = await params

  if (!isLocale(lang)) {
    return {}
  }

  const dictionary = await getDictionary(lang)

  return {
    title: dictionary.meta.portfolio.title,
    description: dictionary.meta.portfolio.description,
  }
}

export default async function PortfolioPage({
  params,
}: PageProps<"/[lang]/portfolio">) {
  const { lang } = await params

  if (!isLocale(lang)) {
    notFound()
  }

  const dictionary = await getDictionary(lang)

  return <PortfolioLayout locale={lang} dictionary={dictionary} />
}
