pub const WAM_STICKER_LATENCY: u32 = 5026;

#[derive(Debug, Default)]
pub struct StickerLatencyEvent {
    /// field 1, wire `size`
    pub size: Option<i64>,
    /// field 2, wire `sticker_latency_action`
    pub sticker_latency_action: Option<STICKERLATENCYACTION>,
    /// field 3, wire `sticker_latency_tt_action`
    pub sticker_latency_tt_action: Option<i64>,
}