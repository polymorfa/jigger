export const WamMessageCapping = 6854 as const

export interface MessageCappingEvent {
  /** field 2, wire `extra_attributes` */
  extraAttributes?: string
  /** field 4, wire `surface` */
  surface?: SURFACETYPE
  /** field 5, wire `user_action_target` */
  userActionTarget?: string
  /** field 6, wire `message_capping_action_type` */
  messageCappingActionType?: MESSAGECAPPINGACTIONTYPE
  /** field 7, wire `message_capping_sequence` */
  messageCappingSequence?: number
  /** field 8, wire `message_capping_session` */
  messageCappingSession?: string
  /** field 9, wire `message_capping_entry_point` */
  messageCappingEntryPoint?: SURFACETYPE
}