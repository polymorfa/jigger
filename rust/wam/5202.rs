pub const WAM_CHANNEL_SIMILAR_CHANNELS: u32 = 5202;

#[derive(Debug, Default)]
pub struct ChannelSimilarChannelsEvent {
    /// field 1, wire `banner_status`
    pub banner_status: Option<BANNERSTATUS>,
    /// field 2, wire `banner_status_reason`
    pub banner_status_reason: Option<BANNERSTATUSREASON>,
    /// field 3, wire `cid`
    pub cid: Option<String>,
    /// field 4, wire `similar_channel_display_rank`
    pub similar_channel_display_rank: Option<i64>,
    /// field 5, wire `similar_channel_event_surface`
    pub similar_channel_event_surface: Option<CHANNELEVENTSURFACE>,
    /// field 6, wire `similar_channel_id`
    pub similar_channel_id: Option<String>,
    /// field 7, wire `similar_channel_rank`
    pub similar_channel_rank: Option<i64>,
    /// field 9, wire `similar_channel_user_type`
    pub similar_channel_user_type: Option<CHANNELUSERTYPE>,
    /// field 10, wire `similar_channels_session_id`
    pub similar_channels_session_id: Option<i64>,
    /// field 11, wire `unified_session_id`
    pub unified_session_id: Option<String>,
    /// field 12, wire `updates_tab_session_id`
    pub updates_tab_session_id: Option<i64>,
}