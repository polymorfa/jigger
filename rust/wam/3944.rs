pub const WAM_WA_FS_GROUP_JOIN_REQUEST_ACTION: u32 = 3944;

#[derive(Debug, Default)]
pub struct WaFsGroupJoinRequestActionEvent {
    /// field 1, wire `group_jid`
    pub group_jid: Option<String>,
    /// field 2, wire `group_join_request_action`
    pub group_join_request_action: Option<GROUPJOINREQUESTACTIONTYPE>,
    /// field 3, wire `is_successful`
    pub is_successful: Option<bool>,
    /// field 4, wire `server_response_time`
    pub server_response_time: Option<String>,
    /// field 5, wire `group_join_request_groups_in_common`
    pub group_join_request_groups_in_common: Option<i64>,
    /// field 6, wire `group_join_request_entrypoint`
    pub group_join_request_entrypoint: Option<GROUPJOINREQUESTENTRYPOINTTYPE>,
}