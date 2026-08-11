export const WamMdChatAssignmentSecondaryAction = 3716 as const

export interface MdChatAssignmentSecondaryActionEvent {
  /** field 1, wire `md_chat_assignment_secondary_action_agent_id` */
  mdChatAssignmentSecondaryActionAgentId?: string
  /** field 2, wire `md_chat_assignment_secondary_action_browser_id` */
  mdChatAssignmentSecondaryActionBrowserId?: string
  /** field 3, wire `md_chat_assignment_secondary_action_chat_type` */
  mdChatAssignmentSecondaryActionChatType?: MDCHATASSIGNMENTCHATTYPE
  /** field 4, wire `md_chat_assignment_secondary_action_error` */
  mdChatAssignmentSecondaryActionError?: ERRORTYPE
  /** field 5, wire `md_chat_assignment_secondary_action_md_id` */
  mdChatAssignmentSecondaryActionMdId?: number
  /** field 6, wire `md_chat_assignment_secondary_action_source` */
  mdChatAssignmentSecondaryActionSource?: MDCHATASSIGNMENTSOURCETYPE
  /** field 7, wire `md_chat_assignment_secondary_action_type` */
  mdChatAssignmentSecondaryActionType?: MDCHATASSIGNMENTSECONDARYACTIONTYPE
  /** field 8, wire `md_chat_assignment_secondary_action_assignment_type` */
  mdChatAssignmentSecondaryActionAssignmentType?: MDCHATASSIGNMENTASSIGNMENTTYPE
}