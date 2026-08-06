export const locales = ["en", "pt-BR"] as const

export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = "en"

export const localeLabels: Record<Locale, string> = {
  en: "EN",
  "pt-BR": "PT",
}

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale)
}
