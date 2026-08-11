export const WamQbmMessageClick = 5178 as const

export interface QbmMessageClickEvent {
  /** field 1, wire `button_clicked_type` */
  buttonClickedType?: QBMMESSAGECLICKBUTTONCLICKEDTYPE
  /** field 2, wire `chats_folder_type` */
  chatsFolderType?: CHATSFOLDERTYPE
  /** field 3, wire `contact_type` */
  contactType?: CONTACTTYPE
  /** field 4, wire `delta_time` */
  deltaTime?: number
  /** field 5, wire `delta_time_received` */
  deltaTimeReceived?: number
  /** field 6, wire `hsm_tag_str` */
  hsmTagStr?: string
  /** field 7, wire `message_type_str` */
  messageTypeStr?: string
  /** field 8, wire `qbm_flag` */
  qbmFlag?: QBMFLAG
  /** field 9, wire `thread_id_hmac` */
  threadIdHmac?: string
  /** field 10, wire `biz_trust_tier` */
  bizTrustTier?: string
  /** field 11, wire `message_id_hmac` */
  messageIdHmac?: string
  /** field 12, wire `thumbnail_type` */
  thumbnailType?: THUMBNAILTYPE
  /** field 13, wire `is_biz_intent` */
  isBizIntent?: boolean
  /** field 14, wire `is_broadcast_message` */
  isBroadcastMessage?: boolean
  /** field 15, wire `is_insub_contact` */
  isInsubContact?: boolean
  /** field 16, wire `ent_source_subplatform` */
  entSourceSubplatform?: string
  /** field 17, wire `decision_id` */
  decisionId?: string
  /** field 18, wire `thread_lid_hmac` */
  threadLidHmac?: string
  /** field 19, wire `is_oba` */
  isOba?: boolean
  /** field 20, wire `button_value_json_array` */
  buttonValueJsonArray?: string
  /** field 21, wire `message_field_json_array` */
  messageFieldJsonArray?: string
  /** field 22, wire `submessage_field_json_array` */
  submessageFieldJsonArray?: string
  /** field 27, wire `body_url_count_int` */
  bodyUrlCountInt?: number
  /** field 28, wire `body_url_unique_count_int` */
  bodyUrlUniqueCountInt?: number
  /** field 29, wire `cta_url_unique_count_int` */
  ctaUrlUniqueCountInt?: number
  /** field 30, wire `url_unique_count_int` */
  urlUniqueCountInt?: number
  /** field 31, wire `is_coex` */
  isCoex?: boolean
  /** field 32, wire `is_through_decision_service` */
  isThroughDecisionService?: boolean
  /** field 33, wire `ias_entry_point` */
  iasEntryPoint?: SIGNUPENTRYPOINT
  /** field 34, wire `ias_optin_ds` */
  iasOptinDs?: string
  /** field 35, wire `is_ias_subscriber` */
  isIasSubscriber?: boolean
  /** field 36, wire `is_from_pill` */
  isFromPill?: boolean
  /** field 37, wire `pill_entry_point` */
  pillEntryPoint?: PILLENTRYPOINT
}