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
