export const site = {
  name: "Ramana Koduri",
  firstName: "Ramana",
  lastName: "Koduri",
  role: "Full-Stack Software Developer",
  secondRole: "AI Application Engineering",
  tagline: "Full-Stack Software Developer · AI Application Engineering",
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

  description:
    "Full-stack software developer at IBM Canada building enterprise Engineering Lifecycle Management systems — REST/OSLC services, Spring Boot, Django and React — and agentic AI applications with Model Context Protocol servers and LLM tool calling.",

  shortDescription:
    "Full-stack engineer shipping enterprise systems at IBM and building agentic AI with MCP.",

  socials: {
    github: "https://github.com/knvramana",
    linkedin: "https://www.linkedin.com/in/ramanakoduri/",
  },

  nav: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ],

  /** Shown in the hero as mono chips — the "balanced full-stack + AI" statement. */
  heroStats: [
    { value: "4+", label: "Years building production software" },
    { value: "IBM ELM", label: "Enterprise platform, Fortune 500 users" },
    { value: "MCP", label: "Agentic AI prototypes on watsonx" },
  ],
} as const;

export type Site = typeof site;
