// Shared constants safe to import from both server and client code.

export const REPOS = ["whatsmeow", "baileys", "whatsapp-rust"] as const;
export type Repo = (typeof REPOS)[number];

// Short labels for dense table columns.
export const REPO_SHORT: Record<string, string> = {
  whatsmeow: "wmeow",
  baileys: "baileys",
  "whatsapp-rust": "wa-rust",
};
