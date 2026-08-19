pub const WAM_MENTION_PICKER_ACTION: u32 = 7082;

#[derive(Debug, Default)]
pub struct MentionPickerActionEvent {
    /// field 1, wire `group_size`
    pub group_size: Option<i64>,
    /// field 2, wire `group_type_client`
    pub group_type_client: Option<GROUPTYPECLIENT>,
    /// field 3, wire `is_a_group`
    pub is_agroup: Option<bool>,
    /// field 4, wire `mention_type`
    pub mention_type: Option<MENTIONTYPE>,
    /// field 5, wire `thread_id`
    pub thread_id: Option<String>,
    /// field 6, wire `mention_group_id`
    pub mention_group_id: Option<String>,
}