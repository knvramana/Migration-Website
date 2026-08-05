import { Masthead } from "@/components/blocks/masthead";
import { Outcomes } from "@/components/blocks/outcomes";
import { Platform } from "@/components/blocks/platform";
import { Profile } from "@/components/blocks/profile";
import { Career } from "@/components/blocks/career";
import { Capabilities } from "@/components/blocks/capabilities";
import { SelectedWork } from "@/components/blocks/selected-work";
import { Credentials } from "@/components/blocks/credentials";
import { ReachOut } from "@/components/blocks/reach-out";

export default function Home() {
  return (
    <>
      <Masthead />
      <Outcomes />
      <Platform />
      <Profile />
      <Career />
      <Capabilities />
      <SelectedWork />
      <Credentials />
      <ReachOut />
    </>
  );
}
