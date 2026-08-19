const WamCtwa3pdAggregatedConversion = 8218 // channel: regular

type Ctwa3pdAggregatedConversionEvent struct {
	AdId string `wam:"ad_id"` // field 1
	Ctwa3pdAggregatedSchemaVersion int64 `wam:"ctwa3pd_aggregated_schema_version"` // field 2
	Ctwa3pdConversionMetadata string `wam:"ctwa3pd_conversion_metadata"` // field 3
	Ctwa3pdConversionSubtype string `wam:"ctwa3pd_conversion_subtype"` // field 4
	Ctwa3pdConversionType string `wam:"ctwa3pd_conversion_type"` // field 5
	Ctwa3pdSurfaceType string `wam:"ctwa3pd_surface_type"` // field 6
	CtwaConversationDepth int64 `wam:"ctwa_conversation_depth"` // field 7
	CtwaConversationRepeat int64 `wam:"ctwa_conversation_repeat"` // field 8
	CtwaDirectionFrom CTWADIRECTIONFROM `wam:"ctwa_direction_from"` // field 9
	CtwaSignals string `wam:"ctwa_signals"` // field 10
	ThreadIdHmac string `wam:"thread_id_hmac"` // field 11
}