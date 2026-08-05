import { Block } from "@/components/common/block";
import { productLayers } from "@/content/architecture";

/**
 * A borderless table, replacing the eight-cell grid of tag pills.
 *
 * A pill grid enumerates nouns and proves nothing. A table with an evidence
 * column reads as an engineer's artifact rather than a marketing page's, and
 * it says the thing the pills could not: these are not separate
 * competencies, they are one request path.
 */
export function Stack() {
  return (
    <Block id="stack" title="Stack">
      <p className="text-muted-foreground mb-6">
        A customer-reported defect starts as a UI symptom, resolves to a service
        call, and is usually caused three layers down. The job is being able to
        follow it the whole way.
      </p>

      <table className="w-full border-collapse text-left">
        <caption className="sr-only">
          Layers of the stack, what each one covers, and the technologies
          involved
        </caption>
        <thead>
          <tr className="border-border border-b">
            <th
              scope="col"
              className="text-faint pb-2 text-[0.8125rem] font-medium"
            >
              Layer
            </th>
            <th
              scope="col"
              className="text-faint pb-2 text-[0.8125rem] font-medium"
            >
              What it covers
            </th>
          </tr>
        </thead>
        <tbody>
          {productLayers.map((layer) => (
            <tr key={layer.name} className="border-border border-b align-top">
              <th scope="row" className="w-32 py-4 pr-6 font-medium sm:w-44">
                {layer.name}
              </th>
              <td className="py-4">
                <span className="text-muted-foreground text-[0.9375rem]">
                  {layer.description}
                </span>
                <span className="text-faint mt-2 block font-mono text-[0.75rem]">
                  {layer.tech.join(" · ")}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Block>
  );
}
