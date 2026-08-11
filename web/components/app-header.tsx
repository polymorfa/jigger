import Link from "next/link";
import { GlobalSearch } from "./global-search";
import { SourceControl } from "./source-control";
import { ThemeToggle } from "./theme-toggle";
import { getDiff } from "@/lib/data";

// Server component: static chrome + client islands (search, source, theme).
export function AppHeader() {
  const revisions = getDiff().revisions;
  return (
    <header className="sticky top-0 z-50 flex h-[46px] shrink-0 items-center gap-3 border-b border-hair bg-ground px-3">
      <Link href="/" className="flex shrink-0 items-baseline gap-2" aria-label="jigger — home">
        <span className="data text-md font-semibold tracking-tight text-fg">jigger</span>
        <span className="hidden text-xs text-fg-faint sm:inline">WhatsApp Web protocol browser</span>
      </Link>

      <div className="flex flex-1 justify-center">
        <GlobalSearch />
      </div>

      <div className="flex shrink-0 items-center gap-3">
        <SourceControl revisions={revisions} />
        <ThemeToggle />
      </div>
    </header>
  );
}
