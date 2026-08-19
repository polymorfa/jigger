pub const WAM_SNACKBAR_DELETE_UNDO: u32 = 3628;

#[derive(Debug, Default)]
pub struct SnackbarDeleteUndoEvent {
    /// field 1, wire `is_a_group`
    pub is_agroup: Option<bool>,
    /// field 2, wire `messages_undeleted`
    pub messages_undeleted: Option<i64>,
    /// field 3, wire `snackbar_action_type`
    pub snackbar_action_type: Option<SNACKBARACTIONTYPE>,
    /// field 4, wire `thread_id`
    pub thread_id: Option<String>,
    /// field 6, wire `media_type`
    pub media_type: Option<MEDIATYPE>,
}