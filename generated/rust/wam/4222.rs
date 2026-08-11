pub const WAM_WEBC_OFFLINE_NOTIFICATION_PROCESS: u32 = 4222;

#[derive(Debug, Default)]
pub struct WebcOfflineNotificationProcessEvent {
    /// field 4, wire `current_offline_process_stage`
    pub current_offline_process_stage: Option<OFFLINEPROCESSSTAGES>,
    /// field 5, wire `offline_process_decrypt_error_count`
    pub offline_process_decrypt_error_count: Option<i64>,
    /// field 6, wire `offline_process_mailbox_age`
    pub offline_process_mailbox_age: Option<i64>,
    /// field 7, wire `offline_process_message_count`
    pub offline_process_message_count: Option<i64>,
    /// field 8, wire `offline_process_notification_count`
    pub offline_process_notification_count: Option<i64>,
    /// field 9, wire `offline_process_session_id`
    pub offline_process_session_id: Option<String>,
    /// field 10, wire `offline_process_stage_timestamp_ms`
    pub offline_process_stage_timestamp_ms: Option<i64>,
    /// field 11, wire `sw_version`
    pub sw_version: Option<String>,
    /// field 12, wire `run_reason`
    pub run_reason: Option<OFFLINEPROCESSRUNREASONS>,
}