import { Intro } from "@/components/sections/intro";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Education } from "@/components/sections/education";
import { Elsewhere } from "@/components/sections/elsewhere";

export default function Home() {
  return (
    <>
      <Intro />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Elsewhere />
    </>
  );
}
