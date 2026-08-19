const WamUsernameCreationAction = 5224 // channel: regular

type UsernameCreationActionEvent struct {
	UsernameCreationActionName USERNAMECREATIONACTIONNAME `wam:"username_creation_action_name"` // field 2
	UsernameCreationCurrentScreen USERNAMECREATIONCURRENTSCREEN `wam:"username_creation_current_screen"` // field 3
	UsernameCreationEntrypoint USERNAMECREATIONENTRYPOINT `wam:"username_creation_entrypoint"` // field 4
	UsernameCreationUsernameSessionId string `wam:"username_creation_username_session_id"` // field 6
	UsernameCreationErrorCd int64 `wam:"username_creation_error_cd"` // field 7
	UsernameSource USERNAMESOURCE `wam:"username_source"` // field 8
	UsernameCreationFlowType USERNAMECREATIONFLOWTYPE `wam:"username_creation_flow_type"` // field 9
	LinkedAccountsFb int64 `wam:"linked_accounts_fb"` // field 10
	LinkedAccountsIg int64 `wam:"linked_accounts_ig"` // field 11
	UsernameLinkType USERNAMELINKTYPE `wam:"username_link_type"` // field 12
	UsernameCreationErrorMessage USERNAMECREATIONERRORMESSAGE `wam:"username_creation_error_message"` // field 13
	EligibleToLink bool `wam:"eligible_to_link"` // field 14
	UsernameCreationDeepLinkCampaign string `wam:"username_creation_deep_link_campaign"` // field 15
	UsernameCreationDeepLinkChannel string `wam:"username_creation_deep_link_channel"` // field 16
	UserJourneyEventMs int64 `wam:"user_journey_event_ms"` // field 17
	UsernameLinkOriginSurface USERNAMELINKORIGINSURFACE `wam:"username_link_origin_surface"` // field 18
}