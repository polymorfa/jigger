const WamChatWallpaper = 5264 // channel: regular

type ChatWallpaperEvent struct {
	ChatWallpaperChangeApplied bool `wam:"chat_wallpaper_change_applied"` // field 1
	ChatWallpaperSource CHATWALLPAPERENTRYTYPE `wam:"chat_wallpaper_source"` // field 2
	ChatWallpaperType CHATWALLPAPERTYPE `wam:"chat_wallpaper_type"` // field 3
	ChatWallpaperVisit bool `wam:"chat_wallpaper_visit"` // field 4
	AppearanceType DEVICEAPPEARANCETYPE `wam:"appearance_type"` // field 5
}