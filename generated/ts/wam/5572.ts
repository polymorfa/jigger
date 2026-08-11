export const WamMmSignal = 5572 as const

export interface MmSignalEvent {
  /** field 1, wire `mm_signal_data` */
  mmSignalData?: string
  /** field 2, wire `mm_signal_type` */
  mmSignalType?: MMSIGNALTYPE
  /** field 4, wire `disclosed` */
  disclosed?: boolean
  /** field 5, wire `is_latest_conversion_token` */
  isLatestConversionToken?: boolean
  /** field 6, wire `mm_conversation_depth` */
  mmConversationDepth?: number
  /** field 7, wire `mm_conversation_repeat` */
  mmConversationRepeat?: number
  /** field 8, wire `mm_conversion_schema_version` */
  mmConversionSchemaVersion?: number
  /** field 9, wire `mm_direction_from` */
  mmDirectionFrom?: MMDIRECTIONFROM
  /** field 10, wire `consent_source` */
  consentSource?: CONSENTSOURCE
}