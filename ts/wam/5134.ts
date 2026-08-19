export const WamMessagingUserJourney = 5134 as const

export interface MessagingUserJourneyEvent {
  /** field 1, wire `app_session_id` */
  appSessionId?: string
  /** field 2, wire `messaging_action_type` */
  messagingActionType?: ACTIONTYPE
  /** field 3, wire `pin_in_chat_expiry_secs` */
  pinInChatExpirySecs?: number
  /** field 4, wire `thread_type` */
  threadType?: THREADTYPE
  /** field 5, wire `ui_surface` */
  uiSurface?: TSSURFACE
  /** field 6, wire `user_journey_funnel_id` */
  userJourneyFunnelId?: string
  /** field 7, wire `user_role` */
  userRole?: USERROLETYPE
  /** field 8, wire `is_self_pin` */
  isSelfPin?: boolean
  /** field 9, wire `media_type` */
  mediaType?: MEDIATYPE
  /** field 10, wire `unified_session_id` */
  unifiedSessionId?: string
}