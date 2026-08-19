"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

/**
 * The address bar, as state.
 *
 * `useParams()` and `useSearchParams()` would be the obvious things and are the
 * wrong things here. The app ships as static files: a dynamic route has to be
 * enumerated at build time, and enumerating 33,676 fact and module pages
 * produces 33,676 HTML files that differ only in a string. So one page is built
 * per section and Vercel rewrites `/source/:name` onto it — which means Next's
 * router sees the placeholder it was built with, and the real name only ever
 * exists in `location.pathname`.
 *
 * Null until mounted, because a static shell has no address bar when it is
 * rendered; callers show their loading state for that frame.
 */
function useLocation(): { pathname: string; search: URLSearchParams } | null {
  // Next's pathname is the wrong *value* — under a rewrite it is the
  // placeholder the page was built with — but it is the right *signal*: it
  // changes on every client-side navigation, which `popstate` does not. So it
  // drives the read, and the read goes to the address bar.
  const routed = usePathname();
  const [loc, setLoc] = useState<{ pathname: string; search: URLSearchParams } | null>(null);

  useEffect(() => {
    const read = () =>
      setLoc({
        pathname: window.location.pathname,
        search: new URLSearchParams(window.location.search),
      });
    read();
    window.addEventListener("popstate", read);
    return () => window.removeEventListener("popstate", read);
  }, [routed]);

  return loc;
}

/** The dynamic segment: everything after `prefix`, decoded. */
export function useRouteTail(prefix: string): string | null {
  const loc = useLocation();
  if (!loc || !loc.pathname.startsWith(prefix)) return null;
  const rest = loc.pathname.slice(prefix.length).replace(/\/$/, "");
  return rest ? decodeURIComponent(rest) : null;
}

/** One query parameter, or null before mount and when absent. */
export function useQueryParam(key: string): string | null {
  const loc = useLocation();
  return loc?.search.get(key) ?? null;
}

/**
 * The real pathname, as `usePathname()` would report it if rewrites did not
 * exist. Null until mounted.
 */
export function usePath(): string | null {
  return useLocation()?.pathname ?? null;
}
