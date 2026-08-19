pub const WAM_DISAPPEARING_MODE_SETTING_CHANGE: u32 = 3056;

#[derive(Debug, Default)]
pub struct DisappearingModeSettingChangeEvent {
    /// field 1, wire `previous_ephemerality_duration`
    pub previous_ephemerality_duration: Option<i64>,
    /// field 2, wire `new_ephemerality_duration`
    pub new_ephemerality_duration: Option<i64>,
    /// field 3, wire `last_toggle_timestamp`
    pub last_toggle_timestamp: Option<i64>,
    /// field 4, wire `disappearing_mode_entry_point`
    pub disappearing_mode_entry_point: Option<DISAPPEARINGMODEENTRYPOINTTYPE>,
    /// field 5, wire `after_read_duration`
    pub after_read_duration: Option<i64>,
    /// field 7, wire `error_code`
    pub error_code: Option<i64>,
    /// field 8, wire `is_after_read`
    pub is_after_read: Option<bool>,
    /// field 9, wire `is_success`
    pub is_success: Option<bool>,
    /// field 10, wire `previous_ephemerality_type`
    pub previous_ephemerality_type: Option<PREVIOUSEPHEMERALITYTYPE>,
}