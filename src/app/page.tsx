import { Hero } from "@/components/sections/hero";
import { Impact } from "@/components/sections/impact";
import { AgenticTrace } from "@/components/sections/agentic-trace";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Education } from "@/components/sections/education";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Impact />
      {/* The differentiator goes high — before the conventional résumé sections. */}
      <AgenticTrace />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </>
  );
}
