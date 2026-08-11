export const WamMdBootstrapHistoryDataDownloaded = 2296 as const

export interface MdBootstrapHistoryDataDownloadedEvent {
  /** field 1, wire `md_session_id` */
  mdSessionId?: string
  /** field 2, wire `md_bootstrap_payload_type` */
  mdBootstrapPayloadType?: MDBOOTSTRAPPAYLOADTYPE
  /** field 3, wire `md_timestamp` */
  mdTimestamp?: number
  /** field 4, wire `md_bootstrap_payload_size` */
  mdBootstrapPayloadSize?: number
  /** field 5, wire `md_bootstrap_messages_count` */
  mdBootstrapMessagesCount?: number
  /** field 6, wire `md_bootstrap_chats_count` */
  mdBootstrapChatsCount?: number
  /** field 7, wire `md_bootstrap_step_duration` */
  mdBootstrapStepDuration?: number
  /** field 8, wire `md_bootstrap_step_result` */
  mdBootstrapStepResult?: MDBOOTSTRAPSTEPRESULT
  /** field 9, wire `md_storage_quota_bytes` */
  mdStorageQuotaBytes?: number
  /** field 10, wire `md_storage_quota_used_bytes` */
  mdStorageQuotaUsedBytes?: number
  /** field 11, wire `md_hs_oldest_message_timestamp` */
  mdHsOldestMessageTimestamp?: number
  /** field 12, wire `md_reg_attempt_id` */
  mdRegAttemptId?: string
  /** field 13, wire `md_bootstrap_history_payload_type` */
  mdBootstrapHistoryPayloadType?: MDBOOTSTRAPHISTORYPAYLOADTYPE
  /** field 14, wire `history_sync_stage_progress` */
  historySyncStageProgress?: number
  /** field 15, wire `history_sync_chunk_order` */
  historySyncChunkOrder?: number
  /** field 16, wire `md_sync_failure_reason` */
  mdSyncFailureReason?: string
  /** field 17, wire `application_state` */
  applicationState?: APPLICATIONSTATE
  /** field 18, wire `app_context` */
  appContext?: string
  /** field 19, wire `app_context_bitfield` */
  appContextBitfield?: number
  /** field 20, wire `history_sync_retry_request_id` */
  historySyncRetryRequestId?: string
  /** field 21, wire `md_bootstrap_payload_thumbnails_size` */
  mdBootstrapPayloadThumbnailsSize?: number
}