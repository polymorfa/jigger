pub const WAM_MESSAGE_DELETE_ACTIONS: u32 = 3626;

#[derive(Debug, Default)]
pub struct MessageDeleteActionsEvent {
    /// field 1, wire `delete_action_type`
    pub delete_action_type: Option<DELETEACTIONTYPE>,
    /// field 2, wire `is_a_group`
    pub is_agroup: Option<bool>,
    /// field 3, wire `messages_deleted`
    pub messages_deleted: Option<i64>,
    /// field 4, wire `thread_id`
    pub thread_id: Option<String>,
    /// field 6, wire `media_type`
    pub media_type: Option<MEDIATYPE>,
    /// field 7, wire `is_failed_message`
    pub is_failed_message: Option<bool>,
    /// field 8, wire `message_create_ts`
    pub message_create_ts: Option<i64>,
}