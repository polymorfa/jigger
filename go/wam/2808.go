const WamChatFolderOpen = 2808 // channel: regular

type ChatFolderOpenEvent struct {
	FolderType string `wam:"folder_type"` // field 1
	ActivityIndicatorCount int64 `wam:"activity_indicator_count"` // field 2
	HasImportantMessages bool `wam:"has_important_messages"` // field 3
}