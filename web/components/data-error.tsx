"use client";

import { useRouter } from "next/navigation";
import { SRC_COOKIE } from "@/lib/source";
import type { FailureReason } from "@/lib/load-ir";

const HEADING: Record<FailureReason, string> = {
  network: "Could not reach the data source",
  notfound: "That ref has no generated IR",
  version: "Unsupported IR version",
  parse: "The payload could not be parsed",
};

// Honest, specific failure panel — rendered inline (server-driven), so the real
// message survives production builds instead of being swallowed by an error
// boundary. Never a blank app.
export function DataError({
  reason,
  message,
  sourceLabel,
}: {
  reason: FailureReason;
  message: string;
  sourceLabel: string;
}) {
  const router = useRouter();
  return (
    <div className="flex h-full items-start justify-center p-8">
      <div className="flex max-w-[560px] flex-col gap-3 border border-hair-strong bg-surface p-5">
        <div className="flex items-center gap-2">
          <span className="cov cov-missing" aria-hidden="true" />
          <h1 className="text-md font-semibold text-fg">{HEADING[reason]}</h1>
        </div>
        <p className="text-sm text-fg">{message}</p>
        <p className="data text-xs text-fg-muted">source: {sourceLabel}</p>
        <div className="mt-1 flex gap-2">
          <button
            type="button"
            onClick={() => router.refresh()}
            className="border border-hair px-2.5 py-1 text-sm text-fg-muted hover:border-hair-strong hover:text-fg"
          >
            Retry
          </button>
          <button
            type="button"
            onClick={() => {
              document.cookie = `${SRC_COOKIE}=local; path=/; max-age=31536000; samesite=lax`;
              router.refresh();
            }}
            className="border border-brand-border bg-brand-weak px-2.5 py-1 text-sm text-brand hover:border-brand"
          >
            Switch to local snapshot
          </button>
        </div>
      </div>
    </div>
  );
}
