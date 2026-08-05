import type { Metadata, Viewport } from "next";
import { Instrument_Sans, IBM_Plex_Mono, Newsreader } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { ThemeProvider } from "@/components/layout/theme-provider";
import { SiteShell } from "@/components/layout/site-shell";
import { JsonLd } from "@/components/common/json-ld";
import { personLd, webSiteLd } from "@/lib/jsonld";
import { site } from "@/content/site";

import "./globals.css";

/*
  Three families, three jobs.

  Instrument Sans carries everything. Inter plus shadcn's neutral defaults is
  the stack every scaffolded portfolio ships, so it actively signals template.
*/
const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

/*
  Newsreader italic, for exactly one clause in the opening paragraph. A single
  serif accent on an otherwise text-only page is the cheapest way to make it
  read as typeset rather than unstyled — 400 italic only, so it costs one file.
*/
const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
  variable: "--font-newsreader",
  display: "swap",
  preload: false,
});

/*
  IBM Plex Mono, cut back to tabular data and tech listings only — no longer
  decorating section labels. It is IBM's own typeface, which is an actual
  reason to choose it here.
*/
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-plex-mono",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "Ramana Koduri",
    "Software Developer",
    "Full-Stack Developer",
    "IBM ELM",
    "Engineering Lifecycle Management",
    "OSLC",
    "Java",
    "Spring Boot",
    "Django",
    "React",
    "Toronto",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.role}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description: site.shortDescription,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafb" },
    { media: "(prefers-color-scheme: dark)", color: "#121316" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    // suppressHydrationWarning is mandatory: next-themes mutates the class on
    // <html> before hydration. data-scroll-behavior replaces the automatic
    // smooth scrolling that Next 16 removed — without it every #anchor jumps.
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${instrumentSans.variable} ${newsreader.variable} ${plexMono.variable}`}
    >
      <body className="font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <a
            href="#main"
            className="bg-primary text-primary-foreground focus:ring-ring sr-only rounded-md px-4 py-2 text-sm font-medium focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-100 focus:ring-2"
          >
            Skip to content
          </a>
          <SiteShell>{children}</SiteShell>
        </ThemeProvider>
        <JsonLd data={personLd()} />
        <JsonLd data={webSiteLd()} />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
