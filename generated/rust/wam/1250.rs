pub const WAM_STATUS_REVOKE: u32 = 1250;

#[derive(Debug, Default)]
pub struct StatusRevokeEvent {
    /// field 1, wire `status_session_id`
    pub status_session_id: Option<i64>,
    /// field 2, wire `media_type`
    pub media_type: Option<MEDIATYPE>,
    /// field 3, wire `status_life_t`
    pub status_life_t: Option<i64>,
    /// field 4, wire `status_id`
    pub status_id: Option<String>,
    /// field 5, wire `unified_session_id`
    pub unified_session_id: Option<String>,
    /// field 6, wire `updates_tab_session_id`
    pub updates_tab_session_id: Option<i64>,
}