pub const WAM_CTWA3PD_CONVERSION: u32 = 5138;

#[derive(Debug, Default)]
pub struct Ctwa3pdConversionEvent {
    /// field 1, wire `ctwa3pd_conversion_metadata`
    pub ctwa3pd_conversion_metadata: Option<String>,
    /// field 2, wire `ctwa3pd_conversion_subtype`
    pub ctwa3pd_conversion_subtype: Option<String>,
    /// field 3, wire `ctwa3pd_conversion_type`
    pub ctwa3pd_conversion_type: Option<String>,
    /// field 4, wire `ctwa3pd_schema_version`
    pub ctwa3pd_schema_version: Option<i64>,
    /// field 5, wire `ctwa3pd_surface_type`
    pub ctwa3pd_surface_type: Option<String>,
    /// field 6, wire `ctwa_tracking_payload`
    pub ctwa_tracking_payload: Option<String>,
    /// field 7, wire `ctwa_signals`
    pub ctwa_signals: Option<String>,
    /// field 8, wire `ctwa_conversation_depth`
    pub ctwa_conversation_depth: Option<i64>,
    /// field 9, wire `ctwa_conversation_repeat`
    pub ctwa_conversation_repeat: Option<i64>,
    /// field 10, wire `ctwa_direction_from`
    pub ctwa_direction_from: Option<CTWADIRECTIONFROM>,
}