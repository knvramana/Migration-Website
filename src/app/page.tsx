import { Greeting } from "@/components/blocks/greeting";
import { Outcomes } from "@/components/blocks/outcomes";
import { Career } from "@/components/blocks/career";
import { Bio } from "@/components/blocks/bio";
import { Capabilities } from "@/components/blocks/capabilities";
import { SelectedWork } from "@/components/blocks/selected-work";
import { Credentials } from "@/components/blocks/credentials";
import { ReachOut } from "@/components/blocks/reach-out";

export default function Home() {
  return (
    <>
      <Greeting />
      <Outcomes />
      <Career />
      <Bio />
      <Capabilities />
      <SelectedWork />
      <Credentials />
      <ReachOut />
    </>
  );
}
