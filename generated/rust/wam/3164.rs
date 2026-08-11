pub const WAM_MD_BOOTSTRAP_APP_STATE_CRITICAL_DATA_PROCESSING: u32 = 3164;

#[derive(Debug, Default)]
pub struct MdBootstrapAppStateCriticalDataProcessingEvent {
    /// field 1, wire `bootstrap_app_state_data_stage`
    pub bootstrap_app_state_data_stage: Option<BOOTSTRAPAPPSTATEDATASTAGECODE>,
    /// field 2, wire `md_bootstrap_payload_type`
    pub md_bootstrap_payload_type: Option<MDBOOTSTRAPPAYLOADTYPE>,
    /// field 3, wire `md_reg_attempt_id`
    pub md_reg_attempt_id: Option<String>,
    /// field 4, wire `md_session_id`
    pub md_session_id: Option<String>,
    /// field 5, wire `md_timestamp`
    pub md_timestamp: Option<i64>,
}