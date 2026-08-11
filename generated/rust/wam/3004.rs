pub const WAM_TEST_ANONYMOUS_ID_LESS: u32 = 3004;

#[derive(Debug, Default)]
pub struct TestAnonymousIdLessEvent {
    /// field 1, wire `ps_time_since_last_event_in_min`
    pub ps_time_since_last_event_in_min: Option<i64>,
}