import { redirect } from "next/navigation";
import { browseHref, decodeFactId, kindOfId } from "@/lib/ids";

type Params = { params: Promise<{ id: string }> };

/**
 * There is one place to look at a fact, not two.
 *
 * This route used to be a separate destination that duplicated everything the
 * per-kind browsers already show. Two pages for one thing means two places to
 * keep in step and a reader who is never sure which one is canonical, so this
 * now redirects into the browser for the fact's kind. Old links keep working.
 */
export default async function FactPage({ params }: Params) {
  const { id } = await params;
  const decoded = decodeFactId(id);
  const kind = kindOfId(decoded);
  redirect(kind ? browseHref(kind, decoded) : "/");
}
