const WamChatAction = 2312 // channel: regular

type ChatActionEvent struct {
	ChatActionType CHATACTIONTYPE `wam:"chat_action_type"` // field 1
	ChatActionEntryPoint CHATACTIONENTRYPOINT `wam:"chat_action_entry_point"` // field 2
	ChatActionChatType CHATACTIONCHATTYPE `wam:"chat_action_chat_type"` // field 3
	ChatActionMuteDuration string `wam:"chat_action_mute_duration"` // field 4
}