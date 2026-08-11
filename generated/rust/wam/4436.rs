pub const WAM_PIN_IN_CHAT_INTERACTION: u32 = 4436;

#[derive(Debug, Default)]
pub struct PinInChatInteractionEvent {
    /// field 1, wire `group_role`
    pub group_role: Option<GROUPROLETYPE>,
    /// field 2, wire `group_size`
    pub group_size: Option<i64>,
    /// field 3, wire `group_type_client`
    pub group_type_client: Option<GROUPTYPECLIENT>,
    /// field 4, wire `is_a_group`
    pub is_agroup: Option<bool>,
    /// field 5, wire `media_type`
    pub media_type: Option<MEDIATYPE>,
    /// field 6, wire `pin_count`
    pub pin_count: Option<i64>,
    /// field 7, wire `pin_in_chat_interaction_type`
    pub pin_in_chat_interaction_type: Option<PININCHATINTERACTIONTYPE>,
    /// field 8, wire `is_self_pin`
    pub is_self_pin: Option<bool>,
    /// field 9, wire `pin_index`
    pub pin_index: Option<i64>,
    /// field 10, wire `ui_surface`
    pub ui_surface: Option<TSSURFACE>,
}