pub const WAM_PAID_MESSAGE_VPV_IMPRESSION: u32 = 7652;

#[derive(Debug, Default)]
pub struct PaidMessageVpvImpressionEvent {
    /// field 1, wire `body_url_count_int`
    pub body_url_count_int: Option<i64>,
    /// field 2, wire `body_url_unique_count_int`
    pub body_url_unique_count_int: Option<i64>,
    /// field 3, wire `button_value_json_array`
    pub button_value_json_array: Option<String>,
    /// field 4, wire `chats_folder_type`
    pub chats_folder_type: Option<CHATSFOLDERTYPE>,
    /// field 5, wire `contact_type`
    pub contact_type: Option<CONTACTTYPE>,
    /// field 6, wire `cta_url_unique_count_int`
    pub cta_url_unique_count_int: Option<i64>,
    /// field 7, wire `decision_id`
    pub decision_id: Option<String>,
    /// field 8, wire `delta_time`
    pub delta_time: Option<i64>,
    /// field 9, wire `delta_time_received`
    pub delta_time_received: Option<i64>,
    /// field 10, wire `hsm_tag_str`
    pub hsm_tag_str: Option<String>,
    /// field 11, wire `is_biz_intent`
    pub is_biz_intent: Option<bool>,
    /// field 12, wire `is_broadcast_message`
    pub is_broadcast_message: Option<bool>,
    /// field 13, wire `is_insub_contact`
    pub is_insub_contact: Option<bool>,
    /// field 14, wire `is_muted`
    pub is_muted: Option<bool>,
    /// field 15, wire `message_field_json_array`
    pub message_field_json_array: Option<String>,
    /// field 16, wire `message_id_hmac`
    pub message_id_hmac: Option<String>,
    /// field 17, wire `qbm_flag`
    pub qbm_flag: Option<QBMFLAG>,
    /// field 18, wire `read_receipts_enabled`
    pub read_receipts_enabled: Option<bool>,
    /// field 19, wire `submessage_field_json_array`
    pub submessage_field_json_array: Option<String>,
    /// field 20, wire `thread_id_hmac`
    pub thread_id_hmac: Option<String>,
    /// field 21, wire `unified_session_id`
    pub unified_session_id: Option<String>,
    /// field 22, wire `url_unique_count_int`
    pub url_unique_count_int: Option<i64>,
    /// field 23, wire `vpv_dwell_time_ms`
    pub vpv_dwell_time_ms: Option<i64>,
    /// field 24, wire `vpv_json_object`
    pub vpv_json_object: Option<String>,
    /// field 25, wire `message_body_type`
    pub message_body_type: Option<MESSAGEBODYTYPEENUM>,
    /// field 26, wire `mm_carousel_card_index`
    pub mm_carousel_card_index: Option<i64>,
    /// field 27, wire `message_bubble_height_px`
    pub message_bubble_height_px: Option<i64>,
    /// field 28, wire `message_bubble_width_px`
    pub message_bubble_width_px: Option<i64>,
}