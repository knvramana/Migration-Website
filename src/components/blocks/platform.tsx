import { Reveal } from "@/components/common/reveal";
import { Panel } from "@/components/common/panel";
import { Tag } from "@/components/common/tag";
import {
  architectureMeta,
  involvementLabels,
  productLayers,
  type Layer,
} from "@/content/platform";

function LayerRow({ layer, index }: { layer: Layer; index: number }) {
  return (
    // Container queries: the row restacks on its own width, so it behaves the
    // same wherever it is placed.
    <div className="@container/layer relative py-6 pl-6">
      <span
        aria-hidden="true"
        className="bg-foreground/12 absolute inset-y-0 left-0 w-px"
      />
      <span
        aria-hidden="true"
        className="text-muted-foreground bg-background absolute top-5 left-0 -translate-x-1/2 px-1 font-mono text-[0.65rem] tabular-nums"
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="flex flex-col gap-3 @md/layer:flex-row @md/layer:items-start @md/layer:justify-between">
        <div className="min-w-0">
          <h3 className="text-base font-extrabold tracking-tight">
            {layer.name}
          </h3>
          <p className="text-muted-foreground mt-2 max-w-xl text-sm leading-relaxed text-pretty">
            {layer.description}
          </p>
        </div>
        <span className="border-border text-muted-foreground inline-flex shrink-0 items-center rounded-full border px-2.5 py-0.5 font-mono text-[0.65rem] tracking-tight whitespace-nowrap">
          {involvementLabels[layer.involvement]}
        </span>
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

export function Platform() {
  return (
    <Panel
      id="architecture"
      kicker={architectureMeta.eyebrow}
      title={architectureMeta.title}
      lead={architectureMeta.lead}
    >
      <Reveal>
        <div className="mx-auto max-w-3xl">
          {productLayers.map((layer, index) => (
            <LayerRow key={layer.name} layer={layer} index={index} />
          ))}
        </div>
      </Reveal>
    </Panel>
  );
}
