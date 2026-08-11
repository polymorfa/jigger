export const WamMessageDeleteActions = 3626 as const

export interface MessageDeleteActionsEvent {
  /** field 1, wire `delete_action_type` */
  deleteActionType?: DELETEACTIONTYPE
  /** field 2, wire `is_a_group` */
  isAGroup?: boolean
  /** field 3, wire `messages_deleted` */
  messagesDeleted?: number
  /** field 4, wire `thread_id` */
  threadId?: string
  /** field 6, wire `media_type` */
  mediaType?: MEDIATYPE
  /** field 7, wire `is_failed_message` */
  isFailedMessage?: boolean
  /** field 8, wire `message_create_ts` */
  messageCreateTs?: number
}