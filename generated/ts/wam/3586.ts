export const WamCtwaActionBannerUnderstand = 3586 as const

export interface CtwaActionBannerUnderstandEvent {
  /** field 1, wire `banner_identifier` */
  bannerIdentifier?: string
  /** field 2, wire `banner_locale` */
  bannerLocale?: string
  /** field 3, wire `client_locale` */
  clientLocale?: string
  /** field 4, wire `has_local_link` */
  hasLocalLink?: boolean
  /** field 5, wire `has_universal_link` */
  hasUniversalLink?: boolean
  /** field 6, wire `invalid_link` */
  invalidLink?: string
  /** field 7, wire `lwi_flow_identifier` */
  lwiFlowIdentifier?: string
  /** field 8, wire `preferred_link` */
  preferredLink?: PREFERREDLINKTYPE
  /** field 9, wire `valid_locale` */
  validLocale?: boolean
  /** field 10, wire `valid_notification` */
  validNotification?: boolean
  /** field 11, wire `notification_log_id` */
  notificationLogId?: string
}