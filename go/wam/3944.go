const WamWaFsGroupJoinRequestAction = 3944 // channel: regular

type WaFsGroupJoinRequestActionEvent struct {
	GroupJid string `wam:"group_jid"` // field 1
	GroupJoinRequestAction GROUPJOINREQUESTACTIONTYPE `wam:"group_join_request_action"` // field 2
	IsSuccessful bool `wam:"is_successful"` // field 3
	ServerResponseTime string `wam:"server_response_time"` // field 4
	GroupJoinRequestGroupsInCommon int64 `wam:"group_join_request_groups_in_common"` // field 5
	GroupJoinRequestEntrypoint GROUPJOINREQUESTENTRYPOINTTYPE `wam:"group_join_request_entrypoint"` // field 6
}