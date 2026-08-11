pub const WAM_DEEP_LINK_MSG_SENT: u32 = 3198;

#[derive(Debug, Default)]
pub struct DeepLinkMsgSentEvent {
    /// field 1, wire `deep_link_action`
    pub deep_link_action: Option<DEEPLINKACTION>,
    /// field 2, wire `deep_link_session_id`
    pub deep_link_session_id: Option<String>,
}