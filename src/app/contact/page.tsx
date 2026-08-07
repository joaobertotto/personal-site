import type { Metadata } from "next"

import { ContactPanel } from "@/components/contact/contact-panel"
import { getDictionary } from "@/lib/i18n/get-dictionary"
import { getRequestLocale } from "@/lib/i18n/get-locale"

export async function generateMetadata(): Promise<Metadata> {
  const dictionary = await getDictionary(await getRequestLocale())

  return {
    title: dictionary.meta.contact.title,
    description: dictionary.meta.contact.description,
  }
}

export default function ContactPage() {
  return <ContactPanel />
}
