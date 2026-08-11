export const WamMdExpansionAgentBrowserMdId = 3390 as const

export interface MdExpansionAgentBrowserMdIdEvent {
  /** field 1, wire `agent_id` */
  agentId?: string
  /** field 2, wire `browser_id` */
  browserId?: string
  /** field 3, wire `login_timestamp` */
  loginTimestamp?: number
  /** field 4, wire `logout_timestamp` */
  logoutTimestamp?: number
  /** field 5, wire `companion_md_id` */
  companionMdId?: number
  /** field 6, wire `is_custom_agent_name` */
  isCustomAgentName?: boolean
  /** field 7, wire `multidevice_action` */
  multideviceAction?: MULTIDEVICEACTIONTYPE
  /** field 8, wire `md_linked_count` */
  mdLinkedCount?: number
  /** field 9, wire `is_new_agent` */
  isNewAgent?: boolean
}