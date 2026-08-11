const WamReportingTokenValidationFailureSender = 6094 // channel: private

type ReportingTokenValidationFailureSenderEvent struct {
	ClientMessageId string `wam:"client_message_id"` // field 1
	E2eReceiverType DEVICETYPE `wam:"e2e_receiver_type"` // field 2
	E2eSenderType E2EDEVICETYPE `wam:"e2e_sender_type"` // field 3
	EditType EDITTYPE `wam:"edit_type"` // field 4
	IsLid bool `wam:"is_lid"` // field 5
	IsMessageRetry bool `wam:"is_message_retry"` // field 6
	MessageMediaType MEDIATYPE `wam:"message_media_type"` // field 7
	MessageType MESSAGETYPE `wam:"message_type"` // field 8
	Offline bool `wam:"offline"` // field 9
	ReportingTokenValidationFailureReason REPORTINGTOKENVALIDATIONFAILUREREASON `wam:"reporting_token_validation_failure_reason"` // field 10
	SenderJid string `wam:"sender_jid"` // field 11
	IsSecretEncryptedMsg bool `wam:"is_secret_encrypted_msg"` // field 12
	ReportingTokenVersion int64 `wam:"reporting_token_version"` // field 13
	IsMessageMediaRetry bool `wam:"is_message_media_retry"` // field 14
	MessageIsForward bool `wam:"message_is_forward"` // field 15
	GroupHistoryBundleMessageId string `wam:"group_history_bundle_message_id"` // field 16
}