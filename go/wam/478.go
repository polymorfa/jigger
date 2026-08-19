const WamE2eMessageRecv = 478 // channel: regular

type E2eMessageRecvEvent struct {
	E2eSuccessful bool `wam:"e2e_successful"` // field 1
	E2eFailureReason E2EFAILUREREASON `wam:"e2e_failure_reason"` // field 2
	RetryCount int64 `wam:"retry_count"` // field 3
	E2eDestination E2EDESTINATION `wam:"e2e_destination"` // field 4
	E2eCiphertextType E2ECIPHERTEXTTYPE `wam:"e2e_ciphertext_type"` // field 5
	E2eCiphertextVersion int64 `wam:"e2e_ciphertext_version"` // field 6
	MessageMediaType MEDIATYPE `wam:"message_media_type"` // field 7
	E2eSenderType E2EDEVICETYPE `wam:"e2e_sender_type"` // field 8
	Offline bool `wam:"offline"` // field 9
	RevokeType REVOKETYPE `wam:"revoke_type"` // field 10
	IsLid bool `wam:"is_lid"` // field 11
	TypeOfGroup TYPEOFGROUPENUM `wam:"type_of_group"` // field 12
	EditType EDITTYPE `wam:"edit_type"` // field 13
	StanzaType STANZATYPE `wam:"stanza_type"` // field 14
	AgentEngagementType AGENTENGAGEMENTENUMTYPE `wam:"agent_engagement_type"` // field 15
	LocalAddressingMode ADDRESSINGMODE `wam:"local_addressing_mode"` // field 16
	MessageAddressingMode ADDRESSINGMODE `wam:"message_addressing_mode"` // field 17
	ServerAddressingMode ADDRESSINGMODE `wam:"server_addressing_mode"` // field 18
	BotType BOTTYPE `wam:"bot_type"` // field 19
	IsHostedChat bool `wam:"is_hosted_chat"` // field 20
	MessageDistributionType MESSAGEDISTRIBUTIONENUMTYPE `wam:"message_distribution_type"` // field 21
	InvisibleMessageCategory INVISIBLEMESSAGECATEGORYTYPE `wam:"invisible_message_category"` // field 22
	GroupEncryptionState GROUPENCRYPTIONTYPE `wam:"group_encryption_state"` // field 23
	EncryptionType ENCRYPTIONTYPECODE `wam:"encryption_type"` // field 25
	IsSimpleSignal bool `wam:"is_simple_signal"` // field 26
	IsPq bool `wam:"is_pq"` // field 27
	SessionScope SESSIONSCOPETYPE `wam:"session_scope"` // field 28
	ProcessingDeferred bool `wam:"processing_deferred"` // field 29
	SenderPlatform PLATFORMTYPE `wam:"sender_platform"` // field 30
	TraceIdInt int64 `wam:"trace_id_int"` // field 31
}