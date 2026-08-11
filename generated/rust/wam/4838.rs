pub const WAM_UPDATES_TAB_SEARCH: u32 = 4838;

#[derive(Debug, Default)]
pub struct UpdatesTabSearchEvent {
    /// field 1, wire `channels_followed_count`
    pub channels_followed_count: Option<i64>,
    /// field 2, wire `recent_status_item_count`
    pub recent_status_item_count: Option<i64>,
    /// field 3, wire `recent_status_row_count`
    pub recent_status_row_count: Option<i64>,
    /// field 4, wire `update_tab_search_event_type`
    pub update_tab_search_event_type: Option<UPDATETABSEARCHEVENTTYPE>,
    /// field 5, wire `channels_admin_count`
    pub channels_admin_count: Option<i64>,
    /// field 6, wire `viewed_status_item_count`
    pub viewed_status_item_count: Option<i64>,
    /// field 7, wire `viewed_status_row_count`
    pub viewed_status_row_count: Option<i64>,
    /// field 8, wire `premium_channels_followed_count`
    pub premium_channels_followed_count: Option<i64>,
    /// field 9, wire `updates_tab_search_result_type`
    pub updates_tab_search_result_type: Option<UPDATESTABSEARCHRESULTTYPE>,
    /// field 10, wire `updates_tab_search_session_id`
    pub updates_tab_search_session_id: Option<String>,
    /// field 11, wire `updates_tab_search_mode_type`
    pub updates_tab_search_mode_type: Option<UPDATESTABSEARCHMODETYPE>,
    /// field 12, wire `unified_session_id`
    pub unified_session_id: Option<String>,
    /// field 13, wire `updates_tab_session_id`
    pub updates_tab_session_id: Option<i64>,
}