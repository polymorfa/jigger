const WamPreCallUserJourneyChatThread = 5634 // channel: regular

type PreCallUserJourneyChatThreadEvent struct {
	AppSessionId string `wam:"app_session_id"` // field 1
	GroupSize int64 `wam:"group_size"` // field 2
	PreCallActionType PRECALLACTIONTYPE `wam:"pre_call_action_type"` // field 3
	SubSurface SUBSURFACE `wam:"sub_surface"` // field 4
	SurfaceSessionId string `wam:"surface_session_id"` // field 5
	UserJourneyFunnelId string `wam:"user_journey_funnel_id"` // field 6
	CallSizeType CALLSIZETYPE `wam:"call_size_type"` // field 7
	CallSize int64 `wam:"call_size"` // field 9
	UserJourneyEventMs int64 `wam:"user_journey_event_ms"` // field 10
	IsCommunityGroup bool `wam:"is_community_group"` // field 11
	IsVideoCall bool `wam:"is_video_call"` // field 12
	CallRandomId string `wam:"call_random_id"` // field 13
	GenaiBots string `wam:"genai_bots"` // field 14
}