pub const WAM_CHANNEL_OPEN_FROM_INVITE: u32 = 7134;

#[derive(Debug, Default)]
pub struct ChannelOpenFromInviteEvent {
    /// field 1, wire `channel_entry_point`
    pub channel_entry_point: Option<CHANNELENTRYPOINT>,
    /// field 2, wire `channel_user_type`
    pub channel_user_type: Option<CHANNELUSERTYPE>,
    /// field 3, wire `discovery_surface`
    pub discovery_surface: Option<TSSURFACE>,
    /// field 4, wire `cid`
    pub cid: Option<String>,
}