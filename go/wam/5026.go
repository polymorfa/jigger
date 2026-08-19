const WamStickerLatency = 5026 // channel: regular

type StickerLatencyEvent struct {
	Size int64 `wam:"size"` // field 1
	StickerLatencyAction STICKERLATENCYACTION `wam:"sticker_latency_action"` // field 2
	StickerLatencyTtAction int64 `wam:"sticker_latency_tt_action"` // field 3
}