import Link from "next/link";
import { GlobalSearch } from "./global-search";
import { ThemeToggle } from "./theme-toggle";

// Server component: static chrome + client islands (search, source, theme).
export function AppHeader() {
  return (
    <header className="bg-background sticky top-0 z-50 flex h-10 shrink-0 items-center gap-3 border-b px-3">
      <Link href="/" className="flex shrink-0 items-baseline gap-2" aria-label="jigger — home">
        <span className="data text-md font-semibold tracking-tight text-fg">jigger</span>
        <span className="text-muted-foreground hidden text-xs sm:inline">
          WhatsApp Web protocol browser
        </span>
      </Link>

      <div className="flex flex-1 justify-center">
        <GlobalSearch />
      </div>

      <div className="flex shrink-0 items-center gap-2">
        <ThemeToggle />
      </div>
    </header>
  );
}
