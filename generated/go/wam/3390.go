const WamMdExpansionAgentBrowserMdId = 3390 // channel: regular

type MdExpansionAgentBrowserMdIdEvent struct {
	AgentId string `wam:"agent_id"` // field 1
	BrowserId string `wam:"browser_id"` // field 2
	LoginTimestamp int64 `wam:"login_timestamp"` // field 3
	LogoutTimestamp int64 `wam:"logout_timestamp"` // field 4
	CompanionMdId int64 `wam:"companion_md_id"` // field 5
	IsCustomAgentName bool `wam:"is_custom_agent_name"` // field 6
	MultideviceAction MULTIDEVICEACTIONTYPE `wam:"multidevice_action"` // field 7
	MdLinkedCount int64 `wam:"md_linked_count"` // field 8
	IsNewAgent bool `wam:"is_new_agent"` // field 9
}