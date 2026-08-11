export const WamPtt = 458 as const

export interface PttEvent {
  /** field 1, wire `ptt_result` */
  pttResult?: PTTRESULTTYPE
  /** field 2, wire `ptt_source` */
  pttSource?: PTTSOURCETYPE
  /** field 3, wire `ptt_size` */
  pttSize?: string
  /** field 4, wire `ptt_lock` */
  pttLock?: boolean
  /** field 5, wire `ptt_duration` */
  pttDuration?: string
  /** field 6, wire `ptt_stop` */
  pttStop?: boolean
  /** field 7, wire `ptt_draft_play_cnt` */
  pttDraftPlayCnt?: number
  /** field 8, wire `ptt_draft_seek_cnt` */
  pttDraftSeekCnt?: number
  /** field 9, wire `ptt_pause_cnt` */
  pttPauseCnt?: number
  /** field 10, wire `ptt_stop_tap_cnt` */
  pttStopTapCnt?: number
  /** field 11, wire `ptt_avg_noise_loudness` */
  pttAvgNoiseLoudness?: string
  /** field 12, wire `ptt_avg_noise_loudness_reduction` */
  pttAvgNoiseLoudnessReduction?: string
  /** field 13, wire `ptt_avg_speech_loudness` */
  pttAvgSpeechLoudness?: string
  /** field 14, wire `ptt_avg_speech_loudness_reduction` */
  pttAvgSpeechLoudnessReduction?: string
  /** field 15, wire `is_meta_ai_thread` */
  isMetaAiThread?: boolean
  /** field 16, wire `ptt_audio_engine` */
  pttAudioEngine?: number
  /** field 17, wire `ptt_auddev_recorder_avg_cb_t` */
  pttAuddevRecorderAvgCbT?: string
  /** field 18, wire `ptt_auddev_recorder_init_t` */
  pttAuddevRecorderInitT?: string
  /** field 19, wire `ptt_auddev_recorder_start_t` */
  pttAuddevRecorderStartT?: string
  /** field 20, wire `ptt_auddev_recorder_stop_t` */
  pttAuddevRecorderStopT?: string
  /** field 21, wire `ptt_recorder_cb_bucket_gte20ms_pct` */
  pttRecorderCbBucketGte20msPct?: string
  /** field 22, wire `ptt_recorder_cb_bucket_lt10ms_pct` */
  pttRecorderCbBucketLt10msPct?: string
  /** field 23, wire `ptt_recorder_cb_bucket_lt15ms_pct` */
  pttRecorderCbBucketLt15msPct?: string
  /** field 24, wire `ptt_recorder_cb_bucket_lt20ms_pct` */
  pttRecorderCbBucketLt20msPct?: string
  /** field 25, wire `ptt_recorder_cb_bucket_lt5ms_pct` */
  pttRecorderCbBucketLt5msPct?: string
  /** field 26, wire `ptt_recorder_noise_duration_ms` */
  pttRecorderNoiseDurationMs?: string
  /** field 27, wire `ptt_recorder_speech_duration_ms` */
  pttRecorderSpeechDurationMs?: string
  /** field 38, wire `ptt_ogg_page_write_bucket_gte10ms_pct` */
  pttOggPageWriteBucketGte10msPct?: string
  /** field 39, wire `ptt_ogg_page_write_bucket_lt10ms_pct` */
  pttOggPageWriteBucketLt10msPct?: string
  /** field 40, wire `ptt_ogg_page_write_bucket_lt2ms_pct` */
  pttOggPageWriteBucketLt2msPct?: string
  /** field 41, wire `ptt_ogg_page_write_bucket_lt4ms_pct` */
  pttOggPageWriteBucketLt4msPct?: string
  /** field 42, wire `ptt_ogg_page_write_bucket_lt6ms_pct` */
  pttOggPageWriteBucketLt6msPct?: string
  /** field 43, wire `ptt_ogg_page_write_bucket_lt8ms_pct` */
  pttOggPageWriteBucketLt8msPct?: string
  /** field 44, wire `ptt_opus_encode_bucket_gte10ms_pct` */
  pttOpusEncodeBucketGte10msPct?: string
  /** field 45, wire `ptt_opus_encode_bucket_lt10ms_pct` */
  pttOpusEncodeBucketLt10msPct?: string
  /** field 46, wire `ptt_opus_encode_bucket_lt2ms_pct` */
  pttOpusEncodeBucketLt2msPct?: string
  /** field 47, wire `ptt_opus_encode_bucket_lt4ms_pct` */
  pttOpusEncodeBucketLt4msPct?: string
  /** field 48, wire `ptt_opus_encode_bucket_lt6ms_pct` */
  pttOpusEncodeBucketLt6msPct?: string
  /** field 49, wire `ptt_opus_encode_bucket_lt8ms_pct` */
  pttOpusEncodeBucketLt8msPct?: string
  /** field 50, wire `ptt_intensity_aggregate_value` */
  pttIntensityAggregateValue?: string
  /** field 51, wire `ptt_waveform_result` */
  pttWaveformResult?: PTTWAVEFORMRESULT
  /** field 52, wire `audio_driver_restart_count` */
  audioDriverRestartCount?: number
  /** field 53, wire `audio_driver_restart_reason` */
  audioDriverRestartReason?: number
  /** field 54, wire `device_agc_state` */
  deviceAgcState?: DEVICEAGCSTATETYPE
  /** field 55, wire `device_ns_state` */
  deviceNsState?: DEVICENSSTATETYPE
  /** field 56, wire `ptt_capture_sample_rate_effective_hz` */
  pttCaptureSampleRateEffectiveHz?: number
  /** field 57, wire `ptt_capture_sample_rate_requested_hz` */
  pttCaptureSampleRateRequestedHz?: number
}