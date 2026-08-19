export const WamRevokeMessageSend = 3656 as const

export interface RevokeMessageSendEvent {
  /** field 1, wire `message_send_result_is_terminal` */
  messageSendResultIsTerminal?: boolean
  /** field 2, wire `message_type` */
  messageType?: MESSAGETYPE
  /** field 3, wire `resend_count` */
  resendCount?: number
  /** field 4, wire `retry_count` */
  retryCount?: number
  /** field 5, wire `revoke_duration` */
  revokeDuration?: number
  /** field 6, wire `revoke_type` */
  revokeType?: REVOKETYPE
}