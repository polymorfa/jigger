pub const WAM_MD_APP_STATE_SYNC_DAILY: u32 = 2300;

#[derive(Debug, Default)]
pub struct MdAppStateSyncDailyEvent {
    /// field 1, wire `mutation_count`
    pub mutation_count: Option<i64>,
    /// field 4, wire `invalid_action_count`
    pub invalid_action_count: Option<i64>,
    /// field 5, wire `unsupported_action_count`
    pub unsupported_action_count: Option<i64>,
    /// field 7, wire `stored_mutation_count`
    pub stored_mutation_count: Option<i64>,
    /// field 8, wire `unset_action_count`
    pub unset_action_count: Option<i64>,
    /// field 9, wire `missing_key_count`
    pub missing_key_count: Option<i64>,
    /// field 10, wire `upload_conflict_count`
    pub upload_conflict_count: Option<i64>,
    /// field 11, wire `cross_index_conflict_count`
    pub cross_index_conflict_count: Option<i64>,
    /// field 12, wire `key_rotation_remove_count`
    pub key_rotation_remove_count: Option<i64>,
}