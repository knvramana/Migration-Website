import Image from "next/image";
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
      className="bg-hero text-hero-foreground relative isolate flex min-h-[88svh] items-center overflow-hidden"
    >
      <Image
        src="/images/hero.jpg"
        alt=""
        fill
        sizes="100vw"
        preload
        aria-hidden="true"
        className="-z-20 object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,oklch(0.14_0.023_265/0.96)_0%,oklch(0.14_0.023_265/0.86)_45%,oklch(0.14_0.023_265/0.55)_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(60rem_40rem_at_30%_35%,oklch(0.5051_0.2028_263.88/0.3),transparent_70%)]"
      />

      <div className="container-page relative grid gap-14 py-32 md:py-36 lg:grid-cols-12 lg:items-center lg:gap-10">
        <div className="lg:col-span-6">
          {site.availability.open ? (
            <p className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 py-1.5 pr-4 pl-3 font-mono text-xs text-white/85 backdrop-blur">
              <span
                aria-hidden="true"
                className="bg-hero-accent size-1.5 shrink-0 rounded-full"
              />
              {site.availability.text}
            </p>
          ) : null}

          <h1 className="text-[clamp(2.5rem,6.5vw,4.5rem)] leading-[0.95] font-extrabold tracking-[-0.035em] text-balance text-white">
            {site.firstName} {site.lastName}
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-white/80 md:text-xl">
            I build enterprise systems at IBM that reach production &mdash;
            REST/OSLC services, backend workflows, React frontends &mdash; and
            the agentic layer on top of them, so engineers can ask their tooling
            a question and get an answer grounded in live records.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild size="lg" className="min-h-11">
              <Link href="#agentic">
                See how it works
                <ArrowRightIcon className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="min-h-11 border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 hover:text-white"
            >
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
                    className="inline-flex size-11 items-center justify-center rounded-lg border border-white/25 bg-white/10 text-white transition-colors duration-200 hover:border-white/50 hover:bg-white/20"
                  >
                    <Icon className="size-4" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/*
          The thesis, stated as the artifact itself rather than as stat cards:
          a question, the tool call it produces, and the grounded result.
        */}
        <div className="lg:col-span-6 lg:pl-6">
          <figure className="overflow-hidden rounded-xl border border-white/15 bg-[oklch(0.14_0.023_265/0.72)] backdrop-blur-md">
            <figcaption className="flex items-center gap-2.5 border-b border-white/10 px-4 py-2.5">
              <span
                aria-hidden="true"
                className="bg-hero-accent size-1.5 shrink-0 rounded-full"
              />
              <span className="font-mono text-[0.7rem] tracking-tight text-white/60">
                {site.heroTrace.server}
              </span>
            </figcaption>
            <dl className="divide-y divide-white/8">
              {site.heroTrace.rows.map((row) => (
                <div
                  key={row.key}
                  className="grid grid-cols-[3.75rem_1fr] gap-3 px-4 py-3.5"
                >
                  <dt className="text-hero-accent font-mono text-[0.7rem] leading-6">
                    {row.key}
                  </dt>
                  <dd className="min-w-0 font-mono text-[0.78rem] leading-6 break-words text-white/85">
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
