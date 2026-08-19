export const WamChannelOpenFromInvite = 7134 as const

export interface ChannelOpenFromInviteEvent {
  /** field 1, wire `channel_entry_point` */
  channelEntryPoint?: CHANNELENTRYPOINT
  /** field 2, wire `channel_user_type` */
  channelUserType?: CHANNELUSERTYPE
  /** field 3, wire `discovery_surface` */
  discoverySurface?: TSSURFACE
  /** field 4, wire `cid` */
  cid?: string
}