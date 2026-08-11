export const WamWebcMessageSend = 2072 as const

export interface WebcMessageSendEvent {
  /** field 1, wire `message_type` */
  messageType?: MESSAGETYPE
  /** field 2, wire `message_media_type` */
  messageMediaType?: MEDIATYPE
  /** field 3, wire `message_is_forward` */
  messageIsForward?: boolean
  /** field 4, wire `message_send_t` */
  messageSendT?: string
}