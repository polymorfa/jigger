pub const WAM_ADV_STORED_TIMESTAMP_EXPIRED: u32 = 3036;

#[derive(Debug, Default)]
pub struct AdvStoredTimestampExpiredEvent {
    /// field 1, wire `adv_expire_time_in_hours`
    pub adv_expire_time_in_hours: Option<i64>,
}