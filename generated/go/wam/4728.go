const WamChannelLinkShare = 4728 // channel: regular

type ChannelLinkShareEvent struct {
	ChannelLinkShareDirection CHANNELLINKSHAREDIRECTION `wam:"channel_link_share_direction"` // field 1
	ChannelLinkShareEntryPoint CHANNELLINKSHAREENTRYPOINT `wam:"channel_link_share_entry_point"` // field 2
	Cid string `wam:"cid"` // field 3
	ChannelLinkShareScreen CHANNELLINKSHARESCREEN `wam:"channel_link_share_screen"` // field 4
	UnifiedSessionId string `wam:"unified_session_id"` // field 5
	UpdatesTabSessionId int64 `wam:"updates_tab_session_id"` // field 6
}