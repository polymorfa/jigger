const WamIncomingMessageDrop = 3724 // channel: regular

type IncomingMessageDropEvent struct {
	E2eCiphertextType E2ECIPHERTEXTTYPE `wam:"e2e_ciphertext_type"` // field 1
	E2eDestination E2EDESTINATION `wam:"e2e_destination"` // field 2
	E2eSenderType E2EDEVICETYPE `wam:"e2e_sender_type"` // field 3
	MessageDropReason MESSAGEDROPREASONTYPE `wam:"message_drop_reason"` // field 4
	MessageMediaType MEDIATYPE `wam:"message_media_type"` // field 5
	Offline bool `wam:"offline"` // field 6
	RetryCount int64 `wam:"retry_count"` // field 7
	RevokeType REVOKETYPE `wam:"revoke_type"` // field 8
	E2eFailureReason E2EFAILUREREASON `wam:"e2e_failure_reason"` // field 9
	TypeOfGroup TYPEOFGROUPENUM `wam:"type_of_group"` // field 10
	OfflineCount int64 `wam:"offline_count"` // field 11
	AgentEngagementType AGENTENGAGEMENTENUMTYPE `wam:"agent_engagement_type"` // field 12
	InvisibleMessageCategory INVISIBLEMESSAGECATEGORYTYPE `wam:"invisible_message_category"` // field 13
	BotType BOTTYPE `wam:"bot_type"` // field 14
	IsLid bool `wam:"is_lid"` // field 15
	LocalAddressingMode ADDRESSINGMODE `wam:"local_addressing_mode"` // field 16
	EncryptionType ENCRYPTIONTYPECODE `wam:"encryption_type"` // field 18
	IsSimpleSignal bool `wam:"is_simple_signal"` // field 19
	IsPq bool `wam:"is_pq"` // field 20
	SessionScope SESSIONSCOPETYPE `wam:"session_scope"` // field 21
	ProcessingDeferred bool `wam:"processing_deferred"` // field 22
	SenderPlatform PLATFORMTYPE `wam:"sender_platform"` // field 23
	TraceIdInt int64 `wam:"trace_id_int"` // field 24
}