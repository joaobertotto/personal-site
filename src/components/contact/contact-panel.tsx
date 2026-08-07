"use client"

import { ContactForm } from "@/components/contact/contact-form"
import { ContactLinks } from "@/components/contact/contact-links"
import { useDictionary } from "@/components/i18n/language-provider"

export function ContactPanel() {
  const { contactPage } = useDictionary()

  return (
    <div className="mx-auto grid w-full max-w-3xl gap-10 px-4 pb-24 sm:px-6 md:grid-cols-[minmax(0,1fr)_15rem] md:gap-12">
      <ContactForm labels={contactPage.form} />
      <ContactLinks labels={contactPage.links} />
    </div>
  )
}
