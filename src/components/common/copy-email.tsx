"use client";

import { useState } from "react";

import { site } from "@/content/site";

/** A text control. No icon in a rounded square. */
export function CopyEmail() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      className="text-faint hover:text-foreground text-[0.8125rem] transition-colors duration-150"
    >
      {copied ? "Copied" : "Copy email address"}
    </button>
  );
}
