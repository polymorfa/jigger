export const WamCtwaOrderSignal = 4264 as const

export interface CtwaOrderSignalEvent {
  /** field 1, wire `ctwa_order_signal_version` */
  ctwaOrderSignalVersion?: number
  /** field 2, wire `deep_link_conversion_data` */
  deepLinkConversionData?: string
  /** field 3, wire `deep_link_conversion_source` */
  deepLinkConversionSource?: string
  /** field 4, wire `event_sharing_setting_enabled` */
  eventSharingSettingEnabled?: boolean
  /** field 5, wire `global_sharing_setting_enabled` */
  globalSharingSettingEnabled?: boolean
  /** field 6, wire `order_signal_type` */
  orderSignalType?: ORDERSIGNALTYPE
  /** field 7, wire `order_status` */
  orderStatus?: ORDERSTATUS
  /** field 8, wire `order_paid` */
  orderPaid?: boolean
  /** field 9, wire `thread_id_hmac` */
  threadIdHmac?: string
  /** field 10, wire `ctwa_signal_metadata` */
  ctwaSignalMetadata?: string
  /** field 11, wire `customer_ads_sharing_setting_enabled` */
  customerAdsSharingSettingEnabled?: CUSTOMERADSSHARINGSETTINGENABLED
}