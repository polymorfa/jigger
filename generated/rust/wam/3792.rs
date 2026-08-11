pub const WAM_QBM_MESSAGE_READ: u32 = 3792;

#[derive(Debug, Default)]
pub struct QbmMessageReadEvent {
    /// field 1, wire `chats_folder_type`
    pub chats_folder_type: Option<CHATSFOLDERTYPE>,
    /// field 2, wire `contact_type`
    pub contact_type: Option<CONTACTTYPE>,
    /// field 3, wire `delta_time`
    pub delta_time: Option<i64>,
    /// field 4, wire `qbm_flag`
    pub qbm_flag: Option<QBMFLAG>,
    /// field 5, wire `read_source`
    pub read_source: Option<READSOURCE>,
    /// field 6, wire `message_type_str`
    pub message_type_str: Option<String>,
    /// field 7, wire `thread_id_hmac`
    pub thread_id_hmac: Option<String>,
    /// field 8, wire `delta_time_received`
    pub delta_time_received: Option<i64>,
    /// field 9, wire `hsm_tag_str`
    pub hsm_tag_str: Option<String>,
    /// field 10, wire `is_from_ads_manager_mm`
    pub is_from_ads_manager_mm: Option<bool>,
    /// field 11, wire `is_from_capi`
    pub is_from_capi: Option<bool>,
    /// field 12, wire `read_receipts_enabled`
    pub read_receipts_enabled: Option<bool>,
    /// field 13, wire `message_id_hmac`
    pub message_id_hmac: Option<String>,
    /// field 14, wire `is_bulk_action`
    pub is_bulk_action: Option<bool>,
    /// field 15, wire `is_muted`
    pub is_muted: Option<bool>,
    /// field 16, wire `message_has_button`
    pub message_has_button: Option<bool>,
    /// field 17, wire `message_has_url`
    pub message_has_url: Option<bool>,
    /// field 18, wire `api_daily_thread_count7d`
    pub api_daily_thread_count7d: Option<i64>,
    /// field 19, wire `api_message_count1d`
    pub api_message_count1d: Option<i64>,
    /// field 20, wire `api_message_count7d`
    pub api_message_count7d: Option<i64>,
    /// field 21, wire `api_unique_thread_count1d`
    pub api_unique_thread_count1d: Option<i64>,
    /// field 22, wire `api_unique_thread_count7d`
    pub api_unique_thread_count7d: Option<i64>,
    /// field 23, wire `api_total_message_count`
    pub api_total_message_count: Option<i64>,
    /// field 24, wire `api_total_new_thread_count`
    pub api_total_new_thread_count: Option<i64>,
    /// field 25, wire `smb_daily_thread_count7d`
    pub smb_daily_thread_count7d: Option<i64>,
    /// field 26, wire `smb_message_count1d`
    pub smb_message_count1d: Option<i64>,
    /// field 27, wire `smb_message_count7d`
    pub smb_message_count7d: Option<i64>,
    /// field 28, wire `smb_total_message_count`
    pub smb_total_message_count: Option<i64>,
    /// field 29, wire `smb_total_new_thread_count`
    pub smb_total_new_thread_count: Option<i64>,
    /// field 30, wire `smb_unique_thread_count1d`
    pub smb_unique_thread_count1d: Option<i64>,
    /// field 31, wire `smb_unique_thread_count7d`
    pub smb_unique_thread_count7d: Option<i64>,
    /// field 32, wire `thread_creation_time`
    pub thread_creation_time: Option<THREADCREATIONTIME>,
    /// field 33, wire `thread_dwell_time`
    pub thread_dwell_time: Option<i64>,
    /// field 34, wire `biz_trust_tier`
    pub biz_trust_tier: Option<String>,
    /// field 35, wire `is_insub_contact`
    pub is_insub_contact: Option<bool>,
    /// field 36, wire `thumbnail_type`
    pub thumbnail_type: Option<THUMBNAILTYPE>,
    /// field 37, wire `is_biz_intent`
    pub is_biz_intent: Option<bool>,
    /// field 38, wire `is_broadcast_message`
    pub is_broadcast_message: Option<bool>,
    /// field 39, wire `ent_source_subplatform`
    pub ent_source_subplatform: Option<String>,
    /// field 40, wire `decision_id`
    pub decision_id: Option<String>,
    /// field 41, wire `companion_devices`
    pub companion_devices: Option<i64>,
    /// field 42, wire `thread_lid_hmac`
    pub thread_lid_hmac: Option<String>,
    /// field 43, wire `is_oba`
    pub is_oba: Option<bool>,
    /// field 44, wire `button_value_json_array`
    pub button_value_json_array: Option<String>,
    /// field 45, wire `message_field_json_array`
    pub message_field_json_array: Option<String>,
    /// field 46, wire `submessage_field_json_array`
    pub submessage_field_json_array: Option<String>,
    /// field 51, wire `body_url_count_int`
    pub body_url_count_int: Option<i64>,
    /// field 52, wire `body_url_unique_count_int`
    pub body_url_unique_count_int: Option<i64>,
    /// field 53, wire `cta_url_unique_count_int`
    pub cta_url_unique_count_int: Option<i64>,
    /// field 54, wire `url_unique_count_int`
    pub url_unique_count_int: Option<i64>,
    /// field 55, wire `is_coex`
    pub is_coex: Option<bool>,
    /// field 56, wire `is_through_decision_service`
    pub is_through_decision_service: Option<bool>,
    /// field 57, wire `ias_entry_point`
    pub ias_entry_point: Option<SIGNUPENTRYPOINT>,
    /// field 58, wire `ias_optin_ds`
    pub ias_optin_ds: Option<String>,
    /// field 59, wire `is_ias_subscriber`
    pub is_ias_subscriber: Option<bool>,
    /// field 60, wire `is_from_pill`
    pub is_from_pill: Option<bool>,
    /// field 61, wire `pill_entry_point`
    pub pill_entry_point: Option<PILLENTRYPOINT>,
}