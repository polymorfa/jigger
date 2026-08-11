pub const WAM_MD_CHAT_ASSIGNMENT: u32 = 3752;

#[derive(Debug, Default)]
pub struct MdChatAssignmentEvent {
    /// field 1, wire `assigner_agent_id`
    pub assigner_agent_id: Option<String>,
    /// field 2, wire `assigner_browser_id`
    pub assigner_browser_id: Option<String>,
    /// field 3, wire `assigner_md_id`
    pub assigner_md_id: Option<i64>,
    /// field 4, wire `chat_assignment_action`
    pub chat_assignment_action: Option<CHATASSIGNMENTACTIONTYPE>,
    /// field 5, wire `chat_assignment_agent_id`
    pub chat_assignment_agent_id: Option<String>,
    /// field 6, wire `chat_assignment_browser_id`
    pub chat_assignment_browser_id: Option<String>,
    /// field 7, wire `chat_assignment_chat_type`
    pub chat_assignment_chat_type: Option<CHATASSIGNMENTCHATTYPE>,
    /// field 8, wire `chat_assignment_entry_point`
    pub chat_assignment_entry_point: Option<CHATASSIGNMENTENTRYPOINTTYPE>,
    /// field 9, wire `chat_assignment_md_id`
    pub chat_assignment_md_id: Option<i64>,
    /// field 10, wire `chats_cnt`
    pub chats_cnt: Option<i64>,
}