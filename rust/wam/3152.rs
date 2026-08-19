pub const WAM_GATED_MESSAGE_RECEIVED: u32 = 3152;

#[derive(Debug, Default)]
pub struct GatedMessageReceivedEvent {
    /// field 1, wire `chat_gated_reason`
    pub chat_gated_reason: Option<CHATGATEDREASON>,
}