pub const WAM_MD_CHAT_ASSIGNMENT_SECONDARY_ACTION: u32 = 3716;

#[derive(Debug, Default)]
pub struct MdChatAssignmentSecondaryActionEvent {
    /// field 1, wire `md_chat_assignment_secondary_action_agent_id`
    pub md_chat_assignment_secondary_action_agent_id: Option<String>,
    /// field 2, wire `md_chat_assignment_secondary_action_browser_id`
    pub md_chat_assignment_secondary_action_browser_id: Option<String>,
    /// field 3, wire `md_chat_assignment_secondary_action_chat_type`
    pub md_chat_assignment_secondary_action_chat_type: Option<MDCHATASSIGNMENTCHATTYPE>,
    /// field 4, wire `md_chat_assignment_secondary_action_error`
    pub md_chat_assignment_secondary_action_error: Option<ERRORTYPE>,
    /// field 5, wire `md_chat_assignment_secondary_action_md_id`
    pub md_chat_assignment_secondary_action_md_id: Option<i64>,
    /// field 6, wire `md_chat_assignment_secondary_action_source`
    pub md_chat_assignment_secondary_action_source: Option<MDCHATASSIGNMENTSOURCETYPE>,
    /// field 7, wire `md_chat_assignment_secondary_action_type`
    pub md_chat_assignment_secondary_action_type: Option<MDCHATASSIGNMENTSECONDARYACTIONTYPE>,
    /// field 8, wire `md_chat_assignment_secondary_action_assignment_type`
    pub md_chat_assignment_secondary_action_assignment_type: Option<MDCHATASSIGNMENTASSIGNMENTTYPE>,
}