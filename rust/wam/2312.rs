pub const WAM_CHAT_ACTION: u32 = 2312;

#[derive(Debug, Default)]
pub struct ChatActionEvent {
    /// field 1, wire `chat_action_type`
    pub chat_action_type: Option<CHATACTIONTYPE>,
    /// field 2, wire `chat_action_entry_point`
    pub chat_action_entry_point: Option<CHATACTIONENTRYPOINT>,
    /// field 3, wire `chat_action_chat_type`
    pub chat_action_chat_type: Option<CHATACTIONCHATTYPE>,
    /// field 4, wire `chat_action_mute_duration`
    pub chat_action_mute_duration: Option<String>,
}