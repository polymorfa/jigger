const WamChannelProducerInsightsNavigation = 5626 // channel: regular

type ChannelProducerInsightsNavigationEvent struct {
	ChannelProducerInsightsActionTarget ACTIONTARGET `wam:"channel_producer_insights_action_target"` // field 1
	ChannelProducerInsightsActionType CHANNELPRODUCERINSIGHTSACTIONTYPE `wam:"channel_producer_insights_action_type"` // field 2
	ChannelProducerInsightsEntryPoint CHANNELPRODUCERINSIGHTSENTRYPOINT `wam:"channel_producer_insights_entry_point"` // field 3
	ChannelProducerInsightsSequenceNumber int64 `wam:"channel_producer_insights_sequence_number"` // field 4
	ChannelProducerInsightsSurface CHANNELPRODUCERINSIGHTSSURFACE `wam:"channel_producer_insights_surface"` // field 5
	Cid string `wam:"cid"` // field 6
	ProducerInsightsSessionId int64 `wam:"producer_insights_session_id"` // field 7
	UnifiedSessionId string `wam:"unified_session_id"` // field 8
	UpdatesTabSessionId int64 `wam:"updates_tab_session_id"` // field 9
}