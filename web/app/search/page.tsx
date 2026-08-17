import type { Metadata } from "next";
import { Suspense } from "react";
import { AdvancedSearch, SearchFallback } from "@/components/advanced-search";
import { Scroll } from "@/components/ui";

export const metadata: Metadata = { title: "Search" };

/**
 * Search as a destination.
 *
 * The header field is for jumping to something you already have in mind. This
 * is for the other kind of question — one with a shape rather than a name —
 * where you want the whole result set in front of you and a URL you can share
 * once you have narrowed it.
 */
export default function SearchPage() {
  return (
    <Scroll>
      <div className="mx-auto flex max-w-[980px] flex-col gap-4 px-6 py-6">
        <div className="flex flex-col gap-1">
          <h1 className="text-lg font-semibold tracking-tight text-fg">Search</h1>
          <p className="text-muted-foreground max-w-prose text-sm">
            Every fact and every module, in one index — matched on what they are
            called and on what they contain.
          </p>
        </div>
        <Suspense fallback={<SearchFallback />}>
          <AdvancedSearch />
        </Suspense>
      </div>
    </Scroll>
  );
}
