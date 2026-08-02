"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { MenuIcon, SearchIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CommandPalette, useShortcutLabel } from "./command-palette";
import { ThemeToggle } from "./theme-toggle";
import { site } from "@/content/site";
import { useActiveSection } from "@/hooks/use-active-section";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const shortcut = useShortcutLabel();

  const sectionIds = useMemo(
    () => site.nav.map((item) => item.href.replace("#", "")),
    [],
  );
  const active = useActiveSection(sectionIds);

  return (
    <>
      <header className="fixed inset-x-0 top-3 z-50 md:top-4">
        <nav
          aria-label="Primary"
          className="border-border/60 bg-background/70 supports-[backdrop-filter]:bg-background/55 container-page flex min-h-14 items-center justify-between gap-3 rounded-xl border px-3 shadow-[0_12px_35px_oklch(0.246_0.03_259/0.12)] backdrop-blur-xl"
        >
          <Link
            href="#home"
            className="rounded-md px-1 text-sm font-extrabold tracking-tight whitespace-nowrap"
          >
            {site.name}
          </Link>

          <ul className="hidden items-center gap-0.5 lg:flex">
            {site.nav.map((item) => {
              const id = item.href.replace("#", "");
              const isActive = active === id;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive ? "location" : undefined}
                    className={cn(
                      "inline-flex min-h-9 items-center rounded-md px-3 text-sm font-semibold transition-colors duration-200",
                      isActive
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:bg-accent hover:text-foreground",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-1.5">
            {/* Visible affordance — a keyboard-only palette is undiscoverable. */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setPaletteOpen(true)}
              className="text-muted-foreground hidden h-9 gap-2 pr-1.5 pl-2.5 sm:inline-flex"
            >
              <SearchIcon className="size-3.5" />
              <span className="text-xs">Search</span>
              {/*
                aria-hidden keeps the accessible name exactly "Search". With
                the shortcut included, the visible text would no longer be
                contained in the accessible name and voice control ("click
                Search") would stop working.
              */}
              <kbd
                aria-hidden="true"
                className="bg-muted text-muted-foreground pointer-events-none inline-flex h-5 items-center rounded border px-1.5 font-mono text-[0.65rem] font-medium"
              >
                {shortcut ?? " "}
              </kbd>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="size-9 sm:hidden"
              onClick={() => setPaletteOpen(true)}
              aria-label="Open command palette"
            >
              <SearchIcon className="size-4" />
            </Button>

            <ThemeToggle />

            <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="size-9 lg:hidden"
                  aria-label="Open navigation menu"
                >
                  <MenuIcon className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72">
                <SheetHeader>
                  <SheetTitle className="text-left">Navigate</SheetTitle>
                </SheetHeader>
                <ul className="flex flex-col gap-1 px-4 pb-6">
                  {site.nav.map((item) => (
                    <li key={item.href}>
                      <SheetClose asChild>
                        <Link
                          href={item.href}
                          className="hover:bg-accent flex min-h-11 items-center rounded-md px-3 text-base font-semibold transition-colors"
                        >
                          {item.label}
                        </Link>
                      </SheetClose>
                    </li>
                  ))}
                </ul>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </header>

      <CommandPalette open={paletteOpen} onOpenChange={setPaletteOpen} />
    </>
  );
}
