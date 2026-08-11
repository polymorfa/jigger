const WamListUpdateUserJourney = 5958 // channel: regular

type ListUpdateUserJourneyEvent struct {
	ListAction LISTACTION `wam:"list_action"` // field 1
	ListId int64 `wam:"list_id"` // field 2
	ListType LISTTYPE `wam:"list_type"` // field 3
	ListUpdateUserJourneyAction LISTUPDATEUSERJOURNEYACTION `wam:"list_update_user_journey_action"` // field 4
	PredefinedId int64 `wam:"predefined_id"` // field 5
	UpdateEntryPoint UPDATEENTRYPOINT `wam:"update_entry_point"` // field 6
	CustomListCount int64 `wam:"custom_list_count"` // field 7
	PresetListCount int64 `wam:"preset_list_count"` // field 8
	CurrentMigrationBucket int64 `wam:"current_migration_bucket"` // field 9
	PreviousMigrationBucket int64 `wam:"previous_migration_bucket"` // field 10
	VisibleListIds string `wam:"visible_list_ids"` // field 11
}