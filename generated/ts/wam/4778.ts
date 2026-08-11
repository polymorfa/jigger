export const WamEphemeralSyncResponseSend = 4778 as const

export interface EphemeralSyncResponseSendEvent {
  /** field 1, wire `client_disappearing_mode_initiator` */
  clientDisappearingModeInitiator?: DISAPPEARINGCHATINITIATORTYPE
  /** field 2, wire `client_ephemerality_duration` */
  clientEphemeralityDuration?: number
  /** field 3, wire `client_ephemerality_initiator` */
  clientEphemeralityInitiator?: EPHEMERALITYINITIATORTYPE
  /** field 4, wire `client_ephemerality_setting_timestamp` */
  clientEphemeralitySettingTimestamp?: number
  /** field 5, wire `client_ephemerality_trigger_action` */
  clientEphemeralityTriggerAction?: EPHEMERALITYTRIGGERACTIONTYPE
  /** field 6, wire `esr_disappearing_mode_initiator` */
  esrDisappearingModeInitiator?: DISAPPEARINGCHATINITIATORTYPE
  /** field 7, wire `esr_ephemerality_duration` */
  esrEphemeralityDuration?: number
  /** field 8, wire `esr_ephemerality_initiator` */
  esrEphemeralityInitiator?: EPHEMERALITYINITIATORTYPE
  /** field 9, wire `esr_ephemerality_setting_timestamp` */
  esrEphemeralitySettingTimestamp?: number
  /** field 10, wire `esr_ephemerality_trigger_action` */
  esrEphemeralityTriggerAction?: EPHEMERALITYTRIGGERACTIONTYPE
  /** field 11, wire `esr_failure_reason` */
  esrFailureReason?: ESRFAILUREREASONTYPE
  /** field 12, wire `esr_send_attempt` */
  esrSendAttempt?: number
  /** field 13, wire `esr_send_result` */
  esrSendResult?: ESRSENDRESULTTYPE
  /** field 14, wire `is_a_group` */
  isAGroup?: boolean
  /** field 15, wire `message_disappearing_mode_initiator` */
  messageDisappearingModeInitiator?: DISAPPEARINGCHATINITIATORTYPE
  /** field 16, wire `message_ephemerality_duration` */
  messageEphemeralityDuration?: number
  /** field 17, wire `message_ephemerality_initiator` */
  messageEphemeralityInitiator?: EPHEMERALITYINITIATORTYPE
  /** field 18, wire `message_ephemerality_setting_timestamp` */
  messageEphemeralitySettingTimestamp?: number
  /** field 19, wire `message_ephemerality_trigger_action` */
  messageEphemeralityTriggerAction?: EPHEMERALITYTRIGGERACTIONTYPE
  /** field 20, wire `thread_id` */
  threadId?: string
}