export const WamOfflineResume = 3112 as const

export interface OfflineResumeEvent {
  /** field 1, wire `chat_thread_count` */
  chatThreadCount?: number
  /** field 2, wire `is_offline_complete_missed` */
  isOfflineCompleteMissed?: boolean
  /** field 3, wire `last_stanza_t` */
  lastStanzaT?: string
  /** field 4, wire `main_screen_load_t` */
  mainScreenLoadT?: string
  /** field 5, wire `offline_decrypt_error_count` */
  offlineDecryptErrorCount?: number
  /** field 6, wire `offline_message_count` */
  offlineMessageCount?: number
  /** field 7, wire `offline_notification_count` */
  offlineNotificationCount?: number
  /** field 8, wire `offline_preview_t` */
  offlinePreviewT?: string
  /** field 9, wire `offline_receipt_count` */
  offlineReceiptCount?: number
  /** field 10, wire `offline_size_bytes` */
  offlineSizeBytes?: number
  /** field 11, wire `page_load_t` */
  pageLoadT?: string
  /** field 12, wire `socket_connect_t` */
  socketConnectT?: string
  /** field 13, wire `is_resume_in_foreground` */
  isResumeInForeground?: boolean
  /** field 14, wire `mailbox_age` */
  mailboxAge?: number
  /** field 15, wire `on_trickle_mode` */
  onTrickleMode?: boolean
  /** field 17, wire `expected_offline_message_count` */
  expectedOfflineMessageCount?: number
  /** field 18, wire `expected_offline_notification_count` */
  expectedOfflineNotificationCount?: number
  /** field 19, wire `expected_offline_receipt_count` */
  expectedOfflineReceiptCount?: number
  /** field 20, wire `offline_processing_t` */
  offlineProcessingT?: string
  /** field 21, wire `offline_resume_result` */
  offlineResumeResult?: OFFLINERESUMERESULTTYPE
  /** field 22, wire `is_running_from_service_extension` */
  isRunningFromServiceExtension?: boolean
  /** field 23, wire `expected_offline_call_count` */
  expectedOfflineCallCount?: number
  /** field 24, wire `offline_call_count` */
  offlineCallCount?: number
  /** field 25, wire `passive_mode_t` */
  passiveModeT?: string
  /** field 26, wire `preack_call_count` */
  preackCallCount?: number
  /** field 27, wire `preack_message_count` */
  preackMessageCount?: number
  /** field 28, wire `preack_notification_count` */
  preackNotificationCount?: number
  /** field 29, wire `preack_receipt_count` */
  preackReceiptCount?: number
  /** field 30, wire `processed_call_count` */
  processedCallCount?: number
  /** field 31, wire `processed_message_count` */
  processedMessageCount?: number
  /** field 32, wire `processed_notification_count` */
  processedNotificationCount?: number
  /** field 33, wire `processed_receipt_count` */
  processedReceiptCount?: number
  /** field 34, wire `transient_offline_session_id` */
  transientOfflineSessionId?: string
  /** field 35, wire `affected_by_sleep_mode` */
  affectedBySleepMode?: boolean
  /** field 36, wire `attempt_number` */
  attemptNumber?: number
  /** field 37, wire `is_resume_started_in_foreground` */
  isResumeStartedInForeground?: boolean
  /** field 38, wire `logout_session_id` */
  logoutSessionId?: number
  /** field 39, wire `db_duration_t` */
  dbDurationT?: string
  /** field 40, wire `db_main_thread_duration_t` */
  dbMainThreadDurationT?: string
  /** field 41, wire `db_main_thread_reads_count` */
  dbMainThreadReadsCount?: number
  /** field 42, wire `db_main_thread_writes_count` */
  dbMainThreadWritesCount?: number
  /** field 43, wire `db_reads_count` */
  dbReadsCount?: number
  /** field 44, wire `db_writes_count` */
  dbWritesCount?: number
  /** field 45, wire `disconnected` */
  disconnected?: boolean
  /** field 46, wire `offline_session_t` */
  offlineSessionT?: string
  /** field 47, wire `preacks_count` */
  preacksCount?: number
  /** field 48, wire `running_tasks` */
  runningTasks?: string
  /** field 49, wire `app_context` */
  appContext?: string
  /** field 50, wire `app_context_bitfield` */
  appContextBitfield?: number
  /** field 51, wire `queued_message_count` */
  queuedMessageCount?: number
  /** field 52, wire `queued_notification_count` */
  queuedNotificationCount?: number
  /** field 53, wire `queued_receipt_count` */
  queuedReceiptCount?: number
  /** field 54, wire `nse_merge_t` */
  nseMergeT?: string
  /** field 55, wire `chat_queue_size` */
  chatQueueSize?: number
  /** field 56, wire `e2ee_queue_size` */
  e2eeQueueSize?: number
  /** field 57, wire `unordered_queue_size` */
  unorderedQueueSize?: number
}