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

  description:
    "Full-stack software developer at IBM Canada building and stabilising enterprise Engineering Lifecycle Management systems — REST/OSLC services, Java and Spring Boot backends, React and Django applications, and the release validation that gets fixes to customers.",

  shortDescription:
    "Full-stack engineer shipping enterprise systems at IBM Canada.",

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

  availability: {
    open: true,
    text: "Open to full-stack and application developer roles",
  },
} as const;

export type Site = typeof site;
