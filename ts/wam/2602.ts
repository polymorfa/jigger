export const WamMdAppStateOfflineNotifications = 2602 as const

export interface MdAppStateOfflineNotificationsEvent {
  /** field 1, wire `redundant_count` */
  redundantCount?: number
}