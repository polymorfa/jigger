export const WamMdBootstrapDataApplied = 2298 as const

export interface MdBootstrapDataAppliedEvent {
  /** field 1, wire `md_session_id` */
  mdSessionId?: string
  /** field 2, wire `md_bootstrap_source` */
  mdBootstrapSource?: MDBOOTSTRAPSOURCE
  /** field 3, wire `md_bootstrap_payload_type` */
  mdBootstrapPayloadType?: MDBOOTSTRAPPAYLOADTYPE
  /** field 4, wire `md_timestamp` */
  mdTimestamp?: number
  /** field 5, wire `collection` */
  collection?: COLLECTION
  /** field 6, wire `md_bootstrap_step_duration` */
  mdBootstrapStepDuration?: number
  /** field 7, wire `used_snapshot` */
  usedSnapshot?: boolean
  /** field 8, wire `md_bootstrap_contacts_count` */
  mdBootstrapContactsCount?: number
  /** field 9, wire `md_reg_attempt_id` */
  mdRegAttemptId?: string
  /** field 10, wire `md_bootstrap_history_payload_type` */
  mdBootstrapHistoryPayloadType?: MDBOOTSTRAPHISTORYPAYLOADTYPE
  /** field 11, wire `history_sync_stage_progress` */
  historySyncStageProgress?: number
  /** field 12, wire `md_bootstrap_step_result` */
  mdBootstrapStepResult?: MDBOOTSTRAPSTEPRESULT
  /** field 13, wire `sent_via_mms` */
  sentViaMms?: boolean
  /** field 14, wire `history_sync_chunk_order` */
  historySyncChunkOrder?: number
  /** field 15, wire `chunk_chats_applied` */
  chunkChatsApplied?: number
  /** field 16, wire `chunk_msgs_applied` */
  chunkMsgsApplied?: number
  /** field 17, wire `md_bootstrap_chats_count` */
  mdBootstrapChatsCount?: number
  /** field 18, wire `md_bootstrap_messages_count` */
  mdBootstrapMessagesCount?: number
  /** field 19, wire `md_dropped_msg_type` */
  mdDroppedMsgType?: string
  /** field 20, wire `md_sync_failure_reason` */
  mdSyncFailureReason?: string
  /** field 21, wire `application_state` */
  applicationState?: APPLICATIONSTATE
  /** field 22, wire `app_context` */
  appContext?: string
  /** field 23, wire `app_context_bitfield` */
  appContextBitfield?: number
  /** field 24, wire `history_sync_retry_request_id` */
  historySyncRetryRequestId?: string
  /** field 25, wire `md_bootstrap_inline_contacts_count` */
  mdBootstrapInlineContactsCount?: number
  /** field 26, wire `gk_context` */
  gkContext?: string
}