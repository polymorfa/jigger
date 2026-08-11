export const WamContactNotificationSettingUserJourney = 5304 as const

export interface ContactNotificationSettingUserJourneyEvent {
  /** field 1, wire `app_session_id` */
  appSessionId?: string
  /** field 2, wire `contact_notification_setting_action_type` */
  contactNotificationSettingActionType?: CONTACTNOTIFICATIONSETTINGACTIONTYPE
  /** field 3, wire `group_size` */
  groupSize?: number
  /** field 4, wire `ui_surface` */
  uiSurface?: TSSURFACE
}