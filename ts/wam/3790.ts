export const WamQbmIncomingMessage = 3790 as const

export interface QbmIncomingMessageEvent {
  /** field 1, wire `chats_folder_type` */
  chatsFolderType?: CHATSFOLDERTYPE
  /** field 2, wire `contact_type` */
  contactType?: CONTACTTYPE
  /** field 3, wire `keep_chats_archived_enabled` */
  keepChatsArchivedEnabled?: boolean
  /** field 4, wire `muted` */
  muted?: boolean
  /** field 5, wire `notification_enabled` */
  notificationEnabled?: boolean
  /** field 6, wire `qbm_flag` */
  qbmFlag?: QBMFLAG
  /** field 7, wire `message_type_str` */
  messageTypeStr?: string
  /** field 8, wire `thread_id_hmac` */
  threadIdHmac?: string
  /** field 9, wire `read_receipts_enabled` */
  readReceiptsEnabled?: boolean
  /** field 10, wire `companion_devices` */
  companionDevices?: number
  /** field 11, wire `last_outgoing_message_delta_time` */
  lastOutgoingMessageDeltaTime?: number
  /** field 12, wire `qbm_flag_str` */
  qbmFlagStr?: string
  /** field 13, wire `last_outgoing_message_delta_time_received` */
  lastOutgoingMessageDeltaTimeReceived?: number
  /** field 14, wire `hsm_tag_str` */
  hsmTagStr?: string
  /** field 15, wire `is_from_ads_manager_mm` */
  isFromAdsManagerMm?: boolean
  /** field 16, wire `is_from_capi` */
  isFromCapi?: boolean
  /** field 17, wire `message_id_hmac` */
  messageIdHmac?: string
  /** field 18, wire `message_has_button` */
  messageHasButton?: boolean
  /** field 19, wire `message_has_url` */
  messageHasUrl?: boolean
  /** field 20, wire `is_muted` */
  isMuted?: boolean
  /** field 21, wire `api_daily_thread_count7d` */
  apiDailyThreadCount7d?: number
  /** field 22, wire `api_message_count1d` */
  apiMessageCount1d?: number
  /** field 23, wire `api_message_count7d` */
  apiMessageCount7d?: number
  /** field 24, wire `api_unique_thread_count1d` */
  apiUniqueThreadCount1d?: number
  /** field 25, wire `api_unique_thread_count7d` */
  apiUniqueThreadCount7d?: number
  /** field 26, wire `api_total_message_count` */
  apiTotalMessageCount?: number
  /** field 27, wire `api_total_new_thread_count` */
  apiTotalNewThreadCount?: number
  /** field 28, wire `smb_daily_thread_count7d` */
  smbDailyThreadCount7d?: number
  /** field 29, wire `smb_message_count1d` */
  smbMessageCount1d?: number
  /** field 30, wire `smb_message_count7d` */
  smbMessageCount7d?: number
  /** field 31, wire `smb_total_message_count` */
  smbTotalMessageCount?: number
  /** field 32, wire `smb_total_new_thread_count` */
  smbTotalNewThreadCount?: number
  /** field 33, wire `smb_unique_thread_count1d` */
  smbUniqueThreadCount1d?: number
  /** field 34, wire `smb_unique_thread_count7d` */
  smbUniqueThreadCount7d?: number
  /** field 35, wire `thread_creation_time` */
  threadCreationTime?: THREADCREATIONTIME
  /** field 36, wire `biz_trust_tier` */
  bizTrustTier?: string
  /** field 37, wire `is_biz_intent` */
  isBizIntent?: boolean
  /** field 38, wire `is_broadcast_message` */
  isBroadcastMessage?: boolean
  /** field 39, wire `is_insub_contact` */
  isInsubContact?: boolean
  /** field 40, wire `ent_source_subplatform` */
  entSourceSubplatform?: string
  /** field 41, wire `decision_id` */
  decisionId?: string
  /** field 42, wire `thread_lid_hmac` */
  threadLidHmac?: string
  /** field 43, wire `fmx_card_shown` */
  fmxCardShown?: boolean
  /** field 44, wire `is_oba` */
  isOba?: boolean
  /** field 45, wire `button_value_json_array` */
  buttonValueJsonArray?: string
  /** field 46, wire `message_field_json_array` */
  messageFieldJsonArray?: string
  /** field 47, wire `submessage_field_json_array` */
  submessageFieldJsonArray?: string
  /** field 52, wire `body_url_count_int` */
  bodyUrlCountInt?: number
  /** field 53, wire `body_url_unique_count_int` */
  bodyUrlUniqueCountInt?: number
  /** field 54, wire `cta_url_unique_count_int` */
  ctaUrlUniqueCountInt?: number
  /** field 55, wire `url_unique_count_int` */
  urlUniqueCountInt?: number
  /** field 56, wire `is_coex` */
  isCoex?: boolean
  /** field 57, wire `is_through_decision_service` */
  isThroughDecisionService?: boolean
  /** field 58, wire `gap_rules` */
  gapRules?: string
  /** field 59, wire `ge_evaluation_timestamp` */
  geEvaluationTimestamp?: number
  /** field 60, wire `ias_entry_point` */
  iasEntryPoint?: SIGNUPENTRYPOINT
  /** field 61, wire `ias_optin_ds` */
  iasOptinDs?: string
  /** field 62, wire `is_ias_subscriber` */
  isIasSubscriber?: boolean
  /** field 63, wire `is_from_pill` */
  isFromPill?: boolean
  /** field 64, wire `pill_entry_point` */
  pillEntryPoint?: PILLENTRYPOINT
}