pub const WAM_CHANNEL_LINK_SHARE: u32 = 4728;

#[derive(Debug, Default)]
pub struct ChannelLinkShareEvent {
    /// field 1, wire `channel_link_share_direction`
    pub channel_link_share_direction: Option<CHANNELLINKSHAREDIRECTION>,
    /// field 2, wire `channel_link_share_entry_point`
    pub channel_link_share_entry_point: Option<CHANNELLINKSHAREENTRYPOINT>,
    /// field 3, wire `cid`
    pub cid: Option<String>,
    /// field 4, wire `channel_link_share_screen`
    pub channel_link_share_screen: Option<CHANNELLINKSHARESCREEN>,
    /// field 5, wire `unified_session_id`
    pub unified_session_id: Option<String>,
    /// field 6, wire `updates_tab_session_id`
    pub updates_tab_session_id: Option<i64>,
}