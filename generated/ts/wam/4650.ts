export const WamMdBootstrapHistoryDataStartDownloading = 4650 as const

export interface MdBootstrapHistoryDataStartDownloadingEvent {
  /** field 1, wire `history_sync_chunk_order` */
  historySyncChunkOrder?: number
  /** field 2, wire `history_sync_stage_progress` */
  historySyncStageProgress?: number
  /** field 3, wire `md_bootstrap_history_payload_type` */
  mdBootstrapHistoryPayloadType?: MDBOOTSTRAPHISTORYPAYLOADTYPE
  /** field 4, wire `md_bootstrap_payload_size` */
  mdBootstrapPayloadSize?: number
  /** field 5, wire `md_bootstrap_payload_type` */
  mdBootstrapPayloadType?: MDBOOTSTRAPPAYLOADTYPE
  /** field 6, wire `md_bootstrap_step_duration` */
  mdBootstrapStepDuration?: number
  /** field 7, wire `md_session_id` */
  mdSessionId?: string
  /** field 8, wire `md_timestamp` */
  mdTimestamp?: number
  /** field 9, wire `history_sync_retry_request_id` */
  historySyncRetryRequestId?: string
}