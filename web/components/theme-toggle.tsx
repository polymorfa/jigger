"use client";

import { useEffect, useState } from "react";
import { MonitorIcon, MoonIcon, SunIcon } from "lucide-react";
import { cn } from "@/lib/utils";

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

const MODES: { id: Mode; label: string; Icon: typeof SunIcon }[] = [
  { id: "system", label: "System theme", Icon: MonitorIcon },
  { id: "light", label: "Light theme", Icon: SunIcon },
  { id: "dark", label: "Dark theme", Icon: MoonIcon },
];

/**
 * Three states, because "follow the system" is a real preference and a two-way
 * switch cannot express it — once you toggle it you are pinned forever.
 *
 * The icons are from the same set as the rest of the chrome. The hand-drawn
 * SVGs this replaced were each stroked at a different weight and crammed into a
 * 22px box, so the row read as three unrelated marks.
 */
export function ThemeToggle() {
  const [mode, setMode] = useState<Mode>("system");

  useEffect(() => {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    setMode(raw === "light" || raw === "dark" ? raw : "system");
  }, []);

  return (
    <div
      className="bg-surface flex items-center border p-px"
      role="group"
      aria-label="Theme"
    >
      {MODES.map(({ id, label, Icon }) => (
        <button
          key={id}
          type="button"
          title={label}
          aria-label={label}
          aria-pressed={mode === id}
          onClick={() => {
            setMode(id);
            apply(id);
          }}
          className={cn(
            "flex size-6 items-center justify-center transition-colors",
            mode === id
              ? "bg-secondary text-foreground"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          <Icon className="size-3.5" strokeWidth={1.75} />
        </button>
      ))}
    </div>
  );
}
