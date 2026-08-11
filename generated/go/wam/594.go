const WamGroupCreate = 594 // channel: regular

type GroupCreateEvent struct {
	GroupCreateEntryPoint GROUPCREATEENTRYPOINT `wam:"group_create_entry_point"` // field 1
	EphemeralityDuration int64 `wam:"ephemerality_duration"` // field 2
	HasGroupName bool `wam:"has_group_name"` // field 3
}