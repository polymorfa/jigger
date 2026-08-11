pub const WAM_LIST_UPDATE_USER_JOURNEY: u32 = 5958;

#[derive(Debug, Default)]
pub struct ListUpdateUserJourneyEvent {
    /// field 1, wire `list_action`
    pub list_action: Option<LISTACTION>,
    /// field 2, wire `list_id`
    pub list_id: Option<i64>,
    /// field 3, wire `list_type`
    pub list_type: Option<LISTTYPE>,
    /// field 4, wire `list_update_user_journey_action`
    pub list_update_user_journey_action: Option<LISTUPDATEUSERJOURNEYACTION>,
    /// field 5, wire `predefined_id`
    pub predefined_id: Option<i64>,
    /// field 6, wire `update_entry_point`
    pub update_entry_point: Option<UPDATEENTRYPOINT>,
    /// field 7, wire `custom_list_count`
    pub custom_list_count: Option<i64>,
    /// field 8, wire `preset_list_count`
    pub preset_list_count: Option<i64>,
    /// field 9, wire `current_migration_bucket`
    pub current_migration_bucket: Option<i64>,
    /// field 10, wire `previous_migration_bucket`
    pub previous_migration_bucket: Option<i64>,
    /// field 11, wire `visible_list_ids`
    pub visible_list_ids: Option<String>,
}