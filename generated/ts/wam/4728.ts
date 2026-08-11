export const WamChannelLinkShare = 4728 as const

export interface ChannelLinkShareEvent {
  /** field 1, wire `channel_link_share_direction` */
  channelLinkShareDirection?: CHANNELLINKSHAREDIRECTION
  /** field 2, wire `channel_link_share_entry_point` */
  channelLinkShareEntryPoint?: CHANNELLINKSHAREENTRYPOINT
  /** field 3, wire `cid` */
  cid?: string
  /** field 4, wire `channel_link_share_screen` */
  channelLinkShareScreen?: CHANNELLINKSHARESCREEN
  /** field 5, wire `unified_session_id` */
  unifiedSessionId?: string
  /** field 6, wire `updates_tab_session_id` */
  updatesTabSessionId?: number
}