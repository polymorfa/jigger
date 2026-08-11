export const WamBotBizJourney = 4868 as const

export interface BotBizJourneyEvent {
  /** field 1, wire `app_session_id` */
  appSessionId?: string
  /** field 4, wire `bot_type` */
  botType?: BOTTYPE
  /** field 5, wire `bot_biz_action_type` */
  botBizActionType?: BOTBIZACTIONTYPE
  /** field 6, wire `bot_biz_entry_point` */
  botBizEntryPoint?: BOTBIZENTRYPOINT
  /** field 7, wire `bot_biz_type` */
  botBizType?: BOTBIZTYPE
}