const WamBlockEventsFs = 4288 // channel: regular

type BlockEventsFsEvent struct {
	BlockEntryPoint BLOCKENTRYPOINT `wam:"block_entry_point"` // field 1
	BlockEventActionType BLOCKEVENTACTIONTYPE `wam:"block_event_action_type"` // field 2
	BlockEventIsSuspicious bool `wam:"block_event_is_suspicious"` // field 3
	BlockEventIsUnsub bool `wam:"block_event_is_unsub"` // field 4
	PastCall bool `wam:"past_call"` // field 5
	PastCallResult CALLRESULTTYPE `wam:"past_call_result"` // field 6
}