import { ScrollColumn } from "@/components/layout/scroll-column"
import { about } from "@/constants/about"
import { contact } from "@/constants/contact"
import { experience } from "@/constants/experience"
import { intro } from "@/constants/intro"

export function AboutColumn() {
  return (
    <ScrollColumn
      ariaLabel="Site information"
      className="size-full md:h-dvh"
      contentClassName="flex w-full flex-col gap-10 px-6 py-10 md:pr-10 md:pl-8"
    >
      <section id="intro" className="flex flex-col gap-3">
        <p className="text-sm text-muted-foreground">{intro.role}</p>
        <h1 className="text-2xl font-medium tracking-tight">{intro.name}</h1>
        <p className="text-sm text-muted-foreground">{intro.location}</p>
        <p className="max-w-md text-muted-foreground">{intro.bio}</p>
      </section>

      <section id="about" className="flex flex-col gap-3">
        <p className="text-sm text-muted-foreground">{about.heading}</p>
        <p className="max-w-md text-muted-foreground">{about.body}</p>
      </section>

      <section id="experience" className="flex flex-col gap-3">
        <p className="text-sm text-muted-foreground">Experience</p>
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
        <p className="text-sm text-muted-foreground">Contact</p>
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
