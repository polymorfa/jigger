const WamDialogEvent = 7068 // channel: regular

type DialogEventEvent struct {
	DialogEventSource string `wam:"dialog_event_source"` // field 1
	DialogEventType DIALOGEVENTTYPE `wam:"dialog_event_type"` // field 2
	DialogName DIALOGNAMETYPE `wam:"dialog_name"` // field 3
}