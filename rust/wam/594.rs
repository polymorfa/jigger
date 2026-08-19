pub const WAM_GROUP_CREATE: u32 = 594;

#[derive(Debug, Default)]
pub struct GroupCreateEvent {
    /// field 1, wire `group_create_entry_point`
    pub group_create_entry_point: Option<GROUPCREATEENTRYPOINT>,
    /// field 2, wire `ephemerality_duration`
    pub ephemerality_duration: Option<i64>,
    /// field 3, wire `has_group_name`
    pub has_group_name: Option<bool>,
}