pub const WAM_DISAPPEARING_MESSAGE_CHAT_PICKER: u32 = 3398;

#[derive(Debug, Default)]
pub struct DisappearingMessageChatPickerEvent {
    /// field 1, wire `chats_selected`
    pub chats_selected: Option<i64>,
    /// field 2, wire `dm_chat_picker_entry_point`
    pub dm_chat_picker_entry_point: Option<DMCHATPICKERENTRYPOINTTYPE>,
    /// field 3, wire `dm_chat_picker_event_name`
    pub dm_chat_picker_event_name: Option<DMCHATPICKEREVENTNAMETYPE>,
    /// field 4, wire `ephemerality_duration`
    pub ephemerality_duration: Option<i64>,
    /// field 5, wire `group_chats_selected`
    pub group_chats_selected: Option<i64>,
    /// field 7, wire `newly_ephemeral_chats`
    pub newly_ephemeral_chats: Option<i64>,
    /// field 8, wire `total_chats_in_chat_picker`
    pub total_chats_in_chat_picker: Option<i64>,
    /// field 9, wire `group_size_distribution_json`
    pub group_size_distribution_json: Option<String>,
}