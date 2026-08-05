import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="container-page flex min-h-[70svh] flex-col justify-center py-32">
      <p className="text-brand-teal font-mono text-xs tracking-[0.18em] uppercase">
        404
      </p>
      <h1 className="mt-4 max-w-2xl text-3xl leading-[1.08] font-extrabold tracking-[-0.02em] text-balance sm:text-4xl md:text-5xl">
        There is nothing at this address.
      </h1>
      <p className="text-muted-foreground mt-5 max-w-lg text-lg leading-relaxed text-pretty">
        The link is either out of date or was never right. Everything on this
        site lives on one page.
      </p>

      <div className="mt-9 flex flex-wrap gap-3">
        <Button asChild size="lg" className="min-h-11">
          <Link href="/">
            <ArrowLeftIcon className="size-4" />
            Back to the start
          </Link>
        </Button>
        <Button asChild size="lg" variant="outline" className="min-h-11">
          <Link href={site.resumePath} prefetch={false} target="_blank">
            R&eacute;sum&eacute;
          </Link>
        </Button>
      </div>
    </div>
  );
}
