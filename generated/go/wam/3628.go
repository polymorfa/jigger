const WamSnackbarDeleteUndo = 3628 // channel: regular

type SnackbarDeleteUndoEvent struct {
	IsAGroup bool `wam:"is_a_group"` // field 1
	MessagesUndeleted int64 `wam:"messages_undeleted"` // field 2
	SnackbarActionType SNACKBARACTIONTYPE `wam:"snackbar_action_type"` // field 3
	ThreadId string `wam:"thread_id"` // field 4
	MediaType MEDIATYPE `wam:"media_type"` // field 6
}