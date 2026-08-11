pub const WAM_MEDIA_STREAM_PLAYBACK: u32 = 1584;

#[derive(Debug, Default)]
pub struct MediaStreamPlaybackEvent {
    /// field 1, wire `overall_t`
    pub overall_t: Option<String>,
    /// field 2, wire `media_size`
    pub media_size: Option<String>,
    /// field 3, wire `media_type`
    pub media_type: Option<MEDIATYPE>,
    /// field 4, wire `bytes_downloaded_start`
    pub bytes_downloaded_start: Option<String>,
    /// field 5, wire `bytes_transferred`
    pub bytes_transferred: Option<String>,
    /// field 6, wire `video_duration`
    pub video_duration: Option<i64>,
    /// field 7, wire `initial_buffering_t`
    pub initial_buffering_t: Option<String>,
    /// field 8, wire `total_rebuffering_t`
    pub total_rebuffering_t: Option<String>,
    /// field 9, wire `total_rebuffering_count`
    pub total_rebuffering_count: Option<i64>,
    /// field 10, wire `overall_play_t`
    pub overall_play_t: Option<String>,
    /// field 11, wire `playback_state`
    pub playback_state: Option<PLAYBACKSTATETYPE>,
    /// field 12, wire `forced_play_count`
    pub forced_play_count: Option<i64>,
    /// field 13, wire `seek_count`
    pub seek_count: Option<i64>,
    /// field 14, wire `playback_count`
    pub playback_count: Option<i64>,
    /// field 15, wire `did_play`
    pub did_play: Option<bool>,
    /// field 16, wire `playback_origin`
    pub playback_origin: Option<PLAYBACKORIGINTYPE>,
    /// field 17, wire `playback_error`
    pub playback_error: Option<i64>,
    /// field 18, wire `status_id`
    pub status_id: Option<String>,
}