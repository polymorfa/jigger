export const WamProtobufValidationError = 6110 as const

export interface ProtobufValidationErrorEvent {
  /** field 1, wire `protobuf_validation_dropped` */
  protobufValidationDropped?: boolean
  /** field 2, wire `protobuf_validation_error_message` */
  protobufValidationErrorMessage?: string
  /** field 3, wire `protobuf_validation_expression` */
  protobufValidationExpression?: string
  /** field 4, wire `protobuf_validation_flow` */
  protobufValidationFlow?: PROTOBUFVALIDATIONFLOW
  /** field 5, wire `protobuf_validation_path` */
  protobufValidationPath?: string
  /** field 6, wire `protobuf_validation_rule_id` */
  protobufValidationRuleId?: string
  /** field 7, wire `protobuf_legacy_validation_dropped` */
  protobufLegacyValidationDropped?: boolean
  /** field 8, wire `protobuf_correlation_outcome` */
  protobufCorrelationOutcome?: PROTOBUFCORRELATIONOUTCOME
  /** field 9, wire `protobuf_validation_context` */
  protobufValidationContext?: number
  /** field 10, wire `protobuf_validation_thumbnail_format` */
  protobufValidationThumbnailFormat?: string
}