pub const WAM_PIN_IN_CHAT_MESSAGE_SEND: u32 = 4438;

#[derive(Debug, Default)]
pub struct PinInChatMessageSendEvent {
    /// field 1, wire `group_role`
    pub group_role: Option<GROUPROLETYPE>,
    /// field 2, wire `group_type_client`
    pub group_type_client: Option<GROUPTYPECLIENT>,
    /// field 3, wire `is_a_group`
    pub is_agroup: Option<bool>,
    /// field 4, wire `media_type`
    pub media_type: Option<MEDIATYPE>,
    /// field 5, wire `pin_in_chat_expiry_secs`
    pub pin_in_chat_expiry_secs: Option<i64>,
    /// field 6, wire `pin_in_chat_type`
    pub pin_in_chat_type: Option<PININCHATTYPE>,
    /// field 7, wire `is_self_parent_message`
    pub is_self_parent_message: Option<bool>,
    /// field 8, wire `is_self_pin`
    pub is_self_pin: Option<bool>,
    /// field 9, wire `time_remaining_to_expiry_secs`
    pub time_remaining_to_expiry_secs: Option<i64>,
}