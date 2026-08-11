const WamNotificationDelivery = 3748 // channel: regular

type NotificationDeliveryEvent struct {
	ClientMessageId string `wam:"client_message_id"` // field 1
	NotificationAction NOTIFICATIONACTIONTYPE `wam:"notification_action"` // field 2
	NotificationDeliveryT int64 `wam:"notification_delivery_t"` // field 3
	NotificationDestination NOTIFICATIONDESTINATIONTYPE `wam:"notification_destination"` // field 4
	NotificationId string `wam:"notification_id"` // field 5
	NotificationSource NOTIFICATIONSOURCETYPE `wam:"notification_source"` // field 6
	ThreadId string `wam:"thread_id"` // field 7
	UiNotificationType NOTIFICATIONTYPEENUM `wam:"ui_notification_type"` // field 8
	PeripheralDeviceOrigin PERIPHERALDEVICETYPE `wam:"peripheral_device_origin"` // field 9
	PushToNotifT string `wam:"push_to_notif_t"` // field 10
	IsSilenced bool `wam:"is_silenced"` // field 11
	TriggeredByOfflineMessage bool `wam:"triggered_by_offline_message"` // field 12
	TraceIdInt int64 `wam:"trace_id_int"` // field 13
	ChannelMilestoneValue int64 `wam:"channel_milestone_value"` // field 14
	Cid string `wam:"cid"` // field 15
	PostId string `wam:"post_id"` // field 16
}