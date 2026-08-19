export const WamFsApiSignupFlow = 7952 as const

export interface FsApiSignupFlowEvent {
  /** field 1, wire `signup_entry_point` */
  signupEntryPoint?: SIGNUPENTRYPOINT
  /** field 2, wire `signup_user_journey_operation` */
  signupUserJourneyOperation?: SIGNUPUSERJOURNEYOPERATION
  /** field 3, wire `thread_creation_time` */
  threadCreationTime?: THREADCREATIONTIME
  /** field 4, wire `thread_id_hmac` */
  threadIdHmac?: string
  /** field 5, wire `unified_session_id` */
  unifiedSessionId?: string
}