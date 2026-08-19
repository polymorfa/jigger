pub const WAM_SYNCD_KEY_COUNT: u32 = 3978;

#[derive(Debug, Default)]
pub struct SyncdKeyCountEvent {
    /// field 1, wire `keys_used_in_snapshot_count`
    pub keys_used_in_snapshot_count: Option<i64>,
    /// field 2, wire `p80_muations_per_key`
    pub p80_muations_per_key: Option<i64>,
    /// field 3, wire `p95_muations_per_key`
    pub p95_muations_per_key: Option<i64>,
    /// field 4, wire `syncd_session_length_days`
    pub syncd_session_length_days: Option<i64>,
    /// field 5, wire `total_key_count`
    pub total_key_count: Option<i64>,
}