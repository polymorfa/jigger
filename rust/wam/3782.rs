pub const WAM_MEX_EVENT: u32 = 3782;

#[derive(Debug, Default)]
pub struct MexEventEvent {
    /// field 1, wire `is_mex`
    pub is_mex: Option<bool>,
    /// field 2, wire `mex_event_data`
    pub mex_event_data: Option<String>,
    /// field 3, wire `mex_event_end_time`
    pub mex_event_end_time: Option<i64>,
    /// field 7, wire `mex_event_operation`
    pub mex_event_operation: Option<String>,
    /// field 8, wire `mex_event_request_size`
    pub mex_event_request_size: Option<i64>,
    /// field 9, wire `mex_event_response_size`
    pub mex_event_response_size: Option<i64>,
    /// field 10, wire `mex_event_retries`
    pub mex_event_retries: Option<i64>,
    /// field 11, wire `mex_event_start_time`
    pub mex_event_start_time: Option<i64>,
    /// field 12, wire `mex_event_duration_t`
    pub mex_event_duration_t: Option<String>,
    /// field 13, wire `mex_event_envelope_response_status`
    pub mex_event_envelope_response_status: Option<i64>,
    /// field 14, wire `mex_event_payload_response_status`
    pub mex_event_payload_response_status: Option<i64>,
}