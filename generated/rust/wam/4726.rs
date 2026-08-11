pub const WAM_CHANNEL_DYI: u32 = 4726;

#[derive(Debug, Default)]
pub struct ChannelDyiEvent {
    /// field 1, wire `channel_dyi_event_type`
    pub channel_dyi_event_type: Option<CHANNELDYIEVENTTYPE>,
    /// field 2, wire `unified_session_id`
    pub unified_session_id: Option<String>,
    /// field 3, wire `updates_tab_session_id`
    pub updates_tab_session_id: Option<i64>,
}