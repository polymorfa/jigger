export const WamChatThemeScreen = 6036 as const

export interface ChatThemeScreenEvent {
  /** field 1, wire `appearance_type` */
  appearanceType?: DEVICEAPPEARANCETYPE
  /** field 2, wire `chat_theme_change_applied` */
  chatThemeChangeApplied?: boolean
  /** field 3, wire `chat_theme_id` */
  chatThemeId?: string
  /** field 4, wire `chat_theme_source` */
  chatThemeSource?: CHATTHEMEENTRYTYPE
  /** field 5, wire `chat_wallpaper_type` */
  chatWallpaperType?: CHATWALLPAPERTYPE
  /** field 6, wire `color_scheme_id` */
  colorSchemeId?: string
  /** field 7, wire `wallpaper_id` */
  wallpaperId?: string
}