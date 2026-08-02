import { Reveal } from "@/components/common/reveal";
import { Section } from "@/components/common/section";
import { ProjectCard } from "./project-card";
import { projects } from "@/content/projects";
import { cn } from "@/lib/utils";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected projects."
      lead="Academic and personal work in NLP, cloud applications, computer vision and algorithms research."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal
            key={project.title}
            delay={index * 70}
            className={cn("min-w-0", project.span)}
          >
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
