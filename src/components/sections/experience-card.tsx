import { TagRow } from "@/components/common/tag";
import { groupLabels, type HighlightGroup, type Role } from "@/content/resume";
import { railBorder, textAccent } from "@/lib/accents";
import { cn } from "@/lib/utils";

export function ExperienceCard({ role }: { role: Role }) {
  // Preserve the order the groups first appear in, so "AI" leads for IBM.
  const groups = role.highlights.reduce<
    { group: HighlightGroup; items: string[] }[]
  >((acc, highlight) => {
    const existing = acc.find((entry) => entry.group === highlight.group);
    if (existing) existing.items.push(highlight.text);
    else acc.push({ group: highlight.group, items: [highlight.text] });
    return acc;
  }, []);

  return (
    <article
      className={cn(
        "bg-card shadow-card hover:shadow-raised rounded-xl border border-l-6 p-6 transition-shadow duration-200 md:p-8",
        railBorder[role.accent],
      )}
    >
      <div className="grid gap-6 lg:grid-cols-12 lg:gap-10">
        <header className="lg:col-span-4">
          <h3 className="text-xl font-extrabold tracking-tight">
            {role.company}
          </h3>
          <p className={cn("mt-1.5 font-semibold", textAccent[role.accent])}>
            {role.title}
          </p>
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
          <p className="text-foreground/85 leading-relaxed text-pretty">
            {role.summary}
          </p>

          {groups.map(({ group, items }) => (
            <section key={group} className="mt-7 first:mt-6">
              {group === "core" ? null : (
                <h4
                  className={cn(
                    "mb-3 font-mono text-[0.7rem] font-semibold tracking-[0.14em] uppercase",
                    textAccent[role.accent],
                  )}
                >
                  {groupLabels[group]}
                </h4>
              )}
              <ul className="grid gap-2.5">
                {items.map((item) => (
                  <li
                    key={item}
                    className="text-muted-foreground relative pl-5 leading-relaxed"
                  >
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute top-2.5 left-0 size-1.5 rounded-full",
                        textAccent[role.accent],
                        "bg-current",
                      )}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          ))}

          <TagRow items={role.stack} className="mt-7" />
        </div>
      </div>
    </article>
  );
}
