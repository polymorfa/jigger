pub const WAM_THREAD_INTERACTION_DATA_VOIP: u32 = 6362;

#[derive(Debug, Default)]
pub struct ThreadInteractionDataVoipEvent {
    /// field 1, wire `call_offers_received`
    pub call_offers_received: Option<i64>,
    /// field 2, wire `call_offers_sent`
    pub call_offers_sent: Option<i64>,
    /// field 3, wire `calls_result_busy`
    pub calls_result_busy: Option<i64>,
    /// field 4, wire `calls_result_cancelled`
    pub calls_result_cancelled: Option<i64>,
    /// field 5, wire `calls_result_connected`
    pub calls_result_connected: Option<i64>,
    /// field 6, wire `calls_result_error`
    pub calls_result_error: Option<i64>,
    /// field 7, wire `calls_result_missed`
    pub calls_result_missed: Option<i64>,
    /// field 8, wire `calls_result_rejected`
    pub calls_result_rejected: Option<i64>,
    /// field 9, wire `thread_ds`
    pub thread_ds: Option<String>,
    /// field 11, wire `total_call_duration`
    pub total_call_duration: Option<i64>,
    /// field 12, wire `video_calls_offered`
    pub video_calls_offered: Option<i64>,
    /// field 13, wire `voice_calls_offered`
    pub voice_calls_offered: Option<i64>,
    /// field 14, wire `thread_id`
    pub thread_id: Option<String>,
    /// field 15, wire `thread_id_by_lid`
    pub thread_id_by_lid: Option<String>,
    /// field 16, wire `thread_creation_date`
    pub thread_creation_date: Option<String>,
}