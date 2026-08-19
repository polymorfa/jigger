const WamCallInfoUserJourney = 6034 // channel: regular

type CallInfoUserJourneyEvent struct {
	AppSessionId string `wam:"app_session_id"` // field 1
	CallGroupSizeBucket CALLSIZEBUCKET `wam:"call_group_size_bucket"` // field 2
	CallSizeType CALLSIZETYPE `wam:"call_size_type"` // field 3
	CallType CALLTYPE `wam:"call_type"` // field 4
	PreCallActionType PRECALLACTIONTYPE `wam:"pre_call_action_type"` // field 5
	SurfaceSessionId string `wam:"surface_session_id"` // field 6
	UserJourneyEventMs int64 `wam:"user_journey_event_ms"` // field 7
	UserJourneyFunnelId string `wam:"user_journey_funnel_id"` // field 8
	NumParticipantsShown int64 `wam:"num_participants_shown"` // field 9
	ParticipantActionSource PARTICIPANTACTIONSOURCE `wam:"participant_action_source"` // field 10
	GenaiBots string `wam:"genai_bots"` // field 11
}