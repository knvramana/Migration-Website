import { TagRow } from "@/components/common/tag";
import type { Project } from "@/content/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group bg-card shadow-card hover:border-rail-teal hover:shadow-raised relative flex h-full flex-col overflow-hidden rounded-xl border p-6 transition-[box-shadow,border-color] duration-200 md:p-8">
      {/* Oversized number as a watermark — decoration, so contrast is moot. */}
      <span
        aria-hidden="true"
        className="text-rail-teal/20 pointer-events-none absolute -top-2 right-4 font-mono text-7xl font-bold select-none md:text-8xl"
      >
        {project.number}
      </span>

      <div className="relative">
        <h3 className="text-xl font-extrabold tracking-tight text-balance">
          {project.title}
        </h3>
        <p className="text-brand-teal mt-1.5 font-mono text-xs tracking-tight">
          {project.subtitle}
        </p>
        <p className="text-muted-foreground mt-4 leading-relaxed text-pretty">
          {project.description}
        </p>
      </div>

      <TagRow items={project.tags} className="relative mt-auto pt-6" />
    </article>
  );
}
