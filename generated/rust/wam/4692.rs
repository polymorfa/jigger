pub const WAM_CHANNEL_CORE_EVENT: u32 = 4692;

#[derive(Debug, Default)]
pub struct ChannelCoreEventEvent {
    /// field 1, wire `channel_core_event_type`
    pub channel_core_event_type: Option<CHANNELEVENTTYPE>,
    /// field 2, wire `channel_entry_point`
    pub channel_entry_point: Option<CHANNELENTRYPOINT>,
    /// field 3, wire `channel_entry_point_app`
    pub channel_entry_point_app: Option<CHANNELENTRYPOINTAPP>,
    /// field 4, wire `cid`
    pub cid: Option<String>,
    /// field 5, wire `entry_point_metadata`
    pub entry_point_metadata: Option<String>,
    /// field 6, wire `event_surface`
    pub event_surface: Option<CHANNELEVENTSURFACE>,
    /// field 7, wire `channel_directory_session_id`
    pub channel_directory_session_id: Option<i64>,
    /// field 8, wire `channel_core_event_sequence_number`
    pub channel_core_event_sequence_number: Option<i64>,
    /// field 9, wire `directory_channel_index`
    pub directory_channel_index: Option<i64>,
    /// field 10, wire `channel_entry_point_metadata`
    pub channel_entry_point_metadata: Option<CHANNELENTRYPOINTMETADATA>,
    /// field 12, wire `channel_event_unit`
    pub channel_event_unit: Option<CHANNELEVENTUNIT>,
    /// field 13, wire `similar_channels_session_id`
    pub similar_channels_session_id: Option<i64>,
    /// field 14, wire `discovery_surface`
    pub discovery_surface: Option<TSSURFACE>,
    /// field 15, wire `channel_discovery_query_id`
    pub channel_discovery_query_id: Option<String>,
    /// field 16, wire `channel_discovery_search_id`
    pub channel_discovery_search_id: Option<String>,
    /// field 17, wire `unified_session_id`
    pub unified_session_id: Option<String>,
    /// field 18, wire `updates_tab_session_id`
    pub updates_tab_session_id: Option<i64>,
    /// field 19, wire `channel_request_metadata`
    pub channel_request_metadata: Option<String>,
    /// field 20, wire `trace_id_int`
    pub trace_id_int: Option<i64>,
    /// field 21, wire `core_event_trigger`
    pub core_event_trigger: Option<COREEVENTTRIGGERTYPE>,
}