pub const WAM_GROUP_BULK_REMOVAL: u32 = 7222;

#[derive(Debug, Default)]
pub struct GroupBulkRemovalEvent {
    /// field 1, wire `app_session_id`
    pub app_session_id: Option<String>,
    /// field 2, wire `bulk_removal_group_id`
    pub bulk_removal_group_id: Option<String>,
    /// field 3, wire `group_bulk_removal_action`
    pub group_bulk_removal_action: Option<GROUPBULKREMOVALACTION>,
    /// field 4, wire `group_bulk_removal_entry_point`
    pub group_bulk_removal_entry_point: Option<GROUPBULKREMOVALENTRYPOINT>,
    /// field 5, wire `removed_members_count`
    pub removed_members_count: Option<i64>,
}