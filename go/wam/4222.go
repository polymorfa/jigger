const WamWebcOfflineNotificationProcess = 4222 // channel: regular

type WebcOfflineNotificationProcessEvent struct {
	CurrentOfflineProcessStage OFFLINEPROCESSSTAGES `wam:"current_offline_process_stage"` // field 4
	OfflineProcessDecryptErrorCount int64 `wam:"offline_process_decrypt_error_count"` // field 5
	OfflineProcessMailboxAge int64 `wam:"offline_process_mailbox_age"` // field 6
	OfflineProcessMessageCount int64 `wam:"offline_process_message_count"` // field 7
	OfflineProcessNotificationCount int64 `wam:"offline_process_notification_count"` // field 8
	OfflineProcessSessionId string `wam:"offline_process_session_id"` // field 9
	OfflineProcessStageTimestampMs int64 `wam:"offline_process_stage_timestamp_ms"` // field 10
	SwVersion string `wam:"sw_version"` // field 11
	RunReason OFFLINEPROCESSRUNREASONS `wam:"run_reason"` // field 12
}