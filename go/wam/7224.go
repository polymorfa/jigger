const WamAiThreadsUserJourney = 7224 // channel: regular

type AiThreadsUserJourneyEvent struct {
	AiSessionId string `wam:"ai_session_id"` // field 1
	AppSessionId string `wam:"app_session_id"` // field 2
	ConversationThreadCreationTs string `wam:"conversation_thread_creation_ts"` // field 3
	ConversationThreadId string `wam:"conversation_thread_id"` // field 4
	EventTsMs int64 `wam:"event_ts_ms"` // field 5
	IsIncognitoMode bool `wam:"is_incognito_mode"` // field 6
	RawBotEntryPoint string `wam:"raw_bot_entry_point"` // field 7
	ThreadActionType THREADACTIONTYPES `wam:"thread_action_type"` // field 8
	MetaAiActionEntryPoint METAAIACTIONENTRYPOINT `wam:"meta_ai_action_entry_point"` // field 9
	IsCanonicalThread bool `wam:"is_canonical_thread"` // field 10
}