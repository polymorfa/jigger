const WamPttPlayback = 2044 // channel: regular

type PttPlaybackEvent struct {
	PttPlayRequestT string `wam:"ptt_play_request_t"` // field 1
	PttPlayerInitT string `wam:"ptt_player_init_t"` // field 2
	PttPlayerPlayT string `wam:"ptt_player_play_t"` // field 3
	PttPlaybackOverallT string `wam:"ptt_playback_overall_t"` // field 4
	PttTrigger PTTTRIGGERTYPE `wam:"ptt_trigger"` // field 5
	PttType PTTSTREAMTYPE `wam:"ptt_type"` // field 6
	PttMainThreadBlock bool `wam:"ptt_main_thread_block"` // field 7
	PttPlaybackFailed bool `wam:"ptt_playback_failed"` // field 8
	PttPlayer PTTPLAYERTYPE `wam:"ptt_player"` // field 9
	PttPlaybackSpeed PTTPLAYBACKSPEEDTYPE `wam:"ptt_playback_speed"` // field 10
	PttPlaybackSpeedCnt int64 `wam:"ptt_playback_speed_cnt"` // field 11
	PttDuration string `wam:"ptt_duration"` // field 12
	PttSeekCnt int64 `wam:"ptt_seek_cnt"` // field 13
	PttPlayedPct string `wam:"ptt_played_pct"` // field 14
	PttMiniPlayerClick int64 `wam:"ptt_mini_player_click"` // field 15
	PttMiniPlayerClose bool `wam:"ptt_mini_player_close"` // field 16
	PttMiniPlayerPauseCnt int64 `wam:"ptt_mini_player_pause_cnt"` // field 17
	PttPlayedOutOfChat bool `wam:"ptt_played_out_of_chat"` // field 18
	AudioStreamType AUDIOSTREAMTYPE `wam:"audio_stream_type"` // field 19
	PttAudioRouteChangeCount int64 `wam:"ptt_audio_route_change_count"` // field 20
	PttAudioRouteInitial AUDIOOUTPUTROUTE `wam:"ptt_audio_route_initial"` // field 21
	PttAudioRouteLast AUDIOOUTPUTROUTE `wam:"ptt_audio_route_last"` // field 22
	PttAudioRouteBluetoothTime string `wam:"ptt_audio_route_bluetooth_time"` // field 23
	PttAudioRouteEarpieceTime string `wam:"ptt_audio_route_earpiece_time"` // field 24
	PttAudioRouteHeadsetTime string `wam:"ptt_audio_route_headset_time"` // field 25
	PttAudioRouteSpeakerTime string `wam:"ptt_audio_route_speaker_time"` // field 26
	PttVolumeUpAfterMaxCount int64 `wam:"ptt_volume_up_after_max_count"` // field 27
}