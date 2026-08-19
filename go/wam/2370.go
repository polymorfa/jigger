const WamEphemeralSettingChange = 2370 // channel: regular

type EphemeralSettingChangeEvent struct {
	ChatEphemeralityDuration int64 `wam:"chat_ephemerality_duration"` // field 1
	PreviousEphemeralityDuration int64 `wam:"previous_ephemerality_duration"` // field 2
	EphemeralSettingEntryPoint EPHEMERALSETTINGENTRYPOINTTYPE `wam:"ephemeral_setting_entry_point"` // field 3
	EphemeralSettingGroupSize PRECISESIZEBUCKET `wam:"ephemeral_setting_group_size"` // field 5
	ThreadId string `wam:"thread_id"` // field 6
	AfterReadDuration int64 `wam:"after_read_duration"` // field 7
	ErrorCode int64 `wam:"error_code"` // field 9
	IsAfterRead bool `wam:"is_after_read"` // field 10
	IsSuccess bool `wam:"is_success"` // field 11
	PreviousEphemeralityType PREVIOUSEPHEMERALITYTYPE `wam:"previous_ephemerality_type"` // field 12
}