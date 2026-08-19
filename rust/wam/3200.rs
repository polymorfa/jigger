pub const WAM_STATUS_PRIVACY_SETTINGS: u32 = 3200;

#[derive(Debug, Default)]
pub struct StatusPrivacySettingsEvent {
    /// field 1, wire `setting`
    pub setting: Option<SETTING>,
    /// field 2, wire `previous_setting`
    pub previous_setting: Option<SETTING>,
    /// field 3, wire `selected_list_size`
    pub selected_list_size: Option<i64>,
    /// field 4, wire `status_privacy_surface`
    pub status_privacy_surface: Option<STATUSPRIVACYSURFACE>,
    /// field 5, wire `status_privacy_settings_action`
    pub status_privacy_settings_action: Option<STATUSPRIVACYSETTINGSACTION>,
    /// field 6, wire `status_posting_session_id`
    pub status_posting_session_id: Option<i64>,
    /// field 7, wire `selected_contacts_size`
    pub selected_contacts_size: Option<i64>,
    /// field 8, wire `selected_groups_size`
    pub selected_groups_size: Option<i64>,
    /// field 9, wire `allow_resharing`
    pub allow_resharing: Option<bool>,
    /// field 10, wire `allow_forwarding`
    pub allow_forwarding: Option<bool>,
    /// field 11, wire `status_privacy_settings_view`
    pub status_privacy_settings_view: Option<STATUSPRIVACYSETTINGSVIEW>,
    /// field 12, wire `contact_suggestion`
    pub contact_suggestion: Option<CONTACTSUGGESTION>,
    /// field 13, wire `selection_pill_pos`
    pub selection_pill_pos: Option<i64>,
    /// field 14, wire `contact_suggestions_count`
    pub contact_suggestions_count: Option<i64>,
    /// field 15, wire `last_successful_ranking_update`
    pub last_successful_ranking_update: Option<i64>,
    /// field 16, wire `status_privacy_lists`
    pub status_privacy_lists: Option<String>,
}