export const WamGroupMemberUpdates = 7768 as const

export interface GroupMemberUpdatesEvent {
  /** field 1, wire `fetched_message_count` */
  fetchedMessageCount?: number
  /** field 2, wire `group_member_updates_action_name` */
  groupMemberUpdatesActionName?: GROUPMEMBERUPDATESACTIONNAME
  /** field 3, wire `group_member_updates_current_screen` */
  groupMemberUpdatesCurrentScreen?: GROUPMEMBERUPDATESCURRENTSCREEN
  /** field 4, wire `group_member_updates_session_id` */
  groupMemberUpdatesSessionId?: string
  /** field 5, wire `fetched_message_latency` */
  fetchedMessageLatency?: number
}