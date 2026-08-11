pub const WAM_WEBC_EMOJI_OPEN: u32 = 1166;

#[derive(Debug, Default)]
pub struct WebcEmojiOpenEvent {
    /// field 1, wire `webc_emoji_open_tab`
    pub webc_emoji_open_tab: Option<String>,
}