pub const WAM_LIMIT_SHARING_SETTING_UPDATE: u32 = 6390;

#[derive(Debug, Default)]
pub struct LimitSharingSettingUpdateEvent {
    /// field 1, wire `thread_id`
    pub thread_id: Option<String>,
    /// field 2, wire `toggle_update_action`
    pub toggle_update_action: Option<TOGGLEUPDATEACTION>,
    /// field 3, wire `opus_action`
    pub opus_action: Option<OPUSACTION>,
}