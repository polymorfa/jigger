export const WamForwardActionUserJourney = 6506 as const

export interface ForwardActionUserJourneyEvent {
  /** field 1, wire `app_session_id` */
  appSessionId?: string
  /** field 2, wire `forward_action_user_journey_action` */
  forwardActionUserJourneyAction?: FORWARDACTIONUSERJOURNEYACTION
  /** field 3, wire `message_is_from_me` */
  messageIsFromMe?: boolean
  /** field 4, wire `message_media_type` */
  messageMediaType?: MEDIATYPE
  /** field 5, wire `message_type` */
  messageType?: MESSAGETYPE
  /** field 6, wire `ui_surface` */
  uiSurface?: TSSURFACE
  /** field 7, wire `user_journey_chat_type` */
  userJourneyChatType?: USERJOURNEYCHATTYPE
  /** field 8, wire `user_journey_funnel_id` */
  userJourneyFunnelId?: string
  /** field 9, wire `unified_session_id` */
  unifiedSessionId?: string
  /** field 11, wire `forward_user_journey_funnel_id` */
  forwardUserJourneyFunnelId?: string
  /** field 12, wire `user_journey_event_ms` */
  userJourneyEventMs?: number
}