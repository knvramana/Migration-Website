import Image from "next/image";

import { Block } from "@/components/common/block";
import { about } from "@/content/resume";

export function About() {
  return (
    <Block id="about" title="About">
      <div className="grid gap-8 md:grid-cols-[140px_1fr] md:gap-10">
        <Image
          src="/images/portrait.jpg"
          alt="Portrait of Ramana Koduri"
          width={901}
          height={1309}
          sizes="140px"
          className="border-border h-[140px] w-[140px] rounded-xl border object-cover md:h-[172px] md:w-[140px]"
        />
        <div>
          {about.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-muted-foreground mb-4 leading-relaxed last:mb-0"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </Block>
  );
}
