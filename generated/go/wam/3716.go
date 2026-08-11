const WamMdChatAssignmentSecondaryAction = 3716 // channel: regular

type MdChatAssignmentSecondaryActionEvent struct {
	MdChatAssignmentSecondaryActionAgentId string `wam:"md_chat_assignment_secondary_action_agent_id"` // field 1
	MdChatAssignmentSecondaryActionBrowserId string `wam:"md_chat_assignment_secondary_action_browser_id"` // field 2
	MdChatAssignmentSecondaryActionChatType MDCHATASSIGNMENTCHATTYPE `wam:"md_chat_assignment_secondary_action_chat_type"` // field 3
	MdChatAssignmentSecondaryActionError ERRORTYPE `wam:"md_chat_assignment_secondary_action_error"` // field 4
	MdChatAssignmentSecondaryActionMdId int64 `wam:"md_chat_assignment_secondary_action_md_id"` // field 5
	MdChatAssignmentSecondaryActionSource MDCHATASSIGNMENTSOURCETYPE `wam:"md_chat_assignment_secondary_action_source"` // field 6
	MdChatAssignmentSecondaryActionType MDCHATASSIGNMENTSECONDARYACTIONTYPE `wam:"md_chat_assignment_secondary_action_type"` // field 7
	MdChatAssignmentSecondaryActionAssignmentType MDCHATASSIGNMENTASSIGNMENTTYPE `wam:"md_chat_assignment_secondary_action_assignment_type"` // field 8
}