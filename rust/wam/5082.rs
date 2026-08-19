pub const WAM_SYSTEM_MESSAGE_CLICK: u32 = 5082;

#[derive(Debug, Default)]
pub struct SystemMessageClickEvent {
    /// field 1, wire `is_a_group`
    pub is_agroup: Option<bool>,
    /// field 2, wire `is_a_new_thread`
    pub is_anew_thread: Option<bool>,
    /// field 3, wire `system_message_category`
    pub system_message_category: Option<SYSTEMMESSAGECATEGORYTYPE>,
    /// field 4, wire `system_message_type`
    pub system_message_type: Option<SYSTEMMESSAGETYPETYPE>,
}