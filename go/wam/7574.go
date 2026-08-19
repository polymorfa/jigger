const WamGroupSuspensionAppealEvents = 7574 // channel: regular

type GroupSuspensionAppealEventsEvent struct {
	GroupSuspensionAppealUiAction GROUPSUSPENSIONAPPEALUIACTION `wam:"group_suspension_appeal_ui_action"` // field 1
	GroupSuspensionAppealUiSurface GROUPSUSPENSIONAPPEALUISURFACE `wam:"group_suspension_appeal_ui_surface"` // field 2
	GroupTypeClient GROUPTYPECLIENT `wam:"group_type_client"` // field 3
	IsAdmin bool `wam:"is_admin"` // field 4
	GroupJid string `wam:"group_jid"` // field 5
	GroupSuspensionAppealErrorMessage string `wam:"group_suspension_appeal_error_message"` // field 6
	GroupSuspensionAppealEntryPoint GROUPSUSPENSIONAPPEALENTRYPOINT `wam:"group_suspension_appeal_entry_point"` // field 7
}