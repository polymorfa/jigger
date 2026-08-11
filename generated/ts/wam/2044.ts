export const WamPttPlayback = 2044 as const

export interface PttPlaybackEvent {
  /** field 1, wire `ptt_play_request_t` */
  pttPlayRequestT?: string
  /** field 2, wire `ptt_player_init_t` */
  pttPlayerInitT?: string
  /** field 3, wire `ptt_player_play_t` */
  pttPlayerPlayT?: string
  /** field 4, wire `ptt_playback_overall_t` */
  pttPlaybackOverallT?: string
  /** field 5, wire `ptt_trigger` */
  pttTrigger?: PTTTRIGGERTYPE
  /** field 6, wire `ptt_type` */
  pttType?: PTTSTREAMTYPE
  /** field 7, wire `ptt_main_thread_block` */
  pttMainThreadBlock?: boolean
  /** field 8, wire `ptt_playback_failed` */
  pttPlaybackFailed?: boolean
  /** field 9, wire `ptt_player` */
  pttPlayer?: PTTPLAYERTYPE
  /** field 10, wire `ptt_playback_speed` */
  pttPlaybackSpeed?: PTTPLAYBACKSPEEDTYPE
  /** field 11, wire `ptt_playback_speed_cnt` */
  pttPlaybackSpeedCnt?: number
  /** field 12, wire `ptt_duration` */
  pttDuration?: string
  /** field 13, wire `ptt_seek_cnt` */
  pttSeekCnt?: number
  /** field 14, wire `ptt_played_pct` */
  pttPlayedPct?: string
  /** field 15, wire `ptt_mini_player_click` */
  pttMiniPlayerClick?: number
  /** field 16, wire `ptt_mini_player_close` */
  pttMiniPlayerClose?: boolean
  /** field 17, wire `ptt_mini_player_pause_cnt` */
  pttMiniPlayerPauseCnt?: number
  /** field 18, wire `ptt_played_out_of_chat` */
  pttPlayedOutOfChat?: boolean
  /** field 19, wire `audio_stream_type` */
  audioStreamType?: AUDIOSTREAMTYPE
  /** field 20, wire `ptt_audio_route_change_count` */
  pttAudioRouteChangeCount?: number
  /** field 21, wire `ptt_audio_route_initial` */
  pttAudioRouteInitial?: AUDIOOUTPUTROUTE
  /** field 22, wire `ptt_audio_route_last` */
  pttAudioRouteLast?: AUDIOOUTPUTROUTE
  /** field 23, wire `ptt_audio_route_bluetooth_time` */
  pttAudioRouteBluetoothTime?: string
  /** field 24, wire `ptt_audio_route_earpiece_time` */
  pttAudioRouteEarpieceTime?: string
  /** field 25, wire `ptt_audio_route_headset_time` */
  pttAudioRouteHeadsetTime?: string
  /** field 26, wire `ptt_audio_route_speaker_time` */
  pttAudioRouteSpeakerTime?: string
  /** field 27, wire `ptt_volume_up_after_max_count` */
  pttVolumeUpAfterMaxCount?: number
}