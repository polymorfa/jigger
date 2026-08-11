const WamChatLockAction = 4212 // channel: regular

type ChatLockActionEvent struct {
	ChatLockActionType CHATLOCKACTIONTYPE `wam:"chat_lock_action_type"` // field 1
	ChatLockIsGroup bool `wam:"chat_lock_is_group"` // field 2
	ActionEntryPoint ACTIONENTRYPOINT `wam:"action_entry_point"` // field 3
	ActionFolderChatsCount int64 `wam:"action_folder_chats_count"` // field 4
	AuthType AUTHTYPE `wam:"auth_type"` // field 5
}