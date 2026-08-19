pub const WAM_BUSINESS_MUTE: u32 = 1376;

#[derive(Debug, Default)]
pub struct BusinessMuteEvent {
    /// field 1, wire `mutee_id`
    pub mutee_id: Option<String>,
    /// field 2, wire `mute_t`
    pub mute_t: Option<String>,
}