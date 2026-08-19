pub const WAM_CANONICAL_ENT_RECOVERY_COMPANION: u32 = 7434;

#[derive(Debug, Default)]
pub struct CanonicalEntRecoveryCompanionEvent {
    /// field 1, wire `canonical_ent_event_companion_marker`
    pub canonical_ent_event_companion_marker: Option<CANONICALENTEVENTMARKER>,
    /// field 2, wire `canonical_ent_recovery_companion_event`
    pub canonical_ent_recovery_companion_event: Option<CANONICALENTRECOVERYCOMPANIONEVENT>,
    /// field 3, wire `canonical_ent_registration_trace_id`
    pub canonical_ent_registration_trace_id: Option<String>,
    /// field 4, wire `canonical_ent_request_id`
    pub canonical_ent_request_id: Option<String>,
    /// field 5, wire `device_id`
    pub device_id: Option<String>,
    /// field 6, wire `family_device_id`
    pub family_device_id: Option<String>,
    /// field 7, wire `canonical_ent_sequence_number_since_last_registration`
    pub canonical_ent_sequence_number_since_last_registration: Option<i64>,
    /// field 8, wire `canonical_ent_feature_name`
    pub canonical_ent_feature_name: Option<String>,
    /// field 9, wire `canonical_ent_recovery_timeout_seconds`
    pub canonical_ent_recovery_timeout_seconds: Option<i64>,
    /// field 10, wire `canonical_ent_storage_source`
    pub canonical_ent_storage_source: Option<String>,
    /// field 11, wire `trace_id_int`
    pub trace_id_int: Option<i64>,
    /// field 12, wire `canonical_ent_recovery_event_metadata`
    pub canonical_ent_recovery_event_metadata: Option<String>,
}