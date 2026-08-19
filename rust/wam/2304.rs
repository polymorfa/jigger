pub const WAM_MD_FATAL_ERROR: u32 = 2304;

#[derive(Debug, Default)]
pub struct MdFatalErrorEvent {
    /// field 1, wire `md_fatal_error_code`
    pub md_fatal_error_code: Option<MDSYNCDFATALERRORCODE>,
    /// field 2, wire `collection`
    pub collection: Option<COLLECTION>,
    /// field 3, wire `is_bootstrap`
    pub is_bootstrap: Option<bool>,
    /// field 5, wire `patch_version`
    pub patch_version: Option<i64>,
    /// field 6, wire `time_since_pairing_ms`
    pub time_since_pairing_ms: Option<i64>,
    /// field 7, wire `time_since_refresh_ms`
    pub time_since_refresh_ms: Option<i64>,
    /// field 8, wire `time_since_tab_takeover_ms`
    pub time_since_tab_takeover_ms: Option<i64>,
    /// field 9, wire `patch_snapshot_mutation_count`
    pub patch_snapshot_mutation_count: Option<i64>,
    /// field 10, wire `source_type`
    pub source_type: Option<MDSYNCDFATALERRORSOURCE>,
    /// field 11, wire `days_since_last_periodic_sync`
    pub days_since_last_periodic_sync: Option<i64>,
    /// field 12, wire `hours_since_first_finite_failure`
    pub hours_since_first_finite_failure: Option<i64>,
    /// field 13, wire `mailbox_age_days`
    pub mailbox_age_days: Option<i64>,
    /// field 14, wire `current_primary_app_version`
    pub current_primary_app_version: Option<String>,
    /// field 15, wire `session_start_primary_app_version`
    pub session_start_primary_app_version: Option<String>,
    /// field 16, wire `is_fatal`
    pub is_fatal: Option<bool>,
    /// field 17, wire `is_web_lthash_consistent`
    pub is_web_lthash_consistent: Option<bool>,
    /// field 18, wire `mac_fatal_collection_name_mismatch`
    pub mac_fatal_collection_name_mismatch: Option<bool>,
    /// field 19, wire `mac_fatal_current_lthash_mismatch`
    pub mac_fatal_current_lthash_mismatch: Option<bool>,
    /// field 20, wire `mac_fatal_first_two_bytes_from_a_hash_of_snapshot_mac_key_mismatch`
    pub mac_fatal_first_two_bytes_from_ahash_of_snapshot_mac_key_mismatch: Option<bool>,
    /// field 21, wire `mac_fatal_new_lthash_mismatch`
    pub mac_fatal_new_lthash_mismatch: Option<bool>,
    /// field 22, wire `mac_fatal_patch_version_mismatch`
    pub mac_fatal_patch_version_mismatch: Option<bool>,
    /// field 23, wire `is_patch_sender_primary`
    pub is_patch_sender_primary: Option<bool>,
    /// field 24, wire `is_previous_patch_an_incoming_patch`
    pub is_previous_patch_an_incoming_patch: Option<bool>,
    /// field 25, wire `is_previous_patch_sender_primary`
    pub is_previous_patch_sender_primary: Option<bool>,
    /// field 26, wire `mac_fatal_did_previous_patch_fail_post_save_validation`
    pub mac_fatal_did_previous_patch_fail_post_save_validation: Option<bool>,
    /// field 27, wire `mac_fatal_new_lthash_subtract_mismatch`
    pub mac_fatal_new_lthash_subtract_mismatch: Option<bool>,
    /// field 28, wire `mac_fatal_number_add_mismatch`
    pub mac_fatal_number_add_mismatch: Option<bool>,
    /// field 29, wire `mac_fatal_number_has_override_mutation`
    pub mac_fatal_number_has_override_mutation: Option<bool>,
    /// field 30, wire `mac_fatal_number_num_add_mutation`
    pub mac_fatal_number_num_add_mutation: Option<i64>,
    /// field 31, wire `mac_fatal_number_num_remove_mutation`
    pub mac_fatal_number_num_remove_mutation: Option<i64>,
    /// field 32, wire `mac_fatal_number_override_mismatch`
    pub mac_fatal_number_override_mismatch: Option<bool>,
    /// field 33, wire `mac_fatal_number_remove_mismatch`
    pub mac_fatal_number_remove_mismatch: Option<bool>,
    /// field 34, wire `mac_fatal_previous_patch_new_lthash_to_current_patch_current_lthash`
    pub mac_fatal_previous_patch_new_lthash_to_current_patch_current_lthash: Option<bool>,
    /// field 35, wire `mac_fatal_sender_current_lthash_to_local_calculated_current_lthash_mismatch`
    pub mac_fatal_sender_current_lthash_to_local_calculated_current_lthash_mismatch: Option<bool>,
    /// field 36, wire `mac_fatal_did_use_mac_fetch_fallback`
    pub mac_fatal_did_use_mac_fetch_fallback: Option<bool>,
    /// field 37, wire `mac_fatal_has_missing_remove`
    pub mac_fatal_has_missing_remove: Option<bool>,
    /// field 38, wire `did_bootstrap_from_snapshot`
    pub did_bootstrap_from_snapshot: Option<bool>,
    /// field 39, wire `is_sender_index_same_as_previous_sender_index`
    pub is_sender_index_same_as_previous_sender_index: Option<bool>,
    /// field 40, wire `is_there_another_syncd_companion`
    pub is_there_another_syncd_companion: Option<bool>,
    /// field 41, wire `app_session_id`
    pub app_session_id: Option<String>,
    /// field 42, wire `companion_session_ids`
    pub companion_session_ids: Option<String>,
    /// field 43, wire `md_companion_device_account_type`
    pub md_companion_device_account_type: Option<MDCOMPANIONDEVICEACCOUNTTYPE>,
    /// field 44, wire `md_reg_attempt_id`
    pub md_reg_attempt_id: Option<String>,
    /// field 45, wire `seq_number`
    pub seq_number: Option<i64>,
    /// field 46, wire `app_context`
    pub app_context: Option<String>,
    /// field 47, wire `app_context_bitfield`
    pub app_context_bitfield: Option<i64>,
    /// field 48, wire `is_pure_syncd_session`
    pub is_pure_syncd_session: Option<ISPURESYNCDSESSIONENUM>,
    /// field 49, wire `lid_migration_stage`
    pub lid_migration_stage: Option<LIDMIGRATIONSTAGEENUM>,
    /// field 50, wire `recovery_request_duration_ms`
    pub recovery_request_duration_ms: Option<i64>,
    /// field 51, wire `recovery_status`
    pub recovery_status: Option<RECOVERYSTATUSENUM>,
}