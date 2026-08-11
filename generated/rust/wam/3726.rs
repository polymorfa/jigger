pub const WAM_PRIVACY_SETTINGS_CLICK: u32 = 3726;

#[derive(Debug, Default)]
pub struct PrivacySettingsClickEvent {
    /// field 1, wire `privacy_control_entry_point`
    pub privacy_control_entry_point: Option<PRIVACYCONTROLENTRYPOINTTYPE>,
    /// field 2, wire `privacy_control_item`
    pub privacy_control_item: Option<PRIVACYCONTROLITEMTYPE>,
}