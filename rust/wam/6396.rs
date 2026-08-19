pub const WAM_SETTINGS_CHANGE: u32 = 6396;

#[derive(Debug, Default)]
pub struct SettingsChangeEvent {
    /// field 2, wire `previous_setting_value`
    pub previous_setting_value: Option<String>,
    /// field 3, wire `setting_type`
    pub setting_type: Option<SETTINGTYPE>,
    /// field 4, wire `current_setting_value`
    pub current_setting_value: Option<String>,
}