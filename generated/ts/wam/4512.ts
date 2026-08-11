export const WamGroupJourney = 4512 as const

export interface GroupJourneyEvent {
  /** field 1, wire `action_type` */
  actionType?: CHATFILTERACTIONTYPES
  /** field 2, wire `app_session_id` */
  appSessionId?: string
  /** field 3, wire `group_size` */
  groupSize?: number
  /** field 4, wire `surface` */
  surface?: SURFACETYPE
  /** field 5, wire `thread_type` */
  threadType?: THREADTYPE
  /** field 6, wire `user_role` */
  userRole?: USERROLETYPE
  /** field 7, wire `ui_surface` */
  uiSurface?: TSSURFACE
}