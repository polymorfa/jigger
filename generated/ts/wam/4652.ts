export const WamMdBootstrapHistorySyncStatusAfterPairing = 4652 as const

export interface MdBootstrapHistorySyncStatusAfterPairingEvent {
  /** field 1, wire `active_time_after_pairing` */
  activeTimeAfterPairing?: ACTIVETIMEAFTERPAIRING
  /** field 2, wire `last_processed_notification_chunk_order` */
  lastProcessedNotificationChunkOrder?: number
  /** field 3, wire `last_processed_notification_chunk_progress` */
  lastProcessedNotificationChunkProgress?: number
  /** field 4, wire `md_bootstrap_history_payload_type` */
  mdBootstrapHistoryPayloadType?: MDBOOTSTRAPHISTORYPAYLOADTYPE
  /** field 5, wire `md_history_sync_status_result` */
  mdHistorySyncStatusResult?: MDHISTORYSYNCSTATUSRESULT
  /** field 6, wire `md_session_id` */
  mdSessionId?: string
  /** field 7, wire `md_timestamp` */
  mdTimestamp?: number
  /** field 8, wire `missing_notification_count` */
  missingNotificationCount?: number
  /** field 9, wire `next_notification_chunk_order` */
  nextNotificationChunkOrder?: number
  /** field 10, wire `total_processed_message_count` */
  totalProcessedMessageCount?: number
  /** field 11, wire `unprocessed_notification_count` */
  unprocessedNotificationCount?: number
  /** field 12, wire `is_loop_running` */
  isLoopRunning?: boolean
}