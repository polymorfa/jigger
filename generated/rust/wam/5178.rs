pub const WAM_QBM_MESSAGE_CLICK: u32 = 5178;

#[derive(Debug, Default)]
pub struct QbmMessageClickEvent {
    /// field 1, wire `button_clicked_type`
    pub button_clicked_type: Option<QBMMESSAGECLICKBUTTONCLICKEDTYPE>,
    /// field 2, wire `chats_folder_type`
    pub chats_folder_type: Option<CHATSFOLDERTYPE>,
    /// field 3, wire `contact_type`
    pub contact_type: Option<CONTACTTYPE>,
    /// field 4, wire `delta_time`
    pub delta_time: Option<i64>,
    /// field 5, wire `delta_time_received`
    pub delta_time_received: Option<i64>,
    /// field 6, wire `hsm_tag_str`
    pub hsm_tag_str: Option<String>,
    /// field 7, wire `message_type_str`
    pub message_type_str: Option<String>,
    /// field 8, wire `qbm_flag`
    pub qbm_flag: Option<QBMFLAG>,
    /// field 9, wire `thread_id_hmac`
    pub thread_id_hmac: Option<String>,
    /// field 10, wire `biz_trust_tier`
    pub biz_trust_tier: Option<String>,
    /// field 11, wire `message_id_hmac`
    pub message_id_hmac: Option<String>,
    /// field 12, wire `thumbnail_type`
    pub thumbnail_type: Option<THUMBNAILTYPE>,
    /// field 13, wire `is_biz_intent`
    pub is_biz_intent: Option<bool>,
    /// field 14, wire `is_broadcast_message`
    pub is_broadcast_message: Option<bool>,
    /// field 15, wire `is_insub_contact`
    pub is_insub_contact: Option<bool>,
    /// field 16, wire `ent_source_subplatform`
    pub ent_source_subplatform: Option<String>,
    /// field 17, wire `decision_id`
    pub decision_id: Option<String>,
    /// field 18, wire `thread_lid_hmac`
    pub thread_lid_hmac: Option<String>,
    /// field 19, wire `is_oba`
    pub is_oba: Option<bool>,
    /// field 20, wire `button_value_json_array`
    pub button_value_json_array: Option<String>,
    /// field 21, wire `message_field_json_array`
    pub message_field_json_array: Option<String>,
    /// field 22, wire `submessage_field_json_array`
    pub submessage_field_json_array: Option<String>,
    /// field 27, wire `body_url_count_int`
    pub body_url_count_int: Option<i64>,
    /// field 28, wire `body_url_unique_count_int`
    pub body_url_unique_count_int: Option<i64>,
    /// field 29, wire `cta_url_unique_count_int`
    pub cta_url_unique_count_int: Option<i64>,
    /// field 30, wire `url_unique_count_int`
    pub url_unique_count_int: Option<i64>,
    /// field 31, wire `is_coex`
    pub is_coex: Option<bool>,
    /// field 32, wire `is_through_decision_service`
    pub is_through_decision_service: Option<bool>,
    /// field 33, wire `ias_entry_point`
    pub ias_entry_point: Option<SIGNUPENTRYPOINT>,
    /// field 34, wire `ias_optin_ds`
    pub ias_optin_ds: Option<String>,
    /// field 35, wire `is_ias_subscriber`
    pub is_ias_subscriber: Option<bool>,
    /// field 36, wire `is_from_pill`
    pub is_from_pill: Option<bool>,
    /// field 37, wire `pill_entry_point`
    pub pill_entry_point: Option<PILLENTRYPOINT>,
}