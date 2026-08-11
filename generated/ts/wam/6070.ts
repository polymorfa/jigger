export const WamMarketingMessageUserControlsJourney = 6070 as const

export interface MarketingMessageUserControlsJourneyEvent {
  /** field 1, wire `is_success` */
  isSuccess?: boolean
  /** field 2, wire `mm_user_controls_action` */
  mmUserControlsAction?: MMUSERCONTROLSACTION
  /** field 3, wire `mm_user_controls_entry_point` */
  mmUserControlsEntryPoint?: MMUSERCONTROLSENTRYPOINT
  /** field 4, wire `mm_user_controls_error_type` */
  mmUserControlsErrorType?: string
  /** field 5, wire `mm_user_controls_rollout_variant` */
  mmUserControlsRolloutVariant?: number
  /** field 6, wire `sequence_number` */
  sequenceNumber?: number
  /** field 7, wire `template_id` */
  templateId?: string
  /** field 8, wire `unified_session_id` */
  unifiedSessionId?: string
  /** field 9, wire `business_phone_number` */
  businessPhoneNumber?: number
  /** field 10, wire `stop_duration` */
  stopDuration?: string
}