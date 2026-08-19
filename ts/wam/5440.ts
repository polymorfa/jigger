export const WamWebcMinorEventLog = 5440 as const

export interface WebcMinorEventLogEvent {
  /** field 1, wire `additional_debug_context` */
  additionalDebugContext?: string
  /** field 2, wire `log_context` */
  logContext?: string
  /** field 3, wire `log_count` */
  logCount?: number
  /** field 4, wire `log_reason` */
  logReason?: string
  /** field 5, wire `log_type` */
  logType?: LOGTYPE
}