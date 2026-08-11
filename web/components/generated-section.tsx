"use client";

import { useLang } from "./lang-context";
import { CopyButton } from "./copy-button";
import { LANGUAGE_LABEL, type Generated, type Language } from "@/lib/types";

const BASE: Language[] = ["go", "ts", "rust"];

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
  const snippet = generated?.[effective];

  return (
    <section className="flex flex-col gap-1.5">
      <div className="flex items-center justify-between gap-3 border-b border-hair pb-1.5">
        <h2 className="text-md font-semibold text-fg">Generated</h2>
        <div className="flex items-center border border-hair" role="group" aria-label="Target language">
          {options.map((o) => {
            const active = o === effective;
            const available = Boolean(generated?.[o]);
            return (
              <button
                key={o}
                type="button"
                aria-pressed={active}
                onClick={() => setLang(o)}
                title={available ? LANGUAGE_LABEL[o] : `${LANGUAGE_LABEL[o]} — not generated for this fact`}
                className={
                  "data border-l border-hair px-2 py-[2px] text-xs first:border-l-0 " +
                  (active ? "bg-surface-3 text-fg" : "text-fg-faint hover:text-fg-muted") +
                  (available ? "" : " opacity-60")
                }
              >
                {LANGUAGE_LABEL[o]}
              </button>
            );
          })}
        </div>
      </div>

      {snippet ? (
        <div className="relative">
          <div className="absolute right-1.5 top-1.5 z-10">
            <CopyButton value={snippet} title={`Copy ${LANGUAGE_LABEL[effective]}`} />
          </div>
          <pre className="overflow-x-auto border border-hair bg-surface p-3 text-sm leading-[19px]">
            <code className="data text-fg">{snippet}</code>
          </pre>
        </div>
      ) : (
        <div className="border border-hair bg-surface px-3 py-3 text-sm text-fg-faint">
          No {LANGUAGE_LABEL[effective]} output generated for this fact yet.
        </div>
      )}
    </section>
  );
}
