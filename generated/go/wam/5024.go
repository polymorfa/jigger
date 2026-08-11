const WamStickerError = 5024 // channel: regular

type StickerErrorEvent struct {
	StickerErrorType STICKERERRORTYPE `wam:"sticker_error_type"` // field 1
	StickerMessageType STICKERSENDMESSAGETYPE `wam:"sticker_message_type"` // field 2
}