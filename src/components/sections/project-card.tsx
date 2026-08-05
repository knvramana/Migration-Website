import { TagRow } from "@/components/common/tag";
import type { Project } from "@/content/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group bg-card shadow-card hover:border-rail-teal hover:shadow-raised relative flex h-full flex-col rounded-xl border p-6 transition-[box-shadow,border-color] duration-200 md:p-8">
      <p className="text-rail-teal font-mono text-[0.7rem] tracking-[0.12em] uppercase">
        {project.domain}
      </p>

      <h3 className="mt-4 text-xl font-extrabold tracking-tight text-balance">
        {project.title}
      </h3>
      <p className="text-muted-foreground mt-1 text-sm">{project.subtitle}</p>
      <p className="text-muted-foreground mt-4 leading-relaxed text-pretty">
        {project.description}
      </p>

      <TagRow items={project.tags} className="mt-auto pt-6" />
    </article>
  );
}
