import Link from "next/link";

// Shared, deliberately minimal display primitives. Everything uses the single
// type scale and hairline rules; no floating cards, no per-component sizes.

export function SectionTitle({
  children,
  right,
}: {
  children: React.ReactNode;
  right?: React.ReactNode;
}) {
  return (
    <div className="flex items-baseline justify-between gap-3 border-b border-hair pb-1.5">
      <h2 className="text-md font-semibold text-fg">{children}</h2>
      {right ? <div className="text-sm text-fg-muted">{right}</div> : null}
    </div>
  );
}

// A hairline-divided row of counts — reads like a status bar, not a set of cards.
export function StatBar({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-wrap divide-x divide-hair border border-hair bg-surface">
      {children}
    </div>
  );
}

export function Stat({
  label,
  value,
  sub,
  href,
  tone,
}: {
  label: string;
  value: React.ReactNode;
  sub?: React.ReactNode;
  href?: string;
  tone?: "loud" | "quiet";
}) {
  const valueCls =
    "data tnum text-xl " + (tone === "loud" ? "text-missing" : tone === "quiet" ? "text-fg-muted" : "text-fg");
  const inner = (
    <div className="flex min-w-[120px] flex-col gap-0.5 px-3 py-2">
      <span className="text-xs text-fg-muted">{label}</span>
      <span className={valueCls}>{value}</span>
      {sub ? <span className="text-2xs text-fg-faint">{sub}</span> : null}
    </div>
  );
  if (href) {
    return (
      <Link href={href} className="group hover:bg-surface-2">
        {inner}
      </Link>
    );
  }
  return inner;
}

// key: value definition row, label fixed-width for scanning.
export function DefRow({
  label,
  children,
  labelWidth = "120px",
}: {
  label: string;
  children: React.ReactNode;
  labelWidth?: string;
}) {
  return (
    <div className="flex gap-3 border-b border-hair py-1 last:border-b-0">
      <span className="shrink-0 text-sm text-fg-muted" style={{ width: labelWidth }}>
        {label}
      </span>
      <div className="min-w-0 flex-1 text-sm text-fg">{children}</div>
    </div>
  );
}

// A scroll region that fills the main content area for document-style pages.
/**
 * The vertical scroller for a detail pane.
 *
 * `overflow-x-hidden` is not decoration. Setting `overflow-y: auto` and leaving
 * the other axis `visible` is not a thing CSS allows — the spec promotes
 * `overflow-x` to `auto` as well, so this element grew its own horizontal
 * scrollbar underneath the one on whichever code block was too wide. Two bars,
 * sometimes three once a table was involved.
 *
 * Horizontal overflow belongs to the element that owns it: a `<pre>` scrolls
 * its own code. This one only ever scrolls down.
 */
export function Scroll({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={"h-full overflow-y-auto overflow-x-hidden " + className}>{children}</div>
  );
}

// Empty detail-pane placeholder for master/detail views.
export function EmptyDetail({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full items-center justify-center p-6">
      <p className="max-w-[40ch] text-center text-sm text-fg-faint">{children}</p>
    </div>
  );
}
