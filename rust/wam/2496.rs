pub const WAM_RECEIPT_STANZA_RECEIVE: u32 = 2496;

#[derive(Debug, Default)]
pub struct ReceiptStanzaReceiveEvent {
    /// field 1, wire `receipt_stanza_duration`
    pub receipt_stanza_duration: Option<String>,
    /// field 2, wire `media_type`
    pub media_type: Option<MEDIATYPE>,
    /// field 3, wire `receipt_stanza_offline_count`
    pub receipt_stanza_offline_count: Option<i64>,
    /// field 4, wire `receipt_stanza_type`
    pub receipt_stanza_type: Option<String>,
    /// field 5, wire `receipt_stanza_retry_ver`
    pub receipt_stanza_retry_ver: Option<i64>,
    /// field 6, wire `receipt_stanza_has_orphaned`
    pub receipt_stanza_has_orphaned: Option<bool>,
    /// field 7, wire `receipt_stanza_total_count`
    pub receipt_stanza_total_count: Option<i64>,
    /// field 8, wire `receipt_stanza_processed_count`
    pub receipt_stanza_processed_count: Option<i64>,
    /// field 9, wire `receipt_stanza_stage`
    pub receipt_stanza_stage: Option<RECEIPTSTANZASTAGE>,
    /// field 10, wire `message_type`
    pub message_type: Option<MESSAGETYPE>,
    /// field 11, wire `receipt_aggregation`
    pub receipt_aggregation: Option<RECEIPTAGGREGATIONTYPE>,
    /// field 12, wire `db_reads_count`
    pub db_reads_count: Option<i64>,
    /// field 13, wire `db_writes_count`
    pub db_writes_count: Option<i64>,
    /// field 14, wire `processing_deferred`
    pub processing_deferred: Option<bool>,
    /// field 15, wire `stanza_batch_size`
    pub stanza_batch_size: Option<i64>,
    /// field 16, wire `stanza_process_count`
    pub stanza_process_count: Option<i64>,
}