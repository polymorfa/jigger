const WamChatThemeScreen = 6036 // channel: regular

type ChatThemeScreenEvent struct {
	AppearanceType DEVICEAPPEARANCETYPE `wam:"appearance_type"` // field 1
	ChatThemeChangeApplied bool `wam:"chat_theme_change_applied"` // field 2
	ChatThemeId string `wam:"chat_theme_id"` // field 3
	ChatThemeSource CHATTHEMEENTRYTYPE `wam:"chat_theme_source"` // field 4
	ChatWallpaperType CHATWALLPAPERTYPE `wam:"chat_wallpaper_type"` // field 5
	ColorSchemeId string `wam:"color_scheme_id"` // field 6
	WallpaperId string `wam:"wallpaper_id"` // field 7
}