pub const WAM_PINNED_CHATS_MAX_ALERT: u32 = 7606;

#[derive(Debug, Default)]
pub struct PinnedChatsMaxAlertEvent {
    /// field 1, wire `add_to_list_selected`
    pub add_to_list_selected: Option<bool>,
    /// field 2, wire `premium_status`
    pub premium_status: Option<PREMIUMSTATUSTYPE>,
    /// field 3, wire `subscribe_selected`
    pub subscribe_selected: Option<bool>,
}