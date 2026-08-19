pub const WAM_SCREEN_LOCK_SETTINGS_DATA: u32 = 4802;

#[derive(Debug, Default)]
pub struct ScreenLockSettingsDataEvent {
    /// field 1, wire `screen_auto_lock_duration`
    pub screen_auto_lock_duration: Option<i64>,
}