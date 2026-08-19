export const WamThreadInteractionDataBiz = 6464 as const

export interface ThreadInteractionDataBizEvent {
  /** field 1, wire `away_msgs_sent` */
  awayMsgsSent?: number
  /** field 2, wire `biz_catalog_type` */
  bizCatalogType?: BIZCATALOGTYPE
  /** field 3, wire `biz_conversation_depth` */
  bizConversationDepth?: number
  /** field 4, wire `cart_views` */
  cartViews?: number
  /** field 5, wire `chat_origins` */
  chatOrigins?: CHATORIGINSTYPE
  /** field 6, wire `collection_inquiries_sent` */
  collectionInquiriesSent?: number
  /** field 7, wire `commerce_msgs_received` */
  commerceMsgsReceived?: number
  /** field 8, wire `commerce_msgs_sent` */
  commerceMsgsSent?: number
  /** field 9, wire `entry_point_conversion_app` */
  entryPointConversionApp?: string
  /** field 10, wire `entry_point_conversion_source` */
  entryPointConversionSource?: string
  /** field 11, wire `first_response_time` */
  firstResponseTime?: number
  /** field 13, wire `group_contains_biz` */
  groupContainsBiz?: boolean
  /** field 14, wire `is_commerce_viewed` */
  isCommerceViewed?: boolean
  /** field 15, wire `is_cta_on_pdp_clicked` */
  isCtaOnPdpClicked?: boolean
  /** field 16, wire `is_labelled` */
  isLabelled?: boolean
  /** field 17, wire `is_user1p_biz_bot_chat` */
  isUser1pBizBotChat?: boolean
  /** field 18, wire `is_user3p_bot_chat` */
  isUser3pBotChat?: boolean
  /** field 19, wire `is_user_agent` */
  isUserAgent?: boolean
  /** field 20, wire `is_user_created_agent` */
  isUserCreatedAgent?: boolean
  /** field 21, wire `labelled_msgs` */
  labelledMsgs?: number
  /** field 22, wire `opposite_party_has_business_intent` */
  oppositePartyHasBusinessIntent?: boolean
  /** field 23, wire `orders_sent` */
  ordersSent?: number
  /** field 24, wire `pdp_inquiries_sent` */
  pdpInquiriesSent?: number
  /** field 25, wire `pdp_views` */
  pdpViews?: number
  /** field 26, wire `quick_replies_sent` */
  quickRepliesSent?: number
  /** field 27, wire `smb_marketing_messages_reactions_sent` */
  smbMarketingMessagesReactionsSent?: number
  /** field 28, wire `smb_marketing_messages_replies_sent` */
  smbMarketingMessagesRepliesSent?: number
  /** field 29, wire `smb_marketing_messages_spam_reports` */
  smbMarketingMessagesSpamReports?: number
  /** field 30, wire `smb_marketing_msgs_received` */
  smbMarketingMsgsReceived?: number
  /** field 31, wire `smb_marketing_msgs_sent` */
  smbMarketingMsgsSent?: number
  /** field 32, wire `thread_ds` */
  threadDs?: string
  /** field 33, wire `thread_id` */
  threadId?: string
  /** field 35, wire `user_has_business_intent` */
  userHasBusinessIntent?: boolean
  /** field 36, wire `is_opposite_party_initiated` */
  isOppositePartyInitiated?: boolean
  /** field 37, wire `locations_sent` */
  locationsSent?: number
  /** field 38, wire `thread_id_by_lid` */
  threadIdByLid?: string
  /** field 39, wire `thread_creation_date` */
  threadCreationDate?: string
  /** field 40, wire `opposite_party_has_badge` */
  oppositePartyHasBadge?: boolean
  /** field 41, wire `fmx_not_mv_bottom_sheet_dismissed_count` */
  fmxNotMvBottomSheetDismissedCount?: number
  /** field 42, wire `fmx_not_mv_bottom_sheet_get_mv_button_clicks` */
  fmxNotMvBottomSheetGetMvButtonClicks?: number
  /** field 43, wire `fmx_not_mv_bottom_sheet_get_mv_button_impressions` */
  fmxNotMvBottomSheetGetMvButtonImpressions?: number
  /** field 44, wire `fmx_not_mv_bottom_sheet_impressions` */
  fmxNotMvBottomSheetImpressions?: number
  /** field 45, wire `fmx_not_mv_bottom_sheet_learn_more_button_clicks` */
  fmxNotMvBottomSheetLearnMoreButtonClicks?: number
  /** field 46, wire `fmx_not_mv_clicks` */
  fmxNotMvClicks?: number
  /** field 47, wire `is_biz_mv_friction_eligible` */
  isBizMvFrictionEligible?: boolean
  /** field 48, wire `not_mv_impressions` */
  notMvImpressions?: number
  /** field 49, wire `matched_messages_marked_as_read_with_delta_time` */
  matchedMessagesMarkedAsReadWithDeltaTime?: string
  /** field 50, wire `matched_messages_read_with_delta_time` */
  matchedMessagesReadWithDeltaTime?: string
  /** field 51, wire `auto_reply_from_icebreaker_sent` */
  autoReplyFromIcebreakerSent?: number
  /** field 52, wire `biz_ai_suggested_replies_seen` */
  bizAiSuggestedRepliesSeen?: number
  /** field 53, wire `biz_ai_suggested_replies_sent_with_edits` */
  bizAiSuggestedRepliesSentWithEdits?: number
  /** field 54, wire `biz_ai_suggested_replies_sent_without_edits` */
  bizAiSuggestedRepliesSentWithoutEdits?: number
}