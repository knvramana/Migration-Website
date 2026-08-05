import Link from "next/link";

import { site } from "@/content/site";
import { impact } from "@/content/resume";

const actions = [
  { label: "Email", href: `mailto:${site.email}`, solid: true },
  { label: "Résumé", href: site.resumePath, external: true },
  { label: "GitHub", href: site.socials.github, external: true },
  { label: "LinkedIn", href: site.socials.linkedin, external: true },
];

export function Intro() {
  return (
    <section id="top" className="pt-4 pb-14">
      <p className="text-accent-fg font-mono text-[0.8125rem] tracking-tight">
        <span className="text-faint">ramana@portfolio</span>:~$ whoami
      </p>

      <h1 className="mt-5 text-[clamp(2.5rem,6vw,3.75rem)] leading-[1.02] font-semibold tracking-[-0.035em]">
        Ramana Koduri
      </h1>

      <p className="text-accent-fg mt-4 text-lg font-medium">
        Software Developer, Enterprise Systems
      </p>

      <p className="text-muted-foreground mt-4 max-w-2xl text-[1.0625rem] leading-relaxed">
        Backend · Full-Stack · Distributed Systems — Java, Spring Boot, Python,
        React, REST/OSLC. Currently shipping production fixes for IBM
        Engineering Lifecycle Management.
      </p>

      <p className="text-faint mt-4 font-mono text-[0.8125rem]">
        {site.location}
      </p>

      <div className="mt-7 flex flex-wrap gap-2.5">
        {actions.map(({ label, href, solid, external }) => (
          <Link
            key={label}
            href={href}
            prefetch={href.startsWith("/") ? false : undefined}
            {...(external && href.startsWith("http")
              ? { target: "_blank", rel: "noopener noreferrer" }
              : external
                ? { target: "_blank", rel: "noopener" }
                : {})}
            className={
              solid
                ? "bg-foreground text-background inline-flex min-h-10 items-center rounded-lg px-4 text-sm font-medium transition-opacity hover:opacity-90"
                : "border-border bg-card hover:border-foreground/25 inline-flex min-h-10 items-center rounded-lg border px-4 text-sm font-medium transition-colors"
            }
          >
            {label}
          </Link>
        ))}
      </div>

      {/* Outcomes up front, where a recruiter is still reading. */}
      <dl className="border-border mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-xl border bg-[var(--border)] lg:grid-cols-4">
        {impact.map((item) => (
          <div key={item.label} className="bg-card p-5">
            <dt className="text-foreground text-2xl font-semibold tracking-tight tabular-nums">
              {item.value}
            </dt>
            <dd className="mt-1.5">
              <span className="block text-[0.9375rem] font-medium">
                {item.label}
              </span>
              <span className="text-faint mt-1 block text-[0.8125rem] leading-snug">
                {item.context}
              </span>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
