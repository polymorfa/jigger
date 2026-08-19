const WamGroupBulkRemoval = 7222 // channel: regular

type GroupBulkRemovalEvent struct {
	AppSessionId string `wam:"app_session_id"` // field 1
	BulkRemovalGroupId string `wam:"bulk_removal_group_id"` // field 2
	GroupBulkRemovalAction GROUPBULKREMOVALACTION `wam:"group_bulk_removal_action"` // field 3
	GroupBulkRemovalEntryPoint GROUPBULKREMOVALENTRYPOINT `wam:"group_bulk_removal_entry_point"` // field 4
	RemovedMembersCount int64 `wam:"removed_members_count"` // field 5
}