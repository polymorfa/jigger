const WamChannelOpenFromInvite = 7134 // channel: private

type ChannelOpenFromInviteEvent struct {
	ChannelEntryPoint CHANNELENTRYPOINT `wam:"channel_entry_point"` // field 1
	ChannelUserType CHANNELUSERTYPE `wam:"channel_user_type"` // field 2
	DiscoverySurface TSSURFACE `wam:"discovery_surface"` // field 3
	Cid string `wam:"cid"` // field 4
}