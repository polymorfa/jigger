pub const WAM_EPHEMERAL_OUT_OF_SYNC_INFO: u32 = 3892;

#[derive(Debug, Default)]
pub struct EphemeralOutOfSyncInfoEvent {
    /// field 1, wire `group_size_bucket`
    pub group_size_bucket: Option<CLIENTGROUPSIZEBUCKET>,
    /// field 2, wire `incoming_message_ephemerality_duration`
    pub incoming_message_ephemerality_duration: Option<i64>,
    /// field 3, wire `is_a_group`
    pub is_agroup: Option<bool>,
    /// field 5, wire `is_new_thread_for_user`
    pub is_new_thread_for_user: Option<bool>,
    /// field 6, wire `other_default_mode_duration`
    pub other_default_mode_duration: Option<i64>,
    /// field 7, wire `thread_ephemerality_duration`
    pub thread_ephemerality_duration: Option<i64>,
    /// field 8, wire `thread_id`
    pub thread_id: Option<String>,
    /// field 9, wire `user_default_mode_duration`
    pub user_default_mode_duration: Option<i64>,
}