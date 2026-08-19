pub const WAM_CHAT_LOCK_DAILY: u32 = 4214;

#[derive(Debug, Default)]
pub struct ChatLockDailyEvent {
    /// field 1, wire `folder_chats_count`
    pub folder_chats_count: Option<i64>,
    /// field 2, wire `folder_open_count`
    pub folder_open_count: Option<i64>,
    /// field 3, wire `new_add_chat_count`
    pub new_add_chat_count: Option<i64>,
    /// field 4, wire `new_remove_chat_count`
    pub new_remove_chat_count: Option<i64>,
    /// field 5, wire `lock_folder_hidden`
    pub lock_folder_hidden: Option<bool>,
    /// field 6, wire `secret_code_active`
    pub secret_code_active: Option<bool>,
}