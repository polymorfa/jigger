export const WamMdBootstrapAppStateDataDownloaded = 2294 as const

export interface MdBootstrapAppStateDataDownloadedEvent {
  /** field 1, wire `md_session_id` */
  mdSessionId?: string
  /** field 2, wire `md_bootstrap_payload_type` */
  mdBootstrapPayloadType?: MDBOOTSTRAPPAYLOADTYPE
  /** field 3, wire `md_timestamp` */
  mdTimestamp?: number
  /** field 4, wire `md_bootstrap_payload_size` */
  mdBootstrapPayloadSize?: number
  /** field 5, wire `md_bootstrap_contacts_count` */
  mdBootstrapContactsCount?: number
  /** field 6, wire `md_bootstrap_step_duration` */
  mdBootstrapStepDuration?: number
  /** field 7, wire `md_bootstrap_step_result` */
  mdBootstrapStepResult?: MDBOOTSTRAPSTEPRESULT
  /** field 8, wire `md_storage_quota_bytes` */
  mdStorageQuotaBytes?: number
  /** field 9, wire `md_storage_quota_used_bytes` */
  mdStorageQuotaUsedBytes?: number
  /** field 10, wire `md_reg_attempt_id` */
  mdRegAttemptId?: string
  /** field 11, wire `md_bootstrap_history_payload_type` */
  mdBootstrapHistoryPayloadType?: MDBOOTSTRAPHISTORYPAYLOADTYPE
  /** field 13, wire `application_state` */
  applicationState?: APPLICATIONSTATE
  /** field 14, wire `app_context` */
  appContext?: string
  /** field 15, wire `app_context_bitfield` */
  appContextBitfield?: number
  /** field 16, wire `history_sync_retry_request_id` */
  historySyncRetryRequestId?: string
  /** field 17, wire `md_sync_failure_reason` */
  mdSyncFailureReason?: string
}