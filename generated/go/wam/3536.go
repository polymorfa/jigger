const WamOfflineResumeStage = 3536 // channel: regular

type OfflineResumeStageEvent struct {
	CurrentOfflineStage OFFLINERESUMESTAGES `wam:"current_offline_stage"` // field 1
	OfflineSessionId string `wam:"offline_session_id"` // field 2
	OfflineStageTimestampMs int64 `wam:"offline_stage_timestamp_ms"` // field 3
	ChatThreadCount int64 `wam:"chat_thread_count"` // field 4
	IsResumeInForeground bool `wam:"is_resume_in_foreground"` // field 5
	MailboxAge int64 `wam:"mailbox_age"` // field 6
	OfflineDecryptErrorCount int64 `wam:"offline_decrypt_error_count"` // field 7
	OfflineMessageCount int64 `wam:"offline_message_count"` // field 8
	OfflineNotificationCount int64 `wam:"offline_notification_count"` // field 9
	OfflineReceiptCount int64 `wam:"offline_receipt_count"` // field 10
	OfflineResumeMode OFFLINERESUMEMODES `wam:"offline_resume_mode"` // field 11
	LastPushTimestampMs int64 `wam:"last_push_timestamp_ms"` // field 12
	AttemptId int64 `wam:"attempt_id"` // field 13
	IsResumeStartedInForeground bool `wam:"is_resume_started_in_foreground"` // field 14
	OfflineCallCount int64 `wam:"offline_call_count"` // field 15
	OfflineSizeBytes int64 `wam:"offline_size_bytes"` // field 16
	PassiveModeT string `wam:"passive_mode_t"` // field 17
}