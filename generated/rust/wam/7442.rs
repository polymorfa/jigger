pub const WAM_CANONICAL_ENT_RECOVERY_CRITICAL_EVENT: u32 = 7442;

#[derive(Debug, Default)]
pub struct CanonicalEntRecoveryCriticalEventEvent {
    /// field 1, wire `canonical_ent_recovery_critical_event_metadata`
    pub canonical_ent_recovery_critical_event_metadata: Option<String>,
    /// field 2, wire `canonical_ent_recovery_critical_event_name`
    pub canonical_ent_recovery_critical_event_name: Option<String>,
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
    /// field 8, wire `trace_id_int`
    pub trace_id_int: Option<i64>,
}