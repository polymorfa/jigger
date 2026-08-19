export const WamUsernameUnknownUserDisplayed = 8524 as const

export interface UsernameUnknownUserDisplayedEvent {
  /** field 1, wire `unknown_user_display_context` */
  unknownUserDisplayContext?: string
  /** field 2, wire `client_ts_ms` */
  clientTsMs?: number
  /** field 3, wire `duration_in_secs` */
  durationInSecs?: number
  /** field 4, wire `has_pn` */
  hasPn?: boolean
  /** field 5, wire `has_push` */
  hasPush?: boolean
  /** field 6, wire `has_un` */
  hasUn?: boolean
  /** field 7, wire `is_first_display` */
  isFirstDisplay?: boolean
  /** field 8, wire `jid_type` */
  jidType?: string
  /** field 9, wire `unknown_user_display_lid` */
  unknownUserDisplayLid?: string
  /** field 10, wire `in_db` */
  inDb?: boolean
}