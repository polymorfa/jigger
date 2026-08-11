pub const WAM_SETTINGS_SEARCH_INITIATE: u32 = 4014;

#[derive(Debug, Default)]
pub struct SettingsSearchInitiateEvent {
    /// field 1, wire `settings_page_type`
    pub settings_page_type: Option<SETTINGSPAGETYPE>,
}