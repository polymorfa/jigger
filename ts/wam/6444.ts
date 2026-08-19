export const WamQuotedMessageUserJourney = 6444 as const

export interface QuotedMessageUserJourneyEvent {
  /** field 1, wire `app_session_id` */
  appSessionId?: string
  /** field 2, wire `message_media_type` */
  messageMediaType?: MEDIATYPE
  /** field 3, wire `message_type` */
  messageType?: MESSAGETYPE
  /** field 4, wire `quoted_media_type` */
  quotedMediaType?: MEDIATYPE
  /** field 5, wire `quoted_message_type_enum` */
  quotedMessageTypeEnum?: MESSAGETYPE
  /** field 6, wire `quoted_message_user_journey_action` */
  quotedMessageUserJourneyAction?: QUOTEDMESSAGEUSERJOURNEYACTION
  /** field 7, wire `quoted_message_user_journey_entry_point` */
  quotedMessageUserJourneyEntryPoint?: QUOTEDMESSAGEUSERJOURNEYENTRYPOINT
  /** field 8, wire `ui_surface` */
  uiSurface?: TSSURFACE
  /** field 9, wire `user_journey_chat_type` */
  userJourneyChatType?: USERJOURNEYCHATTYPE
  /** field 10, wire `user_journey_funnel_id` */
  userJourneyFunnelId?: string
  /** field 11, wire `unified_session_id` */
  unifiedSessionId?: string
  /** field 12, wire `chatbar_initial_state` */
  chatbarInitialState?: CHATBARINITIALSTATE
  /** field 13, wire `quoted_message_user_journey_navigate_result` */
  quotedMessageUserJourneyNavigateResult?: QUOTEDMESSAGEUSERJOURNEYNAVIGATERESULT
}