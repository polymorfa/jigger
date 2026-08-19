export const WamUserActivity = 1384 as const

export interface UserActivityEvent {
  /** field 1, wire `user_activity_session_id` */
  userActivitySessionId?: string
  /** field 2, wire `user_activity_start_time` */
  userActivityStartTime?: number
  /** field 3, wire `user_activity_bitmap_low` */
  userActivityBitmapLow?: number
  /** field 4, wire `user_activity_bitmap_high` */
  userActivityBitmapHigh?: number
  /** field 5, wire `user_activity_bitmap_len` */
  userActivityBitmapLen?: number
  /** field 6, wire `user_activity_session_seq` */
  userActivitySessionSeq?: number
  /** field 7, wire `user_activity_session_cum` */
  userActivitySessionCum?: number
}