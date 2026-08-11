pub const WAM_WEBC_MINOR_EVENT_LOG: u32 = 5440;

#[derive(Debug, Default)]
pub struct WebcMinorEventLogEvent {
    /// field 1, wire `additional_debug_context`
    pub additional_debug_context: Option<String>,
    /// field 2, wire `log_context`
    pub log_context: Option<String>,
    /// field 3, wire `log_count`
    pub log_count: Option<i64>,
    /// field 4, wire `log_reason`
    pub log_reason: Option<String>,
    /// field 5, wire `log_type`
    pub log_type: Option<LOGTYPE>,
}