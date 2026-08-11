export const WamPttMessageUserJourney = 5402 as const

export interface PttMessageUserJourneyEvent {
  /** field 1, wire `app_session_id` */
  appSessionId?: string
  /** field 2, wire `ptt_message_user_journey_action` */
  pttMessageUserJourneyAction?: PTTMESSAGEUSERJOURNEYACTION
  /** field 3, wire `ptt_message_user_journey_stage` */
  pttMessageUserJourneyStage?: PTTMESSAGEUSERJOURNEYSTAGE
  /** field 4, wire `ui_surface` */
  uiSurface?: TSSURFACE
  /** field 5, wire `user_journey_chat_type` */
  userJourneyChatType?: USERJOURNEYCHATTYPE
  /** field 6, wire `user_journey_funnel_id` */
  userJourneyFunnelId?: string
  /** field 7, wire `chatbar_initial_state` */
  chatbarInitialState?: CHATBARINITIALSTATE
  /** field 8, wire `user_journey_event_ms` */
  userJourneyEventMs?: number
  /** field 9, wire `ptt_message_user_journey_failure_reason` */
  pttMessageUserJourneyFailureReason?: PTTMESSAGEUSERJOURNEYFAILUREREASON
  /** field 10, wire `unified_session_id` */
  unifiedSessionId?: string
  /** field 11, wire `ptt_message_user_journey_contains_quoted_item` */
  pttMessageUserJourneyContainsQuotedItem?: boolean
  /** field 12, wire `is_meta_ai_thread` */
  isMetaAiThread?: boolean
  /** field 13, wire `ptt_waveform_result` */
  pttWaveformResult?: PTTWAVEFORMRESULT
  /** field 14, wire `ptt_intensity_aggregate_value` */
  pttIntensityAggregateValue?: string
}