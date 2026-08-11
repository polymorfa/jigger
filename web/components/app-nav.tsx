"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const TABS: { href: string; label: string }[] = [
  { href: "/", label: "Overview" },
  { href: "/ab", label: "A/B" },
  { href: "/wam", label: "WAM" },
  { href: "/iq", label: "IQ" },
  { href: "/mex", label: "GraphQL" },
  { href: "/sig", label: "Inbound" },
  { href: "/proto", label: "Proto" },
  { href: "/enum", label: "Enums" },
  { href: "/appstate", label: "AppState" },
  { href: "/coverage", label: "Coverage" },
  { href: "/coverage/patch", label: "Patches" },
  { href: "/diff", label: "Diff" },
  { href: "/source", label: "Source" },
  { href: "/spec", label: "Spec" },
];

function isActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export function AppNav() {
  const pathname = usePathname();
  return (
    <nav className="flex h-[34px] items-stretch gap-0 overflow-x-auto border-b border-hair bg-ground px-3">
      {TABS.map((t) => {
        const active = isActive(pathname, t.href);
        return (
          <Link
            key={t.href}
            href={t.href}
            aria-current={active ? "page" : undefined}
            className={
              "relative flex items-center px-3 text-sm " +
              (active
                ? "text-fg after:absolute after:inset-x-0 after:bottom-[-1px] after:h-[2px] after:bg-accent"
                : "text-fg-muted hover:text-fg")
            }
          >
            {t.label}
          </Link>
        );
      })}
    </nav>
  );
}
