export const WamCallLinkActionEvent = 3852 as const

export interface CallLinkActionEventEvent {
  /** field 1, wire `call_link_action` */
  callLinkAction?: CALLLINKACTION
  /** field 2, wire `call_link_action_entry_point` */
  callLinkActionEntryPoint?: CALLLINKACTIONENTRYPOINT
  /** field 3, wire `call_link_media` */
  callLinkMedia?: CALLLINKMEDIA
  /** field 4, wire `call_link_shared_app` */
  callLinkSharedApp?: string
  /** field 5, wire `app_session_id` */
  appSessionId?: string
  /** field 6, wire `call_link_share_chat_type` */
  callLinkShareChatType?: CALLLINKSHARECHATTYPE
  /** field 7, wire `call_link_type` */
  callLinkType?: CALLLINKTYPE
  /** field 8, wire `user_journey_event_ms` */
  userJourneyEventMs?: number
  /** field 9, wire `user_journey_funnel_id` */
  userJourneyFunnelId?: string
  /** field 10, wire `is_waiting_room_enabled` */
  isWaitingRoomEnabled?: boolean
}