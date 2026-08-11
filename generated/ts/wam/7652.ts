export const WamPaidMessageVpvImpression = 7652 as const

export interface PaidMessageVpvImpressionEvent {
  /** field 1, wire `body_url_count_int` */
  bodyUrlCountInt?: number
  /** field 2, wire `body_url_unique_count_int` */
  bodyUrlUniqueCountInt?: number
  /** field 3, wire `button_value_json_array` */
  buttonValueJsonArray?: string
  /** field 4, wire `chats_folder_type` */
  chatsFolderType?: CHATSFOLDERTYPE
  /** field 5, wire `contact_type` */
  contactType?: CONTACTTYPE
  /** field 6, wire `cta_url_unique_count_int` */
  ctaUrlUniqueCountInt?: number
  /** field 7, wire `decision_id` */
  decisionId?: string
  /** field 8, wire `delta_time` */
  deltaTime?: number
  /** field 9, wire `delta_time_received` */
  deltaTimeReceived?: number
  /** field 10, wire `hsm_tag_str` */
  hsmTagStr?: string
  /** field 11, wire `is_biz_intent` */
  isBizIntent?: boolean
  /** field 12, wire `is_broadcast_message` */
  isBroadcastMessage?: boolean
  /** field 13, wire `is_insub_contact` */
  isInsubContact?: boolean
  /** field 14, wire `is_muted` */
  isMuted?: boolean
  /** field 15, wire `message_field_json_array` */
  messageFieldJsonArray?: string
  /** field 16, wire `message_id_hmac` */
  messageIdHmac?: string
  /** field 17, wire `qbm_flag` */
  qbmFlag?: QBMFLAG
  /** field 18, wire `read_receipts_enabled` */
  readReceiptsEnabled?: boolean
  /** field 19, wire `submessage_field_json_array` */
  submessageFieldJsonArray?: string
  /** field 20, wire `thread_id_hmac` */
  threadIdHmac?: string
  /** field 21, wire `unified_session_id` */
  unifiedSessionId?: string
  /** field 22, wire `url_unique_count_int` */
  urlUniqueCountInt?: number
  /** field 23, wire `vpv_dwell_time_ms` */
  vpvDwellTimeMs?: number
  /** field 24, wire `vpv_json_object` */
  vpvJsonObject?: string
  /** field 25, wire `message_body_type` */
  messageBodyType?: MESSAGEBODYTYPEENUM
  /** field 26, wire `mm_carousel_card_index` */
  mmCarouselCardIndex?: number
  /** field 27, wire `message_bubble_height_px` */
  messageBubbleHeightPx?: number
  /** field 28, wire `message_bubble_width_px` */
  messageBubbleWidthPx?: number
}