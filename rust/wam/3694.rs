pub const WAM_MESSAGE_CONTEXT_MENU_ACTIONS: u32 = 3694;

#[derive(Debug, Default)]
pub struct MessageContextMenuActionsEvent {
    /// field 1, wire `is_a_group`
    pub is_agroup: Option<bool>,
    /// field 2, wire `is_multi_action`
    pub is_multi_action: Option<bool>,
    /// field 3, wire `is_original_sender`
    pub is_original_sender: Option<bool>,
    /// field 4, wire `message_context_menu_action`
    pub message_context_menu_action: Option<MESSAGECONTEXTMENUACTIONTYPE>,
    /// field 5, wire `message_context_menu_option`
    pub message_context_menu_option: Option<MESSAGECONTEXTMENUOPTIONTYPE>,
}