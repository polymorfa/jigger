pub const WAM_DISAPPEARING_MESSAGE_KEEP_IN_CHAT: u32 = 3482;

#[derive(Debug, Default)]
pub struct DisappearingMessageKeepInChatEvent {
    /// field 1, wire `chat_ephemerality_duration`
    pub chat_ephemerality_duration: Option<i64>,
    /// field 2, wire `is_a_group`
    pub is_agroup: Option<bool>,
    /// field 3, wire `is_admin`
    pub is_admin: Option<bool>,
    /// field 4, wire `kept_delta`
    pub kept_delta: Option<i64>,
    /// field 5, wire `kic_action_name`
    pub kic_action_name: Option<KICACTIONNAMETYPE>,
    /// field 6, wire `kic_actor`
    pub kic_actor: Option<KICACTORTYPE>,
    /// field 7, wire `kic_entry_point`
    pub kic_entry_point: Option<KICENTRYPOINTTYPE>,
    /// field 8, wire `media_type`
    pub media_type: Option<MEDIATYPE>,
    /// field 9, wire `message_expired_on_unkeep`
    pub message_expired_on_unkeep: Option<bool>,
    /// field 10, wire `message_expiry_timer`
    pub message_expiry_timer: Option<i64>,
    /// field 11, wire `messages_in_folder`
    pub messages_in_folder: Option<i64>,
    /// field 12, wire `messages_selected`
    pub messages_selected: Option<i64>,
    /// field 13, wire `thread_id`
    pub thread_id: Option<String>,
    /// field 15, wire `kept_count`
    pub kept_count: Option<i64>,
    /// field 16, wire `can_edit_dm_settings`
    pub can_edit_dm_settings: Option<bool>,
}