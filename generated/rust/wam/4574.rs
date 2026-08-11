pub const WAM_TS_EXTERNAL: u32 = 4574;

#[derive(Debug, Default)]
pub struct TsExternalEvent {
    /// field 1, wire `relative_timestamp_ms`
    pub relative_timestamp_ms: Option<i64>,
    /// field 2, wire `ts_duration`
    pub ts_duration: Option<i64>,
    /// field 3, wire `ts_external_event_source`
    pub ts_external_event_source: Option<TSEXTERNALEVENTSOURCE>,
    /// field 4, wire `ts_session_id`
    pub ts_session_id: Option<i64>,
    /// field 5, wire `ts_timestamp_ms`
    pub ts_timestamp_ms: Option<i64>,
    /// field 6, wire `unified_session_id`
    pub unified_session_id: Option<String>,
}