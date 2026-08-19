export const WamPreCallUserJourneyChatThread = 5634 as const

export interface PreCallUserJourneyChatThreadEvent {
  /** field 1, wire `app_session_id` */
  appSessionId?: string
  /** field 2, wire `group_size` */
  groupSize?: number
  /** field 3, wire `pre_call_action_type` */
  preCallActionType?: PRECALLACTIONTYPE
  /** field 4, wire `sub_surface` */
  subSurface?: SUBSURFACE
  /** field 5, wire `surface_session_id` */
  surfaceSessionId?: string
  /** field 6, wire `user_journey_funnel_id` */
  userJourneyFunnelId?: string
  /** field 7, wire `call_size_type` */
  callSizeType?: CALLSIZETYPE
  /** field 9, wire `call_size` */
  callSize?: number
  /** field 10, wire `user_journey_event_ms` */
  userJourneyEventMs?: number
  /** field 11, wire `is_community_group` */
  isCommunityGroup?: boolean
  /** field 12, wire `is_video_call` */
  isVideoCall?: boolean
  /** field 13, wire `call_random_id` */
  callRandomId?: string
  /** field 14, wire `genai_bots` */
  genaiBots?: string
}