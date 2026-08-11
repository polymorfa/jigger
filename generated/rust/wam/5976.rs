pub const WAM_QBM_MESSAGE_LEVEL_ACTION: u32 = 5976;

#[derive(Debug, Default)]
pub struct QbmMessageLevelActionEvent {
    /// field 1, wire `biz_trust_tier`
    pub biz_trust_tier: Option<String>,
    /// field 2, wire `contact_type`
    pub contact_type: Option<CONTACTTYPE>,
    /// field 3, wire `delta_time_received`
    pub delta_time_received: Option<i64>,
    /// field 4, wire `is_insub_contact`
    pub is_insub_contact: Option<bool>,
    /// field 5, wire `message_action_entry_point`
    pub message_action_entry_point: Option<MESSAGEACTIONENTRYPOINT>,
    /// field 6, wire `message_has_url`
    pub message_has_url: Option<bool>,
    /// field 7, wire `message_id_hmac`
    pub message_id_hmac: Option<String>,
    /// field 8, wire `message_level_action`
    pub message_level_action: Option<MESSAGELEVELACTION>,
    /// field 9, wire `thread_id_hmac`
    pub thread_id_hmac: Option<String>,
    /// field 10, wire `is_biz_intent`
    pub is_biz_intent: Option<bool>,
    /// field 11, wire `is_broadcast_message`
    pub is_broadcast_message: Option<bool>,
    /// field 12, wire `ent_source_subplatform`
    pub ent_source_subplatform: Option<String>,
    /// field 13, wire `decision_id`
    pub decision_id: Option<String>,
    /// field 14, wire `thread_lid_hmac`
    pub thread_lid_hmac: Option<String>,
    /// field 15, wire `is_oba`
    pub is_oba: Option<bool>,
    /// field 16, wire `button_value_json_array`
    pub button_value_json_array: Option<String>,
    /// field 17, wire `message_field_json_array`
    pub message_field_json_array: Option<String>,
    /// field 18, wire `submessage_field_json_array`
    pub submessage_field_json_array: Option<String>,
    /// field 23, wire `body_url_count_int`
    pub body_url_count_int: Option<i64>,
    /// field 24, wire `body_url_unique_count_int`
    pub body_url_unique_count_int: Option<i64>,
    /// field 25, wire `cta_url_unique_count_int`
    pub cta_url_unique_count_int: Option<i64>,
    /// field 26, wire `url_unique_count_int`
    pub url_unique_count_int: Option<i64>,
    /// field 27, wire `is_coex`
    pub is_coex: Option<bool>,
    /// field 28, wire `is_through_decision_service`
    pub is_through_decision_service: Option<bool>,
    /// field 29, wire `ias_entry_point`
    pub ias_entry_point: Option<SIGNUPENTRYPOINT>,
    /// field 30, wire `ias_optin_ds`
    pub ias_optin_ds: Option<String>,
    /// field 31, wire `is_ias_subscriber`
    pub is_ias_subscriber: Option<bool>,
    /// field 32, wire `is_from_pill`
    pub is_from_pill: Option<bool>,
    /// field 33, wire `pill_entry_point`
    pub pill_entry_point: Option<PILLENTRYPOINT>,
}