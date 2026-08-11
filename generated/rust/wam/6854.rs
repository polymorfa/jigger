pub const WAM_MESSAGE_CAPPING: u32 = 6854;

#[derive(Debug, Default)]
pub struct MessageCappingEvent {
    /// field 2, wire `extra_attributes`
    pub extra_attributes: Option<String>,
    /// field 4, wire `surface`
    pub surface: Option<SURFACETYPE>,
    /// field 5, wire `user_action_target`
    pub user_action_target: Option<String>,
    /// field 6, wire `message_capping_action_type`
    pub message_capping_action_type: Option<MESSAGECAPPINGACTIONTYPE>,
    /// field 7, wire `message_capping_sequence`
    pub message_capping_sequence: Option<i64>,
    /// field 8, wire `message_capping_session`
    pub message_capping_session: Option<String>,
    /// field 9, wire `message_capping_entry_point`
    pub message_capping_entry_point: Option<SURFACETYPE>,
}