import { Block } from "@/components/common/block";
import { projects } from "@/content/projects";

const steps = [
  { key: "challenge", label: "Challenge" },
  { key: "approach", label: "Approach" },
  { key: "result", label: "Result" },
] as const;

/**
 * Challenge → approach → result, rather than a one-line description.
 * The framing is the point: it shows how a problem was reasoned about,
 * not just that a thing was built.
 */
export function Projects() {
  return (
    <Block
      id="projects"
      title="Selected Work"
      lead="Academic and personal projects, written up as problems rather than as feature lists."
    >
      <div className="grid gap-4">
        {projects.map((project) => (
          <article
            key={project.title}
            className="border-border bg-card rounded-xl border p-6 md:p-7"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-[1.0625rem] font-semibold tracking-tight">
                {project.title}
              </h3>
              <span className="text-faint font-mono text-[0.8125rem]">
                {project.year}
              </span>
            </div>
            <p className="text-accent-fg mt-1 text-[0.9375rem] font-medium">
              {project.domain}
            </p>

            <dl className="mt-5 grid gap-4">
              {steps.map(({ key, label }) => (
                <div
                  key={key}
                  className="grid gap-1 sm:grid-cols-[88px_1fr] sm:gap-4"
                >
                  <dt className="text-faint font-mono text-[0.6875rem] tracking-[0.1em] uppercase sm:pt-0.5">
                    {label}
                  </dt>
                  <dd className="text-muted-foreground text-[0.9375rem] leading-relaxed">
                    {project[key]}
                  </dd>
                </div>
              ))}
            </dl>

            <ul className="mt-5 flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <li
                  key={tag}
                  className="bg-secondary text-muted-foreground rounded-md px-2 py-1 font-mono text-[0.6875rem]"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Block>
  );
}
