import { LocaleText } from "@/components/i18n/locale-text"
import { ProjectSection } from "@/components/portfolio/project-section"
import type { Project } from "@/content/types"

type ProjectGroupProps = {
  label: string
  projects: Project[]
  visitLabel: string
}

export function ProjectGroup({
  label,
  projects,
  visitLabel,
}: ProjectGroupProps) {
  if (projects.length === 0) {
    return null
  }

  return (
    <div className="space-y-5">
      <p className="mx-auto max-w-3xl px-4 text-sm font-medium tracking-wide text-muted-foreground uppercase sm:px-6">
        <LocaleText>{label}</LocaleText>
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
