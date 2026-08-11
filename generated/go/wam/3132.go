const WamMessageHighRetryCount = 3132 // channel: regular

type MessageHighRetryCountEvent struct {
	MediaType MEDIATYPE `wam:"media_type"` // field 1
	RetryCount int64 `wam:"retry_count"` // field 2
	E2eSenderType E2EDEVICETYPE `wam:"e2e_sender_type"` // field 3
	MessageType MESSAGETYPE `wam:"message_type"` // field 4
	DeviceSizeBucket SIZEBUCKET `wam:"device_size_bucket"` // field 5
	InvisibleMessageCategory INVISIBLEMESSAGECATEGORYTYPE `wam:"invisible_message_category"` // field 6
	IsReceiverLidBased bool `wam:"is_receiver_lid_based"` // field 7
	IsSenderLidBased bool `wam:"is_sender_lid_based"` // field 8
	IsPq bool `wam:"is_pq"` // field 9
	EncryptionType ENCRYPTIONTYPECODE `wam:"encryption_type"` // field 10
	SessionScope SESSIONSCOPETYPE `wam:"session_scope"` // field 11
}