"use client";

import { useState } from "react";

// A fact id IS a wire literal people copy to grep a library or feed codegen.
export function CopyButton({ value, title = "Copy" }: { value: string; title?: string }) {
  const [done, setDone] = useState(false);
  return (
    <button
      type="button"
      title={done ? "Copied" : title}
      aria-label={title}
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(value);
          setDone(true);
          window.setTimeout(() => setDone(false), 900);
        } catch {
          /* ignore */
        }
      }}
      className="inline-flex h-[var(--row-code)] w-[var(--row-code)] shrink-0 items-center justify-center border border-hair text-fg-faint hover:border-hair-strong hover:text-fg-muted"
    >
      {done ? (
        <svg viewBox="0 0 16 16" width="11" height="11" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M3 8.5l3 3 7-7" />
        </svg>
      ) : (
        <svg viewBox="0 0 16 16" width="11" height="11" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.3">
          <rect x="5.5" y="5.5" width="8" height="8" />
          <path d="M10.5 5.5V3.5a1 1 0 00-1-1h-6a1 1 0 00-1 1v6a1 1 0 001 1h2" />
        </svg>
      )}
    </button>
  );
}
