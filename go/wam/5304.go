const WamContactNotificationSettingUserJourney = 5304 // channel: regular

type ContactNotificationSettingUserJourneyEvent struct {
	AppSessionId string `wam:"app_session_id"` // field 1
	ContactNotificationSettingActionType CONTACTNOTIFICATIONSETTINGACTIONTYPE `wam:"contact_notification_setting_action_type"` // field 2
	GroupSize int64 `wam:"group_size"` // field 3
	UiSurface TSSURFACE `wam:"ui_surface"` // field 4
}