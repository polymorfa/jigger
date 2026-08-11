"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import {
  DEFAULT_REF,
  githubConfigured,
  githubOwnerRepo,
  REF_COOKIE,
  SRC_COOKIE,
} from "@/lib/source";

function setCookie(name: string, value: string) {
  document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=31536000; samesite=lax`;
}
function getCookie(name: string): string | null {
  const m = document.cookie.match(new RegExp("(?:^|; )" + name + "=([^;]*)"));
  return m ? decodeURIComponent(m[1]!) : null;
}

export function SourceControl({ revisions }: { revisions: number[] }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [kind, setKind] = useState<"local" | "github">("local");
  const [ref, setRef] = useState(DEFAULT_REF);
  const [pending, setPending] = useState(false);
  const configured = githubConfigured();
  const or = githubOwnerRepo();
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const c = getCookie(SRC_COOKIE);
    if (c === "github" && configured) setKind("github");
    const r = getCookie(REF_COOKIE);
    if (r) setRef(r);
  }, [configured]);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false);
    };
    window.addEventListener("mousedown", onDown);
    return () => window.removeEventListener("mousedown", onDown);
  }, [open]);

  const suggestions = Array.from(
    new Set([DEFAULT_REF, ...(revisions ?? []).map((r) => `rev/${r}`)]),
  );

  const label = kind === "local" ? "local" : `${ref}`;

  const apply = (nextKind: "local" | "github", nextRef?: string) => {
    setPending(true);
    if (nextKind === "local") {
      setCookie(SRC_COOKIE, "local");
    } else {
      setCookie(SRC_COOKIE, "github");
      setCookie(REF_COOKIE, (nextRef ?? ref).trim() || DEFAULT_REF);
    }
    setOpen(false);
    router.refresh();
    // clear pending shortly; refresh has no promise to await
    window.setTimeout(() => setPending(false), 600);
  };

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        title="Data source"
        aria-expanded={open}
        className="flex items-center gap-1.5 border border-hair bg-surface px-2 py-[3px] text-xs text-fg-muted hover:border-hair-strong"
      >
        <svg viewBox="0 0 16 16" width="12" height="12" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.2">
          <ellipse cx="8" cy="4" rx="5" ry="2" />
          <path d="M3 4v8c0 1.1 2.24 2 5 2s5-.9 5-2V4M3 8c0 1.1 2.24 2 5 2s5-.9 5-2" />
        </svg>
        <span className="data max-w-[130px] truncate text-fg">{label}</span>
        {pending ? <span className="text-fg-faint">…</span> : null}
      </button>

      {open ? (
        <div className="absolute right-0 top-[calc(100%+4px)] z-50 w-[280px] border border-hair-strong bg-surface p-3 shadow-lg">
          <div className="mb-2 flex items-center border border-hair" role="group" aria-label="Source">
            <button
              type="button"
              onClick={() => apply("local")}
              aria-pressed={kind === "local"}
              className={
                "flex-1 px-2 py-1 text-xs " + (kind === "local" ? "bg-surface-3 text-fg" : "text-fg-muted hover:text-fg")
              }
            >
              Local
            </button>
            <button
              type="button"
              disabled={!configured}
              onClick={() => setKind("github")}
              aria-pressed={kind === "github"}
              className={
                "flex-1 border-l border-hair px-2 py-1 text-xs " +
                (!configured
                  ? "cursor-not-allowed text-fg-faint"
                  : kind === "github"
                    ? "bg-surface-3 text-fg"
                    : "text-fg-muted hover:text-fg")
              }
            >
              GitHub
            </button>
          </div>

          {kind === "local" ? (
            <p className="text-xs text-fg-muted">
              The IR bundled with this build (<span className="data">public/data/ir.json</span>).
            </p>
          ) : !configured ? (
            <p className="text-xs text-fg-muted">
              Set <span className="data">NEXT_PUBLIC_JIGGER_REPO</span> (owner/repo) to enable GitHub as a source.
            </p>
          ) : (
            <div className="flex flex-col gap-2">
              <div className="data text-xs text-fg-muted">
                {or?.owner}/{or?.repo}
                <span className="text-fg-faint"> /generated/ir.json</span>
              </div>
              <label className="flex flex-col gap-1">
                <span className="text-xs text-fg-muted">ref (branch, tag or sha)</span>
                <input
                  value={ref}
                  onChange={(e) => setRef(e.target.value)}
                  spellCheck={false}
                  autoComplete="off"
                  className="data border border-hair bg-ground px-2 py-1 text-sm text-fg focus:border-accent"
                />
              </label>
              {suggestions.length > 0 ? (
                <div className="flex flex-wrap gap-1">
                  {suggestions.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setRef(s)}
                      className={
                        "data border px-1.5 py-[1px] text-2xs " +
                        (ref === s ? "border-hair-strong bg-surface-3 text-fg" : "border-hair text-fg-muted hover:text-fg")
                      }
                    >
                      {s}
                    </button>
                  ))}
                </div>
              ) : null}
              <button
                type="button"
                onClick={() => apply("github")}
                className="border border-accent-border bg-accent-weak px-2 py-1 text-xs text-accent hover:border-accent"
              >
                Load {ref || DEFAULT_REF}
              </button>
              <p className="text-2xs text-fg-faint">
                Pointing at a <span className="data">rev/&lt;n&gt;</span> tag browses the protocol as it was at that
                revision. Payloads are cached per ref.
              </p>
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
}
