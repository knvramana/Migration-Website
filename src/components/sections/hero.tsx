import Link from "next/link";
import { ArrowRightIcon, FileTextIcon } from "lucide-react";

import { GithubIcon, LinkedinIcon } from "@/components/common/brand-icons";
import { Button } from "@/components/ui/button";
import { site } from "@/content/site";

const socials = [
  { href: site.socials.github, label: "GitHub", Icon: GithubIcon },
  { href: site.socials.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
];

export function Hero() {
  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative isolate overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24"
    >
      {/*
        Replaces the dark stock photograph the legacy site used. A masked CSS
        drafting grid: no image request, no LCP cost, and the largest paint is
        now a text node.
      */}
      <div
        aria-hidden="true"
        data-print-hide=""
        className="dot-grid absolute inset-0 -z-10"
      />

      <div className="container-page grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-10">
        <div className="lg:col-span-6">
          <p className="text-muted-foreground font-mono text-xs tracking-[0.14em] uppercase">
            {site.role}
            <span className="text-rail-rust"> · IBM Canada</span>
          </p>

          <h1 className="mt-5 text-[clamp(2.25rem,5vw,3.5rem)] leading-[1.02] font-extrabold tracking-[-0.035em] text-balance">
            {site.firstName} {site.lastName}
          </h1>

          <p className="text-muted-foreground mt-6 max-w-xl text-lg leading-relaxed text-pretty">
            I build enterprise systems at IBM that reach production &mdash;
            REST/OSLC services, backend workflows, React frontends &mdash; and
            the agentic layer on top of them, so engineers can ask their tooling
            a question and get an answer grounded in live records.
          </p>

          {site.availability.open ? (
            <p className="text-muted-foreground mt-6 inline-flex items-center gap-2.5 font-mono text-xs">
              <span
                aria-hidden="true"
                className="bg-rail-teal size-1.5 shrink-0 rounded-full"
              />
              {site.availability.text}
            </p>
          ) : null}

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="min-h-11">
              <Link href="#agentic">
                See how it works
                <ArrowRightIcon className="size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="min-h-11">
              {/*
                prefetch={false} is load-bearing: /resume redirects to the PDF,
                so Next's viewport prefetch would download 231KB on every load.
              */}
              <Link
                href={site.resumePath}
                target="_blank"
                rel="noopener"
                prefetch={false}
              >
                <FileTextIcon className="size-4" />
                R&eacute;sum&eacute;
              </Link>
            </Button>
            <ul className="flex items-center gap-2">
              {socials.map(({ href, label, Icon }) => (
                <li key={label}>
                  <Link
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="border-border hover:border-foreground/30 hover:bg-secondary inline-flex size-11 items-center justify-center rounded-lg border transition-colors duration-200"
                  >
                    <Icon className="size-4" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/*
          The thesis stated as the artifact itself rather than as stat cards:
          a question, the tool call it produces, and the grounded result.
        */}
        <div className="lg:col-span-6 lg:pl-4">
          <figure className="border-border bg-card overflow-hidden rounded-xl border">
            <figcaption className="border-border bg-secondary/60 flex items-center gap-2.5 border-b px-4 py-2.5">
              <span
                aria-hidden="true"
                className="bg-rail-teal size-1.5 shrink-0 rounded-full"
              />
              <span className="text-muted-foreground font-mono text-[0.7rem] tracking-tight">
                {site.heroTrace.server}
              </span>
            </figcaption>
            <dl className="divide-border divide-y">
              {site.heroTrace.rows.map((row) => (
                <div
                  key={row.key}
                  className="grid grid-cols-[3.5rem_1fr] gap-3 px-4 py-3.5"
                >
                  <dt className="text-rail-rust font-mono text-[0.7rem] leading-6">
                    {row.key}
                  </dt>
                  <dd className="text-foreground/85 min-w-0 font-mono text-[0.78rem] leading-6 break-words">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>
          </figure>
        </div>
      </div>
    </section>
  );
}
