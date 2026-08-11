export const WamChannelSimilarChannels = 5202 as const

export interface ChannelSimilarChannelsEvent {
  /** field 1, wire `banner_status` */
  bannerStatus?: BANNERSTATUS
  /** field 2, wire `banner_status_reason` */
  bannerStatusReason?: BANNERSTATUSREASON
  /** field 3, wire `cid` */
  cid?: string
  /** field 4, wire `similar_channel_display_rank` */
  similarChannelDisplayRank?: number
  /** field 5, wire `similar_channel_event_surface` */
  similarChannelEventSurface?: CHANNELEVENTSURFACE
  /** field 6, wire `similar_channel_id` */
  similarChannelId?: string
  /** field 7, wire `similar_channel_rank` */
  similarChannelRank?: number
  /** field 9, wire `similar_channel_user_type` */
  similarChannelUserType?: CHANNELUSERTYPE
  /** field 10, wire `similar_channels_session_id` */
  similarChannelsSessionId?: number
  /** field 11, wire `unified_session_id` */
  unifiedSessionId?: string
  /** field 12, wire `updates_tab_session_id` */
  updatesTabSessionId?: number
}