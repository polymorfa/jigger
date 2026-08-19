pub const WAM_WAM_DROPPED_EVENT: u32 = 4358;

#[derive(Debug, Default)]
pub struct WamDroppedEventEvent {
    /// field 1, wire `dropped_event_code`
    pub dropped_event_code: Option<i64>,
    /// field 2, wire `dropped_event_count`
    pub dropped_event_count: Option<i64>,
    /// field 3, wire `is_from_wamsys`
    pub is_from_wamsys: Option<bool>,
}