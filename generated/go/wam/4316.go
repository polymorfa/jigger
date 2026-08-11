const WamChannelOpen = 4316 // channel: regular

type ChannelOpenEvent struct {
	ChannelEntryPoint CHANNELENTRYPOINT `wam:"channel_entry_point"` // field 1
	ChannelSessionId int64 `wam:"channel_session_id"` // field 3
	ChannelUserType CHANNELUSERTYPE `wam:"channel_user_type"` // field 4
	UnreadMessages int64 `wam:"unread_messages"` // field 5
	Cid string `wam:"cid"` // field 6
	HasNetworkConnection bool `wam:"has_network_connection"` // field 7
	ChannelDirectorySessionId int64 `wam:"channel_directory_session_id"` // field 8
	ChannelEntryPointMetadata CHANNELENTRYPOINTMETADATA `wam:"channel_entry_point_metadata"` // field 9
	SimilarChannelsSessionId int64 `wam:"similar_channels_session_id"` // field 11
	EntryPointMetadata string `wam:"entry_point_metadata"` // field 12
	UnreadPremiumMessages int64 `wam:"unread_premium_messages"` // field 13
	IsPremium bool `wam:"is_premium"` // field 14
	DiscoverySurface TSSURFACE `wam:"discovery_surface"` // field 15
	UnifiedSessionId string `wam:"unified_session_id"` // field 16
	UpdatesTabSessionId int64 `wam:"updates_tab_session_id"` // field 17
	ChannelDiscoveryQueryId string `wam:"channel_discovery_query_id"` // field 18
	ChannelDiscoverySearchId string `wam:"channel_discovery_search_id"` // field 19
	DeeplinkSource DEEPLINKSOURCE `wam:"deeplink_source"` // field 20
	TraceIdInt int64 `wam:"trace_id_int"` // field 21
}