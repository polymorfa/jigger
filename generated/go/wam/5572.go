const WamMmSignal = 5572 // channel: private

type MmSignalEvent struct {
	MmSignalData string `wam:"mm_signal_data"` // field 1
	MmSignalType MMSIGNALTYPE `wam:"mm_signal_type"` // field 2
	Disclosed bool `wam:"disclosed"` // field 4
	IsLatestConversionToken bool `wam:"is_latest_conversion_token"` // field 5
	MmConversationDepth int64 `wam:"mm_conversation_depth"` // field 6
	MmConversationRepeat int64 `wam:"mm_conversation_repeat"` // field 7
	MmConversionSchemaVersion int64 `wam:"mm_conversion_schema_version"` // field 8
	MmDirectionFrom MMDIRECTIONFROM `wam:"mm_direction_from"` // field 9
	ConsentSource CONSENTSOURCE `wam:"consent_source"` // field 10
}