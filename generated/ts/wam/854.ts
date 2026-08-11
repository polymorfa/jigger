export const WamMessageSend = 854 as const

export interface MessageSendEvent {
  /** field 1, wire `message_send_result` */
  messageSendResult?: MESSAGESENDRESULTTYPE
  /** field 2, wire `message_type` */
  messageType?: MESSAGETYPE
  /** field 3, wire `message_media_type` */
  messageMediaType?: MEDIATYPE
  /** field 4, wire `message_is_forward` */
  messageIsForward?: boolean
  /** field 5, wire `message_is_fanout` */
  messageIsFanout?: boolean
  /** field 6, wire `retry_count` */
  retryCount?: number
  /** field 7, wire `message_is_international` */
  messageIsInternational?: boolean
  /** field 8, wire `media_caption_present` */
  mediaCaptionPresent?: boolean
  /** field 9, wire `e2e_ciphertext_version` */
  e2eCiphertextVersion?: number
  /** field 10, wire `e2e_ciphertext_type` */
  e2eCiphertextType?: E2ECIPHERTEXTTYPE
  /** field 11, wire `message_send_t` */
  messageSendT?: string
  /** field 12, wire `message_send_opt_upload_enabled` */
  messageSendOptUploadEnabled?: boolean
  /** field 13, wire `message_is_fast_forward` */
  messageIsFastForward?: boolean
  /** field 14, wire `message_forward_age_t` */
  messageForwardAgeT?: string
  /** field 15, wire `fast_forward_enabled` */
  fastForwardEnabled?: boolean
  /** field 16, wire `resend_count` */
  resendCount?: number
  /** field 17, wire `message_send_result_is_terminal` */
  messageSendResultIsTerminal?: boolean
  /** field 18, wire `sticker_is_first_party` */
  stickerIsFirstParty?: boolean
  /** field 19, wire `is_from_wamsys` */
  isFromWamsys?: boolean
  /** field 20, wire `thumb_size` */
  thumbSize?: string
  /** field 21, wire `ephemerality_duration` */
  ephemeralityDuration?: number
  /** field 22, wire `is_view_once` */
  isViewOnce?: boolean
  /** field 23, wire `e2e_backfill` */
  e2eBackfill?: boolean
  /** field 24, wire `message_is_revoke` */
  messageIsRevoke?: boolean
  /** field 25, wire `device_size_bucket` */
  deviceSizeBucket?: SIZEBUCKET
  /** field 26, wire `message_is_first_user_message` */
  messageIsFirstUserMessage?: boolean
  /** field 27, wire `sender_default_disappearing_duration` */
  senderDefaultDisappearingDuration?: number
  /** field 28, wire `receiver_default_disappearing_duration` */
  receiverDefaultDisappearingDuration?: number
  /** field 29, wire `message_is_invisible` */
  messageIsInvisible?: boolean
  /** field 30, wire `disappearing_chat_initiator` */
  disappearingChatInitiator?: DISAPPEARINGCHATINITIATORTYPE
  /** field 31, wire `device_count` */
  deviceCount?: number
  /** field 32, wire `participant_count` */
  participantCount?: number
  /** field 33, wire `revoke_duration` */
  revokeDuration?: number
  /** field 34, wire `revoke_type` */
  revokeType?: REVOKETYPE
  /** field 35, wire `is_a_reply` */
  isAReply?: boolean
  /** field 36, wire `type_of_group` */
  typeOfGroup?: TYPEOFGROUPENUM
  /** field 37, wire `network_was_disconnected` */
  networkWasDisconnected?: boolean
  /** field 38, wire `sticker_is_avatar` */
  stickerIsAvatar?: boolean
  /** field 39, wire `is_lid` */
  isLid?: boolean
  /** field 40, wire `excess_payload_kb_size` */
  excessPayloadKbSize?: number
  /** field 41, wire `message_distribution_type` */
  messageDistributionType?: MESSAGEDISTRIBUTIONENUMTYPE
  /** field 42, wire `overall_media_size` */
  overallMediaSize?: string
  /** field 43, wire `edit_duration` */
  editDuration?: number
  /** field 44, wire `edit_type` */
  editType?: EDITTYPE
  /** field 45, wire `send_button_press_t` */
  sendButtonPressT?: number
  /** field 46, wire `e2e_failure_reason` */
  e2eFailureReason?: E2EFAILUREREASON
  /** field 47, wire `ephemerality_initiator` */
  ephemeralityInitiator?: EPHEMERALITYINITIATORTYPE
  /** field 48, wire `ephemerality_trigger_action` */
  ephemeralityTriggerAction?: EPHEMERALITYTRIGGERACTIONTYPE
  /** field 49, wire `agent_engagement_type` */
  agentEngagementType?: AGENTENGAGEMENTENUMTYPE
  /** field 50, wire `sticker_is_ai` */
  stickerIsAi?: boolean
  /** field 51, wire `sticker_is_from_sticker_maker` */
  stickerIsFromStickerMaker?: boolean
  /** field 52, wire `sticker_maker_source_type` */
  stickerMakerSourceType?: STICKERMAKERSOURCETYPE
  /** field 53, wire `local_addressing_mode` */
  localAddressingMode?: ADDRESSINGMODE
  /** field 54, wire `is_a_comment` */
  isAComment?: boolean
  /** field 55, wire `bot_type` */
  botType?: BOTTYPE
  /** field 56, wire `server_error_code` */
  serverErrorCode?: number
  /** field 57, wire `message_key_hash` */
  messageKeyHash?: string
  /** field 58, wire `chat_origins` */
  chatOrigins?: CHATORIGINSTYPE
  /** field 59, wire `has_username` */
  hasUsername?: boolean
  /** field 60, wire `opposite_visible_identification` */
  oppositeVisibleIdentification?: OPPOSITEVISIBLEIDENTIFICATIONTYPE
  /** field 61, wire `media_upload_error` */
  mediaUploadError?: MEDIAUPLOADRESULTTYPE
  /** field 62, wire `media_upload_retry_count` */
  mediaUploadRetryCount?: number
  /** field 63, wire `running_tasks` */
  runningTasks?: string
  /** field 64, wire `invisible_message_category` */
  invisibleMessageCategory?: INVISIBLEMESSAGECATEGORYTYPE
  /** field 65, wire `user_to_device_size_bucket` */
  userToDeviceSizeBucket?: string
  /** field 66, wire `message_send_source` */
  messageSendSource?: MESSAGESENDSOURCE
  /** field 67, wire `chat_session_id` */
  chatSessionId?: string
  /** field 68, wire `unified_session_id` */
  unifiedSessionId?: string
  /** field 69, wire `is_premium` */
  isPremium?: boolean
  /** field 70, wire `logout_reason` */
  logoutReason?: LOGOUTREASONTYPE
  /** field 71, wire `paired_media_type` */
  pairedMediaType?: PAIREDMEDIATYPE
  /** field 72, wire `app_context` */
  appContext?: string
  /** field 73, wire `app_context_bitfield` */
  appContextBitfield?: number
  /** field 74, wire `has_username_pin` */
  hasUsernamePin?: boolean
  /** field 75, wire `is_whatsapi_build` */
  isWhatsapiBuild?: boolean
  /** field 76, wire `encryption_type` */
  encryptionType?: ENCRYPTIONTYPECODE
  /** field 77, wire `shared_phone_number_contact_size` */
  sharedPhoneNumberContactSize?: number
  /** field 78, wire `shared_phone_number_with_username_contact_size` */
  sharedPhoneNumberWithUsernameContactSize?: number
  /** field 79, wire `shared_username_contact_size` */
  sharedUsernameContactSize?: number
  /** field 81, wire `private_ai_feature_name` */
  privateAiFeatureName?: PRIVATEAIFEATURENAME
  /** field 82, wire `is_pq` */
  isPq?: boolean
  /** field 83, wire `trace_id_int` */
  traceIdInt?: number
  /** field 84, wire `shared_contact_card_type` */
  sharedContactCardType?: string
  /** field 85, wire `shared_contact_metadata_types` */
  sharedContactMetadataTypes?: string
  /** field 86, wire `sticker_is_premium` */
  stickerIsPremium?: boolean
  /** field 87, wire `after_read_duration` */
  afterReadDuration?: number
  /** field 88, wire `is_after_read` */
  isAfterRead?: boolean
  /** field 89, wire `logout_session_id` */
  logoutSessionId?: number
  /** field 90, wire `initial_send_attempt_reachability_status` */
  initialSendAttemptReachabilityStatus?: REACHABILITYSTATUS
  /** field 91, wire `session_scope` */
  sessionScope?: SESSIONSCOPETYPE
  /** field 92, wire `message_type_str` */
  messageTypeStr?: string
  /** field 93, wire `opposite_has_username` */
  oppositeHasUsername?: boolean
  /** field 94, wire `is_scheduled` */
  isScheduled?: boolean
  /** field 95, wire `message_send_retry_source` */
  messageSendRetrySource?: MESSAGESENDRETRYSOURCE
}