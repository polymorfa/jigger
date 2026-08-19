const WamKeepInChatErrors = 3698 // channel: regular

type KeepInChatErrorsEvent struct {
	IsAGroup bool `wam:"is_a_group"` // field 2
	IsAdmin bool `wam:"is_admin"` // field 3
	KicAction KICACTIONTYPE `wam:"kic_action"` // field 4
	KicErrorCode KICERRORCODETYPE `wam:"kic_error_code"` // field 5
	KicMessageEphemeralityDuration int64 `wam:"kic_message_ephemerality_duration"` // field 6
	CanEditDmSettings bool `wam:"can_edit_dm_settings"` // field 7
}