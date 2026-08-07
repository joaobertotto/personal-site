"use client"

import { WorkColumn } from "@/components/home/work-column"
import { useDictionary } from "@/components/i18n/language-provider"

export function HomeProjects() {
  const dictionary = useDictionary()

  return <WorkColumn dictionary={dictionary} />
}
