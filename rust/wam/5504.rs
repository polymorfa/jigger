pub const WAM_WEFR_CLIENT_EXPOSURE: u32 = 5504;

#[derive(Debug, Default)]
pub struct WefrClientExposureEvent {
    /// field 1, wire `exposure_key`
    pub exposure_key: Option<String>,
    /// field 3, wire `sent_with_daily`
    pub sent_with_daily: Option<bool>,
    /// field 4, wire `user_lid`
    pub user_lid: Option<i64>,
    /// field 5, wire `device_exp_id`
    pub device_exp_id: Option<String>,
    /// field 6, wire `is_canonical_ent_present`
    pub is_canonical_ent_present: Option<bool>,
    /// field 7, wire `guest_id`
    pub guest_id: Option<String>,
    /// field 8, wire `canonical_ent_last_validation_ts_ms`
    pub canonical_ent_last_validation_ts_ms: Option<i64>,
    /// field 9, wire `from_metaconfig`
    pub from_metaconfig: Option<bool>,
}