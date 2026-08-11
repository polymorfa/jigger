const WamReportingTokenValidationFailure = 5466 // channel: regular

type ReportingTokenValidationFailureEvent struct {
	EditType EDITTYPE `wam:"edit_type"` // field 1
	MessageMediaType MEDIATYPE `wam:"message_media_type"` // field 2
	MessageType MESSAGETYPE `wam:"message_type"` // field 3
	ReportingTokenValidationFailureReason REPORTINGTOKENVALIDATIONFAILUREREASON `wam:"reporting_token_validation_failure_reason"` // field 4
	IsLid bool `wam:"is_lid"` // field 5
	IsMessageRetry bool `wam:"is_message_retry"` // field 6
	Offline bool `wam:"offline"` // field 7
	IsSecretEncryptedMsg bool `wam:"is_secret_encrypted_msg"` // field 8
	ReportingTokenVersion int64 `wam:"reporting_token_version"` // field 9
	IsMessageMediaRetry bool `wam:"is_message_media_retry"` // field 10
	MessageIsForward bool `wam:"message_is_forward"` // field 11
	IsPartOfGroupHistory bool `wam:"is_part_of_group_history"` // field 13
	SenderPlatform PLATFORMTYPE `wam:"sender_platform"` // field 14
}