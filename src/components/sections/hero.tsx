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
      className="relative isolate overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20"
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

      <div className="container-page max-w-3xl">
        <p className="text-brand font-mono text-xs tracking-[0.14em] uppercase">
          {site.role} · IBM Canada
        </p>

        <h1 className="mt-5 text-[clamp(2.25rem,5vw,3.25rem)] leading-[1.05] font-extrabold tracking-[-0.035em] text-balance">
          {site.firstName} {site.lastName}
        </h1>

        <p className="text-muted-foreground mt-6 max-w-2xl text-lg leading-relaxed text-pretty">
          I build and stabilise enterprise systems at IBM &mdash; REST/OSLC
          services, Java and Spring Boot backends, React and Dojo workflows, and
          the release validation that decides whether a fix reaches a customer.
          Four years across enterprise tooling, ed-tech, energy services and
          healthcare.
        </p>

        {site.availability.open ? (
          <p className="text-muted-foreground mt-6 inline-flex items-center gap-2.5 font-mono text-xs">
            <span
              aria-hidden="true"
              className="bg-foreground/40 size-1.5 shrink-0 rounded-full"
            />
            {site.availability.text}
          </p>
        ) : null}

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <Button asChild size="lg" className="min-h-11">
            <Link href="#experience">
              See the work
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
    </section>
  );
}
