export const WamLid11MigrationLifecycle = 6154 as const

export interface Lid11MigrationLifecycleEvent {
  /** field 1, wire `chat_not_in_mapping_count` */
  chatNotInMappingCount?: number
  /** field 2, wire `companion_has_a_different_mapping_count` */
  companionHasADifferentMappingCount?: number
  /** field 3, wire `fake_lid_count` */
  fakeLidCount?: number
  /** field 4, wire `is_syncd_lid_session` */
  isSyncdLidSession?: boolean
  /** field 5, wire `latest_mapping_count` */
  latestMappingCount?: number
  /** field 6, wire `mapping_count` */
  mappingCount?: number
  /** field 7, wire `migrated_thread_count` */
  migratedThreadCount?: number
  /** field 8, wire `migration_stage` */
  migrationStage?: MIGRATIONSTAGEENUM
  /** field 9, wire `stage_failure_reason` */
  stageFailureReason?: STAGEFAILUREREASONENUM
  /** field 10, wire `current_local_time_seconds` */
  currentLocalTimeSeconds?: number
  /** field 11, wire `is_stage_in_offline_resume` */
  isStageInOfflineResume?: boolean
  /** field 12, wire `peer_mapping_bytes_length` */
  peerMappingBytesLength?: number
  /** field 13, wire `primary_migration_time_seconds` */
  primaryMigrationTimeSeconds?: number
  /** field 14, wire `is_locally1x1_migrated_from_db` */
  isLocally1x1MigratedFromDb?: boolean
  /** field 15, wire `web_client_did_pairing_stanza_indicated1x1_migration_this_session` */
  webClientDidPairingStanzaIndicated1x1MigrationThisSession?: boolean
}