export const WamWebcBackgroundSyncAdoption = 5302 as const

export interface WebcBackgroundSyncAdoptionEvent {
  /** field 1, wire `offboard_source` */
  offboardSource?: OFFBOARDSOURCES
  /** field 2, wire `onboard_source` */
  onboardSource?: ONBOARDSOURCES
  /** field 3, wire `push_notification_interaction` */
  pushNotificationInteraction?: PUSHNOTIFICATIONINTERACTIONS
  /** field 4, wire `web_os_notification_setting` */
  webOsNotificationSetting?: WEBNOTIFICATIONSETTINGTYPE
}