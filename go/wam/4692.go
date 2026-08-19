const WamChannelCoreEvent = 4692 // channel: regular

type ChannelCoreEventEvent struct {
	ChannelCoreEventType CHANNELEVENTTYPE `wam:"channel_core_event_type"` // field 1
	ChannelEntryPoint CHANNELENTRYPOINT `wam:"channel_entry_point"` // field 2
	ChannelEntryPointApp CHANNELENTRYPOINTAPP `wam:"channel_entry_point_app"` // field 3
	Cid string `wam:"cid"` // field 4
	EntryPointMetadata string `wam:"entry_point_metadata"` // field 5
	EventSurface CHANNELEVENTSURFACE `wam:"event_surface"` // field 6
	ChannelDirectorySessionId int64 `wam:"channel_directory_session_id"` // field 7
	ChannelCoreEventSequenceNumber int64 `wam:"channel_core_event_sequence_number"` // field 8
	DirectoryChannelIndex int64 `wam:"directory_channel_index"` // field 9
	ChannelEntryPointMetadata CHANNELENTRYPOINTMETADATA `wam:"channel_entry_point_metadata"` // field 10
	ChannelEventUnit CHANNELEVENTUNIT `wam:"channel_event_unit"` // field 12
	SimilarChannelsSessionId int64 `wam:"similar_channels_session_id"` // field 13
	DiscoverySurface TSSURFACE `wam:"discovery_surface"` // field 14
	ChannelDiscoveryQueryId string `wam:"channel_discovery_query_id"` // field 15
	ChannelDiscoverySearchId string `wam:"channel_discovery_search_id"` // field 16
	UnifiedSessionId string `wam:"unified_session_id"` // field 17
	UpdatesTabSessionId int64 `wam:"updates_tab_session_id"` // field 18
	ChannelRequestMetadata string `wam:"channel_request_metadata"` // field 19
	TraceIdInt int64 `wam:"trace_id_int"` // field 20
	CoreEventTrigger COREEVENTTRIGGERTYPE `wam:"core_event_trigger"` // field 21
}