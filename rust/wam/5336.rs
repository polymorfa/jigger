pub const WAM_GROUP_MEMBER_ADDING_USER_JOURNEY: u32 = 5336;

#[derive(Debug, Default)]
pub struct GroupMemberAddingUserJourneyEvent {
    /// field 1, wire `add_selected_contacts_count`
    pub add_selected_contacts_count: Option<i64>,
    /// field 2, wire `app_session_id`
    pub app_session_id: Option<String>,
    /// field 3, wire `frequently_contacted_index`
    pub frequently_contacted_index: Option<i64>,
    /// field 4, wire `group_member_adding_action_type`
    pub group_member_adding_action_type: Option<GROUPMEMBERADDINGACTIONTYPE>,
    /// field 5, wire `recently_contacted_index`
    pub recently_contacted_index: Option<i64>,
    /// field 6, wire `suggested_contacts_count`
    pub suggested_contacts_count: Option<i64>,
    /// field 7, wire `suggested_contacts_index`
    pub suggested_contacts_index: Option<i64>,
    /// field 8, wire `ui_surface`
    pub ui_surface: Option<TSSURFACE>,
    /// field 9, wire `user_journey_funnel_id`
    pub user_journey_funnel_id: Option<String>,
    /// field 10, wire `potential_total_suggestion_count`
    pub potential_total_suggestion_count: Option<i64>,
    /// field 11, wire `group_creation_group_id`
    pub group_creation_group_id: Option<String>,
    /// field 12, wire `has_group_name`
    pub has_group_name: Option<bool>,
    /// field 13, wire `has_profile_picture`
    pub has_profile_picture: Option<bool>,
    /// field 14, wire `selected_member_cnt`
    pub selected_member_cnt: Option<i64>,
    /// field 15, wire `user_journey_event_ms`
    pub user_journey_event_ms: Option<i64>,
    /// field 16, wire `group_create_entry_point`
    pub group_create_entry_point: Option<GROUPCREATEENTRYPOINT>,
    /// field 18, wire `group_server_error_code`
    pub group_server_error_code: Option<i64>,
    /// field 19, wire `group_server_error_code_msg`
    pub group_server_error_code_msg: Option<String>,
    /// field 20, wire `bundle_send_source`
    pub bundle_send_source: Option<BUNDLESENDSOURCE>,
    /// field 21, wire `group_history_messages_count`
    pub group_history_messages_count: Option<i64>,
    /// field 22, wire `is_group_history_toggled_on`
    pub is_group_history_toggled_on: Option<bool>,
    /// field 23, wire `unified_session_id`
    pub unified_session_id: Option<String>,
    /// field 24, wire `group_member_adding_member_type`
    pub group_member_adding_member_type: Option<GROUPMEMBERADDINGMEMBERTYPE>,
    /// field 25, wire `group_history_out_window_pins_count`
    pub group_history_out_window_pins_count: Option<i64>,
    /// field 26, wire `group_history_pins_count`
    pub group_history_pins_count: Option<i64>,
    /// field 27, wire `group_history_uncounted_messages_count`
    pub group_history_uncounted_messages_count: Option<i64>,
    /// field 28, wire `group_add_member_entry_point`
    pub group_add_member_entry_point: Option<ADDMEMBERSENTRYPOINTTYPE>,
    /// field 29, wire `is_admin`
    pub is_admin: Option<bool>,
    /// field 30, wire `is_tee_bot_notice_only`
    pub is_tee_bot_notice_only: Option<bool>,
}