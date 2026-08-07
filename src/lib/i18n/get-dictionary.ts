import "server-only"

import type { Dictionary } from "@/content/types"
import type { Locale } from "@/lib/i18n/config"

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () =>
    import("@/content/dictionaries/en").then((module) => module.default),
  "pt-BR": () =>
    import("@/content/dictionaries/pt-BR").then((module) => module.default),
}

export const getDictionary = async (locale: Locale) => dictionaries[locale]()
