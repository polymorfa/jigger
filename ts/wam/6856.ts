export const WamMmSignalSharingVerificationWithSignalDataEvent = 6856 as const

export interface MmSignalSharingVerificationWithSignalDataEventEvent {
  /** field 1, wire `ent_source_subplatform` */
  entSourceSubplatform?: string
  /** field 2, wire `is_companion_device` */
  isCompanionDevice?: boolean
  /** field 3, wire `is_user_disclosed` */
  isUserDisclosed?: boolean
  /** field 4, wire `is_user_matched` */
  isUserMatched?: boolean
  /** field 5, wire `mm_signal_data` */
  mmSignalData?: string
  /** field 6, wire `one_pd_signal_not_shared_reason` */
  onePdSignalNotSharedReason?: ONEPDSIGNALNOTSHAREDREASON
  /** field 7, wire `signal_canceled_reason` */
  signalCanceledReason?: SIGNALCANCELEDREASON
  /** field 8, wire `signal_message_state` */
  signalMessageState?: SIGNALMESSAGESTATE
  /** field 9, wire `signal_message_type` */
  signalMessageType?: SIGNALMESSAGETYPE
  /** field 10, wire `signal_origin` */
  signalOrigin?: SIGNALORIGIN
  /** field 11, wire `signal_sharing_status` */
  signalSharingStatus?: SIGNALSHARINGSTATUS
  /** field 12, wire `signal_surface` */
  signalSurface?: SIGNALSURFACE
  /** field 13, wire `signal_type` */
  signalType?: SIGNALTYPE
  /** field 14, wire `sp_signal_not_shared_reason` */
  spSignalNotSharedReason?: SPSIGNALNOTSHAREDREASON
  /** field 16, wire `is_network_available` */
  isNetworkAvailable?: boolean
  /** field 17, wire `is_shimming_signal` */
  isShimmingSignal?: boolean
  /** field 18, wire `signal_type_origin` */
  signalTypeOrigin?: string
  /** field 19, wire `is_latest_conversion_token` */
  isLatestConversionToken?: boolean
  /** field 20, wire `mm_conversation_depth` */
  mmConversationDepth?: number
  /** field 21, wire `mm_conversation_repeat` */
  mmConversationRepeat?: number
  /** field 22, wire `mm_direction_from` */
  mmDirectionFrom?: MMDIRECTIONFROM
  /** field 23, wire `account_linked` */
  accountLinked?: boolean
  /** field 24, wire `consent_source` */
  consentSource?: CONSENTSOURCE
}