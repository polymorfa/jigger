"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Language } from "@/lib/types";

// The active target language for generated code, persisted so a reader who
// picks Go stays in Go across every fact and reload. Constant throughout the
// app, surfaced by the language picker in each fact's Generated section.

type LangCtx = { lang: Language; setLang: (l: Language) => void };

const Ctx = createContext<LangCtx | null>(null);

const STORAGE_KEY = "jigger.lang";
const VALID: Language[] = ["go", "ts", "rust", "proto"];

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("go");

  useEffect(() => {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw && (VALID as string[]).includes(raw)) setLangState(raw as Language);
  }, []);

  const value = useMemo<LangCtx>(
    () => ({
      lang,
      setLang: (l) => {
        setLangState(l);
        try {
          window.localStorage.setItem(STORAGE_KEY, l);
        } catch {
          /* ignore */
        }
      },
    }),
    [lang],
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useLang(): LangCtx {
  const c = useContext(Ctx);
  if (!c) throw new Error("useLang must be used within LangProvider");
  return c;
}
