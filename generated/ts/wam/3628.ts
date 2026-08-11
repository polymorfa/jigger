export const WamSnackbarDeleteUndo = 3628 as const

export interface SnackbarDeleteUndoEvent {
  /** field 1, wire `is_a_group` */
  isAGroup?: boolean
  /** field 2, wire `messages_undeleted` */
  messagesUndeleted?: number
  /** field 3, wire `snackbar_action_type` */
  snackbarActionType?: SNACKBARACTIONTYPE
  /** field 4, wire `thread_id` */
  threadId?: string
  /** field 6, wire `media_type` */
  mediaType?: MEDIATYPE
}