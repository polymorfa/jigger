"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

/**
 * Grouped, because fourteen equal tabs is a list, not a navigation.
 *
 * The kinds are what you browse; the rest are things you do *to* them. Keeping
 * that distinction visible costs one separator and saves reading the whole row
 * every time.
 */
const GROUPS: { href: string; label: string }[][] = [
  [{ href: "/", label: "Overview" }],
  [
    { href: "/ab", label: "A/B" },
    { href: "/wam", label: "WAM" },
    { href: "/iq", label: "IQ" },
    { href: "/mex", label: "GraphQL" },
    { href: "/sig", label: "Inbound" },
    { href: "/proto", label: "Proto" },
    { href: "/enum", label: "Enums" },
    { href: "/appstate", label: "AppState" },
  ],
  [
    { href: "/coverage", label: "Coverage" },
    { href: "/coverage/patch", label: "Patches" },
    { href: "/diff", label: "Diff" },
  ],
  [
    { href: "/source", label: "Source" },
    { href: "/spec", label: "Spec" },
  ],
];

function isActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  // `/coverage/patch` is its own tab, so `/coverage` must not claim it.
  if (href === "/coverage") return pathname === "/coverage";
  return pathname === href || pathname.startsWith(href + "/");
}

export function AppNav() {
  const pathname = usePathname();
  return (
    <nav className="bg-background flex h-8 items-stretch overflow-x-auto border-b px-2">
      {GROUPS.map((group, gi) => (
        <div key={gi} className="flex items-stretch">
          {gi > 0 && <span className="bg-border my-2 w-px shrink-0" aria-hidden="true" />}
          {group.map((t) => {
            const active = isActive(pathname, t.href);
            return (
              <Link
                key={t.href}
                href={t.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative flex shrink-0 items-center px-3 text-sm transition-colors",
                  active
                    ? "text-foreground after:bg-brand after:absolute after:inset-x-2 after:bottom-0 after:h-[2px]"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {t.label}
              </Link>
            );
          })}
        </div>
      ))}
    </nav>
  );
}
