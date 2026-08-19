"use client";

import { KindBrowser } from "@/components/kind-browser";

export default function EnumLayout({ children }: { children: React.ReactNode }) {
  return (
    <KindBrowser
      kind="enum"
      title="value sets"
      // Variant count is the distinguishing number: a two-variant boolean-ish
      // enum and an eighty-variant message-type enum are different animals.
      detail={(f) => `${f.list.variants}`}
    >
      {children}
    </KindBrowser>
  );
}
