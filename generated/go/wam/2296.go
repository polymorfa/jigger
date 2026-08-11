const WamMdBootstrapHistoryDataDownloaded = 2296 // channel: regular

type MdBootstrapHistoryDataDownloadedEvent struct {
	MdSessionId string `wam:"md_session_id"` // field 1
	MdBootstrapPayloadType MDBOOTSTRAPPAYLOADTYPE `wam:"md_bootstrap_payload_type"` // field 2
	MdTimestamp int64 `wam:"md_timestamp"` // field 3
	MdBootstrapPayloadSize int64 `wam:"md_bootstrap_payload_size"` // field 4
	MdBootstrapMessagesCount int64 `wam:"md_bootstrap_messages_count"` // field 5
	MdBootstrapChatsCount int64 `wam:"md_bootstrap_chats_count"` // field 6
	MdBootstrapStepDuration int64 `wam:"md_bootstrap_step_duration"` // field 7
	MdBootstrapStepResult MDBOOTSTRAPSTEPRESULT `wam:"md_bootstrap_step_result"` // field 8
	MdStorageQuotaBytes int64 `wam:"md_storage_quota_bytes"` // field 9
	MdStorageQuotaUsedBytes int64 `wam:"md_storage_quota_used_bytes"` // field 10
	MdHsOldestMessageTimestamp int64 `wam:"md_hs_oldest_message_timestamp"` // field 11
	MdRegAttemptId string `wam:"md_reg_attempt_id"` // field 12
	MdBootstrapHistoryPayloadType MDBOOTSTRAPHISTORYPAYLOADTYPE `wam:"md_bootstrap_history_payload_type"` // field 13
	HistorySyncStageProgress int64 `wam:"history_sync_stage_progress"` // field 14
	HistorySyncChunkOrder int64 `wam:"history_sync_chunk_order"` // field 15
	MdSyncFailureReason string `wam:"md_sync_failure_reason"` // field 16
	ApplicationState APPLICATIONSTATE `wam:"application_state"` // field 17
	AppContext string `wam:"app_context"` // field 18
	AppContextBitfield int64 `wam:"app_context_bitfield"` // field 19
	HistorySyncRetryRequestId string `wam:"history_sync_retry_request_id"` // field 20
	MdBootstrapPayloadThumbnailsSize int64 `wam:"md_bootstrap_payload_thumbnails_size"` // field 21
}