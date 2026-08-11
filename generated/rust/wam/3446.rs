pub const WAM_DISAPPEARING_MODE_SETTING_EVENTS: u32 = 3446;

#[derive(Debug, Default)]
pub struct DisappearingModeSettingEventsEvent {
    /// field 1, wire `disappearing_mode_setting_event_name`
    pub disappearing_mode_setting_event_name: Option<DISAPPEARINGMODESETTINGEVENTNAMETYPE>,
    /// field 2, wire `last_toggle_timestamp`
    pub last_toggle_timestamp: Option<i64>,
    /// field 3, wire `new_ephemerality_duration`
    pub new_ephemerality_duration: Option<i64>,
    /// field 4, wire `previous_ephemerality_duration`
    pub previous_ephemerality_duration: Option<i64>,
    /// field 5, wire `disappearing_mode_entry_point`
    pub disappearing_mode_entry_point: Option<DISAPPEARINGMODEENTRYPOINTTYPE>,
    /// field 6, wire `is_after_read`
    pub is_after_read: Option<bool>,
}