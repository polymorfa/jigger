const WamSettingsSearchInitiate = 4014 // channel: regular

type SettingsSearchInitiateEvent struct {
	SettingsPageType SETTINGSPAGETYPE `wam:"settings_page_type"` // field 1
}