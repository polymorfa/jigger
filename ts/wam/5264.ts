export const WamChatWallpaper = 5264 as const

export interface ChatWallpaperEvent {
  /** field 1, wire `chat_wallpaper_change_applied` */
  chatWallpaperChangeApplied?: boolean
  /** field 2, wire `chat_wallpaper_source` */
  chatWallpaperSource?: CHATWALLPAPERENTRYTYPE
  /** field 3, wire `chat_wallpaper_type` */
  chatWallpaperType?: CHATWALLPAPERTYPE
  /** field 4, wire `chat_wallpaper_visit` */
  chatWallpaperVisit?: boolean
  /** field 5, wire `appearance_type` */
  appearanceType?: DEVICEAPPEARANCETYPE
}