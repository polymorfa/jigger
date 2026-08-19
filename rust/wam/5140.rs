pub const WAM_CTWA1PD_CONVERSION: u32 = 5140;

#[derive(Debug, Default)]
pub struct Ctwa1pdConversionEvent {
    /// field 1, wire `ctwa1pd_conversion_type`
    pub ctwa1pd_conversion_type: Option<CTWA1PDCONVERSIONTYPE>,
    /// field 2, wire `ctwa_tracking_payload`
    pub ctwa_tracking_payload: Option<String>,
    /// field 3, wire `biz_platform`
    pub biz_platform: Option<BIZPLATFORM>,
    /// field 7, wire `ctwa_signals`
    pub ctwa_signals: Option<String>,
    /// field 8, wire `ctwa1pd_conversion_metadata`
    pub ctwa1pd_conversion_metadata: Option<String>,
    /// field 9, wire `ctwa1pd_conversion_schema_version`
    pub ctwa1pd_conversion_schema_version: Option<i64>,
    /// field 10, wire `ctwa_conversation_depth`
    pub ctwa_conversation_depth: Option<i64>,
    /// field 11, wire `ctwa_conversation_repeat`
    pub ctwa_conversation_repeat: Option<i64>,
    /// field 12, wire `ctwa_direction_from`
    pub ctwa_direction_from: Option<CTWADIRECTIONFROM>,
    /// field 13, wire `is_latest_conversion_token`
    pub is_latest_conversion_token: Option<bool>,
    /// field 14, wire `two_measurement_enabled`
    pub two_measurement_enabled: Option<bool>,
}