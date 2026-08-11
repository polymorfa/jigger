export const WamChannelDiscoveryVisibilityTracking = 5766 as const

export interface ChannelDiscoveryVisibilityTrackingEvent {
  /** field 1, wire `channel_category_index` */
  channelCategoryIndex?: number
  /** field 2, wire `channel_category_name` */
  channelCategoryName?: string
  /** field 3, wire `channel_directory_session_id` */
  channelDirectorySessionId?: number
  /** field 4, wire `channel_event_unit` */
  channelEventUnit?: CHANNELEVENTUNIT
  /** field 5, wire `channel_index` */
  channelIndex?: number
  /** field 6, wire `cid` */
  cid?: string
  /** field 7, wire `country_selector` */
  countrySelector?: string
  /** field 8, wire `discovery_surface` */
  discoverySurface?: TSSURFACE
  /** field 11, wire `pill_selected` */
  pillSelected?: CHANNELDIRECTORYPILLSELECTED
  /** field 13, wire `similar_channels_session_id` */
  similarChannelsSessionId?: number
  /** field 14, wire `unified_session_id` */
  unifiedSessionId?: string
  /** field 16, wire `is_sub_impression` */
  isSubImpression?: boolean
  /** field 17, wire `updates_tab_session_id` */
  updatesTabSessionId?: number
  /** field 18, wire `channel_discovery_query_id` */
  channelDiscoveryQueryId?: string
  /** field 19, wire `channel_discovery_search_id` */
  channelDiscoverySearchId?: string
  /** field 20, wire `trace_id_int` */
  traceIdInt?: number
}