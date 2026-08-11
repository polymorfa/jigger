import { AbMap } from "@/components/ab-map";
import { DataError } from "@/components/data-error";
import { Scroll } from "@/components/ui";
import { buildAbMap } from "@/lib/ab-map";
import { getSnapshotResult } from "@/lib/data";
import { sourceLabel } from "@/lib/source";

/**
 * The landing pane for A/B properties, as a map rather than a placeholder.
 *
 * "Select a property" is only useful advice if you already know which one. The
 * question you actually arrive with is what is being changed at all, and that is
 * answerable — the reader modules say which subsystem each flag gates.
 */
export default async function AbIndexPage() {
  const res = await getSnapshotResult();
  if (!res.ok) {
    return (
      <DataError reason={res.reason} message={res.message} sourceLabel={sourceLabel(res.source)} />
    );
  }
  const { groups, unwired } = buildAbMap(res.snap.byKind.get("ab") ?? []);

  return (
    <Scroll>
      <div className="px-6 py-5">
        <AbMap groups={groups} unwired={unwired} />
      </div>
    </Scroll>
  );
}
