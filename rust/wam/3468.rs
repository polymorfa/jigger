pub const WAM_OTP_RETRIEVER: u32 = 3468;

#[derive(Debug, Default)]
pub struct OtpRetrieverEvent {
    /// field 1, wire `business_phone_number`
    pub business_phone_number: Option<i64>,
    /// field 2, wire `cta_fallback_reason`
    pub cta_fallback_reason: Option<CTAFALLBACKREASON>,
    /// field 3, wire `cta_type`
    pub cta_type: Option<CTATYPE>,
    /// field 5, wire `otp_event_source`
    pub otp_event_source: Option<OTPEVENTSOURCE>,
    /// field 6, wire `otp_event_type`
    pub otp_event_type: Option<OTPEVENTTYPE>,
    /// field 7, wire `otp_product_type`
    pub otp_product_type: Option<OTPPRODUCTTYPE>,
    /// field 8, wire `otp_session_id`
    pub otp_session_id: Option<String>,
    /// field 9, wire `third_party_package_name_from_intent`
    pub third_party_package_name_from_intent: Option<String>,
    /// field 10, wire `third_party_package_signature_hash`
    pub third_party_package_signature_hash: Option<String>,
    /// field 11, wire `message_received_elapsed_time_seconds`
    pub message_received_elapsed_time_seconds: Option<i64>,
    /// field 12, wire `chats_folder_type`
    pub chats_folder_type: Option<CHATSFOLDERTYPE>,
    /// field 13, wire `is_keep_chats_archived_enabled`
    pub is_keep_chats_archived_enabled: Option<bool>,
    /// field 14, wire `is_message_notification_enabled`
    pub is_message_notification_enabled: Option<bool>,
    /// field 15, wire `is_notification_enabled`
    pub is_notification_enabled: Option<bool>,
    /// field 16, wire `otp_failure_reason`
    pub otp_failure_reason: Option<String>,
    /// field 17, wire `template_id`
    pub template_id: Option<String>,
    /// field 18, wire `receiver_country_code`
    pub receiver_country_code: Option<String>,
    /// field 19, wire `chat_id`
    pub chat_id: Option<String>,
    /// field 20, wire `otp_correlation_id`
    pub otp_correlation_id: Option<String>,
    /// field 21, wire `otp_handshake_elapsed_time_ms`
    pub otp_handshake_elapsed_time_ms: Option<i64>,
    /// field 22, wire `otp_sdk_version`
    pub otp_sdk_version: Option<String>,
    /// field 23, wire `otp_handshake_id`
    pub otp_handshake_id: Option<String>,
    /// field 24, wire `otp_mask_linked_devices`
    pub otp_mask_linked_devices: Option<bool>,
    /// field 25, wire `wa_device_id`
    pub wa_device_id: Option<i64>,
    /// field 26, wire `business_lid`
    pub business_lid: Option<i64>,
    /// field 27, wire `otp_sender_attributes`
    pub otp_sender_attributes: Option<String>,
    /// field 28, wire `business_lid_or_jid`
    pub business_lid_or_jid: Option<String>,
    /// field 29, wire `otp_ios_autofill_disabled`
    pub otp_ios_autofill_disabled: Option<bool>,
}