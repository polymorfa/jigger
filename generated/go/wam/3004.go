const WamTestAnonymousIdLess = 3004 // channel: private

type TestAnonymousIdLessEvent struct {
	PsTimeSinceLastEventInMin int64 `wam:"ps_time_since_last_event_in_min"` // field 1
}