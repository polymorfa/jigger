pub const WAM_CTWA3PD_AGGREGATED_CONVERSION: u32 = 8218;

#[derive(Debug, Default)]
pub struct Ctwa3pdAggregatedConversionEvent {
    /// field 1, wire `ad_id`
    pub ad_id: Option<String>,
    /// field 2, wire `ctwa3pd_aggregated_schema_version`
    pub ctwa3pd_aggregated_schema_version: Option<i64>,
    /// field 3, wire `ctwa3pd_conversion_metadata`
    pub ctwa3pd_conversion_metadata: Option<String>,
    /// field 4, wire `ctwa3pd_conversion_subtype`
    pub ctwa3pd_conversion_subtype: Option<String>,
    /// field 5, wire `ctwa3pd_conversion_type`
    pub ctwa3pd_conversion_type: Option<String>,
    /// field 6, wire `ctwa3pd_surface_type`
    pub ctwa3pd_surface_type: Option<String>,
    /// field 7, wire `ctwa_conversation_depth`
    pub ctwa_conversation_depth: Option<i64>,
    /// field 8, wire `ctwa_conversation_repeat`
    pub ctwa_conversation_repeat: Option<i64>,
    /// field 9, wire `ctwa_direction_from`
    pub ctwa_direction_from: Option<CTWADIRECTIONFROM>,
    /// field 10, wire `ctwa_signals`
    pub ctwa_signals: Option<String>,
    /// field 11, wire `thread_id_hmac`
    pub thread_id_hmac: Option<String>,
}