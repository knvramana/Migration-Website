"use client";

import { useState } from "react";
import { CheckIcon, CopyIcon } from "lucide-react";
import { toast } from "sonner";

import { site } from "@/content/site";

/**
 * A quiet text action under the contact icons. Previously styled for the dark
 * contact panel — white text on a white border — which would have been
 * invisible now that the section sits on the paper background.
 */
export function CopyEmail() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      toast.success("Email copied to clipboard");
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error(`Could not copy. The address is ${site.email}`);
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      className="text-muted-foreground hover:text-brand inline-flex min-h-9 items-center gap-2 font-mono text-sm transition-colors duration-200"
    >
      {copied ? (
        <CheckIcon className="size-4 shrink-0" aria-hidden="true" />
      ) : (
        <CopyIcon className="size-4 shrink-0" aria-hidden="true" />
      )}
      {copied ? "Copied" : site.email}
    </button>
  );
}
