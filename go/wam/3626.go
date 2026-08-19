const WamMessageDeleteActions = 3626 // channel: regular

type MessageDeleteActionsEvent struct {
	DeleteActionType DELETEACTIONTYPE `wam:"delete_action_type"` // field 1
	IsAGroup bool `wam:"is_a_group"` // field 2
	MessagesDeleted int64 `wam:"messages_deleted"` // field 3
	ThreadId string `wam:"thread_id"` // field 4
	MediaType MEDIATYPE `wam:"media_type"` // field 6
	IsFailedMessage bool `wam:"is_failed_message"` // field 7
	MessageCreateTs int64 `wam:"message_create_ts"` // field 8
}