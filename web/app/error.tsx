"use client";

// Catch-all boundary for unexpected render errors. Expected data-source failures
// are handled inline by <DataError> so their honest messages survive production.
export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <div className="flex h-full items-start justify-center p-8">
      <div className="flex max-w-[560px] flex-col gap-3 border border-hair-strong bg-surface p-5">
        <h1 className="text-md font-semibold text-fg">Something went wrong</h1>
        <p className="text-sm text-fg-muted">
          An unexpected error occurred while rendering this view.
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
