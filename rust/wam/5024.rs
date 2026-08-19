pub const WAM_STICKER_ERROR: u32 = 5024;

#[derive(Debug, Default)]
pub struct StickerErrorEvent {
    /// field 1, wire `sticker_error_type`
    pub sticker_error_type: Option<STICKERERRORTYPE>,
    /// field 2, wire `sticker_message_type`
    pub sticker_message_type: Option<STICKERSENDMESSAGETYPE>,
}