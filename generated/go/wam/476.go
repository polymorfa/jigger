const WamE2eMessageSend = 476 // channel: regular

type E2eMessageSendEvent struct {
	E2eSuccessful bool `wam:"e2e_successful"` // field 1
	E2eFailureReason E2EFAILUREREASON `wam:"e2e_failure_reason"` // field 2
	RetryCount int64 `wam:"retry_count"` // field 3
	E2eDestination E2EDESTINATION `wam:"e2e_destination"` // field 4
	E2eCiphertextType E2ECIPHERTEXTTYPE `wam:"e2e_ciphertext_type"` // field 5
	E2eCiphertextVersion int64 `wam:"e2e_ciphertext_version"` // field 6
	MessageMediaType MEDIATYPE `wam:"message_media_type"` // field 7
	E2eReceiverType DEVICETYPE `wam:"e2e_receiver_type"` // field 8
	EncRetryCount int64 `wam:"enc_retry_count"` // field 9
	MessageIsInvisible bool `wam:"message_is_invisible"` // field 10
	RevokeType REVOKETYPE `wam:"revoke_type"` // field 11
	IsLid bool `wam:"is_lid"` // field 12
	TypeOfGroup TYPEOFGROUPENUM `wam:"type_of_group"` // field 13
	EditType EDITTYPE `wam:"edit_type"` // field 14
	AgentEngagementType AGENTENGAGEMENTENUMTYPE `wam:"agent_engagement_type"` // field 15
	LocalAddressingMode ADDRESSINGMODE `wam:"local_addressing_mode"` // field 16
	BotType BOTTYPE `wam:"bot_type"` // field 17
	E2eBackfill bool `wam:"e2e_backfill"` // field 18
	E2eReceiverDeviceType E2EDEVICETYPE `wam:"e2e_receiver_device_type"` // field 19
	MessageDistributionType MESSAGEDISTRIBUTIONENUMTYPE `wam:"message_distribution_type"` // field 20
	InvisibleMessageCategory INVISIBLEMESSAGECATEGORYTYPE `wam:"invisible_message_category"` // field 21
	GroupEncryptionState GROUPENCRYPTIONTYPE `wam:"group_encryption_state"` // field 22
	EncryptionType ENCRYPTIONTYPECODE `wam:"encryption_type"` // field 23
	IsSimpleSignal bool `wam:"is_simple_signal"` // field 24
	IsPq bool `wam:"is_pq"` // field 25
	InitialSendAttemptReachabilityStatus REACHABILITYSTATUS `wam:"initial_send_attempt_reachability_status"` // field 26
	SessionScope SESSIONSCOPETYPE `wam:"session_scope"` // field 27
	MessageTypeStr string `wam:"message_type_str"` // field 28
}