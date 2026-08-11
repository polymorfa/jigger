export const WamMdChatAssignment = 3752 as const

export interface MdChatAssignmentEvent {
  /** field 1, wire `assigner_agent_id` */
  assignerAgentId?: string
  /** field 2, wire `assigner_browser_id` */
  assignerBrowserId?: string
  /** field 3, wire `assigner_md_id` */
  assignerMdId?: number
  /** field 4, wire `chat_assignment_action` */
  chatAssignmentAction?: CHATASSIGNMENTACTIONTYPE
  /** field 5, wire `chat_assignment_agent_id` */
  chatAssignmentAgentId?: string
  /** field 6, wire `chat_assignment_browser_id` */
  chatAssignmentBrowserId?: string
  /** field 7, wire `chat_assignment_chat_type` */
  chatAssignmentChatType?: CHATASSIGNMENTCHATTYPE
  /** field 8, wire `chat_assignment_entry_point` */
  chatAssignmentEntryPoint?: CHATASSIGNMENTENTRYPOINTTYPE
  /** field 9, wire `chat_assignment_md_id` */
  chatAssignmentMdId?: number
  /** field 10, wire `chats_cnt` */
  chatsCnt?: number
}