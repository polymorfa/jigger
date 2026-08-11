export const WamUiAction = 472 as const

export interface UiActionEvent {
  /** field 1, wire `ui_action_type` */
  uiActionType?: UIACTIONTYPE
  /** field 2, wire `ui_action_preloaded` */
  uiActionPreloaded?: boolean
  /** field 3, wire `ui_action_t` */
  uiActionT?: string
  /** field 4, wire `size_bucket` */
  sizeBucket?: SIZEBUCKET
  /** field 5, wire `device_count` */
  deviceCount?: number
  /** field 6, wire `participant_count` */
  participantCount?: number
  /** field 7, wire `ui_action_chat_type` */
  uiActionChatType?: UIACTIONCHATTYPE
  /** field 8, wire `is_lid` */
  isLid?: boolean
  /** field 9, wire `agent_engagement_type` */
  agentEngagementType?: AGENTENGAGEMENTENUMTYPE
  /** field 10, wire `local_addressing_mode` */
  localAddressingMode?: ADDRESSINGMODE
  /** field 11, wire `bot_type` */
  botType?: BOTTYPE
  /** field 12, wire `ui_action_ttrc_surface_name` */
  uiActionTtrcSurfaceName?: string
  /** field 13, wire `db_main_thread_count` */
  dbMainThreadCount?: number
  /** field 14, wire `db_reads_count` */
  dbReadsCount?: number
  /** field 15, wire `db_writes_count` */
  dbWritesCount?: number
  /** field 16, wire `peripheral_connected` */
  peripheralConnected?: string
  /** field 17, wire `db_bg_thread_reads_duration_t` */
  dbBgThreadReadsDurationT?: string
  /** field 18, wire `db_bg_thread_writes_duration_t` */
  dbBgThreadWritesDurationT?: string
  /** field 19, wire `db_main_thread_reads_duration_t` */
  dbMainThreadReadsDurationT?: string
  /** field 20, wire `db_main_thread_writes_duration_t` */
  dbMainThreadWritesDurationT?: string
  /** field 21, wire `app_context` */
  appContext?: string
  /** field 22, wire `app_context_bitfield` */
  appContextBitfield?: number
  /** field 23, wire `is_low_power_mode` */
  isLowPowerMode?: boolean
  /** field 25, wire `ui_action_presentation_source` */
  uiActionPresentationSource?: string
  /** field 26, wire `app_session_id` */
  appSessionId?: string
  /** field 27, wire `unified_session_id` */
  unifiedSessionId?: string
  /** field 28, wire `trace_id_int` */
  traceIdInt?: number
  /** field 29, wire `has_open_ai_participant` */
  hasOpenAiParticipant?: boolean
  /** field 30, wire `has_tee_ai_participant` */
  hasTeeAiParticipant?: boolean
}