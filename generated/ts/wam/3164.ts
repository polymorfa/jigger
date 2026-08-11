export const WamMdBootstrapAppStateCriticalDataProcessing = 3164 as const

export interface MdBootstrapAppStateCriticalDataProcessingEvent {
  /** field 1, wire `bootstrap_app_state_data_stage` */
  bootstrapAppStateDataStage?: BOOTSTRAPAPPSTATEDATASTAGECODE
  /** field 2, wire `md_bootstrap_payload_type` */
  mdBootstrapPayloadType?: MDBOOTSTRAPPAYLOADTYPE
  /** field 3, wire `md_reg_attempt_id` */
  mdRegAttemptId?: string
  /** field 4, wire `md_session_id` */
  mdSessionId?: string
  /** field 5, wire `md_timestamp` */
  mdTimestamp?: number
}