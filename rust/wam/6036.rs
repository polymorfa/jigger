pub const WAM_CHAT_THEME_SCREEN: u32 = 6036;

#[derive(Debug, Default)]
pub struct ChatThemeScreenEvent {
    /// field 1, wire `appearance_type`
    pub appearance_type: Option<DEVICEAPPEARANCETYPE>,
    /// field 2, wire `chat_theme_change_applied`
    pub chat_theme_change_applied: Option<bool>,
    /// field 3, wire `chat_theme_id`
    pub chat_theme_id: Option<String>,
    /// field 4, wire `chat_theme_source`
    pub chat_theme_source: Option<CHATTHEMEENTRYTYPE>,
    /// field 5, wire `chat_wallpaper_type`
    pub chat_wallpaper_type: Option<CHATWALLPAPERTYPE>,
    /// field 6, wire `color_scheme_id`
    pub color_scheme_id: Option<String>,
    /// field 7, wire `wallpaper_id`
    pub wallpaper_id: Option<String>,
}