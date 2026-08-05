import { certifications, education, experience } from "@/content/resume";
import { site } from "@/content/site";

const PERSON_ID = `${site.url}/#person`;
const WEBSITE_ID = `${site.url}/#website`;

export function personLd() {
  const current = experience[0];

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": PERSON_ID,
    name: site.name,
    url: site.url,
    image: `${site.url}/images/portrait.jpg`,
    jobTitle: `${current.title}, ${current.team}`,
    description: site.description,
    email: `mailto:${site.email}`,
    worksFor: {
      "@type": "Organization",
      name: current.company,
      url: "https://www.ibm.com",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Toronto",
      addressRegion: "ON",
      addressCountry: "CA",
    },
    alumniOf: education.map((entry) => ({
      "@type": "CollegeOrUniversity",
      name: entry.institution,
      address: {
        "@type": "PostalAddress",
        addressLocality: entry.location.split(",")[0]?.trim(),
        addressCountry: entry.location.split(",").pop()?.trim(),
      },
    })),
    hasCredential: certifications.map((cert) => ({
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "certificate",
      name: `${cert.name} (${cert.code})`,
      recognizedBy: { "@type": "Organization", name: cert.issuer },
    })),
    knowsAbout: [
      "Enterprise Software",
      "Distributed Systems",
      "Engineering Lifecycle Management",
      "OSLC",
      "REST APIs",
      "Spring Boot",
      "Django",
      "React",
      "Next.js",
      "Microservices",
      "Distributed Systems",
    ],
    sameAs: [site.socials.github, site.socials.linkedin],
  };
}

export function webSiteLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: site.url,
    name: `${site.name} — ${site.role}`,
    description: site.description,
    inLanguage: "en-CA",
    publisher: { "@id": PERSON_ID },
    about: { "@id": PERSON_ID },
  };
}
