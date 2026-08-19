const WamSettingsClick = 2214 // channel: regular

type SettingsClickEvent struct {
	SettingsItem SETTINGSITEMTYPE `wam:"settings_item"` // field 1
	SettingsClickEntryPoint SETTINGSCLICKENTRYPOINT `wam:"settings_click_entry_point"` // field 2
	SettingsPageType SETTINGSPAGETYPE `wam:"settings_page_type"` // field 3
	IsBookmarkAppInstalled bool `wam:"is_bookmark_app_installed"` // field 4
}