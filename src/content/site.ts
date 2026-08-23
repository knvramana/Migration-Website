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
   * Preview and Development — a wrong value here silently poisons
   * metadataBase, canonicals, the sitemap and every OG image URL.
   */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://ramanakoduri.vercel.app",

  /**
   * Kept under 160 characters: Google truncates the snippet around there,
   * and this string is also the og:description and the JSON-LD description.
   */
  description:
    "Full-stack developer at IBM Canada. I build and debug enterprise Engineering Lifecycle Management systems: REST/OSLC services, Java and Python, React.",

  shortDescription:
    "Full-stack engineer shipping enterprise systems at IBM Canada.",

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
