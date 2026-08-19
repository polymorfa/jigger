import type { IndexRow } from "@/lib/cdn";

export type AbRow = IndexRow<"ab">;

export type AbGroup = {
  /** The subsystem, derived from the modules that read these flags. */
  name: string;
  facts: AbRow[];
  /** How many ship enabled. The rollout state of the group at a glance. */
  on: number;
  /** How many disagree between the two shipped defaults — an A/B actually
   *  running, rather than a flag parked at one value. */
  split: number;
};

/**
 * The subsystem a module belongs to.
 *
 * The first CamelCase word after the `WAWeb`/`WA` prefix. Crude, and it is
 * meant to be: the module names are the only semantic signal in this data, and a
 * cleverer scheme would impose a taxonomy nobody at WhatsApp used.
 */
function subsystem(module: string): string {
  const bare = module.replace(/^WAWeb/, "").replace(/^WA/, "");
  const m = /^[A-Z]+(?=[A-Z][a-z])|^[A-Z][a-z0-9]*/.exec(bare);
  return m?.[0] ?? bare.slice(0, 12);
}

/**
 * 2,190 opaque numeric flags, grouped into what they gate.
 *
 * On its own an A/B property is a number and a name nobody outside Meta chose;
 * `wds_web_text_layout = 5842` teaches nothing. What makes it mean something is
 * the set of modules that read it, and clustering by those turns the list into a
 * map of which subsystems are being changed right now.
 *
 * The group is decided by majority across *all* readers rather than by the first
 * one. Flags are commonly read by a shared gating helper as well as by the
 * feature itself, and taking the first reader alphabetically buckets half of
 * them under whichever helper sorts earliest.
 */
export function buildAbMap(rows: AbRow[]): { groups: AbGroup[]; unwired: AbRow[] } {
  const wired = new Map<string, AbRow[]>();
  const unwired: AbRow[] = [];

  for (const f of rows) {
    const readers = f.list.readers ?? [];
    if (readers.length === 0) {
      unwired.push(f);
      continue;
    }
    const votes = new Map<string, number>();
    for (const r of readers) {
      const s = subsystem(r);
      votes.set(s, (votes.get(s) ?? 0) + 1);
    }
    const [best] = [...votes.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
    const key = best?.[0] ?? "other";
    wired.set(key, [...(wired.get(key) ?? []), f]);
  }

  const groups: AbGroup[] = [...wired.entries()]
    .map(([name, fs]) => ({
      name,
      facts: fs.sort((a, b) => a.name.localeCompare(b.name)),
      on: fs.filter((f) => f.list.on).length,
      split: fs.filter((f) => f.list.split).length,
    }))
    .sort((a, b) => b.facts.length - a.facts.length || a.name.localeCompare(b.name));

  return { groups, unwired: unwired.sort((a, b) => a.name.localeCompare(b.name)) };
}
