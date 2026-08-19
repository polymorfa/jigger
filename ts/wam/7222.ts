export const WamGroupBulkRemoval = 7222 as const

export interface GroupBulkRemovalEvent {
  /** field 1, wire `app_session_id` */
  appSessionId?: string
  /** field 2, wire `bulk_removal_group_id` */
  bulkRemovalGroupId?: string
  /** field 3, wire `group_bulk_removal_action` */
  groupBulkRemovalAction?: GROUPBULKREMOVALACTION
  /** field 4, wire `group_bulk_removal_entry_point` */
  groupBulkRemovalEntryPoint?: GROUPBULKREMOVALENTRYPOINT
  /** field 5, wire `removed_members_count` */
  removedMembersCount?: number
}