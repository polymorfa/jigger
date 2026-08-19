pub const WAM_REPORTING_TOKEN_VALIDATION_FAILURE_SENDER: u32 = 6094;

#[derive(Debug, Default)]
pub struct ReportingTokenValidationFailureSenderEvent {
    /// field 1, wire `client_message_id`
    pub client_message_id: Option<String>,
    /// field 2, wire `e2e_receiver_type`
    pub e2e_receiver_type: Option<DEVICETYPE>,
    /// field 3, wire `e2e_sender_type`
    pub e2e_sender_type: Option<E2EDEVICETYPE>,
    /// field 4, wire `edit_type`
    pub edit_type: Option<EDITTYPE>,
    /// field 5, wire `is_lid`
    pub is_lid: Option<bool>,
    /// field 6, wire `is_message_retry`
    pub is_message_retry: Option<bool>,
    /// field 7, wire `message_media_type`
    pub message_media_type: Option<MEDIATYPE>,
    /// field 8, wire `message_type`
    pub message_type: Option<MESSAGETYPE>,
    /// field 9, wire `offline`
    pub offline: Option<bool>,
    /// field 10, wire `reporting_token_validation_failure_reason`
    pub reporting_token_validation_failure_reason: Option<REPORTINGTOKENVALIDATIONFAILUREREASON>,
    /// field 11, wire `sender_jid`
    pub sender_jid: Option<String>,
    /// field 12, wire `is_secret_encrypted_msg`
    pub is_secret_encrypted_msg: Option<bool>,
    /// field 13, wire `reporting_token_version`
    pub reporting_token_version: Option<i64>,
    /// field 14, wire `is_message_media_retry`
    pub is_message_media_retry: Option<bool>,
    /// field 15, wire `message_is_forward`
    pub message_is_forward: Option<bool>,
    /// field 16, wire `group_history_bundle_message_id`
    pub group_history_bundle_message_id: Option<String>,
}