import { LocaleText } from "@/components/i18n/locale-text"
import { contact } from "@/content/contact"
import type { Dictionary } from "@/content/types"

type ContactLinksProps = {
  labels: Dictionary["contactPage"]["links"]
}

type ContactLink = {
  key: string
  label: string
  value: string
  href: string
  external: boolean
}

function buildLinks(labels: ContactLinksProps["labels"]): ContactLink[] {
  const links: ContactLink[] = [
    {
      key: "email",
      label: labels.email,
      value: contact.email,
      href: `mailto:${contact.email}`,
      external: false,
    },
    {
      key: "github",
      label: labels.github,
      value: `github.com/${contact.github}`,
      href: `https://github.com/${contact.github}`,
      external: true,
    },
  ]

  // Omitted entirely until a handle is filled in, rather than linking to a 404.
  if (contact.linkedin) {
    links.push({
      key: "linkedin",
      label: labels.linkedin,
      value: `linkedin.com/in/${contact.linkedin}`,
      href: `https://www.linkedin.com/in/${contact.linkedin}`,
      external: true,
    })
  }

  return links
}

export function ContactLinks({ labels }: ContactLinksProps) {
  const links = buildLinks(labels)

  return (
    <section
      aria-labelledby="contact-links-heading"
      className="flex flex-col gap-3"
    >
      <h2 id="contact-links-heading" className="text-sm text-muted-foreground">
        <LocaleText>{labels.label}</LocaleText>
      </h2>
      <ul className="flex list-none flex-col gap-2 p-0">
        {links.map((link) => (
          <li key={link.key}>
            <a
              href={link.href}
              {...(link.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="group flex items-baseline gap-3 rounded-lg py-1 underline-offset-4 outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <span className="w-20 shrink-0 text-sm text-muted-foreground">
                <LocaleText>{link.label}</LocaleText>
              </span>
              <span className="min-w-0 break-all group-hover:underline">
                {link.value}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
