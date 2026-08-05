import { Block } from "@/components/common/block";
import { skillGroups } from "@/content/resume";

/**
 * Grouped by domain with a context line each. No icons in coloured squares,
 * no "featured" cell — the grouping and the sentence carry it.
 */
export function Skills() {
  return (
    <Block
      id="skills"
      title="Technical Skills"
      lead="Grouped by what I actually use them for, rather than as a flat inventory."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="border-border bg-card rounded-xl border p-5"
          >
            <h3 className="font-semibold tracking-tight">{group.title}</h3>
            <p className="text-faint mt-1.5 text-[0.875rem] leading-snug">
              {group.context}
            </p>
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="bg-secondary text-muted-foreground rounded-md px-2 py-1 font-mono text-[0.6875rem]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Block>
  );
}
