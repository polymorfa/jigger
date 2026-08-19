export const WamPinInChatInteraction = 4436 as const

export interface PinInChatInteractionEvent {
  /** field 1, wire `group_role` */
  groupRole?: GROUPROLETYPE
  /** field 2, wire `group_size` */
  groupSize?: number
  /** field 3, wire `group_type_client` */
  groupTypeClient?: GROUPTYPECLIENT
  /** field 4, wire `is_a_group` */
  isAGroup?: boolean
  /** field 5, wire `media_type` */
  mediaType?: MEDIATYPE
  /** field 6, wire `pin_count` */
  pinCount?: number
  /** field 7, wire `pin_in_chat_interaction_type` */
  pinInChatInteractionType?: PININCHATINTERACTIONTYPE
  /** field 8, wire `is_self_pin` */
  isSelfPin?: boolean
  /** field 9, wire `pin_index` */
  pinIndex?: number
  /** field 10, wire `ui_surface` */
  uiSurface?: TSSURFACE
}