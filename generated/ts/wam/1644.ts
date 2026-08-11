export const WamChatMessageCounts = 1644 as const

export interface ChatMessageCountsEvent {
  /** field 2, wire `chat_type_ind` */
  chatTypeInd?: CHATTYPE
  /** field 3, wire `messages_sent` */
  messagesSent?: number
  /** field 4, wire `messages_received` */
  messagesReceived?: number
  /** field 5, wire `is_a_group` */
  isAGroup?: boolean
  /** field 6, wire `is_a_contact` */
  isAContact?: boolean
  /** field 7, wire `start_time` */
  startTime?: number
  /** field 8, wire `chat_muted` */
  chatMuted?: CHATMUTEDTYPE
  /** field 9, wire `is_pinned` */
  isPinned?: boolean
  /** field 10, wire `is_archived` */
  isArchived?: boolean
  /** field 11, wire `messages_unread` */
  messagesUnread?: number
  /** field 12, wire `messages_starred` */
  messagesStarred?: number
  /** field 13, wire `ephemeral_messages_sent` */
  ephemeralMessagesSent?: number
  /** field 14, wire `ephemeral_messages_received` */
  ephemeralMessagesReceived?: number
  /** field 15, wire `chat_ephemerality_duration` */
  chatEphemeralityDuration?: number
  /** field 16, wire `view_once_messages_sent` */
  viewOnceMessagesSent?: number
  /** field 17, wire `view_once_messages_received` */
  viewOnceMessagesReceived?: number
  /** field 18, wire `view_once_messages_opened` */
  viewOnceMessagesOpened?: number
  /** field 19, wire `group_size` */
  groupSize?: number
  /** field 20, wire `sender_default_disappearing_duration` */
  senderDefaultDisappearingDuration?: number
  /** field 21, wire `receiver_default_disappearing_duration` */
  receiverDefaultDisappearingDuration?: number
  /** field 22, wire `ga_status` */
  gaStatus?: GASTATUS
  /** field 25, wire `first_response_time` */
  firstResponseTime?: number
  /** field 26, wire `call_offers_sent` */
  callOffersSent?: number
  /** field 27, wire `call_offers_received` */
  callOffersReceived?: number
  /** field 28, wire `total_call_duration` */
  totalCallDuration?: number
  /** field 29, wire `broadcast_msgs_sent` */
  broadcastMsgsSent?: number
  /** field 30, wire `broadcast_msgs_received` */
  broadcastMsgsReceived?: number
  /** field 31, wire `spam_reports` */
  spamReports?: number
  /** field 32, wire `is_blocked` */
  isBlocked?: boolean
  /** field 33, wire `block_reason` */
  blockReason?: BLOCKREASON
  /** field 35, wire `is_commerce_viewed` */
  isCommerceViewed?: boolean
  /** field 36, wire `is_cart_add_clicked` */
  isCartAddClicked?: boolean
  /** field 37, wire `is_cta_on_pdp_clicked` */
  isCtaOnPdpClicked?: boolean
  /** field 38, wire `orders_sent` */
  ordersSent?: number
  /** field 39, wire `payments_sent` */
  paymentsSent?: number
  /** field 40, wire `commerce_msgs_sent` */
  commerceMsgsSent?: number
  /** field 41, wire `commerce_msgs_received` */
  commerceMsgsReceived?: number
  /** field 42, wire `pdp_inquiries_sent` */
  pdpInquiriesSent?: number
  /** field 43, wire `storefront_inquiries_sent` */
  storefrontInquiriesSent?: number
  /** field 44, wire `collection_inquiries_sent` */
  collectionInquiriesSent?: number
  /** field 45, wire `fb_cta_inquiries_sent` */
  fbCtaInquiriesSent?: number
  /** field 46, wire `entry_point_conversion_source` */
  entryPointConversionSource?: string
  /** field 47, wire `entry_point_conversion_app` */
  entryPointConversionApp?: string
  /** field 49, wire `status_views` */
  statusViews?: number
  /** field 50, wire `status_replies` */
  statusReplies?: number
  /** field 51, wire `group_membership_replies` */
  groupMembershipReplies?: number
  /** field 52, wire `group_private_replies` */
  groupPrivateReplies?: number
  /** field 54, wire `is_labelled` */
  isLabelled?: boolean
  /** field 55, wire `labelled_msgs` */
  labelledMsgs?: number
  /** field 56, wire `away_msgs_sent` */
  awayMsgsSent?: number
  /** field 57, wire `greeting_msgs_sent` */
  greetingMsgsSent?: number
  /** field 58, wire `quick_replies_sent` */
  quickRepliesSent?: number
  /** field 59, wire `disappearing_chat_initiator` */
  disappearingChatInitiator?: DISAPPEARINGCHATINITIATORTYPE
  /** field 60, wire `biz_catalog_type` */
  bizCatalogType?: BIZCATALOGTYPE
  /** field 61, wire `pdp_views` */
  pdpViews?: number
  /** field 62, wire `is_opposite_party_initiated` */
  isOppositePartyInitiated?: boolean
  /** field 63, wire `profile_views` */
  profileViews?: number
  /** field 64, wire `profile_replies` */
  profileReplies?: number
  /** field 65, wire `biz_conversation_depth` */
  bizConversationDepth?: number
  /** field 66, wire `thread_ds` */
  threadDs?: string
  /** field 67, wire `thread_id` */
  threadId?: string
  /** field 68, wire `new_thread` */
  newThread?: boolean
  /** field 69, wire `ephemeral_messages_unread_expired` */
  ephemeralMessagesUnreadExpired?: number
  /** field 70, wire `calls_result_busy` */
  callsResultBusy?: number
  /** field 71, wire `calls_result_cancelled` */
  callsResultCancelled?: number
  /** field 72, wire `calls_result_connected` */
  callsResultConnected?: number
  /** field 73, wire `calls_result_missed` */
  callsResultMissed?: number
  /** field 74, wire `calls_result_rejected` */
  callsResultRejected?: number
  /** field 75, wire `group_contains_biz` */
  groupContainsBiz?: boolean
  /** field 76, wire `video_calls_offered` */
  videoCallsOffered?: number
  /** field 77, wire `voice_calls_offered` */
  voiceCallsOffered?: number
  /** field 78, wire `calls_result_error` */
  callsResultError?: number
  /** field 79, wire `chat_overflow_clicks` */
  chatOverflowClicks?: number
  /** field 80, wire `replies_sent` */
  repliesSent?: number
  /** field 81, wire `is_wa_pay_registered` */
  isWaPayRegistered?: boolean
  /** field 82, wire `od_received` */
  odReceived?: number
  /** field 83, wire `p2m_od_nnp_transactions_sent` */
  p2mOdNnpTransactionsSent?: number
  /** field 84, wire `p2m_od_np_transactions_sent` */
  p2mOdNpTransactionsSent?: number
  /** field 85, wire `type_of_group` */
  typeOfGroup?: TYPEOFGROUPENUM
  /** field 86, wire `cart_views` */
  cartViews?: number
  /** field 87, wire `group_info_setting` */
  groupInfoSetting?: GROUPINFOSETTINGTYPE
  /** field 88, wire `can_edit_dm_settings` */
  canEditDmSettings?: boolean
  /** field 89, wire `forward_messages_received` */
  forwardMessagesReceived?: number
  /** field 90, wire `forward_messages_sent` */
  forwardMessagesSent?: number
  /** field 91, wire `is_message_yourself` */
  isMessageYourself?: boolean
  /** field 92, wire `is_pnh_enabled_chat` */
  isPnhEnabledChat?: boolean
  /** field 93, wire `requested_phone_number` */
  requestedPhoneNumber?: boolean
  /** field 94, wire `seen_masked_phone_number` */
  seenMaskedPhoneNumber?: boolean
  /** field 96, wire `locations_sent` */
  locationsSent?: number
  /** field 97, wire `reactions_received` */
  reactionsReceived?: number
  /** field 98, wire `reactions_sent` */
  reactionsSent?: number
  /** field 99, wire `shared_phone_number` */
  sharedPhoneNumber?: boolean
  /** field 100, wire `edited_msgs_sent` */
  editedMsgsSent?: number
  /** field 101, wire `smb_marketing_messages_reactions_sent` */
  smbMarketingMessagesReactionsSent?: number
  /** field 102, wire `smb_marketing_messages_replies_sent` */
  smbMarketingMessagesRepliesSent?: number
  /** field 103, wire `smb_marketing_messages_spam_reports` */
  smbMarketingMessagesSpamReports?: number
  /** field 104, wire `smb_marketing_msgs_received` */
  smbMarketingMsgsReceived?: number
  /** field 105, wire `smb_marketing_msgs_sent` */
  smbMarketingMsgsSent?: number
  /** field 106, wire `is_invite_created_thread` */
  isInviteCreatedThread?: boolean
  /** field 107, wire `via_contactless_chats` */
  viaContactlessChats?: boolean
  /** field 108, wire `is_auto_muted` */
  isAutoMuted?: boolean
  /** field 109, wire `ephemerality_initiator` */
  ephemeralityInitiator?: EPHEMERALITYINITIATORTYPE
  /** field 110, wire `ephemerality_trigger_action` */
  ephemeralityTriggerAction?: EPHEMERALITYTRIGGERACTIONTYPE
  /** field 111, wire `is_user_agent` */
  isUserAgent?: boolean
  /** field 112, wire `total_message_edits_from_agent_cnt` */
  totalMessageEditsFromAgentCnt?: number
  /** field 113, wire `total_message_from_agent_cnt` */
  totalMessageFromAgentCnt?: number
  /** field 114, wire `total_message_to_agent_cnt` */
  totalMessageToAgentCnt?: number
  /** field 115, wire `poll_creation_messages_received` */
  pollCreationMessagesReceived?: number
  /** field 116, wire `poll_creation_messages_sent` */
  pollCreationMessagesSent?: number
  /** field 117, wire `poll_update_messages_received` */
  pollUpdateMessagesReceived?: number
  /** field 118, wire `poll_update_messages_sent` */
  pollUpdateMessagesSent?: number
  /** field 119, wire `ptt_messages_received` */
  pttMessagesReceived?: number
  /** field 120, wire `ptt_messages_sent` */
  pttMessagesSent?: number
  /** field 121, wire `ptv_messages_received` */
  ptvMessagesReceived?: number
  /** field 122, wire `ptv_messages_sent` */
  ptvMessagesSent?: number
  /** field 123, wire `is_user_created_agent` */
  isUserCreatedAgent?: boolean
  /** field 124, wire `text_messages_to_user_created_agent_cnt` */
  textMessagesToUserCreatedAgentCnt?: number
  /** field 125, wire `total_messages_to_user_created_agent_cnt` */
  totalMessagesToUserCreatedAgentCnt?: number
  /** field 126, wire `comments_received` */
  commentsReceived?: number
  /** field 127, wire `messages_read` */
  messagesRead?: number
  /** field 128, wire `forward_photo_messages_received` */
  forwardPhotoMessagesReceived?: number
  /** field 129, wire `forward_photo_messages_sent` */
  forwardPhotoMessagesSent?: number
  /** field 130, wire `forward_text_messages_received` */
  forwardTextMessagesReceived?: number
  /** field 131, wire `forward_text_messages_sent` */
  forwardTextMessagesSent?: number
  /** field 132, wire `forward_url_messages_received` */
  forwardUrlMessagesReceived?: number
  /** field 133, wire `forward_url_messages_sent` */
  forwardUrlMessagesSent?: number
  /** field 134, wire `photo_messages_received` */
  photoMessagesReceived?: number
  /** field 135, wire `photo_messages_sent` */
  photoMessagesSent?: number
  /** field 136, wire `text_messages_received` */
  textMessagesReceived?: number
  /** field 137, wire `text_messages_sent` */
  textMessagesSent?: number
  /** field 138, wire `url_messages_received` */
  urlMessagesReceived?: number
  /** field 139, wire `url_messages_sent` */
  urlMessagesSent?: number
  /** field 140, wire `is_user3p_bot_chat` */
  isUser3pBotChat?: boolean
  /** field 141, wire `is_user1p_biz_bot_chat` */
  isUser1pBizBotChat?: boolean
  /** field 142, wire `event_creation_messages_received` */
  eventCreationMessagesReceived?: number
  /** field 143, wire `event_creation_messages_sent` */
  eventCreationMessagesSent?: number
  /** field 144, wire `event_response_messages_received` */
  eventResponseMessagesReceived?: number
  /** field 145, wire `event_response_messages_sent` */
  eventResponseMessagesSent?: number
  /** field 146, wire `imagine_mention_click` */
  imagineMentionClick?: number
  /** field 147, wire `meta_ai_mention_click` */
  metaAiMentionClick?: number
  /** field 148, wire `meta_ai_mention_show` */
  metaAiMentionShow?: number
  /** field 149, wire `audio_messages_received` */
  audioMessagesReceived?: number
  /** field 150, wire `audio_messages_sent` */
  audioMessagesSent?: number
  /** field 151, wire `document_messages_received` */
  documentMessagesReceived?: number
  /** field 152, wire `document_messages_sent` */
  documentMessagesSent?: number
  /** field 153, wire `forward_audio_messages_received` */
  forwardAudioMessagesReceived?: number
  /** field 154, wire `forward_audio_messages_sent` */
  forwardAudioMessagesSent?: number
  /** field 155, wire `forward_document_messages_received` */
  forwardDocumentMessagesReceived?: number
  /** field 156, wire `forward_document_messages_sent` */
  forwardDocumentMessagesSent?: number
  /** field 157, wire `forward_gif_messages_received` */
  forwardGifMessagesReceived?: number
  /** field 158, wire `forward_gif_messages_sent` */
  forwardGifMessagesSent?: number
  /** field 159, wire `forward_ptv_messages_received` */
  forwardPtvMessagesReceived?: number
  /** field 160, wire `forward_ptv_messages_sent` */
  forwardPtvMessagesSent?: number
  /** field 161, wire `forward_status_reply_messages_received` */
  forwardStatusReplyMessagesReceived?: number
  /** field 162, wire `forward_status_reply_messages_sent` */
  forwardStatusReplyMessagesSent?: number
  /** field 163, wire `forward_sticker_messages_received` */
  forwardStickerMessagesReceived?: number
  /** field 164, wire `forward_sticker_messages_sent` */
  forwardStickerMessagesSent?: number
  /** field 165, wire `forward_video_messages_received` */
  forwardVideoMessagesReceived?: number
  /** field 166, wire `forward_video_messages_sent` */
  forwardVideoMessagesSent?: number
  /** field 167, wire `gif_messages_received` */
  gifMessagesReceived?: number
  /** field 168, wire `gif_messages_sent` */
  gifMessagesSent?: number
  /** field 169, wire `status_reply_messages_received` */
  statusReplyMessagesReceived?: number
  /** field 170, wire `sticker_messages_received` */
  stickerMessagesReceived?: number
  /** field 171, wire `sticker_messages_sent` */
  stickerMessagesSent?: number
  /** field 172, wire `video_messages_received` */
  videoMessagesReceived?: number
  /** field 173, wire `video_messages_sent` */
  videoMessagesSent?: number
  /** field 174, wire `command_sheet_show` */
  commandSheetShow?: number
  /** field 175, wire `imagine_command_click` */
  imagineCommandClick?: number
  /** field 176, wire `imagine_mention_show` */
  imagineMentionShow?: number
  /** field 177, wire `suggestion_prompts_click` */
  suggestionPromptsClick?: number
  /** field 178, wire `suggestion_prompts_show` */
  suggestionPromptsShow?: number
  /** field 179, wire `chat_origins` */
  chatOrigins?: CHATORIGINSTYPE
  /** field 180, wire `has_username` */
  hasUsername?: boolean
  /** field 181, wire `opposite_visible_identification` */
  oppositeVisibleIdentification?: OPPOSITEVISIBLEIDENTIFICATIONTYPE
  /** field 185, wire `is_deleted` */
  isDeleted?: boolean
  /** field 186, wire `is_reported` */
  isReported?: boolean
  /** field 189, wire `thread_creation_date` */
  threadCreationDate?: string
  /** field 190, wire `auto_reply_from_icebreaker_sent` */
  autoReplyFromIcebreakerSent?: number
  /** field 191, wire `status_reactions_received` */
  statusReactionsReceived?: number
  /** field 192, wire `status_reactions_sent` */
  statusReactionsSent?: number
  /** field 193, wire `marked_read_cnt` */
  markedReadCnt?: number
  /** field 194, wire `marked_read_message_cnt` */
  markedReadMessageCnt?: number
  /** field 195, wire `ai_discovery_tab` */
  aiDiscoveryTab?: string
  /** field 196, wire `bottom_sheet_forward_messages_sent` */
  bottomSheetForwardMessagesSent?: number
  /** field 197, wire `bottom_sheet_images_generated` */
  bottomSheetImagesGenerated?: number
  /** field 198, wire `bottom_sheet_messages_downloaded` */
  bottomSheetMessagesDownloaded?: number
  /** field 199, wire `bottom_sheet_messages_received` */
  bottomSheetMessagesReceived?: number
  /** field 200, wire `bottom_sheet_messages_sent` */
  bottomSheetMessagesSent?: number
  /** field 201, wire `bottom_sheet_prompts_initiated` */
  bottomSheetPromptsInitiated?: number
  /** field 202, wire `imagine_me_messages_sent` */
  imagineMeMessagesSent?: number
  /** field 203, wire `imagine_me_prompts_initiated_count` */
  imagineMePromptsInitiatedCount?: number
  /** field 204, wire `opposite_party_has_business_intent` */
  oppositePartyHasBusinessIntent?: boolean
  /** field 205, wire `user_has_business_intent` */
  userHasBusinessIntent?: boolean
  /** field 206, wire `bottom_sheet_animated_sent` */
  bottomSheetAnimatedSent?: number
  /** field 207, wire `bottom_sheet_edited_animated_sent` */
  bottomSheetEditedAnimatedSent?: number
  /** field 208, wire `bottom_sheet_edited_sent` */
  bottomSheetEditedSent?: number
  /** field 209, wire `bottom_sheet_images_edited` */
  bottomSheetImagesEdited?: number
  /** field 210, wire `bottom_sheet_regenerated_sent` */
  bottomSheetRegeneratedSent?: number
  /** field 211, wire `is_meta_ai_assistant` */
  isMetaAiAssistant?: boolean
  /** field 213, wire `is_a_contact_at_thread_creation` */
  isAContactAtThreadCreation?: boolean
  /** field 214, wire `google_search_click` */
  googleSearchClick?: number
  /** field 215, wire `google_search_show` */
  googleSearchShow?: number
  /** field 216, wire `has_replied1_on1` */
  hasReplied1On1?: boolean
  /** field 217, wire `opposite_party_has_profile_photo` */
  oppositePartyHasProfilePhoto?: boolean
  /** field 218, wire `shares_common_group` */
  sharesCommonGroup?: boolean
  /** field 219, wire `device_language` */
  deviceLanguage?: string
  /** field 220, wire `bottom_sheet_memu_images_generated` */
  bottomSheetMemuImagesGenerated?: number
  /** field 221, wire `bottom_sheet_memu_initiated` */
  bottomSheetMemuInitiated?: number
  /** field 222, wire `bottom_sheet_memu_messages_sent` */
  bottomSheetMemuMessagesSent?: number
  /** field 223, wire `thread_id_monthly` */
  threadIdMonthly?: string
  /** field 224, wire `ai_chat_origins` */
  aiChatOrigins?: AICHATORIGINSTYPE
  /** field 225, wire `group_limit_sharing_on_cnt` */
  groupLimitSharingOnCnt?: number
  /** field 226, wire `limit_sharing_option` */
  limitSharingOption?: boolean
  /** field 227, wire `opposite_party_limit_sharing_option` */
  oppositePartyLimitSharingOption?: boolean
  /** field 228, wire `has_username_pin` */
  hasUsernamePin?: boolean
  /** field 229, wire `fmx_not_mv_clicks` */
  fmxNotMvClicks?: number
  /** field 230, wire `is_biz_mv_friction_eligible` */
  isBizMvFrictionEligible?: boolean
  /** field 231, wire `not_mv_impressions` */
  notMvImpressions?: number
  /** field 234, wire `fmx_not_mv_bottom_sheet_dismissed_count` */
  fmxNotMvBottomSheetDismissedCount?: number
  /** field 235, wire `fmx_not_mv_bottom_sheet_get_mv_button_clicks` */
  fmxNotMvBottomSheetGetMvButtonClicks?: number
  /** field 236, wire `fmx_not_mv_bottom_sheet_get_mv_button_impressions` */
  fmxNotMvBottomSheetGetMvButtonImpressions?: number
  /** field 237, wire `fmx_not_mv_bottom_sheet_impressions` */
  fmxNotMvBottomSheetImpressions?: number
  /** field 238, wire `fmx_not_mv_bottom_sheet_learn_more_button_clicks` */
  fmxNotMvBottomSheetLearnMoreButtonClicks?: number
  /** field 240, wire `opposite_party_has_badge` */
  oppositePartyHasBadge?: boolean
  /** field 245, wire `messages_received_with_enabled_read_receipt` */
  messagesReceivedWithEnabledReadReceipt?: number
  /** field 246, wire `matched_messages_marked_as_read_with_delta_time` */
  matchedMessagesMarkedAsReadWithDeltaTime?: string
  /** field 247, wire `matched_messages_read_with_delta_time` */
  matchedMessagesReadWithDeltaTime?: string
  /** field 248, wire `ephemeral_messages_expired` */
  ephemeralMessagesExpired?: number
  /** field 249, wire `group_status_likes_others_to_others` */
  groupStatusLikesOthersToOthers?: number
  /** field 250, wire `group_status_likes_others_to_own` */
  groupStatusLikesOthersToOwn?: number
  /** field 251, wire `group_status_likes_own_to_others` */
  groupStatusLikesOwnToOthers?: number
  /** field 252, wire `group_status_likes_own_to_own` */
  groupStatusLikesOwnToOwn?: number
  /** field 253, wire `group_status_replies_others_to_others` */
  groupStatusRepliesOthersToOthers?: number
  /** field 254, wire `group_status_replies_others_to_own` */
  groupStatusRepliesOthersToOwn?: number
  /** field 255, wire `group_status_replies_own_to_others` */
  groupStatusRepliesOwnToOthers?: number
  /** field 256, wire `group_status_replies_own_to_own` */
  groupStatusRepliesOwnToOwn?: number
  /** field 257, wire `is_guest_thread` */
  isGuestThread?: boolean
  /** field 258, wire `is_username_thread` */
  isUsernameThread?: boolean
  /** field 259, wire `is_username_thread_at_creation` */
  isUsernameThreadAtCreation?: boolean
  /** field 260, wire `is_managed_account` */
  isManagedAccount?: boolean
  /** field 261, wire `is_new_managed_account_em_ignored` */
  isNewManagedAccountEmIgnored?: boolean
  /** field 262, wire `tombstone_ephemeral_messages_received` */
  tombstoneEphemeralMessagesReceived?: number
  /** field 263, wire `tombstone_view_once_messages_received` */
  tombstoneViewOnceMessagesReceived?: number
  /** field 264, wire `tombstone_ai_futureproofed_messages_received` */
  tombstoneAiFutureproofedMessagesReceived?: number
}