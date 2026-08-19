const WamStickerStoreOpened = 3020 // channel: regular

type StickerStoreOpenedEvent struct {
	StickerStoreOpenedOrigin STICKERSTOREOPENEDORIGINTYPE `wam:"sticker_store_opened_origin"` // field 1
}