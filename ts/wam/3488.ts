export const WamKeepInChatPerf = 3488 as const

export interface KeepInChatPerfEvent {
  /** field 1, wire `chat_ephemerality_duration` */
  chatEphemeralityDuration?: number
  /** field 2, wire `kic_error_code` */
  kicErrorCode?: KICERRORCODETYPE
  /** field 3, wire `kic_message_ephemerality_duration` */
  kicMessageEphemeralityDuration?: number
  /** field 4, wire `kic_request_type` */
  kicRequestType?: KICREQUESTTYPETYPE
  /** field 5, wire `request_send_time` */
  requestSendTime?: number
  /** field 6, wire `response` */
  response?: RESPONSETYPE
  /** field 7, wire `thread_id` */
  threadId?: string
}