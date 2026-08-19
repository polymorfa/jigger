pub const WAM_CHAT_EXPORT: u32 = 7734;

#[derive(Debug, Default)]
pub struct ChatExportEvent {
    /// field 1, wire `chat_type`
    pub chat_type: Option<MESSAGECHATTYPE>,
    /// field 2, wire `export_date_range_used`
    pub export_date_range_used: Option<i64>,
    /// field 3, wire `export_duration_ms`
    pub export_duration_ms: Option<i64>,
    /// field 4, wire `export_error_reason`
    pub export_error_reason: Option<String>,
    /// field 5, wire `export_file_size_bytes`
    pub export_file_size_bytes: Option<i64>,
    /// field 6, wire `export_message_count`
    pub export_message_count: Option<i64>,
    /// field 7, wire `export_mode`
    pub export_mode: Option<EXPORTMODETYPE>,
    /// field 8, wire `export_result`
    pub export_result: Option<EXPORTRESULTTYPE>,
    /// field 9, wire `media_count`
    pub media_count: Option<i64>,
}