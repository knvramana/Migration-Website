import { redirect } from "next/navigation";

import { site } from "@/content/site";

/**
 * Clean, shareable /resume URL that points at the current PDF.
 *
 * The legacy site linked hero and contact CTAs to `Koduri_Ramana.pdf`, which
 * never existed in the repo — this indirection means the filename can change
 * without breaking a link that ends up printed on a résumé.
 */
export function GET() {
  redirect(site.resumeFile);
}
