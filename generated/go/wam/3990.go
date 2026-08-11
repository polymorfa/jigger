const WamEditMessageSend = 3990 // channel: regular

type EditMessageSendEvent struct {
	EditDuration int64 `wam:"edit_duration"` // field 1
	EditType EDITTYPE `wam:"edit_type"` // field 2
	MessageSendResultIsTerminal bool `wam:"message_send_result_is_terminal"` // field 3
	MessageType MESSAGETYPE `wam:"message_type"` // field 4
	ResendCount int64 `wam:"resend_count"` // field 5
	RetryCount int64 `wam:"retry_count"` // field 6
	MediaType MEDIATYPE `wam:"media_type"` // field 8
	TypeOfGroup TYPEOFGROUPENUM `wam:"type_of_group"` // field 9
	EditedMessageId string `wam:"edited_message_id"` // field 10
}