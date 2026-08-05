import {
  BrainIcon,
  ChartNoAxesColumnIcon,
  CloudIcon,
  Code2Icon,
  DatabaseIcon,
  FlaskConicalIcon,
  LayoutGridIcon,
  NetworkIcon,
  ServerIcon,
  type LucideIcon,
} from "lucide-react";

import { Reveal } from "@/components/common/reveal";
import { Panel } from "@/components/common/panel";
import { Tag } from "@/components/common/tag";
import { skillGroups, type SkillIcon } from "@/content/resume";
import { cn } from "@/lib/utils";

const icons: Record<SkillIcon, LucideIcon> = {
  brain: BrainIcon,
  server: ServerIcon,
  layout: LayoutGridIcon,
  database: DatabaseIcon,
  cloud: CloudIcon,
  code: Code2Icon,
  flask: FlaskConicalIcon,
  network: NetworkIcon,
  chart: ChartNoAxesColumnIcon,
};

export function Capabilities() {
  // Stagger outward from the middle of the grid, so the eye lands centre-first.
  const midpoint = (skillGroups.length - 1) / 2;

  return (
    <Panel
      id="toolkit"
      kicker="Toolkit"
      title="The toolkit."
      lead="Grouped by what I actually use each one for, rather than as a flat inventory of names."
    >
      <div className="grid auto-rows-[minmax(0,auto)] grid-cols-1 gap-4 md:grid-cols-6 lg:grid-cols-12">
        {skillGroups.map((group, index) => {
          const Icon = icons[group.icon];
          const delay = Math.round(Math.abs(index - midpoint) * 55);

          return (
            <Reveal
              key={group.title}
              delay={delay}
              className={cn("min-w-0", group.span)}
            >
              <div className="bg-card shadow-card relative flex h-full flex-col overflow-hidden rounded-xl border p-6">
                <div className="relative flex items-center gap-3">
                  <Icon
                    className="text-muted-foreground size-[1.125rem] shrink-0"
                    aria-hidden="true"
                  />
                  <h3 className="text-base font-bold tracking-tight text-balance">
                    {group.title}
                  </h3>
                </div>

                <p className="text-muted-foreground relative mt-3 text-sm leading-relaxed text-pretty">
                  {group.context}
                </p>

                <ul className="relative mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item}>
                      <Tag>{item}</Tag>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Panel>
  );
}
