import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-3 p-6 text-center">
      <p className="data text-lg text-fg">404</p>
      <p className="max-w-[44ch] text-sm text-fg-muted">
        No such route or fact. Ids are exact wire literals — check for a typo, or search from the header.
      </p>
      <Link href="/" className="link text-sm">
        ← Overview
      </Link>
    </div>
  );
}
