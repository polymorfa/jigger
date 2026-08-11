pub const WAM_MD_BOOTSTRAP_HISTORY_DATA_RECEIVED: u32 = 2998;

#[derive(Debug, Default)]
pub struct MdBootstrapHistoryDataReceivedEvent {
    /// field 1, wire `md_session_id`
    pub md_session_id: Option<String>,
    /// field 2, wire `md_bootstrap_payload_type`
    pub md_bootstrap_payload_type: Option<MDBOOTSTRAPPAYLOADTYPE>,
    /// field 3, wire `md_bootstrap_history_payload_type`
    pub md_bootstrap_history_payload_type: Option<MDBOOTSTRAPHISTORYPAYLOADTYPE>,
    /// field 4, wire `md_timestamp`
    pub md_timestamp: Option<i64>,
    /// field 5, wire `history_sync_stage_progress`
    pub history_sync_stage_progress: Option<i64>,
    /// field 6, wire `history_sync_chunk_order`
    pub history_sync_chunk_order: Option<i64>,
    /// field 7, wire `history_sync_retry_request_id`
    pub history_sync_retry_request_id: Option<String>,
    /// field 8, wire `md_sync_failure_reason`
    pub md_sync_failure_reason: Option<String>,
}