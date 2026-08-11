pub const WAM_MEX_EVENT_V2: u32 = 4336;

#[derive(Debug, Default)]
pub struct MexEventV2Event {
    /// field 1, wire `mex_event_v2_duration_ms`
    pub mex_event_v2_duration_ms: Option<String>,
    /// field 2, wire `mex_event_v2_end_time`
    pub mex_event_v2_end_time: Option<i64>,
    /// field 3, wire `mex_event_v2_error_codes`
    pub mex_event_v2_error_codes: Option<String>,
    /// field 4, wire `mex_event_v2_errors`
    pub mex_event_v2_errors: Option<String>,
    /// field 5, wire `mex_event_v2_has_data`
    pub mex_event_v2_has_data: Option<bool>,
    /// field 6, wire `mex_event_v2_is_mex`
    pub mex_event_v2_is_mex: Option<bool>,
    /// field 7, wire `mex_event_v2_operation_name`
    pub mex_event_v2_operation_name: Option<String>,
    /// field 8, wire `mex_event_v2_query_id`
    pub mex_event_v2_query_id: Option<String>,
    /// field 9, wire `mex_event_v2_start_time`
    pub mex_event_v2_start_time: Option<i64>,
    /// field 10, wire `mex_event_v2_is_argo_payload`
    pub mex_event_v2_is_argo_payload: Option<bool>,
    /// field 11, wire `mex_fb_user_type`
    pub mex_fb_user_type: Option<String>,
    /// field 12, wire `mex_event_v2_experiment_flag`
    pub mex_event_v2_experiment_flag: Option<i64>,
    /// field 13, wire `trace_id_int`
    pub trace_id_int: Option<i64>,
}