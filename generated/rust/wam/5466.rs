pub const WAM_REPORTING_TOKEN_VALIDATION_FAILURE: u32 = 5466;

#[derive(Debug, Default)]
pub struct ReportingTokenValidationFailureEvent {
    /// field 1, wire `edit_type`
    pub edit_type: Option<EDITTYPE>,
    /// field 2, wire `message_media_type`
    pub message_media_type: Option<MEDIATYPE>,
    /// field 3, wire `message_type`
    pub message_type: Option<MESSAGETYPE>,
    /// field 4, wire `reporting_token_validation_failure_reason`
    pub reporting_token_validation_failure_reason: Option<REPORTINGTOKENVALIDATIONFAILUREREASON>,
    /// field 5, wire `is_lid`
    pub is_lid: Option<bool>,
    /// field 6, wire `is_message_retry`
    pub is_message_retry: Option<bool>,
    /// field 7, wire `offline`
    pub offline: Option<bool>,
    /// field 8, wire `is_secret_encrypted_msg`
    pub is_secret_encrypted_msg: Option<bool>,
    /// field 9, wire `reporting_token_version`
    pub reporting_token_version: Option<i64>,
    /// field 10, wire `is_message_media_retry`
    pub is_message_media_retry: Option<bool>,
    /// field 11, wire `message_is_forward`
    pub message_is_forward: Option<bool>,
    /// field 13, wire `is_part_of_group_history`
    pub is_part_of_group_history: Option<bool>,
    /// field 14, wire `sender_platform`
    pub sender_platform: Option<PLATFORMTYPE>,
}