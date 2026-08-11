const WamReactionUserJourney = 5752 // channel: regular

type ReactionUserJourneyEvent struct {
	AppSessionId string `wam:"app_session_id"` // field 1
	MessageHasOwnReaction bool `wam:"message_has_own_reaction"` // field 2
	MessageHasReaction bool `wam:"message_has_reaction"` // field 3
	MessageType MESSAGETYPE `wam:"message_type"` // field 4
	ReactionUserJourneyAction REACTIONUSERJOURNEYACTION `wam:"reaction_user_journey_action"` // field 5
	ReactionUserJourneyEntryPoint REACTIONUSERJOURNEYENTRYPOINT `wam:"reaction_user_journey_entry_point"` // field 6
	UiSurface TSSURFACE `wam:"ui_surface"` // field 7
	UserJourneyChatType USERJOURNEYCHATTYPE `wam:"user_journey_chat_type"` // field 8
	UserJourneyFunnelId string `wam:"user_journey_funnel_id"` // field 9
	MessageMediaType MEDIATYPE `wam:"message_media_type"` // field 10
	UserJourneyEventMs int64 `wam:"user_journey_event_ms"` // field 11
	UnifiedSessionId string `wam:"unified_session_id"` // field 12
}