const WamCtwa1pdConversion = 5140 // channel: private

type Ctwa1pdConversionEvent struct {
	Ctwa1pdConversionType CTWA1PDCONVERSIONTYPE `wam:"ctwa1pd_conversion_type"` // field 1
	CtwaTrackingPayload string `wam:"ctwa_tracking_payload"` // field 2
	BizPlatform BIZPLATFORM `wam:"biz_platform"` // field 3
	CtwaSignals string `wam:"ctwa_signals"` // field 7
	Ctwa1pdConversionMetadata string `wam:"ctwa1pd_conversion_metadata"` // field 8
	Ctwa1pdConversionSchemaVersion int64 `wam:"ctwa1pd_conversion_schema_version"` // field 9
	CtwaConversationDepth int64 `wam:"ctwa_conversation_depth"` // field 10
	CtwaConversationRepeat int64 `wam:"ctwa_conversation_repeat"` // field 11
	CtwaDirectionFrom CTWADIRECTIONFROM `wam:"ctwa_direction_from"` // field 12
	IsLatestConversionToken bool `wam:"is_latest_conversion_token"` // field 13
	TwoMeasurementEnabled bool `wam:"two_measurement_enabled"` // field 14
}