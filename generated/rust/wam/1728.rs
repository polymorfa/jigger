pub const WAM_FORWARD_SEND: u32 = 1728;

#[derive(Debug, Default)]
pub struct ForwardSendEvent {
    /// field 1, wire `message_type`
    pub message_type: Option<MESSAGETYPE>,
    /// field 2, wire `message_media_type`
    pub message_media_type: Option<MEDIATYPE>,
    /// field 3, wire `message_is_fast_forward`
    pub message_is_fast_forward: Option<bool>,
    /// field 4, wire `message_forward_age_t`
    pub message_forward_age_t: Option<String>,
    /// field 5, wire `fast_forward_enabled`
    pub fast_forward_enabled: Option<bool>,
    /// field 6, wire `message_is_fanout`
    pub message_is_fanout: Option<bool>,
    /// field 7, wire `retry_count`
    pub retry_count: Option<i64>,
    /// field 8, wire `resend_count`
    pub resend_count: Option<i64>,
    /// field 9, wire `message_is_international`
    pub message_is_international: Option<bool>,
    /// field 10, wire `media_caption_present`
    pub media_caption_present: Option<bool>,
    /// field 11, wire `e2e_ciphertext_version`
    pub e2e_ciphertext_version: Option<i64>,
    /// field 12, wire `e2e_ciphertext_type`
    pub e2e_ciphertext_type: Option<E2ECIPHERTEXTTYPE>,
    /// field 13, wire `message_send_t`
    pub message_send_t: Option<String>,
    /// field 14, wire `is_frequently_forwarded`
    pub is_frequently_forwarded: Option<bool>,
    /// field 16, wire `would_be_frequently_forwarded_at3`
    pub would_be_frequently_forwarded_at3: Option<bool>,
    /// field 17, wire `would_be_frequently_forwarded_at4`
    pub would_be_frequently_forwarded_at4: Option<bool>,
    /// field 18, wire `ephemerality_duration`
    pub ephemerality_duration: Option<i64>,
    /// field 19, wire `sender_default_disappearing_duration`
    pub sender_default_disappearing_duration: Option<i64>,
    /// field 20, wire `receiver_default_disappearing_duration`
    pub receiver_default_disappearing_duration: Option<i64>,
    /// field 21, wire `disappearing_chat_initiator`
    pub disappearing_chat_initiator: Option<DISAPPEARINGCHATINITIATORTYPE>,
    /// field 22, wire `is_forwarded_forward`
    pub is_forwarded_forward: Option<bool>,
    /// field 23, wire `type_of_group`
    pub type_of_group: Option<TYPEOFGROUPENUM>,
    /// field 24, wire `ephemerality_initiator`
    pub ephemerality_initiator: Option<EPHEMERALITYINITIATORTYPE>,
    /// field 25, wire `ephemerality_trigger_action`
    pub ephemerality_trigger_action: Option<EPHEMERALITYTRIGGERACTIONTYPE>,
    /// field 26, wire `message_biz_type`
    pub message_biz_type: Option<MESSAGEBIZTYPE>,
    /// field 27, wire `forward_picker_origin`
    pub forward_picker_origin: Option<FORWARDPICKERORIGIN>,
    /// field 28, wire `forward_origin`
    pub forward_origin: Option<FORWARDORIGIN>,
}