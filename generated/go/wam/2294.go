const WamMdBootstrapAppStateDataDownloaded = 2294 // channel: regular

type MdBootstrapAppStateDataDownloadedEvent struct {
	MdSessionId string `wam:"md_session_id"` // field 1
	MdBootstrapPayloadType MDBOOTSTRAPPAYLOADTYPE `wam:"md_bootstrap_payload_type"` // field 2
	MdTimestamp int64 `wam:"md_timestamp"` // field 3
	MdBootstrapPayloadSize int64 `wam:"md_bootstrap_payload_size"` // field 4
	MdBootstrapContactsCount int64 `wam:"md_bootstrap_contacts_count"` // field 5
	MdBootstrapStepDuration int64 `wam:"md_bootstrap_step_duration"` // field 6
	MdBootstrapStepResult MDBOOTSTRAPSTEPRESULT `wam:"md_bootstrap_step_result"` // field 7
	MdStorageQuotaBytes int64 `wam:"md_storage_quota_bytes"` // field 8
	MdStorageQuotaUsedBytes int64 `wam:"md_storage_quota_used_bytes"` // field 9
	MdRegAttemptId string `wam:"md_reg_attempt_id"` // field 10
	MdBootstrapHistoryPayloadType MDBOOTSTRAPHISTORYPAYLOADTYPE `wam:"md_bootstrap_history_payload_type"` // field 11
	ApplicationState APPLICATIONSTATE `wam:"application_state"` // field 13
	AppContext string `wam:"app_context"` // field 14
	AppContextBitfield int64 `wam:"app_context_bitfield"` // field 15
	HistorySyncRetryRequestId string `wam:"history_sync_retry_request_id"` // field 16
	MdSyncFailureReason string `wam:"md_sync_failure_reason"` // field 17
}