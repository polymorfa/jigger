pub const WAM_CHAT_THREAD_WALLPAPER: u32 = 5286;

#[derive(Debug, Default)]
pub struct ChatThreadWallpaperEvent {
    /// field 1, wire `belongs_to_community`
    pub belongs_to_community: Option<bool>,
    /// field 2, wire `chat_type`
    pub chat_type: Option<MESSAGECHATTYPE>,
    /// field 3, wire `thread_id`
    pub thread_id: Option<String>,
    /// field 4, wire `wallpaper_applied`
    pub wallpaper_applied: Option<bool>,
    /// field 5, wire `appearance_type`
    pub appearance_type: Option<DEVICEAPPEARANCETYPE>,
    /// field 6, wire `chat_theme_id`
    pub chat_theme_id: Option<String>,
    /// field 7, wire `chat_theme_source`
    pub chat_theme_source: Option<CHATTHEMEENTRYTYPE>,
    /// field 8, wire `color_scheme_id`
    pub color_scheme_id: Option<String>,
    /// field 9, wire `wallpaper_id`
    pub wallpaper_id: Option<String>,
}