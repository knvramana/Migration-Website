import { Block } from "@/components/common/block";
import { experience } from "@/content/resume";

/**
 * One hairline-separated list, not four bordered cards.
 *
 * Bullets are capped at three per role and each one is a result, not a
 * responsibility — six identical dashes across four roles produced thirty
 * lines of undifferentiated grey that nobody read past item two.
 */
export function Experience() {
  return (
    <Block id="work" title="Work">
      <div className="rows">
        {experience.map((role) => (
          <article key={role.company} className="py-6 first:pt-0 last:pb-0">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <h3 className="text-foreground">
                {role.company}
                <span className="text-muted-foreground font-normal">
                  {" · "}
                  {role.title}
                </span>
              </h3>
              <time className="text-faint text-[0.8125rem] whitespace-nowrap">
                {role.period}
              </time>
            </div>

            <p className="text-muted-foreground mt-3">{role.summary}</p>

            <ul className="mt-4 grid gap-2">
              {role.highlights.slice(0, 3).map((item) => (
                <li
                  key={item}
                  className="text-faint relative pl-4 text-[0.9375rem]"
                >
                  <span
                    aria-hidden="true"
                    className="absolute top-[0.7em] left-0 h-px w-2 bg-current"
                  />
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-faint mt-4 font-mono text-[0.75rem]">
              {role.stack.join(" · ")}
            </p>
          </article>
        ))}
      </div>
    </Block>
  );
}
