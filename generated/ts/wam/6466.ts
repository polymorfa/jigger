export const WamThreadInteractionDataCoreConsumer = 6466 as const

export interface ThreadInteractionDataCoreConsumerEvent {
  /** field 1, wire `audio_messages_received` */
  audioMessagesReceived?: number
  /** field 2, wire `audio_messages_sent` */
  audioMessagesSent?: number
  /** field 3, wire `broadcast_msgs_received` */
  broadcastMsgsReceived?: number
  /** field 4, wire `broadcast_msgs_sent` */
  broadcastMsgsSent?: number
  /** field 6, wire `chat_ephemerality_duration` */
  chatEphemeralityDuration?: number
  /** field 7, wire `chat_muted` */
  chatMuted?: CHATMUTEDTYPE
  /** field 8, wire `chat_overflow_clicks` */
  chatOverflowClicks?: number
  /** field 9, wire `chat_type_ind` */
  chatTypeInd?: CHATTYPE
  /** field 10, wire `comments_received` */
  commentsReceived?: number
  /** field 13, wire `document_messages_received` */
  documentMessagesReceived?: number
  /** field 14, wire `document_messages_sent` */
  documentMessagesSent?: number
  /** field 15, wire `edited_msgs_sent` */
  editedMsgsSent?: number
  /** field 16, wire `ephemeral_messages_received` */
  ephemeralMessagesReceived?: number
  /** field 17, wire `ephemeral_messages_sent` */
  ephemeralMessagesSent?: number
  /** field 18, wire `ephemeral_messages_unread_expired` */
  ephemeralMessagesUnreadExpired?: number
  /** field 21, wire `event_creation_messages_received` */
  eventCreationMessagesReceived?: number
  /** field 22, wire `event_creation_messages_sent` */
  eventCreationMessagesSent?: number
  /** field 23, wire `event_response_messages_received` */
  eventResponseMessagesReceived?: number
  /** field 24, wire `event_response_messages_sent` */
  eventResponseMessagesSent?: number
  /** field 25, wire `forward_audio_messages_received` */
  forwardAudioMessagesReceived?: number
  /** field 26, wire `forward_audio_messages_sent` */
  forwardAudioMessagesSent?: number
  /** field 27, wire `forward_document_messages_received` */
  forwardDocumentMessagesReceived?: number
  /** field 28, wire `forward_document_messages_sent` */
  forwardDocumentMessagesSent?: number
  /** field 29, wire `forward_gif_messages_received` */
  forwardGifMessagesReceived?: number
  /** field 30, wire `forward_gif_messages_sent` */
  forwardGifMessagesSent?: number
  /** field 31, wire `forward_messages_received` */
  forwardMessagesReceived?: number
  /** field 32, wire `forward_messages_sent` */
  forwardMessagesSent?: number
  /** field 33, wire `forward_photo_messages_received` */
  forwardPhotoMessagesReceived?: number
  /** field 34, wire `forward_photo_messages_sent` */
  forwardPhotoMessagesSent?: number
  /** field 35, wire `forward_sticker_messages_received` */
  forwardStickerMessagesReceived?: number
  /** field 36, wire `forward_sticker_messages_sent` */
  forwardStickerMessagesSent?: number
  /** field 37, wire `forward_text_messages_received` */
  forwardTextMessagesReceived?: number
  /** field 38, wire `forward_text_messages_sent` */
  forwardTextMessagesSent?: number
  /** field 39, wire `forward_url_messages_received` */
  forwardUrlMessagesReceived?: number
  /** field 40, wire `forward_url_messages_sent` */
  forwardUrlMessagesSent?: number
  /** field 41, wire `forward_video_messages_received` */
  forwardVideoMessagesReceived?: number
  /** field 42, wire `forward_video_messages_sent` */
  forwardVideoMessagesSent?: number
  /** field 43, wire `ga_status` */
  gaStatus?: GASTATUS
  /** field 44, wire `gif_messages_received` */
  gifMessagesReceived?: number
  /** field 45, wire `gif_messages_sent` */
  gifMessagesSent?: number
  /** field 47, wire `group_membership_replies` */
  groupMembershipReplies?: number
  /** field 48, wire `group_private_replies` */
  groupPrivateReplies?: number
  /** field 49, wire `group_size` */
  groupSize?: number
  /** field 50, wire `has_username` */
  hasUsername?: boolean
  /** field 51, wire `has_username_pin` */
  hasUsernamePin?: boolean
  /** field 52, wire `is_a_contact` */
  isAContact?: boolean
  /** field 53, wire `is_a_contact_at_thread_creation` */
  isAContactAtThreadCreation?: boolean
  /** field 54, wire `is_a_group` */
  isAGroup?: boolean
  /** field 55, wire `is_archived` */
  isArchived?: boolean
  /** field 57, wire `is_deleted` */
  isDeleted?: boolean
  /** field 58, wire `is_invite_created_thread` */
  isInviteCreatedThread?: boolean
  /** field 59, wire `is_meta_ai_assistant` */
  isMetaAiAssistant?: boolean
  /** field 60, wire `is_pinned` */
  isPinned?: boolean
  /** field 61, wire `is_pnh_enabled_chat` */
  isPnhEnabledChat?: boolean
  /** field 62, wire `marked_read_cnt` */
  markedReadCnt?: number
  /** field 63, wire `marked_read_message_cnt` */
  markedReadMessageCnt?: number
  /** field 64, wire `messages_read` */
  messagesRead?: number
  /** field 65, wire `messages_received` */
  messagesReceived?: number
  /** field 66, wire `messages_sent` */
  messagesSent?: number
  /** field 68, wire `messages_unread` */
  messagesUnread?: number
  /** field 69, wire `opposite_visible_identification` */
  oppositeVisibleIdentification?: OPPOSITEVISIBLEIDENTIFICATIONTYPE
  /** field 70, wire `photo_messages_received` */
  photoMessagesReceived?: number
  /** field 71, wire `photo_messages_sent` */
  photoMessagesSent?: number
  /** field 72, wire `poll_creation_messages_received` */
  pollCreationMessagesReceived?: number
  /** field 73, wire `poll_creation_messages_sent` */
  pollCreationMessagesSent?: number
  /** field 74, wire `poll_update_messages_received` */
  pollUpdateMessagesReceived?: number
  /** field 75, wire `poll_update_messages_sent` */
  pollUpdateMessagesSent?: number
  /** field 76, wire `profile_replies` */
  profileReplies?: number
  /** field 77, wire `profile_views` */
  profileViews?: number
  /** field 78, wire `ptt_messages_received` */
  pttMessagesReceived?: number
  /** field 79, wire `ptt_messages_sent` */
  pttMessagesSent?: number
  /** field 80, wire `ptv_messages_received` */
  ptvMessagesReceived?: number
  /** field 81, wire `ptv_messages_sent` */
  ptvMessagesSent?: number
  /** field 82, wire `reactions_received` */
  reactionsReceived?: number
  /** field 83, wire `reactions_sent` */
  reactionsSent?: number
  /** field 85, wire `replies_sent` */
  repliesSent?: number
  /** field 86, wire `requested_phone_number` */
  requestedPhoneNumber?: boolean
  /** field 87, wire `seen_masked_phone_number` */
  seenMaskedPhoneNumber?: boolean
  /** field 89, wire `shared_phone_number` */
  sharedPhoneNumber?: boolean
  /** field 90, wire `status_reactions_received` */
  statusReactionsReceived?: number
  /** field 91, wire `status_replies` */
  statusReplies?: number
  /** field 92, wire `status_views` */
  statusViews?: number
  /** field 93, wire `sticker_messages_received` */
  stickerMessagesReceived?: number
  /** field 94, wire `sticker_messages_sent` */
  stickerMessagesSent?: number
  /** field 95, wire `text_messages_received` */
  textMessagesReceived?: number
  /** field 96, wire `text_messages_sent` */
  textMessagesSent?: number
  /** field 97, wire `thread_ds` */
  threadDs?: string
  /** field 98, wire `thread_id` */
  threadId?: string
  /** field 99, wire `url_messages_received` */
  urlMessagesReceived?: number
  /** field 100, wire `url_messages_sent` */
  urlMessagesSent?: number
  /** field 102, wire `video_messages_received` */
  videoMessagesReceived?: number
  /** field 103, wire `video_messages_sent` */
  videoMessagesSent?: number
  /** field 104, wire `view_once_messages_opened` */
  viewOnceMessagesOpened?: number
  /** field 105, wire `view_once_messages_received` */
  viewOnceMessagesReceived?: number
  /** field 106, wire `view_once_messages_sent` */
  viewOnceMessagesSent?: number
  /** field 107, wire `shares_common_group` */
  sharesCommonGroup?: boolean
  /** field 108, wire `type_of_group` */
  typeOfGroup?: TYPEOFGROUPENUM
  /** field 109, wire `thread_id_by_lid` */
  threadIdByLid?: string
  /** field 110, wire `ephemeral_messages_expired` */
  ephemeralMessagesExpired?: number
  /** field 111, wire `thread_creation_date` */
  threadCreationDate?: string
  /** field 112, wire `is_guest_thread` */
  isGuestThread?: boolean
  /** field 113, wire `group_status_likes_others_to_others` */
  groupStatusLikesOthersToOthers?: number
  /** field 114, wire `group_status_likes_others_to_own` */
  groupStatusLikesOthersToOwn?: number
  /** field 115, wire `group_status_likes_own_to_others` */
  groupStatusLikesOwnToOthers?: number
  /** field 116, wire `group_status_likes_own_to_own` */
  groupStatusLikesOwnToOwn?: number
  /** field 117, wire `group_status_replies_others_to_others` */
  groupStatusRepliesOthersToOthers?: number
  /** field 118, wire `group_status_replies_others_to_own` */
  groupStatusRepliesOthersToOwn?: number
  /** field 119, wire `group_status_replies_own_to_others` */
  groupStatusRepliesOwnToOthers?: number
  /** field 120, wire `group_status_replies_own_to_own` */
  groupStatusRepliesOwnToOwn?: number
  /** field 121, wire `is_managed_account` */
  isManagedAccount?: boolean
  /** field 122, wire `is_new_managed_account_em_ignored` */
  isNewManagedAccountEmIgnored?: boolean
  /** field 123, wire `is_username_thread` */
  isUsernameThread?: boolean
  /** field 124, wire `limit_sharing_option` */
  limitSharingOption?: boolean
  /** field 125, wire `opposite_party_limit_sharing_option` */
  oppositePartyLimitSharingOption?: boolean
  /** field 126, wire `status_reactions_sent` */
  statusReactionsSent?: number
  /** field 127, wire `status_reply_messages_received` */
  statusReplyMessagesReceived?: number
  /** field 128, wire `tombstone_ephemeral_messages_received` */
  tombstoneEphemeralMessagesReceived?: number
  /** field 129, wire `tombstone_view_once_messages_received` */
  tombstoneViewOnceMessagesReceived?: number
  /** field 130, wire `tombstone_ai_futureproofed_messages_received` */
  tombstoneAiFutureproofedMessagesReceived?: number
  /** field 131, wire `matched_messages_marked_as_read_with_delta_time` */
  matchedMessagesMarkedAsReadWithDeltaTime?: string
  /** field 132, wire `matched_messages_read_with_delta_time` */
  matchedMessagesReadWithDeltaTime?: string
  /** field 133, wire `messages_received_with_enabled_read_receipt` */
  messagesReceivedWithEnabledReadReceipt?: number
  /** field 134, wire `forward_ptv_messages_received` */
  forwardPtvMessagesReceived?: number
  /** field 135, wire `forward_ptv_messages_sent` */
  forwardPtvMessagesSent?: number
  /** field 136, wire `is_message_yourself` */
  isMessageYourself?: boolean
  /** field 137, wire `is_username_thread_at_creation` */
  isUsernameThreadAtCreation?: boolean
  /** field 138, wire `after_read_duration` */
  afterReadDuration?: number
  /** field 139, wire `after_read_messages_expired` */
  afterReadMessagesExpired?: number
  /** field 140, wire `after_read_messages_sent` */
  afterReadMessagesSent?: number
  /** field 141, wire `after_read_messages_unread_expired` */
  afterReadMessagesUnreadExpired?: number
  /** field 142, wire `after_read_turned_off` */
  afterReadTurnedOff?: boolean
  /** field 143, wire `after_read_turned_on` */
  afterReadTurnedOn?: boolean
  /** field 144, wire `after_read_messages_received` */
  afterReadMessagesReceived?: number
  /** field 145, wire `has_replied1_on1` */
  hasReplied1On1?: boolean
  /** field 146, wire `opposite_party_has_profile_photo` */
  oppositePartyHasProfilePhoto?: boolean
}