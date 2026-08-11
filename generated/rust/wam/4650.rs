pub const WAM_MD_BOOTSTRAP_HISTORY_DATA_START_DOWNLOADING: u32 = 4650;

#[derive(Debug, Default)]
pub struct MdBootstrapHistoryDataStartDownloadingEvent {
    /// field 1, wire `history_sync_chunk_order`
    pub history_sync_chunk_order: Option<i64>,
    /// field 2, wire `history_sync_stage_progress`
    pub history_sync_stage_progress: Option<i64>,
    /// field 3, wire `md_bootstrap_history_payload_type`
    pub md_bootstrap_history_payload_type: Option<MDBOOTSTRAPHISTORYPAYLOADTYPE>,
    /// field 4, wire `md_bootstrap_payload_size`
    pub md_bootstrap_payload_size: Option<i64>,
    /// field 5, wire `md_bootstrap_payload_type`
    pub md_bootstrap_payload_type: Option<MDBOOTSTRAPPAYLOADTYPE>,
    /// field 6, wire `md_bootstrap_step_duration`
    pub md_bootstrap_step_duration: Option<i64>,
    /// field 7, wire `md_session_id`
    pub md_session_id: Option<String>,
    /// field 8, wire `md_timestamp`
    pub md_timestamp: Option<i64>,
    /// field 9, wire `history_sync_retry_request_id`
    pub history_sync_retry_request_id: Option<String>,
}