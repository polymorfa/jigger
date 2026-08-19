pub const WAM_MD_BOOTSTRAP_HISTORY_SYNC_STATUS_AFTER_PAIRING: u32 = 4652;

#[derive(Debug, Default)]
pub struct MdBootstrapHistorySyncStatusAfterPairingEvent {
    /// field 1, wire `active_time_after_pairing`
    pub active_time_after_pairing: Option<ACTIVETIMEAFTERPAIRING>,
    /// field 2, wire `last_processed_notification_chunk_order`
    pub last_processed_notification_chunk_order: Option<i64>,
    /// field 3, wire `last_processed_notification_chunk_progress`
    pub last_processed_notification_chunk_progress: Option<i64>,
    /// field 4, wire `md_bootstrap_history_payload_type`
    pub md_bootstrap_history_payload_type: Option<MDBOOTSTRAPHISTORYPAYLOADTYPE>,
    /// field 5, wire `md_history_sync_status_result`
    pub md_history_sync_status_result: Option<MDHISTORYSYNCSTATUSRESULT>,
    /// field 6, wire `md_session_id`
    pub md_session_id: Option<String>,
    /// field 7, wire `md_timestamp`
    pub md_timestamp: Option<i64>,
    /// field 8, wire `missing_notification_count`
    pub missing_notification_count: Option<i64>,
    /// field 9, wire `next_notification_chunk_order`
    pub next_notification_chunk_order: Option<i64>,
    /// field 10, wire `total_processed_message_count`
    pub total_processed_message_count: Option<i64>,
    /// field 11, wire `unprocessed_notification_count`
    pub unprocessed_notification_count: Option<i64>,
    /// field 12, wire `is_loop_running`
    pub is_loop_running: Option<bool>,
}