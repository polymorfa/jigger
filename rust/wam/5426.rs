pub const WAM_WEB_HD_MEDIA_AWARENESS_INTERACTION: u32 = 5426;

#[derive(Debug, Default)]
pub struct WebHdMediaAwarenessInteractionEvent {
    /// field 1, wire `hd_media_selected`
    pub hd_media_selected: Option<bool>,
}