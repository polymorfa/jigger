pub const WAM_GROUP_MEMBER_UPDATES: u32 = 7768;

#[derive(Debug, Default)]
pub struct GroupMemberUpdatesEvent {
    /// field 1, wire `fetched_message_count`
    pub fetched_message_count: Option<i64>,
    /// field 2, wire `group_member_updates_action_name`
    pub group_member_updates_action_name: Option<GROUPMEMBERUPDATESACTIONNAME>,
    /// field 3, wire `group_member_updates_current_screen`
    pub group_member_updates_current_screen: Option<GROUPMEMBERUPDATESCURRENTSCREEN>,
    /// field 4, wire `group_member_updates_session_id`
    pub group_member_updates_session_id: Option<String>,
    /// field 5, wire `fetched_message_latency`
    pub fetched_message_latency: Option<i64>,
}