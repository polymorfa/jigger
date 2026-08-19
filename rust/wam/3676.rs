pub const WAM_POLLS_ACTIONS: u32 = 3676;

#[derive(Debug, Default)]
pub struct PollsActionsEvent {
    /// field 1, wire `group_size_bucket`
    pub group_size_bucket: Option<CLIENTGROUPSIZEBUCKET>,
    /// field 2, wire `is_admin`
    pub is_admin: Option<bool>,
    /// field 3, wire `poll_action`
    pub poll_action: Option<POLLACTIONTYPE>,
    /// field 4, wire `poll_creation_ds`
    pub poll_creation_ds: Option<i64>,
    /// field 5, wire `poll_options_count`
    pub poll_options_count: Option<i64>,
    /// field 6, wire `is_a_group`
    pub is_agroup: Option<bool>,
    /// field 7, wire `type_of_group`
    pub type_of_group: Option<TYPEOFGROUPENUM>,
    /// field 8, wire `chat_type`
    pub chat_type: Option<MESSAGECHATTYPE>,
    /// field 9, wire `hide_voter_name`
    pub hide_voter_name: Option<bool>,
    /// field 10, wire `poll_duration_ms`
    pub poll_duration_ms: Option<i64>,
}