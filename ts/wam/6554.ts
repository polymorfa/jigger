export const WamMmSignalSharingVerificationEvent = 6554 as const

export interface MmSignalSharingVerificationEventEvent {
  /** field 1, wire `business_lid_or_jid` */
  businessLidOrJid?: string
  /** field 3, wire `collection_window_id` */
  collectionWindowId?: string
  /** field 4, wire `is_user_disclosed` */
  isUserDisclosed?: boolean
  /** field 5, wire `one_pd_signal_not_shared_reason` */
  onePdSignalNotSharedReason?: ONEPDSIGNALNOTSHAREDREASON
  /** field 6, wire `signal_canceled_reason` */
  signalCanceledReason?: SIGNALCANCELEDREASON
  /** field 7, wire `signal_message_state` */
  signalMessageState?: SIGNALMESSAGESTATE
  /** field 8, wire `signal_message_type` */
  signalMessageType?: SIGNALMESSAGETYPE
  /** field 9, wire `signal_origin` */
  signalOrigin?: SIGNALORIGIN
  /** field 10, wire `signal_sharing_status` */
  signalSharingStatus?: SIGNALSHARINGSTATUS
  /** field 11, wire `signal_surface` */
  signalSurface?: SIGNALSURFACE
  /** field 12, wire `signal_type` */
  signalType?: SIGNALTYPE
  /** field 13, wire `sp_signal_not_shared_reason` */
  spSignalNotSharedReason?: SPSIGNALNOTSHAREDREASON
  /** field 14, wire `template_id` */
  templateId?: string
  /** field 16, wire `is_companion_device` */
  isCompanionDevice?: boolean
  /** field 17, wire `ent_source_subplatform` */
  entSourceSubplatform?: string
  /** field 18, wire `delta_time_received` */
  deltaTimeReceived?: number
  /** field 20, wire `is_network_available` */
  isNetworkAvailable?: boolean
  /** field 21, wire `is_shimming_signal` */
  isShimmingSignal?: boolean
  /** field 22, wire `is_iab_restore` */
  isIabRestore?: boolean
  /** field 23, wire `signal_type_origin` */
  signalTypeOrigin?: string
  /** field 24, wire `is_latest_conversion_token` */
  isLatestConversionToken?: boolean
  /** field 25, wire `mm_conversation_depth` */
  mmConversationDepth?: number
  /** field 26, wire `mm_conversation_repeat` */
  mmConversationRepeat?: number
  /** field 27, wire `mm_direction_from` */
  mmDirectionFrom?: MMDIRECTIONFROM
  /** field 28, wire `account_linked` */
  accountLinked?: boolean
  /** field 29, wire `consent_source` */
  consentSource?: CONSENTSOURCE
}