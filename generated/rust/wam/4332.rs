pub const WAM_TS_BIT_ARRAY: u32 = 4332;

#[derive(Debug, Default)]
pub struct TsBitArrayEvent {
    /// field 1, wire `bitarray_high`
    pub bitarray_high: Option<i64>,
    /// field 2, wire `bitarray_length`
    pub bitarray_length: Option<i64>,
    /// field 3, wire `bitarray_low`
    pub bitarray_low: Option<i64>,
    /// field 4, wire `cumulative_bits`
    pub cumulative_bits: Option<i64>,
    /// field 5, wire `relative_timestamp_ms`
    pub relative_timestamp_ms: Option<i64>,
    /// field 6, wire `session_seq`
    pub session_seq: Option<i64>,
    /// field 7, wire `ts_session_id`
    pub ts_session_id: Option<i64>,
    /// field 8, wire `ts_timestamp_ms`
    pub ts_timestamp_ms: Option<i64>,
    /// field 9, wire `unified_session_id`
    pub unified_session_id: Option<String>,
}