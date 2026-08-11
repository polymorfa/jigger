pub const WAM_SUPPORT_AI_SESSION: u32 = 4970;

#[derive(Debug, Default)]
pub struct SupportAiSessionEvent {
    /// field 1, wire `support_ai_event_type`
    pub support_ai_event_type: Option<SUPPORTAIEVENTTYPE>,
    /// field 3, wire `support_ai_error_code`
    pub support_ai_error_code: Option<i64>,
    /// field 4, wire `support_ai_error_message`
    pub support_ai_error_message: Option<String>,
    /// field 5, wire `citation_cms_id`
    pub citation_cms_id: Option<String>,
}