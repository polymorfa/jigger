export const WamCtwaLabelSignal = 4662 as const

export interface CtwaLabelSignalEvent {
  /** field 1, wire `ctwa_label_signal_version` */
  ctwaLabelSignalVersion?: number
  /** field 2, wire `ctwa_label_target` */
  ctwaLabelTarget?: CTWALABELTARGET
  /** field 3, wire `ctwa_label_type` */
  ctwaLabelType?: CTWALABELTYPE
  /** field 4, wire `deep_link_conversion_data` */
  deepLinkConversionData?: string
  /** field 5, wire `deep_link_conversion_source` */
  deepLinkConversionSource?: string
  /** field 6, wire `event_sharing_setting_enabled` */
  eventSharingSettingEnabled?: boolean
  /** field 7, wire `global_sharing_setting_enabled` */
  globalSharingSettingEnabled?: boolean
  /** field 8, wire `thread_id_hmac` */
  threadIdHmac?: string
  /** field 9, wire `ctwa_signal_metadata` */
  ctwaSignalMetadata?: string
  /** field 10, wire `customer_ads_sharing_setting_enabled` */
  customerAdsSharingSettingEnabled?: CUSTOMERADSSHARINGSETTINGENABLED
  /** field 11, wire `ctwa_conversation_depth` */
  ctwaConversationDepth?: number
}