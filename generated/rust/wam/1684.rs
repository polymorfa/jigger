pub const WAM_CRITICAL_EVENT: u32 = 1684;

#[derive(Debug, Default)]
pub struct CriticalEventEvent {
    /// field 1, wire `name`
    pub name: Option<String>,
    /// field 2, wire `context`
    pub context: Option<String>,
    /// field 3, wire `debug`
    pub debug: Option<String>,
    /// field 5, wire `mobile_build_id`
    pub mobile_build_id: Option<String>,
    /// field 6, wire `crashlog_type`
    pub crashlog_type: Option<CRASHLOGTYPE>,
    /// field 7, wire `extra_debug`
    pub extra_debug: Option<String>,
    /// field 8, wire `crash_application_state`
    pub crash_application_state: Option<CRASHAPPLICATIONSTATE>,
    /// field 9, wire `storage_avail_size_with_cache`
    pub storage_avail_size_with_cache: Option<i64>,
}