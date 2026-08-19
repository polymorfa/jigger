export const WamWebcOfflineNotificationProcess = 4222 as const

export interface WebcOfflineNotificationProcessEvent {
  /** field 4, wire `current_offline_process_stage` */
  currentOfflineProcessStage?: OFFLINEPROCESSSTAGES
  /** field 5, wire `offline_process_decrypt_error_count` */
  offlineProcessDecryptErrorCount?: number
  /** field 6, wire `offline_process_mailbox_age` */
  offlineProcessMailboxAge?: number
  /** field 7, wire `offline_process_message_count` */
  offlineProcessMessageCount?: number
  /** field 8, wire `offline_process_notification_count` */
  offlineProcessNotificationCount?: number
  /** field 9, wire `offline_process_session_id` */
  offlineProcessSessionId?: string
  /** field 10, wire `offline_process_stage_timestamp_ms` */
  offlineProcessStageTimestampMs?: number
  /** field 11, wire `sw_version` */
  swVersion?: string
  /** field 12, wire `run_reason` */
  runReason?: OFFLINEPROCESSRUNREASONS
}