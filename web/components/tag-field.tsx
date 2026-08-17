"use client";

import { useRef, useState } from "react";
import { XIcon } from "lucide-react";

/**
 * A row of tags you type into, the way every tag input works.
 *
 * Space or comma commits what you have typed; so does Enter, and so does
 * clicking away — an entry you typed and then clicked out of should not
 * silently vanish, which is the most common way these get it wrong. Backspace
 * on an empty field takes back the last tag, so correcting a typo is one key
 * rather than a trip to the mouse.
 *
 * Pasting a list works too: commas, spaces and newlines all split, because the
 * list you are pasting came from somewhere that used one of them.
 */
export function TagField({
  label,
  hint,
  values,
  onAdd,
  onRemove,
  placeholder,
  tone = "positive",
}: {
  label: string;
  hint?: string;
  values: string[];
  onAdd: (value: string) => void;
  onRemove: (value: string) => void;
  placeholder?: string;
  /** `negative` reads as an exclusion — struck through, in the missing colour. */
  tone?: "positive" | "negative";
}) {
  const [draft, setDraft] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const commit = (raw: string) => {
    for (const v of raw.split(/[\s,]+/)) {
      const t = v.trim();
      if (t) onAdd(t);
    }
    setDraft("");
  };

  return (
    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1.5">
      <span className="text-muted-foreground w-[7.5rem] shrink-0 text-xs" title={hint}>
        {label}
      </span>
      <div
        onClick={() => inputRef.current?.focus()}
        className="focus-within:border-ring flex min-h-6 min-w-0 flex-1 flex-wrap items-center gap-1 border px-1 py-px transition-colors"
      >
        {values.map((v) => (
          <span
            key={v}
            className={
              "flex items-center gap-1 border px-1.5 text-xs " +
              (tone === "negative"
                ? "border-missing/40 text-missing line-through decoration-1"
                : "border-brand bg-brand-weak text-fg")
            }
          >
            <span className="data">{v}</span>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onRemove(v);
              }}
              aria-label={`Remove ${v}`}
              className="no-underline opacity-60 hover:opacity-100"
            >
              <XIcon className="size-3" />
            </button>
          </span>
        ))}
        <input
          ref={inputRef}
          value={draft}
          onChange={(e) => {
            // A separator typed mid-string commits everything before it, so
            // typing `a b c` leaves three tags and an empty field.
            if (/[\s,]/.test(e.target.value)) commit(e.target.value);
            else setDraft(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              commit(draft);
            } else if (e.key === "Backspace" && !draft && values.length) {
              onRemove(values[values.length - 1]!);
            }
          }}
          onBlur={() => draft.trim() && commit(draft)}
          onPaste={(e) => {
            const text = e.clipboardData.getData("text");
            if (/[\s,]/.test(text)) {
              e.preventDefault();
              commit(text);
            }
          }}
          placeholder={values.length ? "" : placeholder}
          spellCheck={false}
          autoComplete="off"
          aria-label={label}
          className="placeholder:text-muted-foreground data h-5 min-w-[10ch] flex-1 bg-transparent px-1 text-xs outline-none"
        />
      </div>
    </div>
  );
}
