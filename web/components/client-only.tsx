"use client";

import { useEffect, useState } from "react";

/**
 * Render children in the browser and nowhere else.
 *
 * Everything jigger displays is fetched from a CDN with a relative base, and
 * there is no origin to resolve that against while prerendering. That is not a
 * problem to work around — it is the architecture. The build emits a shell, the
 * browser fills it. This is the seam where that happens.
 */
export function ClientOnly({
  children,
  fallback = null,
}: {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return <>{mounted ? children : fallback}</>;
}

/**
 * What a pane shows while its data is in flight.
 *
 * Every boundary gets one. A blank pane and a broken pane look identical, and
 * the data here comes from a CDN a few hundred milliseconds away — long enough
 * that "nothing is happening" is the reasonable conclusion to draw from an
 * empty box.
 */
export function Waiting({ what = "data" }: { what?: string }) {
  return <p className="px-5 py-5 text-sm text-fg-faint">Fetching {what}…</p>;
}
