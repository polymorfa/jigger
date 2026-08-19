export const WamPaidMessagingUserInteractionsLogger = 4740 as const

export interface PaidMessagingUserInteractionsLoggerEvent {
  /** field 1, wire `pmx_action_target` */
  pmxActionTarget?: PAIDMESSAGINGUSERINTERACTIONSACTIONTARGET
  /** field 2, wire `pmx_action_type` */
  pmxActionType?: PAIDMESSAGINGUSERINTERACTIONSACTIONTYPE
  /** field 3, wire `pmx_component_type` */
  pmxComponentType?: PAIDMESSAGINGUSERINTERACTIONSCOMPONENTTYPE
  /** field 4, wire `pmx_header_media_type` */
  pmxHeaderMediaType?: PAIDMESSAGINGUSERINTERACTIONSHEADERMEDIATYPE
  /** field 5, wire `pmx_marketing_format` */
  pmxMarketingFormat?: PAIDMESSAGINGUSERINTERACTIONSMARKETINGFORMAT
  /** field 6, wire `pmx_query_params` */
  pmxQueryParams?: string
  /** field 7, wire `template_id` */
  templateId?: string
  /** field 8, wire `pmx_host_storage` */
  pmxHostStorage?: PAIDMESSAGINGUSERINTERACTIONSHOSTSTORAGE
  /** field 9, wire `pmx_sender_country_code` */
  pmxSenderCountryCode?: string
  /** field 10, wire `pmx_message_delivered_ts` */
  pmxMessageDeliveredTs?: number
  /** field 11, wire `pmx_hashed_message_key` */
  pmxHashedMessageKey?: number
  /** field 12, wire `pmx_message_stanza_accepted_ts` */
  pmxMessageStanzaAcceptedTs?: number
  /** field 13, wire `pmx_hashed_message_id` */
  pmxHashedMessageId?: string
  /** field 14, wire `pmx_carousel_card_index` */
  pmxCarouselCardIndex?: number
  /** field 15, wire `pmx_tap_target_type` */
  pmxTapTargetType?: TAPTARGETTYPE
  /** field 16, wire `pmx_text_truncation_limit` */
  pmxTextTruncationLimit?: number
  /** field 17, wire `message_bubble_height_px` */
  messageBubbleHeightPx?: number
  /** field 18, wire `message_bubble_width_px` */
  messageBubbleWidthPx?: number
  /** field 19, wire `message_expand_state` */
  messageExpandState?: PAIDMESSAGINGUSERINTERACTIONSMESSAGEEXPANDSTATE
}