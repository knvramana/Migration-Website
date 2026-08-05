import { TagRow } from "@/components/common/tag";
import type { Role } from "@/content/resume";

export function ExperienceCard({ role }: { role: Role }) {
  return (
    <article className="border-border border-t py-8 first:border-t-0 first:pt-0 md:py-10">
      <div className="grid gap-6 lg:grid-cols-12 lg:gap-10">
        <header className="lg:col-span-4">
          <h3 className="text-lg font-extrabold tracking-tight">
            {role.company}
          </h3>
          <p className="text-brand mt-1.5 font-semibold">{role.title}</p>
          {role.team ? (
            <p className="text-muted-foreground mt-1 text-sm">{role.team}</p>
          ) : null}
          <p className="text-muted-foreground mt-4 font-mono text-xs tracking-tight">
            {role.period}
          </p>
          <p className="text-muted-foreground font-mono text-xs tracking-tight">
            {role.location}
          </p>
        </header>

        <div className="lg:col-span-8">
          <p className="leading-relaxed text-pretty">{role.summary}</p>

          <ul className="mt-6 grid gap-2.5">
            {role.highlights.map((item) => (
              <li
                key={item}
                className="text-muted-foreground relative pl-5 leading-relaxed"
              >
                <span
                  aria-hidden="true"
                  className="bg-foreground/30 absolute top-2.5 left-0 size-1 rounded-full"
                />
                {item}
              </li>
            ))}
          </ul>

          <TagRow items={role.stack} className="mt-7" />
        </div>
      </div>
    </article>
  );
}
