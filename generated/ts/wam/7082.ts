export const WamMentionPickerAction = 7082 as const

export interface MentionPickerActionEvent {
  /** field 1, wire `group_size` */
  groupSize?: number
  /** field 2, wire `group_type_client` */
  groupTypeClient?: GROUPTYPECLIENT
  /** field 3, wire `is_a_group` */
  isAGroup?: boolean
  /** field 4, wire `mention_type` */
  mentionType?: MENTIONTYPE
  /** field 5, wire `thread_id` */
  threadId?: string
  /** field 6, wire `mention_group_id` */
  mentionGroupId?: string
}