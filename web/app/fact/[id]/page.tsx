"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { browseHref, decodeFactId, kindOfId } from "@/lib/ids";
import { useRouteTail } from "@/lib/route";

/**
 * There is one place to look at a fact, not two.
 *
 * This route used to be a separate destination that duplicated everything the
 * per-kind browsers already show. Two pages for one thing means two places to
 * keep in step and a reader who is never sure which one is canonical, so this
 * now redirects into the browser for the fact's kind. Old links keep working.
 */
export default function FactRedirect() {
  const tail = useRouteTail("/fact/");
  const router = useRouter();

  useEffect(() => {
    if (!tail) return;
    const id = decodeFactId(tail);
    const kind = kindOfId(id);
    router.replace(kind ? browseHref(kind, id) : "/");
  }, [tail, router]);

  return <div className="px-5 py-5 text-sm text-fg-faint">Redirecting…</div>;
}
