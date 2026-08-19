pub const WAM_PS_CHANNEL_POST_FORWARD: u32 = 4746;

#[derive(Debug, Default)]
pub struct PsChannelPostForwardEvent {
    /// field 1, wire `channel_forward_group_type`
    pub channel_forward_group_type: Option<MESSAGECHATTYPE>,
    /// field 2, wire `cid`
    pub cid: Option<String>,
    /// field 3, wire `media_type`
    pub media_type: Option<MEDIATYPE>,
    /// field 4, wire `post_id`
    pub post_id: Option<String>,
    /// field 6, wire `channel_forward_content_type`
    pub channel_forward_content_type: Option<CHANNELFORWARDCONTENTTYPE>,
    /// field 7, wire `destination_channel_id`
    pub destination_channel_id: Option<String>,
    /// field 8, wire `destination_post_id`
    pub destination_post_id: Option<String>,
    /// field 9, wire `is_second_order`
    pub is_second_order: Option<bool>,
}