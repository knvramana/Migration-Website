import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
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

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
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
    { media: "(prefers-color-scheme: light)", color: "#f7f8fb" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0f18" },
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
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        {/* Reveal starts at opacity:0, so restore it when JS never runs. */}
        <noscript>
          <style>{`[data-reveal]{opacity:1 !important;translate:none !important}`}</style>
        </noscript>
      </head>
      <body className="font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
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
