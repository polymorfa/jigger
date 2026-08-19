export const WamHatchUserJourney = 7806 as const

export interface HatchUserJourneyEvent {
  /** field 1, wire `ai_session_id` */
  aiSessionId?: string
  /** field 3, wire `hatch_action_type` */
  hatchActionType?: HATCHACTIONTYPE
  /** field 4, wire `unified_session_id` */
  unifiedSessionId?: string
  /** field 5, wire `raw_bot_entry_point` */
  rawBotEntryPoint?: string
  /** field 6, wire `hitl_is_multi` */
  hitlIsMulti?: boolean
}