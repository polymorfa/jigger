const WamChannelMembershipActionEvent = 5762 // channel: regular

type ChannelMembershipActionEventEvent struct {
	ActionResult CHANNELMEMBERSHIPACTIONRESULT `wam:"action_result"` // field 1
	Cid string `wam:"cid"` // field 2
	UnifiedSessionId string `wam:"unified_session_id"` // field 3
	UpdatesTabSessionId int64 `wam:"updates_tab_session_id"` // field 4
}