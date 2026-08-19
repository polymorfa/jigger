pub const WAM_WEBC_STATUS_SESSION: u32 = 1880;

#[derive(Debug, Default)]
pub struct WebcStatusSessionEvent {
    /// field 1, wire `webc_status_session_id`
    pub webc_status_session_id: Option<i64>,
    /// field 2, wire `webc_status_recent_item_count`
    pub webc_status_recent_item_count: Option<i64>,
    /// field 3, wire `webc_status_viewed_item_count`
    pub webc_status_viewed_item_count: Option<i64>,
    /// field 4, wire `webc_status_muted_item_count`
    pub webc_status_muted_item_count: Option<i64>,
    /// field 5, wire `webc_status_recent_row_count`
    pub webc_status_recent_row_count: Option<i64>,
    /// field 6, wire `webc_status_viewed_row_count`
    pub webc_status_viewed_row_count: Option<i64>,
    /// field 7, wire `webc_status_muted_row_count`
    pub webc_status_muted_row_count: Option<i64>,
}