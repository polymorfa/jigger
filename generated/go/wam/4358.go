const WamWamDroppedEvent = 4358 // channel: regular

type WamDroppedEventEvent struct {
	DroppedEventCode int64 `wam:"dropped_event_code"` // field 1
	DroppedEventCount int64 `wam:"dropped_event_count"` // field 2
	IsFromWamsys bool `wam:"is_from_wamsys"` // field 3
}