pub const WAM_CHANNEL_MEMBERSHIP_ACTION_EVENT: u32 = 5762;

#[derive(Debug, Default)]
pub struct ChannelMembershipActionEventEvent {
    /// field 1, wire `action_result`
    pub action_result: Option<CHANNELMEMBERSHIPACTIONRESULT>,
    /// field 2, wire `cid`
    pub cid: Option<String>,
    /// field 3, wire `unified_session_id`
    pub unified_session_id: Option<String>,
    /// field 4, wire `updates_tab_session_id`
    pub updates_tab_session_id: Option<i64>,
}