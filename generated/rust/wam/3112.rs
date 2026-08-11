pub const WAM_OFFLINE_RESUME: u32 = 3112;

#[derive(Debug, Default)]
pub struct OfflineResumeEvent {
    /// field 1, wire `chat_thread_count`
    pub chat_thread_count: Option<i64>,
    /// field 2, wire `is_offline_complete_missed`
    pub is_offline_complete_missed: Option<bool>,
    /// field 3, wire `last_stanza_t`
    pub last_stanza_t: Option<String>,
    /// field 4, wire `main_screen_load_t`
    pub main_screen_load_t: Option<String>,
    /// field 5, wire `offline_decrypt_error_count`
    pub offline_decrypt_error_count: Option<i64>,
    /// field 6, wire `offline_message_count`
    pub offline_message_count: Option<i64>,
    /// field 7, wire `offline_notification_count`
    pub offline_notification_count: Option<i64>,
    /// field 8, wire `offline_preview_t`
    pub offline_preview_t: Option<String>,
    /// field 9, wire `offline_receipt_count`
    pub offline_receipt_count: Option<i64>,
    /// field 10, wire `offline_size_bytes`
    pub offline_size_bytes: Option<i64>,
    /// field 11, wire `page_load_t`
    pub page_load_t: Option<String>,
    /// field 12, wire `socket_connect_t`
    pub socket_connect_t: Option<String>,
    /// field 13, wire `is_resume_in_foreground`
    pub is_resume_in_foreground: Option<bool>,
    /// field 14, wire `mailbox_age`
    pub mailbox_age: Option<i64>,
    /// field 15, wire `on_trickle_mode`
    pub on_trickle_mode: Option<bool>,
    /// field 17, wire `expected_offline_message_count`
    pub expected_offline_message_count: Option<i64>,
    /// field 18, wire `expected_offline_notification_count`
    pub expected_offline_notification_count: Option<i64>,
    /// field 19, wire `expected_offline_receipt_count`
    pub expected_offline_receipt_count: Option<i64>,
    /// field 20, wire `offline_processing_t`
    pub offline_processing_t: Option<String>,
    /// field 21, wire `offline_resume_result`
    pub offline_resume_result: Option<OFFLINERESUMERESULTTYPE>,
    /// field 22, wire `is_running_from_service_extension`
    pub is_running_from_service_extension: Option<bool>,
    /// field 23, wire `expected_offline_call_count`
    pub expected_offline_call_count: Option<i64>,
    /// field 24, wire `offline_call_count`
    pub offline_call_count: Option<i64>,
    /// field 25, wire `passive_mode_t`
    pub passive_mode_t: Option<String>,
    /// field 26, wire `preack_call_count`
    pub preack_call_count: Option<i64>,
    /// field 27, wire `preack_message_count`
    pub preack_message_count: Option<i64>,
    /// field 28, wire `preack_notification_count`
    pub preack_notification_count: Option<i64>,
    /// field 29, wire `preack_receipt_count`
    pub preack_receipt_count: Option<i64>,
    /// field 30, wire `processed_call_count`
    pub processed_call_count: Option<i64>,
    /// field 31, wire `processed_message_count`
    pub processed_message_count: Option<i64>,
    /// field 32, wire `processed_notification_count`
    pub processed_notification_count: Option<i64>,
    /// field 33, wire `processed_receipt_count`
    pub processed_receipt_count: Option<i64>,
    /// field 34, wire `transient_offline_session_id`
    pub transient_offline_session_id: Option<String>,
    /// field 35, wire `affected_by_sleep_mode`
    pub affected_by_sleep_mode: Option<bool>,
    /// field 36, wire `attempt_number`
    pub attempt_number: Option<i64>,
    /// field 37, wire `is_resume_started_in_foreground`
    pub is_resume_started_in_foreground: Option<bool>,
    /// field 38, wire `logout_session_id`
    pub logout_session_id: Option<i64>,
    /// field 39, wire `db_duration_t`
    pub db_duration_t: Option<String>,
    /// field 40, wire `db_main_thread_duration_t`
    pub db_main_thread_duration_t: Option<String>,
    /// field 41, wire `db_main_thread_reads_count`
    pub db_main_thread_reads_count: Option<i64>,
    /// field 42, wire `db_main_thread_writes_count`
    pub db_main_thread_writes_count: Option<i64>,
    /// field 43, wire `db_reads_count`
    pub db_reads_count: Option<i64>,
    /// field 44, wire `db_writes_count`
    pub db_writes_count: Option<i64>,
    /// field 45, wire `disconnected`
    pub disconnected: Option<bool>,
    /// field 46, wire `offline_session_t`
    pub offline_session_t: Option<String>,
    /// field 47, wire `preacks_count`
    pub preacks_count: Option<i64>,
    /// field 48, wire `running_tasks`
    pub running_tasks: Option<String>,
    /// field 49, wire `app_context`
    pub app_context: Option<String>,
    /// field 50, wire `app_context_bitfield`
    pub app_context_bitfield: Option<i64>,
    /// field 51, wire `queued_message_count`
    pub queued_message_count: Option<i64>,
    /// field 52, wire `queued_notification_count`
    pub queued_notification_count: Option<i64>,
    /// field 53, wire `queued_receipt_count`
    pub queued_receipt_count: Option<i64>,
    /// field 54, wire `nse_merge_t`
    pub nse_merge_t: Option<String>,
    /// field 55, wire `chat_queue_size`
    pub chat_queue_size: Option<i64>,
    /// field 56, wire `e2ee_queue_size`
    pub e2ee_queue_size: Option<i64>,
    /// field 57, wire `unordered_queue_size`
    pub unordered_queue_size: Option<i64>,
}