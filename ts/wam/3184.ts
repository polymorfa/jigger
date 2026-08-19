export const WamReactionActions = 3184 as const

export interface ReactionActionsEvent {
  /** field 1, wire `message_type` */
  messageType?: MESSAGETYPE
  /** field 2, wire `reaction_action` */
  reactionAction?: REACTIONACTIONTYPE
  /** field 3, wire `media_type` */
  mediaType?: MEDIATYPE
}