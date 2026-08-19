pub const WAM_PTT_PLAYBACK: u32 = 2044;

#[derive(Debug, Default)]
pub struct PttPlaybackEvent {
    /// field 1, wire `ptt_play_request_t`
    pub ptt_play_request_t: Option<String>,
    /// field 2, wire `ptt_player_init_t`
    pub ptt_player_init_t: Option<String>,
    /// field 3, wire `ptt_player_play_t`
    pub ptt_player_play_t: Option<String>,
    /// field 4, wire `ptt_playback_overall_t`
    pub ptt_playback_overall_t: Option<String>,
    /// field 5, wire `ptt_trigger`
    pub ptt_trigger: Option<PTTTRIGGERTYPE>,
    /// field 6, wire `ptt_type`
    pub ptt_type: Option<PTTSTREAMTYPE>,
    /// field 7, wire `ptt_main_thread_block`
    pub ptt_main_thread_block: Option<bool>,
    /// field 8, wire `ptt_playback_failed`
    pub ptt_playback_failed: Option<bool>,
    /// field 9, wire `ptt_player`
    pub ptt_player: Option<PTTPLAYERTYPE>,
    /// field 10, wire `ptt_playback_speed`
    pub ptt_playback_speed: Option<PTTPLAYBACKSPEEDTYPE>,
    /// field 11, wire `ptt_playback_speed_cnt`
    pub ptt_playback_speed_cnt: Option<i64>,
    /// field 12, wire `ptt_duration`
    pub ptt_duration: Option<String>,
    /// field 13, wire `ptt_seek_cnt`
    pub ptt_seek_cnt: Option<i64>,
    /// field 14, wire `ptt_played_pct`
    pub ptt_played_pct: Option<String>,
    /// field 15, wire `ptt_mini_player_click`
    pub ptt_mini_player_click: Option<i64>,
    /// field 16, wire `ptt_mini_player_close`
    pub ptt_mini_player_close: Option<bool>,
    /// field 17, wire `ptt_mini_player_pause_cnt`
    pub ptt_mini_player_pause_cnt: Option<i64>,
    /// field 18, wire `ptt_played_out_of_chat`
    pub ptt_played_out_of_chat: Option<bool>,
    /// field 19, wire `audio_stream_type`
    pub audio_stream_type: Option<AUDIOSTREAMTYPE>,
    /// field 20, wire `ptt_audio_route_change_count`
    pub ptt_audio_route_change_count: Option<i64>,
    /// field 21, wire `ptt_audio_route_initial`
    pub ptt_audio_route_initial: Option<AUDIOOUTPUTROUTE>,
    /// field 22, wire `ptt_audio_route_last`
    pub ptt_audio_route_last: Option<AUDIOOUTPUTROUTE>,
    /// field 23, wire `ptt_audio_route_bluetooth_time`
    pub ptt_audio_route_bluetooth_time: Option<String>,
    /// field 24, wire `ptt_audio_route_earpiece_time`
    pub ptt_audio_route_earpiece_time: Option<String>,
    /// field 25, wire `ptt_audio_route_headset_time`
    pub ptt_audio_route_headset_time: Option<String>,
    /// field 26, wire `ptt_audio_route_speaker_time`
    pub ptt_audio_route_speaker_time: Option<String>,
    /// field 27, wire `ptt_volume_up_after_max_count`
    pub ptt_volume_up_after_max_count: Option<i64>,
}