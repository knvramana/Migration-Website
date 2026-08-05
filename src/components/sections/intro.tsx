import Link from "next/link";

import { site } from "@/content/site";

/**
 * Content starts immediately. No full-viewport banner, no stat band, no
 * portrait — the career lives in two sentences with the employers as links,
 * which is what leerob.com and thesephist.com both do.
 */
export function Intro() {
  return (
    <section id="top" className="block">
      <h1 className="text-foreground text-[1.75rem] leading-9 font-semibold tracking-[-0.02em]">
        {site.name}
      </h1>

      <p className="text-muted-foreground mt-6">
        Software developer at{" "}
        <span className="text-foreground font-medium">IBM Canada</span>, working
        on Engineering Lifecycle Management — the REST and OSLC services, the
        web workflows on top of them, and the release validation that decides
        whether a fix actually reaches a customer.
      </p>

      <p className="text-muted-foreground mt-7">
        Four years across enterprise tooling, ed-tech, energy services and
        healthcare. Most of what I do is{" "}
        <em className="font-serif text-[1.0625rem] italic">
          finding the defect three layers below where it surfaced
        </em>{" "}
        — and making sure the fix holds.
      </p>

      <p className="text-muted-foreground mt-7">
        Based in {site.location}.{" "}
        <Link href={`mailto:${site.email}`} className="link">
          {site.email}
        </Link>
      </p>
    </section>
  );
}
