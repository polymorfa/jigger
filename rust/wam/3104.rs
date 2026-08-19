pub const WAM_WEBC_STICKER_MAKER_EVENTS: u32 = 3104;

#[derive(Debug, Default)]
pub struct WebcStickerMakerEventsEvent {
    /// field 1, wire `sticker_maker_event_name`
    pub sticker_maker_event_name: Option<WEBCSTICKERMAKEREVENTNAMETYPE>,
}