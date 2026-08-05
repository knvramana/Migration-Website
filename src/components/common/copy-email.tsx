"use client";

import { useState } from "react";
import { CheckIcon, CopyIcon } from "lucide-react";
import { toast } from "sonner";

import { site } from "@/content/site";

/** Secondary action beside the résumé button — same height, quieter fill. */
export function CopyEmail() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      toast.success("Email copied to clipboard");
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error(`Could not copy — the address is ${site.email}`);
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-white/25 px-4 text-sm font-medium text-white transition-colors duration-200 hover:border-white/45 hover:bg-white/10"
    >
      {copied ? (
        <CheckIcon className="size-4 shrink-0" aria-hidden="true" />
      ) : (
        <CopyIcon className="size-4 shrink-0" aria-hidden="true" />
      )}
      {copied ? "Copied" : "Copy email"}
    </button>
  );
}
