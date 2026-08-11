const WamWebcMediaEditorSend = 2890 // channel: regular

type WebcMediaEditorSendEvent struct {
	ImageCount int64 `wam:"image_count"` // field 1
	EditedImageCount int64 `wam:"edited_image_count"` // field 2
	PaintedImageCount int64 `wam:"painted_image_count"` // field 3
	TextLayerCount int64 `wam:"text_layer_count"` // field 4
	EmojiLayerCount int64 `wam:"emoji_layer_count"` // field 5
	StickerLayerCount int64 `wam:"sticker_layer_count"` // field 6
	BlurImageCount int64 `wam:"blur_image_count"` // field 7
}