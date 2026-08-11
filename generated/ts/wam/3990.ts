export const WamEditMessageSend = 3990 as const

export interface EditMessageSendEvent {
  /** field 1, wire `edit_duration` */
  editDuration?: number
  /** field 2, wire `edit_type` */
  editType?: EDITTYPE
  /** field 3, wire `message_send_result_is_terminal` */
  messageSendResultIsTerminal?: boolean
  /** field 4, wire `message_type` */
  messageType?: MESSAGETYPE
  /** field 5, wire `resend_count` */
  resendCount?: number
  /** field 6, wire `retry_count` */
  retryCount?: number
  /** field 8, wire `media_type` */
  mediaType?: MEDIATYPE
  /** field 9, wire `type_of_group` */
  typeOfGroup?: TYPEOFGROUPENUM
  /** field 10, wire `edited_message_id` */
  editedMessageId?: string
}