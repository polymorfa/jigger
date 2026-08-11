pub const WAM_CHANNEL_DIRECTORY: u32 = 4544;

#[derive(Debug, Default)]
pub struct ChannelDirectoryEvent {
    /// field 1, wire `channel_directory_action`
    pub channel_directory_action: Option<CHANNELDIRECTORYACTION>,
    /// field 2, wire `channel_directory_entry_point`
    pub channel_directory_entry_point: Option<CHANNELDIRECTORYENTRYPOINT>,
    /// field 3, wire `channel_directory_session_id`
    pub channel_directory_session_id: Option<i64>,
    /// field 4, wire `cid`
    pub cid: Option<String>,
    /// field 5, wire `channel_directory_action_sequence_number`
    pub channel_directory_action_sequence_number: Option<i64>,
    /// field 6, wire `channel_index`
    pub channel_index: Option<i64>,
    /// field 7, wire `search_mode`
    pub search_mode: Option<bool>,
    /// field 8, wire `country_selector`
    pub country_selector: Option<String>,
    /// field 9, wire `imp_reason`
    pub imp_reason: Option<CHANNELDIRECTORYIMPREASON>,
    /// field 10, wire `pill_selected`
    pub pill_selected: Option<CHANNELDIRECTORYPILLSELECTED>,
    /// field 11, wire `channel_category_index`
    pub channel_category_index: Option<i64>,
    /// field 12, wire `channel_category_name`
    pub channel_category_name: Option<String>,
    /// field 13, wire `channel_directory_surface`
    pub channel_directory_surface: Option<CHANNELDIRECTORYSURFACE>,
    /// field 14, wire `channel_directory_search_session_id`
    pub channel_directory_search_session_id: Option<String>,
    /// field 15, wire `unified_session_id`
    pub unified_session_id: Option<String>,
    /// field 16, wire `updates_tab_session_id`
    pub updates_tab_session_id: Option<i64>,
}