pub const WAM_MD_BOOTSTRAP_APP_STATE_DATA_DOWNLOADED: u32 = 2294;

#[derive(Debug, Default)]
pub struct MdBootstrapAppStateDataDownloadedEvent {
    /// field 1, wire `md_session_id`
    pub md_session_id: Option<String>,
    /// field 2, wire `md_bootstrap_payload_type`
    pub md_bootstrap_payload_type: Option<MDBOOTSTRAPPAYLOADTYPE>,
    /// field 3, wire `md_timestamp`
    pub md_timestamp: Option<i64>,
    /// field 4, wire `md_bootstrap_payload_size`
    pub md_bootstrap_payload_size: Option<i64>,
    /// field 5, wire `md_bootstrap_contacts_count`
    pub md_bootstrap_contacts_count: Option<i64>,
    /// field 6, wire `md_bootstrap_step_duration`
    pub md_bootstrap_step_duration: Option<i64>,
    /// field 7, wire `md_bootstrap_step_result`
    pub md_bootstrap_step_result: Option<MDBOOTSTRAPSTEPRESULT>,
    /// field 8, wire `md_storage_quota_bytes`
    pub md_storage_quota_bytes: Option<i64>,
    /// field 9, wire `md_storage_quota_used_bytes`
    pub md_storage_quota_used_bytes: Option<i64>,
    /// field 10, wire `md_reg_attempt_id`
    pub md_reg_attempt_id: Option<String>,
    /// field 11, wire `md_bootstrap_history_payload_type`
    pub md_bootstrap_history_payload_type: Option<MDBOOTSTRAPHISTORYPAYLOADTYPE>,
    /// field 13, wire `application_state`
    pub application_state: Option<APPLICATIONSTATE>,
    /// field 14, wire `app_context`
    pub app_context: Option<String>,
    /// field 15, wire `app_context_bitfield`
    pub app_context_bitfield: Option<i64>,
    /// field 16, wire `history_sync_retry_request_id`
    pub history_sync_retry_request_id: Option<String>,
    /// field 17, wire `md_sync_failure_reason`
    pub md_sync_failure_reason: Option<String>,
}