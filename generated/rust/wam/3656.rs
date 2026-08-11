pub const WAM_REVOKE_MESSAGE_SEND: u32 = 3656;

#[derive(Debug, Default)]
pub struct RevokeMessageSendEvent {
    /// field 1, wire `message_send_result_is_terminal`
    pub message_send_result_is_terminal: Option<bool>,
    /// field 2, wire `message_type`
    pub message_type: Option<MESSAGETYPE>,
    /// field 3, wire `resend_count`
    pub resend_count: Option<i64>,
    /// field 4, wire `retry_count`
    pub retry_count: Option<i64>,
    /// field 5, wire `revoke_duration`
    pub revoke_duration: Option<i64>,
    /// field 6, wire `revoke_type`
    pub revoke_type: Option<REVOKETYPE>,
}