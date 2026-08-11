const WamWebcBackgroundSyncAdoption = 5302 // channel: regular

type WebcBackgroundSyncAdoptionEvent struct {
	OffboardSource OFFBOARDSOURCES `wam:"offboard_source"` // field 1
	OnboardSource ONBOARDSOURCES `wam:"onboard_source"` // field 2
	PushNotificationInteraction PUSHNOTIFICATIONINTERACTIONS `wam:"push_notification_interaction"` // field 3
	WebOsNotificationSetting WEBNOTIFICATIONSETTINGTYPE `wam:"web_os_notification_setting"` // field 4
}