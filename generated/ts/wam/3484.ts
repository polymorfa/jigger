export const WamKeepInChatNotif = 3484 as const

export interface KeepInChatNotifEvent {
  /** field 3, wire `kic_group_notification_taps` */
  kicGroupNotificationTaps?: number
  /** field 4, wire `kic_group_notifications` */
  kicGroupNotifications?: number
  /** field 5, wire `kic_notification_taps` */
  kicNotificationTaps?: number
  /** field 6, wire `kic_notifications` */
  kicNotifications?: number
}