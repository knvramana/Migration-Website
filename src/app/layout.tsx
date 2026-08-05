import type { Metadata, Viewport } from "next";
import { Instrument_Sans, IBM_Plex_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { ThemeProvider } from "@/components/layout/theme-provider";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { JsonLd } from "@/components/common/json-ld";
import { Toaster } from "@/components/ui/sonner";
import { personLd, webSiteLd } from "@/lib/jsonld";
import { site } from "@/content/site";

import "./globals.css";

/*
  Instrument Sans rather than Inter. Inter + shadcn's neutral defaults is the
  stack every scaffolded portfolio already ships, so it actively signals
  "template"; Instrument Sans is warmer, reads well at text sizes, and is
  OFL-licensed on Google Fonts.

  Variable, which measurement showed is also the smallest option — pinning
  static weights made the payload larger, because each static Latin instance
  carries its own full glyph set.
*/
const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

/*
  IBM Plex Mono carries the structural layer — section labels, metrics, tech
  chips, and the tool-call payloads. It is IBM's own typeface, which is a real
  reason to choose it here rather than an arbitrary one, and it is OFL.

  No preload: mono never appears in body copy, so it is not needed for first
  paint.
*/
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
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
    "Full-Stack Developer",
    "AI Application Engineer",
    "IBM ELM",
    "Engineering Lifecycle Management",
    "OSLC",
    "Model Context Protocol",
    "MCP",
    "Agentic AI",
    "watsonx",
    "Spring Boot",
    "Django",
    "React",
    "Next.js",
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
    { media: "(prefers-color-scheme: light)", color: "#fdfdfc" },
    { media: "(prefers-color-scheme: dark)", color: "#191816" },
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
      className={`${instrumentSans.variable} ${plexMono.variable}`}
    >
      <head>
        {/* Reveal starts at opacity:0, so restore it when JS never runs. */}
        <noscript>
          <style>{`[data-reveal]{opacity:1 !important;translate:none !important}`}</style>
        </noscript>
      </head>
      <body className="font-sans">
        {/*
          Light is the default rather than the system preference: the design
          is built light-first, with the hero and contact panels as dark
          anchors. Dark remains one click away and persists.
        */}
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <a
            href="#main"
            className="bg-primary text-primary-foreground focus:ring-ring sr-only rounded-md px-4 py-2 text-sm font-semibold focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-100 focus:ring-2"
          >
            Skip to content
          </a>
          <SiteHeader />
          <main id="main">{children}</main>
          <SiteFooter />
          <Toaster position="bottom-right" />
        </ThemeProvider>
        <JsonLd data={personLd()} />
        <JsonLd data={webSiteLd()} />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
