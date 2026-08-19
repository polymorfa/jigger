pub const WAM_SENDER_KEY_EXPIRED: u32 = 3130;

#[derive(Debug, Default)]
pub struct SenderKeyExpiredEvent {
    /// field 1, wire `chat_type`
    pub chat_type: Option<MESSAGECHATTYPE>,
    /// field 2, wire `device_size_bucket`
    pub device_size_bucket: Option<SIZEBUCKET>,
    /// field 3, wire `expiry_reason`
    pub expiry_reason: Option<EXPIRYREASON>,
}