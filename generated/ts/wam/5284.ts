export const WamChatListWallpaper = 5284 as const

export interface ChatListWallpaperEvent {
  /** field 1, wire `any_wallpaper_applied` */
  anyWallpaperApplied?: boolean
  /** field 2, wire `chat_themes_enabled` */
  chatThemesEnabled?: boolean
}