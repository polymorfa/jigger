pub const WAM_GATED_CHAT_OPENED: u32 = 3150;

#[derive(Debug, Default)]
pub struct GatedChatOpenedEvent {
    /// field 1, wire `chat_gated_reason`
    pub chat_gated_reason: Option<CHATGATEDREASON>,
    /// field 2, wire `self_initiated`
    pub self_initiated: Option<bool>,
}