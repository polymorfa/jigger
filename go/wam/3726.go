const WamPrivacySettingsClick = 3726 // channel: regular

type PrivacySettingsClickEvent struct {
	PrivacyControlEntryPoint PRIVACYCONTROLENTRYPOINTTYPE `wam:"privacy_control_entry_point"` // field 1
	PrivacyControlItem PRIVACYCONTROLITEMTYPE `wam:"privacy_control_item"` // field 2
}