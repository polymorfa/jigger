pub const WAM_WINDOWS_DEFAULT_PROTOCOL_ACTIVATION: u32 = 8504;

#[derive(Debug, Default)]
pub struct WindowsDefaultProtocolActivationEvent {
    /// field 1, wire `default_protocol_result`
    pub default_protocol_result: Option<DEFAULTPROTOCOLRESULTTYPE>,
    /// field 2, wire `default_protocol_scheme`
    pub default_protocol_scheme: Option<DEFAULTPROTOCOLSCHEMETYPE>,
    /// field 3, wire `default_protocol_target`
    pub default_protocol_target: Option<DEFAULTPROTOCOLTARGETTYPE>,
    /// field 4, wire `ts_timestamp_ms`
    pub ts_timestamp_ms: Option<i64>,
}