const WamRevokeMessageSend = 3656 // channel: regular

type RevokeMessageSendEvent struct {
	MessageSendResultIsTerminal bool `wam:"message_send_result_is_terminal"` // field 1
	MessageType MESSAGETYPE `wam:"message_type"` // field 2
	ResendCount int64 `wam:"resend_count"` // field 3
	RetryCount int64 `wam:"retry_count"` // field 4
	RevokeDuration int64 `wam:"revoke_duration"` // field 5
	RevokeType REVOKETYPE `wam:"revoke_type"` // field 6
}