pub const WAM_LID_MIGRATION_DAILY: u32 = 5842;

#[derive(Debug, Default)]
pub struct LidMigrationDailyEvent {
    /// field 1, wire `completed_migrations`
    pub completed_migrations: Option<String>,
    /// field 2, wire `number_of_pnh_ctwa_threads_known_mapping`
    pub number_of_pnh_ctwa_threads_known_mapping: Option<i64>,
    /// field 3, wire `number_of_pnh_ctwa_threads_missing_mapping`
    pub number_of_pnh_ctwa_threads_missing_mapping: Option<i64>,
    /// field 4, wire `number_of_split_threads`
    pub number_of_split_threads: Option<i64>,
    /// field 5, wire `number_of_pn_chats_without_mapping`
    pub number_of_pn_chats_without_mapping: Option<i64>,
    /// field 6, wire `number_of_user_chats_without_account_lid`
    pub number_of_user_chats_without_account_lid: Option<i64>,
    /// field 7, wire `lid_migration_source`
    pub lid_migration_source: Option<LIDMIGRATIONSOURCETYPE>,
    /// field 8, wire `number_of_chats_with_client_assigned_lid`
    pub number_of_chats_with_client_assigned_lid: Option<i64>,
    /// field 9, wire `number_of_deprecated_chats`
    pub number_of_deprecated_chats: Option<i64>,
    /// field 10, wire `number_of_lid_broadcast_lists`
    pub number_of_lid_broadcast_lists: Option<i64>,
    /// field 11, wire `number_of_lid_groups`
    pub number_of_lid_groups: Option<i64>,
    /// field 12, wire `number_of_pn_broadcast_lists`
    pub number_of_pn_broadcast_lists: Option<i64>,
    /// field 13, wire `number_of_pn_groups`
    pub number_of_pn_groups: Option<i64>,
    /// field 14, wire `number_of_regular_pn_chats`
    pub number_of_regular_pn_chats: Option<i64>,
    /// field 15, wire `number_of_cag_groups`
    pub number_of_cag_groups: Option<i64>,
    /// field 16, wire `number_of_cag_lid_groups`
    pub number_of_cag_lid_groups: Option<i64>,
    /// field 17, wire `number_of_lid_only_groups`
    pub number_of_lid_only_groups: Option<i64>,
    /// field 18, wire `number_of_mixed_pn_lid_groups`
    pub number_of_mixed_pn_lid_groups: Option<i64>,
    /// field 19, wire `number_of_pn_only_groups`
    pub number_of_pn_only_groups: Option<i64>,
    /// field 20, wire `number_of_pn_only_groups_not_member`
    pub number_of_pn_only_groups_not_member: Option<i64>,
    /// field 21, wire `number_of_pn_only_groups_not_member_all_mapped`
    pub number_of_pn_only_groups_not_member_all_mapped: Option<i64>,
    /// field 22, wire `number_of_pn_only_groups_not_member_unmapped_contacts`
    pub number_of_pn_only_groups_not_member_unmapped_contacts: Option<i64>,
    /// field 23, wire `number_of_pn_only_groups_not_member_unmapped_out_contacts`
    pub number_of_pn_only_groups_not_member_unmapped_out_contacts: Option<i64>,
}