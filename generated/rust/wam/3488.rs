pub const WAM_KEEP_IN_CHAT_PERF: u32 = 3488;

#[derive(Debug, Default)]
pub struct KeepInChatPerfEvent {
    /// field 1, wire `chat_ephemerality_duration`
    pub chat_ephemerality_duration: Option<i64>,
    /// field 2, wire `kic_error_code`
    pub kic_error_code: Option<KICERRORCODETYPE>,
    /// field 3, wire `kic_message_ephemerality_duration`
    pub kic_message_ephemerality_duration: Option<i64>,
    /// field 4, wire `kic_request_type`
    pub kic_request_type: Option<KICREQUESTTYPETYPE>,
    /// field 5, wire `request_send_time`
    pub request_send_time: Option<i64>,
    /// field 6, wire `response`
    pub response: Option<RESPONSETYPE>,
    /// field 7, wire `thread_id`
    pub thread_id: Option<String>,
}