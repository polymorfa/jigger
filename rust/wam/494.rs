pub const WAM_CRASH_LOG: u32 = 494;

#[derive(Debug, Default)]
pub struct CrashLogEvent {
    /// field 2, wire `crash_reason`
    pub crash_reason: Option<String>,
    /// field 3, wire `crash_context`
    pub crash_context: Option<String>,
    /// field 5, wire `crash_count`
    pub crash_count: Option<i64>,
    /// field 6, wire `crash_type`
    pub crash_type: Option<CRASHTYPE>,
    /// field 16, wire `running_tasks`
    pub running_tasks: Option<String>,
    /// field 18, wire `process_identifier`
    pub process_identifier: Option<i64>,
    /// field 19, wire `peripheral_connected`
    pub peripheral_connected: Option<String>,
    /// field 20, wire `active_subfunnel_id`
    pub active_subfunnel_id: Option<String>,
    /// field 21, wire `active_subfunnel_type`
    pub active_subfunnel_type: Option<SUBFUNNELTYPE>,
    /// field 22, wire `chat_session_id`
    pub chat_session_id: Option<String>,
    /// field 23, wire `crash_application_state`
    pub crash_application_state: Option<CRASHAPPLICATIONSTATE>,
    /// field 24, wire `crash_timeout`
    pub crash_timeout: Option<i64>,
    /// field 25, wire `unified_session_id`
    pub unified_session_id: Option<String>,
    /// field 26, wire `iphone_time_spent_surface_id`
    pub iphone_time_spent_surface_id: Option<TSSURFACE>,
    /// field 27, wire `crash_log_time_spent_view_name`
    pub crash_log_time_spent_view_name: Option<String>,
    /// field 28, wire `crash_log_product_area`
    pub crash_log_product_area: Option<PRODUCTAREA>,
    /// field 29, wire `ufad_report_type`
    pub ufad_report_type: Option<UFADREPORTTYPE>,
    /// field 30, wire `iphone_process_non_global`
    pub iphone_process_non_global: Option<IPHONEPROCESSNONGLOBAL>,
    /// field 31, wire `low_power_mode_enabled`
    pub low_power_mode_enabled: Option<bool>,
    /// field 32, wire `app_context`
    pub app_context: Option<String>,
    /// field 33, wire `app_context_bitfield`
    pub app_context_bitfield: Option<i64>,
    /// field 34, wire `call_test_bucket_id_list`
    pub call_test_bucket_id_list: Option<String>,
    /// field 35, wire `trace_id_int`
    pub trace_id_int: Option<i64>,
    /// field 36, wire `crash_log_sas_enabled`
    pub crash_log_sas_enabled: Option<bool>,
}