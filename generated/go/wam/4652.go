const WamMdBootstrapHistorySyncStatusAfterPairing = 4652 // channel: regular

type MdBootstrapHistorySyncStatusAfterPairingEvent struct {
	ActiveTimeAfterPairing ACTIVETIMEAFTERPAIRING `wam:"active_time_after_pairing"` // field 1
	LastProcessedNotificationChunkOrder int64 `wam:"last_processed_notification_chunk_order"` // field 2
	LastProcessedNotificationChunkProgress int64 `wam:"last_processed_notification_chunk_progress"` // field 3
	MdBootstrapHistoryPayloadType MDBOOTSTRAPHISTORYPAYLOADTYPE `wam:"md_bootstrap_history_payload_type"` // field 4
	MdHistorySyncStatusResult MDHISTORYSYNCSTATUSRESULT `wam:"md_history_sync_status_result"` // field 5
	MdSessionId string `wam:"md_session_id"` // field 6
	MdTimestamp int64 `wam:"md_timestamp"` // field 7
	MissingNotificationCount int64 `wam:"missing_notification_count"` // field 8
	NextNotificationChunkOrder int64 `wam:"next_notification_chunk_order"` // field 9
	TotalProcessedMessageCount int64 `wam:"total_processed_message_count"` // field 10
	UnprocessedNotificationCount int64 `wam:"unprocessed_notification_count"` // field 11
	IsLoopRunning bool `wam:"is_loop_running"` // field 12
}