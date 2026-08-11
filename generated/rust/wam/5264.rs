pub const WAM_CHAT_WALLPAPER: u32 = 5264;

#[derive(Debug, Default)]
pub struct ChatWallpaperEvent {
    /// field 1, wire `chat_wallpaper_change_applied`
    pub chat_wallpaper_change_applied: Option<bool>,
    /// field 2, wire `chat_wallpaper_source`
    pub chat_wallpaper_source: Option<CHATWALLPAPERENTRYTYPE>,
    /// field 3, wire `chat_wallpaper_type`
    pub chat_wallpaper_type: Option<CHATWALLPAPERTYPE>,
    /// field 4, wire `chat_wallpaper_visit`
    pub chat_wallpaper_visit: Option<bool>,
    /// field 5, wire `appearance_type`
    pub appearance_type: Option<DEVICEAPPEARANCETYPE>,
}