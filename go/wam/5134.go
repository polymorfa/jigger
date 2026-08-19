const WamMessagingUserJourney = 5134 // channel: regular

type MessagingUserJourneyEvent struct {
	AppSessionId string `wam:"app_session_id"` // field 1
	MessagingActionType ACTIONTYPE `wam:"messaging_action_type"` // field 2
	PinInChatExpirySecs int64 `wam:"pin_in_chat_expiry_secs"` // field 3
	ThreadType THREADTYPE `wam:"thread_type"` // field 4
	UiSurface TSSURFACE `wam:"ui_surface"` // field 5
	UserJourneyFunnelId string `wam:"user_journey_funnel_id"` // field 6
	UserRole USERROLETYPE `wam:"user_role"` // field 7
	IsSelfPin bool `wam:"is_self_pin"` // field 8
	MediaType MEDIATYPE `wam:"media_type"` // field 9
	UnifiedSessionId string `wam:"unified_session_id"` // field 10
}