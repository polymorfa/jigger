pub const WAM_PROTOBUF_VALIDATION_ERROR: u32 = 6110;

#[derive(Debug, Default)]
pub struct ProtobufValidationErrorEvent {
    /// field 1, wire `protobuf_validation_dropped`
    pub protobuf_validation_dropped: Option<bool>,
    /// field 2, wire `protobuf_validation_error_message`
    pub protobuf_validation_error_message: Option<String>,
    /// field 3, wire `protobuf_validation_expression`
    pub protobuf_validation_expression: Option<String>,
    /// field 4, wire `protobuf_validation_flow`
    pub protobuf_validation_flow: Option<PROTOBUFVALIDATIONFLOW>,
    /// field 5, wire `protobuf_validation_path`
    pub protobuf_validation_path: Option<String>,
    /// field 6, wire `protobuf_validation_rule_id`
    pub protobuf_validation_rule_id: Option<String>,
    /// field 7, wire `protobuf_legacy_validation_dropped`
    pub protobuf_legacy_validation_dropped: Option<bool>,
    /// field 8, wire `protobuf_correlation_outcome`
    pub protobuf_correlation_outcome: Option<PROTOBUFCORRELATIONOUTCOME>,
    /// field 9, wire `protobuf_validation_context`
    pub protobuf_validation_context: Option<i64>,
    /// field 10, wire `protobuf_validation_thumbnail_format`
    pub protobuf_validation_thumbnail_format: Option<String>,
}