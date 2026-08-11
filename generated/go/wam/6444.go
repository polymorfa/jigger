const WamQuotedMessageUserJourney = 6444 // channel: regular

type QuotedMessageUserJourneyEvent struct {
	AppSessionId string `wam:"app_session_id"` // field 1
	MessageMediaType MEDIATYPE `wam:"message_media_type"` // field 2
	MessageType MESSAGETYPE `wam:"message_type"` // field 3
	QuotedMediaType MEDIATYPE `wam:"quoted_media_type"` // field 4
	QuotedMessageTypeEnum MESSAGETYPE `wam:"quoted_message_type_enum"` // field 5
	QuotedMessageUserJourneyAction QUOTEDMESSAGEUSERJOURNEYACTION `wam:"quoted_message_user_journey_action"` // field 6
	QuotedMessageUserJourneyEntryPoint QUOTEDMESSAGEUSERJOURNEYENTRYPOINT `wam:"quoted_message_user_journey_entry_point"` // field 7
	UiSurface TSSURFACE `wam:"ui_surface"` // field 8
	UserJourneyChatType USERJOURNEYCHATTYPE `wam:"user_journey_chat_type"` // field 9
	UserJourneyFunnelId string `wam:"user_journey_funnel_id"` // field 10
	UnifiedSessionId string `wam:"unified_session_id"` // field 11
	ChatbarInitialState CHATBARINITIALSTATE `wam:"chatbar_initial_state"` // field 12
	QuotedMessageUserJourneyNavigateResult QUOTEDMESSAGEUSERJOURNEYNAVIGATERESULT `wam:"quoted_message_user_journey_navigate_result"` // field 13
}