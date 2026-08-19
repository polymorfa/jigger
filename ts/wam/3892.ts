export const WamEphemeralOutOfSyncInfo = 3892 as const

export interface EphemeralOutOfSyncInfoEvent {
  /** field 1, wire `group_size_bucket` */
  groupSizeBucket?: CLIENTGROUPSIZEBUCKET
  /** field 2, wire `incoming_message_ephemerality_duration` */
  incomingMessageEphemeralityDuration?: number
  /** field 3, wire `is_a_group` */
  isAGroup?: boolean
  /** field 5, wire `is_new_thread_for_user` */
  isNewThreadForUser?: boolean
  /** field 6, wire `other_default_mode_duration` */
  otherDefaultModeDuration?: number
  /** field 7, wire `thread_ephemerality_duration` */
  threadEphemeralityDuration?: number
  /** field 8, wire `thread_id` */
  threadId?: string
  /** field 9, wire `user_default_mode_duration` */
  userDefaultModeDuration?: number
}