pub const WAM_INLINE_VIDEO_PLAYBACK_CLOSED: u32 = 2032;

#[derive(Debug, Default)]
pub struct InlineVideoPlaybackClosedEvent {
    /// field 1, wire `inline_video_type`
    pub inline_video_type: Option<INLINEVIDEOTYPE>,
    /// field 2, wire `inline_video_duration_t`
    pub inline_video_duration_t: Option<String>,
    /// field 3, wire `inline_video_played`
    pub inline_video_played: Option<bool>,
    /// field 4, wire `inline_video_stall_t`
    pub inline_video_stall_t: Option<String>,
    /// field 5, wire `inline_video_watch_t`
    pub inline_video_watch_t: Option<String>,
    /// field 6, wire `inline_video_play_start_t`
    pub inline_video_play_start_t: Option<String>,
    /// field 7, wire `inline_video_cancel_before_play_state_t`
    pub inline_video_cancel_before_play_state_t: Option<String>,
    /// field 8, wire `inline_video_complete`
    pub inline_video_complete: Option<bool>,
    /// field 9, wire `inline_video_completion_rate`
    pub inline_video_completion_rate: Option<i64>,
    /// field 10, wire `inline_video_cta_click`
    pub inline_video_cta_click: Option<INLINEVIDEOCTACLICK>,
    /// field 11, wire `inline_video_error`
    pub inline_video_error: Option<String>,
    /// field 12, wire `message_type`
    pub message_type: Option<MESSAGETYPE>,
    /// field 13, wire `inline_video_has_rcat`
    pub inline_video_has_rcat: Option<bool>,
    /// field 14, wire `chat_size`
    pub chat_size: Option<i64>,
    /// field 15, wire `is_sent_by_me`
    pub is_sent_by_me: Option<bool>,
    /// field 16, wire `rcat_sender_platform`
    pub rcat_sender_platform: Option<PLATFORMTYPE>,
}