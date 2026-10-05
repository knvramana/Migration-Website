import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

import { LinkedinIcon } from "@/components/common/brand-icons";
import { PixelDesk } from "@/components/common/pixel-desk";
import { TagRow } from "@/components/common/tag";
import { Button } from "@/components/ui/button";
import { heroStack } from "@/content/resume";
import { site } from "@/content/site";

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
        <div className="border-border bg-card shadow-card flex items-center justify-center rounded-xl border px-6 py-7">
          <PixelDesk className="text-foreground w-full max-w-[17rem]" />
        </div>

        <p className="bg-secondary/70 text-muted-foreground mt-6 rounded-lg px-4 py-2.5 text-sm">
          Hello, I&rsquo;m a full-stack developer based in {site.location}.
        </p>

        {/*
        Name first in source order on every breakpoint. The previous
        flex-col-reverse put the portrait above the name on mobile.
      */}
        <div className="mt-10 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
          <div className="order-2 sm:order-1">
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
          Most of my work starts as a defect report and ends as a shipped fix.
          At IBM I traced them across the full request path: REST/OSLC services,
          Java and Python backends, React and TypeScript workflows, and the
          regression tests that decide whether the fix reaches a customer.
        </p>

        <p className="text-muted-foreground mt-3 leading-relaxed text-pretty">
          Four years across enterprise tooling, ed-tech, energy services and
          healthcare.
        </p>

        {/* Same Tag treatment as the skills bento, so the hero introduces no
            new visual vocabulary. */}
        <TagRow items={heroStack} className="mt-6" />

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Button asChild className="min-h-10">
            <Link href="#work">
              My work
              <ArrowRightIcon className="size-4" />
            </Link>
          </Button>
          <Link
            href={site.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="border-border hover:border-foreground/30 hover:bg-secondary inline-flex size-10 items-center justify-center rounded-lg border transition-colors duration-200"
          >
            <LinkedinIcon className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
