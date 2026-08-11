const WamChannelDyi = 4726 // channel: regular

type ChannelDyiEvent struct {
	ChannelDyiEventType CHANNELDYIEVENTTYPE `wam:"channel_dyi_event_type"` // field 1
	UnifiedSessionId string `wam:"unified_session_id"` // field 2
	UpdatesTabSessionId int64 `wam:"updates_tab_session_id"` // field 3
}