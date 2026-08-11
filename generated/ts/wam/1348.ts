export const WamSendRevokeMessage = 1348 as const

export interface SendRevokeMessageEvent {
  /** field 1, wire `message_type` */
  messageType?: MESSAGETYPE
  /** field 2, wire `message_media_type` */
  messageMediaType?: MEDIATYPE
  /** field 3, wire `revoke_send_delay` */
  revokeSendDelay?: number
}