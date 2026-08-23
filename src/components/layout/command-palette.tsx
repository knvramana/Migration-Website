"use client";

import { useCallback, useEffect } from "react";
import {
  CopyIcon,
  DownloadIcon,
  HashIcon,
  MailIcon,
  SunMoonIcon,
} from "lucide-react";
import { useTheme } from "next-themes";
import { toast } from "sonner";

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { GithubIcon, LinkedinIcon } from "@/components/common/brand-icons";
import { site } from "@/content/site";
import { useIsApplePlatform, useMounted } from "@/hooks/use-mounted";

export function CommandPalette({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      const isTyping =
        target instanceof HTMLElement &&
        (/^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName) ||
          target.isContentEditable);

      if (event.key === "k" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        onOpenChange(!open);
        return;
      }

      // "/" is a nice shortcut but must never hijack real typing.
      if (event.key === "/" && !isTyping && !open) {
        event.preventDefault();
        onOpenChange(true);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onOpenChange]);

  const run = useCallback(
    (action: () => void) => {
      onOpenChange(false);
      // Let the dialog close and restore focus before navigating.
      requestAnimationFrame(action);
    },
    [onOpenChange],
  );

  const goTo = (href: string) => {
    if (href.startsWith("#")) {
      document
        .querySelector(href)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.location.assign(href);
    }
  };

  return (
    <CommandDialog
      open={open}
      onOpenChange={onOpenChange}
      title="Command palette"
      description="Jump to a section or run an action"
    >
      <Command>
        <CommandInput placeholder="Jump to a section or run an action…" />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>

          <CommandGroup heading="Sections">
            {site.nav.map((item) => (
              <CommandItem
                key={item.href}
                value={`${item.label} ${item.href}`}
                onSelect={() => run(() => goTo(item.href))}
              >
                <HashIcon />
                {item.label}
              </CommandItem>
            ))}
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Actions">
            <CommandItem
              value="toggle theme dark light appearance"
              onSelect={() =>
                run(() => setTheme(resolvedTheme === "dark" ? "light" : "dark"))
              }
            >
              <SunMoonIcon />
              Toggle theme
            </CommandItem>
            <CommandItem
              value="copy email address"
              onSelect={() =>
                run(async () => {
                  try {
                    await navigator.clipboard.writeText(site.email);
                    toast.success("Email copied to clipboard");
                  } catch {
                    toast.error(
                      "Could not copy. The address is " + site.email,
                    );
                  }
                })
              }
            >
              <CopyIcon />
              Copy email address
            </CommandItem>
            <CommandItem
              value="email send message contact"
              onSelect={() => run(() => goTo(`mailto:${site.email}`))}
            >
              <MailIcon />
              Send an email
            </CommandItem>
            <CommandItem
              value="resume cv download pdf"
              onSelect={() =>
                run(() => window.open(site.resumeFile, "_blank", "noopener"))
              }
            >
              <DownloadIcon />
              Open résumé
            </CommandItem>
          </CommandGroup>

          <CommandSeparator />

          <CommandGroup heading="Elsewhere">
            <CommandItem
              value="github source code repositories"
              onSelect={() =>
                run(() =>
                  window.open(site.socials.github, "_blank", "noopener"),
                )
              }
            >
              <GithubIcon />
              GitHub
            </CommandItem>
            <CommandItem
              value="linkedin profile professional"
              onSelect={() =>
                run(() =>
                  window.open(site.socials.linkedin, "_blank", "noopener"),
                )
              }
            >
              <LinkedinIcon />
              LinkedIn
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>
    </CommandDialog>
  );
}

/** Renders ⌘K on Apple platforms and Ctrl K everywhere else, after mount. */
export function useShortcutLabel() {
  const mounted = useMounted();
  const isApple = useIsApplePlatform();

  if (!mounted) return null;
  return isApple ? "⌘K" : "Ctrl K";
}
