const WamMdAppStateOfflineNotifications = 2602 // channel: regular

type MdAppStateOfflineNotificationsEvent struct {
	RedundantCount int64 `wam:"redundant_count"` // field 1
}