pub const WAM_WAFFLE_COMPANION_STATE_LIFECYCLE: u32 = 8248;

#[derive(Debug, Default)]
pub struct WaffleCompanionStateLifecycleEvent {
    /// field 1, wire `waffle_lifecycle_elapsed_ms`
    pub waffle_lifecycle_elapsed_ms: Option<i64>,
    /// field 2, wire `waffle_lifecycle_error_action`
    pub waffle_lifecycle_error_action: Option<WAFFLELIFECYCLEERRORACTIONTYPE>,
    /// field 3, wire `waffle_lifecycle_error_code`
    pub waffle_lifecycle_error_code: Option<WAFFLELIFECYCLEERRORCODETYPE>,
    /// field 4, wire `waffle_lifecycle_has_access_token`
    pub waffle_lifecycle_has_access_token: Option<bool>,
    /// field 5, wire `waffle_lifecycle_has_existing_row`
    pub waffle_lifecycle_has_existing_row: Option<bool>,
    /// field 6, wire `waffle_lifecycle_link_state`
    pub waffle_lifecycle_link_state: Option<WAFFLELIFECYCLELINKSTATETYPE>,
    /// field 7, wire `waffle_lifecycle_retry_count`
    pub waffle_lifecycle_retry_count: Option<i64>,
    /// field 8, wire `waffle_lifecycle_trace_action`
    pub waffle_lifecycle_trace_action: Option<WAFFLELIFECYCLETRACEACTIONTYPE>,
    /// field 9, wire `waffle_lifecycle_trace_source`
    pub waffle_lifecycle_trace_source: Option<WAFFLELIFECYCLETRACESOURCETYPE>,
    /// field 10, wire `waffle_lifecycle_unlink_type`
    pub waffle_lifecycle_unlink_type: Option<i64>,
}