const WamChannelDiscoveryVisibilityTracking = 5766 // channel: regular

type ChannelDiscoveryVisibilityTrackingEvent struct {
	ChannelCategoryIndex int64 `wam:"channel_category_index"` // field 1
	ChannelCategoryName string `wam:"channel_category_name"` // field 2
	ChannelDirectorySessionId int64 `wam:"channel_directory_session_id"` // field 3
	ChannelEventUnit CHANNELEVENTUNIT `wam:"channel_event_unit"` // field 4
	ChannelIndex int64 `wam:"channel_index"` // field 5
	Cid string `wam:"cid"` // field 6
	CountrySelector string `wam:"country_selector"` // field 7
	DiscoverySurface TSSURFACE `wam:"discovery_surface"` // field 8
	PillSelected CHANNELDIRECTORYPILLSELECTED `wam:"pill_selected"` // field 11
	SimilarChannelsSessionId int64 `wam:"similar_channels_session_id"` // field 13
	UnifiedSessionId string `wam:"unified_session_id"` // field 14
	IsSubImpression bool `wam:"is_sub_impression"` // field 16
	UpdatesTabSessionId int64 `wam:"updates_tab_session_id"` // field 17
	ChannelDiscoveryQueryId string `wam:"channel_discovery_query_id"` // field 18
	ChannelDiscoverySearchId string `wam:"channel_discovery_search_id"` // field 19
	TraceIdInt int64 `wam:"trace_id_int"` // field 20
}