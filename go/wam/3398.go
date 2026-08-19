const WamDisappearingMessageChatPicker = 3398 // channel: regular

type DisappearingMessageChatPickerEvent struct {
	ChatsSelected int64 `wam:"chats_selected"` // field 1
	DmChatPickerEntryPoint DMCHATPICKERENTRYPOINTTYPE `wam:"dm_chat_picker_entry_point"` // field 2
	DmChatPickerEventName DMCHATPICKEREVENTNAMETYPE `wam:"dm_chat_picker_event_name"` // field 3
	EphemeralityDuration int64 `wam:"ephemerality_duration"` // field 4
	GroupChatsSelected int64 `wam:"group_chats_selected"` // field 5
	NewlyEphemeralChats int64 `wam:"newly_ephemeral_chats"` // field 7
	TotalChatsInChatPicker int64 `wam:"total_chats_in_chat_picker"` // field 8
	GroupSizeDistributionJson string `wam:"group_size_distribution_json"` // field 9
}