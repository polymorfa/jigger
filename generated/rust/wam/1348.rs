pub const WAM_SEND_REVOKE_MESSAGE: u32 = 1348;

#[derive(Debug, Default)]
pub struct SendRevokeMessageEvent {
    /// field 1, wire `message_type`
    pub message_type: Option<MESSAGETYPE>,
    /// field 2, wire `message_media_type`
    pub message_media_type: Option<MEDIATYPE>,
    /// field 3, wire `revoke_send_delay`
    pub revoke_send_delay: Option<i64>,
}