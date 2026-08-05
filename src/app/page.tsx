import { Intro } from "@/components/sections/intro";
import { Experience } from "@/components/sections/experience";
import { Stack } from "@/components/sections/stack";
import { Projects } from "@/components/sections/projects";
import { Education } from "@/components/sections/education";
import { Elsewhere } from "@/components/sections/elsewhere";

export default function Home() {
  return (
    <>
      <Intro />
      <Experience />
      <Stack />
      <Projects />
      <Education />
      <Elsewhere />
    </>
  );
}
