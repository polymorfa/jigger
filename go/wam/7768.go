const WamGroupMemberUpdates = 7768 // channel: regular

type GroupMemberUpdatesEvent struct {
	FetchedMessageCount int64 `wam:"fetched_message_count"` // field 1
	GroupMemberUpdatesActionName GROUPMEMBERUPDATESACTIONNAME `wam:"group_member_updates_action_name"` // field 2
	GroupMemberUpdatesCurrentScreen GROUPMEMBERUPDATESCURRENTSCREEN `wam:"group_member_updates_current_screen"` // field 3
	GroupMemberUpdatesSessionId string `wam:"group_member_updates_session_id"` // field 4
	FetchedMessageLatency int64 `wam:"fetched_message_latency"` // field 5
}