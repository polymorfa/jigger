pub const WAM_WEBC_MESSAGE_PROCESSING_PERF: u32 = 5790;

#[derive(Debug, Default)]
pub struct WebcMessageProcessingPerfEvent {
    /// field 1, wire `decryption_t`
    pub decryption_t: Option<i64>,
    /// field 2, wire `is_offline`
    pub is_offline: Option<bool>,
    /// field 3, wire `parsing_t`
    pub parsing_t: Option<i64>,
    /// field 4, wire `post_processing_t`
    pub post_processing_t: Option<i64>,
    /// field 5, wire `pre_processing_t`
    pub pre_processing_t: Option<i64>,
    /// field 6, wire `processing_t`
    pub processing_t: Option<i64>,
    /// field 7, wire `db_storing_t`
    pub db_storing_t: Option<i64>,
    /// field 8, wire `lid_processing_t`
    pub lid_processing_t: Option<i64>,
    /// field 9, wire `report_token_validation_t`
    pub report_token_validation_t: Option<i64>,
}