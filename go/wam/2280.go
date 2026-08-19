const WamChatMute = 2280 // channel: regular

type ChatMuteEvent struct {
	MuteDuration string `wam:"mute_duration"` // field 1
	MuteGroupSize int64 `wam:"mute_group_size"` // field 2
	ActionConducted ACTIONCONDUCTED `wam:"action_conducted"` // field 3
	MuteChatType MUTECHATTYPE `wam:"mute_chat_type"` // field 4
	ChatMuteNotificationChoice CHATMUTENOTIFICATIONCHOICE `wam:"chat_mute_notification_choice"` // field 5
	MuteEntryPoint MUTEENTRYPOINT `wam:"mute_entry_point"` // field 6
	WaOfficialAccountName WAOFFICIALACCOUNTNAME `wam:"wa_official_account_name"` // field 7
}