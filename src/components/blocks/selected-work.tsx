import { Reveal } from "@/components/common/reveal";
import { Panel } from "@/components/common/panel";
import { WorkEntry } from "./work-entry";
import { projects } from "@/content/projects";
import { cn } from "@/lib/utils";

export function SelectedWork() {
  return (
    <Panel
      id="builds"
      kicker="Builds"
      title="Things I&rsquo;ve built."
      lead="Academic and personal work in NLP, cloud applications, computer vision and algorithms research."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal
            key={project.title}
            delay={index * 70}
            className={cn("min-w-0", project.span)}
          >
            <WorkEntry project={project} />
          </Reveal>
        ))}
      </div>
    </Panel>
  );
}
