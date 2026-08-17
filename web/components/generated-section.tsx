"use client";

import { useLang } from "./lang-context";
import { CopyButton } from "./copy-button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LANGUAGE_LABEL, type Generated, type Language } from "@/lib/types";
import { cn } from "@/lib/utils";

const BASE: Language[] = ["go", "ts", "rust"];

/**
 * The same fact, in each library's language.
 *
 * The choice is sticky across facts — you are one library's maintainer for the
 * length of a session, not switching per page — so it lives in a context rather
 * than in this component's state.
 *
 * A language with no output keeps its tab rather than disappearing. A tab row
 * that changes width as you move between facts is disorienting, and "nothing
 * was generated here" is information; a missing tab is not.
 */
export function GeneratedSection({
  generated,
  protoOption,
}: {
  generated?: Generated;
  protoOption: boolean;
}) {
  const { lang, setLang } = useLang();
  const options: Language[] = protoOption || generated?.proto ? [...BASE, "proto"] : BASE;
  const effective: Language = options.includes(lang) ? lang : options[0]!;

  return (
    <section className="flex flex-col gap-2">
      <Tabs value={effective} onValueChange={(v) => setLang(v as Language)}>
        <div className="flex items-center justify-between gap-3 border-b pb-1.5">
          <h2 className="text-md font-semibold text-fg">Generated</h2>
          <TabsList className="h-7">
            {options.map((o) => (
              <TabsTrigger
                key={o}
                value={o}
                className={cn("data px-2.5 text-xs", !generated?.[o] && "opacity-55")}
                title={
                  generated?.[o]
                    ? LANGUAGE_LABEL[o]
                    : `${LANGUAGE_LABEL[o]} — not generated for this fact`
                }
              >
                {LANGUAGE_LABEL[o]}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        {options.map((o) => (
          <TabsContent key={o} value={o} className="mt-2">
            {generated?.[o] ? (
              <div className="relative">
                <div className="absolute right-1.5 top-1.5 z-10">
                  <CopyButton value={generated[o]!} title={`Copy ${LANGUAGE_LABEL[o]}`} />
                </div>
                <pre className="bg-surface overflow-x-auto border p-3 text-sm leading-[var(--text-sm--line-height)]">
                  <code className="data text-fg">{generated[o]}</code>
                </pre>
              </div>
            ) : (
              <p className="text-muted-foreground bg-surface border px-3 py-3 text-sm">
                No {LANGUAGE_LABEL[o]} output generated for this fact yet.
              </p>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}
