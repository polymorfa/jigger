import { KindBrowser } from "@/components/kind-browser";
import { isEnum } from "@/lib/types";

export default function EnumLayout({ children }: { children: React.ReactNode }) {
  return (
    <KindBrowser
      kind="enum"
      title="value sets"
      // Variant count is the distinguishing number: a two-variant boolean-ish
      // enum and an eighty-variant message-type enum are different animals.
      detail={(f) => (isEnum(f) ? `${f.data.variants.length}` : "")}
    >
      {children}
    </KindBrowser>
  );
}
