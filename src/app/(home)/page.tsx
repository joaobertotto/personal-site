import type { Metadata } from "next"

import { HomeProjects } from "@/components/home/home-projects"
import { getDictionary } from "@/lib/i18n/get-dictionary"
import { getRequestLocale } from "@/lib/i18n/get-locale"

export async function generateMetadata(): Promise<Metadata> {
  const dictionary = await getDictionary(await getRequestLocale())

  return {
    title: dictionary.meta.home.title,
    description: dictionary.meta.home.description,
  }
}

export default function HomePage() {
  return <HomeProjects />
}
