export const WamChannelMembershipActionEvent = 5762 as const

export interface ChannelMembershipActionEventEvent {
  /** field 1, wire `action_result` */
  actionResult?: CHANNELMEMBERSHIPACTIONRESULT
  /** field 2, wire `cid` */
  cid?: string
  /** field 3, wire `unified_session_id` */
  unifiedSessionId?: string
  /** field 4, wire `updates_tab_session_id` */
  updatesTabSessionId?: number
}