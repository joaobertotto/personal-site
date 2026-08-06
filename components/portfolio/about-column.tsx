import { LanguageSwitcher } from "@/components/layout/language-switcher"
import { ScrollColumn } from "@/components/layout/scroll-column"
import { contact } from "@/constants/contact"
import type { Locale } from "@/lib/i18n/config"
import type { Dictionary } from "@/lib/i18n/types"

type AboutColumnProps = {
  locale: Locale
  dictionary: Dictionary
}

export function AboutColumn({ locale, dictionary }: AboutColumnProps) {
  const { intro, about, experience, ui } = dictionary

  return (
    <ScrollColumn
      ariaLabel={ui.siteInfo}
      className="size-full md:h-dvh"
      contentClassName="flex w-full flex-col gap-10 px-6 py-10 md:pr-10 md:pl-8"
    >
      <div className="flex items-start justify-between gap-4">
        <section id="intro" className="flex min-w-0 flex-col gap-3">
          <p className="text-sm text-muted-foreground">{intro.role}</p>
          <h1 className="text-2xl font-medium tracking-tight">{intro.name}</h1>
          <p className="text-sm text-muted-foreground">{intro.location}</p>
          <p className="max-w-md text-muted-foreground">{intro.bio}</p>
        </section>
        <LanguageSwitcher locale={locale} label={ui.language} />
      </div>

      <section id="about" className="flex flex-col gap-3">
        <p className="text-sm text-muted-foreground">{about.heading}</p>
        <p className="max-w-md text-muted-foreground">{about.body}</p>
      </section>

      <section id="experience" className="flex flex-col gap-3">
        <p className="text-sm text-muted-foreground">{ui.experience}</p>
        <div className="flex flex-col gap-6">
          {experience.map((item) => (
            <div
              key={`${item.company}-${item.dates}`}
              className="flex max-w-md flex-col gap-1"
            >
              <p className="font-medium">
                {item.position} · {item.company}
              </p>
              <p className="text-sm text-muted-foreground">
                {item.dates}
                {item.location ? ` · ${item.location}` : null}
              </p>
              {item.description ? (
                <p className="text-muted-foreground">{item.description}</p>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="flex flex-col gap-3 pb-10">
        <p className="text-sm text-muted-foreground">{ui.contact}</p>
        <div className="flex flex-col gap-2 text-muted-foreground">
          <a
            href={`mailto:${contact.email}`}
            className="underline-offset-4 hover:underline"
          >
            {contact.email}
          </a>
          <a
            href={`https://github.com/${contact.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="underline-offset-4 hover:underline"
          >
            github.com/{contact.github}
          </a>
        </div>
      </section>
    </ScrollColumn>
  )
}
