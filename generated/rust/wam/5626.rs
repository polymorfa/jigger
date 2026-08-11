pub const WAM_CHANNEL_PRODUCER_INSIGHTS_NAVIGATION: u32 = 5626;

#[derive(Debug, Default)]
pub struct ChannelProducerInsightsNavigationEvent {
    /// field 1, wire `channel_producer_insights_action_target`
    pub channel_producer_insights_action_target: Option<ACTIONTARGET>,
    /// field 2, wire `channel_producer_insights_action_type`
    pub channel_producer_insights_action_type: Option<CHANNELPRODUCERINSIGHTSACTIONTYPE>,
    /// field 3, wire `channel_producer_insights_entry_point`
    pub channel_producer_insights_entry_point: Option<CHANNELPRODUCERINSIGHTSENTRYPOINT>,
    /// field 4, wire `channel_producer_insights_sequence_number`
    pub channel_producer_insights_sequence_number: Option<i64>,
    /// field 5, wire `channel_producer_insights_surface`
    pub channel_producer_insights_surface: Option<CHANNELPRODUCERINSIGHTSSURFACE>,
    /// field 6, wire `cid`
    pub cid: Option<String>,
    /// field 7, wire `producer_insights_session_id`
    pub producer_insights_session_id: Option<i64>,
    /// field 8, wire `unified_session_id`
    pub unified_session_id: Option<String>,
    /// field 9, wire `updates_tab_session_id`
    pub updates_tab_session_id: Option<i64>,
}