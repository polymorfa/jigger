pub const WAM_CHANNELS_VIDEO_PLAY: u32 = 6556;

#[derive(Debug, Default)]
pub struct ChannelsVideoPlayEvent {
    /// field 1, wire `auto_play_t`
    pub auto_play_t: Option<i64>,
    /// field 2, wire `cid`
    pub cid: Option<String>,
    /// field 3, wire `height`
    pub height: Option<i64>,
    /// field 4, wire `post_id`
    pub post_id: Option<String>,
    /// field 5, wire `video_duration`
    pub video_duration: Option<i64>,
    /// field 6, wire `video_initial_buffering_t`
    pub video_initial_buffering_t: Option<String>,
    /// field 7, wire `video_play_origin`
    pub video_play_origin: Option<VIDEOPLAYORIGIN>,
    /// field 8, wire `video_play_result`
    pub video_play_result: Option<VIDEOPLAYRESULT>,
    /// field 9, wire `video_play_t`
    pub video_play_t: Option<i64>,
    /// field 10, wire `video_play_type`
    pub video_play_type: Option<VIDEOPLAYTYPE>,
    /// field 11, wire `video_size`
    pub video_size: Option<String>,
    /// field 12, wire `width`
    pub width: Option<i64>,
    /// field 13, wire `finish_count`
    pub finish_count: Option<i64>,
    /// field 14, wire `watching_module`
    pub watching_module: Option<String>,
}