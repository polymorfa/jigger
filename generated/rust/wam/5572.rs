pub const WAM_MM_SIGNAL: u32 = 5572;

#[derive(Debug, Default)]
pub struct MmSignalEvent {
    /// field 1, wire `mm_signal_data`
    pub mm_signal_data: Option<String>,
    /// field 2, wire `mm_signal_type`
    pub mm_signal_type: Option<MMSIGNALTYPE>,
    /// field 4, wire `disclosed`
    pub disclosed: Option<bool>,
    /// field 5, wire `is_latest_conversion_token`
    pub is_latest_conversion_token: Option<bool>,
    /// field 6, wire `mm_conversation_depth`
    pub mm_conversation_depth: Option<i64>,
    /// field 7, wire `mm_conversation_repeat`
    pub mm_conversation_repeat: Option<i64>,
    /// field 8, wire `mm_conversion_schema_version`
    pub mm_conversion_schema_version: Option<i64>,
    /// field 9, wire `mm_direction_from`
    pub mm_direction_from: Option<MMDIRECTIONFROM>,
    /// field 10, wire `consent_source`
    pub consent_source: Option<CONSENTSOURCE>,
}