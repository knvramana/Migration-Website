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

  /** Order matches the page. Education is on the page but not in the nav —
      six items is the most the pill bar holds without wrapping. */
  nav: [
    { label: "Agentic AI", href: "#agentic" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],

  availability: {
    open: true,
    text: "Open to Application Developer and AI Engineer roles",
  },

  /**
   * The compact tool call shown in the hero. Static and server-rendered — the
   * animated version lives in the Agentic AI section, and one orchestrated
   * moment beats two competing ones.
   */
  heroTrace: {
    server: "mcp · rmm-tools",
    rows: [
      {
        key: "ask",
        value: '"Which requirements changed since the 7.0.3 baseline?"',
      },
      {
        key: "call",
        value: 'rmm.query_requirements({ configuration: "7.0.3" })',
      },
      { key: "ground", value: "24 changed · 5 with no linked test case" },
    ],
  },
} as const;

export type Site = typeof site;
