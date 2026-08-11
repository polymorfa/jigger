pub const WAM_EDIT_MESSAGE_SEND: u32 = 3990;

#[derive(Debug, Default)]
pub struct EditMessageSendEvent {
    /// field 1, wire `edit_duration`
    pub edit_duration: Option<i64>,
    /// field 2, wire `edit_type`
    pub edit_type: Option<EDITTYPE>,
    /// field 3, wire `message_send_result_is_terminal`
    pub message_send_result_is_terminal: Option<bool>,
    /// field 4, wire `message_type`
    pub message_type: Option<MESSAGETYPE>,
    /// field 5, wire `resend_count`
    pub resend_count: Option<i64>,
    /// field 6, wire `retry_count`
    pub retry_count: Option<i64>,
    /// field 8, wire `media_type`
    pub media_type: Option<MEDIATYPE>,
    /// field 9, wire `type_of_group`
    pub type_of_group: Option<TYPEOFGROUPENUM>,
    /// field 10, wire `edited_message_id`
    pub edited_message_id: Option<String>,
}