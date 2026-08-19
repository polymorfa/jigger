const WamMdChatAssignment = 3752 // channel: regular

type MdChatAssignmentEvent struct {
	AssignerAgentId string `wam:"assigner_agent_id"` // field 1
	AssignerBrowserId string `wam:"assigner_browser_id"` // field 2
	AssignerMdId int64 `wam:"assigner_md_id"` // field 3
	ChatAssignmentAction CHATASSIGNMENTACTIONTYPE `wam:"chat_assignment_action"` // field 4
	ChatAssignmentAgentId string `wam:"chat_assignment_agent_id"` // field 5
	ChatAssignmentBrowserId string `wam:"chat_assignment_browser_id"` // field 6
	ChatAssignmentChatType CHATASSIGNMENTCHATTYPE `wam:"chat_assignment_chat_type"` // field 7
	ChatAssignmentEntryPoint CHATASSIGNMENTENTRYPOINTTYPE `wam:"chat_assignment_entry_point"` // field 8
	ChatAssignmentMdId int64 `wam:"chat_assignment_md_id"` // field 9
	ChatsCnt int64 `wam:"chats_cnt"` // field 10
}