pub const WAM_CHANNEL_ADMIN: u32 = 4556;

#[derive(Debug, Default)]
pub struct ChannelAdminEvent {
    /// field 1, wire `admin_flow_action_sequence_number`
    pub admin_flow_action_sequence_number: Option<i64>,
    /// field 2, wire `admin_flow_type`
    pub admin_flow_type: Option<ADMINFLOWTYPE>,
    /// field 3, wire `channel_admin_action`
    pub channel_admin_action: Option<CHANNELADMINACTION>,
    /// field 4, wire `channel_admin_session_id`
    pub channel_admin_session_id: Option<i64>,
    /// field 5, wire `unified_session_id`
    pub unified_session_id: Option<String>,
    /// field 6, wire `updates_tab_session_id`
    pub updates_tab_session_id: Option<i64>,
}