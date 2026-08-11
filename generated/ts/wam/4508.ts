export const WamSmbPaidMessagesButtonLogger = 4508 as const

export interface SmbPaidMessagesButtonLoggerEvent {
  /** field 1, wire `business_phone_number` */
  businessPhoneNumber?: number
  /** field 2, wire `pm_button_count` */
  pmButtonCount?: number
  /** field 3, wire `pm_button_event_type` */
  pmButtonEventType?: PMBUTTONEVENTTYPE
  /** field 4, wire `pm_button_index` */
  pmButtonIndex?: number
  /** field 5, wire `pm_button_type` */
  pmButtonType?: PMBUTTONTYPE
  /** field 6, wire `pm_server_campaign_id` */
  pmServerCampaignId?: string
  /** field 7, wire `pm_is_trackable_link` */
  pmIsTrackableLink?: string
}