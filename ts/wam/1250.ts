export const WamStatusRevoke = 1250 as const

export interface StatusRevokeEvent {
  /** field 1, wire `status_session_id` */
  statusSessionId?: number
  /** field 2, wire `media_type` */
  mediaType?: MEDIATYPE
  /** field 3, wire `status_life_t` */
  statusLifeT?: number
  /** field 4, wire `status_id` */
  statusId?: string
  /** field 5, wire `unified_session_id` */
  unifiedSessionId?: string
  /** field 6, wire `updates_tab_session_id` */
  updatesTabSessionId?: number
}