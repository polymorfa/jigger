pub const WAM_WEBC_STORAGE_STAT: u32 = 1504;

#[derive(Debug, Default)]
pub struct WebcStorageStatEvent {
    /// field 1, wire `webc_storage_usage`
    pub webc_storage_usage: Option<i64>,
    /// field 2, wire `webc_storage_quota`
    pub webc_storage_quota: Option<i64>,
    /// field 3, wire `webc_age_of_storage`
    pub webc_age_of_storage: Option<i64>,
    /// field 4, wire `webc_packing_enabled`
    pub webc_packing_enabled: Option<bool>,
}