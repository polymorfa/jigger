pub const WAM_PTT: u32 = 458;

#[derive(Debug, Default)]
pub struct PttEvent {
    /// field 1, wire `ptt_result`
    pub ptt_result: Option<PTTRESULTTYPE>,
    /// field 2, wire `ptt_source`
    pub ptt_source: Option<PTTSOURCETYPE>,
    /// field 3, wire `ptt_size`
    pub ptt_size: Option<String>,
    /// field 4, wire `ptt_lock`
    pub ptt_lock: Option<bool>,
    /// field 5, wire `ptt_duration`
    pub ptt_duration: Option<String>,
    /// field 6, wire `ptt_stop`
    pub ptt_stop: Option<bool>,
    /// field 7, wire `ptt_draft_play_cnt`
    pub ptt_draft_play_cnt: Option<i64>,
    /// field 8, wire `ptt_draft_seek_cnt`
    pub ptt_draft_seek_cnt: Option<i64>,
    /// field 9, wire `ptt_pause_cnt`
    pub ptt_pause_cnt: Option<i64>,
    /// field 10, wire `ptt_stop_tap_cnt`
    pub ptt_stop_tap_cnt: Option<i64>,
    /// field 11, wire `ptt_avg_noise_loudness`
    pub ptt_avg_noise_loudness: Option<String>,
    /// field 12, wire `ptt_avg_noise_loudness_reduction`
    pub ptt_avg_noise_loudness_reduction: Option<String>,
    /// field 13, wire `ptt_avg_speech_loudness`
    pub ptt_avg_speech_loudness: Option<String>,
    /// field 14, wire `ptt_avg_speech_loudness_reduction`
    pub ptt_avg_speech_loudness_reduction: Option<String>,
    /// field 15, wire `is_meta_ai_thread`
    pub is_meta_ai_thread: Option<bool>,
    /// field 16, wire `ptt_audio_engine`
    pub ptt_audio_engine: Option<i64>,
    /// field 17, wire `ptt_auddev_recorder_avg_cb_t`
    pub ptt_auddev_recorder_avg_cb_t: Option<String>,
    /// field 18, wire `ptt_auddev_recorder_init_t`
    pub ptt_auddev_recorder_init_t: Option<String>,
    /// field 19, wire `ptt_auddev_recorder_start_t`
    pub ptt_auddev_recorder_start_t: Option<String>,
    /// field 20, wire `ptt_auddev_recorder_stop_t`
    pub ptt_auddev_recorder_stop_t: Option<String>,
    /// field 21, wire `ptt_recorder_cb_bucket_gte20ms_pct`
    pub ptt_recorder_cb_bucket_gte20ms_pct: Option<String>,
    /// field 22, wire `ptt_recorder_cb_bucket_lt10ms_pct`
    pub ptt_recorder_cb_bucket_lt10ms_pct: Option<String>,
    /// field 23, wire `ptt_recorder_cb_bucket_lt15ms_pct`
    pub ptt_recorder_cb_bucket_lt15ms_pct: Option<String>,
    /// field 24, wire `ptt_recorder_cb_bucket_lt20ms_pct`
    pub ptt_recorder_cb_bucket_lt20ms_pct: Option<String>,
    /// field 25, wire `ptt_recorder_cb_bucket_lt5ms_pct`
    pub ptt_recorder_cb_bucket_lt5ms_pct: Option<String>,
    /// field 26, wire `ptt_recorder_noise_duration_ms`
    pub ptt_recorder_noise_duration_ms: Option<String>,
    /// field 27, wire `ptt_recorder_speech_duration_ms`
    pub ptt_recorder_speech_duration_ms: Option<String>,
    /// field 38, wire `ptt_ogg_page_write_bucket_gte10ms_pct`
    pub ptt_ogg_page_write_bucket_gte10ms_pct: Option<String>,
    /// field 39, wire `ptt_ogg_page_write_bucket_lt10ms_pct`
    pub ptt_ogg_page_write_bucket_lt10ms_pct: Option<String>,
    /// field 40, wire `ptt_ogg_page_write_bucket_lt2ms_pct`
    pub ptt_ogg_page_write_bucket_lt2ms_pct: Option<String>,
    /// field 41, wire `ptt_ogg_page_write_bucket_lt4ms_pct`
    pub ptt_ogg_page_write_bucket_lt4ms_pct: Option<String>,
    /// field 42, wire `ptt_ogg_page_write_bucket_lt6ms_pct`
    pub ptt_ogg_page_write_bucket_lt6ms_pct: Option<String>,
    /// field 43, wire `ptt_ogg_page_write_bucket_lt8ms_pct`
    pub ptt_ogg_page_write_bucket_lt8ms_pct: Option<String>,
    /// field 44, wire `ptt_opus_encode_bucket_gte10ms_pct`
    pub ptt_opus_encode_bucket_gte10ms_pct: Option<String>,
    /// field 45, wire `ptt_opus_encode_bucket_lt10ms_pct`
    pub ptt_opus_encode_bucket_lt10ms_pct: Option<String>,
    /// field 46, wire `ptt_opus_encode_bucket_lt2ms_pct`
    pub ptt_opus_encode_bucket_lt2ms_pct: Option<String>,
    /// field 47, wire `ptt_opus_encode_bucket_lt4ms_pct`
    pub ptt_opus_encode_bucket_lt4ms_pct: Option<String>,
    /// field 48, wire `ptt_opus_encode_bucket_lt6ms_pct`
    pub ptt_opus_encode_bucket_lt6ms_pct: Option<String>,
    /// field 49, wire `ptt_opus_encode_bucket_lt8ms_pct`
    pub ptt_opus_encode_bucket_lt8ms_pct: Option<String>,
    /// field 50, wire `ptt_intensity_aggregate_value`
    pub ptt_intensity_aggregate_value: Option<String>,
    /// field 51, wire `ptt_waveform_result`
    pub ptt_waveform_result: Option<PTTWAVEFORMRESULT>,
    /// field 52, wire `audio_driver_restart_count`
    pub audio_driver_restart_count: Option<i64>,
    /// field 53, wire `audio_driver_restart_reason`
    pub audio_driver_restart_reason: Option<i64>,
    /// field 54, wire `device_agc_state`
    pub device_agc_state: Option<DEVICEAGCSTATETYPE>,
    /// field 55, wire `device_ns_state`
    pub device_ns_state: Option<DEVICENSSTATETYPE>,
    /// field 56, wire `ptt_capture_sample_rate_effective_hz`
    pub ptt_capture_sample_rate_effective_hz: Option<i64>,
    /// field 57, wire `ptt_capture_sample_rate_requested_hz`
    pub ptt_capture_sample_rate_requested_hz: Option<i64>,
}