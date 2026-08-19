const WamBusinessToolsImpression = 2220 // channel: regular

type BusinessToolsImpressionEvent struct {
	BusinessToolsSessionId string `wam:"business_tools_session_id"` // field 1
	BusinessToolsSequenceNumber int64 `wam:"business_tools_sequence_number"` // field 2
	BusinessToolsEntryPoint BUSINESSTOOLSENTRYPOINTTYPE `wam:"business_tools_entry_point"` // field 4
}