pub const WAM_GROUP_MEMBER_TAG_UPDATE: u32 = 7010;

#[derive(Debug, Default)]
pub struct GroupMemberTagUpdateEvent {
    /// field 1, wire `group_id`
    pub group_id: Option<String>,
    /// field 2, wire `group_member_tag_update_action`
    pub group_member_tag_update_action: Option<GROUPMEMBERTAGUPDATEACTIONTYPE>,
    /// field 3, wire `has_member_tag_at_start`
    pub has_member_tag_at_start: Option<bool>,
    /// field 4, wire `member_tag_entry_point`
    pub member_tag_entry_point: Option<GROUPMEMBERTAGENTRYPOINTTYPE>,
    /// field 5, wire `ui_surface`
    pub ui_surface: Option<TSSURFACE>,
    /// field 6, wire `unified_session_id`
    pub unified_session_id: Option<String>,
    /// field 7, wire `user_journey_event_ms`
    pub user_journey_event_ms: Option<i64>,
}