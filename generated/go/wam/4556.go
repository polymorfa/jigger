const WamChannelAdmin = 4556 // channel: regular

type ChannelAdminEvent struct {
	AdminFlowActionSequenceNumber int64 `wam:"admin_flow_action_sequence_number"` // field 1
	AdminFlowType ADMINFLOWTYPE `wam:"admin_flow_type"` // field 2
	ChannelAdminAction CHANNELADMINACTION `wam:"channel_admin_action"` // field 3
	ChannelAdminSessionId int64 `wam:"channel_admin_session_id"` // field 4
	UnifiedSessionId string `wam:"unified_session_id"` // field 5
	UpdatesTabSessionId int64 `wam:"updates_tab_session_id"` // field 6
}