pub const WAM_USER_ACTIVITY: u32 = 1384;

#[derive(Debug, Default)]
pub struct UserActivityEvent {
    /// field 1, wire `user_activity_session_id`
    pub user_activity_session_id: Option<String>,
    /// field 2, wire `user_activity_start_time`
    pub user_activity_start_time: Option<i64>,
    /// field 3, wire `user_activity_bitmap_low`
    pub user_activity_bitmap_low: Option<i64>,
    /// field 4, wire `user_activity_bitmap_high`
    pub user_activity_bitmap_high: Option<i64>,
    /// field 5, wire `user_activity_bitmap_len`
    pub user_activity_bitmap_len: Option<i64>,
    /// field 6, wire `user_activity_session_seq`
    pub user_activity_session_seq: Option<i64>,
    /// field 7, wire `user_activity_session_cum`
    pub user_activity_session_cum: Option<i64>,
}