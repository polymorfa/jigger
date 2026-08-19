pub const WAM_STATUS_ROW_VIEW: u32 = 1656;

#[derive(Debug, Default)]
pub struct StatusRowViewEvent {
    /// field 1, wire `status_session_id`
    pub status_session_id: Option<i64>,
    /// field 2, wire `status_viewer_session_id`
    pub status_viewer_session_id: Option<i64>,
    /// field 3, wire `status_row_section`
    pub status_row_section: Option<STATUSROWSECTION>,
    /// field 4, wire `status_row_index`
    pub status_row_index: Option<i64>,
    /// field 5, wire `status_row_entry_method`
    pub status_row_entry_method: Option<STATUSROWENTRYMETHOD>,
    /// field 6, wire `status_row_view_count`
    pub status_row_view_count: Option<i64>,
    /// field 7, wire `status_row_unread_item_count`
    pub status_row_unread_item_count: Option<i64>,
    /// field 8, wire `psa_campaigns`
    pub psa_campaigns: Option<String>,
    /// field 9, wire `unified_session_id`
    pub unified_session_id: Option<String>,
    /// field 10, wire `updates_tab_session_id`
    pub updates_tab_session_id: Option<i64>,
}