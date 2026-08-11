pub const WAM_CHAT_LOCK_ACTION: u32 = 4212;

#[derive(Debug, Default)]
pub struct ChatLockActionEvent {
    /// field 1, wire `chat_lock_action_type`
    pub chat_lock_action_type: Option<CHATLOCKACTIONTYPE>,
    /// field 2, wire `chat_lock_is_group`
    pub chat_lock_is_group: Option<bool>,
    /// field 3, wire `action_entry_point`
    pub action_entry_point: Option<ACTIONENTRYPOINT>,
    /// field 4, wire `action_folder_chats_count`
    pub action_folder_chats_count: Option<i64>,
    /// field 5, wire `auth_type`
    pub auth_type: Option<AUTHTYPE>,
}