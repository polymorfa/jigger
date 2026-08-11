export const WamNotificationDelivery = 3748 as const

export interface NotificationDeliveryEvent {
  /** field 1, wire `client_message_id` */
  clientMessageId?: string
  /** field 2, wire `notification_action` */
  notificationAction?: NOTIFICATIONACTIONTYPE
  /** field 3, wire `notification_delivery_t` */
  notificationDeliveryT?: number
  /** field 4, wire `notification_destination` */
  notificationDestination?: NOTIFICATIONDESTINATIONTYPE
  /** field 5, wire `notification_id` */
  notificationId?: string
  /** field 6, wire `notification_source` */
  notificationSource?: NOTIFICATIONSOURCETYPE
  /** field 7, wire `thread_id` */
  threadId?: string
  /** field 8, wire `ui_notification_type` */
  uiNotificationType?: NOTIFICATIONTYPEENUM
  /** field 9, wire `peripheral_device_origin` */
  peripheralDeviceOrigin?: PERIPHERALDEVICETYPE
  /** field 10, wire `push_to_notif_t` */
  pushToNotifT?: string
  /** field 11, wire `is_silenced` */
  isSilenced?: boolean
  /** field 12, wire `triggered_by_offline_message` */
  triggeredByOfflineMessage?: boolean
  /** field 13, wire `trace_id_int` */
  traceIdInt?: number
  /** field 14, wire `channel_milestone_value` */
  channelMilestoneValue?: number
  /** field 15, wire `cid` */
  cid?: string
  /** field 16, wire `post_id` */
  postId?: string
}