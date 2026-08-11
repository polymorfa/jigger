const WamMdBootstrapHistoryDataStartDownloading = 4650 // channel: regular

type MdBootstrapHistoryDataStartDownloadingEvent struct {
	HistorySyncChunkOrder int64 `wam:"history_sync_chunk_order"` // field 1
	HistorySyncStageProgress int64 `wam:"history_sync_stage_progress"` // field 2
	MdBootstrapHistoryPayloadType MDBOOTSTRAPHISTORYPAYLOADTYPE `wam:"md_bootstrap_history_payload_type"` // field 3
	MdBootstrapPayloadSize int64 `wam:"md_bootstrap_payload_size"` // field 4
	MdBootstrapPayloadType MDBOOTSTRAPPAYLOADTYPE `wam:"md_bootstrap_payload_type"` // field 5
	MdBootstrapStepDuration int64 `wam:"md_bootstrap_step_duration"` // field 6
	MdSessionId string `wam:"md_session_id"` // field 7
	MdTimestamp int64 `wam:"md_timestamp"` // field 8
	HistorySyncRetryRequestId string `wam:"history_sync_retry_request_id"` // field 9
}