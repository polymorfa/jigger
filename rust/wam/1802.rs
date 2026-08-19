pub const WAM_VIDEO_TRANSCODER: u32 = 1802;

#[derive(Debug, Default)]
pub struct VideoTranscoderEvent {
    /// field 1, wire `transcoder_algorithm`
    pub transcoder_algorithm: Option<VIDEOTRANSCODERALGORITHMTYPE>,
    /// field 2, wire `transcoder_result`
    pub transcoder_result: Option<VIDEOTRANSCODERRESULTTYPE>,
    /// field 3, wire `transcoder_t`
    pub transcoder_t: Option<String>,
    /// field 4, wire `transcoder_is_passthrough`
    pub transcoder_is_passthrough: Option<bool>,
    /// field 5, wire `transcoder_contains_videocomposition`
    pub transcoder_contains_videocomposition: Option<bool>,
    /// field 6, wire `transcoder_has_edits`
    pub transcoder_has_edits: Option<bool>,
    /// field 7, wire `source_file_size`
    pub source_file_size: Option<String>,
    /// field 8, wire `source_duration`
    pub source_duration: Option<String>,
    /// field 9, wire `source_width`
    pub source_width: Option<String>,
    /// field 10, wire `source_height`
    pub source_height: Option<String>,
    /// field 11, wire `source_video_bit_rate`
    pub source_video_bit_rate: Option<String>,
    /// field 12, wire `source_audio_bit_rate`
    pub source_audio_bit_rate: Option<String>,
    /// field 13, wire `source_frame_rate`
    pub source_frame_rate: Option<String>,
    /// field 14, wire `source_format`
    pub source_format: Option<VIDEOTRANSCODERSOURCEFORMATTYPE>,
    /// field 15, wire `target_file_size`
    pub target_file_size: Option<String>,
    /// field 16, wire `target_duration`
    pub target_duration: Option<String>,
    /// field 17, wire `target_width`
    pub target_width: Option<String>,
    /// field 18, wire `target_height`
    pub target_height: Option<String>,
    /// field 19, wire `target_video_bit_rate`
    pub target_video_bit_rate: Option<String>,
    /// field 20, wire `target_audio_bit_rate`
    pub target_audio_bit_rate: Option<String>,
    /// field 21, wire `target_frame_rate`
    pub target_frame_rate: Option<String>,
    /// field 22, wire `target_format`
    pub target_format: Option<VIDEOTRANSCODERTARGETFORMATTYPE>,
    /// field 23, wire `source_audio_codec`
    pub source_audio_codec: Option<String>,
    /// field 24, wire `source_container_format`
    pub source_container_format: Option<String>,
    /// field 25, wire `source_file_extension`
    pub source_file_extension: Option<String>,
    /// field 26, wire `source_mime_type`
    pub source_mime_type: Option<String>,
    /// field 27, wire `source_video_codec`
    pub source_video_codec: Option<String>,
}