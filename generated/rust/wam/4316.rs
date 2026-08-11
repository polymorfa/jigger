pub const WAM_CHANNEL_OPEN: u32 = 4316;

#[derive(Debug, Default)]
pub struct ChannelOpenEvent {
    /// field 1, wire `channel_entry_point`
    pub channel_entry_point: Option<CHANNELENTRYPOINT>,
    /// field 3, wire `channel_session_id`
    pub channel_session_id: Option<i64>,
    /// field 4, wire `channel_user_type`
    pub channel_user_type: Option<CHANNELUSERTYPE>,
    /// field 5, wire `unread_messages`
    pub unread_messages: Option<i64>,
    /// field 6, wire `cid`
    pub cid: Option<String>,
    /// field 7, wire `has_network_connection`
    pub has_network_connection: Option<bool>,
    /// field 8, wire `channel_directory_session_id`
    pub channel_directory_session_id: Option<i64>,
    /// field 9, wire `channel_entry_point_metadata`
    pub channel_entry_point_metadata: Option<CHANNELENTRYPOINTMETADATA>,
    /// field 11, wire `similar_channels_session_id`
    pub similar_channels_session_id: Option<i64>,
    /// field 12, wire `entry_point_metadata`
    pub entry_point_metadata: Option<String>,
    /// field 13, wire `unread_premium_messages`
    pub unread_premium_messages: Option<i64>,
    /// field 14, wire `is_premium`
    pub is_premium: Option<bool>,
    /// field 15, wire `discovery_surface`
    pub discovery_surface: Option<TSSURFACE>,
    /// field 16, wire `unified_session_id`
    pub unified_session_id: Option<String>,
    /// field 17, wire `updates_tab_session_id`
    pub updates_tab_session_id: Option<i64>,
    /// field 18, wire `channel_discovery_query_id`
    pub channel_discovery_query_id: Option<String>,
    /// field 19, wire `channel_discovery_search_id`
    pub channel_discovery_search_id: Option<String>,
    /// field 20, wire `deeplink_source`
    pub deeplink_source: Option<DEEPLINKSOURCE>,
    /// field 21, wire `trace_id_int`
    pub trace_id_int: Option<i64>,
}