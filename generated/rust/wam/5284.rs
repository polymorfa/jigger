pub const WAM_CHAT_LIST_WALLPAPER: u32 = 5284;

#[derive(Debug, Default)]
pub struct ChatListWallpaperEvent {
    /// field 1, wire `any_wallpaper_applied`
    pub any_wallpaper_applied: Option<bool>,
    /// field 2, wire `chat_themes_enabled`
    pub chat_themes_enabled: Option<bool>,
}