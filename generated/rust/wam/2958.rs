pub const WAM_TEST_ANONYMOUS_DAILY_ID: u32 = 2958;

#[derive(Debug, Default)]
pub struct TestAnonymousDailyIdEvent {
    /// field 1, wire `ps_test_enum_field`
    pub ps_test_enum_field: Option<PSTESTENUMFIELD>,
    /// field 2, wire `ps_test_float_field`
    pub ps_test_float_field: Option<String>,
}