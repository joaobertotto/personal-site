import "server-only"

import type { Locale } from "@/lib/i18n/config"
import type { Dictionary } from "@/lib/i18n/types"

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import("@/dictionaries/en").then((module) => module.default),
  "pt-BR": () =>
    import("@/dictionaries/pt-BR").then((module) => module.default),
}

export const getDictionary = async (locale: Locale) => dictionaries[locale]()
