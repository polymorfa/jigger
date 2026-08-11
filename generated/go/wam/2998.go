const WamMdBootstrapHistoryDataReceived = 2998 // channel: regular

type MdBootstrapHistoryDataReceivedEvent struct {
	MdSessionId string `wam:"md_session_id"` // field 1
	MdBootstrapPayloadType MDBOOTSTRAPPAYLOADTYPE `wam:"md_bootstrap_payload_type"` // field 2
	MdBootstrapHistoryPayloadType MDBOOTSTRAPHISTORYPAYLOADTYPE `wam:"md_bootstrap_history_payload_type"` // field 3
	MdTimestamp int64 `wam:"md_timestamp"` // field 4
	HistorySyncStageProgress int64 `wam:"history_sync_stage_progress"` // field 5
	HistorySyncChunkOrder int64 `wam:"history_sync_chunk_order"` // field 6
	HistorySyncRetryRequestId string `wam:"history_sync_retry_request_id"` // field 7
	MdSyncFailureReason string `wam:"md_sync_failure_reason"` // field 8
}