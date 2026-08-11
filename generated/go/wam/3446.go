const WamDisappearingModeSettingEvents = 3446 // channel: regular

type DisappearingModeSettingEventsEvent struct {
	DisappearingModeSettingEventName DISAPPEARINGMODESETTINGEVENTNAMETYPE `wam:"disappearing_mode_setting_event_name"` // field 1
	LastToggleTimestamp int64 `wam:"last_toggle_timestamp"` // field 2
	NewEphemeralityDuration int64 `wam:"new_ephemerality_duration"` // field 3
	PreviousEphemeralityDuration int64 `wam:"previous_ephemerality_duration"` // field 4
	DisappearingModeEntryPoint DISAPPEARINGMODEENTRYPOINTTYPE `wam:"disappearing_mode_entry_point"` // field 5
	IsAfterRead bool `wam:"is_after_read"` // field 6
}