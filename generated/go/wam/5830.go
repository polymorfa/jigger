const WamListUpdate = 5830 // channel: regular

type ListUpdateEvent struct {
	ListAction LISTACTION `wam:"list_action"` // field 1
	ListId int64 `wam:"list_id"` // field 2
	ListType LISTTYPE `wam:"list_type"` // field 3
	UpdateEntryPoint UPDATEENTRYPOINT `wam:"update_entry_point"` // field 8
	GroupsAdded int64 `wam:"groups_added"` // field 9
	GroupsAfterUpdate int64 `wam:"groups_after_update"` // field 10
	UsersAdded int64 `wam:"users_added"` // field 11
	UsersAfterUpdate int64 `wam:"users_after_update"` // field 12
	PredefinedId int64 `wam:"predefined_id"` // field 13
}