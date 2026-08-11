pub const WAM_QBM_INCOMING_MESSAGE: u32 = 3790;

#[derive(Debug, Default)]
pub struct QbmIncomingMessageEvent {
    /// field 1, wire `chats_folder_type`
    pub chats_folder_type: Option<CHATSFOLDERTYPE>,
    /// field 2, wire `contact_type`
    pub contact_type: Option<CONTACTTYPE>,
    /// field 3, wire `keep_chats_archived_enabled`
    pub keep_chats_archived_enabled: Option<bool>,
    /// field 4, wire `muted`
    pub muted: Option<bool>,
    /// field 5, wire `notification_enabled`
    pub notification_enabled: Option<bool>,
    /// field 6, wire `qbm_flag`
    pub qbm_flag: Option<QBMFLAG>,
    /// field 7, wire `message_type_str`
    pub message_type_str: Option<String>,
    /// field 8, wire `thread_id_hmac`
    pub thread_id_hmac: Option<String>,
    /// field 9, wire `read_receipts_enabled`
    pub read_receipts_enabled: Option<bool>,
    /// field 10, wire `companion_devices`
    pub companion_devices: Option<i64>,
    /// field 11, wire `last_outgoing_message_delta_time`
    pub last_outgoing_message_delta_time: Option<i64>,
    /// field 12, wire `qbm_flag_str`
    pub qbm_flag_str: Option<String>,
    /// field 13, wire `last_outgoing_message_delta_time_received`
    pub last_outgoing_message_delta_time_received: Option<i64>,
    /// field 14, wire `hsm_tag_str`
    pub hsm_tag_str: Option<String>,
    /// field 15, wire `is_from_ads_manager_mm`
    pub is_from_ads_manager_mm: Option<bool>,
    /// field 16, wire `is_from_capi`
    pub is_from_capi: Option<bool>,
    /// field 17, wire `message_id_hmac`
    pub message_id_hmac: Option<String>,
    /// field 18, wire `message_has_button`
    pub message_has_button: Option<bool>,
    /// field 19, wire `message_has_url`
    pub message_has_url: Option<bool>,
    /// field 20, wire `is_muted`
    pub is_muted: Option<bool>,
    /// field 21, wire `api_daily_thread_count7d`
    pub api_daily_thread_count7d: Option<i64>,
    /// field 22, wire `api_message_count1d`
    pub api_message_count1d: Option<i64>,
    /// field 23, wire `api_message_count7d`
    pub api_message_count7d: Option<i64>,
    /// field 24, wire `api_unique_thread_count1d`
    pub api_unique_thread_count1d: Option<i64>,
    /// field 25, wire `api_unique_thread_count7d`
    pub api_unique_thread_count7d: Option<i64>,
    /// field 26, wire `api_total_message_count`
    pub api_total_message_count: Option<i64>,
    /// field 27, wire `api_total_new_thread_count`
    pub api_total_new_thread_count: Option<i64>,
    /// field 28, wire `smb_daily_thread_count7d`
    pub smb_daily_thread_count7d: Option<i64>,
    /// field 29, wire `smb_message_count1d`
    pub smb_message_count1d: Option<i64>,
    /// field 30, wire `smb_message_count7d`
    pub smb_message_count7d: Option<i64>,
    /// field 31, wire `smb_total_message_count`
    pub smb_total_message_count: Option<i64>,
    /// field 32, wire `smb_total_new_thread_count`
    pub smb_total_new_thread_count: Option<i64>,
    /// field 33, wire `smb_unique_thread_count1d`
    pub smb_unique_thread_count1d: Option<i64>,
    /// field 34, wire `smb_unique_thread_count7d`
    pub smb_unique_thread_count7d: Option<i64>,
    /// field 35, wire `thread_creation_time`
    pub thread_creation_time: Option<THREADCREATIONTIME>,
    /// field 36, wire `biz_trust_tier`
    pub biz_trust_tier: Option<String>,
    /// field 37, wire `is_biz_intent`
    pub is_biz_intent: Option<bool>,
    /// field 38, wire `is_broadcast_message`
    pub is_broadcast_message: Option<bool>,
    /// field 39, wire `is_insub_contact`
    pub is_insub_contact: Option<bool>,
    /// field 40, wire `ent_source_subplatform`
    pub ent_source_subplatform: Option<String>,
    /// field 41, wire `decision_id`
    pub decision_id: Option<String>,
    /// field 42, wire `thread_lid_hmac`
    pub thread_lid_hmac: Option<String>,
    /// field 43, wire `fmx_card_shown`
    pub fmx_card_shown: Option<bool>,
    /// field 44, wire `is_oba`
    pub is_oba: Option<bool>,
    /// field 45, wire `button_value_json_array`
    pub button_value_json_array: Option<String>,
    /// field 46, wire `message_field_json_array`
    pub message_field_json_array: Option<String>,
    /// field 47, wire `submessage_field_json_array`
    pub submessage_field_json_array: Option<String>,
    /// field 52, wire `body_url_count_int`
    pub body_url_count_int: Option<i64>,
    /// field 53, wire `body_url_unique_count_int`
    pub body_url_unique_count_int: Option<i64>,
    /// field 54, wire `cta_url_unique_count_int`
    pub cta_url_unique_count_int: Option<i64>,
    /// field 55, wire `url_unique_count_int`
    pub url_unique_count_int: Option<i64>,
    /// field 56, wire `is_coex`
    pub is_coex: Option<bool>,
    /// field 57, wire `is_through_decision_service`
    pub is_through_decision_service: Option<bool>,
    /// field 58, wire `gap_rules`
    pub gap_rules: Option<String>,
    /// field 59, wire `ge_evaluation_timestamp`
    pub ge_evaluation_timestamp: Option<i64>,
    /// field 60, wire `ias_entry_point`
    pub ias_entry_point: Option<SIGNUPENTRYPOINT>,
    /// field 61, wire `ias_optin_ds`
    pub ias_optin_ds: Option<String>,
    /// field 62, wire `is_ias_subscriber`
    pub is_ias_subscriber: Option<bool>,
    /// field 63, wire `is_from_pill`
    pub is_from_pill: Option<bool>,
    /// field 64, wire `pill_entry_point`
    pub pill_entry_point: Option<PILLENTRYPOINT>,
}