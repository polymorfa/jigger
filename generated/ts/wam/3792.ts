export const WamQbmMessageRead = 3792 as const

export interface QbmMessageReadEvent {
  /** field 1, wire `chats_folder_type` */
  chatsFolderType?: CHATSFOLDERTYPE
  /** field 2, wire `contact_type` */
  contactType?: CONTACTTYPE
  /** field 3, wire `delta_time` */
  deltaTime?: number
  /** field 4, wire `qbm_flag` */
  qbmFlag?: QBMFLAG
  /** field 5, wire `read_source` */
  readSource?: READSOURCE
  /** field 6, wire `message_type_str` */
  messageTypeStr?: string
  /** field 7, wire `thread_id_hmac` */
  threadIdHmac?: string
  /** field 8, wire `delta_time_received` */
  deltaTimeReceived?: number
  /** field 9, wire `hsm_tag_str` */
  hsmTagStr?: string
  /** field 10, wire `is_from_ads_manager_mm` */
  isFromAdsManagerMm?: boolean
  /** field 11, wire `is_from_capi` */
  isFromCapi?: boolean
  /** field 12, wire `read_receipts_enabled` */
  readReceiptsEnabled?: boolean
  /** field 13, wire `message_id_hmac` */
  messageIdHmac?: string
  /** field 14, wire `is_bulk_action` */
  isBulkAction?: boolean
  /** field 15, wire `is_muted` */
  isMuted?: boolean
  /** field 16, wire `message_has_button` */
  messageHasButton?: boolean
  /** field 17, wire `message_has_url` */
  messageHasUrl?: boolean
  /** field 18, wire `api_daily_thread_count7d` */
  apiDailyThreadCount7d?: number
  /** field 19, wire `api_message_count1d` */
  apiMessageCount1d?: number
  /** field 20, wire `api_message_count7d` */
  apiMessageCount7d?: number
  /** field 21, wire `api_unique_thread_count1d` */
  apiUniqueThreadCount1d?: number
  /** field 22, wire `api_unique_thread_count7d` */
  apiUniqueThreadCount7d?: number
  /** field 23, wire `api_total_message_count` */
  apiTotalMessageCount?: number
  /** field 24, wire `api_total_new_thread_count` */
  apiTotalNewThreadCount?: number
  /** field 25, wire `smb_daily_thread_count7d` */
  smbDailyThreadCount7d?: number
  /** field 26, wire `smb_message_count1d` */
  smbMessageCount1d?: number
  /** field 27, wire `smb_message_count7d` */
  smbMessageCount7d?: number
  /** field 28, wire `smb_total_message_count` */
  smbTotalMessageCount?: number
  /** field 29, wire `smb_total_new_thread_count` */
  smbTotalNewThreadCount?: number
  /** field 30, wire `smb_unique_thread_count1d` */
  smbUniqueThreadCount1d?: number
  /** field 31, wire `smb_unique_thread_count7d` */
  smbUniqueThreadCount7d?: number
  /** field 32, wire `thread_creation_time` */
  threadCreationTime?: THREADCREATIONTIME
  /** field 33, wire `thread_dwell_time` */
  threadDwellTime?: number
  /** field 34, wire `biz_trust_tier` */
  bizTrustTier?: string
  /** field 35, wire `is_insub_contact` */
  isInsubContact?: boolean
  /** field 36, wire `thumbnail_type` */
  thumbnailType?: THUMBNAILTYPE
  /** field 37, wire `is_biz_intent` */
  isBizIntent?: boolean
  /** field 38, wire `is_broadcast_message` */
  isBroadcastMessage?: boolean
  /** field 39, wire `ent_source_subplatform` */
  entSourceSubplatform?: string
  /** field 40, wire `decision_id` */
  decisionId?: string
  /** field 41, wire `companion_devices` */
  companionDevices?: number
  /** field 42, wire `thread_lid_hmac` */
  threadLidHmac?: string
  /** field 43, wire `is_oba` */
  isOba?: boolean
  /** field 44, wire `button_value_json_array` */
  buttonValueJsonArray?: string
  /** field 45, wire `message_field_json_array` */
  messageFieldJsonArray?: string
  /** field 46, wire `submessage_field_json_array` */
  submessageFieldJsonArray?: string
  /** field 51, wire `body_url_count_int` */
  bodyUrlCountInt?: number
  /** field 52, wire `body_url_unique_count_int` */
  bodyUrlUniqueCountInt?: number
  /** field 53, wire `cta_url_unique_count_int` */
  ctaUrlUniqueCountInt?: number
  /** field 54, wire `url_unique_count_int` */
  urlUniqueCountInt?: number
  /** field 55, wire `is_coex` */
  isCoex?: boolean
  /** field 56, wire `is_through_decision_service` */
  isThroughDecisionService?: boolean
  /** field 57, wire `ias_entry_point` */
  iasEntryPoint?: SIGNUPENTRYPOINT
  /** field 58, wire `ias_optin_ds` */
  iasOptinDs?: string
  /** field 59, wire `is_ias_subscriber` */
  isIasSubscriber?: boolean
  /** field 60, wire `is_from_pill` */
  isFromPill?: boolean
  /** field 61, wire `pill_entry_point` */
  pillEntryPoint?: PILLENTRYPOINT
}