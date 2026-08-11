export const WamMessageReceive = 450 as const

export interface MessageReceiveEvent {
  /** field 1, wire `message_type` */
  messageType?: MESSAGETYPE
  /** field 2, wire `message_media_type` */
  messageMediaType?: MEDIATYPE
  /** field 3, wire `num_of_web_urls_in_text_message` */
  numOfWebUrlsInTextMessage?: number
  /** field 4, wire `message_is_international` */
  messageIsInternational?: boolean
  /** field 5, wire `message_is_offline` */
  messageIsOffline?: boolean
  /** field 6, wire `message_receive_t0` */
  messageReceiveT0?: string
  /** field 7, wire `message_receive_t1` */
  messageReceiveT1?: string
  /** field 8, wire `muted_group_message` */
  mutedGroupMessage?: boolean
  /** field 9, wire `is_view_once` */
  isViewOnce?: boolean
  /** field 10, wire `device_size_bucket` */
  deviceSizeBucket?: SIZEBUCKET
  /** field 11, wire `sender_default_disappearing_duration` */
  senderDefaultDisappearingDuration?: number
  /** field 12, wire `receiver_default_disappearing_duration` */
  receiverDefaultDisappearingDuration?: number
  /** field 13, wire `ephemerality_duration` */
  ephemeralityDuration?: number
  /** field 14, wire `disappearing_chat_initiator` */
  disappearingChatInitiator?: DISAPPEARINGCHATINITIATORTYPE
  /** field 15, wire `message_queue_time` */
  messageQueueTime?: string
  /** field 16, wire `device_count` */
  deviceCount?: number
  /** field 17, wire `participant_count` */
  participantCount?: number
  /** field 18, wire `is_forwarded_forward` */
  isForwardedForward?: boolean
  /** field 19, wire `is_a_reply` */
  isAReply?: boolean
  /** field 20, wire `revoke_type` */
  revokeType?: REVOKETYPE
  /** field 21, wire `type_of_group` */
  typeOfGroup?: TYPEOFGROUPENUM
  /** field 22, wire `padding_bytes_size` */
  paddingBytesSize?: number
  /** field 23, wire `message_is_invisible` */
  messageIsInvisible?: boolean
  /** field 24, wire `is_lid` */
  isLid?: boolean
  /** field 25, wire `edit_type` */
  editType?: EDITTYPE
  /** field 26, wire `ephemerality_initiator` */
  ephemeralityInitiator?: EPHEMERALITYINITIATORTYPE
  /** field 27, wire `ephemerality_trigger_action` */
  ephemeralityTriggerAction?: EPHEMERALITYTRIGGERACTIONTYPE
  /** field 28, wire `agent_engagement_type` */
  agentEngagementType?: AGENTENGAGEMENTENUMTYPE
  /** field 29, wire `sticker_is_ai` */
  stickerIsAi?: boolean
  /** field 30, wire `offline_count` */
  offlineCount?: number
  /** field 31, wire `sticker_is_from_sticker_maker` */
  stickerIsFromStickerMaker?: boolean
  /** field 32, wire `sticker_maker_source_type` */
  stickerMakerSourceType?: STICKERMAKERSOURCETYPE
  /** field 33, wire `local_addressing_mode` */
  localAddressingMode?: ADDRESSINGMODE
  /** field 34, wire `message_addressing_mode` */
  messageAddressingMode?: ADDRESSINGMODE
  /** field 35, wire `server_addressing_mode` */
  serverAddressingMode?: ADDRESSINGMODE
  /** field 36, wire `is_a_comment` */
  isAComment?: boolean
  /** field 37, wire `bot_type` */
  botType?: BOTTYPE
  /** field 38, wire `chat_origins` */
  chatOrigins?: CHATORIGINSTYPE
  /** field 39, wire `has_username` */
  hasUsername?: boolean
  /** field 40, wire `opposite_visible_identification` */
  oppositeVisibleIdentification?: OPPOSITEVISIBLEIDENTIFICATIONTYPE
  /** field 41, wire `invisible_message_category` */
  invisibleMessageCategory?: INVISIBLEMESSAGECATEGORYTYPE
  /** field 42, wire `paired_media_type` */
  pairedMediaType?: PAIREDMEDIATYPE
  /** field 43, wire `app_context` */
  appContext?: string
  /** field 44, wire `app_context_bitfield` */
  appContextBitfield?: number
  /** field 45, wire `has_username_pin` */
  hasUsernamePin?: boolean
  /** field 47, wire `processing_deferred` */
  processingDeferred?: boolean
  /** field 48, wire `stanza_process_count` */
  stanzaProcessCount?: number
  /** field 49, wire `message_receive_t2` */
  messageReceiveT2?: string
  /** field 50, wire `received_phone_number_contact_size` */
  receivedPhoneNumberContactSize?: number
  /** field 51, wire `received_phone_number_with_username_contact_size` */
  receivedPhoneNumberWithUsernameContactSize?: number
  /** field 52, wire `received_username_contact_size` */
  receivedUsernameContactSize?: number
  /** field 53, wire `private_ai_feature_name` */
  privateAiFeatureName?: PRIVATEAIFEATURENAME
  /** field 54, wire `encryption_type` */
  encryptionType?: ENCRYPTIONTYPECODE
  /** field 55, wire `is_pq` */
  isPq?: boolean
  /** field 56, wire `trace_id_int` */
  traceIdInt?: number
  /** field 57, wire `e2e_sender_type` */
  e2eSenderType?: E2EDEVICETYPE
  /** field 58, wire `received_contact_card_type` */
  receivedContactCardType?: string
  /** field 59, wire `received_contact_metadata_types` */
  receivedContactMetadataTypes?: string
  /** field 60, wire `sticker_is_premium` */
  stickerIsPremium?: boolean
  /** field 61, wire `after_read_duration` */
  afterReadDuration?: number
  /** field 62, wire `is_after_read` */
  isAfterRead?: boolean
  /** field 63, wire `session_scope` */
  sessionScope?: SESSIONSCOPETYPE
  /** field 64, wire `sender_platform` */
  senderPlatform?: PLATFORMTYPE
  /** field 65, wire `opposite_has_username` */
  oppositeHasUsername?: boolean
  /** field 66, wire `is_sticker_annotation` */
  isStickerAnnotation?: boolean
}