export const WamReactionUserJourney = 5752 as const

export interface ReactionUserJourneyEvent {
  /** field 1, wire `app_session_id` */
  appSessionId?: string
  /** field 2, wire `message_has_own_reaction` */
  messageHasOwnReaction?: boolean
  /** field 3, wire `message_has_reaction` */
  messageHasReaction?: boolean
  /** field 4, wire `message_type` */
  messageType?: MESSAGETYPE
  /** field 5, wire `reaction_user_journey_action` */
  reactionUserJourneyAction?: REACTIONUSERJOURNEYACTION
  /** field 6, wire `reaction_user_journey_entry_point` */
  reactionUserJourneyEntryPoint?: REACTIONUSERJOURNEYENTRYPOINT
  /** field 7, wire `ui_surface` */
  uiSurface?: TSSURFACE
  /** field 8, wire `user_journey_chat_type` */
  userJourneyChatType?: USERJOURNEYCHATTYPE
  /** field 9, wire `user_journey_funnel_id` */
  userJourneyFunnelId?: string
  /** field 10, wire `message_media_type` */
  messageMediaType?: MEDIATYPE
  /** field 11, wire `user_journey_event_ms` */
  userJourneyEventMs?: number
  /** field 12, wire `unified_session_id` */
  unifiedSessionId?: string
}