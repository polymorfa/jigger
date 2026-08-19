"use client";

/**
 * Catch-all boundary for render errors, which now includes failures to reach
 * the CDN — the data arrives during render, so a dropped connection surfaces
 * here rather than as an empty page.
 *
 * "Try again" is worth having for that reason: the usual cause is transient,
 * and re-rendering re-requests, because a rejected fetch is never cached.
 */
export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="flex h-full items-start justify-center p-8">
      <div className="flex max-w-[560px] flex-col gap-3 border border-hair-strong bg-surface p-5">
        <h1 className="text-md font-semibold text-fg">Something went wrong</h1>
        <p className="text-sm text-fg-muted">
          This view could not be rendered. If it was waiting on protocol data, the payload could
          not be reached — that is usually transient.
          {error.digest ? <span className="data text-fg-faint"> ({error.digest})</span> : null}
        </p>
        <button
          type="button"
          onClick={reset}
          className="w-fit border border-hair px-2.5 py-1 text-sm text-fg-muted hover:border-hair-strong hover:text-fg"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
