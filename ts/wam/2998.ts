export const WamMdBootstrapHistoryDataReceived = 2998 as const

export interface MdBootstrapHistoryDataReceivedEvent {
  /** field 1, wire `md_session_id` */
  mdSessionId?: string
  /** field 2, wire `md_bootstrap_payload_type` */
  mdBootstrapPayloadType?: MDBOOTSTRAPPAYLOADTYPE
  /** field 3, wire `md_bootstrap_history_payload_type` */
  mdBootstrapHistoryPayloadType?: MDBOOTSTRAPHISTORYPAYLOADTYPE
  /** field 4, wire `md_timestamp` */
  mdTimestamp?: number
  /** field 5, wire `history_sync_stage_progress` */
  historySyncStageProgress?: number
  /** field 6, wire `history_sync_chunk_order` */
  historySyncChunkOrder?: number
  /** field 7, wire `history_sync_retry_request_id` */
  historySyncRetryRequestId?: string
  /** field 8, wire `md_sync_failure_reason` */
  mdSyncFailureReason?: string
}