export const WamTextMessageUserJourney = 5404 as const

export interface TextMessageUserJourneyEvent {
  /** field 1, wire `app_session_id` */
  appSessionId?: string
  /** field 2, wire `text_message_user_journey_action` */
  textMessageUserJourneyAction?: TEXTMESSAGEUSERJOURNEYACTION
  /** field 3, wire `ui_surface` */
  uiSurface?: TSSURFACE
  /** field 4, wire `user_journey_chat_type` */
  userJourneyChatType?: USERJOURNEYCHATTYPE
  /** field 5, wire `user_journey_funnel_id` */
  userJourneyFunnelId?: string
  /** field 6, wire `chatbar_initial_state` */
  chatbarInitialState?: CHATBARINITIALSTATE
  /** field 7, wire `user_journey_event_ms` */
  userJourneyEventMs?: number
  /** field 8, wire `unified_session_id` */
  unifiedSessionId?: string
  /** field 9, wire `text_message_user_journey_contains_quoted_item` */
  textMessageUserJourneyContainsQuotedItem?: boolean
  /** field 10, wire `bot_type` */
  botType?: BOTTYPE
}