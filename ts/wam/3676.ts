export const WamPollsActions = 3676 as const

export interface PollsActionsEvent {
  /** field 1, wire `group_size_bucket` */
  groupSizeBucket?: CLIENTGROUPSIZEBUCKET
  /** field 2, wire `is_admin` */
  isAdmin?: boolean
  /** field 3, wire `poll_action` */
  pollAction?: POLLACTIONTYPE
  /** field 4, wire `poll_creation_ds` */
  pollCreationDs?: number
  /** field 5, wire `poll_options_count` */
  pollOptionsCount?: number
  /** field 6, wire `is_a_group` */
  isAGroup?: boolean
  /** field 7, wire `type_of_group` */
  typeOfGroup?: TYPEOFGROUPENUM
  /** field 8, wire `chat_type` */
  chatType?: MESSAGECHATTYPE
  /** field 9, wire `hide_voter_name` */
  hideVoterName?: boolean
  /** field 10, wire `poll_duration_ms` */
  pollDurationMs?: number
}