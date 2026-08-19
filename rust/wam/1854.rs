pub const WAM_STICKER_PICKER_OPENED: u32 = 1854;

#[derive(Debug, Default)]
pub struct StickerPickerOpenedEvent {
    /// field 1, wire `sticker_picker_entry_point`
    pub sticker_picker_entry_point: Option<STICKERPICKERENTRYPOINT>,
}