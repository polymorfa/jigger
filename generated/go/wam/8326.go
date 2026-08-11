const WamWebcQuickAction = 8326 // channel: regular

type WebcQuickActionEvent struct {
	WebcQuickActionEventType WEBCQUICKACTIONEVENTTYPE `wam:"webc_quick_action_event_type"` // field 1
	WebcQuickActionId WEBCQUICKACTIONID `wam:"webc_quick_action_id"` // field 2
	WebcQuickActionIsCustomized bool `wam:"webc_quick_action_is_customized"` // field 3
	WebcQuickActionNumVisible int64 `wam:"webc_quick_action_num_visible"` // field 4
	WebcQuickActionSlotPosition int64 `wam:"webc_quick_action_slot_position"` // field 5
	WebcQuickActionSurface WEBCQUICKACTIONSURFACE `wam:"webc_quick_action_surface"` // field 6
}