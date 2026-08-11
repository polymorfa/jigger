const WamMdBootstrapDataApplied = 2298 // channel: regular

type MdBootstrapDataAppliedEvent struct {
	MdSessionId string `wam:"md_session_id"` // field 1
	MdBootstrapSource MDBOOTSTRAPSOURCE `wam:"md_bootstrap_source"` // field 2
	MdBootstrapPayloadType MDBOOTSTRAPPAYLOADTYPE `wam:"md_bootstrap_payload_type"` // field 3
	MdTimestamp int64 `wam:"md_timestamp"` // field 4
	Collection COLLECTION `wam:"collection"` // field 5
	MdBootstrapStepDuration int64 `wam:"md_bootstrap_step_duration"` // field 6
	UsedSnapshot bool `wam:"used_snapshot"` // field 7
	MdBootstrapContactsCount int64 `wam:"md_bootstrap_contacts_count"` // field 8
	MdRegAttemptId string `wam:"md_reg_attempt_id"` // field 9
	MdBootstrapHistoryPayloadType MDBOOTSTRAPHISTORYPAYLOADTYPE `wam:"md_bootstrap_history_payload_type"` // field 10
	HistorySyncStageProgress int64 `wam:"history_sync_stage_progress"` // field 11
	MdBootstrapStepResult MDBOOTSTRAPSTEPRESULT `wam:"md_bootstrap_step_result"` // field 12
	SentViaMms bool `wam:"sent_via_mms"` // field 13
	HistorySyncChunkOrder int64 `wam:"history_sync_chunk_order"` // field 14
	ChunkChatsApplied int64 `wam:"chunk_chats_applied"` // field 15
	ChunkMsgsApplied int64 `wam:"chunk_msgs_applied"` // field 16
	MdBootstrapChatsCount int64 `wam:"md_bootstrap_chats_count"` // field 17
	MdBootstrapMessagesCount int64 `wam:"md_bootstrap_messages_count"` // field 18
	MdDroppedMsgType string `wam:"md_dropped_msg_type"` // field 19
	MdSyncFailureReason string `wam:"md_sync_failure_reason"` // field 20
	ApplicationState APPLICATIONSTATE `wam:"application_state"` // field 21
	AppContext string `wam:"app_context"` // field 22
	AppContextBitfield int64 `wam:"app_context_bitfield"` // field 23
	HistorySyncRetryRequestId string `wam:"history_sync_retry_request_id"` // field 24
	MdBootstrapInlineContactsCount int64 `wam:"md_bootstrap_inline_contacts_count"` // field 25
	GkContext string `wam:"gk_context"` // field 26
}