const WamCallLinkActionEvent = 3852 // channel: regular

type CallLinkActionEventEvent struct {
	CallLinkAction CALLLINKACTION `wam:"call_link_action"` // field 1
	CallLinkActionEntryPoint CALLLINKACTIONENTRYPOINT `wam:"call_link_action_entry_point"` // field 2
	CallLinkMedia CALLLINKMEDIA `wam:"call_link_media"` // field 3
	CallLinkSharedApp string `wam:"call_link_shared_app"` // field 4
	AppSessionId string `wam:"app_session_id"` // field 5
	CallLinkShareChatType CALLLINKSHARECHATTYPE `wam:"call_link_share_chat_type"` // field 6
	CallLinkType CALLLINKTYPE `wam:"call_link_type"` // field 7
	UserJourneyEventMs int64 `wam:"user_journey_event_ms"` // field 8
	UserJourneyFunnelId string `wam:"user_journey_funnel_id"` // field 9
	IsWaitingRoomEnabled bool `wam:"is_waiting_room_enabled"` // field 10
}