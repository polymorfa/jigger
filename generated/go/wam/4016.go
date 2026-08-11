const WamSettingsSearchTap = 4016 // channel: regular

type SettingsSearchTapEvent struct {
	TapItemName string `wam:"tap_item_name"` // field 1
	TopLevelParentSetting SETTINGSITEMTYPE `wam:"top_level_parent_setting"` // field 2
}