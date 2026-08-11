pub const WAM_CLOCK_SKEW_DIFFERENCE_T: u32 = 3178;

#[derive(Debug, Default)]
pub struct ClockSkewDifferenceTEvent {
    /// field 1, wire `clock_skew_hourly`
    pub clock_skew_hourly: Option<i64>,
}