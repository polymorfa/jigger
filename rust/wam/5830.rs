pub const WAM_LIST_UPDATE: u32 = 5830;

#[derive(Debug, Default)]
pub struct ListUpdateEvent {
    /// field 1, wire `list_action`
    pub list_action: Option<LISTACTION>,
    /// field 2, wire `list_id`
    pub list_id: Option<i64>,
    /// field 3, wire `list_type`
    pub list_type: Option<LISTTYPE>,
    /// field 8, wire `update_entry_point`
    pub update_entry_point: Option<UPDATEENTRYPOINT>,
    /// field 9, wire `groups_added`
    pub groups_added: Option<i64>,
    /// field 10, wire `groups_after_update`
    pub groups_after_update: Option<i64>,
    /// field 11, wire `users_added`
    pub users_added: Option<i64>,
    /// field 12, wire `users_after_update`
    pub users_after_update: Option<i64>,
    /// field 13, wire `predefined_id`
    pub predefined_id: Option<i64>,
}