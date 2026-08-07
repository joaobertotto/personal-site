"use client"

import * as React from "react"

import { isLocale, type Locale } from "@/lib/i18n/config"
import { LOCALE_STORAGE_KEY } from "@/lib/i18n/locale-storage"
import type { Dictionary } from "@/lib/i18n/types"

type LanguageContextValue = {
  locale: Locale
  dictionary: Dictionary
  setLocale: (locale: Locale) => void
}

const LanguageContext = React.createContext<LanguageContextValue | null>(null)

type LanguageProviderProps = {
  initialLocale: Locale
  dictionaries: Record<Locale, Dictionary>
  children: React.ReactNode
}

export function LanguageProvider({
  initialLocale,
  dictionaries,
  children,
}: LanguageProviderProps) {
  const [locale, setLocaleState] = React.useState(initialLocale)

  React.useEffect(() => {
    const stored = window.localStorage.getItem(LOCALE_STORAGE_KEY)

    if (stored && isLocale(stored)) {
      setLocaleState(stored)
    }
  }, [])

  React.useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  const setLocale = React.useEffectEvent((nextLocale: Locale) => {
    if (nextLocale === locale) {
      return
    }

    setLocaleState(nextLocale)
    document.documentElement.lang = nextLocale
    window.localStorage.setItem(LOCALE_STORAGE_KEY, nextLocale)
  })

  return (
    <LanguageContext.Provider
      value={{
        locale,
        dictionary: dictionaries[locale],
        setLocale,
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLocale() {
  const context = React.useContext(LanguageContext)

  if (!context) {
    throw new Error("useLocale must be used within a LanguageProvider")
  }

  return context
}

export function useDictionary() {
  return useLocale().dictionary
}
