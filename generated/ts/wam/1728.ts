export const WamForwardSend = 1728 as const

export interface ForwardSendEvent {
  /** field 1, wire `message_type` */
  messageType?: MESSAGETYPE
  /** field 2, wire `message_media_type` */
  messageMediaType?: MEDIATYPE
  /** field 3, wire `message_is_fast_forward` */
  messageIsFastForward?: boolean
  /** field 4, wire `message_forward_age_t` */
  messageForwardAgeT?: string
  /** field 5, wire `fast_forward_enabled` */
  fastForwardEnabled?: boolean
  /** field 6, wire `message_is_fanout` */
  messageIsFanout?: boolean
  /** field 7, wire `retry_count` */
  retryCount?: number
  /** field 8, wire `resend_count` */
  resendCount?: number
  /** field 9, wire `message_is_international` */
  messageIsInternational?: boolean
  /** field 10, wire `media_caption_present` */
  mediaCaptionPresent?: boolean
  /** field 11, wire `e2e_ciphertext_version` */
  e2eCiphertextVersion?: number
  /** field 12, wire `e2e_ciphertext_type` */
  e2eCiphertextType?: E2ECIPHERTEXTTYPE
  /** field 13, wire `message_send_t` */
  messageSendT?: string
  /** field 14, wire `is_frequently_forwarded` */
  isFrequentlyForwarded?: boolean
  /** field 16, wire `would_be_frequently_forwarded_at3` */
  wouldBeFrequentlyForwardedAt3?: boolean
  /** field 17, wire `would_be_frequently_forwarded_at4` */
  wouldBeFrequentlyForwardedAt4?: boolean
  /** field 18, wire `ephemerality_duration` */
  ephemeralityDuration?: number
  /** field 19, wire `sender_default_disappearing_duration` */
  senderDefaultDisappearingDuration?: number
  /** field 20, wire `receiver_default_disappearing_duration` */
  receiverDefaultDisappearingDuration?: number
  /** field 21, wire `disappearing_chat_initiator` */
  disappearingChatInitiator?: DISAPPEARINGCHATINITIATORTYPE
  /** field 22, wire `is_forwarded_forward` */
  isForwardedForward?: boolean
  /** field 23, wire `type_of_group` */
  typeOfGroup?: TYPEOFGROUPENUM
  /** field 24, wire `ephemerality_initiator` */
  ephemeralityInitiator?: EPHEMERALITYINITIATORTYPE
  /** field 25, wire `ephemerality_trigger_action` */
  ephemeralityTriggerAction?: EPHEMERALITYTRIGGERACTIONTYPE
  /** field 26, wire `message_biz_type` */
  messageBizType?: MESSAGEBIZTYPE
  /** field 27, wire `forward_picker_origin` */
  forwardPickerOrigin?: FORWARDPICKERORIGIN
  /** field 28, wire `forward_origin` */
  forwardOrigin?: FORWARDORIGIN
}