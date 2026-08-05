import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, FileTextIcon } from "lucide-react";

import { GithubIcon, LinkedinIcon } from "@/components/common/brand-icons";
import { PixelDesk } from "@/components/common/pixel-desk";
import { Button } from "@/components/ui/button";
import { site } from "@/content/site";

const socials = [
  { href: site.socials.github, label: "GitHub", Icon: GithubIcon },
  { href: site.socials.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
];

export function Greeting() {
  return (
    <section id="top" aria-label="Introduction" className="pt-28 pb-2 md:pt-32">
      {/*
        container-page is load-bearing. Every other block wraps its content in
        it; without it this section spanned the full viewport with no
        horizontal padding, so the sprite's card stretched edge to edge and
        read as a full-width colour band rather than a card.
      */}
      <div className="container-page">
        <div className="border-border bg-card shadow-card flex items-center justify-center rounded-xl border px-6 py-8">
          <PixelDesk className="text-foreground w-full max-w-[17rem]" />
        </div>

        <p className="bg-secondary/70 text-muted-foreground mt-6 rounded-lg px-4 py-2.5 text-center text-sm">
          Hello &mdash; I&rsquo;m a full-stack developer based in{" "}
          {site.location}.
        </p>

        {/*
        Name first in source order on every breakpoint. The previous
        flex-col-reverse put the portrait above the name on mobile.
      */}
        <div className="mt-10 flex flex-col items-center gap-6 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
          <div className="order-2 text-center sm:order-1 sm:text-left">
            <h1 className="font-display text-[clamp(2rem,5.5vw,2.75rem)] leading-[1.1] font-extrabold tracking-[-0.03em]">
              {site.firstName} {site.lastName}
            </h1>
            <p className="text-muted-foreground mt-2 text-[0.9375rem]">
              Software Developer
              <span className="text-faint">
                {" "}
                ( Enterprise Systems / Full-Stack )
              </span>
            </p>
          </div>

          <div className="border-border bg-card order-1 shrink-0 overflow-hidden rounded-full border-2 shadow-[0_2px_10px_oklch(0.2543_0.0125_78.05/0.14)] sm:order-2">
            <Image
              src="/images/portrait.jpg"
              alt="Portrait of Ramana Koduri"
              width={901}
              height={1309}
              sizes="112px"
              className="size-24 object-cover object-top sm:size-28"
              preload
            />
          </div>
        </div>

        <p className="text-muted-foreground mt-8 leading-relaxed text-pretty">
          I build and stabilise enterprise systems at IBM &mdash; REST/OSLC
          services, Java and Spring Boot backends, React and Dojo workflows, and
          the release validation that decides whether a fix reaches a customer.
          Four years across enterprise tooling, ed-tech, energy services and
          healthcare.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Button asChild className="min-h-10">
            <Link href="#work">
              My work
              <ArrowRightIcon className="size-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" className="min-h-10">
            {/* prefetch={false}: /resume redirects to a 231KB PDF. */}
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
                  className="border-border hover:border-foreground/30 hover:bg-secondary inline-flex size-10 items-center justify-center rounded-lg border transition-colors duration-200"
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
