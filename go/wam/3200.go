const WamStatusPrivacySettings = 3200 // channel: regular

type StatusPrivacySettingsEvent struct {
	Setting SETTING `wam:"setting"` // field 1
	PreviousSetting SETTING `wam:"previous_setting"` // field 2
	SelectedListSize int64 `wam:"selected_list_size"` // field 3
	StatusPrivacySurface STATUSPRIVACYSURFACE `wam:"status_privacy_surface"` // field 4
	StatusPrivacySettingsAction STATUSPRIVACYSETTINGSACTION `wam:"status_privacy_settings_action"` // field 5
	StatusPostingSessionId int64 `wam:"status_posting_session_id"` // field 6
	SelectedContactsSize int64 `wam:"selected_contacts_size"` // field 7
	SelectedGroupsSize int64 `wam:"selected_groups_size"` // field 8
	AllowResharing bool `wam:"allow_resharing"` // field 9
	AllowForwarding bool `wam:"allow_forwarding"` // field 10
	StatusPrivacySettingsView STATUSPRIVACYSETTINGSVIEW `wam:"status_privacy_settings_view"` // field 11
	ContactSuggestion CONTACTSUGGESTION `wam:"contact_suggestion"` // field 12
	SelectionPillPos int64 `wam:"selection_pill_pos"` // field 13
	ContactSuggestionsCount int64 `wam:"contact_suggestions_count"` // field 14
	LastSuccessfulRankingUpdate int64 `wam:"last_successful_ranking_update"` // field 15
	StatusPrivacyLists string `wam:"status_privacy_lists"` // field 16
}