const WamE2eRetryReject = 3578 // channel: regular

type E2eRetryRejectEvent struct {
	MessageType MESSAGETYPE `wam:"message_type"` // field 1
	MsgRetryCount int64 `wam:"msg_retry_count"` // field 2
	RetryRejectReason RETRYREJECTREASON `wam:"retry_reject_reason"` // field 3
	RetryRevoke bool `wam:"retry_revoke"` // field 4
	SenderDeviceType DEVICETYPE `wam:"sender_device_type"` // field 5
	InvisibleMessageCategory INVISIBLEMESSAGECATEGORYTYPE `wam:"invisible_message_category"` // field 6
	MediaType MEDIATYPE `wam:"media_type"` // field 7
	IsPq bool `wam:"is_pq"` // field 8
	EncryptionType ENCRYPTIONTYPECODE `wam:"encryption_type"` // field 9
	E2eSenderType E2EDEVICETYPE `wam:"e2e_sender_type"` // field 10
	MessageKeyHash string `wam:"message_key_hash"` // field 11
	SessionScope SESSIONSCOPETYPE `wam:"session_scope"` // field 12
	PqFallbackReason PQFALLBACKREASON `wam:"pq_fallback_reason"` // field 13
}