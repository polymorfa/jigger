const WamMessageCapping = 6854 // channel: regular

type MessageCappingEvent struct {
	ExtraAttributes string `wam:"extra_attributes"` // field 2
	Surface SURFACETYPE `wam:"surface"` // field 4
	UserActionTarget string `wam:"user_action_target"` // field 5
	MessageCappingActionType MESSAGECAPPINGACTIONTYPE `wam:"message_capping_action_type"` // field 6
	MessageCappingSequence int64 `wam:"message_capping_sequence"` // field 7
	MessageCappingSession string `wam:"message_capping_session"` // field 8
	MessageCappingEntryPoint SURFACETYPE `wam:"message_capping_entry_point"` // field 9
}