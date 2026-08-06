import { ScrollColumn } from "@/components/layout/scroll-column"

export function AboutColumn() {
  return (
    <ScrollColumn
      ariaLabel="Site information"
      className="size-full md:h-dvh"
      contentClassName="flex w-full flex-col gap-10 px-6 py-10 md:pr-10 md:pl-8"
    >
      <section id="intro" className="flex flex-col gap-3">
        <p className="text-sm text-muted-foreground">Intro</p>
        <h1 className="text-2xl font-medium tracking-tight">Your name</h1>
        <p className="max-w-md text-muted-foreground">
          Short bio and role go here. This left column holds identity, about,
          experience, and contact.
        </p>
      </section>

      <section id="about" className="flex flex-col gap-3">
        <p className="text-sm text-muted-foreground">About</p>
        <p className="max-w-md text-muted-foreground">
          Placeholder for about copy. Sections will stack and scroll
          independently from the right column on desktop.
        </p>
      </section>

      <section id="experience" className="flex flex-col gap-3">
        <p className="text-sm text-muted-foreground">Experience</p>
        <div className="flex flex-col gap-4 text-muted-foreground">
          <p>Role · Company · Dates</p>
          <p>Role · Company · Dates</p>
          <p>Role · Company · Dates</p>
        </div>
      </section>

      <section id="contact" className="flex flex-col gap-3 pb-10">
        <p className="text-sm text-muted-foreground">Contact</p>
        <p className="text-muted-foreground">email@example.com</p>
      </section>
    </ScrollColumn>
  )
}
