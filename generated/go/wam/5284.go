const WamChatListWallpaper = 5284 // channel: regular

type ChatListWallpaperEvent struct {
	AnyWallpaperApplied bool `wam:"any_wallpaper_applied"` // field 1
	ChatThemesEnabled bool `wam:"chat_themes_enabled"` // field 2
}