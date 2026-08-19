pub const WAM_WEFR_GROUP_CLIENT_EXPOSURE: u32 = 6640;

#[derive(Debug, Default)]
pub struct WefrGroupClientExposureEvent {
    /// field 1, wire `exposure_key`
    pub exposure_key: Option<String>,
    /// field 2, wire `group_jid`
    pub group_jid: Option<String>,
    /// field 3, wire `sent_with_daily`
    pub sent_with_daily: Option<bool>,
}