const WamTextMessageUserJourney = 5404 // channel: regular

type TextMessageUserJourneyEvent struct {
	AppSessionId string `wam:"app_session_id"` // field 1
	TextMessageUserJourneyAction TEXTMESSAGEUSERJOURNEYACTION `wam:"text_message_user_journey_action"` // field 2
	UiSurface TSSURFACE `wam:"ui_surface"` // field 3
	UserJourneyChatType USERJOURNEYCHATTYPE `wam:"user_journey_chat_type"` // field 4
	UserJourneyFunnelId string `wam:"user_journey_funnel_id"` // field 5
	ChatbarInitialState CHATBARINITIALSTATE `wam:"chatbar_initial_state"` // field 6
	UserJourneyEventMs int64 `wam:"user_journey_event_ms"` // field 7
	UnifiedSessionId string `wam:"unified_session_id"` // field 8
	TextMessageUserJourneyContainsQuotedItem bool `wam:"text_message_user_journey_contains_quoted_item"` // field 9
	BotType BOTTYPE `wam:"bot_type"` // field 10
}