const WamForwardActionUserJourney = 6506 // channel: regular

type ForwardActionUserJourneyEvent struct {
	AppSessionId string `wam:"app_session_id"` // field 1
	ForwardActionUserJourneyAction FORWARDACTIONUSERJOURNEYACTION `wam:"forward_action_user_journey_action"` // field 2
	MessageIsFromMe bool `wam:"message_is_from_me"` // field 3
	MessageMediaType MEDIATYPE `wam:"message_media_type"` // field 4
	MessageType MESSAGETYPE `wam:"message_type"` // field 5
	UiSurface TSSURFACE `wam:"ui_surface"` // field 6
	UserJourneyChatType USERJOURNEYCHATTYPE `wam:"user_journey_chat_type"` // field 7
	UserJourneyFunnelId string `wam:"user_journey_funnel_id"` // field 8
	UnifiedSessionId string `wam:"unified_session_id"` // field 9
	ForwardUserJourneyFunnelId string `wam:"forward_user_journey_funnel_id"` // field 11
	UserJourneyEventMs int64 `wam:"user_journey_event_ms"` // field 12
}