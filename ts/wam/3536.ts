export const WamOfflineResumeStage = 3536 as const

export interface OfflineResumeStageEvent {
  /** field 1, wire `current_offline_stage` */
  currentOfflineStage?: OFFLINERESUMESTAGES
  /** field 2, wire `offline_session_id` */
  offlineSessionId?: string
  /** field 3, wire `offline_stage_timestamp_ms` */
  offlineStageTimestampMs?: number
  /** field 4, wire `chat_thread_count` */
  chatThreadCount?: number
  /** field 5, wire `is_resume_in_foreground` */
  isResumeInForeground?: boolean
  /** field 6, wire `mailbox_age` */
  mailboxAge?: number
  /** field 7, wire `offline_decrypt_error_count` */
  offlineDecryptErrorCount?: number
  /** field 8, wire `offline_message_count` */
  offlineMessageCount?: number
  /** field 9, wire `offline_notification_count` */
  offlineNotificationCount?: number
  /** field 10, wire `offline_receipt_count` */
  offlineReceiptCount?: number
  /** field 11, wire `offline_resume_mode` */
  offlineResumeMode?: OFFLINERESUMEMODES
  /** field 12, wire `last_push_timestamp_ms` */
  lastPushTimestampMs?: number
  /** field 13, wire `attempt_id` */
  attemptId?: number
  /** field 14, wire `is_resume_started_in_foreground` */
  isResumeStartedInForeground?: boolean
  /** field 15, wire `offline_call_count` */
  offlineCallCount?: number
  /** field 16, wire `offline_size_bytes` */
  offlineSizeBytes?: number
  /** field 17, wire `passive_mode_t` */
  passiveModeT?: string
}