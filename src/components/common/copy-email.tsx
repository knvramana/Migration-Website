"use client";

import { useState } from "react";
import { CheckIcon, CopyIcon } from "lucide-react";
import { toast } from "sonner";

import { site } from "@/content/site";

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
      className="inline-flex min-h-11 items-center gap-2.5 rounded-lg border border-white/25 bg-white/10 px-4 font-mono text-sm text-white transition-colors duration-200 hover:border-white/50 hover:bg-white/20"
    >
      {copied ? (
        <CheckIcon className="size-4 shrink-0" aria-hidden="true" />
      ) : (
        <CopyIcon className="size-4 shrink-0" aria-hidden="true" />
      )}
      <span className="truncate">{site.email}</span>
      <span className="sr-only">
        {copied ? "Email copied" : "Copy email address to clipboard"}
      </span>
    </button>
  );
}
