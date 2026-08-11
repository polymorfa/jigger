pub const WAM_SETTINGS_CLICK: u32 = 2214;

#[derive(Debug, Default)]
pub struct SettingsClickEvent {
    /// field 1, wire `settings_item`
    pub settings_item: Option<SETTINGSITEMTYPE>,
    /// field 2, wire `settings_click_entry_point`
    pub settings_click_entry_point: Option<SETTINGSCLICKENTRYPOINT>,
    /// field 3, wire `settings_page_type`
    pub settings_page_type: Option<SETTINGSPAGETYPE>,
    /// field 4, wire `is_bookmark_app_installed`
    pub is_bookmark_app_installed: Option<bool>,
}