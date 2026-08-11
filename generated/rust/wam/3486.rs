pub const WAM_KEEP_IN_CHAT_NUX: u32 = 3486;

#[derive(Debug, Default)]
pub struct KeepInChatNuxEvent {
    /// field 1, wire `chat_ephemerality_duration`
    pub chat_ephemerality_duration: Option<i64>,
    /// field 2, wire `kic_nux_action_name`
    pub kic_nux_action_name: Option<KICNUXACTIONNAMETYPE>,
    /// field 3, wire `thread_id`
    pub thread_id: Option<String>,
    /// field 4, wire `trigger`
    pub trigger: Option<TRIGGERTYPE>,
}