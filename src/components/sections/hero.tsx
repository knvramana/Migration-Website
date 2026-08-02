import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, FileTextIcon, MailIcon } from "lucide-react";

import { GithubIcon, LinkedinIcon } from "@/components/common/brand-icons";
import { Button } from "@/components/ui/button";
import { site } from "@/content/site";

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
        quality={70}
        aria-hidden="true"
        className="-z-20 object-cover"
      />

      {/* Legacy left-to-right scrim, so left-aligned copy always clears contrast. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,oklch(0.14_0.023_265/0.95)_0%,oklch(0.14_0.023_265/0.82)_45%,oklch(0.14_0.023_265/0.45)_100%)]"
      />
      {/* Ambient indigo glow — the one "modern dark" flourish. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(60rem_40rem_at_35%_40%,oklch(0.5051_0.2028_263.88/0.28),transparent_70%)]"
      />

      <div className="container-page relative grid gap-12 py-32 md:py-36 lg:grid-cols-12 lg:items-center lg:gap-8">
        <div className="lg:col-span-7">
          <p className="text-rail-teal font-mono text-xs font-semibold tracking-[0.2em] uppercase">
            {site.role}
          </p>

          <h1 className="mt-5 text-[clamp(2.75rem,7vw,5rem)] leading-[0.95] font-extrabold tracking-[-0.035em] text-balance text-white">
            {site.firstName}
            <br />
            {site.lastName}
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-pretty text-white/80 md:text-xl">
            I build enterprise systems that reach production at IBM — REST/OSLC
            services, backend workflows and React frontends — and the agentic AI
            layer on top of them, grounding LLMs in live product data through
            Model Context Protocol servers.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild size="lg" className="min-h-11">
              <Link href="#projects">
                View work
                <ArrowRightIcon className="size-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="min-h-11 border-white/30 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 hover:text-white"
            >
              <Link href={site.resumePath} target="_blank" rel="noopener">
                <FileTextIcon className="size-4" />
                Résumé
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="min-h-11 text-white hover:bg-white/10 hover:text-white"
            >
              <Link href={`mailto:${site.email}`}>
                <MailIcon className="size-4" />
                Email
              </Link>
            </Button>
          </div>

          <ul className="mt-9 flex items-center gap-2">
            {[
              {
                href: site.socials.github,
                label: "GitHub",
                Icon: GithubIcon,
              },
              {
                href: site.socials.linkedin,
                label: "LinkedIn",
                Icon: LinkedinIcon,
              },
            ].map(({ href, label, Icon }) => (
              <li key={label}>
                <Link
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex size-10 items-center justify-center rounded-lg border border-white/25 bg-white/10 text-white transition-colors duration-200 hover:border-white/50 hover:bg-white/20"
                >
                  <Icon className="size-4" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* The balanced full-stack + AI statement, in the first viewport. */}
        <ul className="grid gap-px overflow-hidden rounded-xl border border-white/15 bg-white/10 sm:grid-cols-3 lg:col-span-5 lg:grid-cols-1">
          {site.heroStats.map((stat) => (
            <li key={stat.value} className="bg-white/6 px-5 py-5 backdrop-blur">
              <p className="font-mono text-xl font-bold text-white">
                {stat.value}
              </p>
              <p className="mt-1 text-sm leading-snug text-white/70">
                {stat.label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
