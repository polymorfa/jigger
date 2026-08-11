const WamDisappearingModeSettingChange = 3056 // channel: regular

type DisappearingModeSettingChangeEvent struct {
	PreviousEphemeralityDuration int64 `wam:"previous_ephemerality_duration"` // field 1
	NewEphemeralityDuration int64 `wam:"new_ephemerality_duration"` // field 2
	LastToggleTimestamp int64 `wam:"last_toggle_timestamp"` // field 3
	DisappearingModeEntryPoint DISAPPEARINGMODEENTRYPOINTTYPE `wam:"disappearing_mode_entry_point"` // field 4
	AfterReadDuration int64 `wam:"after_read_duration"` // field 5
	ErrorCode int64 `wam:"error_code"` // field 7
	IsAfterRead bool `wam:"is_after_read"` // field 8
	IsSuccess bool `wam:"is_success"` // field 9
	PreviousEphemeralityType PREVIOUSEPHEMERALITYTYPE `wam:"previous_ephemerality_type"` // field 10
}