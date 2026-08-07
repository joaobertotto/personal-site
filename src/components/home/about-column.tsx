import { LanguageSwitcher } from "@/components/i18n/language-switcher"
import { LocaleText } from "@/components/i18n/locale-text"
import { ScrollColumn } from "@/components/layout/scroll-column"
import { SiteNav } from "@/components/layout/site-nav"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { contact } from "@/content/contact"
import type { Dictionary } from "@/content/types"

type AboutColumnProps = {
  dictionary: Dictionary
}

export function AboutColumn({ dictionary }: AboutColumnProps) {
  const { intro, about, experience, ui } = dictionary

  return (
    <ScrollColumn
      ariaLabel={ui.siteInfo}
      className="size-full md:h-dvh"
      contentClassName="flex w-full flex-col gap-10 px-6 py-10 md:pr-10 md:pl-8"
    >
      <div className="flex items-start justify-between gap-4">
        <SiteNav labels={ui.nav} />
        <LanguageSwitcher label={ui.language} />
      </div>

      <section id="intro" className="flex min-w-0 flex-col gap-4">
        <div className="flex items-center gap-3">
          <Avatar className="size-14 rounded-lg" size="lg">
            <AvatarImage
              src="/avatar.png"
              alt={intro.avatarAlt}
              className="rounded-lg"
            />
            <AvatarFallback className="rounded-lg">JB</AvatarFallback>
          </Avatar>
          <div className="flex min-w-0 flex-col">
            <h1 className="text-2xl font-medium tracking-tight">
              {intro.name}
            </h1>
            <p className="text-sm text-muted-foreground">
              <LocaleText>{intro.role}</LocaleText>
            </p>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">
          <LocaleText>{intro.location}</LocaleText>
        </p>
        <p className="max-w-md text-muted-foreground">
          <LocaleText>{intro.bio}</LocaleText>
        </p>
      </section>

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
