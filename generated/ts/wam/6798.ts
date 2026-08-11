export const WamMmSignalSharingVerificationFsEvent = 6798 as const

export interface MmSignalSharingVerificationFsEventEvent {
  /** field 1, wire `is_companion_device` */
  isCompanionDevice?: boolean
  /** field 2, wire `is_user_disclosed` */
  isUserDisclosed?: boolean
  /** field 3, wire `one_pd_signal_not_shared_reason` */
  onePdSignalNotSharedReason?: ONEPDSIGNALNOTSHAREDREASON
  /** field 4, wire `signal_canceled_reason` */
  signalCanceledReason?: SIGNALCANCELEDREASON
  /** field 5, wire `signal_message_state` */
  signalMessageState?: SIGNALMESSAGESTATE
  /** field 6, wire `signal_message_type` */
  signalMessageType?: SIGNALMESSAGETYPE
  /** field 7, wire `signal_origin` */
  signalOrigin?: SIGNALORIGIN
  /** field 8, wire `signal_sharing_status` */
  signalSharingStatus?: SIGNALSHARINGSTATUS
  /** field 9, wire `signal_surface` */
  signalSurface?: SIGNALSURFACE
  /** field 10, wire `signal_type` */
  signalType?: SIGNALTYPE
  /** field 11, wire `sp_signal_not_shared_reason` */
  spSignalNotSharedReason?: SPSIGNALNOTSHAREDREASON
  /** field 12, wire `thread_id_hmac` */
  threadIdHmac?: string
  /** field 13, wire `is_shimming_signal` */
  isShimmingSignal?: boolean
  /** field 14, wire `signal_type_origin` */
  signalTypeOrigin?: string
  /** field 15, wire `is_latest_conversion_token` */
  isLatestConversionToken?: boolean
  /** field 16, wire `mm_conversation_depth` */
  mmConversationDepth?: number
  /** field 17, wire `mm_conversation_repeat` */
  mmConversationRepeat?: number
  /** field 18, wire `mm_direction_from` */
  mmDirectionFrom?: MMDIRECTIONFROM
  /** field 19, wire `account_linked` */
  accountLinked?: boolean
  /** field 20, wire `consent_source` */
  consentSource?: CONSENTSOURCE
}