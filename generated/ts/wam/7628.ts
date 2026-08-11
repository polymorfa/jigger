export const WamPsApiSignupFlow = 7628 as const

export interface PsApiSignupFlowEvent {
  /** field 1, wire `business_lid` */
  businessLid?: number
  /** field 3, wire `signup_user_journey_operation` */
  signupUserJourneyOperation?: SIGNUPUSERJOURNEYOPERATION
  /** field 4, wire `business_phone_number` */
  businessPhoneNumber?: number
  /** field 5, wire `signup_deep_link_id` */
  signupDeepLinkId?: string
  /** field 6, wire `signup_entry_point` */
  signupEntryPoint?: SIGNUPENTRYPOINT
  /** field 7, wire `thread_creation_time` */
  threadCreationTime?: THREADCREATIONTIME
}