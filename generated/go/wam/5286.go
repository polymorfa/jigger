const WamChatThreadWallpaper = 5286 // channel: regular

type ChatThreadWallpaperEvent struct {
	BelongsToCommunity bool `wam:"belongs_to_community"` // field 1
	ChatType MESSAGECHATTYPE `wam:"chat_type"` // field 2
	ThreadId string `wam:"thread_id"` // field 3
	WallpaperApplied bool `wam:"wallpaper_applied"` // field 4
	AppearanceType DEVICEAPPEARANCETYPE `wam:"appearance_type"` // field 5
	ChatThemeId string `wam:"chat_theme_id"` // field 6
	ChatThemeSource CHATTHEMEENTRYTYPE `wam:"chat_theme_source"` // field 7
	ColorSchemeId string `wam:"color_scheme_id"` // field 8
	WallpaperId string `wam:"wallpaper_id"` // field 9
}