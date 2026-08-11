const WamStickerPickerOpened = 1854 // channel: regular

type StickerPickerOpenedEvent struct {
	StickerPickerEntryPoint STICKERPICKERENTRYPOINT `wam:"sticker_picker_entry_point"` // field 1
}