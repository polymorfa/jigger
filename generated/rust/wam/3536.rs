pub const WAM_OFFLINE_RESUME_STAGE: u32 = 3536;

#[derive(Debug, Default)]
pub struct OfflineResumeStageEvent {
    /// field 1, wire `current_offline_stage`
    pub current_offline_stage: Option<OFFLINERESUMESTAGES>,
    /// field 2, wire `offline_session_id`
    pub offline_session_id: Option<String>,
    /// field 3, wire `offline_stage_timestamp_ms`
    pub offline_stage_timestamp_ms: Option<i64>,
    /// field 4, wire `chat_thread_count`
    pub chat_thread_count: Option<i64>,
    /// field 5, wire `is_resume_in_foreground`
    pub is_resume_in_foreground: Option<bool>,
    /// field 6, wire `mailbox_age`
    pub mailbox_age: Option<i64>,
    /// field 7, wire `offline_decrypt_error_count`
    pub offline_decrypt_error_count: Option<i64>,
    /// field 8, wire `offline_message_count`
    pub offline_message_count: Option<i64>,
    /// field 9, wire `offline_notification_count`
    pub offline_notification_count: Option<i64>,
    /// field 10, wire `offline_receipt_count`
    pub offline_receipt_count: Option<i64>,
    /// field 11, wire `offline_resume_mode`
    pub offline_resume_mode: Option<OFFLINERESUMEMODES>,
    /// field 12, wire `last_push_timestamp_ms`
    pub last_push_timestamp_ms: Option<i64>,
    /// field 13, wire `attempt_id`
    pub attempt_id: Option<i64>,
    /// field 14, wire `is_resume_started_in_foreground`
    pub is_resume_started_in_foreground: Option<bool>,
    /// field 15, wire `offline_call_count`
    pub offline_call_count: Option<i64>,
    /// field 16, wire `offline_size_bytes`
    pub offline_size_bytes: Option<i64>,
    /// field 17, wire `passive_mode_t`
    pub passive_mode_t: Option<String>,
}