import { Block } from "@/components/common/block";
import { experience } from "@/content/resume";

export function Experience() {
  return (
    <Block id="experience" title="Experience">
      <div className="grid gap-4">
        {experience.map((role) => (
          <article
            key={role.company}
            className="border-border bg-card rounded-xl border p-6 md:p-7"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-[1.0625rem] font-semibold tracking-tight">
                {role.title}
              </h3>
              <time className="text-faint font-mono text-[0.8125rem] whitespace-nowrap">
                {role.period}
              </time>
            </div>

            <p className="text-accent-fg mt-1 text-[0.9375rem] font-medium">
              {role.company}
              {role.team ? (
                <span className="text-faint font-normal">
                  {" · "}
                  {role.team}
                </span>
              ) : null}
            </p>

            <p className="text-muted-foreground mt-4 leading-relaxed">
              {role.summary}
            </p>

            <ul className="mt-4 grid gap-2.5">
              {role.highlights.map((item) => (
                <li
                  key={item}
                  className="text-muted-foreground relative pl-5 text-[0.9375rem] leading-relaxed"
                >
                  <span
                    aria-hidden="true"
                    className="bg-accent-fg/50 absolute top-[0.6em] left-0 h-1.5 w-1.5 rounded-full"
                  />
                  {item}
                </li>
              ))}
            </ul>

            <ul className="mt-5 flex flex-wrap gap-1.5">
              {role.stack.map((item) => (
                <li
                  key={item}
                  className="bg-secondary text-muted-foreground rounded-md px-2 py-1 font-mono text-[0.6875rem]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Block>
  );
}
