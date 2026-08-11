pub const WAM_WEBC_MESSAGE_SEND: u32 = 2072;

#[derive(Debug, Default)]
pub struct WebcMessageSendEvent {
    /// field 1, wire `message_type`
    pub message_type: Option<MESSAGETYPE>,
    /// field 2, wire `message_media_type`
    pub message_media_type: Option<MEDIATYPE>,
    /// field 3, wire `message_is_forward`
    pub message_is_forward: Option<bool>,
    /// field 4, wire `message_send_t`
    pub message_send_t: Option<String>,
}