export const WamCallInfoUserJourney = 6034 as const

export interface CallInfoUserJourneyEvent {
  /** field 1, wire `app_session_id` */
  appSessionId?: string
  /** field 2, wire `call_group_size_bucket` */
  callGroupSizeBucket?: CALLSIZEBUCKET
  /** field 3, wire `call_size_type` */
  callSizeType?: CALLSIZETYPE
  /** field 4, wire `call_type` */
  callType?: CALLTYPE
  /** field 5, wire `pre_call_action_type` */
  preCallActionType?: PRECALLACTIONTYPE
  /** field 6, wire `surface_session_id` */
  surfaceSessionId?: string
  /** field 7, wire `user_journey_event_ms` */
  userJourneyEventMs?: number
  /** field 8, wire `user_journey_funnel_id` */
  userJourneyFunnelId?: string
  /** field 9, wire `num_participants_shown` */
  numParticipantsShown?: number
  /** field 10, wire `participant_action_source` */
  participantActionSource?: PARTICIPANTACTIONSOURCE
  /** field 11, wire `genai_bots` */
  genaiBots?: string
}