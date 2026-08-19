const WamNotificationSetting = 3684 // channel: regular

type NotificationSettingEvent struct {
	GroupReactionNotification bool `wam:"group_reaction_notification"` // field 1
	GroupShowNotification bool `wam:"group_show_notification"` // field 2
	GroupSoundTone NOTIFICATIONSOUNDTONE `wam:"group_sound_tone"` // field 3
	InAppNotificationAlertStyle INAPPNOTIFICATIONALERTSTYLE `wam:"in_app_notification_alert_style"` // field 4
	InAppNotificationSound bool `wam:"in_app_notification_sound"` // field 5
	InAppNotificationVibrate bool `wam:"in_app_notification_vibrate"` // field 6
	MessageReactionNotification bool `wam:"message_reaction_notification"` // field 7
	MessageShowNotification bool `wam:"message_show_notification"` // field 8
	MessageSoundTone NOTIFICATIONSOUNDTONE `wam:"message_sound_tone"` // field 9
	ShowPreview bool `wam:"show_preview"` // field 10
	OfflineNotification bool `wam:"offline_notification"` // field 11
	StatusReminderNotification bool `wam:"status_reminder_notification"` // field 12
	UnreadBadgeSetting UNREADBADGESETTINGTYPE `wam:"unread_badge_setting"` // field 13
	StatusNotificationPriority bool `wam:"status_notification_priority"` // field 14
	StatusNotificationVibration bool `wam:"status_notification_vibration"` // field 15
	StatusReactionNotification bool `wam:"status_reaction_notification"` // field 16
	StatusSoundTone NOTIFICATIONSOUNDTONE `wam:"status_sound_tone"` // field 17
	StatusShowNotification bool `wam:"status_show_notification"` // field 18
	RecommendedChannelsNotificationSetting bool `wam:"recommended_channels_notification_setting"` // field 19
}