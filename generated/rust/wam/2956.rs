pub const WAM_TEST_ANONYMOUS_WEEKLY_ID: u32 = 2956;

#[derive(Debug, Default)]
pub struct TestAnonymousWeeklyIdEvent {
    /// field 1, wire `ps_time_since_last_event_in_min`
    pub ps_time_since_last_event_in_min: Option<i64>,
    /// field 2, wire `ps_test_boolean_field`
    pub ps_test_boolean_field: Option<bool>,
    /// field 3, wire `ps_test_string_field`
    pub ps_test_string_field: Option<String>,
}