pub const WAM_GROUP_CATCH_UP: u32 = 3058;

#[derive(Debug, Default)]
pub struct GroupCatchUpEvent {
    /// field 4, wire `mentions_count_pending_percentage`
    pub mentions_count_pending_percentage: Option<i64>,
}