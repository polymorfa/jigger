pub const WAM_STICKER_STORE_OPENED: u32 = 3020;

#[derive(Debug, Default)]
pub struct StickerStoreOpenedEvent {
    /// field 1, wire `sticker_store_opened_origin`
    pub sticker_store_opened_origin: Option<STICKERSTOREOPENEDORIGINTYPE>,
}