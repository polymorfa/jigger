const WamCtwa3pdConversion = 5138 // channel: regular

type Ctwa3pdConversionEvent struct {
	Ctwa3pdConversionMetadata string `wam:"ctwa3pd_conversion_metadata"` // field 1
	Ctwa3pdConversionSubtype string `wam:"ctwa3pd_conversion_subtype"` // field 2
	Ctwa3pdConversionType string `wam:"ctwa3pd_conversion_type"` // field 3
	Ctwa3pdSchemaVersion int64 `wam:"ctwa3pd_schema_version"` // field 4
	Ctwa3pdSurfaceType string `wam:"ctwa3pd_surface_type"` // field 5
	CtwaTrackingPayload string `wam:"ctwa_tracking_payload"` // field 6
	CtwaSignals string `wam:"ctwa_signals"` // field 7
	CtwaConversationDepth int64 `wam:"ctwa_conversation_depth"` // field 8
	CtwaConversationRepeat int64 `wam:"ctwa_conversation_repeat"` // field 9
	CtwaDirectionFrom CTWADIRECTIONFROM `wam:"ctwa_direction_from"` // field 10
}