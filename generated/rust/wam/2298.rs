pub const WAM_MD_BOOTSTRAP_DATA_APPLIED: u32 = 2298;

#[derive(Debug, Default)]
pub struct MdBootstrapDataAppliedEvent {
    /// field 1, wire `md_session_id`
    pub md_session_id: Option<String>,
    /// field 2, wire `md_bootstrap_source`
    pub md_bootstrap_source: Option<MDBOOTSTRAPSOURCE>,
    /// field 3, wire `md_bootstrap_payload_type`
    pub md_bootstrap_payload_type: Option<MDBOOTSTRAPPAYLOADTYPE>,
    /// field 4, wire `md_timestamp`
    pub md_timestamp: Option<i64>,
    /// field 5, wire `collection`
    pub collection: Option<COLLECTION>,
    /// field 6, wire `md_bootstrap_step_duration`
    pub md_bootstrap_step_duration: Option<i64>,
    /// field 7, wire `used_snapshot`
    pub used_snapshot: Option<bool>,
    /// field 8, wire `md_bootstrap_contacts_count`
    pub md_bootstrap_contacts_count: Option<i64>,
    /// field 9, wire `md_reg_attempt_id`
    pub md_reg_attempt_id: Option<String>,
    /// field 10, wire `md_bootstrap_history_payload_type`
    pub md_bootstrap_history_payload_type: Option<MDBOOTSTRAPHISTORYPAYLOADTYPE>,
    /// field 11, wire `history_sync_stage_progress`
    pub history_sync_stage_progress: Option<i64>,
    /// field 12, wire `md_bootstrap_step_result`
    pub md_bootstrap_step_result: Option<MDBOOTSTRAPSTEPRESULT>,
    /// field 13, wire `sent_via_mms`
    pub sent_via_mms: Option<bool>,
    /// field 14, wire `history_sync_chunk_order`
    pub history_sync_chunk_order: Option<i64>,
    /// field 15, wire `chunk_chats_applied`
    pub chunk_chats_applied: Option<i64>,
    /// field 16, wire `chunk_msgs_applied`
    pub chunk_msgs_applied: Option<i64>,
    /// field 17, wire `md_bootstrap_chats_count`
    pub md_bootstrap_chats_count: Option<i64>,
    /// field 18, wire `md_bootstrap_messages_count`
    pub md_bootstrap_messages_count: Option<i64>,
    /// field 19, wire `md_dropped_msg_type`
    pub md_dropped_msg_type: Option<String>,
    /// field 20, wire `md_sync_failure_reason`
    pub md_sync_failure_reason: Option<String>,
    /// field 21, wire `application_state`
    pub application_state: Option<APPLICATIONSTATE>,
    /// field 22, wire `app_context`
    pub app_context: Option<String>,
    /// field 23, wire `app_context_bitfield`
    pub app_context_bitfield: Option<i64>,
    /// field 24, wire `history_sync_retry_request_id`
    pub history_sync_retry_request_id: Option<String>,
    /// field 25, wire `md_bootstrap_inline_contacts_count`
    pub md_bootstrap_inline_contacts_count: Option<i64>,
    /// field 26, wire `gk_context`
    pub gk_context: Option<String>,
}