const WamTsExternal = 4574 // channel: regular

type TsExternalEvent struct {
	RelativeTimestampMs int64 `wam:"relative_timestamp_ms"` // field 1
	TsDuration int64 `wam:"ts_duration"` // field 2
	TsExternalEventSource TSEXTERNALEVENTSOURCE `wam:"ts_external_event_source"` // field 3
	TsSessionId int64 `wam:"ts_session_id"` // field 4
	TsTimestampMs int64 `wam:"ts_timestamp_ms"` // field 5
	UnifiedSessionId string `wam:"unified_session_id"` // field 6
}