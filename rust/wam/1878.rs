pub const WAM_WEBC_STATUS_SYNC: u32 = 1878;

#[derive(Debug, Default)]
pub struct WebcStatusSyncEvent {
    /// field 1, wire `webc_status_sync_t`
    pub webc_status_sync_t: Option<String>,
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