const WamLid11MigrationLifecycle = 6154 // channel: regular

type Lid11MigrationLifecycleEvent struct {
	ChatNotInMappingCount int64 `wam:"chat_not_in_mapping_count"` // field 1
	CompanionHasADifferentMappingCount int64 `wam:"companion_has_a_different_mapping_count"` // field 2
	FakeLidCount int64 `wam:"fake_lid_count"` // field 3
	IsSyncdLidSession bool `wam:"is_syncd_lid_session"` // field 4
	LatestMappingCount int64 `wam:"latest_mapping_count"` // field 5
	MappingCount int64 `wam:"mapping_count"` // field 6
	MigratedThreadCount int64 `wam:"migrated_thread_count"` // field 7
	MigrationStage MIGRATIONSTAGEENUM `wam:"migration_stage"` // field 8
	StageFailureReason STAGEFAILUREREASONENUM `wam:"stage_failure_reason"` // field 9
	CurrentLocalTimeSeconds int64 `wam:"current_local_time_seconds"` // field 10
	IsStageInOfflineResume bool `wam:"is_stage_in_offline_resume"` // field 11
	PeerMappingBytesLength int64 `wam:"peer_mapping_bytes_length"` // field 12
	PrimaryMigrationTimeSeconds int64 `wam:"primary_migration_time_seconds"` // field 13
	IsLocally1x1MigratedFromDb bool `wam:"is_locally1x1_migrated_from_db"` // field 14
	WebClientDidPairingStanzaIndicated1x1MigrationThisSession bool `wam:"web_client_did_pairing_stanza_indicated1x1_migration_this_session"` // field 15
}