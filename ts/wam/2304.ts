export const WamMdFatalError = 2304 as const

export interface MdFatalErrorEvent {
  /** field 1, wire `md_fatal_error_code` */
  mdFatalErrorCode?: MDSYNCDFATALERRORCODE
  /** field 2, wire `collection` */
  collection?: COLLECTION
  /** field 3, wire `is_bootstrap` */
  isBootstrap?: boolean
  /** field 5, wire `patch_version` */
  patchVersion?: number
  /** field 6, wire `time_since_pairing_ms` */
  timeSincePairingMs?: number
  /** field 7, wire `time_since_refresh_ms` */
  timeSinceRefreshMs?: number
  /** field 8, wire `time_since_tab_takeover_ms` */
  timeSinceTabTakeoverMs?: number
  /** field 9, wire `patch_snapshot_mutation_count` */
  patchSnapshotMutationCount?: number
  /** field 10, wire `source_type` */
  sourceType?: MDSYNCDFATALERRORSOURCE
  /** field 11, wire `days_since_last_periodic_sync` */
  daysSinceLastPeriodicSync?: number
  /** field 12, wire `hours_since_first_finite_failure` */
  hoursSinceFirstFiniteFailure?: number
  /** field 13, wire `mailbox_age_days` */
  mailboxAgeDays?: number
  /** field 14, wire `current_primary_app_version` */
  currentPrimaryAppVersion?: string
  /** field 15, wire `session_start_primary_app_version` */
  sessionStartPrimaryAppVersion?: string
  /** field 16, wire `is_fatal` */
  isFatal?: boolean
  /** field 17, wire `is_web_lthash_consistent` */
  isWebLthashConsistent?: boolean
  /** field 18, wire `mac_fatal_collection_name_mismatch` */
  macFatalCollectionNameMismatch?: boolean
  /** field 19, wire `mac_fatal_current_lthash_mismatch` */
  macFatalCurrentLthashMismatch?: boolean
  /** field 20, wire `mac_fatal_first_two_bytes_from_a_hash_of_snapshot_mac_key_mismatch` */
  macFatalFirstTwoBytesFromAHashOfSnapshotMacKeyMismatch?: boolean
  /** field 21, wire `mac_fatal_new_lthash_mismatch` */
  macFatalNewLthashMismatch?: boolean
  /** field 22, wire `mac_fatal_patch_version_mismatch` */
  macFatalPatchVersionMismatch?: boolean
  /** field 23, wire `is_patch_sender_primary` */
  isPatchSenderPrimary?: boolean
  /** field 24, wire `is_previous_patch_an_incoming_patch` */
  isPreviousPatchAnIncomingPatch?: boolean
  /** field 25, wire `is_previous_patch_sender_primary` */
  isPreviousPatchSenderPrimary?: boolean
  /** field 26, wire `mac_fatal_did_previous_patch_fail_post_save_validation` */
  macFatalDidPreviousPatchFailPostSaveValidation?: boolean
  /** field 27, wire `mac_fatal_new_lthash_subtract_mismatch` */
  macFatalNewLthashSubtractMismatch?: boolean
  /** field 28, wire `mac_fatal_number_add_mismatch` */
  macFatalNumberAddMismatch?: boolean
  /** field 29, wire `mac_fatal_number_has_override_mutation` */
  macFatalNumberHasOverrideMutation?: boolean
  /** field 30, wire `mac_fatal_number_num_add_mutation` */
  macFatalNumberNumAddMutation?: number
  /** field 31, wire `mac_fatal_number_num_remove_mutation` */
  macFatalNumberNumRemoveMutation?: number
  /** field 32, wire `mac_fatal_number_override_mismatch` */
  macFatalNumberOverrideMismatch?: boolean
  /** field 33, wire `mac_fatal_number_remove_mismatch` */
  macFatalNumberRemoveMismatch?: boolean
  /** field 34, wire `mac_fatal_previous_patch_new_lthash_to_current_patch_current_lthash` */
  macFatalPreviousPatchNewLthashToCurrentPatchCurrentLthash?: boolean
  /** field 35, wire `mac_fatal_sender_current_lthash_to_local_calculated_current_lthash_mismatch` */
  macFatalSenderCurrentLthashToLocalCalculatedCurrentLthashMismatch?: boolean
  /** field 36, wire `mac_fatal_did_use_mac_fetch_fallback` */
  macFatalDidUseMacFetchFallback?: boolean
  /** field 37, wire `mac_fatal_has_missing_remove` */
  macFatalHasMissingRemove?: boolean
  /** field 38, wire `did_bootstrap_from_snapshot` */
  didBootstrapFromSnapshot?: boolean
  /** field 39, wire `is_sender_index_same_as_previous_sender_index` */
  isSenderIndexSameAsPreviousSenderIndex?: boolean
  /** field 40, wire `is_there_another_syncd_companion` */
  isThereAnotherSyncdCompanion?: boolean
  /** field 41, wire `app_session_id` */
  appSessionId?: string
  /** field 42, wire `companion_session_ids` */
  companionSessionIds?: string
  /** field 43, wire `md_companion_device_account_type` */
  mdCompanionDeviceAccountType?: MDCOMPANIONDEVICEACCOUNTTYPE
  /** field 44, wire `md_reg_attempt_id` */
  mdRegAttemptId?: string
  /** field 45, wire `seq_number` */
  seqNumber?: number
  /** field 46, wire `app_context` */
  appContext?: string
  /** field 47, wire `app_context_bitfield` */
  appContextBitfield?: number
  /** field 48, wire `is_pure_syncd_session` */
  isPureSyncdSession?: ISPURESYNCDSESSIONENUM
  /** field 49, wire `lid_migration_stage` */
  lidMigrationStage?: LIDMIGRATIONSTAGEENUM
  /** field 50, wire `recovery_request_duration_ms` */
  recoveryRequestDurationMs?: number
  /** field 51, wire `recovery_status` */
  recoveryStatus?: RECOVERYSTATUSENUM
}