const WamMdAppStateSyncDaily = 2300 // channel: regular

type MdAppStateSyncDailyEvent struct {
	MutationCount int64 `wam:"mutation_count"` // field 1
	InvalidActionCount int64 `wam:"invalid_action_count"` // field 4
	UnsupportedActionCount int64 `wam:"unsupported_action_count"` // field 5
	StoredMutationCount int64 `wam:"stored_mutation_count"` // field 7
	UnsetActionCount int64 `wam:"unset_action_count"` // field 8
	MissingKeyCount int64 `wam:"missing_key_count"` // field 9
	UploadConflictCount int64 `wam:"upload_conflict_count"` // field 10
	CrossIndexConflictCount int64 `wam:"cross_index_conflict_count"` // field 11
	KeyRotationRemoveCount int64 `wam:"key_rotation_remove_count"` // field 12
}