import { Reveal } from "@/components/common/reveal";
import { Section } from "@/components/common/section";
import { Tag } from "@/components/common/tag";
import {
  agenticLayer,
  architectureMeta,
  boundary,
  involvementLabels,
  productLayers,
  type Layer,
} from "@/content/architecture";
import { railBg, textAccent } from "@/lib/accents";
import { cn } from "@/lib/utils";

function InvolvementBadge({ layer }: { layer: Pick<Layer, "involvement"> }) {
  return (
    <span className="border-border text-muted-foreground inline-flex shrink-0 items-center rounded-full border px-2.5 py-0.5 font-mono text-[0.65rem] tracking-tight whitespace-nowrap">
      {involvementLabels[layer.involvement]}
    </span>
  );
}

function LayerRow({ layer }: { layer: Layer }) {
  return (
    // Container queries: the row restacks on its own width, so it behaves the
    // same whether it sits full-bleed or inside a narrower column later.
    <div className="@container/layer relative py-5 pl-5 first:pt-0 last:pb-0">
      <span
        aria-hidden="true"
        className={cn(
          "absolute top-6 bottom-6 left-0 w-0.5 rounded-full first:top-1",
          railBg[layer.accent],
        )}
      />
      <div className="flex flex-col gap-3 @md/layer:flex-row @md/layer:items-start @md/layer:justify-between">
        <div className="min-w-0">
          <h4 className="text-base font-extrabold tracking-tight">
            {layer.name}
          </h4>
          <p className="text-muted-foreground mt-1.5 max-w-xl text-sm leading-relaxed text-pretty">
            {layer.description}
          </p>
        </div>
        <InvolvementBadge layer={layer} />
      </div>
      <ul className="mt-3 flex flex-wrap gap-2">
        {layer.tech.map((item) => (
          <li key={item}>
            <Tag>{item}</Tag>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Architecture() {
  return (
    <Section
      id="architecture"
      eyebrow={architectureMeta.eyebrow}
      title={architectureMeta.title}
      lead={architectureMeta.lead}
    >
      <div className="mx-auto max-w-4xl">
        {/* Above the line */}
        <Reveal>
          <div className="border-rail-violet/40 bg-card shadow-card relative overflow-hidden rounded-xl border p-6 md:p-7">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(30rem_16rem_at_20%_0%,var(--rail-violet),transparent_70%)] opacity-[0.07]"
            />
            <div className="relative flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div className="min-w-0">
                <p
                  className={cn(
                    "font-mono text-[0.65rem] tracking-[0.16em] uppercase",
                    textAccent[agenticLayer.accent],
                  )}
                >
                  New
                </p>
                <h3 className="mt-2 text-lg font-extrabold tracking-tight">
                  {agenticLayer.name}
                </h3>
                <p className="text-muted-foreground mt-2 max-w-xl text-sm leading-relaxed text-pretty">
                  {agenticLayer.description}
                </p>
              </div>
              <InvolvementBadge layer={agenticLayer} />
            </div>
            <ul className="relative mt-4 flex flex-wrap gap-2">
              {agenticLayer.tech.map((item) => (
                <li key={item}>
                  <Tag>{item}</Tag>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* The seam. The dashed rule is the point of the whole diagram. */}
        <Reveal delay={90}>
          <div className="relative py-6">
            <div
              aria-hidden="true"
              className="border-border absolute inset-x-0 top-1/2 border-t border-dashed"
            />
            <div className="bg-background relative mx-auto w-fit px-4 text-center">
              <p className="text-brand-violet font-mono text-xs font-extrabold tracking-tight">
                {boundary.name}
              </p>
              <p className="text-muted-foreground mx-auto mt-1.5 max-w-md text-xs leading-relaxed text-pretty">
                {boundary.description}
              </p>
              <span className="border-border text-muted-foreground mt-2 inline-flex items-center rounded-full border px-2.5 py-0.5 font-mono text-[0.65rem]">
                {involvementLabels[boundary.involvement]}
              </span>
            </div>
          </div>
        </Reveal>

        {/* Below the line */}
        <Reveal delay={150}>
          <div className="bg-card shadow-card divide-border divide-y rounded-xl border p-6 md:p-7">
            <p className="text-muted-foreground pb-4 font-mono text-[0.65rem] tracking-[0.16em] uppercase">
              Existing product · IBM Engineering Lifecycle Management
            </p>
            {productLayers.map((layer) => (
              <LayerRow key={layer.name} layer={layer} />
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
