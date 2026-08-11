export const WamNotificationSetting = 3684 as const

export interface NotificationSettingEvent {
  /** field 1, wire `group_reaction_notification` */
  groupReactionNotification?: boolean
  /** field 2, wire `group_show_notification` */
  groupShowNotification?: boolean
  /** field 3, wire `group_sound_tone` */
  groupSoundTone?: NOTIFICATIONSOUNDTONE
  /** field 4, wire `in_app_notification_alert_style` */
  inAppNotificationAlertStyle?: INAPPNOTIFICATIONALERTSTYLE
  /** field 5, wire `in_app_notification_sound` */
  inAppNotificationSound?: boolean
  /** field 6, wire `in_app_notification_vibrate` */
  inAppNotificationVibrate?: boolean
  /** field 7, wire `message_reaction_notification` */
  messageReactionNotification?: boolean
  /** field 8, wire `message_show_notification` */
  messageShowNotification?: boolean
  /** field 9, wire `message_sound_tone` */
  messageSoundTone?: NOTIFICATIONSOUNDTONE
  /** field 10, wire `show_preview` */
  showPreview?: boolean
  /** field 11, wire `offline_notification` */
  offlineNotification?: boolean
  /** field 12, wire `status_reminder_notification` */
  statusReminderNotification?: boolean
  /** field 13, wire `unread_badge_setting` */
  unreadBadgeSetting?: UNREADBADGESETTINGTYPE
  /** field 14, wire `status_notification_priority` */
  statusNotificationPriority?: boolean
  /** field 15, wire `status_notification_vibration` */
  statusNotificationVibration?: boolean
  /** field 16, wire `status_reaction_notification` */
  statusReactionNotification?: boolean
  /** field 17, wire `status_sound_tone` */
  statusSoundTone?: NOTIFICATIONSOUNDTONE
  /** field 18, wire `status_show_notification` */
  statusShowNotification?: boolean
  /** field 19, wire `recommended_channels_notification_setting` */
  recommendedChannelsNotificationSetting?: boolean
}