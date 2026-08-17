import type { Metadata } from "next";
import Link from "next/link";
import { Scroll } from "@/components/ui";
import { getSpecList } from "@/lib/spec";

export const metadata: Metadata = { title: "Spec" };

export default function SpecIndexPage() {
  const specs = getSpecList();
  return (
    <Scroll>
      <div className="mx-auto flex max-w-[var(--reading)] flex-col gap-4 px-5 py-5">
        <header className="flex flex-col gap-1">
          <h1 className="text-xl font-semibold tracking-tight text-fg">Spec</h1>
          <p className="max-w-[70ch] text-sm text-fg-muted">
            Prose that cites facts by their wire id in backticks. Every citation links to the fact it
            names; a claim that references a nonexistent fact fails the build.
          </p>
        </header>

        {specs.length === 0 ? (
          <p className="text-sm text-fg-faint">No spec documents found.</p>
        ) : (
          <div className="border border-hair bg-surface">
            {specs.map((s) => (
              <Link
                key={s.slug}
                href={`/spec/${s.slug}`}
                className="flex items-baseline gap-3 border-b border-hair px-3 py-2 last:border-b-0 hover:bg-surface-2"
              >
                <span className="text-sm font-medium text-fg">{s.title}</span>
                <span className="data ml-auto text-xs text-fg-faint">{s.file}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </Scroll>
  );
}
