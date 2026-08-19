pub const WAM_ANDROID_MESSAGE_SEND_PERF: u32 = 1994;

#[derive(Debug, Default)]
pub struct AndroidMessageSendPerfEvent {
    /// field 1, wire `duration_t`
    pub duration_t: Option<String>,
    /// field 2, wire `send_stage`
    pub send_stage: Option<CLIENTMESSAGESENDSTAGE>,
    /// field 3, wire `media_type`
    pub media_type: Option<MEDIATYPE>,
    /// field 4, wire `message_type`
    pub message_type: Option<MESSAGETYPE>,
    /// field 8, wire `is_message_forward`
    pub is_message_forward: Option<bool>,
    /// field 9, wire `is_message_fanout`
    pub is_message_fanout: Option<bool>,
    /// field 10, wire `send_retry_count`
    pub send_retry_count: Option<i64>,
    /// field 11, wire `duration_abs`
    pub duration_abs: Option<String>,
    /// field 12, wire `duration_relative`
    pub duration_relative: Option<String>,
    /// field 13, wire `send_count`
    pub send_count: Option<i64>,
    /// field 14, wire `network_was_disconnected`
    pub network_was_disconnected: Option<bool>,
    /// field 15, wire `fetch_prekeys`
    pub fetch_prekeys: Option<bool>,
    /// field 16, wire `app_restart`
    pub app_restart: Option<bool>,
    /// field 17, wire `group_size_bucket`
    pub group_size_bucket: Option<CLIENTGROUPSIZEBUCKET>,
    /// field 18, wire `jobs_in_queue`
    pub jobs_in_queue: Option<i64>,
    /// field 19, wire `threads_in_execution`
    pub threads_in_execution: Option<i64>,
    /// field 20, wire `target_device_group_size_bucket`
    pub target_device_group_size_bucket: Option<CLIENTGROUPSIZEBUCKET>,
    /// field 21, wire `fetch_prekeys_percentage`
    pub fetch_prekeys_percentage: Option<i64>,
    /// field 23, wire `sender_key_distribution_count_percentage`
    pub sender_key_distribution_count_percentage: Option<i64>,
    /// field 24, wire `is_revoke_message`
    pub is_revoke_message: Option<bool>,
    /// field 25, wire `sessions_missing_when_composing`
    pub sessions_missing_when_composing: Option<bool>,
    /// field 26, wire `device_size_bucket`
    pub device_size_bucket: Option<SIZEBUCKET>,
    /// field 27, wire `is_e2e_backfill`
    pub is_e2e_backfill: Option<bool>,
    /// field 28, wire `prekeys_eligible_for_prallel_processing`
    pub prekeys_eligible_for_prallel_processing: Option<bool>,
    /// field 29, wire `is_view_once`
    pub is_view_once: Option<bool>,
    /// field 30, wire `message_is_first_user_message`
    pub message_is_first_user_message: Option<bool>,
    /// field 31, wire `message_is_invisible`
    pub message_is_invisible: Option<bool>,
    /// field 32, wire `bucketed_sender_key_distribution_count_percentage`
    pub bucketed_sender_key_distribution_count_percentage: Option<i64>,
    /// field 33, wire `is_directed_message`
    pub is_directed_message: Option<bool>,
    /// field 34, wire `phone_cores`
    pub phone_cores: Option<i64>,
    /// field 35, wire `bucketed_sender_key_distribution_hash_time`
    pub bucketed_sender_key_distribution_hash_time: Option<i64>,
    /// field 36, wire `device_count`
    pub device_count: Option<i64>,
    /// field 37, wire `participant_count`
    pub participant_count: Option<i64>,
    /// field 38, wire `type_of_group`
    pub type_of_group: Option<TYPEOFGROUPENUM>,
    /// field 39, wire `receiver_device_count`
    pub receiver_device_count: Option<i64>,
    /// field 40, wire `sender_device_count`
    pub sender_device_count: Option<i64>,
    /// field 41, wire `is_lid`
    pub is_lid: Option<bool>,
    /// field 42, wire `edit_type`
    pub edit_type: Option<EDITTYPE>,
    /// field 44, wire `running_tasks`
    pub running_tasks: Option<String>,
    /// field 45, wire `invisible_message_category`
    pub invisible_message_category: Option<INVISIBLEMESSAGECATEGORYTYPE>,
    /// field 46, wire `user_to_device_size_bucket`
    pub user_to_device_size_bucket: Option<String>,
    /// field 47, wire `agent_engagement_type`
    pub agent_engagement_type: Option<AGENTENGAGEMENTENUMTYPE>,
    /// field 48, wire `bot_type`
    pub bot_type: Option<BOTTYPE>,
    /// field 49, wire `is_pq`
    pub is_pq: Option<bool>,
    /// field 50, wire `message_send_result`
    pub message_send_result: Option<MESSAGESENDRESULTTYPE>,
}