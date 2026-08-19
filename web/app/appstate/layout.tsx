"use client";

import { KindBrowser } from "@/components/kind-browser";

export default function AppStateLayout({ children }: { children: React.ReactNode }) {
  return (
    <KindBrowser
      kind="appstate"
      title="app-state mutations"
      // The wire index name, because that is the string a library has to send
      // and the one place `Pin` turns out to be `pin_v1`.
      detail={(f) => f.list.index}
    >
      {children}
    </KindBrowser>
  );
}
