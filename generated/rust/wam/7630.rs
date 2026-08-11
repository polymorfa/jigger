pub const WAM_PINNED_CHATS: u32 = 7630;

#[derive(Debug, Default)]
pub struct PinnedChatsEvent {
    /// field 1, wire `pinned_chat_number`
    pub pinned_chat_number: Option<i64>,
    /// field 2, wire `pinned_chats_premium_status`
    pub pinned_chats_premium_status: Option<PINNEDCHATSPREMIUMSTATUSTYPE>,
}