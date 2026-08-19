const WamProtobufValidationError = 6110 // channel: regular

type ProtobufValidationErrorEvent struct {
	ProtobufValidationDropped bool `wam:"protobuf_validation_dropped"` // field 1
	ProtobufValidationErrorMessage string `wam:"protobuf_validation_error_message"` // field 2
	ProtobufValidationExpression string `wam:"protobuf_validation_expression"` // field 3
	ProtobufValidationFlow PROTOBUFVALIDATIONFLOW `wam:"protobuf_validation_flow"` // field 4
	ProtobufValidationPath string `wam:"protobuf_validation_path"` // field 5
	ProtobufValidationRuleId string `wam:"protobuf_validation_rule_id"` // field 6
	ProtobufLegacyValidationDropped bool `wam:"protobuf_legacy_validation_dropped"` // field 7
	ProtobufCorrelationOutcome PROTOBUFCORRELATIONOUTCOME `wam:"protobuf_correlation_outcome"` // field 8
	ProtobufValidationContext int64 `wam:"protobuf_validation_context"` // field 9
	ProtobufValidationThumbnailFormat string `wam:"protobuf_validation_thumbnail_format"` // field 10
}