import type { Metadata } from "next";
import { CopyButton } from "@/components/copy-button";
import { Scroll } from "@/components/ui";
import { getPatches } from "@/lib/patches";

export const metadata: Metadata = { title: "Patches" };

/**
 * What to actually do about the gaps.
 *
 * The scanner ends at "whatsapp-rust is missing 1,061 things", which leaves the
 * work exactly where it started. These are the constants themselves, in each
 * library's own language, derived from the shipped bundle rather than written by
 * hand — so applying them is a paste, not a transcription exercise.
 *
 * Only `missing` is included. `inconclusive` means the scanner could not decide,
 * usually because the library builds the literal at runtime, and handing someone
 * a patch for code they already have is how a tool stops being trusted.
 */
export default function PatchPage() {
  const patches = getPatches();

  if (patches.length === 0) {
    return (
      <Scroll>
        <div className="px-6 py-5">
          <p className="max-w-prose text-sm text-fg-faint">
            No patches built. Run <span className="data">jigger patch repos.json</span> with the
            tracked libraries checked out — the scanner has to read their source to know what is
            missing.
          </p>
        </div>
      </Scroll>
    );
  }

  return (
    <Scroll>
      <div className="flex flex-col gap-7 px-6 py-5">
        {patches.map((p) => {
          const count = /— (\d+) missing/.exec(p.body)?.[1] ?? "?";
          return (
            <section key={p.repo} className="flex flex-col gap-2">
              <div className="flex items-baseline justify-between gap-3 border-b border-hair pb-1.5">
                <h2 className="data text-md font-semibold text-fg">{p.repo}</h2>
                <span className="flex items-center gap-3">
                  <span className="tnum text-xs text-fg-faint">{count} missing</span>
                  <CopyButton value={p.body} title={`Copy the ${p.repo} patch`} />
                </span>
              </div>
              <pre className="data max-h-[420px] overflow-auto border border-hair bg-surface p-3 text-xs leading-[17px] text-fg">
                {p.body}
              </pre>
            </section>
          );
        })}
      </div>
    </Scroll>
  );
}
