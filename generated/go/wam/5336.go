const WamGroupMemberAddingUserJourney = 5336 // channel: regular

type GroupMemberAddingUserJourneyEvent struct {
	AddSelectedContactsCount int64 `wam:"add_selected_contacts_count"` // field 1
	AppSessionId string `wam:"app_session_id"` // field 2
	FrequentlyContactedIndex int64 `wam:"frequently_contacted_index"` // field 3
	GroupMemberAddingActionType GROUPMEMBERADDINGACTIONTYPE `wam:"group_member_adding_action_type"` // field 4
	RecentlyContactedIndex int64 `wam:"recently_contacted_index"` // field 5
	SuggestedContactsCount int64 `wam:"suggested_contacts_count"` // field 6
	SuggestedContactsIndex int64 `wam:"suggested_contacts_index"` // field 7
	UiSurface TSSURFACE `wam:"ui_surface"` // field 8
	UserJourneyFunnelId string `wam:"user_journey_funnel_id"` // field 9
	PotentialTotalSuggestionCount int64 `wam:"potential_total_suggestion_count"` // field 10
	GroupCreationGroupId string `wam:"group_creation_group_id"` // field 11
	HasGroupName bool `wam:"has_group_name"` // field 12
	HasProfilePicture bool `wam:"has_profile_picture"` // field 13
	SelectedMemberCnt int64 `wam:"selected_member_cnt"` // field 14
	UserJourneyEventMs int64 `wam:"user_journey_event_ms"` // field 15
	GroupCreateEntryPoint GROUPCREATEENTRYPOINT `wam:"group_create_entry_point"` // field 16
	GroupServerErrorCode int64 `wam:"group_server_error_code"` // field 18
	GroupServerErrorCodeMsg string `wam:"group_server_error_code_msg"` // field 19
	BundleSendSource BUNDLESENDSOURCE `wam:"bundle_send_source"` // field 20
	GroupHistoryMessagesCount int64 `wam:"group_history_messages_count"` // field 21
	IsGroupHistoryToggledOn bool `wam:"is_group_history_toggled_on"` // field 22
	UnifiedSessionId string `wam:"unified_session_id"` // field 23
	GroupMemberAddingMemberType GROUPMEMBERADDINGMEMBERTYPE `wam:"group_member_adding_member_type"` // field 24
	GroupHistoryOutWindowPinsCount int64 `wam:"group_history_out_window_pins_count"` // field 25
	GroupHistoryPinsCount int64 `wam:"group_history_pins_count"` // field 26
	GroupHistoryUncountedMessagesCount int64 `wam:"group_history_uncounted_messages_count"` // field 27
	GroupAddMemberEntryPoint ADDMEMBERSENTRYPOINTTYPE `wam:"group_add_member_entry_point"` // field 28
	IsAdmin bool `wam:"is_admin"` // field 29
	IsTeeBotNoticeOnly bool `wam:"is_tee_bot_notice_only"` // field 30
}