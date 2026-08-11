"use client";

import { useEffect, useState } from "react";

type Mode = "system" | "light" | "dark";

const STORAGE_KEY = "jigger.theme";

function apply(mode: Mode) {
  const el = document.documentElement;
  if (mode === "system") delete el.dataset.theme;
  else el.dataset.theme = mode;
  try {
    if (mode === "system") window.localStorage.removeItem(STORAGE_KEY);
    else window.localStorage.setItem(STORAGE_KEY, mode);
  } catch {
    /* ignore */
  }
}

const ICONS: Record<Mode, React.ReactNode> = {
  system: (
    <svg viewBox="0 0 16 16" width="17" height="17" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.3">
      <rect x="1.5" y="2.5" width="13" height="8.5" />
      <path d="M5.5 13.5h5M8 11v2.5" />
    </svg>
  ),
  light: (
    <svg viewBox="0 0 16 16" width="17" height="17" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.3">
      <circle cx="8" cy="8" r="3" />
      <path d="M8 1v1.6M8 13.4V15M1 8h1.6M13.4 8H15M3 3l1.1 1.1M11.9 11.9L13 13M13 3l-1.1 1.1M4.1 11.9L3 13" />
    </svg>
  ),
  dark: (
    <svg viewBox="0 0 16 16" width="17" height="17" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.3">
      <path d="M13.5 9.5A5.5 5.5 0 016.5 2.5a5.5 5.5 0 103 7z" strokeLinejoin="round" />
    </svg>
  ),
};

const MODES: Mode[] = ["system", "light", "dark"];
const LABEL: Record<Mode, string> = { system: "System theme", light: "Light theme", dark: "Dark theme" };

export function ThemeToggle() {
  const [mode, setMode] = useState<Mode>("system");

  useEffect(() => {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    setMode(raw === "light" || raw === "dark" ? raw : "system");
  }, []);

  return (
    <div className="flex items-center border border-hair" role="group" aria-label="Theme">
      {MODES.map((m) => {
        const active = mode === m;
        return (
          <button
            key={m}
            type="button"
            title={LABEL[m]}
            aria-label={LABEL[m]}
            aria-pressed={active}
            onClick={() => {
              setMode(m);
              apply(m);
            }}
            className={
              "flex h-[22px] w-[24px] items-center justify-center " +
              (active ? "bg-surface-3 text-fg" : "text-fg-faint hover:text-fg-muted")
            }
          >
            {ICONS[m]}
          </button>
        );
      })}
    </div>
  );
}
