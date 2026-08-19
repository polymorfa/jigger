const WamLimitSharingSettingUpdate = 6390 // channel: regular

type LimitSharingSettingUpdateEvent struct {
	ThreadId string `wam:"thread_id"` // field 1
	ToggleUpdateAction TOGGLEUPDATEACTION `wam:"toggle_update_action"` // field 2
	OpusAction OPUSACTION `wam:"opus_action"` // field 3
}