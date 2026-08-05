import { Block } from "@/components/common/block";
import { projects } from "@/content/projects";

/** Rows with a hover bleed, not a grid of bordered cards. */
export function Projects() {
  return (
    <Block id="projects" title="Projects">
      <div className="rows">
        {projects.map((project) => (
          <article key={project.title} className="py-5 first:pt-0 last:pb-0">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <h3 className="text-foreground">{project.title}</h3>
              <span className="text-faint text-[0.8125rem]">
                {project.domain}
              </span>
            </div>
            <p className="text-muted-foreground mt-2 text-[0.9375rem]">
              {project.description}
            </p>
            <p className="text-faint mt-3 font-mono text-[0.75rem]">
              {project.tags.join(" · ")}
            </p>
          </article>
        ))}
      </div>
    </Block>
  );
}
