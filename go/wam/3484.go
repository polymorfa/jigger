const WamKeepInChatNotif = 3484 // channel: regular

type KeepInChatNotifEvent struct {
	KicGroupNotificationTaps int64 `wam:"kic_group_notification_taps"` // field 3
	KicGroupNotifications int64 `wam:"kic_group_notifications"` // field 4
	KicNotificationTaps int64 `wam:"kic_notification_taps"` // field 5
	KicNotifications int64 `wam:"kic_notifications"` // field 6
}