const WamPttMessageUserJourney = 5402 // channel: regular

type PttMessageUserJourneyEvent struct {
	AppSessionId string `wam:"app_session_id"` // field 1
	PttMessageUserJourneyAction PTTMESSAGEUSERJOURNEYACTION `wam:"ptt_message_user_journey_action"` // field 2
	PttMessageUserJourneyStage PTTMESSAGEUSERJOURNEYSTAGE `wam:"ptt_message_user_journey_stage"` // field 3
	UiSurface TSSURFACE `wam:"ui_surface"` // field 4
	UserJourneyChatType USERJOURNEYCHATTYPE `wam:"user_journey_chat_type"` // field 5
	UserJourneyFunnelId string `wam:"user_journey_funnel_id"` // field 6
	ChatbarInitialState CHATBARINITIALSTATE `wam:"chatbar_initial_state"` // field 7
	UserJourneyEventMs int64 `wam:"user_journey_event_ms"` // field 8
	PttMessageUserJourneyFailureReason PTTMESSAGEUSERJOURNEYFAILUREREASON `wam:"ptt_message_user_journey_failure_reason"` // field 9
	UnifiedSessionId string `wam:"unified_session_id"` // field 10
	PttMessageUserJourneyContainsQuotedItem bool `wam:"ptt_message_user_journey_contains_quoted_item"` // field 11
	IsMetaAiThread bool `wam:"is_meta_ai_thread"` // field 12
	PttWaveformResult PTTWAVEFORMRESULT `wam:"ptt_waveform_result"` // field 13
	PttIntensityAggregateValue string `wam:"ptt_intensity_aggregate_value"` // field 14
}