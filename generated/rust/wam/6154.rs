pub const WAM_LID11_MIGRATION_LIFECYCLE: u32 = 6154;

#[derive(Debug, Default)]
pub struct Lid11MigrationLifecycleEvent {
    /// field 1, wire `chat_not_in_mapping_count`
    pub chat_not_in_mapping_count: Option<i64>,
    /// field 2, wire `companion_has_a_different_mapping_count`
    pub companion_has_adifferent_mapping_count: Option<i64>,
    /// field 3, wire `fake_lid_count`
    pub fake_lid_count: Option<i64>,
    /// field 4, wire `is_syncd_lid_session`
    pub is_syncd_lid_session: Option<bool>,
    /// field 5, wire `latest_mapping_count`
    pub latest_mapping_count: Option<i64>,
    /// field 6, wire `mapping_count`
    pub mapping_count: Option<i64>,
    /// field 7, wire `migrated_thread_count`
    pub migrated_thread_count: Option<i64>,
    /// field 8, wire `migration_stage`
    pub migration_stage: Option<MIGRATIONSTAGEENUM>,
    /// field 9, wire `stage_failure_reason`
    pub stage_failure_reason: Option<STAGEFAILUREREASONENUM>,
    /// field 10, wire `current_local_time_seconds`
    pub current_local_time_seconds: Option<i64>,
    /// field 11, wire `is_stage_in_offline_resume`
    pub is_stage_in_offline_resume: Option<bool>,
    /// field 12, wire `peer_mapping_bytes_length`
    pub peer_mapping_bytes_length: Option<i64>,
    /// field 13, wire `primary_migration_time_seconds`
    pub primary_migration_time_seconds: Option<i64>,
    /// field 14, wire `is_locally1x1_migrated_from_db`
    pub is_locally1x1_migrated_from_db: Option<bool>,
    /// field 15, wire `web_client_did_pairing_stanza_indicated1x1_migration_this_session`
    pub web_client_did_pairing_stanza_indicated1x1_migration_this_session: Option<bool>,
}