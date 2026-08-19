const WamChatLockDaily = 4214 // channel: regular

type ChatLockDailyEvent struct {
	FolderChatsCount int64 `wam:"folder_chats_count"` // field 1
	FolderOpenCount int64 `wam:"folder_open_count"` // field 2
	NewAddChatCount int64 `wam:"new_add_chat_count"` // field 3
	NewRemoveChatCount int64 `wam:"new_remove_chat_count"` // field 4
	LockFolderHidden bool `wam:"lock_folder_hidden"` // field 5
	SecretCodeActive bool `wam:"secret_code_active"` // field 6
}