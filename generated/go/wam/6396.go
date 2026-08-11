const WamSettingsChange = 6396 // channel: regular

type SettingsChangeEvent struct {
	PreviousSettingValue string `wam:"previous_setting_value"` // field 2
	SettingType SETTINGTYPE `wam:"setting_type"` // field 3
	CurrentSettingValue string `wam:"current_setting_value"` // field 4
}