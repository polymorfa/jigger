pub const WAM_APP_LAUNCH: u32 = 1094;

#[derive(Debug, Default)]
pub struct AppLaunchEvent {
    /// field 1, wire `app_launch_t`
    pub app_launch_t: Option<String>,
    /// field 2, wire `app_launch_cpu_t`
    pub app_launch_cpu_t: Option<String>,
    /// field 3, wire `app_launch_main_pre_t`
    pub app_launch_main_pre_t: Option<String>,
    /// field 4, wire `app_launch_main_run_t`
    pub app_launch_main_run_t: Option<String>,
    /// field 5, wire `app_launch_type_t`
    pub app_launch_type_t: Option<APPLAUNCHTYPE>,
    /// field 7, wire `app_launch_destination`
    pub app_launch_destination: Option<APPLAUNCHDESTINATIONTYPE>,
    /// field 8, wire `db_reads_count`
    pub db_reads_count: Option<i64>,
    /// field 9, wire `db_writes_count`
    pub db_writes_count: Option<i64>,
    /// field 10, wire `db_main_thread_count`
    pub db_main_thread_count: Option<i64>,
    /// field 12, wire `low_power_mode_enabled`
    pub low_power_mode_enabled: Option<bool>,
    /// field 15, wire `process_identifier`
    pub process_identifier: Option<i64>,
    /// field 16, wire `peripheral_connected`
    pub peripheral_connected: Option<String>,
    /// field 17, wire `db_bg_thread_reads_duration_t`
    pub db_bg_thread_reads_duration_t: Option<String>,
    /// field 18, wire `db_bg_thread_writes_duration_t`
    pub db_bg_thread_writes_duration_t: Option<String>,
    /// field 19, wire `db_main_thread_reads_duration_t`
    pub db_main_thread_reads_duration_t: Option<String>,
    /// field 20, wire `db_main_thread_writes_duration_t`
    pub db_main_thread_writes_duration_t: Option<String>,
    /// field 22, wire `app_context`
    pub app_context: Option<String>,
    /// field 23, wire `app_context_bitfield`
    pub app_context_bitfield: Option<i64>,
    /// field 24, wire `trace_id_int`
    pub trace_id_int: Option<i64>,
}