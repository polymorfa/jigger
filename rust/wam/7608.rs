pub const WAM_RINGTONE_SCREEN: u32 = 7608;

#[derive(Debug, Default)]
pub struct RingtoneScreenEvent {
    /// field 1, wire `premium_ringtones_downloaded_count`
    pub premium_ringtones_downloaded_count: Option<i64>,
    /// field 2, wire `ringtone_change_applied`
    pub ringtone_change_applied: Option<bool>,
    /// field 3, wire `ringtone_id`
    pub ringtone_id: Option<String>,
    /// field 4, wire `ringtone_selection_cancelled`
    pub ringtone_selection_cancelled: Option<bool>,
    /// field 5, wire `ringtone_source`
    pub ringtone_source: Option<RINGTONEENTRYTYPE>,
    /// field 6, wire `ringtone_subscribe_selected`
    pub ringtone_subscribe_selected: Option<bool>,
    /// field 7, wire `ringtone_reset`
    pub ringtone_reset: Option<bool>,
}