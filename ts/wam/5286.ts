export const WamChatThreadWallpaper = 5286 as const

export interface ChatThreadWallpaperEvent {
  /** field 1, wire `belongs_to_community` */
  belongsToCommunity?: boolean
  /** field 2, wire `chat_type` */
  chatType?: MESSAGECHATTYPE
  /** field 3, wire `thread_id` */
  threadId?: string
  /** field 4, wire `wallpaper_applied` */
  wallpaperApplied?: boolean
  /** field 5, wire `appearance_type` */
  appearanceType?: DEVICEAPPEARANCETYPE
  /** field 6, wire `chat_theme_id` */
  chatThemeId?: string
  /** field 7, wire `chat_theme_source` */
  chatThemeSource?: CHATTHEMEENTRYTYPE
  /** field 8, wire `color_scheme_id` */
  colorSchemeId?: string
  /** field 9, wire `wallpaper_id` */
  wallpaperId?: string
}