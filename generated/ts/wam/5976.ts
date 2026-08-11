export const WamQbmMessageLevelAction = 5976 as const

export interface QbmMessageLevelActionEvent {
  /** field 1, wire `biz_trust_tier` */
  bizTrustTier?: string
  /** field 2, wire `contact_type` */
  contactType?: CONTACTTYPE
  /** field 3, wire `delta_time_received` */
  deltaTimeReceived?: number
  /** field 4, wire `is_insub_contact` */
  isInsubContact?: boolean
  /** field 5, wire `message_action_entry_point` */
  messageActionEntryPoint?: MESSAGEACTIONENTRYPOINT
  /** field 6, wire `message_has_url` */
  messageHasUrl?: boolean
  /** field 7, wire `message_id_hmac` */
  messageIdHmac?: string
  /** field 8, wire `message_level_action` */
  messageLevelAction?: MESSAGELEVELACTION
  /** field 9, wire `thread_id_hmac` */
  threadIdHmac?: string
  /** field 10, wire `is_biz_intent` */
  isBizIntent?: boolean
  /** field 11, wire `is_broadcast_message` */
  isBroadcastMessage?: boolean
  /** field 12, wire `ent_source_subplatform` */
  entSourceSubplatform?: string
  /** field 13, wire `decision_id` */
  decisionId?: string
  /** field 14, wire `thread_lid_hmac` */
  threadLidHmac?: string
  /** field 15, wire `is_oba` */
  isOba?: boolean
  /** field 16, wire `button_value_json_array` */
  buttonValueJsonArray?: string
  /** field 17, wire `message_field_json_array` */
  messageFieldJsonArray?: string
  /** field 18, wire `submessage_field_json_array` */
  submessageFieldJsonArray?: string
  /** field 23, wire `body_url_count_int` */
  bodyUrlCountInt?: number
  /** field 24, wire `body_url_unique_count_int` */
  bodyUrlUniqueCountInt?: number
  /** field 25, wire `cta_url_unique_count_int` */
  ctaUrlUniqueCountInt?: number
  /** field 26, wire `url_unique_count_int` */
  urlUniqueCountInt?: number
  /** field 27, wire `is_coex` */
  isCoex?: boolean
  /** field 28, wire `is_through_decision_service` */
  isThroughDecisionService?: boolean
  /** field 29, wire `ias_entry_point` */
  iasEntryPoint?: SIGNUPENTRYPOINT
  /** field 30, wire `ias_optin_ds` */
  iasOptinDs?: string
  /** field 31, wire `is_ias_subscriber` */
  isIasSubscriber?: boolean
  /** field 32, wire `is_from_pill` */
  isFromPill?: boolean
  /** field 33, wire `pill_entry_point` */
  pillEntryPoint?: PILLENTRYPOINT
}