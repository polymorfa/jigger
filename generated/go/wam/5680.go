const WamPreCallUserJourneyCallsTab = 5680 // channel: regular

type PreCallUserJourneyCallsTabEvent struct {
	AppSessionId string `wam:"app_session_id"` // field 1
	CallsTabSource CALLSTABSOURCE `wam:"calls_tab_source"` // field 2
	PreCallActionType PRECALLACTIONTYPE `wam:"pre_call_action_type"` // field 3
	SubSurface SUBSURFACE `wam:"sub_surface"` // field 4
	SurfaceSessionId string `wam:"surface_session_id"` // field 5
	UserJourneyFunnelId string `wam:"user_journey_funnel_id"` // field 6
	CallSizeType CALLSIZETYPE `wam:"call_size_type"` // field 7
	UserJourneyEventMs int64 `wam:"user_journey_event_ms"` // field 9
	ItemPosition int64 `wam:"item_position"` // field 10
	GenaiBots string `wam:"genai_bots"` // field 11
	SelectedItemCount int64 `wam:"selected_item_count"` // field 12
}