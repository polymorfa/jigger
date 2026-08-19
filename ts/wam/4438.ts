export const WamPinInChatMessageSend = 4438 as const

export interface PinInChatMessageSendEvent {
  /** field 1, wire `group_role` */
  groupRole?: GROUPROLETYPE
  /** field 2, wire `group_type_client` */
  groupTypeClient?: GROUPTYPECLIENT
  /** field 3, wire `is_a_group` */
  isAGroup?: boolean
  /** field 4, wire `media_type` */
  mediaType?: MEDIATYPE
  /** field 5, wire `pin_in_chat_expiry_secs` */
  pinInChatExpirySecs?: number
  /** field 6, wire `pin_in_chat_type` */
  pinInChatType?: PININCHATTYPE
  /** field 7, wire `is_self_parent_message` */
  isSelfParentMessage?: boolean
  /** field 8, wire `is_self_pin` */
  isSelfPin?: boolean
  /** field 9, wire `time_remaining_to_expiry_secs` */
  timeRemainingToExpirySecs?: number
}