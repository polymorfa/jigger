const WamBusinessToolsClick = 2218 // channel: regular

type BusinessToolsClickEvent struct {
	BusinessToolsSessionId string `wam:"business_tools_session_id"` // field 1
	BusinessToolsSequenceNumber int64 `wam:"business_tools_sequence_number"` // field 2
	BusinessToolsItem BUSINESSTOOLSITEMTYPE `wam:"business_tools_item"` // field 3
	LinkingTarget BUSINESSTOOLSLINKEDACCOUNTTYPE `wam:"linking_target"` // field 4
	BusinessToolsEntryPoint BUSINESSTOOLSENTRYPOINTTYPE `wam:"business_tools_entry_point"` // field 5
	BusinessToolsEntryPointPlacement int64 `wam:"business_tools_entry_point_placement"` // field 6
}