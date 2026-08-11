"use client";

import { useState } from "react";
import Link from "next/link";
import { browseHref } from "@/lib/ids";
import type { AbGroup } from "@/lib/ab-map";
import type { AbData, Fact } from "@/lib/types";

/**
 * What the flags are for.
 *
 * A list of 2,190 opaque ids is not information. Grouped by the subsystem that
 * reads them it becomes a map of what WhatsApp is currently changing, and the
 * `split` column is the part worth watching: a flag whose two shipped defaults
 * disagree is an experiment running right now, not a switch parked at a value.
 */
export function AbMap({ groups, unwired }: { groups: AbGroup[]; unwired: Fact[] }) {
  const total = groups.reduce((n, g) => n + g.facts.length, 0);

  return (
    <div className="flex flex-col gap-6">
      <section className="flex flex-col gap-2">
        <div className="flex items-baseline justify-between gap-3 border-b border-hair pb-1.5">
          <h2 className="text-md font-semibold text-fg">Feature map</h2>
          <span className="text-xs text-fg-faint">
            <span className="tnum">{total}</span> wired flags across{" "}
            <span className="tnum">{groups.length}</span> subsystems
          </span>
        </div>
        <p className="max-w-prose text-sm text-fg-muted">
          Grouped by the modules that read them — the only semantic signal this
          data carries. <span className="data">split</span> counts flags whose two shipped
          defaults disagree: those are experiments running now, decided server-side per client.
        </p>
        <div className="mt-1 flex flex-col">
          {groups.map((g) => (
            <Group key={g.name} group={g} />
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-2">
        <div className="flex items-baseline justify-between gap-3 border-b border-hair pb-1.5">
          <h2 className="text-md font-semibold text-fg">Registered but unread</h2>
          <span className="tnum text-xs text-fg-faint">{unwired.length}</span>
        </div>
        <p className="max-w-prose text-sm text-fg-muted">
          No module reads these. They are flags shipped ahead of the code they
          gate — the earliest visible signal of a feature, and the reason to
          watch this list rather than the wired one.
        </p>
        <Names facts={unwired} />
      </section>
    </div>
  );
}

function Group({ group }: { group: AbGroup }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-hair">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-baseline gap-3 py-1 text-left hover:bg-surface-2"
      >
        <span className="data w-3 shrink-0 text-2xs text-fg-faint">{open ? "−" : "+"}</span>
        <span className="data text-sm text-fg">{group.name}</span>
        <span className="tnum ml-auto flex shrink-0 gap-4 text-xs text-fg-faint">
          <span>
            <span className="text-fg-muted">{group.facts.length}</span> flags
          </span>
          <span>
            <span className="text-fg-muted">{group.on}</span> on
          </span>
          <span className={group.split ? "text-accent" : ""}>
            <span className={group.split ? "" : "text-fg-muted"}>{group.split}</span> split
          </span>
        </span>
      </button>
      {open && (
        <div className="pb-1.5 pl-6">
          <Names facts={group.facts} />
        </div>
      )}
    </div>
  );
}

function Names({ facts }: { facts: Fact[] }) {
  const [all, setAll] = useState(false);
  const shown = all ? facts : facts.slice(0, 40);
  return (
    <div className="flex flex-col gap-0.5">
      <div className="flex flex-wrap gap-x-3 gap-y-0.5">
        {shown.map((f) => {
          const d = f.data as AbData;
          const live = d.default !== d.alt_default;
          return (
            <Link
              key={f.id}
              href={browseHref("ab", f.id)}
              title={`${d.type} · default ${String(d.default)} · alt ${String(d.alt_default)}`}
              className={`data text-xs hover:underline ${live ? "text-accent" : "text-fg-muted"}`}
            >
              {f.name}
            </Link>
          );
        })}
      </div>
      {facts.length > shown.length && (
        <button
          onClick={() => setAll(true)}
          className="mt-1 self-start text-2xs text-fg-faint underline hover:text-fg"
        >
          show all {facts.length}
        </button>
      )}
    </div>
  );
}
