import { ScrollColumn } from "@/components/layout/scroll-column"
import type { Dictionary } from "@/lib/i18n/types"
import { cn } from "@/lib/utils"

type WorkColumnProps = {
  dictionary: Dictionary
}

type BentoItem = {
  id: string
  className: string
}

const workItems: BentoItem[] = [
  { id: "work-1", className: "min-h-52 md:col-span-2 md:row-span-2 md:min-h-0" },
  { id: "work-2", className: "min-h-40 md:row-span-2 md:min-h-0" },
  { id: "work-3", className: "min-h-36 md:min-h-0" },
  { id: "work-4", className: "min-h-36 md:col-span-2 md:min-h-0" },
]

const funItems: BentoItem[] = [
  { id: "fun-1", className: "min-h-40 md:col-span-2 md:min-h-0" },
  { id: "fun-2", className: "min-h-36 md:row-span-2 md:min-h-0" },
  { id: "fun-3", className: "min-h-36 md:min-h-0" },
  { id: "fun-4", className: "min-h-36 md:min-h-0" },
]

function BentoSection({
  title,
  items,
  label,
}: {
  title: string
  items: BentoItem[]
  label: string
}) {
  return (
    <section aria-labelledby={title} className="flex w-full flex-col gap-4">
      <h2
        id={title}
        className="text-sm font-medium tracking-wide text-muted-foreground uppercase"
      >
        {label}
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:auto-rows-[minmax(9rem,1fr)] lg:auto-rows-[minmax(10rem,1fr)]">
        {items.map((item, index) => (
          <div
            key={item.id}
            className={cn(
              "flex items-end rounded-xl bg-muted p-4",
              item.className
            )}
          >
            <span className="text-sm text-muted-foreground">
              {label} {index + 1}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

export function WorkColumn({ dictionary }: WorkColumnProps) {
  const { ui } = dictionary

  return (
    <ScrollColumn
      ariaLabel={ui.projectGallery}
      className="size-full md:h-dvh"
      contentClassName="flex w-full flex-col gap-12 px-6 py-10 md:pr-8 md:pl-0"
    >
      <BentoSection title="work-section" items={workItems} label={ui.work} />
      <BentoSection title="fun-section" items={funItems} label={ui.fun} />
    </ScrollColumn>
  )
}
