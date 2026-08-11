export const WamMdGroupParticipantMissAck = 4146 as const

export interface MdGroupParticipantMissAckEvent {
  /** field 1, wire `group_size_bucket` */
  groupSizeBucket?: CLIENTGROUPSIZEBUCKET
  /** field 2, wire `is_lid` */
  isLid?: boolean
  /** field 3, wire `message_is_revoke` */
  messageIsRevoke?: boolean
  /** field 4, wire `participant_add_count` */
  participantAddCount?: number
  /** field 5, wire `participant_remove_count` */
  participantRemoveCount?: number
  /** field 6, wire `type_of_group` */
  typeOfGroup?: TYPEOFGROUPENUM
}