"use client"

import { useId, useState } from "react"

import { LocaleText } from "@/components/i18n/locale-text"
import { Button } from "@/components/ui/button"
import { contact } from "@/content/contact"
import type { Dictionary } from "@/content/types"

type ContactFormProps = {
  labels: Dictionary["contactPage"]["form"]
}

const fieldClassName =
  "w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"

/**
 * Composes a mailto: URL and hands off to the visitor's mail client. Nothing is
 * posted anywhere, so there is no server route, no secrets, and no spam surface.
 */
export function ContactForm({ labels }: ContactFormProps) {
  const subjectId = useId()
  const messageId = useId()
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const params = new URLSearchParams()
    if (subject.trim()) {
      params.set("subject", subject.trim())
    }
    if (message.trim()) {
      params.set("body", message.trim())
    }

    const query = params.toString()
    window.location.href = query
      ? `mailto:${contact.email}?${query}`
      : `mailto:${contact.email}`
  }

  return (
    <section
      aria-labelledby="contact-form-heading"
      className="flex flex-col gap-4"
    >
      <h2 id="contact-form-heading" className="text-sm text-muted-foreground">
        <LocaleText>{labels.heading}</LocaleText>
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor={subjectId} className="text-sm font-medium">
            <LocaleText>{labels.subject}</LocaleText>
          </label>
          <input
            id={subjectId}
            name="subject"
            type="text"
            value={subject}
            onChange={(event) => setSubject(event.target.value)}
            placeholder={labels.subjectPlaceholder}
            className={fieldClassName}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor={messageId} className="text-sm font-medium">
            <LocaleText>{labels.message}</LocaleText>
          </label>
          <textarea
            id={messageId}
            name="message"
            rows={6}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder={labels.messagePlaceholder}
            className={`${fieldClassName} resize-y`}
          />
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Button type="submit" size="lg">
            <LocaleText>{labels.send}</LocaleText>
          </Button>
          <p className="max-w-sm text-xs text-muted-foreground">
            <LocaleText>{labels.hint}</LocaleText>
          </p>
        </div>
      </form>
    </section>
  )
}
