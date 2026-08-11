export const WamChannelMessageVisibilityTracking = 5998 as const

export interface ChannelMessageVisibilityTrackingEvent {
  /** field 1, wire `cid` */
  cid?: string
  /** field 4, wire `post_id` */
  postId?: string
  /** field 6, wire `unified_session_id` */
  unifiedSessionId?: string
  /** field 7, wire `is_vpv_impression` */
  isVpvImpression?: boolean
  /** field 8, wire `is_starred_post` */
  isStarredPost?: boolean
  /** field 9, wire `contains_music` */
  containsMusic?: boolean
  /** field 10, wire `channel_user_type` */
  channelUserType?: CHANNELUSERTYPE
  /** field 11, wire `trace_id_int` */
  traceIdInt?: number
  /** field 12, wire `is_original_author` */
  isOriginalAuthor?: boolean
  /** field 13, wire `ai_provenance_label_enabled` */
  aiProvenanceLabelEnabled?: boolean
  /** field 14, wire `ai_provenance_label_shown` */
  aiProvenanceLabelShown?: boolean
}