"use client"

import { LanguageSwitcher } from "@/components/layout/language-switcher"
import { useDictionary } from "@/components/layout/language-provider"
import { SiteNav } from "@/components/layout/site-nav"
import { ProjectSection } from "@/components/portfolio/project-section"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import type { Project } from "@/lib/i18n/types"

function ProjectGroup({
  label,
  projects,
  visitLabel,
}: {
  label: string
  projects: Project[]
  visitLabel: string
}) {
  if (projects.length === 0) {
    return null
  }

  return (
    <div className="space-y-5">
      <p className="mx-auto max-w-3xl px-4 text-sm font-medium tracking-wide text-muted-foreground uppercase sm:px-6">
        {label}
      </p>
      <div className="space-y-16">
        {projects.map((project) => (
          <ProjectSection
            key={project.id}
            project={project}
            visitLabel={visitLabel}
          />
        ))}
      </div>
    </div>
  )
}

export function PortfolioLayout() {
  const dictionary = useDictionary()
  const { intro, ui, work, maker, fun } = dictionary

  return (
    <main className="flex min-h-dvh flex-col bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur-sm">
        <div className="mx-auto flex h-14 w-full max-w-3xl items-center justify-between px-4 sm:px-6">
          <SiteNav labels={ui.nav} />
          <LanguageSwitcher label={ui.language} />
        </div>
      </header>

      <div className="flex w-full flex-1 items-start justify-center overflow-x-clip pt-[4vh] lg:pt-[6vh]">
        <div className="w-full space-y-16 pb-24">
          <div className="mx-auto flex w-full max-w-3xl flex-col gap-6 px-4 sm:px-6">
            <Avatar className="size-20 rounded-full" size="lg">
              <AvatarImage
                src="/avatar.png"
                alt={intro.avatarAlt}
                className="rounded-full"
              />
              <AvatarFallback className="rounded-full text-lg">JB</AvatarFallback>
            </Avatar>
            <p className="max-w-xl text-2xl font-medium text-pretty text-muted-foreground">
              {intro.portfolioBio}
            </p>
          </div>

          <ProjectGroup
            label={ui.work}
            projects={work}
            visitLabel={ui.visitProject}
          />
          <ProjectGroup
            label={ui.maker}
            projects={maker}
            visitLabel={ui.visitProject}
          />
          <ProjectGroup
            label={ui.fun}
            projects={fun}
            visitLabel={ui.visitProject}
          />
        </div>
      </div>
    </main>
  )
}
