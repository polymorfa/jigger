export const WamBannerEvent = 1578 as const

export interface BannerEventEvent {
  /** field 1, wire `banner_type` */
  bannerType?: BANNERTYPES
  /** field 2, wire `banner_operation` */
  bannerOperation?: BANNEROPERATIONS
  /** field 3, wire `banner_id` */
  bannerId?: string
  /** field 4, wire `device_id` */
  deviceId?: string
  /** field 5, wire `notification_log_id` */
  notificationLogId?: string
}