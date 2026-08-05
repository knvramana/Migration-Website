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
import { Section } from "@/components/common/section";
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

export function Skills() {
  // Stagger outward from the middle of the grid, so the eye lands centre-first.
  const midpoint = (skillGroups.length - 1) / 2;

  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Two pillars, one stack."
      lead="The AI work is not a side interest bolted onto a backend résumé — it runs on the same services, data models and integration surfaces as everything else here."
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
              <div
                className={cn(
                  "bg-card shadow-card relative flex h-full flex-col overflow-hidden rounded-xl border p-6",
                  group.featured &&
                    "before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(28rem_18rem_at_15%_0%,var(--primary),transparent_70%)] before:opacity-[0.09]",
                )}
              >
                <div className="relative flex items-center gap-3">
                  <span
                    className={cn(
                      "inline-flex size-10 shrink-0 items-center justify-center rounded-lg",
                      group.featured
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-rail-indigo",
                    )}
                  >
                    <Icon className="size-5" />
                  </span>
                  <h3 className="text-base font-extrabold tracking-tight text-balance">
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
    </Section>
  );
}
