export const WamPreCallUserJourneyCallsTab = 5680 as const

export interface PreCallUserJourneyCallsTabEvent {
  /** field 1, wire `app_session_id` */
  appSessionId?: string
  /** field 2, wire `calls_tab_source` */
  callsTabSource?: CALLSTABSOURCE
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
  /** field 9, wire `user_journey_event_ms` */
  userJourneyEventMs?: number
  /** field 10, wire `item_position` */
  itemPosition?: number
  /** field 11, wire `genai_bots` */
  genaiBots?: string
  /** field 12, wire `selected_item_count` */
  selectedItemCount?: number
}