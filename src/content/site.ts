export const site = {
  name: "Ramana Koduri",
  firstName: "Ramana",
  lastName: "Koduri",
  role: "Software Developer",
  tagline: "Full-stack software developer, enterprise systems",
  location: "Toronto, Canada",
  email: "knvramana234@gmail.com",
  phone: "+1-514-586-9903",
  phoneDisplay: "(514) 586-9903",
  resumePath: "/resume",
  resumeFile: "/ramana-koduri-resume.pdf",

  /**
   * Canonical origin. Set NEXT_PUBLIC_SITE_URL in Vercel for Production,
   * Preview and Development; a wrong value here silently poisons
   * metadataBase, canonicals, the sitemap and every OG image URL.
   *
   * `||` and not `??`: an env var that exists but is empty is the usual
   * Vercel misconfiguration, and `??` only guards null/undefined. It let ""
   * reach new URL(site.url) in layout.tsx, which throws ERR_INVALID_URL at
   * module scope and fails the whole build on /_not-found.
   */
  url: process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://ramanakoduri.com",

  /**
   * Kept under 160 characters: Google truncates the snippet around there,
   * and this string is also the og:description and the JSON-LD description.
   */
  description:
    "Full-stack developer and former IBM Canada software developer. I build enterprise systems across REST/OSLC services, Java, Python and React.",

  shortDescription:
    "Full-stack engineer with experience building enterprise systems at IBM Canada.",

  socials: {
    github: "https://github.com/knvramana",
    linkedin: "https://www.linkedin.com/in/ramanakoduri/",
  },

  nav: [
    { label: "Work", href: "#work" },
    { label: "Bio", href: "#bio" },
    { label: "Toolkit", href: "#toolkit" },
    { label: "Builds", href: "#builds" },
    { label: "Studies", href: "#studies" },
    { label: "Say hello", href: "#hello" },
  ],

  availability: {
    open: true,
    text: "Open to full-stack and application developer roles, remote or relocation",
    /** Footer suffix. Kept separate from location, which reads as prose in the hero. */
    mobility: "open to remote or relocation",
  },
} as const;

export type Site = typeof site;
