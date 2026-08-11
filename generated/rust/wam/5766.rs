pub const WAM_CHANNEL_DISCOVERY_VISIBILITY_TRACKING: u32 = 5766;

#[derive(Debug, Default)]
pub struct ChannelDiscoveryVisibilityTrackingEvent {
    /// field 1, wire `channel_category_index`
    pub channel_category_index: Option<i64>,
    /// field 2, wire `channel_category_name`
    pub channel_category_name: Option<String>,
    /// field 3, wire `channel_directory_session_id`
    pub channel_directory_session_id: Option<i64>,
    /// field 4, wire `channel_event_unit`
    pub channel_event_unit: Option<CHANNELEVENTUNIT>,
    /// field 5, wire `channel_index`
    pub channel_index: Option<i64>,
    /// field 6, wire `cid`
    pub cid: Option<String>,
    /// field 7, wire `country_selector`
    pub country_selector: Option<String>,
    /// field 8, wire `discovery_surface`
    pub discovery_surface: Option<TSSURFACE>,
    /// field 11, wire `pill_selected`
    pub pill_selected: Option<CHANNELDIRECTORYPILLSELECTED>,
    /// field 13, wire `similar_channels_session_id`
    pub similar_channels_session_id: Option<i64>,
    /// field 14, wire `unified_session_id`
    pub unified_session_id: Option<String>,
    /// field 16, wire `is_sub_impression`
    pub is_sub_impression: Option<bool>,
    /// field 17, wire `updates_tab_session_id`
    pub updates_tab_session_id: Option<i64>,
    /// field 18, wire `channel_discovery_query_id`
    pub channel_discovery_query_id: Option<String>,
    /// field 19, wire `channel_discovery_search_id`
    pub channel_discovery_search_id: Option<String>,
    /// field 20, wire `trace_id_int`
    pub trace_id_int: Option<i64>,
}