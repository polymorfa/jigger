pub const WAM_SETTINGS_SEARCH_TAP: u32 = 4016;

#[derive(Debug, Default)]
pub struct SettingsSearchTapEvent {
    /// field 1, wire `tap_item_name`
    pub tap_item_name: Option<String>,
    /// field 2, wire `top_level_parent_setting`
    pub top_level_parent_setting: Option<SETTINGSITEMTYPE>,
}