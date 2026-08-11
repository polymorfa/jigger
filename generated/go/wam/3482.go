const WamDisappearingMessageKeepInChat = 3482 // channel: regular

type DisappearingMessageKeepInChatEvent struct {
	ChatEphemeralityDuration int64 `wam:"chat_ephemerality_duration"` // field 1
	IsAGroup bool `wam:"is_a_group"` // field 2
	IsAdmin bool `wam:"is_admin"` // field 3
	KeptDelta int64 `wam:"kept_delta"` // field 4
	KicActionName KICACTIONNAMETYPE `wam:"kic_action_name"` // field 5
	KicActor KICACTORTYPE `wam:"kic_actor"` // field 6
	KicEntryPoint KICENTRYPOINTTYPE `wam:"kic_entry_point"` // field 7
	MediaType MEDIATYPE `wam:"media_type"` // field 8
	MessageExpiredOnUnkeep bool `wam:"message_expired_on_unkeep"` // field 9
	MessageExpiryTimer int64 `wam:"message_expiry_timer"` // field 10
	MessagesInFolder int64 `wam:"messages_in_folder"` // field 11
	MessagesSelected int64 `wam:"messages_selected"` // field 12
	ThreadId string `wam:"thread_id"` // field 13
	KeptCount int64 `wam:"kept_count"` // field 15
	CanEditDmSettings bool `wam:"can_edit_dm_settings"` // field 16
}