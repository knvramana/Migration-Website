/**
 * Structured data must go through dangerouslySetInnerHTML — rendering
 * `<script>{JSON.stringify(x)}</script>` lets React HTML-escape the quotes,
 * which produces invalid JSON-LD that crawlers silently drop.
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
