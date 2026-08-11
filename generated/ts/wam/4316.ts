export const WamChannelOpen = 4316 as const

export interface ChannelOpenEvent {
  /** field 1, wire `channel_entry_point` */
  channelEntryPoint?: CHANNELENTRYPOINT
  /** field 3, wire `channel_session_id` */
  channelSessionId?: number
  /** field 4, wire `channel_user_type` */
  channelUserType?: CHANNELUSERTYPE
  /** field 5, wire `unread_messages` */
  unreadMessages?: number
  /** field 6, wire `cid` */
  cid?: string
  /** field 7, wire `has_network_connection` */
  hasNetworkConnection?: boolean
  /** field 8, wire `channel_directory_session_id` */
  channelDirectorySessionId?: number
  /** field 9, wire `channel_entry_point_metadata` */
  channelEntryPointMetadata?: CHANNELENTRYPOINTMETADATA
  /** field 11, wire `similar_channels_session_id` */
  similarChannelsSessionId?: number
  /** field 12, wire `entry_point_metadata` */
  entryPointMetadata?: string
  /** field 13, wire `unread_premium_messages` */
  unreadPremiumMessages?: number
  /** field 14, wire `is_premium` */
  isPremium?: boolean
  /** field 15, wire `discovery_surface` */
  discoverySurface?: TSSURFACE
  /** field 16, wire `unified_session_id` */
  unifiedSessionId?: string
  /** field 17, wire `updates_tab_session_id` */
  updatesTabSessionId?: number
  /** field 18, wire `channel_discovery_query_id` */
  channelDiscoveryQueryId?: string
  /** field 19, wire `channel_discovery_search_id` */
  channelDiscoverySearchId?: string
  /** field 20, wire `deeplink_source` */
  deeplinkSource?: DEEPLINKSOURCE
  /** field 21, wire `trace_id_int` */
  traceIdInt?: number
}