export const WamCall = 462 as const

export interface CallEvent {
  /** field 1, wire `call_side` */
  callSide?: CALLSIDE
  /** field 2, wire `call_from_ui` */
  callFromUi?: CALLFROMUI
  /** field 3, wire `xmpp_status` */
  xmppStatus?: XMPPSTATUS
  /** field 4, wire `peer_xmpp_status` */
  peerXmppStatus?: XMPPSTATUS
  /** field 5, wire `call_peer_platform` */
  callPeerPlatform?: string
  /** field 7, wire `call_self_ipv4` */
  callSelfIpv4?: number
  /** field 8, wire `call_peer_ipv4` */
  callPeerIpv4?: number
  /** field 9, wire `call_self_ip_str` */
  callSelfIpStr?: string
  /** field 10, wire `call_peer_ip_str` */
  callPeerIpStr?: string
  /** field 15, wire `call_peer_app_version` */
  callPeerAppVersion?: string
  /** field 16, wire `call_relay_bind_status` */
  callRelayBindStatus?: CALLRELAYBINDSTATUS
  /** field 17, wire `call_relay_server` */
  callRelayServer?: string
  /** field 18, wire `call_p2p_disabled` */
  callP2pDisabled?: boolean
  /** field 19, wire `call_test_bucket` */
  callTestBucket?: string
  /** field 20, wire `call_user_rate` */
  callUserRate?: number
  /** field 21, wire `long_connect` */
  longConnect?: boolean
  /** field 22, wire `call_interrupted` */
  callInterrupted?: boolean
  /** field 23, wire `call_ended_interrupted` */
  callEndedInterrupted?: boolean
  /** field 24, wire `call_record_callback_stopped` */
  callRecordCallbackStopped?: boolean
  /** field 25, wire `call_playback_callback_stopped` */
  callPlaybackCallbackStopped?: boolean
  /** field 26, wire `call_record_silence_ratio` */
  callRecordSilenceRatio?: number
  /** field 28, wire `call_record_frames_ps` */
  callRecordFramesPs?: number
  /** field 29, wire `call_recent_record_frames_ps` */
  callRecentRecordFramesPs?: string
  /** field 30, wire `call_sampling_rate` */
  callSamplingRate?: number
  /** field 31, wire `native_sampling_rate` */
  nativeSamplingRate?: string
  /** field 33, wire `builtin_aec_available` */
  builtinAecAvailable?: boolean
  /** field 34, wire `builtin_agc_available` */
  builtinAgcAvailable?: boolean
  /** field 35, wire `builtin_ns_available` */
  builtinNsAvailable?: boolean
  /** field 36, wire `builtin_aec_implementor` */
  builtinAecImplementor?: string
  /** field 37, wire `builtin_aec_uuid` */
  builtinAecUuid?: string
  /** field 38, wire `builtin_aec_enabled` */
  builtinAecEnabled?: boolean
  /** field 39, wire `call_aec_mode` */
  callAecMode?: AECMODE
  /** field 40, wire `call_sw_aec_type` */
  callSwAecType?: SWAECTYPE
  /** field 41, wire `call_sw_aec_mode` */
  callSwAecMode?: number
  /** field 42, wire `call_aec_offset` */
  callAecOffset?: number
  /** field 43, wire `call_aec_tail_length` */
  callAecTailLength?: number
  /** field 44, wire `call_echo_likelihood` */
  callEchoLikelihood?: number
  /** field 45, wire `call_hist_echo_likelihood` */
  callHistEchoLikelihood?: string
  /** field 46, wire `call_echo_energy` */
  callEchoEnergy?: string
  /** field 47, wire `call_echo_likelihood_before_ec` */
  callEchoLikelihoodBeforeEc?: string
  /** field 50, wire `call_calculated_ec_offset` */
  callCalculatedEcOffset?: number
  /** field 51, wire `call_calculated_ec_offset_stddev` */
  callCalculatedEcOffsetStddev?: number
  /** field 52, wire `call_agc_mode` */
  callAgcMode?: AGCMODE
  /** field 53, wire `call_ns_mode` */
  callNsMode?: NSMODE
  /** field 54, wire `call_audio_engine_type` */
  callAudioEngineType?: AUDIOENGINETYPE
  /** field 55, wire `call_android_audio_mode` */
  callAndroidAudioMode?: number
  /** field 56, wire `call_android_record_audio_source` */
  callAndroidRecordAudioSource?: number
  /** field 57, wire `call_android_record_audio_preset` */
  callAndroidRecordAudioPreset?: number
  /** field 63, wire `call_result` */
  callResult?: CALLRESULTTYPE
  /** field 66, wire `peer_call_result` */
  peerCallResult?: CALLRESULTTYPE
  /** field 68, wire `call_server_nack_error_code` */
  callServerNackErrorCode?: number
  /** field 69, wire `call_term_reason` */
  callTermReason?: CALLTERMREASON
  /** field 70, wire `call_end_reconnecting` */
  callEndReconnecting?: boolean
  /** field 71, wire `call_setup_error_type` */
  callSetupErrorType?: CALLSETUPERRORTYPE
  /** field 72, wire `call_transport` */
  callTransport?: CALLTRANSPORTTYPE
  /** field 76, wire `call_network` */
  callNetwork?: CALLNETWORKMEDIUM
  /** field 77, wire `call_network_subtype` */
  callNetworkSubtype?: number
  /** field 78, wire `call_transition_count` */
  callTransitionCount?: number
  /** field 79, wire `call_transport_relay_to_relay_fallback_count` */
  callTransportRelayToRelayFallbackCount?: number
  /** field 80, wire `call_transport_p2p_to_relay_fallback_count` */
  callTransportP2pToRelayFallbackCount?: number
  /** field 81, wire `encoder_comp_stepdowns` */
  encoderCompStepdowns?: number
  /** field 83, wire `audio_get_frame_underflow_ps` */
  audioGetFrameUnderflowPs?: number
  /** field 84, wire `record_circular_buffer_frame_count` */
  recordCircularBufferFrameCount?: number
  /** field 86, wire `user_rating` */
  userRating?: number
  /** field 87, wire `user_description` */
  userDescription?: string
  /** field 88, wire `user_problems` */
  userProblems?: number
  /** field 89, wire `present_end_call_confirmation` */
  presentEndCallConfirmation?: ENDCALLCONFIRMATIONTYPE
  /** field 90, wire `end_call_after_confirmation` */
  endCallAfterConfirmation?: ENDCALLCONFIRMATIONTYPE
  /** field 91, wire `is_ipv6_capable` */
  isIpv6Capable?: boolean
  /** field 92, wire `call_t` */
  callT?: string
  /** field 93, wire `call_playback_frames_ps` */
  callPlaybackFramesPs?: string
  /** field 94, wire `call_recent_playback_frames_ps` */
  callRecentPlaybackFramesPs?: string
  /** field 96, wire `call_audio_restart_count` */
  callAudioRestartCount?: string
  /** field 97, wire `call_audio_restart_reason` */
  callAudioRestartReason?: string
  /** field 98, wire `call_record_max_energy_ratio` */
  callRecordMaxEnergyRatio?: string
  /** field 99, wire `call_ec_restart_count` */
  callEcRestartCount?: string
  /** field 100, wire `call_rx_stopped_t` */
  callRxStoppedT?: string
  /** field 101, wire `call_setup_t` */
  callSetupT?: string
  /** field 102, wire `call_offer_elapsed_t` */
  callOfferElapsedT?: string
  /** field 103, wire `call_ringing_t` */
  callRingingT?: string
  /** field 104, wire `call_relay_create_t` */
  callRelayCreateT?: string
  /** field 105, wire `call_min_rtt` */
  callMinRtt?: string
  /** field 106, wire `call_max_rtt` */
  callMaxRtt?: string
  /** field 107, wire `call_avg_rtt` */
  callAvgRtt?: string
  /** field 108, wire `call_last_rtt` */
  callLastRtt?: string
  /** field 109, wire `call_initial_rtt` */
  callInitialRtt?: string
  /** field 110, wire `call_tx_pkt_loss_pct` */
  callTxPktLossPct?: string
  /** field 111, wire `call_tx_pkt_error_pct` */
  callTxPktErrorPct?: string
  /** field 112, wire `call_tx_avg_bitrate` */
  callTxAvgBitrate?: string
  /** field 113, wire `call_tx_avg_bwe` */
  callTxAvgBwe?: string
  /** field 114, wire `call_tx_min_jitter` */
  callTxMinJitter?: string
  /** field 115, wire `call_tx_max_jitter` */
  callTxMaxJitter?: string
  /** field 116, wire `call_tx_avg_jitter` */
  callTxAvgJitter?: string
  /** field 117, wire `call_tx_min_loss_period` */
  callTxMinLossPeriod?: string
  /** field 118, wire `call_tx_max_loss_period` */
  callTxMaxLossPeriod?: string
  /** field 119, wire `call_tx_avg_loss_period` */
  callTxAvgLossPeriod?: string
  /** field 120, wire `call_rx_pkt_loss_pct` */
  callRxPktLossPct?: string
  /** field 121, wire `call_rx_avg_bitrate` */
  callRxAvgBitrate?: string
  /** field 122, wire `call_rx_avg_bwe` */
  callRxAvgBwe?: string
  /** field 123, wire `call_rx_min_jitter` */
  callRxMinJitter?: string
  /** field 124, wire `call_rx_max_jitter` */
  callRxMaxJitter?: string
  /** field 125, wire `call_rx_avg_jitter` */
  callRxAvgJitter?: string
  /** field 126, wire `call_rx_min_loss_period` */
  callRxMinLossPeriod?: string
  /** field 127, wire `call_rx_max_loss_period` */
  callRxMaxLossPeriod?: string
  /** field 128, wire `call_rx_avg_loss_period` */
  callRxAvgLossPeriod?: string
  /** field 129, wire `call_start_func_t` */
  callStartFuncT?: string
  /** field 130, wire `call_end_func_t` */
  callEndFuncT?: string
  /** field 131, wire `call_reject_func_t` */
  callRejectFuncT?: string
  /** field 132, wire `call_accept_func_t` */
  callAcceptFuncT?: string
  /** field 133, wire `call_sound_port_func_t` */
  callSoundPortFuncT?: string
  /** field 134, wire `call_offer_receipt_delay` */
  callOfferReceiptDelay?: string
  /** field 135, wire `avg_encode_t` */
  avgEncodeT?: string
  /** field 136, wire `avg_decode_t` */
  avgDecodeT?: string
  /** field 137, wire `avg_play_cb_t` */
  avgPlayCbT?: string
  /** field 138, wire `avg_record_cb_t` */
  avgRecordCbT?: string
  /** field 139, wire `avg_clock_cb_t` */
  avgClockCbT?: string
  /** field 141, wire `avg_target_bitrate` */
  avgTargetBitrate?: string
  /** field 142, wire `tx_total_bytes` */
  txTotalBytes?: string
  /** field 143, wire `rx_total_bytes` */
  rxTotalBytes?: string
  /** field 144, wire `tx_total_bitrate` */
  txTotalBitrate?: string
  /** field 145, wire `rx_total_bitrate` */
  rxTotalBitrate?: string
  /** field 146, wire `jb_avg_delay` */
  jbAvgDelay?: string
  /** field 147, wire `jb_min_delay` */
  jbMinDelay?: string
  /** field 148, wire `jb_max_delay` */
  jbMaxDelay?: string
  /** field 149, wire `jb_last_delay` */
  jbLastDelay?: string
  /** field 150, wire `jb_discards` */
  jbDiscards?: string
  /** field 151, wire `jb_empties` */
  jbEmpties?: string
  /** field 152, wire `jb_gets` */
  jbGets?: string
  /** field 153, wire `jb_puts` */
  jbPuts?: string
  /** field 155, wire `rc_maxrtt` */
  rcMaxrtt?: string
  /** field 156, wire `call_wakeup_source` */
  callWakeupSource?: CALLWAKEUPSOURCE
  /** field 157, wire `low_data_usage_bitrate` */
  lowDataUsageBitrate?: string
  /** field 158, wire `push_to_call_offer_delay` */
  pushToCallOfferDelay?: string
  /** field 159, wire `call_offer_ack_timout` */
  callOfferAckTimout?: string
  /** field 160, wire `pings_sent` */
  pingsSent?: string
  /** field 161, wire `pongs_received` */
  pongsReceived?: string
  /** field 163, wire `video_enabled` */
  videoEnabled?: boolean
  /** field 164, wire `video_tx_total_bytes` */
  videoTxTotalBytes?: string
  /** field 165, wire `video_tx_bitrate` */
  videoTxBitrate?: string
  /** field 166, wire `video_tx_pkt_loss_pct` */
  videoTxPktLossPct?: string
  /** field 167, wire `video_tx_pkt_error_pct` */
  videoTxPktErrorPct?: string
  /** field 168, wire `video_rx_total_bytes` */
  videoRxTotalBytes?: string
  /** field 169, wire `video_rx_bitrate` */
  videoRxBitrate?: string
  /** field 170, wire `video_rx_pkt_loss_pct` */
  videoRxPktLossPct?: string
  /** field 172, wire `video_dec_input_frames` */
  videoDecInputFrames?: number
  /** field 173, wire `video_dec_output_frames` */
  videoDecOutputFrames?: number
  /** field 174, wire `video_dec_error_frames` */
  videoDecErrorFrames?: number
  /** field 175, wire `video_dec_keyframes` */
  videoDecKeyframes?: number
  /** field 176, wire `video_enc_input_frames` */
  videoEncInputFrames?: number
  /** field 177, wire `video_enc_output_frames` */
  videoEncOutputFrames?: number
  /** field 178, wire `video_enc_error_frames` */
  videoEncErrorFrames?: number
  /** field 179, wire `video_enc_drop_frames` */
  videoEncDropFrames?: number
  /** field 180, wire `video_enc_keyframes` */
  videoEncKeyframes?: number
  /** field 181, wire `video_tx_fec_frames` */
  videoTxFecFrames?: number
  /** field 182, wire `video_rx_fec_frames` */
  videoRxFecFrames?: number
  /** field 183, wire `video_fec_recovered` */
  videoFecRecovered?: number
  /** field 184, wire `video_avg_target_bitrate` */
  videoAvgTargetBitrate?: string
  /** field 185, wire `video_last_sender_bwe` */
  videoLastSenderBwe?: string
  /** field 186, wire `video_avg_sender_bwe` */
  videoAvgSenderBwe?: string
  /** field 187, wire `video_rx_bwe_hit_tx_bwe` */
  videoRxBweHitTxBwe?: boolean
  /** field 188, wire `video_width` */
  videoWidth?: number
  /** field 189, wire `video_height` */
  videoHeight?: number
  /** field 190, wire `peer_video_width` */
  peerVideoWidth?: number
  /** field 191, wire `peer_video_height` */
  peerVideoHeight?: number
  /** field 192, wire `av_avg_delta` */
  avAvgDelta?: string
  /** field 193, wire `av_max_delta` */
  avMaxDelta?: string
  /** field 195, wire `call_battery_change_pct` */
  callBatteryChangePct?: string
  /** field 196, wire `video_render_delay_t` */
  videoRenderDelayT?: string
  /** field 197, wire `video_tx_packets` */
  videoTxPackets?: number
  /** field 198, wire `video_tx_resend_packets` */
  videoTxResendPackets?: number
  /** field 199, wire `video_tx_rtcp_pli` */
  videoTxRtcpPli?: number
  /** field 200, wire `video_tx_rtcp_nack` */
  videoTxRtcpNack?: number
  /** field 201, wire `video_rx_packets` */
  videoRxPackets?: number
  /** field 202, wire `video_rx_rtcp_pli` */
  videoRxRtcpPli?: number
  /** field 203, wire `video_rx_rtcp_nack` */
  videoRxRtcpNack?: number
  /** field 204, wire `video_dec_name` */
  videoDecName?: number
  /** field 205, wire `video_dec_color_id` */
  videoDecColorId?: number
  /** field 206, wire `video_dec_restart` */
  videoDecRestart?: number
  /** field 207, wire `video_dec_avg_fps` */
  videoDecAvgFps?: string
  /** field 208, wire `video_render_avg_fps` */
  videoRenderAvgFps?: number
  /** field 209, wire `video_dec_skip_packets` */
  videoDecSkipPackets?: number
  /** field 210, wire `video_dec_lost_packets` */
  videoDecLostPackets?: number
  /** field 212, wire `video_enc_name` */
  videoEncName?: number
  /** field 213, wire `video_enc_color_id` */
  videoEncColorId?: number
  /** field 214, wire `video_enc_restart` */
  videoEncRestart?: number
  /** field 215, wire `video_enc_avg_target_fps` */
  videoEncAvgTargetFps?: string
  /** field 216, wire `video_enc_avg_fps` */
  videoEncAvgFps?: string
  /** field 217, wire `video_enc_discard_frame` */
  videoEncDiscardFrame?: number
  /** field 218, wire `video_tx_fec_bitrate` */
  videoTxFecBitrate?: string
  /** field 219, wire `video_rx_fec_bitrate` */
  videoRxFecBitrate?: string
  /** field 222, wire `video_capture_avg_fps` */
  videoCaptureAvgFps?: number
  /** field 223, wire `video_dec_latency` */
  videoDecLatency?: string
  /** field 224, wire `video_enc_latency` */
  videoEncLatency?: string
  /** field 225, wire `video_render_converter_ts` */
  videoRenderConverterTs?: string
  /** field 226, wire `video_capture_converter_ts` */
  videoCaptureConverterTs?: string
  /** field 227, wire `video_capture_width` */
  videoCaptureWidth?: number
  /** field 228, wire `video_capture_height` */
  videoCaptureHeight?: number
  /** field 229, wire `device_hardware` */
  deviceHardware?: string
  /** field 230, wire `device_board` */
  deviceBoard?: string
  /** field 231, wire `call_radio_type` */
  callRadioType?: RADIOTYPE
  /** field 232, wire `video_decode_paused_count` */
  videoDecodePausedCount?: number
  /** field 233, wire `camera_start_mode` */
  cameraStartMode?: CAMERASTARTMODEPARAMS
  /** field 235, wire `video_render_freeze_t` */
  videoRenderFreezeT?: string
  /** field 236, wire `video_codec_type` */
  videoCodecType?: number
  /** field 237, wire `traffic_shaper_overflow_count` */
  trafficShaperOverflowCount?: number
  /** field 238, wire `traffic_shaper_queue_empty_count` */
  trafficShaperQueueEmptyCount?: number
  /** field 239, wire `traffic_shaper_queued_packet_count` */
  trafficShaperQueuedPacketCount?: number
  /** field 240, wire `traffic_shaper_max_delay_violations` */
  trafficShaperMaxDelayViolations?: number
  /** field 241, wire `traffic_shaper_min_delay_violations` */
  trafficShaperMinDelayViolations?: number
  /** field 242, wire `traffic_shaper_avg_queue_ms` */
  trafficShaperAvgQueueMs?: string
  /** field 243, wire `call_offer_delay_t` */
  callOfferDelayT?: string
  /** field 244, wire `initial_estimated_tx_bitrate` */
  initialEstimatedTxBitrate?: string
  /** field 248, wire `speaker_min_power` */
  speakerMinPower?: number
  /** field 249, wire `speaker_max_power` */
  speakerMaxPower?: number
  /** field 250, wire `speaker_avg_power` */
  speakerAvgPower?: number
  /** field 251, wire `mic_min_power` */
  micMinPower?: number
  /** field 252, wire `mic_max_power` */
  micMaxPower?: number
  /** field 253, wire `mic_avg_power` */
  micAvgPower?: number
  /** field 257, wire `symmetric_nat_port_gap` */
  symmetricNatPortGap?: number
  /** field 258, wire `call_avg_rott_tx` */
  callAvgRottTx?: string
  /** field 259, wire `call_avg_rott_rx` */
  callAvgRottRx?: string
  /** field 263, wire `wifi_rssi_at_call_start` */
  wifiRssiAtCallStart?: number
  /** field 264, wire `peer_call_network` */
  peerCallNetwork?: PEERCALLNETWORKMEDIUM
  /** field 265, wire `previous_call_video_enabled` */
  previousCallVideoEnabled?: boolean
  /** field 266, wire `previous_call_interval` */
  previousCallInterval?: string
  /** field 267, wire `previous_call_with_same_peer` */
  previousCallWithSamePeer?: boolean
  /** field 268, wire `call_andr_gcm_fg_enabled` */
  callAndrGcmFgEnabled?: boolean
  /** field 270, wire `video_enabled_at_call_start` */
  videoEnabledAtCallStart?: boolean
  /** field 271, wire `video_upgrade_request_count` */
  videoUpgradeRequestCount?: number
  /** field 272, wire `video_upgrade_count` */
  videoUpgradeCount?: number
  /** field 273, wire `video_downgrade_count` */
  videoDowngradeCount?: number
  /** field 274, wire `video_self_state` */
  videoSelfState?: CALLVIDEOSTATE
  /** field 275, wire `video_peer_state` */
  videoPeerState?: CALLVIDEOSTATE
  /** field 276, wire `video_active_time` */
  videoActiveTime?: string
  /** field 277, wire `jb_lost` */
  jbLost?: string
  /** field 287, wire `opus_version` */
  opusVersion?: number
  /** field 288, wire `tx_probe_count_total` */
  txProbeCountTotal?: number
  /** field 289, wire `tx_probe_count_success` */
  txProbeCountSuccess?: number
  /** field 290, wire `rx_probe_count_total` */
  rxProbeCountTotal?: number
  /** field 291, wire `rx_probe_count_success` */
  rxProbeCountSuccess?: number
  /** field 293, wire `tx_tp_fb_bitrate` */
  txTpFbBitrate?: string
  /** field 294, wire `rx_tp_fb_bitrate` */
  rxTpFbBitrate?: string
  /** field 303, wire `video_codec_sub_type` */
  videoCodecSubType?: number
  /** field 304, wire `video_render_freeze2x_t` */
  videoRenderFreeze2xT?: string
  /** field 305, wire `video_render_freeze4x_t` */
  videoRenderFreeze4xT?: string
  /** field 306, wire `video_render_freeze8x_t` */
  videoRenderFreeze8xT?: string
  /** field 318, wire `call_test_event` */
  callTestEvent?: number
  /** field 320, wire `echo_cancellation_ms_per_sec` */
  echoCancellationMsPerSec?: number
  /** field 321, wire `video_initial_codec_type` */
  videoInitialCodecType?: number
  /** field 322, wire `camera_preview_mode` */
  cameraPreviewMode?: CAMERAPREVIEWMODE
  /** field 323, wire `video_upgrade_cancel_count` */
  videoUpgradeCancelCount?: number
  /** field 324, wire `video_upgrade_reject_count` */
  videoUpgradeRejectCount?: number
  /** field 325, wire `video_upgrade_cancel_by_timeout_count` */
  videoUpgradeCancelByTimeoutCount?: number
  /** field 326, wire `video_upgrade_reject_by_timeout_count` */
  videoUpgradeRejectByTimeoutCount?: number
  /** field 327, wire `probe_avg_bitrate` */
  probeAvgBitrate?: string
  /** field 328, wire `field_stats_row_type` */
  fieldStatsRowType?: FIELDSTATSROWTYPE
  /** field 329, wire `group_call_segment_idx` */
  groupCallSegmentIdx?: number
  /** field 330, wire `num_connected_participants` */
  numConnectedParticipants?: number
  /** field 331, wire `camera_off_count` */
  cameraOffCount?: number
  /** field 334, wire `video_h264_time` */
  videoH264Time?: number
  /** field 335, wire `video_h265_time` */
  videoH265Time?: number
  /** field 337, wire `init_bwe_source` */
  initBweSource?: INITBWESOURCE
  /** field 339, wire `his_info_could_be_used_for_init_bwe` */
  hisInfoCouldBeUsedForInitBwe?: boolean
  /** field 341, wire `used_init_tx_bitrate` */
  usedInitTxBitrate?: number
  /** field 342, wire `his_based_initial_tx_bitrate` */
  hisBasedInitialTxBitrate?: number
  /** field 348, wire `video_sender_bwe_stddev` */
  videoSenderBweStddev?: string
  /** field 350, wire `video_target_bitrate_reaches500kbps_t` */
  videoTargetBitrateReaches500kbpsT?: string
  /** field 351, wire `video_target_bitrate_reaches1000kbps_t` */
  videoTargetBitrateReaches1000kbpsT?: string
  /** field 356, wire `group_call_is_last_segment` */
  groupCallIsLastSegment?: boolean
  /** field 357, wire `group_call_is_group_call_invitee` */
  groupCallIsGroupCallInvitee?: boolean
  /** field 358, wire `group_call_total_call_t_since_call_start` */
  groupCallTotalCallTSinceCallStart?: string
  /** field 359, wire `group_call_total_p3_call_t_since_call_start` */
  groupCallTotalP3CallTSinceCallStart?: string
  /** field 360, wire `group_call_invite_count_since_call_start` */
  groupCallInviteCountSinceCallStart?: number
  /** field 361, wire `group_call_nack_count_since_call_start` */
  groupCallNackCountSinceCallStart?: number
  /** field 363, wire `video_enc_time_overshoot10_perc_h264` */
  videoEncTimeOvershoot10PercH264?: string
  /** field 364, wire `video_enc_time_overshoot20_perc_h264` */
  videoEncTimeOvershoot20PercH264?: string
  /** field 365, wire `video_enc_time_overshoot40_perc_h264` */
  videoEncTimeOvershoot40PercH264?: string
  /** field 366, wire `video_enc_time_overshoot10_perc_h265` */
  videoEncTimeOvershoot10PercH265?: string
  /** field 367, wire `video_enc_time_overshoot20_perc_h265` */
  videoEncTimeOvershoot20PercH265?: string
  /** field 368, wire `video_enc_time_overshoot40_perc_h265` */
  videoEncTimeOvershoot40PercH265?: string
  /** field 369, wire `video_enc_time_overshoot10_perc_vp8` */
  videoEncTimeOvershoot10PercVp8?: string
  /** field 370, wire `video_enc_time_overshoot20_perc_vp8` */
  videoEncTimeOvershoot20PercVp8?: string
  /** field 371, wire `video_enc_time_overshoot40_perc_vp8` */
  videoEncTimeOvershoot40PercVp8?: string
  /** field 375, wire `video_enc_time_undershoot10_perc_h264` */
  videoEncTimeUndershoot10PercH264?: string
  /** field 376, wire `video_enc_time_undershoot20_perc_h264` */
  videoEncTimeUndershoot20PercH264?: string
  /** field 377, wire `video_enc_time_undershoot40_perc_h264` */
  videoEncTimeUndershoot40PercH264?: string
  /** field 378, wire `video_enc_time_undershoot10_perc_h265` */
  videoEncTimeUndershoot10PercH265?: string
  /** field 379, wire `video_enc_time_undershoot20_perc_h265` */
  videoEncTimeUndershoot20PercH265?: string
  /** field 380, wire `video_enc_time_undershoot40_perc_h265` */
  videoEncTimeUndershoot40PercH265?: string
  /** field 381, wire `video_enc_time_undershoot10_perc_vp8` */
  videoEncTimeUndershoot10PercVp8?: string
  /** field 382, wire `video_enc_time_undershoot20_perc_vp8` */
  videoEncTimeUndershoot20PercVp8?: string
  /** field 383, wire `video_enc_time_undershoot40_perc_vp8` */
  videoEncTimeUndershoot40PercVp8?: string
  /** field 387, wire `incoming_call_ui_action` */
  incomingCallUiAction?: INCOMINGCALLUIACTIONTYPE
  /** field 390, wire `video_avg_comb_psnr` */
  videoAvgCombPsnr?: string
  /** field 394, wire `weak_wifi_switch_to_def_net_triggered_by_periodical_check` */
  weakWifiSwitchToDefNetTriggeredByPeriodicalCheck?: number
  /** field 395, wire `weak_wifi_switch_to_def_net_success_by_periodical_check` */
  weakWifiSwitchToDefNetSuccessByPeriodicalCheck?: number
  /** field 396, wire `weak_wifi_switch_to_def_net_triggered` */
  weakWifiSwitchToDefNetTriggered?: number
  /** field 397, wire `weak_wifi_switch_to_def_net_success` */
  weakWifiSwitchToDefNetSuccess?: number
  /** field 398, wire `weak_wifi_switch_to_non_def_net_triggered` */
  weakWifiSwitchToNonDefNetTriggered?: number
  /** field 399, wire `weak_wifi_switch_to_non_def_net_false_positive` */
  weakWifiSwitchToNonDefNetFalsePositive?: number
  /** field 400, wire `weak_wifi_switch_to_non_def_net_success` */
  weakWifiSwitchToNonDefNetSuccess?: number
  /** field 401, wire `video_codec_scheme` */
  videoCodecScheme?: number
  /** field 402, wire `video_initial_codec_scheme` */
  videoInitialCodecScheme?: number
  /** field 405, wire `call_def_network` */
  callDefNetwork?: CALLNETWORKMEDIUM
  /** field 408, wire `video_avg_scaling_psnr` */
  videoAvgScalingPsnr?: string
  /** field 410, wire `video_avg_encoding_psnr` */
  videoAvgEncodingPsnr?: string
  /** field 412, wire `active_relay_protocol` */
  activeRelayProtocol?: number
  /** field 413, wire `avg_tcp_conn_count` */
  avgTcpConnCount?: number
  /** field 414, wire `avg_tcp_conn_latency_in_msec` */
  avgTcpConnLatencyInMsec?: string
  /** field 415, wire `last_conn_error_status` */
  lastConnErrorStatus?: number
  /** field 419, wire `video_dec_crc_mismatch_frames` */
  videoDecCrcMismatchFrames?: number
  /** field 420, wire `video_max_target_bitrate` */
  videoMaxTargetBitrate?: string
  /** field 421, wire `video_min_target_bitrate` */
  videoMinTargetBitrate?: string
  /** field 422, wire `call_messages_buffered_count` */
  callMessagesBufferedCount?: number
  /** field 423, wire `relay_election_time_in_msec` */
  relayElectionTimeInMsec?: string
  /** field 424, wire `relay_bind_time_in_msec` */
  relayBindTimeInMsec?: string
  /** field 425, wire `video_max_tx_bitrate` */
  videoMaxTxBitrate?: string
  /** field 426, wire `video_max_rx_bitrate` */
  videoMaxRxBitrate?: string
  /** field 429, wire `weak_cellular_net_condition_detected` */
  weakCellularNetConditionDetected?: number
  /** field 430, wire `weak_wifi_net_condition_detected` */
  weakWifiNetConditionDetected?: number
  /** field 433, wire `video_target_bitrate_reaches250kbps_t` */
  videoTargetBitrateReaches250kbpsT?: string
  /** field 434, wire `video_target_bitrate_reaches750kbps_t` */
  videoTargetBitrateReaches750kbpsT?: string
  /** field 435, wire `video_target_bitrate_reaches1500kbps_t` */
  videoTargetBitrateReaches1500kbpsT?: string
  /** field 436, wire `video_target_bitrate_reaches2000kbps_t` */
  videoTargetBitrateReaches2000kbpsT?: string
  /** field 438, wire `call_reconnecting_state_count` */
  callReconnectingStateCount?: number
  /** field 439, wire `group_call_caller_participant_count_at_call_start` */
  groupCallCallerParticipantCountAtCallStart?: number
  /** field 440, wire `telecom_framework_call_start_delay_t` */
  telecomFrameworkCallStartDelayT?: string
  /** field 441, wire `battery_low_triggered` */
  batteryLowTriggered?: boolean
  /** field 442, wire `battery_drop_triggered` */
  batteryDropTriggered?: boolean
  /** field 443, wire `android_camera_api` */
  androidCameraApi?: ANDROIDCAMERAAPI
  /** field 444, wire `android_camera2_min_hardware_support_level` */
  androidCamera2MinHardwareSupportLevel?: ANDROIDCAMERA2SUPPORTLEVEL
  /** field 445, wire `caller_offer_to_decode_t` */
  callerOfferToDecodeT?: string
  /** field 446, wire `caller_vid_rtp_to_decode_t` */
  callerVidRtpToDecodeT?: string
  /** field 447, wire `callee_accept_to_decode_t` */
  calleeAcceptToDecodeT?: string
  /** field 448, wire `media_stream_setup_t` */
  mediaStreamSetupT?: string
  /** field 449, wire `total_bytes_on_non_def_cell` */
  totalBytesOnNonDefCell?: string
  /** field 450, wire `audio_total_bytes_on_non_def_cell` */
  audioTotalBytesOnNonDefCell?: string
  /** field 451, wire `video_total_bytes_on_non_def_cell` */
  videoTotalBytesOnNonDefCell?: string
  /** field 452, wire `malformed_stanza_xpath` */
  malformedStanzaXpath?: string
  /** field 453, wire `video_update_encoder_failure_count` */
  videoUpdateEncoderFailureCount?: number
  /** field 458, wire `video_tx_rtcp_rpsi` */
  videoTxRtcpRpsi?: number
  /** field 459, wire `video_rx_rtcp_rpsi` */
  videoRxRtcpRpsi?: number
  /** field 461, wire `video_dec_ltrp_frames_vp8` */
  videoDecLtrpFramesVp8?: number
  /** field 462, wire `video_dec_error_ltrp_frames_vp8` */
  videoDecErrorLtrpFramesVp8?: number
  /** field 463, wire `video_enc_keyframes_vp8` */
  videoEncKeyframesVp8?: number
  /** field 464, wire `video_enc_avg_size_key_frame_vp8` */
  videoEncAvgSizeKeyFrameVp8?: string
  /** field 466, wire `video_enc_avg_qp_key_frame_vp8` */
  videoEncAvgQpKeyFrameVp8?: string
  /** field 467, wire `video_enc_ltrp_frames_vp8` */
  videoEncLtrpFramesVp8?: number
  /** field 468, wire `video_enc_avg_size_ltrp_frame_vp8` */
  videoEncAvgSizeLtrpFrameVp8?: string
  /** field 470, wire `video_enc_avg_qp_ltrp_frame_vp8` */
  videoEncAvgQpLtrpFrameVp8?: string
  /** field 471, wire `video_enc_ltrp_frame_gen_failed_vp8` */
  videoEncLtrpFrameGenFailedVp8?: number
  /** field 472, wire `video_enc_p_frame_prev_ref_vp8` */
  videoEncPFramePrevRefVp8?: number
  /** field 473, wire `video_enc_avg_size_p_frame_prev_ref_vp8` */
  videoEncAvgSizePFramePrevRefVp8?: string
  /** field 475, wire `video_enc_avg_qp_p_frame_prev_ref_vp8` */
  videoEncAvgQpPFramePrevRefVp8?: string
  /** field 476, wire `caller_in_contact` */
  callerInContact?: boolean
  /** field 477, wire `android_system_picture_in_picture_t` */
  androidSystemPictureInPictureT?: string
  /** field 478, wire `video_dec_error_frames_ignore_consecutive` */
  videoDecErrorFramesIgnoreConsecutive?: number
  /** field 480, wire `video_dec_error_ltrp_frames_vp8_no_ltr` */
  videoDecErrorLtrpFramesVp8NoLtr?: number
  /** field 481, wire `relay_fallback_on_rx_data_from_relay` */
  relayFallbackOnRxDataFromRelay?: number
  /** field 482, wire `relay_fallback_on_stop_rx_data_on_p2p` */
  relayFallbackOnStopRxDataOnP2p?: number
  /** field 484, wire `video_ave_delay_ltrp` */
  videoAveDelayLtrp?: string
  /** field 485, wire `video_rx_kf_before_ltrp_after_rpsi` */
  videoRxKfBeforeLtrpAfterRpsi?: number
  /** field 486, wire `video_tx_pkt_rtcp_app` */
  videoTxPktRtcpApp?: number
  /** field 487, wire `video_rx_pkt_rtcp_app` */
  videoRxPktRtcpApp?: number
  /** field 488, wire `video_tx_bytes_rtcp_app` */
  videoTxBytesRtcpApp?: string
  /** field 489, wire `video_rx_bytes_rtcp_app` */
  videoRxBytesRtcpApp?: string
  /** field 494, wire `video_enc_ltrp_to_kf_fallback_vp8` */
  videoEncLtrpToKfFallbackVp8?: number
  /** field 495, wire `avg_record_cb_intv_t` */
  avgRecordCbIntvT?: string
  /** field 496, wire `video_capture_frame_overwrite_count` */
  videoCaptureFrameOverwriteCount?: number
  /** field 497, wire `android_telecom_time_spent_before_reject` */
  androidTelecomTimeSpentBeforeReject?: string
  /** field 498, wire `call_pending_calls_count` */
  callPendingCallsCount?: number
  /** field 499, wire `call_pending_calls_rejected_count` */
  callPendingCallsRejectedCount?: number
  /** field 500, wire `call_pending_calls_terminated_count` */
  callPendingCallsTerminatedCount?: number
  /** field 501, wire `call_pending_calls_accepted_count` */
  callPendingCallsAcceptedCount?: number
  /** field 502, wire `finished_ul_bwe` */
  finishedUlBwe?: boolean
  /** field 503, wire `finished_dl_bwe` */
  finishedDlBwe?: boolean
  /** field 505, wire `call_creator_hid` */
  callCreatorHid?: string
  /** field 506, wire `one_side_init_tx_bitrate` */
  oneSideInitTxBitrate?: number
  /** field 507, wire `one_side_init_rx_bitrate` */
  oneSideInitRxBitrate?: number
  /** field 508, wire `one_side_rcvd_peer_rx_bitrate` */
  oneSideRcvdPeerRxBitrate?: boolean
  /** field 509, wire `one_side_min_peer_init_rx_bitrate` */
  oneSideMinPeerInitRxBitrate?: number
  /** field 510, wire `pool_mem_usage` */
  poolMemUsage?: number
  /** field 517, wire `call_ended_during_vid_freeze` */
  callEndedDuringVidFreeze?: boolean
  /** field 518, wire `call_ended_during_aud_freeze` */
  callEndedDuringAudFreeze?: boolean
  /** field 519, wire `created_from_group_call_downgrade` */
  createdFromGroupCallDowngrade?: boolean
  /** field 520, wire `video_tx_rtcp_npsi` */
  videoTxRtcpNpsi?: number
  /** field 521, wire `video_rx_rtcp_npsi` */
  videoRxRtcpNpsi?: number
  /** field 522, wire `p2p_success_count` */
  p2pSuccessCount?: number
  /** field 525, wire `on_mobile_data_saver` */
  onMobileDataSaver?: boolean
  /** field 526, wire `video_render_init_freeze_t` */
  videoRenderInitFreezeT?: string
  /** field 527, wire `clamped_bwe` */
  clampedBwe?: boolean
  /** field 528, wire `finished_overall_bwe` */
  finishedOverallBwe?: boolean
  /** field 529, wire `call_random_id` */
  callRandomId?: string
  /** field 530, wire `time_on_non_def_network` */
  timeOnNonDefNetwork?: string
  /** field 531, wire `time_on_non_def_network_per_segment` */
  timeOnNonDefNetworkPerSegment?: string
  /** field 532, wire `failure_to_create_test_alt_socket` */
  failureToCreateTestAltSocket?: number
  /** field 534, wire `failure_to_create_alt_socket` */
  failureToCreateAltSocket?: number
  /** field 535, wire `loss_of_alt_socket` */
  lossOfAltSocket?: number
  /** field 536, wire `triggered_but_data_limit_reached` */
  triggeredButDataLimitReached?: number
  /** field 537, wire `data_limit_on_alt_network_reached` */
  dataLimitOnAltNetworkReached?: boolean
  /** field 538, wire `switch_to_def_triggered_by_good_def_net` */
  switchToDefTriggeredByGoodDefNet?: number
  /** field 539, wire `has_restricted_settings_for_audio_calls` */
  hasRestrictedSettingsForAudioCalls?: boolean
  /** field 540, wire `on_wifi_at_start` */
  onWifiAtStart?: boolean
  /** field 541, wire `system_notification_of_net_change` */
  systemNotificationOfNetChange?: number
  /** field 551, wire `transport_num_async_write_queued` */
  transportNumAsyncWriteQueued?: number
  /** field 552, wire `transport_cur_time_in_msec_async_write_waiting_in_queue` */
  transportCurTimeInMsecAsyncWriteWaitingInQueue?: string
  /** field 553, wire `transport_total_time_in_msec_async_write_queue_to_dispatch` */
  transportTotalTimeInMsecAsyncWriteQueueToDispatch?: string
  /** field 554, wire `transport_total_num_send_os_error` */
  transportTotalNumSendOsError?: number
  /** field 555, wire `transport_last_send_os_error` */
  transportLastSendOsError?: number
  /** field 556, wire `transport_send_error_count` */
  transportSendErrorCount?: number
  /** field 558, wire `max_event_queue_depth` */
  maxEventQueueDepth?: number
  /** field 559, wire `num_vid_ul_auto_pause` */
  numVidUlAutoPause?: number
  /** field 560, wire `num_vid_ul_auto_pause_fail` */
  numVidUlAutoPauseFail?: number
  /** field 561, wire `num_vid_ul_auto_resume` */
  numVidUlAutoResume?: number
  /** field 562, wire `num_vid_ul_auto_resume_fail` */
  numVidUlAutoResumeFail?: number
  /** field 563, wire `num_vid_ul_auto_resume_reject_audio_lqm` */
  numVidUlAutoResumeRejectAudioLqm?: number
  /** field 564, wire `num_vid_ul_auto_pause_reject_high_sending_rate` */
  numVidUlAutoPauseRejectHighSendingRate?: number
  /** field 565, wire `num_vid_ul_auto_pause_reject_too_early` */
  numVidUlAutoPauseRejectTooEarly?: number
  /** field 566, wire `num_vid_ul_auto_pause_user_action` */
  numVidUlAutoPauseUserAction?: number
  /** field 567, wire `num_critical_group_update_dropped` */
  numCriticalGroupUpdateDropped?: number
  /** field 568, wire `video_render_sum_time_since_last_freeze` */
  videoRenderSumTimeSinceLastFreeze?: string
  /** field 569, wire `video_render_num_freezes` */
  videoRenderNumFreezes?: number
  /** field 570, wire `video_render_num_since_last_freeze5s` */
  videoRenderNumSinceLastFreeze5s?: number
  /** field 571, wire `video_render_num_since_last_freeze10s` */
  videoRenderNumSinceLastFreeze10s?: number
  /** field 572, wire `video_render_num_since_last_freeze30s` */
  videoRenderNumSinceLastFreeze30s?: number
  /** field 573, wire `total_time_vid_ul_auto_pause` */
  totalTimeVidUlAutoPause?: string
  /** field 574, wire `num_vid_dl_auto_pause` */
  numVidDlAutoPause?: number
  /** field 576, wire `num_vid_dl_auto_resume` */
  numVidDlAutoResume?: number
  /** field 579, wire `num_vid_dl_auto_resume_reject_bad_audio` */
  numVidDlAutoResumeRejectBadAudio?: number
  /** field 580, wire `transport_num_async_write_dispatched` */
  transportNumAsyncWriteDispatched?: number
  /** field 588, wire `call_offer_fanout_count` */
  callOfferFanoutCount?: number
  /** field 589, wire `vid_ul_auto_paused_at_call_end` */
  vidUlAutoPausedAtCallEnd?: boolean
  /** field 590, wire `vid_ul_time_since_auto_pause_at_call_end` */
  vidUlTimeSinceAutoPauseAtCallEnd?: string
  /** field 591, wire `peer_transport` */
  peerTransport?: CALLTRANSPORTTYPE
  /** field 592, wire `group_call_video_maximized_count` */
  groupCallVideoMaximizedCount?: number
  /** field 593, wire `alloc_error_bitmap` */
  allocErrorBitmap?: number
  /** field 594, wire `video_npsi_gen_failed` */
  videoNpsiGenFailed?: number
  /** field 595, wire `video_npsi_no_nack` */
  videoNpsiNoNack?: number
  /** field 598, wire `pcnt_poor_aud_lqm_before_pause` */
  pcntPoorAudLqmBeforePause?: string
  /** field 599, wire `pcnt_poor_aud_lqm_after_pause` */
  pcntPoorAudLqmAfterPause?: string
  /** field 600, wire `video_enc_num_error_ltr_hold_failed_vp8` */
  videoEncNumErrorLtrHoldFailedVp8?: number
  /** field 608, wire `video_enc_regular_ltrp_time_in_msec` */
  videoEncRegularLtrpTimeInMsec?: string
  /** field 609, wire `video_enc_all_ltrp_time_in_msec` */
  videoEncAllLtrpTimeInMsec?: string
  /** field 616, wire `video_dec_num_skipped_frames_vp8` */
  videoDecNumSkippedFramesVp8?: number
  /** field 618, wire `dtx_tx_duration_t` */
  dtxTxDurationT?: string
  /** field 619, wire `dtx_tx_count` */
  dtxTxCount?: number
  /** field 620, wire `video_tx_rtcp_fir_empty_jb` */
  videoTxRtcpFirEmptyJb?: number
  /** field 621, wire `video_rx_rtcp_fir` */
  videoRxRtcpFir?: number
  /** field 623, wire `conf_bridge_sampling_rate` */
  confBridgeSamplingRate?: number
  /** field 625, wire `num_out_of_order_critical_group_update` */
  numOutOfOrderCriticalGroupUpdate?: number
  /** field 626, wire `call_enter_pip_mode_count` */
  callEnterPipModeCount?: number
  /** field 627, wire `call_pip_mode_t` */
  callPipModeT?: string
  /** field 643, wire `conservative_ramp_up_held_count` */
  conservativeRampUpHeldCount?: number
  /** field 644, wire `jb_avg_delay_uniform` */
  jbAvgDelayUniform?: string
  /** field 645, wire `audio_nack_req_pkts_sent` */
  audioNackReqPktsSent?: number
  /** field 646, wire `audio_nack_req_pkts_recvd` */
  audioNackReqPktsRecvd?: number
  /** field 647, wire `audio_nack_rtp_retransmit_req_count` */
  audioNackRtpRetransmitReqCount?: number
  /** field 648, wire `audio_nack_rtp_retransmit_recvd_count` */
  audioNackRtpRetransmitRecvdCount?: number
  /** field 649, wire `audio_nack_rtp_retransmit_discard_count` */
  audioNackRtpRetransmitDiscardCount?: number
  /** field 650, wire `audio_nack_rtp_retransmit_sent_count` */
  audioNackRtpRetransmitSentCount?: number
  /** field 651, wire `audio_nack_rtp_retransmit_fail_count` */
  audioNackRtpRetransmitFailCount?: number
  /** field 652, wire `neteq_expanded_frames` */
  neteqExpandedFrames?: number
  /** field 653, wire `neteq_accelerated_frames` */
  neteqAcceleratedFrames?: number
  /** field 654, wire `video_peer_triggered_pause_count` */
  videoPeerTriggeredPauseCount?: number
  /** field 655, wire `warp_header_tx_total_bytes` */
  warpHeaderTxTotalBytes?: string
  /** field 656, wire `warp_header_rx_total_bytes` */
  warpHeaderRxTotalBytes?: string
  /** field 657, wire `sfu_uplink_avg_sender_bwe` */
  sfuUplinkAvgSenderBwe?: string
  /** field 658, wire `sfu_uplink_avg_remote_bwe` */
  sfuUplinkAvgRemoteBwe?: string
  /** field 659, wire `sfu_uplink_avg_combined_bwe` */
  sfuUplinkAvgCombinedBwe?: string
  /** field 660, wire `sfu_downlink_avg_sender_bwe` */
  sfuDownlinkAvgSenderBwe?: string
  /** field 661, wire `sfu_downlink_avg_remote_bwe` */
  sfuDownlinkAvgRemoteBwe?: string
  /** field 662, wire `sfu_downlink_avg_combined_bwe` */
  sfuDownlinkAvgCombinedBwe?: string
  /** field 664, wire `sfu_uplink_avg_pkt_loss_pct` */
  sfuUplinkAvgPktLossPct?: string
  /** field 667, wire `sfu_downlink_avg_pkt_loss_pct` */
  sfuDownlinkAvgPktLossPct?: string
  /** field 669, wire `sfu_uplink_min_rtt` */
  sfuUplinkMinRtt?: string
  /** field 670, wire `sfu_uplink_avg_rtt` */
  sfuUplinkAvgRtt?: string
  /** field 671, wire `sfu_uplink_max_rtt` */
  sfuUplinkMaxRtt?: string
  /** field 672, wire `sfu_min_target_bitrate` */
  sfuMinTargetBitrate?: string
  /** field 673, wire `sfu_avg_target_bitrate` */
  sfuAvgTargetBitrate?: string
  /** field 674, wire `sfu_max_target_bitrate` */
  sfuMaxTargetBitrate?: string
  /** field 675, wire `audio_rtx_pkt_sent` */
  audioRtxPktSent?: number
  /** field 676, wire `audio_rtx_pkt_processed` */
  audioRtxPktProcessed?: number
  /** field 677, wire `audio_rtx_pkt_discarded` */
  audioRtxPktDiscarded?: number
  /** field 678, wire `audio_inband_fec_encoded` */
  audioInbandFecEncoded?: number
  /** field 679, wire `audio_inband_fec_decoded` */
  audioInbandFecDecoded?: number
  /** field 680, wire `video_dec_error_frames_h264` */
  videoDecErrorFramesH264?: number
  /** field 681, wire `video_dec_error_frames_vp8` */
  videoDecErrorFramesVp8?: number
  /** field 682, wire `video_dec_error_frames_outoforder` */
  videoDecErrorFramesOutoforder?: number
  /** field 685, wire `video_enc_avg_size_all_ltrp_frame_vp8` */
  videoEncAvgSizeAllLtrpFrameVp8?: string
  /** field 686, wire `video_enc_deviation_all_ltrp_frame_vp8` */
  videoEncDeviationAllLtrpFrameVp8?: string
  /** field 687, wire `video_enc_deviation_p_frame_prev_ref_vp8` */
  videoEncDeviationPFramePrevRefVp8?: string
  /** field 688, wire `vid_correct_retx_detect_pcnt` */
  vidCorrectRetxDetectPcnt?: number
  /** field 693, wire `vid_pkt_rx_state0` */
  vidPktRxState0?: string
  /** field 698, wire `vid_num_retx_dropped` */
  vidNumRetxDropped?: number
  /** field 699, wire `transport_overshoot10_perc_count` */
  transportOvershoot10PercCount?: number
  /** field 700, wire `transport_overshoot20_perc_count` */
  transportOvershoot20PercCount?: number
  /** field 701, wire `transport_overshoot40_perc_count` */
  transportOvershoot40PercCount?: number
  /** field 702, wire `transport_overshoot_since_last1s_count` */
  transportOvershootSinceLast1sCount?: number
  /** field 703, wire `transport_overshoot_since_last5s_count` */
  transportOvershootSinceLast5sCount?: number
  /** field 704, wire `transport_overshoot_since_last10s_count` */
  transportOvershootSinceLast10sCount?: number
  /** field 705, wire `transport_overshoot_since_last15s_count` */
  transportOvershootSinceLast15sCount?: number
  /** field 706, wire `transport_overshoot_since_last30s_count` */
  transportOvershootSinceLast30sCount?: number
  /** field 707, wire `transport_overshoot_time_between_avg_s` */
  transportOvershootTimeBetweenAvgS?: string
  /** field 708, wire `transport_overshoot_longest_streak_s` */
  transportOvershootLongestStreakS?: number
  /** field 709, wire `transport_overshoot_streak_avg_s` */
  transportOvershootStreakAvgS?: string
  /** field 710, wire `transport_undershoot10_perc_count` */
  transportUndershoot10PercCount?: number
  /** field 711, wire `transport_undershoot20_perc_count` */
  transportUndershoot20PercCount?: number
  /** field 712, wire `transport_undershoot40_perc_count` */
  transportUndershoot40PercCount?: number
  /** field 713, wire `video_dec_error_frames_duplicate` */
  videoDecErrorFramesDuplicate?: number
  /** field 714, wire `video_dec_error_frames_codec_switch` */
  videoDecErrorFramesCodecSwitch?: number
  /** field 715, wire `time_since_last_rtp_to_call_end_in_msec` */
  timeSinceLastRtpToCallEndInMsec?: string
  /** field 716, wire `vid_wrong_retx_detect_pcnt` */
  vidWrongRetxDetectPcnt?: number
  /** field 717, wire `num_vid_rc_dyn_cond_true` */
  numVidRcDynCondTrue?: number
  /** field 718, wire `time_vid_rc_dyn_cond_true` */
  timeVidRcDynCondTrue?: string
  /** field 719, wire `ave_time_bw_vid_rc_dyn_cond_true` */
  aveTimeBwVidRcDynCondTrue?: string
  /** field 720, wire `video_tx_num_codec_switch` */
  videoTxNumCodecSwitch?: number
  /** field 721, wire `video_rx_num_codec_switch` */
  videoRxNumCodecSwitch?: number
  /** field 722, wire `audio_loss_period_count` */
  audioLossPeriodCount?: number
  /** field 723, wire `total_audio_frame_loss_ms` */
  totalAudioFrameLossMs?: string
  /** field 724, wire `audio_frame_loss1x_ms` */
  audioFrameLoss1xMs?: string
  /** field 725, wire `audio_frame_loss2x_ms` */
  audioFrameLoss2xMs?: string
  /** field 726, wire `audio_frame_loss4x_ms` */
  audioFrameLoss4xMs?: string
  /** field 727, wire `audio_frame_loss8x_ms` */
  audioFrameLoss8xMs?: string
  /** field 728, wire `audio_rx_avg_fpp` */
  audioRxAvgFpp?: string
  /** field 731, wire `video_enc_kf_err_codec_switch_t` */
  videoEncKfErrCodecSwitchT?: string
  /** field 733, wire `sfu_simulcast_enc_sched_event_success_update_count` */
  sfuSimulcastEncSchedEventSuccessUpdateCount?: number
  /** field 735, wire `sfu_simulcast_enc_sched_event_error_count` */
  sfuSimulcastEncSchedEventErrorCount?: number
  /** field 737, wire `wa_voip_history_is_call_record_loaded` */
  waVoipHistoryIsCallRecordLoaded?: boolean
  /** field 738, wire `wa_voip_history_is_call_record_saved` */
  waVoipHistoryIsCallRecordSaved?: boolean
  /** field 739, wire `wa_voip_history_num_of_call_record_loaded` */
  waVoipHistoryNumOfCallRecordLoaded?: number
  /** field 741, wire `conservative_ramp_up_holding_t` */
  conservativeRampUpHoldingT?: string
  /** field 742, wire `conservative_ramp_up_ramping_up_t` */
  conservativeRampUpRampingUpT?: string
  /** field 743, wire `conservative_ramp_up_exploring_t` */
  conservativeRampUpExploringT?: string
  /** field 744, wire `sfu_simulcast_dec_sess_flip_count` */
  sfuSimulcastDecSessFlipCount?: number
  /** field 745, wire `warp_tx_pkt_error_count` */
  warpTxPktErrorCount?: number
  /** field 746, wire `warp_rx_pkt_error_count` */
  warpRxPktErrorCount?: number
  /** field 747, wire `skipped_bwe_cycles` */
  skippedBweCycles?: number
  /** field 748, wire `skipped_bwa_cycles` */
  skippedBwaCycles?: number
  /** field 749, wire `switch_to_sfu` */
  switchToSfu?: number
  /** field 750, wire `switch_to_non_sfu` */
  switchToNonSfu?: number
  /** field 751, wire `audio_codec_encoded_fec_frames` */
  audioCodecEncodedFecFrames?: number
  /** field 752, wire `audio_codec_encoded_voice_frames` */
  audioCodecEncodedVoiceFrames?: number
  /** field 753, wire `audio_codec_encoded_non_voice_frames` */
  audioCodecEncodedNonVoiceFrames?: number
  /** field 754, wire `audio_codec_received_fec_frames` */
  audioCodecReceivedFecFrames?: number
  /** field 755, wire `audio_codec_decoded_fec_frames` */
  audioCodecDecodedFecFrames?: number
  /** field 756, wire `audio_codec_decoded_plc_frames` */
  audioCodecDecodedPlcFrames?: number
  /** field 757, wire `vid_num_rx_retx` */
  vidNumRxRetx?: number
  /** field 759, wire `combined_e2e_min_rtt` */
  combinedE2eMinRtt?: string
  /** field 760, wire `combined_e2e_avg_rtt` */
  combinedE2eAvgRtt?: string
  /** field 761, wire `combined_e2e_max_rtt` */
  combinedE2eMaxRtt?: string
  /** field 762, wire `transport_srtp_rx_rejected_pkt_cnt` */
  transportSrtpRxRejectedPktCnt?: number
  /** field 763, wire `transport_srtp_rx_rejected_bitrate` */
  transportSrtpRxRejectedBitrate?: string
  /** field 765, wire `camera_formats` */
  cameraFormats?: number
  /** field 766, wire `sfu_simulcast_enc_error_bitmap` */
  sfuSimulcastEncErrorBitmap?: number
  /** field 767, wire `sfu_simulcast_dec_sess_flip_error_count` */
  sfuSimulcastDecSessFlipErrorCount?: number
  /** field 768, wire `sfu_simulcast_dec_sess_flip_error_bitmap` */
  sfuSimulcastDecSessFlipErrorBitmap?: number
  /** field 769, wire `wa_voip_history_is_initialized` */
  waVoipHistoryIsInitialized?: boolean
  /** field 770, wire `wa_voip_history_save_call_record_condition_check_status` */
  waVoipHistorySaveCallRecordConditionCheckStatus?: WAVOIPHISTORYSAVECALLRECORDCONDITIONCHECKSTATUS
  /** field 772, wire `transport_srtp_rx_rejected_dup_pkt_cnt` */
  transportSrtpRxRejectedDupPktCnt?: number
  /** field 773, wire `transport_srtp_tx_max_pkt_size` */
  transportSrtpTxMaxPktSize?: number
  /** field 774, wire `transport_srtp_tx_failed_pkt_cnt` */
  transportSrtpTxFailedPktCnt?: number
  /** field 775, wire `jb_lost_empty_low_peer_bwe_per_sec` */
  jbLostEmptyLowPeerBwePerSec?: string
  /** field 776, wire `jb_lost_empty_low_to_high_peer_bwe_per_sec` */
  jbLostEmptyLowToHighPeerBwePerSec?: string
  /** field 777, wire `jb_lost_empty_high_peer_bwe_per_sec` */
  jbLostEmptyHighPeerBwePerSec?: string
  /** field 778, wire `render_freeze_low_peer_bwe_t` */
  renderFreezeLowPeerBweT?: string
  /** field 779, wire `render_freeze_low_to_high_peer_bwe_t` */
  renderFreezeLowToHighPeerBweT?: string
  /** field 780, wire `render_freeze_high_peer_bwe_t` */
  renderFreezeHighPeerBweT?: string
  /** field 781, wire `sbwe_ceiling_count` */
  sbweCeilingCount?: number
  /** field 782, wire `sbwe_ceiling_pkt_loss_count` */
  sbweCeilingPktLossCount?: number
  /** field 783, wire `sbwe_ceiling_congestion_count` */
  sbweCeilingCongestionCount?: number
  /** field 784, wire `sbwe_ceiling_rtt_congestion_count` */
  sbweCeilingRttCongestionCount?: number
  /** field 785, wire `sbwe_ceiling_zero_rtt_congestion_count` */
  sbweCeilingZeroRttCongestionCount?: number
  /** field 786, wire `sbwe_ceiling_missing_rtcp_congestion_count` */
  sbweCeilingMissingRtcpCongestionCount?: number
  /** field 787, wire `sbwe_ceiling_no_new_data_received_congestion_count` */
  sbweCeilingNoNewDataReceivedCongestionCount?: number
  /** field 788, wire `sfu_uplink_sbwe_ceiling_count` */
  sfuUplinkSbweCeilingCount?: number
  /** field 789, wire `sfu_uplink_sbwe_ceiling_pkt_loss_count` */
  sfuUplinkSbweCeilingPktLossCount?: number
  /** field 790, wire `sfu_uplink_sbwe_ceiling_congestion_count` */
  sfuUplinkSbweCeilingCongestionCount?: number
  /** field 791, wire `sfu_uplink_sbwe_ceiling_rtt_congestion_count` */
  sfuUplinkSbweCeilingRttCongestionCount?: number
  /** field 792, wire `sfu_uplink_sbwe_ceiling_zero_rtt_congestion_count` */
  sfuUplinkSbweCeilingZeroRttCongestionCount?: number
  /** field 793, wire `sfu_uplink_sbwe_ceiling_missing_rtcp_congestion_count` */
  sfuUplinkSbweCeilingMissingRtcpCongestionCount?: number
  /** field 794, wire `sfu_uplink_sbwe_ceiling_no_new_data_received_congestion_count` */
  sfuUplinkSbweCeilingNoNewDataReceivedCongestionCount?: number
  /** field 795, wire `sfu_downlink_sbwe_ceiling_count` */
  sfuDownlinkSbweCeilingCount?: number
  /** field 796, wire `sfu_downlink_sbwe_ceiling_pkt_loss_count` */
  sfuDownlinkSbweCeilingPktLossCount?: number
  /** field 797, wire `sfu_downlink_sbwe_ceiling_congestion_count` */
  sfuDownlinkSbweCeilingCongestionCount?: number
  /** field 798, wire `sfu_downlink_sbwe_ceiling_rtt_congestion_count` */
  sfuDownlinkSbweCeilingRttCongestionCount?: number
  /** field 799, wire `sfu_downlink_sbwe_ceiling_zero_rtt_congestion_count` */
  sfuDownlinkSbweCeilingZeroRttCongestionCount?: number
  /** field 800, wire `sfu_downlink_sbwe_ceiling_missing_rtcp_congestion_count` */
  sfuDownlinkSbweCeilingMissingRtcpCongestionCount?: number
  /** field 801, wire `sfu_downlink_sbwe_ceiling_no_new_data_received_congestion_count` */
  sfuDownlinkSbweCeilingNoNewDataReceivedCongestionCount?: number
  /** field 802, wire `oibwe_e2e_probing_time` */
  oibweE2eProbingTime?: string
  /** field 803, wire `oibwe_oible_probing_time` */
  oibweOibleProbingTime?: string
  /** field 804, wire `oibwe_ul_probing_time` */
  oibweUlProbingTime?: string
  /** field 805, wire `oibwe_dl_probing_time` */
  oibweDlProbingTime?: string
  /** field 806, wire `history_based_bwe_enabled` */
  historyBasedBweEnabled?: boolean
  /** field 807, wire `history_based_bwe_activated` */
  historyBasedBweActivated?: boolean
  /** field 808, wire `history_based_bwe_success` */
  historyBasedBweSuccess?: boolean
  /** field 809, wire `history_based_bwe_video_tx_bitrate` */
  historyBasedBweVideoTxBitrate?: number
  /** field 810, wire `video_dec_error_frames_sps_pps_missing_after_resolution_switch` */
  videoDecErrorFramesSpsPpsMissingAfterResolutionSwitch?: number
  /** field 813, wire `sfu_peer_downlink_stddev_all_combined_bwe` */
  sfuPeerDownlinkStddevAllCombinedBwe?: string
  /** field 817, wire `video_tx_total_bytes_hq` */
  videoTxTotalBytesHq?: string
  /** field 818, wire `video_tx_packets_hq` */
  videoTxPacketsHq?: number
  /** field 819, wire `video_tx_resend_packets_hq` */
  videoTxResendPacketsHq?: number
  /** field 820, wire `video_tx_rtcp_pli_hq` */
  videoTxRtcpPliHq?: number
  /** field 821, wire `video_tx_pkt_error_pct_hq` */
  videoTxPktErrorPctHq?: string
  /** field 823, wire `video_tx_bitrate_hq` */
  videoTxBitrateHq?: string
  /** field 824, wire `video_max_tx_bitrate_hq` */
  videoMaxTxBitrateHq?: string
  /** field 825, wire `video_enc_avg_fps_hq` */
  videoEncAvgFpsHq?: string
  /** field 826, wire `video_enc_latency_hq` */
  videoEncLatencyHq?: string
  /** field 827, wire `video_enc_avg_target_fps_hq` */
  videoEncAvgTargetFpsHq?: string
  /** field 828, wire `video_avg_target_bitrate_hq` */
  videoAvgTargetBitrateHq?: string
  /** field 829, wire `video_max_target_bitrate_hq` */
  videoMaxTargetBitrateHq?: string
  /** field 830, wire `video_min_target_bitrate_hq` */
  videoMinTargetBitrateHq?: string
  /** field 833, wire `sfu_simulcast_avg_dec_sess_flip_time` */
  sfuSimulcastAvgDecSessFlipTime?: string
  /** field 834, wire `wa_voip_history_ip_address_not_available` */
  waVoipHistoryIpAddressNotAvailable?: boolean
  /** field 837, wire `sfu_simulcast_avg_enc_sched_event_update_time` */
  sfuSimulcastAvgEncSchedEventUpdateTime?: string
  /** field 838, wire `multiple_tx_rx_relays_in_use` */
  multipleTxRxRelaysInUse?: boolean
  /** field 839, wire `tx_relay_rebind_latency_ms` */
  txRelayRebindLatencyMs?: string
  /** field 840, wire `tx_relay_reset_latency_ms` */
  txRelayResetLatencyMs?: string
  /** field 841, wire `rx_relay_rebind_latency_ms` */
  rxRelayRebindLatencyMs?: string
  /** field 842, wire `rx_relay_reset_latency_ms` */
  rxRelayResetLatencyMs?: string
  /** field 843, wire `bi_dir_relay_rebind_latency_ms` */
  biDirRelayRebindLatencyMs?: string
  /** field 844, wire `bi_dir_relay_reset_latency_ms` */
  biDirRelayResetLatencyMs?: string
  /** field 846, wire `jb_non_speech_discards` */
  jbNonSpeechDiscards?: string
  /** field 848, wire `call_end_reconnecting_soon_after_call_active` */
  callEndReconnectingSoonAfterCallActive?: boolean
  /** field 849, wire `camera_permission` */
  cameraPermission?: boolean
  /** field 850, wire `camera_issues` */
  cameraIssues?: number
  /** field 851, wire `camera_last_issue` */
  cameraLastIssue?: number
  /** field 852, wire `camera_start_duration` */
  cameraStartDuration?: string
  /** field 853, wire `camera_stop_duration` */
  cameraStopDuration?: string
  /** field 854, wire `camera_switch_duration` */
  cameraSwitchDuration?: string
  /** field 855, wire `camera_switch_count` */
  cameraSwitchCount?: number
  /** field 856, wire `camera_start_failure_duration` */
  cameraStartFailureDuration?: string
  /** field 857, wire `camera_switch_failure_duration` */
  cameraSwitchFailureDuration?: string
  /** field 858, wire `camera_stop_failure_count` */
  cameraStopFailureCount?: number
  /** field 859, wire `mic_permission` */
  micPermission?: boolean
  /** field 860, wire `audio_device_issues` */
  audioDeviceIssues?: number
  /** field 861, wire `audio_device_last_issue` */
  audioDeviceLastIssue?: number
  /** field 862, wire `mic_start_duration` */
  micStartDuration?: string
  /** field 863, wire `mic_stop_duration` */
  micStopDuration?: string
  /** field 864, wire `speaker_start_duration` */
  speakerStartDuration?: string
  /** field 865, wire `speaker_stop_duration` */
  speakerStopDuration?: string
  /** field 866, wire `audio_device_switch_duration` */
  audioDeviceSwitchDuration?: string
  /** field 867, wire `audio_device_switch_count` */
  audioDeviceSwitchCount?: number
  /** field 868, wire `oibwe_not_finished_when_call_active` */
  oibweNotFinishedWhenCallActive?: boolean
  /** field 869, wire `call_end_reconnecting_before_relay_failover` */
  callEndReconnectingBeforeRelayFailover?: boolean
  /** field 870, wire `call_end_reconnecting_soon_after_relay_failover` */
  callEndReconnectingSoonAfterRelayFailover?: boolean
  /** field 873, wire `sfu_simulcast_bwa_uplink_bottleneck_count` */
  sfuSimulcastBwaUplinkBottleneckCount?: number
  /** field 874, wire `sfu_simulcast_bwa_downlink_bottleneck_count` */
  sfuSimulcastBwaDownlinkBottleneckCount?: number
  /** field 875, wire `call_end_reconnecting_before_p2p_failover` */
  callEndReconnectingBeforeP2pFailover?: boolean
  /** field 876, wire `call_end_reconnecting_soon_after_p2p_failover` */
  callEndReconnectingSoonAfterP2pFailover?: boolean
  /** field 877, wire `call_end_reconnecting_before_network_change` */
  callEndReconnectingBeforeNetworkChange?: boolean
  /** field 878, wire `call_end_reconnecting_soon_after_network_change` */
  callEndReconnectingSoonAfterNetworkChange?: boolean
  /** field 880, wire `sfu_rx_uplink_report_count` */
  sfuRxUplinkReportCount?: number
  /** field 881, wire `sfu_first_rx_uplink_report_time` */
  sfuFirstRxUplinkReportTime?: string
  /** field 882, wire `sfu_rx_participant_report_count` */
  sfuRxParticipantReportCount?: number
  /** field 883, wire `sfu_first_rx_participant_report_time` */
  sfuFirstRxParticipantReportTime?: string
  /** field 884, wire `high_peer_bwe_t` */
  highPeerBweT?: string
  /** field 885, wire `low_peer_bwe_t` */
  lowPeerBweT?: string
  /** field 886, wire `low_to_high_peer_bwe_t` */
  lowToHighPeerBweT?: string
  /** field 889, wire `wa_short_freeze_count` */
  waShortFreezeCount?: number
  /** field 890, wire `wa_reconnect_freeze_count` */
  waReconnectFreezeCount?: number
  /** field 891, wire `wa_long_freeze_count` */
  waLongFreezeCount?: number
  /** field 892, wire `call_rx_pkt_loss_retransmit_pct` */
  callRxPktLossRetransmitPct?: string
  /** field 893, wire `joinable_new_ui` */
  joinableNewUi?: boolean
  /** field 894, wire `joinable_during_call` */
  joinableDuringCall?: boolean
  /** field 898, wire `traffic_shaper_avg_audio_queue_ms` */
  trafficShaperAvgAudioQueueMs?: string
  /** field 899, wire `traffic_shaper_avg_video_queue_ms` */
  trafficShaperAvgVideoQueueMs?: string
  /** field 900, wire `started_init_bwe_probing` */
  startedInitBweProbing?: boolean
  /** field 901, wire `video_init_rx_bitrate2s` */
  videoInitRxBitrate2s?: string
  /** field 902, wire `video_init_rx_bitrate4s` */
  videoInitRxBitrate4s?: string
  /** field 903, wire `video_init_rx_bitrate8s` */
  videoInitRxBitrate8s?: string
  /** field 904, wire `video_init_rx_bitrate16s` */
  videoInitRxBitrate16s?: string
  /** field 905, wire `video_render_init_freeze2s_t` */
  videoRenderInitFreeze2sT?: string
  /** field 906, wire `video_render_init_freeze4s_t` */
  videoRenderInitFreeze4sT?: string
  /** field 907, wire `video_render_init_freeze8s_t` */
  videoRenderInitFreeze8sT?: string
  /** field 908, wire `video_render_init_freeze16s_t` */
  videoRenderInitFreeze16sT?: string
  /** field 909, wire `dtx_tx_total_count` */
  dtxTxTotalCount?: number
  /** field 910, wire `dtx_tx_byte_frame_count` */
  dtxTxByteFrameCount?: number
  /** field 911, wire `dtx_rx_duration_t` */
  dtxRxDurationT?: string
  /** field 912, wire `dtx_rx_count` */
  dtxRxCount?: number
  /** field 913, wire `dtx_rx_total_count` */
  dtxRxTotalCount?: number
  /** field 914, wire `dtx_rx_byte_frame_count` */
  dtxRxByteFrameCount?: number
  /** field 916, wire `camera_start_to_first_frame_t` */
  cameraStartToFirstFrameT?: string
  /** field 917, wire `sfu_bwa_self_ul_bw_used_pct` */
  sfuBwaSelfUlBwUsedPct?: string
  /** field 918, wire `sfu_bwa_all_participant_ul_bw_used_pct` */
  sfuBwaAllParticipantUlBwUsedPct?: string
  /** field 919, wire `sfu_bwa_all_participant_dl_bw_used_pct` */
  sfuBwaAllParticipantDlBwUsedPct?: string
  /** field 920, wire `sfu_bwa_simulcast_disabled_cnt_reason_battery` */
  sfuBwaSimulcastDisabledCntReasonBattery?: number
  /** field 921, wire `sfu_bwa_simulcast_disabled_cnt_reason_net_medium` */
  sfuBwaSimulcastDisabledCntReasonNetMedium?: number
  /** field 923, wire `sfu_simulcast_bwa_candidate_cnt` */
  sfuSimulcastBwaCandidateCnt?: number
  /** field 925, wire `sfu_bwa_vid_enc_lq_stream_scheduled_t` */
  sfuBwaVidEncLqStreamScheduledT?: string
  /** field 926, wire `sfu_bwa_vid_enc_hq_stream_scheduled_t` */
  sfuBwaVidEncHqStreamScheduledT?: string
  /** field 927, wire `is_rejoin` */
  isRejoin?: boolean
  /** field 928, wire `sfu_bwa_change_num_stream_count` */
  sfuBwaChangeNumStreamCount?: number
  /** field 929, wire `num_l1_errors` */
  numL1Errors?: number
  /** field 931, wire `mic_start_to_first_callback_t` */
  micStartToFirstCallbackT?: string
  /** field 932, wire `speaker_start_to_first_callback_t` */
  speakerStartToFirstCallbackT?: string
  /** field 933, wire `num_asserts` */
  numAsserts?: number
  /** field 934, wire `video_enc_input_frames_hq` */
  videoEncInputFramesHq?: number
  /** field 935, wire `video_enc_output_frames_hq` */
  videoEncOutputFramesHq?: number
  /** field 936, wire `video_enc_error_frames_hq` */
  videoEncErrorFramesHq?: number
  /** field 937, wire `video_enc_drop_frames_hq` */
  videoEncDropFramesHq?: number
  /** field 938, wire `video_enc_discard_frame_hq` */
  videoEncDiscardFrameHq?: number
  /** field 939, wire `video_enc_keyframes_hq` */
  videoEncKeyframesHq?: number
  /** field 940, wire `echo_cancelled_frame_count` */
  echoCancelledFrameCount?: number
  /** field 941, wire `echo_estimated_frame_count` */
  echoEstimatedFrameCount?: number
  /** field 942, wire `sfu_min_target_bitrate_hq` */
  sfuMinTargetBitrateHq?: string
  /** field 943, wire `sfu_avg_target_bitrate_hq` */
  sfuAvgTargetBitrateHq?: string
  /** field 944, wire `sfu_max_target_bitrate_hq` */
  sfuMaxTargetBitrateHq?: string
  /** field 945, wire `is_rering` */
  isRering?: boolean
  /** field 946, wire `group_call_rering_count_since_call_start` */
  groupCallReringCountSinceCallStart?: number
  /** field 947, wire `group_call_rering_nack_count_since_call_start` */
  groupCallReringNackCountSinceCallStart?: number
  /** field 948, wire `call_end_reconnecting_before_relay_reset` */
  callEndReconnectingBeforeRelayReset?: boolean
  /** field 949, wire `call_end_reconnecting_soon_after_relay_reset` */
  callEndReconnectingSoonAfterRelayReset?: boolean
  /** field 950, wire `sfu_simulcast_dec_avg_num_skipped_cached_pkt` */
  sfuSimulcastDecAvgNumSkippedCachedPkt?: string
  /** field 951, wire `sfu_simulcast_dec_avg_num_replayed_cached_pkt` */
  sfuSimulcastDecAvgNumReplayedCachedPkt?: string
  /** field 952, wire `sfu_simulcast_dec_avg_kf_recv_time_since_flip` */
  sfuSimulcastDecAvgKfRecvTimeSinceFlip?: string
  /** field 953, wire `sfu_simulcast_dec_num_no_kf` */
  sfuSimulcastDecNumNoKf?: number
  /** field 954, wire `video_sender_bwe_diff_stddev` */
  videoSenderBweDiffStddev?: string
  /** field 955, wire `sfu_uplink_sender_bwe_stddev` */
  sfuUplinkSenderBweStddev?: string
  /** field 956, wire `sfu_uplink_sender_bwe_diff_stddev` */
  sfuUplinkSenderBweDiffStddev?: string
  /** field 957, wire `sfu_downlink_sender_bwe_stddev` */
  sfuDownlinkSenderBweStddev?: string
  /** field 958, wire `sfu_downlink_sender_bwe_diff_stddev` */
  sfuDownlinkSenderBweDiffStddev?: string
  /** field 959, wire `sbwe_ramp_up_count` */
  sbweRampUpCount?: number
  /** field 960, wire `sbwe_ramp_down_count` */
  sbweRampDownCount?: number
  /** field 961, wire `sbwe_hold_count` */
  sbweHoldCount?: number
  /** field 962, wire `sbwe_avg_uptrend` */
  sbweAvgUptrend?: string
  /** field 963, wire `sbwe_avg_downtrend` */
  sbweAvgDowntrend?: string
  /** field 964, wire `sfu_uplink_sbwe_ramp_up_count` */
  sfuUplinkSbweRampUpCount?: number
  /** field 965, wire `sfu_uplink_sbwe_ramp_down_count` */
  sfuUplinkSbweRampDownCount?: number
  /** field 966, wire `sfu_uplink_sbwe_hold_count` */
  sfuUplinkSbweHoldCount?: number
  /** field 967, wire `sfu_uplink_sbwe_avg_uptrend` */
  sfuUplinkSbweAvgUptrend?: string
  /** field 968, wire `sfu_uplink_sbwe_avg_downtrend` */
  sfuUplinkSbweAvgDowntrend?: string
  /** field 969, wire `sfu_downlink_sbwe_ramp_up_count` */
  sfuDownlinkSbweRampUpCount?: number
  /** field 970, wire `sfu_downlink_sbwe_ramp_down_count` */
  sfuDownlinkSbweRampDownCount?: number
  /** field 971, wire `sfu_downlink_sbwe_hold_count` */
  sfuDownlinkSbweHoldCount?: number
  /** field 972, wire `sfu_downlink_sbwe_avg_uptrend` */
  sfuDownlinkSbweAvgUptrend?: string
  /** field 973, wire `sfu_downlink_sbwe_avg_downtrend` */
  sfuDownlinkSbweAvgDowntrend?: string
  /** field 974, wire `conservative_mode_stopped` */
  conservativeModeStopped?: boolean
  /** field 975, wire `sender_bwe_init_bitrate` */
  senderBweInitBitrate?: number
  /** field 976, wire `is_pending_call` */
  isPendingCall?: boolean
  /** field 981, wire `simulcast_replay_video_render_freeze_t` */
  simulcastReplayVideoRenderFreezeT?: string
  /** field 982, wire `simulcast_replay_video_render_freeze2x_t` */
  simulcastReplayVideoRenderFreeze2xT?: string
  /** field 983, wire `simulcast_replay_video_render_freeze4x_t` */
  simulcastReplayVideoRenderFreeze4xT?: string
  /** field 984, wire `simulcast_replay_video_render_freeze8x_t` */
  simulcastReplayVideoRenderFreeze8xT?: string
  /** field 985, wire `num_dir_pj_asserts` */
  numDirPjAsserts?: number
  /** field 986, wire `l1_locations` */
  l1Locations?: string
  /** field 987, wire `echo_speaker_mode_frame_count` */
  echoSpeakerModeFrameCount?: number
  /** field 988, wire `time_enc160w` */
  timeEnc160w?: string
  /** field 989, wire `time_enc320w` */
  timeEnc320w?: string
  /** field 990, wire `time_enc480w` */
  timeEnc480w?: string
  /** field 991, wire `time_enc640w` */
  timeEnc640w?: string
  /** field 992, wire `time_enc1280w` */
  timeEnc1280w?: string
  /** field 993, wire `num_res_switch` */
  numResSwitch?: number
  /** field 996, wire `jb_total_empty_periods` */
  jbTotalEmptyPeriods?: string
  /** field 997, wire `jb_empty_periods1x` */
  jbEmptyPeriods1x?: string
  /** field 998, wire `jb_empty_periods2x` */
  jbEmptyPeriods2x?: string
  /** field 999, wire `jb_empty_periods4x` */
  jbEmptyPeriods4x?: string
  /** field 1000, wire `jb_empty_periods8x` */
  jbEmptyPeriods8x?: string
  /** field 1002, wire `sfu_avg_lq_hq_target_bitrate_diff` */
  sfuAvgLqHqTargetBitrateDiff?: string
  /** field 1003, wire `sfu_bwa_self_dl_bw_used_pct` */
  sfuBwaSelfDlBwUsedPct?: string
  /** field 1007, wire `audio_num_piggyback_tx_pkt` */
  audioNumPiggybackTxPkt?: number
  /** field 1008, wire `audio_num_piggyback_rx_pkt` */
  audioNumPiggybackRxPkt?: number
  /** field 1009, wire `freeze_bwe_congestion_corr_pct` */
  freezeBweCongestionCorrPct?: string
  /** field 1010, wire `video_num_av_sync_discard_frames` */
  videoNumAvSyncDiscardFrames?: number
  /** field 1012, wire `jb_avg_target_size` */
  jbAvgTargetSize?: string
  /** field 1013, wire `group_accept_no_critical_group_update` */
  groupAcceptNoCriticalGroupUpdate?: boolean
  /** field 1014, wire `group_accept_to_critical_group_update_ms` */
  groupAcceptToCriticalGroupUpdateMs?: string
  /** field 1015, wire `accepted_but_not_connected_time_spent_ms` */
  acceptedButNotConnectedTimeSpentMs?: string
  /** field 1016, wire `accept_ack_latency_ms` */
  acceptAckLatencyMs?: string
  /** field 1017, wire `offer_ack_latency_ms` */
  offerAckLatencyMs?: string
  /** field 1018, wire `video_enc_time_spent_in_negative12_vp8_ms` */
  videoEncTimeSpentInNegative12Vp8Ms?: string
  /** field 1019, wire `video_enc_time_spent_in_negative10_vp8_ms` */
  videoEncTimeSpentInNegative10Vp8Ms?: string
  /** field 1020, wire `video_enc_time_spent_in_negative8_vp8_ms` */
  videoEncTimeSpentInNegative8Vp8Ms?: string
  /** field 1021, wire `video_enc_time_spent_in_negative6_vp8_ms` */
  videoEncTimeSpentInNegative6Vp8Ms?: string
  /** field 1022, wire `video_enc_time_spent_in_negative4_vp8_ms` */
  videoEncTimeSpentInNegative4Vp8Ms?: string
  /** field 1029, wire `num_render_skip_green_frame` */
  numRenderSkipGreenFrame?: number
  /** field 1038, wire `transport_srtp_rx_max_pkt_size` */
  transportSrtpRxMaxPktSize?: number
  /** field 1039, wire `video_ahead_num_av_sync_discard_frames` */
  videoAheadNumAvSyncDiscardFrames?: number
  /** field 1040, wire `video_behind_num_av_sync_discard_frames` */
  videoBehindNumAvSyncDiscardFrames?: number
  /** field 1045, wire `video_enc_restart_res_change` */
  videoEncRestartResChange?: number
  /** field 1046, wire `video_enc_restart_preset_change` */
  videoEncRestartPresetChange?: number
  /** field 1047, wire `avg_enc_restart_interval_t` */
  avgEncRestartIntervalT?: string
  /** field 1048, wire `avg_enc_restart_and_kf_gen_t` */
  avgEncRestartAndKfGenT?: string
  /** field 1049, wire `video_enc_fatal_error_num` */
  videoEncFatalErrorNum?: number
  /** field 1050, wire `video_enc_modify_num` */
  videoEncModifyNum?: number
  /** field 1051, wire `freeze_ahead_bwe_congestion_corr_pct` */
  freezeAheadBweCongestionCorrPct?: string
  /** field 1052, wire `num_connected_peers` */
  numConnectedPeers?: number
  /** field 1053, wire `num_outgoing_ringing_peers` */
  numOutgoingRingingPeers?: number
  /** field 1054, wire `num_invited_participants` */
  numInvitedParticipants?: number
  /** field 1055, wire `android_audio_route_mismatch` */
  androidAudioRouteMismatch?: boolean
  /** field 1056, wire `switch_to_simulcast` */
  switchToSimulcast?: number
  /** field 1057, wire `switch_to_non_simulcast` */
  switchToNonSimulcast?: number
  /** field 1058, wire `transport_splitter_tx_err_cnt` */
  transportSplitterTxErrCnt?: number
  /** field 1059, wire `transport_splitter_rx_err_cnt` */
  transportSplitterRxErrCnt?: number
  /** field 1060, wire `prev_call_test_bucket` */
  prevCallTestBucket?: string
  /** field 1061, wire `vid_jb_lost` */
  vidJbLost?: string
  /** field 1063, wire `vid_jb_discards` */
  vidJbDiscards?: string
  /** field 1064, wire `vid_jb_empties` */
  vidJbEmpties?: string
  /** field 1065, wire `vid_jb_gets` */
  vidJbGets?: string
  /** field 1066, wire `vid_jb_puts` */
  vidJbPuts?: string
  /** field 1067, wire `vid_jb_resets` */
  vidJbResets?: string
  /** field 1073, wire `sfu_high_ul_pkt_loss_at_congestion` */
  sfuHighUlPktLossAtCongestion?: number
  /** field 1074, wire `sfu_high_dl_pkt_loss_at_congestion` */
  sfuHighDlPktLossAtCongestion?: number
  /** field 1075, wire `sfu_balanced_pkt_loss_at_congestion` */
  sfuBalancedPktLossAtCongestion?: number
  /** field 1077, wire `sfu_high_ul_rtt_at_congestion` */
  sfuHighUlRttAtCongestion?: number
  /** field 1078, wire `sfu_high_dl_rtt_at_congestion` */
  sfuHighDlRttAtCongestion?: number
  /** field 1079, wire `sfu_balanced_rtt_at_congestion` */
  sfuBalancedRttAtCongestion?: number
  /** field 1081, wire `jb_voice_frames` */
  jbVoiceFrames?: number
  /** field 1082, wire `dtx_tx_total_frame_count` */
  dtxTxTotalFrameCount?: number
  /** field 1083, wire `dtx_rx_total_frame_count` */
  dtxRxTotalFrameCount?: number
  /** field 1084, wire `video_dec_fatal_error_num` */
  videoDecFatalErrorNum?: number
  /** field 1085, wire `max_connected_participants` */
  maxConnectedParticipants?: number
  /** field 1086, wire `jb_avg_disorder_target_size` */
  jbAvgDisorderTargetSize?: string
  /** field 1087, wire `jb_max_disorder_target_size` */
  jbMaxDisorderTargetSize?: string
  /** field 1088, wire `zed_file_write_max_latency` */
  zedFileWriteMaxLatency?: string
  /** field 1089, wire `wav_file_write_max_latency` */
  wavFileWriteMaxLatency?: string
  /** field 1090, wire `is_linked_group_call` */
  isLinkedGroupCall?: boolean
  /** field 1091, wire `sfu_avg_ul_plr_at_high_ul_congestion` */
  sfuAvgUlPlrAtHighUlCongestion?: string
  /** field 1092, wire `sfu_avg_dl_plr_at_high_ul_congestion` */
  sfuAvgDlPlrAtHighUlCongestion?: string
  /** field 1093, wire `sfu_avg_ul_plr_at_high_dl_congestion` */
  sfuAvgUlPlrAtHighDlCongestion?: string
  /** field 1094, wire `sfu_avg_dl_plr_at_high_dl_congestion` */
  sfuAvgDlPlrAtHighDlCongestion?: string
  /** field 1095, wire `sfu_avg_ul_plr_at_balanced_congestion` */
  sfuAvgUlPlrAtBalancedCongestion?: string
  /** field 1096, wire `sfu_avg_dl_plr_at_balanced_congestion` */
  sfuAvgDlPlrAtBalancedCongestion?: string
  /** field 1097, wire `sfu_avg_self_rtt_at_high_self_congestion` */
  sfuAvgSelfRttAtHighSelfCongestion?: number
  /** field 1098, wire `sfu_avg_peer_rtt_at_high_self_congestion` */
  sfuAvgPeerRttAtHighSelfCongestion?: number
  /** field 1099, wire `sfu_avg_self_rtt_at_high_peer_congestion` */
  sfuAvgSelfRttAtHighPeerCongestion?: number
  /** field 1100, wire `sfu_avg_peer_rtt_at_high_peer_congestion` */
  sfuAvgPeerRttAtHighPeerCongestion?: number
  /** field 1101, wire `sfu_avg_self_rtt_at_balanced_congestion` */
  sfuAvgSelfRttAtBalancedCongestion?: number
  /** field 1102, wire `sfu_avg_peer_rtt_at_balanced_congestion` */
  sfuAvgPeerRttAtBalancedCongestion?: number
  /** field 1103, wire `sbwe_global_min_rtt_congestion_count` */
  sbweGlobalMinRttCongestionCount?: number
  /** field 1104, wire `sbwe_min_rtt_ema_congestion_count` */
  sbweMinRttEmaCongestionCount?: number
  /** field 1106, wire `sbwe_ceiling_receive_side_count` */
  sbweCeilingReceiveSideCount?: number
  /** field 1109, wire `app_in_background_during_call` */
  appInBackgroundDuringCall?: boolean
  /** field 1110, wire `sfu_rx_bandwidth_report_count` */
  sfuRxBandwidthReportCount?: number
  /** field 1111, wire `sfu_first_rx_bandwidth_report_time` */
  sfuFirstRxBandwidthReportTime?: string
  /** field 1114, wire `bwa_vid_disabling_candidate` */
  bwaVidDisablingCandidate?: boolean
  /** field 1115, wire `bwa_vid_disabling_tx_candidate_duration` */
  bwaVidDisablingTxCandidateDuration?: string
  /** field 1116, wire `bwa_vid_disabling_rx_candidate_duration` */
  bwaVidDisablingRxCandidateDuration?: string
  /** field 1117, wire `warp_mi_tx_pkt_error_count` */
  warpMiTxPktErrorCount?: number
  /** field 1118, wire `warp_mi_rx_pkt_error_count` */
  warpMiRxPktErrorCount?: number
  /** field 1119, wire `aud_stream_mix_pct` */
  audStreamMixPct?: string
  /** field 1120, wire `log_sample_ratio` */
  logSampleRatio?: number
  /** field 1121, wire `vid_avg_bursty_pkt_loss_length` */
  vidAvgBurstyPktLossLength?: string
  /** field 1122, wire `vid_avg_random_pkt_loss_length` */
  vidAvgRandomPktLossLength?: string
  /** field 1123, wire `vid_bursty_pkt_loss_time` */
  vidBurstyPktLossTime?: string
  /** field 1124, wire `vid_num_rand_to_bursty` */
  vidNumRandToBursty?: number
  /** field 1125, wire `vid_random_pkt_loss_time` */
  vidRandomPktLossTime?: string
  /** field 1126, wire `total_aqs_msg_sent` */
  totalAqsMsgSent?: number
  /** field 1127, wire `lobby_visible_t` */
  lobbyVisibleT?: string
  /** field 1128, wire `nse_enabled` */
  nseEnabled?: boolean
  /** field 1129, wire `nse_offline_queue_ms` */
  nseOfflineQueueMs?: string
  /** field 1130, wire `received_by_nse` */
  receivedByNse?: boolean
  /** field 1131, wire `camera_pause_t` */
  cameraPauseT?: string
  /** field 1132, wire `video_render_pause_t` */
  videoRenderPauseT?: string
  /** field 1133, wire `sbwe_highest_rtt_congestion_count` */
  sbweHighestRttCongestionCount?: number
  /** field 1134, wire `sbwe_ramp_up_pause_count` */
  sbweRampUpPauseCount?: number
  /** field 1135, wire `network_failover_triggered_count` */
  networkFailoverTriggeredCount?: number
  /** field 1136, wire `voip_params_compressed_size` */
  voipParamsCompressedSize?: number
  /** field 1137, wire `voip_params_uncompressed_size` */
  voipParamsUncompressedSize?: number
  /** field 1138, wire `audio_play_cb_interval_gt_default_cnt` */
  audioPlayCbIntervalGtDefaultCnt?: number
  /** field 1139, wire `audio_play_cb_latency_gte_max_cnt` */
  audioPlayCbLatencyGteMaxCnt?: number
  /** field 1140, wire `rekey_time` */
  rekeyTime?: number
  /** field 1141, wire `transport_srtcp_rx_rejected_pkt_cnt` */
  transportSrtcpRxRejectedPktCnt?: number
  /** field 1142, wire `call_end_frame_loss_ms` */
  callEndFrameLossMs?: string
  /** field 1144, wire `v2v_audio_frame_loss2x_ms` */
  v2vAudioFrameLoss2xMs?: string
  /** field 1146, wire `v2v_audio_frame_loss8x_ms` */
  v2vAudioFrameLoss8xMs?: string
  /** field 1147, wire `v2v_audio_loss_period_count` */
  v2vAudioLossPeriodCount?: number
  /** field 1148, wire `v2v_total_audio_frame_loss_ms` */
  v2vTotalAudioFrameLossMs?: string
  /** field 1149, wire `is_call_full` */
  isCallFull?: boolean
  /** field 1150, wire `used_ipv4_count` */
  usedIpv4Count?: number
  /** field 1151, wire `used_ipv6_count` */
  usedIpv6Count?: number
  /** field 1152, wire `avg_play_cb_intv_t` */
  avgPlayCbIntvT?: string
  /** field 1154, wire `warp_relay_change_detect_count` */
  warpRelayChangeDetectCount?: number
  /** field 1155, wire `call_replayer_id` */
  callReplayerId?: string
  /** field 1157, wire `call_init_rx_pkt_loss_pct3s` */
  callInitRxPktLossPct3s?: string
  /** field 1158, wire `sfu_downlink_init_combined_bwe3s` */
  sfuDownlinkInitCombinedBwe3s?: string
  /** field 1159, wire `sfu_downlink_init_pkt_loss_pct3s` */
  sfuDownlinkInitPktLossPct3s?: string
  /** field 1160, wire `sfu_uplink_init_combined_bwe3s` */
  sfuUplinkInitCombinedBwe3s?: string
  /** field 1161, wire `sfu_uplink_init_pkt_loss_pct3s` */
  sfuUplinkInitPktLossPct3s?: string
  /** field 1162, wire `wa_voip_history_get_video_tx_bitrate_by_self_and_peer_ip_str_result` */
  waVoipHistoryGetVideoTxBitrateBySelfAndPeerIpStrResult?: number
  /** field 1163, wire `wa_voip_history_get_video_tx_bitrate_by_self_and_peer_ip_str_success` */
  waVoipHistoryGetVideoTxBitrateBySelfAndPeerIpStrSuccess?: boolean
  /** field 1164, wire `wa_voip_history_get_video_tx_bitrate_by_self_ip_str_result` */
  waVoipHistoryGetVideoTxBitrateBySelfIpStrResult?: number
  /** field 1165, wire `wa_voip_history_get_video_tx_bitrate_by_self_ip_str_success` */
  waVoipHistoryGetVideoTxBitrateBySelfIpStrSuccess?: boolean
  /** field 1166, wire `wa_voip_history_num_of_call_record_found_by_matching_self_and_peer_ip_str` */
  waVoipHistoryNumOfCallRecordFoundByMatchingSelfAndPeerIpStr?: number
  /** field 1167, wire `wa_voip_history_num_of_call_record_found_by_matching_self_ip_str` */
  waVoipHistoryNumOfCallRecordFoundByMatchingSelfIpStr?: number
  /** field 1168, wire `rx_alloc_resp_no_matching_tid` */
  rxAllocRespNoMatchingTid?: number
  /** field 1169, wire `mute_not_supported_count` */
  muteNotSupportedCount?: number
  /** field 1170, wire `mute_req_already_muted_count` */
  muteReqAlreadyMutedCount?: number
  /** field 1171, wire `mute_req_timeouts_count` */
  muteReqTimeoutsCount?: number
  /** field 1172, wire `peers_mute_succ_count` */
  peersMuteSuccCount?: number
  /** field 1173, wire `peers_rejected_mute_req_count` */
  peersRejectedMuteReqCount?: number
  /** field 1174, wire `reject_mute_req_count` */
  rejectMuteReqCount?: number
  /** field 1175, wire `self_mute_success_count` */
  selfMuteSuccessCount?: number
  /** field 1176, wire `self_unmute_after_mute_req_count` */
  selfUnmuteAfterMuteReqCount?: number
  /** field 1177, wire `audio_codec_encoded_throttled_voice_frames` */
  audioCodecEncodedThrottledVoiceFrames?: number
  /** field 1178, wire `video_retx_rtcp_nack` */
  videoRetxRtcpNack?: number
  /** field 1179, wire `video_retx_rtcp_pli` */
  videoRetxRtcpPli?: number
  /** field 1181, wire `video_rx_rtcp_nack_dropped` */
  videoRxRtcpNackDropped?: number
  /** field 1182, wire `video_rx_rtcp_pli_dropped` */
  videoRxRtcpPliDropped?: number
  /** field 1184, wire `audio_nack_hbh_enabled` */
  audioNackHbhEnabled?: boolean
  /** field 1185, wire `video_nack_hbh_enabled` */
  videoNackHbhEnabled?: boolean
  /** field 1186, wire `afl_dis_prefetch_failure1x` */
  aflDisPrefetchFailure1x?: string
  /** field 1187, wire `afl_dis_prefetch_failure2x` */
  aflDisPrefetchFailure2x?: string
  /** field 1188, wire `afl_dis_prefetch_failure4x` */
  aflDisPrefetchFailure4x?: string
  /** field 1189, wire `afl_dis_prefetch_failure8x` */
  aflDisPrefetchFailure8x?: string
  /** field 1190, wire `afl_dis_prefetch_failure_total` */
  aflDisPrefetchFailureTotal?: string
  /** field 1191, wire `afl_dis_prefetch_success1x` */
  aflDisPrefetchSuccess1x?: string
  /** field 1192, wire `afl_dis_prefetch_success2x` */
  aflDisPrefetchSuccess2x?: string
  /** field 1193, wire `afl_dis_prefetch_success4x` */
  aflDisPrefetchSuccess4x?: string
  /** field 1194, wire `afl_dis_prefetch_success8x` */
  aflDisPrefetchSuccess8x?: string
  /** field 1195, wire `afl_dis_prefetch_success_total` */
  aflDisPrefetchSuccessTotal?: string
  /** field 1196, wire `afl_nack_failure1x` */
  aflNackFailure1x?: string
  /** field 1197, wire `afl_nack_failure2x` */
  aflNackFailure2x?: string
  /** field 1198, wire `afl_nack_failure4x` */
  aflNackFailure4x?: string
  /** field 1199, wire `afl_nack_failure8x` */
  aflNackFailure8x?: string
  /** field 1200, wire `afl_nack_failure_total` */
  aflNackFailureTotal?: string
  /** field 1201, wire `afl_nack_success1x` */
  aflNackSuccess1x?: string
  /** field 1202, wire `afl_nack_success2x` */
  aflNackSuccess2x?: string
  /** field 1203, wire `afl_nack_success4x` */
  aflNackSuccess4x?: string
  /** field 1204, wire `afl_nack_success8x` */
  aflNackSuccess8x?: string
  /** field 1205, wire `afl_nack_success_total` */
  aflNackSuccessTotal?: string
  /** field 1206, wire `afl_other1x` */
  aflOther1x?: string
  /** field 1207, wire `afl_other2x` */
  aflOther2x?: string
  /** field 1208, wire `afl_other4x` */
  aflOther4x?: string
  /** field 1209, wire `afl_other8x` */
  aflOther8x?: string
  /** field 1210, wire `afl_other_total` */
  aflOtherTotal?: string
  /** field 1211, wire `afl_pure_loss1x` */
  aflPureLoss1x?: string
  /** field 1212, wire `afl_pure_loss2x` */
  aflPureLoss2x?: string
  /** field 1213, wire `afl_pure_loss4x` */
  aflPureLoss4x?: string
  /** field 1214, wire `afl_pure_loss8x` */
  aflPureLoss8x?: string
  /** field 1215, wire `afl_pure_loss_total` */
  aflPureLossTotal?: string
  /** field 1216, wire `video_enc_avg_qp_key_frame_openh264` */
  videoEncAvgQpKeyFrameOpenh264?: string
  /** field 1218, wire `video_enc_avg_qp_p_frame_prev_ref_openh264` */
  videoEncAvgQpPFramePrevRefOpenh264?: string
  /** field 1219, wire `hbh_srtcp_rx_rejected_pkt_cnt_from_old_relay` */
  hbhSrtcpRxRejectedPktCntFromOldRelay?: number
  /** field 1220, wire `avg_cpu_utilization_pct` */
  avgCpuUtilizationPct?: string
  /** field 1222, wire `bound_socket_ip_address_is_invalid` */
  boundSocketIpAddressIsInvalid?: number
  /** field 1223, wire `cpu_over_utilization_pct` */
  cpuOverUtilizationPct?: string
  /** field 1224, wire `time_cpu_utilization_sampling_in_ms` */
  timeCpuUtilizationSamplingInMs?: string
  /** field 1225, wire `call_peer_test_bucket` */
  callPeerTestBucket?: string
  /** field 1226, wire `connected_to_car` */
  connectedToCar?: boolean
  /** field 1227, wire `is_os_microphone_mute` */
  isOsMicrophoneMute?: boolean
  /** field 1228, wire `pstn_call_exists` */
  pstnCallExists?: boolean
  /** field 1248, wire `hbh_srtcp_rx_success_nack_pkt_cnt` */
  hbhSrtcpRxSuccessNackPktCnt?: number
  /** field 1249, wire `hbh_srtcp_rx_success_remb_pkt_cnt` */
  hbhSrtcpRxSuccessRembPktCnt?: number
  /** field 1250, wire `hbh_srtcp_rx_success_sbwa_pkt_cnt` */
  hbhSrtcpRxSuccessSbwaPktCnt?: number
  /** field 1251, wire `hbh_srtcp_rx_success_sp_pkt_cnt` */
  hbhSrtcpRxSuccessSpPktCnt?: number
  /** field 1254, wire `hbh_srtcp_tx_nack_pkt_cnt` */
  hbhSrtcpTxNackPktCnt?: number
  /** field 1256, wire `hbh_srtcp_rx_bytes` */
  hbhSrtcpRxBytes?: number
  /** field 1257, wire `hbh_srtcp_rx_rej_auth_fail` */
  hbhSrtcpRxRejAuthFail?: number
  /** field 1258, wire `hbh_srtcp_rx_rej_einval` */
  hbhSrtcpRxRejEinval?: number
  /** field 1259, wire `hbh_srtcp_tx_bytes` */
  hbhSrtcpTxBytes?: number
  /** field 1260, wire `sfu_server_bwa_br_adjusted_for_participant_change` */
  sfuServerBwaBrAdjustedForParticipantChange?: number
  /** field 1261, wire `sfu_server_bwa_br_capped_by_uplink` */
  sfuServerBwaBrCappedByUplink?: number
  /** field 1262, wire `sfu_server_bwa_invalid_simulcast_result` */
  sfuServerBwaInvalidSimulcastResult?: number
  /** field 1263, wire `sfu_server_bwa_local_bwa_run` */
  sfuServerBwaLocalBwaRun?: number
  /** field 1264, wire `echo_cancellation_num_loops` */
  echoCancellationNumLoops?: number
  /** field 1265, wire `echo_max_converge_frame_count` */
  echoMaxConvergeFrameCount?: number
  /** field 1266, wire `server_recommended_to_elected_relay_ms` */
  serverRecommendedToElectedRelayMs?: string
  /** field 1267, wire `time_to_first_elected_relay_ms` */
  timeToFirstElectedRelayMs?: string
  /** field 1268, wire `call_transport_max_alloc_retries` */
  callTransportMaxAllocRetries?: number
  /** field 1269, wire `device_class` */
  deviceClass?: string
  /** field 1270, wire `video_quality_score` */
  videoQualityScore?: number
  /** field 1271, wire `audio_nack_req_pkts_processed` */
  audioNackReqPktsProcessed?: number
  /** field 1272, wire `video_nack_rtp_retransmit_recvd_count` */
  videoNackRtpRetransmitRecvdCount?: number
  /** field 1273, wire `video_rtcp_nack_processed` */
  videoRtcpNackProcessed?: number
  /** field 1274, wire `video_rtcp_nack_processed_hq` */
  videoRtcpNackProcessedHq?: number
  /** field 1275, wire `video_tx_resend_cause_kf` */
  videoTxResendCauseKf?: number
  /** field 1276, wire `video_tx_resend_cause_kf_hq` */
  videoTxResendCauseKfHq?: number
  /** field 1277, wire `video_tx_resend_failures` */
  videoTxResendFailures?: number
  /** field 1278, wire `video_tx_resend_failures_hq` */
  videoTxResendFailuresHq?: number
  /** field 1279, wire `hbwe_history_based_avg_video_tx_bitrate` */
  hbweHistoryBasedAvgVideoTxBitrate?: number
  /** field 1280, wire `hbwe_history_based_bwe_instant_ramp_up_done` */
  hbweHistoryBasedBweInstantRampUpDone?: boolean
  /** field 1281, wire `hbwe_history_based_bwe_update_ceiling_done` */
  hbweHistoryBasedBweUpdateCeilingDone?: boolean
  /** field 1282, wire `hbwe_history_based_bwe_update_ceiling_forced` */
  hbweHistoryBasedBweUpdateCeilingForced?: boolean
  /** field 1283, wire `audio_pkts_not_trigger_out_of_paused` */
  audioPktsNotTriggerOutOfPaused?: number
  /** field 1285, wire `paused_rtcp_count` */
  pausedRtcpCount?: number
  /** field 1287, wire `stream_dropped_pkts` */
  streamDroppedPkts?: number
  /** field 1288, wire `stream_paused_time_ms` */
  streamPausedTimeMs?: string
  /** field 1289, wire `stream_transitions_to_paused` */
  streamTransitionsToPaused?: number
  /** field 1295, wire `rx_sub_on_screen_dur` */
  rxSubOnScreenDur?: string
  /** field 1296, wire `rx_sub_request_throttled_cnt` */
  rxSubRequestThrottledCnt?: number
  /** field 1297, wire `rx_sub_switch_cnt` */
  rxSubSwitchCnt?: number
  /** field 1298, wire `rx_sub_video_wait_dur` */
  rxSubVideoWaitDur?: string
  /** field 1300, wire `call_relay_error_code` */
  callRelayErrorCode?: number
  /** field 1301, wire `call_relays_received` */
  callRelaysReceived?: number
  /** field 1302, wire `avg_loudness_diff_noise_frames` */
  avgLoudnessDiffNoiseFrames?: string
  /** field 1303, wire `avg_loudness_diff_speech_frames` */
  avgLoudnessDiffSpeechFrames?: string
  /** field 1304, wire `avg_loudness_input_noise_frames` */
  avgLoudnessInputNoiseFrames?: string
  /** field 1305, wire `avg_loudness_input_speech_frames` */
  avgLoudnessInputSpeechFrames?: string
  /** field 1306, wire `avg_loudness_output_noise_frames` */
  avgLoudnessOutputNoiseFrames?: string
  /** field 1307, wire `avg_loudness_output_speech_frames` */
  avgLoudnessOutputSpeechFrames?: string
  /** field 1308, wire `sbwe_min_rtt_slide_window_count` */
  sbweMinRttSlideWindowCount?: number
  /** field 1309, wire `relay_swapped` */
  relaySwapped?: number
  /** field 1310, wire `rx_for_error_relay_bytes` */
  rxForErrorRelayBytes?: string
  /** field 1311, wire `rx_for_other_relay_bytes` */
  rxForOtherRelayBytes?: string
  /** field 1312, wire `rx_for_tx_relay_bytes` */
  rxForTxRelayBytes?: string
  /** field 1313, wire `sre_recommended_diff` */
  sreRecommendedDiff?: number
  /** field 1314, wire `pct_peers_on_cellular` */
  pctPeersOnCellular?: string
  /** field 1316, wire `is_from_call_link` */
  isFromCallLink?: boolean
  /** field 1318, wire `audio_jb_resets` */
  audioJbResets?: number
  /** field 1319, wire `call_transport_total_rx_alloc_bytes` */
  callTransportTotalRxAllocBytes?: string
  /** field 1320, wire `call_transport_total_tx_alloc_bytes` */
  callTransportTotalTxAllocBytes?: string
  /** field 1321, wire `call_transport_tx_alloc_cnt` */
  callTransportTxAllocCnt?: number
  /** field 1322, wire `audio_swb_duration_ms` */
  audioSwbDurationMs?: string
  /** field 1323, wire `is_call_creator` */
  isCallCreator?: boolean
  /** field 1324, wire `call_test_boolean` */
  callTestBoolean?: boolean
  /** field 1325, wire `call_test_double` */
  callTestDouble?: string
  /** field 1326, wire `call_test_integer` */
  callTestInteger?: CALLTESTINTEGER
  /** field 1327, wire `call_test_long` */
  callTestLong?: number
  /** field 1328, wire `call_test_string` */
  callTestString?: string
  /** field 1329, wire `call_rx_bwe_cnt` */
  callRxBweCnt?: number
  /** field 1330, wire `call_tx_bwe_cnt` */
  callTxBweCnt?: number
  /** field 1331, wire `lonely_t` */
  lonelyT?: string
  /** field 1334, wire `audio_jb_resets_partial` */
  audioJbResetsPartial?: number
  /** field 1335, wire `is_link_join` */
  isLinkJoin?: boolean
  /** field 1336, wire `call_audio_output_route` */
  callAudioOutputRoute?: AUDIOOUTPUTROUTE
  /** field 1337, wire `sfu_server_bwa_local_bwa_transition` */
  sfuServerBwaLocalBwaTransition?: number
  /** field 1338, wire `sfu_server_bwa_longest_sbwa_missing_ms` */
  sfuServerBwaLongestSbwaMissingMs?: string
  /** field 1339, wire `server_recommended_relay_received_ms` */
  serverRecommendedRelayReceivedMs?: string
  /** field 1340, wire `peer_rx_for_error_relay_bytes` */
  peerRxForErrorRelayBytes?: string
  /** field 1341, wire `peer_rx_for_other_relay_bytes` */
  peerRxForOtherRelayBytes?: string
  /** field 1342, wire `peer_rx_for_tx_relay_bytes` */
  peerRxForTxRelayBytes?: string
  /** field 1343, wire `wa_voip_history_is_call_participant_record_saved` */
  waVoipHistoryIsCallParticipantRecordSaved?: boolean
  /** field 1344, wire `wa_voip_history_num_of_call_participant_record_found` */
  waVoipHistoryNumOfCallParticipantRecordFound?: number
  /** field 1346, wire `wa_voip_history_call_redial_status` */
  waVoipHistoryCallRedialStatus?: WAVOIPHISTORYCALLREDIALSTATUS
  /** field 1347, wire `sbwe_hold_duration` */
  sbweHoldDuration?: string
  /** field 1348, wire `sbwe_ramp_down_duration` */
  sbweRampDownDuration?: string
  /** field 1349, wire `sbwe_ramp_up_duration` */
  sbweRampUpDuration?: string
  /** field 1350, wire `imbalanced_dl_plr_t_pct` */
  imbalancedDlPlrTPct?: string
  /** field 1351, wire `audio_target06_ms` */
  audioTarget06Ms?: number
  /** field 1352, wire `audio_target1015_ms` */
  audioTarget1015Ms?: number
  /** field 1353, wire `audio_target1520_ms` */
  audioTarget1520Ms?: number
  /** field 1354, wire `audio_target2030_ms` */
  audioTarget2030Ms?: number
  /** field 1355, wire `audio_target30_plus_ms` */
  audioTarget30PlusMs?: number
  /** field 1356, wire `audio_target610_ms` */
  audioTarget610Ms?: number
  /** field 1357, wire `audio_target_bitrate_drops` */
  audioTargetBitrateDrops?: number
  /** field 1359, wire `audio_tx_ulp_fec_pkts` */
  audioTxUlpFecPkts?: number
  /** field 1360, wire `audio_ulp_fec_recovered` */
  audioUlpFecRecovered?: number
  /** field 1361, wire `new_end_call_survey_version` */
  newEndCallSurveyVersion?: number
  /** field 1362, wire `rtcp_remb_in_video_cnt` */
  rtcpRembInVideoCnt?: number
  /** field 1363, wire `call_system_pip_duration_t` */
  callSystemPipDurationT?: string
  /** field 1364, wire `dl_only_high_plr_pct` */
  dlOnlyHighPlrPct?: string
  /** field 1365, wire `ul_only_high_plr_pct` */
  ulOnlyHighPlrPct?: string
  /** field 1366, wire `rx_sub_video_wait_dur_avg` */
  rxSubVideoWaitDurAvg?: string
  /** field 1367, wire `rx_sub_video_wait_dur_sum` */
  rxSubVideoWaitDurSum?: string
  /** field 1370, wire `rx_sub_request_sent_cnt` */
  rxSubRequestSentCnt?: number
  /** field 1372, wire `is_link_creator` */
  isLinkCreator?: boolean
  /** field 1373, wire `video_nack_rtp_retransmit_req_count` */
  videoNackRtpRetransmitReqCount?: number
  /** field 1374, wire `alt_af_first_pong_time_ms` */
  altAfFirstPongTimeMs?: string
  /** field 1375, wire `alt_af_pings_sent` */
  altAfPingsSent?: number
  /** field 1376, wire `set_ip_version_count` */
  setIpVersionCount?: number
  /** field 1377, wire `call_end_reconnecting_before_call_active` */
  callEndReconnectingBeforeCallActive?: boolean
  /** field 1378, wire `remove_peer_nack_count` */
  removePeerNackCount?: number
  /** field 1379, wire `remove_peer_not_in_call_count` */
  removePeerNotInCallCount?: number
  /** field 1380, wire `remove_peer_not_supported_count` */
  removePeerNotSupportedCount?: number
  /** field 1381, wire `remove_peer_request_count` */
  removePeerRequestCount?: number
  /** field 1382, wire `remove_peer_success_count` */
  removePeerSuccessCount?: number
  /** field 1383, wire `callee_accept_to_connected_t` */
  calleeAcceptToConnectedT?: string
  /** field 1384, wire `callee_offer_to_ring_t` */
  calleeOfferToRingT?: string
  /** field 1385, wire `call_end_reconnecting_relay_pingable` */
  callEndReconnectingRelayPingable?: boolean
  /** field 1386, wire `call_end_reconnecting_signaling_accessible` */
  callEndReconnectingSignalingAccessible?: boolean
  /** field 1387, wire `echo_prob_gte40_frm_cnt` */
  echoProbGte40FrmCnt?: number
  /** field 1388, wire `echo_prob_gte50_frm_cnt` */
  echoProbGte50FrmCnt?: number
  /** field 1389, wire `echo_prob_gte60_frm_cnt` */
  echoProbGte60FrmCnt?: number
  /** field 1391, wire `avatar_canceled` */
  avatarCanceled?: boolean
  /** field 1392, wire `avatar_canceled_count` */
  avatarCanceledCount?: number
  /** field 1393, wire `avatar_duration_t` */
  avatarDurationT?: string
  /** field 1394, wire `avatar_enabled` */
  avatarEnabled?: boolean
  /** field 1395, wire `avatar_enabled_count` */
  avatarEnabledCount?: number
  /** field 1396, wire `avatar_failed` */
  avatarFailed?: boolean
  /** field 1397, wire `avatar_failed_count` */
  avatarFailedCount?: number
  /** field 1398, wire `avatar_loading_t` */
  avatarLoadingT?: string
  /** field 1399, wire `switch_to_avatar_displayed_count` */
  switchToAvatarDisplayedCount?: number
  /** field 1400, wire `video_enc_ms_in_openh264_high_comp` */
  videoEncMsInOpenh264HighComp?: string
  /** field 1401, wire `video_enc_ms_in_openh264_low_comp` */
  videoEncMsInOpenh264LowComp?: string
  /** field 1402, wire `video_enc_ms_in_openh264_medium_comp` */
  videoEncMsInOpenh264MediumComp?: string
  /** field 1403, wire `video_enc_ms_in_openh264_ultrahigh_comp` */
  videoEncMsInOpenh264UltrahighComp?: string
  /** field 1404, wire `privacy_silence_unknown_caller` */
  privacySilenceUnknownCaller?: boolean
  /** field 1405, wire `privacy_unknown_caller` */
  privacyUnknownCaller?: boolean
  /** field 1406, wire `call_connection_latency_ms` */
  callConnectionLatencyMs?: string
  /** field 1407, wire `call_ring_latency_ms` */
  callRingLatencyMs?: string
  /** field 1408, wire `rx_bytes_for_unknown_p2p` */
  rxBytesForUnknownP2p?: string
  /** field 1409, wire `xpop_relay_count` */
  xpopRelayCount?: number
  /** field 1410, wire `xpop_relay_error_bitmap` */
  xpopRelayErrorBitmap?: number
  /** field 1412, wire `avatar_attempted` */
  avatarAttempted?: boolean
  /** field 1413, wire `jb_avg_delay_from_disorder_distance_hist` */
  jbAvgDelayFromDisorderDistanceHist?: string
  /** field 1414, wire `jb_avg_delay_from_put_hist` */
  jbAvgDelayFromPutHist?: string
  /** field 1415, wire `jb_avg_put_hist_target_size` */
  jbAvgPutHistTargetSize?: string
  /** field 1416, wire `jb_avg_target_size_added_from_disorder_distance_hist` */
  jbAvgTargetSizeAddedFromDisorderDistanceHist?: string
  /** field 1417, wire `jb_avg_target_size_from_disorder_distance_hist` */
  jbAvgTargetSizeFromDisorderDistanceHist?: string
  /** field 1418, wire `jb_avg_target_size_from_put_hist` */
  jbAvgTargetSizeFromPutHist?: string
  /** field 1419, wire `jb_get_from_disorder_distance_hist` */
  jbGetFromDisorderDistanceHist?: string
  /** field 1420, wire `jb_get_from_put_hist` */
  jbGetFromPutHist?: string
  /** field 1421, wire `jb_max_delay_from_disorder_distance_hist` */
  jbMaxDelayFromDisorderDistanceHist?: string
  /** field 1422, wire `jb_max_delay_from_put_hist` */
  jbMaxDelayFromPutHist?: string
  /** field 1423, wire `jb_max_put_hist_target_size` */
  jbMaxPutHistTargetSize?: string
  /** field 1424, wire `jb_max_target_size_added_from_disorder_distance_hist` */
  jbMaxTargetSizeAddedFromDisorderDistanceHist?: string
  /** field 1425, wire `jb_max_target_size_from_disorder_distance_hist` */
  jbMaxTargetSizeFromDisorderDistanceHist?: string
  /** field 1426, wire `jb_max_target_size_from_put_hist` */
  jbMaxTargetSizeFromPutHist?: string
  /** field 1427, wire `hbh_key_inconsistency_cnt` */
  hbhKeyInconsistencyCnt?: number
  /** field 1428, wire `adaptive_tcp_error_bitmap` */
  adaptiveTcpErrorBitmap?: number
  /** field 1429, wire `call_transport_tcp_fallback_to_udp_count` */
  callTransportTcpFallbackToUdpCount?: number
  /** field 1430, wire `call_transport_tcp_used_count` */
  callTransportTcpUsedCount?: number
  /** field 1431, wire `history_based_min_rtt_available` */
  historyBasedMinRttAvailable?: boolean
  /** field 1432, wire `history_based_min_rtt_congestion_count` */
  historyBasedMinRttCongestionCount?: number
  /** field 1433, wire `history_based_min_rtt_divided_by_runtime_min_rtt` */
  historyBasedMinRttDividedByRuntimeMinRtt?: string
  /** field 1434, wire `accept_to_first_frame_decoded_t_ss` */
  acceptToFirstFrameDecodedTSs?: string
  /** field 1435, wire `ack_to_first_frame_encoded_t_ss` */
  ackToFirstFrameEncodedTSs?: string
  /** field 1437, wire `capture_driver_notify_count_ss` */
  captureDriverNotifyCountSs?: number
  /** field 1438, wire `cropped_columns_ss` */
  croppedColumnsSs?: number
  /** field 1439, wire `cropped_rows_ss` */
  croppedRowsSs?: number
  /** field 1440, wire `downlink_overshoot_count_ss` */
  downlinkOvershootCountSs?: number
  /** field 1441, wire `duration_t_ss` */
  durationTSs?: string
  /** field 1442, wire `num_crop_capture_content_ss` */
  numCropCaptureContentSs?: number
  /** field 1443, wire `receiver_video_encoded_height_ss` */
  receiverVideoEncodedHeightSs?: number
  /** field 1444, wire `receiver_video_encoded_width_ss` */
  receiverVideoEncodedWidthSs?: number
  /** field 1445, wire `ss_receiver_start_fail_count` */
  ssReceiverStartFailCount?: number
  /** field 1446, wire `ss_receiver_start_request_count` */
  ssReceiverStartRequestCount?: number
  /** field 1447, wire `ss_receiver_start_success_count` */
  ssReceiverStartSuccessCount?: number
  /** field 1448, wire `ss_receiver_stop_fail_count` */
  ssReceiverStopFailCount?: number
  /** field 1449, wire `ss_receiver_stop_request_count` */
  ssReceiverStopRequestCount?: number
  /** field 1450, wire `ss_receiver_stop_success_count` */
  ssReceiverStopSuccessCount?: number
  /** field 1451, wire `ss_receiver_version` */
  ssReceiverVersion?: number
  /** field 1452, wire `ss_sharer_start_fail_count` */
  ssSharerStartFailCount?: number
  /** field 1453, wire `ss_sharer_start_request_count` */
  ssSharerStartRequestCount?: number
  /** field 1454, wire `ss_sharer_start_success_count` */
  ssSharerStartSuccessCount?: number
  /** field 1455, wire `ss_sharer_stop_fail_count` */
  ssSharerStopFailCount?: number
  /** field 1456, wire `ss_sharer_stop_request_count` */
  ssSharerStopRequestCount?: number
  /** field 1457, wire `ss_sharer_stop_success_count` */
  ssSharerStopSuccessCount?: number
  /** field 1458, wire `ss_sharer_version` */
  ssSharerVersion?: number
  /** field 1459, wire `ss_time_in_static_content_type` */
  ssTimeInStaticContentType?: string
  /** field 1460, wire `ss_time_in_video_content_type` */
  ssTimeInVideoContentType?: string
  /** field 1461, wire `total_frames_captured_in_last10sec_ss` */
  totalFramesCapturedInLast10secSs?: number
  /** field 1462, wire `total_frames_captured_ss` */
  totalFramesCapturedSs?: number
  /** field 1463, wire `total_frames_rendered_in_last10sec_ss` */
  totalFramesRenderedInLast10secSs?: number
  /** field 1464, wire `total_frames_rendered_ss` */
  totalFramesRenderedSs?: number
  /** field 1465, wire `uplink_overshoot_count_ss` */
  uplinkOvershootCountSs?: number
  /** field 1466, wire `uplink_undershoot_count_ss` */
  uplinkUndershootCountSs?: number
  /** field 1467, wire `video_avg_enc_kf_qp_ss` */
  videoAvgEncKfQpSs?: number
  /** field 1468, wire `video_avg_enc_p_frame_qp_ss` */
  videoAvgEncPFrameQpSs?: number
  /** field 1469, wire `video_avg_target_bitrate_hq_ss` */
  videoAvgTargetBitrateHqSs?: string
  /** field 1470, wire `video_avg_total_target_bitrate_ss` */
  videoAvgTotalTargetBitrateSs?: string
  /** field 1471, wire `video_capture_height_ss` */
  videoCaptureHeightSs?: number
  /** field 1472, wire `video_capture_width_ss` */
  videoCaptureWidthSs?: number
  /** field 1473, wire `video_dec_avg_fps_ss` */
  videoDecAvgFpsSs?: string
  /** field 1474, wire `video_dec_output_frames_in_last10sec_ss` */
  videoDecOutputFramesInLast10secSs?: number
  /** field 1475, wire `video_dec_output_frames_ss` */
  videoDecOutputFramesSs?: number
  /** field 1476, wire `video_enc_bitrate_hq_ss` */
  videoEncBitrateHqSs?: string
  /** field 1477, wire `video_enc_input_frames_in_last10sec_ss` */
  videoEncInputFramesInLast10secSs?: number
  /** field 1478, wire `video_enc_input_frames_ss` */
  videoEncInputFramesSs?: number
  /** field 1479, wire `video_enc_keyframes_ss` */
  videoEncKeyframesSs?: number
  /** field 1480, wire `video_enc_output_frame_ss` */
  videoEncOutputFrameSs?: number
  /** field 1481, wire `video_encoder_height_ss` */
  videoEncoderHeightSs?: number
  /** field 1482, wire `video_encoder_width_ss` */
  videoEncoderWidthSs?: number
  /** field 1483, wire `video_rx_bitrate_ss` */
  videoRxBitrateSs?: number
  /** field 1484, wire `video_tx_bitrate_ss` */
  videoTxBitrateSs?: string
  /** field 1488, wire `is_scheduled_call` */
  isScheduledCall?: boolean
  /** field 1489, wire `one_side_num_relays_group_offer` */
  oneSideNumRelaysGroupOffer?: number
  /** field 1490, wire `one_side_relay_transaction_id_first_alloc_resp` */
  oneSideRelayTransactionIdFirstAllocResp?: number
  /** field 1491, wire `video_avg_target_bitrate_ss` */
  videoAvgTargetBitrateSs?: string
  /** field 1492, wire `call_reconnecting_probe_state` */
  callReconnectingProbeState?: number
  /** field 1493, wire `xpop_call_peer_relay_ip` */
  xpopCallPeerRelayIp?: string
  /** field 1494, wire `peer_device_name` */
  peerDeviceName?: string
  /** field 1495, wire `sbwe_abs_rtt_on_hold_count` */
  sbweAbsRttOnHoldCount?: number
  /** field 1496, wire `sbwe_rtt_slope_congestion_count` */
  sbweRttSlopeCongestionCount?: number
  /** field 1497, wire `sbwe_rtt_slope_on_hold_count` */
  sbweRttSlopeOnHoldCount?: number
  /** field 1498, wire `net_health_average_count` */
  netHealthAverageCount?: number
  /** field 1499, wire `net_health_good_count` */
  netHealthGoodCount?: number
  /** field 1500, wire `net_health_measuring_count` */
  netHealthMeasuringCount?: number
  /** field 1501, wire `net_health_nonetwork_count` */
  netHealthNonetworkCount?: number
  /** field 1502, wire `net_health_percent_in_average` */
  netHealthPercentInAverage?: string
  /** field 1503, wire `net_health_percent_in_good` */
  netHealthPercentInGood?: string
  /** field 1504, wire `net_health_percent_in_measuring` */
  netHealthPercentInMeasuring?: string
  /** field 1505, wire `net_health_percent_in_nonetwork` */
  netHealthPercentInNonetwork?: string
  /** field 1506, wire `net_health_percent_in_poor` */
  netHealthPercentInPoor?: string
  /** field 1507, wire `net_health_poor_count` */
  netHealthPoorCount?: number
  /** field 1508, wire `net_health_slow_poor_by_reconnect` */
  netHealthSlowPoorByReconnect?: number
  /** field 1509, wire `net_health_slow_poor_by_rx_stop` */
  netHealthSlowPoorByRxStop?: number
  /** field 1510, wire `landscape_mode_duration_t` */
  landscapeModeDurationT?: string
  /** field 1511, wire `landscape_mode_locked_duration_t` */
  landscapeModeLockedDurationT?: string
  /** field 1512, wire `landscape_mode_locked_switch_count` */
  landscapeModeLockedSwitchCount?: number
  /** field 1513, wire `landscape_mode_pip_mixed_duration_t` */
  landscapeModePipMixedDurationT?: string
  /** field 1514, wire `landscape_mode_switch_count` */
  landscapeModeSwitchCount?: number
  /** field 1515, wire `xpop_to1pop_fallback_cnt` */
  xpopTo1popFallbackCnt?: number
  /** field 1516, wire `landscape_mode_enabled` */
  landscapeModeEnabled?: number
  /** field 1517, wire `call_end_tx_stopped` */
  callEndTxStopped?: boolean
  /** field 1518, wire `call_tx_stopped_t` */
  callTxStoppedT?: string
  /** field 1519, wire `tx_stopped_count` */
  txStoppedCount?: number
  /** field 1520, wire `initial_audio_render_delay_t` */
  initialAudioRenderDelayT?: string
  /** field 1521, wire `audio_decode_errors` */
  audioDecodeErrors?: number
  /** field 1522, wire `audio_encode_errors` */
  audioEncodeErrors?: number
  /** field 1523, wire `audio_packetize_errors` */
  audioPacketizeErrors?: number
  /** field 1524, wire `audio_parse_errors` */
  audioParseErrors?: number
  /** field 1525, wire `relay_ping_avg_rtt` */
  relayPingAvgRtt?: string
  /** field 1526, wire `relay_ping_max_rtt` */
  relayPingMaxRtt?: string
  /** field 1527, wire `relay_ping_min_rtt` */
  relayPingMinRtt?: string
  /** field 1528, wire `rx_bytes_for_p2p` */
  rxBytesForP2p?: number
  /** field 1529, wire `greater_than_low_plr_is_random_count` */
  greaterThanLowPlrIsRandomCount?: number
  /** field 1530, wire `math_plc_remove_high_pkt_loss_cong_count` */
  mathPlcRemoveHighPktLossCongCount?: number
  /** field 1531, wire `ml_plc_model_available_in_call` */
  mlPlcModelAvailableInCall?: boolean
  /** field 1532, wire `ml_plc_model_avg_download_time` */
  mlPlcModelAvgDownloadTime?: string
  /** field 1533, wire `ml_plc_model_avg_extraction_time` */
  mlPlcModelAvgExtractionTime?: string
  /** field 1534, wire `ml_plc_model_avg_inference_interval` */
  mlPlcModelAvgInferenceInterval?: number
  /** field 1535, wire `ml_plc_model_avg_inference_time` */
  mlPlcModelAvgInferenceTime?: string
  /** field 1536, wire `ml_plc_model_download_failure_count` */
  mlPlcModelDownloadFailureCount?: number
  /** field 1537, wire `ml_plc_model_inference_failure_count` */
  mlPlcModelInferenceFailureCount?: number
  /** field 1538, wire `ml_plc_model_max_inference_time` */
  mlPlcModelMaxInferenceTime?: string
  /** field 1539, wire `ml_plc_model_min_inference_time` */
  mlPlcModelMinInferenceTime?: string
  /** field 1540, wire `ml_plc_model_short_inference_interval_count` */
  mlPlcModelShortInferenceIntervalCount?: number
  /** field 1541, wire `ml_plc_remove_high_pkt_loss_cong_count` */
  mlPlcRemoveHighPktLossCongCount?: number
  /** field 1542, wire `ml_shim_avg_creation_time` */
  mlShimAvgCreationTime?: string
  /** field 1543, wire `ml_shim_creation_failure_count` */
  mlShimCreationFailureCount?: number
  /** field 1544, wire `pytorch_edge_lib_avg_loading_time` */
  pytorchEdgeLibAvgLoadingTime?: string
  /** field 1545, wire `tx_failed_enc_check_bytes` */
  txFailedEncCheckBytes?: string
  /** field 1546, wire `tx_failed_enc_check_packets` */
  txFailedEncCheckPackets?: number
  /** field 1547, wire `wa_sframe_audio_rx_dup_pkts_cnt` */
  waSframeAudioRxDupPktsCnt?: number
  /** field 1548, wire `wa_sframe_audio_rx_error_missing_key` */
  waSframeAudioRxErrorMissingKey?: number
  /** field 1549, wire `wa_sframe_audio_rx_reject_pkts_cnt` */
  waSframeAudioRxRejectPktsCnt?: number
  /** field 1550, wire `wa_sframe_audio_tx_error_pkt_cnt` */
  waSframeAudioTxErrorPktCnt?: number
  /** field 1551, wire `wa_sframe_video_hq_tx_error_pkt_cnt` */
  waSframeVideoHqTxErrorPktCnt?: number
  /** field 1552, wire `wa_sframe_video_lq_tx_error_pkt_cnt` */
  waSframeVideoLqTxErrorPktCnt?: number
  /** field 1553, wire `wa_sframe_video_rx_dup_pkts_cnt` */
  waSframeVideoRxDupPktsCnt?: number
  /** field 1554, wire `wa_sframe_video_rx_error_missing_key` */
  waSframeVideoRxErrorMissingKey?: number
  /** field 1555, wire `wa_sframe_video_rx_reject_pkts_cnt` */
  waSframeVideoRxRejectPktsCnt?: number
  /** field 1556, wire `critical_group_update_process_t` */
  criticalGroupUpdateProcessT?: string
  /** field 1557, wire `tcp_available_count` */
  tcpAvailableCount?: number
  /** field 1558, wire `tcp_available_on_udp_count` */
  tcpAvailableOnUdpCount?: number
  /** field 1559, wire `udp_available_count` */
  udpAvailableCount?: number
  /** field 1560, wire `udp_available_on_tcp_count` */
  udpAvailableOnTcpCount?: number
  /** field 1561, wire `audio_stream_recreations` */
  audioStreamRecreations?: number
  /** field 1562, wire `video_stream_recreations` */
  videoStreamRecreations?: number
  /** field 1563, wire `pytorch_edge_lib_load_error_code` */
  pytorchEdgeLibLoadErrorCode?: PYTORCHEDGELIBLOADERRORCODE
  /** field 1564, wire `pytorch_edge_lib_load_status` */
  pytorchEdgeLibLoadStatus?: PYTORCHEDGELIBLOADSTATUS
  /** field 1565, wire `audio_callee_accept_to_decode_t` */
  audioCalleeAcceptToDecodeT?: number
  /** field 1566, wire `audio_caller_offer_to_decode_t` */
  audioCallerOfferToDecodeT?: number
  /** field 1568, wire `call_nc_test_id` */
  callNcTestId?: string
  /** field 1569, wire `call_nc_test_name` */
  callNcTestName?: string
  /** field 1570, wire `transport_srtp_rx_init_rej_no_dup_pkt_cnt` */
  transportSrtpRxInitRejNoDupPktCnt?: number
  /** field 1571, wire `voip_settings_dict_lookup_failure` */
  voipSettingsDictLookupFailure?: number
  /** field 1572, wire `voip_settings_dict_lookup_success` */
  voipSettingsDictLookupSuccess?: number
  /** field 1573, wire `voip_settings_dict_no_lookup` */
  voipSettingsDictNoLookup?: number
  /** field 1574, wire `call_used_vpn` */
  callUsedVpn?: boolean
  /** field 1575, wire `invalid_relay_message_cnt` */
  invalidRelayMessageCnt?: number
  /** field 1576, wire `unknown_relay_message_cnt` */
  unknownRelayMessageCnt?: number
  /** field 1577, wire `is_voice_chat` */
  isVoiceChat?: boolean
  /** field 1578, wire `group_call_is_first_segment` */
  groupCallIsFirstSegment?: boolean
  /** field 1579, wire `is_muted_during_call` */
  isMutedDuringCall?: boolean
  /** field 1580, wire `record_non_silence_frame_count_during_mute` */
  recordNonSilenceFrameCountDuringMute?: number
  /** field 1581, wire `random_scheduled_id` */
  randomScheduledId?: number
  /** field 1582, wire `close_tcp_socket_t` */
  closeTcpSocketT?: string
  /** field 1583, wire `num_processed_noise_frames` */
  numProcessedNoiseFrames?: number
  /** field 1584, wire `num_processed_speech_frames` */
  numProcessedSpeechFrames?: number
  /** field 1585, wire `hbh_srtp_rx_pkt_cnt` */
  hbhSrtpRxPktCnt?: number
  /** field 1586, wire `hbh_srtp_rx_rej_auth_fail` */
  hbhSrtpRxRejAuthFail?: number
  /** field 1587, wire `hbh_srtp_rx_rej_einval` */
  hbhSrtpRxRejEinval?: number
  /** field 1588, wire `hbh_srtp_tx_pkt_cnt` */
  hbhSrtpTxPktCnt?: number
  /** field 1589, wire `echo_confidence` */
  echoConfidence?: number
  /** field 1590, wire `echo_delay` */
  echoDelay?: number
  /** field 1591, wire `echo_lt_delay` */
  echoLtDelay?: number
  /** field 1592, wire `echo_percentage` */
  echoPercentage?: number
  /** field 1593, wire `echo_return_loss` */
  echoReturnLoss?: number
  /** field 1594, wire `scheduled_call_join_time_diff_ms` */
  scheduledCallJoinTimeDiffMs?: number
  /** field 1595, wire `call_end_reconnecting_expected_bitmap` */
  callEndReconnectingExpectedBitmap?: number
  /** field 1596, wire `callee_push_latency_ms` */
  calleePushLatencyMs?: string
  /** field 1597, wire `do_not_disturb_enabled` */
  doNotDisturbEnabled?: boolean
  /** field 1598, wire `push_ghost_call_reason` */
  pushGhostCallReason?: PUSHGHOSTCALLREASON
  /** field 1599, wire `push_priority_downgraded` */
  pushPriorityDowngraded?: boolean
  /** field 1600, wire `push_rang_with_payload` */
  pushRangWithPayload?: boolean
  /** field 1601, wire `warp_client_dup_rtx` */
  warpClientDupRtx?: number
  /** field 1602, wire `warp_client_nack_rtx` */
  warpClientNackRtx?: number
  /** field 1603, wire `warp_server_dup_rtx` */
  warpServerDupRtx?: number
  /** field 1604, wire `warp_server_nack_rtx` */
  warpServerNackRtx?: number
  /** field 1605, wire `is_lid_call` */
  isLidCall?: boolean
  /** field 1606, wire `can_use_full_screen_intent` */
  canUseFullScreenIntent?: boolean
  /** field 1607, wire `last_min_jb_avg_delay` */
  lastMinJbAvgDelay?: string
  /** field 1608, wire `last_min_jb_empties` */
  lastMinJbEmpties?: string
  /** field 1609, wire `last_min_jb_gets` */
  lastMinJbGets?: string
  /** field 1610, wire `last_min_jb_lost` */
  lastMinJbLost?: string
  /** field 1611, wire `dynamic_transport_event_bitmap` */
  dynamicTransportEventBitmap?: number
  /** field 1612, wire `p2p_connection_quality_stat` */
  p2pConnectionQualityStat?: string
  /** field 1613, wire `relay_connection_quality_stat` */
  relayConnectionQualityStat?: string
  /** field 1614, wire `rx_bytes_for_xpop` */
  rxBytesForXpop?: string
  /** field 1615, wire `voip_setting_release_type` */
  voipSettingReleaseType?: VOIPSETTINGRELEASETYPE
  /** field 1616, wire `voip_setting_version` */
  voipSettingVersion?: number
  /** field 1617, wire `group_call_video_maximized_duration` */
  groupCallVideoMaximizedDuration?: string
  /** field 1618, wire `per_peer_call_network` */
  perPeerCallNetwork?: CALLNETWORKMEDIUM
  /** field 1619, wire `last_min_video_render_enable_duration` */
  lastMinVideoRenderEnableDuration?: string
  /** field 1620, wire `last_min_video_render_freeze2x_t` */
  lastMinVideoRenderFreeze2xT?: string
  /** field 1621, wire `last_min_video_render_freeze4x_t` */
  lastMinVideoRenderFreeze4xT?: string
  /** field 1622, wire `last_min_video_render_freeze8x_t` */
  lastMinVideoRenderFreeze8xT?: string
  /** field 1623, wire `last_min_video_render_freeze_t` */
  lastMinVideoRenderFreezeT?: string
  /** field 1624, wire `last_minute_call_avg_rtt` */
  lastMinuteCallAvgRtt?: string
  /** field 1631, wire `time_enc960w` */
  timeEnc960w?: string
  /** field 1632, wire `call_notification_state` */
  callNotificationState?: number
  /** field 1633, wire `ml_undershoot_model_available_in_call` */
  mlUndershootModelAvailableInCall?: boolean
  /** field 1634, wire `ml_undershoot_model_avg_download_time` */
  mlUndershootModelAvgDownloadTime?: string
  /** field 1635, wire `ml_undershoot_model_avg_extraction_time` */
  mlUndershootModelAvgExtractionTime?: string
  /** field 1636, wire `ml_undershoot_model_avg_inference_interval` */
  mlUndershootModelAvgInferenceInterval?: number
  /** field 1637, wire `ml_undershoot_model_avg_inference_time` */
  mlUndershootModelAvgInferenceTime?: string
  /** field 1638, wire `ml_undershoot_model_download_failure_count` */
  mlUndershootModelDownloadFailureCount?: number
  /** field 1639, wire `ml_undershoot_model_inference_failure_count` */
  mlUndershootModelInferenceFailureCount?: number
  /** field 1640, wire `ml_undershoot_model_max_inference_time` */
  mlUndershootModelMaxInferenceTime?: string
  /** field 1641, wire `ml_undershoot_model_min_inference_time` */
  mlUndershootModelMinInferenceTime?: string
  /** field 1642, wire `ml_undershoot_model_short_inference_interval_count` */
  mlUndershootModelShortInferenceIntervalCount?: number
  /** field 1643, wire `ml_undershoot_shim_avg_creation_time` */
  mlUndershootShimAvgCreationTime?: string
  /** field 1644, wire `ml_undershoot_shim_creation_failure_count` */
  mlUndershootShimCreationFailureCount?: number
  /** field 1645, wire `ml_undershoot_trigger_mcp_count` */
  mlUndershootTriggerMcpCount?: number
  /** field 1646, wire `hbh_srtcp_rx_success_pli_pkt_cnt` */
  hbhSrtcpRxSuccessPliPktCnt?: number
  /** field 1647, wire `num_rx_subscribers` */
  numRxSubscribers?: string
  /** field 1648, wire `num_video_streams_disabled` */
  numVideoStreamsDisabled?: string
  /** field 1649, wire `per_peer_video_disabling_event_count` */
  perPeerVideoDisablingEventCount?: number
  /** field 1650, wire `tx_subscription_change_count` */
  txSubscriptionChangeCount?: number
  /** field 1652, wire `video_disabling_event_count` */
  videoDisablingEventCount?: number
  /** field 1653, wire `video_disabling_to_call_end_delay` */
  videoDisablingToCallEndDelay?: string
  /** field 1654, wire `ml_undershoot_pytorch_edge_lib_load_error_code` */
  mlUndershootPytorchEdgeLibLoadErrorCode?: MLUNDERSHOOTPYTORCHEDGELIBLOADERRORCODE
  /** field 1655, wire `ml_undershoot_pytorch_edge_lib_load_status` */
  mlUndershootPytorchEdgeLibLoadStatus?: MLUNDERSHOOTPYTORCHEDGELIBLOADSTATUS
  /** field 1656, wire `jb_mean_wait_time` */
  jbMeanWaitTime?: string
  /** field 1657, wire `wa_calling_history_dl_sbwe_by_self_ip` */
  waCallingHistoryDlSbweBySelfIp?: number
  /** field 1658, wire `wa_calling_history_group_call_record_save_condition_check_status` */
  waCallingHistoryGroupCallRecordSaveConditionCheckStatus?: WACALLINGHISTORYGROUPCALLRECORDSAVECONDITIONCHECKSTATUS
  /** field 1659, wire `wa_calling_history_group_call_self_ip_address_available` */
  waCallingHistoryGroupCallSelfIpAddressAvailable?: boolean
  /** field 1660, wire `wa_calling_history_is_group_call_record_saved` */
  waCallingHistoryIsGroupCallRecordSaved?: boolean
  /** field 1661, wire `wa_calling_history_num_of_group_call_record_loaded` */
  waCallingHistoryNumOfGroupCallRecordLoaded?: number
  /** field 1662, wire `wa_calling_history_ul_sbwe_by_self_ip` */
  waCallingHistoryUlSbweBySelfIp?: number
  /** field 1663, wire `push_accept_to_offer_ms` */
  pushAcceptToOfferMs?: string
  /** field 1664, wire `push_offer_result` */
  pushOfferResult?: PUSHOFFERRESULT
  /** field 1665, wire `wa_bad_call_detector_freq_rtt_cycle` */
  waBadCallDetectorFreqRttCycle?: boolean
  /** field 1666, wire `wa_bad_call_detector_high_init_rtt` */
  waBadCallDetectorHighInitRtt?: boolean
  /** field 1667, wire `wa_bad_call_detector_hist_rtt` */
  waBadCallDetectorHistRtt?: boolean
  /** field 1668, wire `wa_bad_call_detector_mte_bad_combine` */
  waBadCallDetectorMteBadCombine?: number
  /** field 1669, wire `wa_calling_history_last_avg_rtt_by_self_and_peer_ip` */
  waCallingHistoryLastAvgRttBySelfAndPeerIp?: number
  /** field 1670, wire `wa_calling_history_last_max_rtt_by_self_and_peer_ip` */
  waCallingHistoryLastMaxRttBySelfAndPeerIp?: number
  /** field 1671, wire `wa_calling_history_last_min_rtt_by_self_and_peer_ip` */
  waCallingHistoryLastMinRttBySelfAndPeerIp?: number
  /** field 1672, wire `is_phash_based` */
  isPhashBased?: boolean
  /** field 1673, wire `group_call_invite_count_before_connected` */
  groupCallInviteCountBeforeConnected?: number
  /** field 1674, wire `is_upgraded_group_call_before_connected` */
  isUpgradedGroupCallBeforeConnected?: boolean
  /** field 1675, wire `device_arch` */
  deviceArch?: DEVICEARCH
  /** field 1676, wire `time_enc240w` */
  timeEnc240w?: string
  /** field 1677, wire `call_ended_peers_interrupted` */
  callEndedPeersInterrupted?: boolean
  /** field 1678, wire `call_peers_interrupted` */
  callPeersInterrupted?: boolean
  /** field 1679, wire `pytorch_edge_lib_first_loading_time` */
  pytorchEdgeLibFirstLoadingTime?: string
  /** field 1680, wire `wa_calling_history_init_dl_sbwe_success` */
  waCallingHistoryInitDlSbweSuccess?: boolean
  /** field 1681, wire `wa_calling_history_init_ul_sbwe_success` */
  waCallingHistoryInitUlSbweSuccess?: boolean
  /** field 1682, wire `dynamic_transport_transport_switch_cnt` */
  dynamicTransportTransportSwitchCnt?: number
  /** field 1683, wire `invalid_data_packet_cnt` */
  invalidDataPacketCnt?: number
  /** field 1684, wire `last_relay_cnt` */
  lastRelayCnt?: number
  /** field 1685, wire `hbh_srtcp_rx_success_srtp_afb_pkt_cnt` */
  hbhSrtcpRxSuccessSrtpAfbPktCnt?: number
  /** field 1686, wire `hbh_srtcp_tx_srtp_afb_pkt_cnt` */
  hbhSrtcpTxSrtpAfbPktCnt?: number
  /** field 1687, wire `video_av1_time` */
  videoAv1Time?: number
  /** field 1688, wire `video_dec_error_frames_av1` */
  videoDecErrorFramesAv1?: number
  /** field 1689, wire `video_enc_time_overshoot10_perc_av1` */
  videoEncTimeOvershoot10PercAv1?: string
  /** field 1690, wire `video_enc_time_overshoot20_perc_av1` */
  videoEncTimeOvershoot20PercAv1?: string
  /** field 1691, wire `video_enc_time_overshoot40_perc_av1` */
  videoEncTimeOvershoot40PercAv1?: string
  /** field 1692, wire `video_enc_time_undershoot10_perc_av1` */
  videoEncTimeUndershoot10PercAv1?: string
  /** field 1693, wire `video_enc_time_undershoot20_perc_av1` */
  videoEncTimeUndershoot20PercAv1?: string
  /** field 1694, wire `video_enc_time_undershoot40_perc_av1` */
  videoEncTimeUndershoot40PercAv1?: string
  /** field 1695, wire `num_hbh_fec_pkt_received` */
  numHbhFecPktReceived?: number
  /** field 1696, wire `num_hbh_fec_pkt_sent` */
  numHbhFecPktSent?: number
  /** field 1697, wire `num_media_pkt_recovered_by_hbh_fec` */
  numMediaPktRecoveredByHbhFec?: number
  /** field 1698, wire `rx_hbh_fec_bitrate_kbps` */
  rxHbhFecBitrateKbps?: number
  /** field 1699, wire `tx_hbh_fec_bitrate_kbps` */
  txHbhFecBitrateKbps?: number
  /** field 1700, wire `avg_echo_confidence` */
  avgEchoConfidence?: number
  /** field 1701, wire `echo_conf2140` */
  echoConf2140?: number
  /** field 1702, wire `echo_conf4160` */
  echoConf4160?: number
  /** field 1703, wire `echo_conf_gt60` */
  echoConfGt60?: number
  /** field 1704, wire `echo_conf_lt20` */
  echoConfLt20?: number
  /** field 1705, wire `duration_t_ss_receiver` */
  durationTSsReceiver?: string
  /** field 1706, wire `duration_t_ss_sharer` */
  durationTSsSharer?: string
  /** field 1707, wire `ss_sharer_content_type_change` */
  ssSharerContentTypeChange?: number
  /** field 1708, wire `ss_sharer_text_content_bytes_encoded` */
  ssSharerTextContentBytesEncoded?: number
  /** field 1709, wire `ss_sharer_text_content_duration` */
  ssSharerTextContentDuration?: string
  /** field 1710, wire `ss_sharer_text_content_frames` */
  ssSharerTextContentFrames?: number
  /** field 1711, wire `ss_sharer_text_content_pixels_encoded` */
  ssSharerTextContentPixelsEncoded?: number
  /** field 1712, wire `ss_sharer_text_content_qp` */
  ssSharerTextContentQp?: number
  /** field 1713, wire `ss_sharer_video_content_bytes_encoded` */
  ssSharerVideoContentBytesEncoded?: number
  /** field 1714, wire `ss_sharer_video_content_duration` */
  ssSharerVideoContentDuration?: string
  /** field 1715, wire `ss_sharer_video_content_frames` */
  ssSharerVideoContentFrames?: number
  /** field 1716, wire `ss_sharer_video_content_pixels_encoded` */
  ssSharerVideoContentPixelsEncoded?: number
  /** field 1717, wire `ss_sharer_video_content_qp` */
  ssSharerVideoContentQp?: number
  /** field 1718, wire `jb_cng` */
  jbCng?: string
  /** field 1719, wire `jb_plc` */
  jbPlc?: string
  /** field 1720, wire `jb_plc_cng` */
  jbPlcCng?: string
  /** field 1721, wire `neteq_buffer_flush_count` */
  neteqBufferFlushCount?: number
  /** field 1722, wire `neteq_preemptive_expanded_frames` */
  neteqPreemptiveExpandedFrames?: number
  /** field 1723, wire `neteq_target_delay_ms` */
  neteqTargetDelayMs?: string
  /** field 1724, wire `echo_likelihood_diff` */
  echoLikelihoodDiff?: number
  /** field 1725, wire `max_echo_likelihood` */
  maxEchoLikelihood?: number
  /** field 1726, wire `video_disabling_action_reversal_count` */
  videoDisablingActionReversalCount?: number
  /** field 1728, wire `inbound_video_disabling_duration` */
  inboundVideoDisablingDuration?: string
  /** field 1729, wire `num_dec_resolution_switches` */
  numDecResolutionSwitches?: number
  /** field 1730, wire `time_dec240w` */
  timeDec240w?: string
  /** field 1731, wire `time_dec320w` */
  timeDec320w?: string
  /** field 1732, wire `time_dec480w` */
  timeDec480w?: string
  /** field 1733, wire `packet_pair_avg_bitrate` */
  packetPairAvgBitrate?: number
  /** field 1734, wire `packet_pair_reliable_ratio` */
  packetPairReliableRatio?: string
  /** field 1735, wire `packet_pair_underestimate_ratio` */
  packetPairUnderestimateRatio?: string
  /** field 1736, wire `audio_frame_from_server_dup` */
  audioFrameFromServerDup?: number
  /** field 1737, wire `warp_server_dup_audio_rtx_used` */
  warpServerDupAudioRtxUsed?: number
  /** field 1738, wire `time_dec1280w` */
  timeDec1280w?: string
  /** field 1739, wire `time_dec160w` */
  timeDec160w?: string
  /** field 1740, wire `time_dec640w` */
  timeDec640w?: string
  /** field 1741, wire `time_dec960w` */
  timeDec960w?: string
  /** field 1742, wire `wa_bad_call_detector_init_rtt_stddev` */
  waBadCallDetectorInitRttStddev?: string
  /** field 1743, wire `srtp_enc_type` */
  srtpEncType?: number
  /** field 1745, wire `max_pkt_process_latency_ms` */
  maxPktProcessLatencyMs?: string
  /** field 1746, wire `max_unbound_relay_count` */
  maxUnboundRelayCount?: number
  /** field 1747, wire `mean_pkt_process_latency_ms` */
  meanPktProcessLatencyMs?: string
  /** field 1748, wire `audio_tx_active_bitrate` */
  audioTxActiveBitrate?: string
  /** field 1749, wire `audio_tx_inband_fec_bitrate` */
  audioTxInbandFecBitrate?: string
  /** field 1750, wire `audio_tx_nonactive_bitrate` */
  audioTxNonactiveBitrate?: string
  /** field 1751, wire `audio_tx_pkt_count` */
  audioTxPktCount?: string
  /** field 1752, wire `dynamic_transport_first_switch_t` */
  dynamicTransportFirstSwitchT?: number
  /** field 1753, wire `dynamic_transport_switch_cnt` */
  dynamicTransportSwitchCnt?: number
  /** field 1754, wire `server_prefer_relay` */
  serverPreferRelay?: boolean
  /** field 1755, wire `app_exit_reason` */
  appExitReason?: APPEXITREASON
  /** field 1756, wire `dec1280w_freeze_t` */
  dec1280wFreezeT?: string
  /** field 1757, wire `dec1280w_pause_t` */
  dec1280wPauseT?: string
  /** field 1758, wire `dec160w_freeze_t` */
  dec160wFreezeT?: string
  /** field 1759, wire `dec160w_pause_t` */
  dec160wPauseT?: string
  /** field 1760, wire `dec240w_freeze_t` */
  dec240wFreezeT?: string
  /** field 1761, wire `dec240w_pause_t` */
  dec240wPauseT?: string
  /** field 1762, wire `dec320w_freeze_t` */
  dec320wFreezeT?: string
  /** field 1763, wire `dec320w_pause_t` */
  dec320wPauseT?: string
  /** field 1764, wire `dec480w_freeze_t` */
  dec480wFreezeT?: string
  /** field 1765, wire `dec480w_pause_t` */
  dec480wPauseT?: string
  /** field 1766, wire `dec640w_freeze_t` */
  dec640wFreezeT?: string
  /** field 1767, wire `dec640w_pause_t` */
  dec640wPauseT?: string
  /** field 1768, wire `dec960w_freeze_t` */
  dec960wFreezeT?: string
  /** field 1769, wire `dec960w_pause_t` */
  dec960wPauseT?: string
  /** field 1770, wire `ios_hw_ltr_ack_miss` */
  iosHwLtrAckMiss?: number
  /** field 1771, wire `ltr_acks_acked` */
  ltrAcksAcked?: number
  /** field 1772, wire `ltr_acks_received` */
  ltrAcksReceived?: number
  /** field 1773, wire `ltr_frame_count` */
  ltrFrameCount?: number
  /** field 1774, wire `is_phash_mismatch` */
  isPhashMismatch?: boolean
  /** field 1775, wire `sfu_downlink_max_combined_bwe` */
  sfuDownlinkMaxCombinedBwe?: string
  /** field 1776, wire `sfu_uplink_max_combined_bwe` */
  sfuUplinkMaxCombinedBwe?: string
  /** field 1777, wire `uwp_camera_last_device_hresult_error` */
  uwpCameraLastDeviceHresultError?: number
  /** field 1778, wire `uwp_camera_mediacapture_time` */
  uwpCameraMediacaptureTime?: string
  /** field 1779, wire `elected_relay_idx` */
  electedRelayIdx?: number
  /** field 1780, wire `signaling_reflexive_ip_peer` */
  signalingReflexiveIpPeer?: string
  /** field 1781, wire `signaling_reflexive_ip_self` */
  signalingReflexiveIpSelf?: string
  /** field 1782, wire `audio_codec_decoded_fec_bytes` */
  audioCodecDecodedFecBytes?: string
  /** field 1783, wire `audio_codec_decoded_normal_bytes` */
  audioCodecDecodedNormalBytes?: string
  /** field 1784, wire `sfu_downlink_init_sender_bwe` */
  sfuDownlinkInitSenderBwe?: string
  /** field 1785, wire `sfu_uplink_init_sender_bwe` */
  sfuUplinkInitSenderBwe?: string
  /** field 1786, wire `plc_avg_pred_prob` */
  plcAvgPredProb?: number
  /** field 1787, wire `plc_avg_random_prediction_length` */
  plcAvgRandomPredictionLength?: number
  /** field 1788, wire `plc_num_bursty_predictions` */
  plcNumBurstyPredictions?: number
  /** field 1789, wire `plc_num_random_predictions` */
  plcNumRandomPredictions?: number
  /** field 1790, wire `plc_num_skipped_predictions` */
  plcNumSkippedPredictions?: number
  /** field 1791, wire `udst_avg_pred_prob` */
  udstAvgPredProb?: number
  /** field 1792, wire `udst_mcp_avg_end_bitrate` */
  udstMcpAvgEndBitrate?: number
  /** field 1793, wire `udst_mcp_avg_start_bitrate` */
  udstMcpAvgStartBitrate?: number
  /** field 1794, wire `udst_num_predictions` */
  udstNumPredictions?: number
  /** field 1795, wire `udst_skipped_predictions` */
  udstSkippedPredictions?: number
  /** field 1796, wire `non_udst_num_predictions` */
  nonUdstNumPredictions?: number
  /** field 1797, wire `video_target_bitrate_reaches100kbps_t` */
  videoTargetBitrateReaches100kbpsT?: string
  /** field 1798, wire `video_target_bitrate_reaches300kbps_t` */
  videoTargetBitrateReaches300kbpsT?: string
  /** field 1799, wire `ave_time_bw_aud_rc_dyn_cond_true` */
  aveTimeBwAudRcDynCondTrue?: string
  /** field 1800, wire `num_aud_rc_dyn_cond_true` */
  numAudRcDynCondTrue?: number
  /** field 1801, wire `time_aud_rc_dyn_cond_true` */
  timeAudRcDynCondTrue?: string
  /** field 1802, wire `aud_share_avg_loudness_mic` */
  audShareAvgLoudnessMic?: string
  /** field 1803, wire `aud_share_avg_loudness_mixed` */
  audShareAvgLoudnessMixed?: string
  /** field 1804, wire `aud_share_avg_loudness_system` */
  audShareAvgLoudnessSystem?: string
  /** field 1805, wire `aud_share_echo_confidence` */
  audShareEchoConfidence?: number
  /** field 1806, wire `aud_share_max_ducking_proc_time` */
  audShareMaxDuckingProcTime?: string
  /** field 1807, wire `aud_share_num_input_frames` */
  audShareNumInputFrames?: number
  /** field 1808, wire `aud_share_num_mixed_frames` */
  audShareNumMixedFrames?: number
  /** field 1809, wire `aud_share_start_request_count` */
  audShareStartRequestCount?: number
  /** field 1810, wire `aud_share_start_success_count` */
  audShareStartSuccessCount?: number
  /** field 1811, wire `aud_share_stop_request_count` */
  audShareStopRequestCount?: number
  /** field 1812, wire `aud_share_stop_success_count` */
  audShareStopSuccessCount?: number
  /** field 1813, wire `audio_ducking_is_run` */
  audioDuckingIsRun?: boolean
  /** field 1814, wire `bridge_record_circular_buffer_frame_count` */
  bridgeRecordCircularBufferFrameCount?: number
  /** field 1815, wire `dynamic_bitrate_cap_fallback_times` */
  dynamicBitrateCapFallbackTimes?: number
  /** field 1816, wire `video_average_bitrate_diff_sbwa_to_client_bwa` */
  videoAverageBitrateDiffSbwaToClientBwa?: number
  /** field 1817, wire `video_average_lq_bitrate_from_sbwa` */
  videoAverageLqBitrateFromSbwa?: number
  /** field 1818, wire `video_avg_total_target_bitrate` */
  videoAvgTotalTargetBitrate?: string
  /** field 1819, wire `video_disabling_paused_duration_no_sbwa` */
  videoDisablingPausedDurationNoSbwa?: string
  /** field 1820, wire `cpu_utilization_avg` */
  cpuUtilizationAvg?: string
  /** field 1821, wire `cpu_utilization_peak` */
  cpuUtilizationPeak?: string
  /** field 1822, wire `gpu_utilization_avg` */
  gpuUtilizationAvg?: string
  /** field 1823, wire `gpu_utilization_peak` */
  gpuUtilizationPeak?: string
  /** field 1824, wire `mem_utilization_avg` */
  memUtilizationAvg?: string
  /** field 1825, wire `mem_utilization_peak` */
  memUtilizationPeak?: string
  /** field 1826, wire `uwp_system_volume_during_incoming_call` */
  uwpSystemVolumeDuringIncomingCall?: string
  /** field 1827, wire `uwp_voip_camera_last_error_device_name` */
  uwpVoipCameraLastErrorDeviceName?: string
  /** field 1828, wire `uwp_voip_camera_last_error_manufacturer_name` */
  uwpVoipCameraLastErrorManufacturerName?: string
  /** field 1829, wire `uwp_voip_camera_total_errors` */
  uwpVoipCameraTotalErrors?: number
  /** field 1830, wire `uwp_voip_init_time` */
  uwpVoipInitTime?: string
  /** field 1831, wire `uwp_voip_last_app_crash_reason` */
  uwpVoipLastAppCrashReason?: string
  /** field 1832, wire `uwp_voip_last_native_crash_reason` */
  uwpVoipLastNativeCrashReason?: string
  /** field 1833, wire `uwp_voip_mic_last_error_device_name` */
  uwpVoipMicLastErrorDeviceName?: string
  /** field 1834, wire `uwp_voip_mic_last_error_manufacturer_name` */
  uwpVoipMicLastErrorManufacturerName?: string
  /** field 1835, wire `uwp_voip_mic_total_errors` */
  uwpVoipMicTotalErrors?: number
  /** field 1836, wire `uwp_voip_num_anr_events` */
  uwpVoipNumAnrEvents?: number
  /** field 1837, wire `uwp_voip_num_critical_events` */
  uwpVoipNumCriticalEvents?: number
  /** field 1838, wire `uwp_voip_num_unhandled_exception_events` */
  uwpVoipNumUnhandledExceptionEvents?: number
  /** field 1839, wire `uwp_voip_total_camera_devices` */
  uwpVoipTotalCameraDevices?: number
  /** field 1840, wire `uwp_voip_total_mic_devices` */
  uwpVoipTotalMicDevices?: number
  /** field 1841, wire `uwp_voip_window_incoming_accept_to_call_layout_time` */
  uwpVoipWindowIncomingAcceptToCallLayoutTime?: string
  /** field 1842, wire `uwp_voip_window_incoming_offer_to_layout_time` */
  uwpVoipWindowIncomingOfferToLayoutTime?: string
  /** field 1843, wire `uwp_voip_window_outgoing_launch_time` */
  uwpVoipWindowOutgoingLaunchTime?: string
  /** field 1844, wire `aec_algorithm_used` */
  aecAlgorithmUsed?: number
  /** field 1845, wire `agc_algorithm_used` */
  agcAlgorithmUsed?: number
  /** field 1846, wire `ns_algorithm_used` */
  nsAlgorithmUsed?: number
  /** field 1847, wire `audio_codec_decoded_fec_bitrate` */
  audioCodecDecodedFecBitrate?: string
  /** field 1848, wire `audio_codec_decoded_normal_bitrate` */
  audioCodecDecodedNormalBitrate?: string
  /** field 1849, wire `hbh_srtp_rx_e2e_enc_cnt` */
  hbhSrtpRxE2eEncCnt?: number
  /** field 1850, wire `hbh_srtp_rx_e2e_enc_err_cnt` */
  hbhSrtpRxE2eEncErrCnt?: number
  /** field 1851, wire `hbh_srtp_tx_pkt_error_cnt` */
  hbhSrtpTxPktErrorCnt?: number
  /** field 1852, wire `warp_rx_e2e_srtp` */
  warpRxE2eSrtp?: number
  /** field 1853, wire `warp_rx_hbh_srtp` */
  warpRxHbhSrtp?: number
  /** field 1854, wire `warp_rx_no_pd_attr` */
  warpRxNoPdAttr?: number
  /** field 1855, wire `warp_tx_e2e_srtp` */
  warpTxE2eSrtp?: number
  /** field 1856, wire `warp_tx_hbh_srtp` */
  warpTxHbhSrtp?: number
  /** field 1857, wire `can_trigger_video_disabling` */
  canTriggerVideoDisabling?: boolean
  /** field 1858, wire `dec_vid_stream_active_time` */
  decVidStreamActiveTime?: string
  /** field 1859, wire `enc_vid_stream_active_time` */
  encVidStreamActiveTime?: string
  /** field 1860, wire `enc_vid_stream_active_time_hq` */
  encVidStreamActiveTimeHq?: string
  /** field 1861, wire `group_call_maximized_peer_count` */
  groupCallMaximizedPeerCount?: number
  /** field 1862, wire `group_call_video_self_maximized_duration` */
  groupCallVideoSelfMaximizedDuration?: string
  /** field 1863, wire `video_capture_port_recreate_count` */
  videoCapturePortRecreateCount?: number
  /** field 1864, wire `last_min_jb_mean_wait_time` */
  lastMinJbMeanWaitTime?: string
  /** field 1865, wire `last_min_jb_plc` */
  lastMinJbPlc?: number
  /** field 1866, wire `last_min_jb_plc_cng` */
  lastMinJbPlcCng?: number
  /** field 1867, wire `transport_debug_bitmap` */
  transportDebugBitmap?: number
  /** field 1872, wire `aud_share_avg_ducking_proc_time` */
  audShareAvgDuckingProcTime?: string
  /** field 1873, wire `aud_share_ducking_proc_time500us_to1ms` */
  audShareDuckingProcTime500usTo1ms?: number
  /** field 1874, wire `aud_share_ducking_proc_time_gt1ms` */
  audShareDuckingProcTimeGt1ms?: number
  /** field 1875, wire `aud_share_ducking_proc_time_lt500us` */
  audShareDuckingProcTimeLt500us?: number
  /** field 1876, wire `sfu_downlink_dynamic_init_bwe_fallback_count` */
  sfuDownlinkDynamicInitBweFallbackCount?: number
  /** field 1877, wire `user_redial_count` */
  userRedialCount?: number
  /** field 1878, wire `audio_put_frame_overflow_count` */
  audioPutFrameOverflowCount?: number
  /** field 1879, wire `device_native_sampling_rate` */
  deviceNativeSamplingRate?: number
  /** field 1880, wire `better_p2p_conn_quality_stat` */
  betterP2pConnQualityStat?: string
  /** field 1881, wire `better_relay_conn_quality_stat` */
  betterRelayConnQualityStat?: string
  /** field 1882, wire `dual_stack_transport_enabled` */
  dualStackTransportEnabled?: boolean
  /** field 1883, wire `p2p_local_cand_af` */
  p2pLocalCandAf?: CLIENTIPVERSION
  /** field 1884, wire `p2p_remote_cand_af` */
  p2pRemoteCandAf?: CLIENTIPVERSION
  /** field 1885, wire `random_prefer_ipv6_enabled` */
  randomPreferIpv6Enabled?: boolean
  /** field 1886, wire `transport_restart_cnt` */
  transportRestartCnt?: number
  /** field 1887, wire `transport_restart_reason_bitmap` */
  transportRestartReasonBitmap?: number
  /** field 1888, wire `v4_relay_conn_quality_stat` */
  v4RelayConnQualityStat?: string
  /** field 1889, wire `v6_relay_conn_quality_stat` */
  v6RelayConnQualityStat?: string
  /** field 1890, wire `call_test_bucket_id_list` */
  callTestBucketIdList?: string
  /** field 1891, wire `connect_to_decode_t` */
  connectToDecodeT?: string
  /** field 1892, wire `prev_call_test_bucket_id_list` */
  prevCallTestBucketIdList?: string
  /** field 1893, wire `wa_calling_init_dl_bwe_reuse2p` */
  waCallingInitDlBweReuse2p?: number
  /** field 1894, wire `wa_calling_init_ul_bwe_reuse2p` */
  waCallingInitUlBweReuse2p?: number
  /** field 1895, wire `wa_calling_sfu_last2p_segment_sbwe` */
  waCallingSfuLast2pSegmentSbwe?: number
  /** field 1896, wire `wa_calling_sfu_last2p_segment_total_rx_bitrate` */
  waCallingSfuLast2pSegmentTotalRxBitrate?: number
  /** field 1897, wire `call_end_reconnecting_e2e_pingable` */
  callEndReconnectingE2ePingable?: boolean
  /** field 1898, wire `call_end_reconnecting_e2e_signaling_accessible` */
  callEndReconnectingE2eSignalingAccessible?: boolean
  /** field 1899, wire `reconnecting_with_probe_rsp_count` */
  reconnectingWithProbeRspCount?: number
  /** field 1900, wire `tcp_connected_count` */
  tcpConnectedCount?: number
  /** field 1901, wire `reconnecting_with_p2p_e2e_bind_rsp_count` */
  reconnectingWithP2pE2eBindRspCount?: number
  /** field 1902, wire `reconnecting_with_relay_e2e_bind_rsp_count` */
  reconnectingWithRelayE2eBindRspCount?: number
  /** field 1903, wire `call_on_nonoptimal_relay_ms` */
  callOnNonoptimalRelayMs?: string
  /** field 1904, wire `hbh_srtcp_rx_success_srtp_afb_batch_pkt_cnt` */
  hbhSrtcpRxSuccessSrtpAfbBatchPktCnt?: number
  /** field 1905, wire `hbh_srtcp_tx_srtp_afb_batch_pkt_cnt` */
  hbhSrtcpTxSrtpAfbBatchPktCnt?: number
  /** field 1906, wire `segment_start_to_decode_t` */
  segmentStartToDecodeT?: string
  /** field 1907, wire `hbh_srtp_rx_warp_roc_cnt` */
  hbhSrtpRxWarpRocCnt?: number
  /** field 1908, wire `relay_latency_stanzas_received_count` */
  relayLatencyStanzasReceivedCount?: number
  /** field 1909, wire `call_relay_servers` */
  callRelayServers?: string
  /** field 1910, wire `tcp_failure_status` */
  tcpFailureStatus?: string
  /** field 1911, wire `network_medium_transition_bitmap` */
  networkMediumTransitionBitmap?: number
  /** field 1912, wire `none_net_transition_duration_ms` */
  noneNetTransitionDurationMs?: string
  /** field 1913, wire `call_minimized_duration_t` */
  callMinimizedDurationT?: string
  /** field 1914, wire `incoming_call_notification_state` */
  incomingCallNotificationState?: INCOMINGCALLNOTIFICATIONSTATETYPE
  /** field 1915, wire `gc_bad_status_during_video_disabling` */
  gcBadStatusDuringVideoDisabling?: string
  /** field 1917, wire `answer_call_duration_ms` */
  answerCallDurationMs?: number
  /** field 1918, wire `start_call_duration_ms` */
  startCallDurationMs?: number
  /** field 1919, wire `call_test_bucket_name_list` */
  callTestBucketNameList?: string
  /** field 1920, wire `prev_call_test_bucket_name_list` */
  prevCallTestBucketNameList?: string
  /** field 1921, wire `is_in_sym_nat` */
  isInSymNat?: boolean
  /** field 1922, wire `peer_is_multi_device` */
  peerIsMultiDevice?: boolean
  /** field 1923, wire `sts_af_switch_cnt` */
  stsAfSwitchCnt?: number
  /** field 1924, wire `transport_max_dns_resolve_delay_ms` */
  transportMaxDnsResolveDelayMs?: string
  /** field 1925, wire `transport_max_neg_rtt_ms` */
  transportMaxNegRttMs?: string
  /** field 1928, wire `is_events_link` */
  isEventsLink?: boolean
  /** field 1929, wire `call_avg_rx_stopped_t` */
  callAvgRxStoppedT?: string
  /** field 1930, wire `call_last_rx_stopped_t` */
  callLastRxStoppedT?: string
  /** field 1931, wire `call_max_rx_stopped_t` */
  callMaxRxStoppedT?: string
  /** field 1932, wire `call_min_rx_stopped_t` */
  callMinRxStoppedT?: string
  /** field 1933, wire `loudness_output_noise_frames2650` */
  loudnessOutputNoiseFrames2650?: number
  /** field 1934, wire `loudness_output_noise_frames5175` */
  loudnessOutputNoiseFrames5175?: number
  /** field 1935, wire `loudness_output_noise_frames76100` */
  loudnessOutputNoiseFrames76100?: number
  /** field 1936, wire `loudness_output_noise_frames_gt100` */
  loudnessOutputNoiseFramesGt100?: number
  /** field 1937, wire `loudness_output_noise_frames_leq25` */
  loudnessOutputNoiseFramesLeq25?: number
  /** field 1938, wire `ar_effect_attempted_count` */
  arEffectAttemptedCount?: number
  /** field 1939, wire `ar_effect_canceled_count` */
  arEffectCanceledCount?: number
  /** field 1940, wire `ar_effect_duration_t` */
  arEffectDurationT?: string
  /** field 1941, wire `ar_effect_enabled_count` */
  arEffectEnabledCount?: number
  /** field 1942, wire `ar_effect_failed_count` */
  arEffectFailedCount?: number
  /** field 1943, wire `ar_effect_loading_t` */
  arEffectLoadingT?: string
  /** field 1944, wire `iglu_effect_attempted_count` */
  igluEffectAttemptedCount?: number
  /** field 1945, wire `iglu_effect_canceled_count` */
  igluEffectCanceledCount?: number
  /** field 1946, wire `iglu_effect_duration_t` */
  igluEffectDurationT?: string
  /** field 1947, wire `iglu_effect_enabled_count` */
  igluEffectEnabledCount?: number
  /** field 1948, wire `iglu_effect_failed_count` */
  igluEffectFailedCount?: number
  /** field 1949, wire `iglu_effect_loading_t` */
  igluEffectLoadingT?: string
  /** field 1950, wire `call_end_reconnecting_unexpected_bitmap` */
  callEndReconnectingUnexpectedBitmap?: number
  /** field 1951, wire `hscroll_interact_count` */
  hscrollInteractCount?: number
  /** field 1952, wire `unified_session_id` */
  unifiedSessionId?: string
  /** field 1953, wire `max_target_bitrate_vid_reaches1000kbps_duration` */
  maxTargetBitrateVidReaches1000kbpsDuration?: string
  /** field 1954, wire `max_target_bitrate_vid_reaches1500kbps_duration` */
  maxTargetBitrateVidReaches1500kbpsDuration?: string
  /** field 1955, wire `max_target_bitrate_vid_reaches2000kbps_duration` */
  maxTargetBitrateVidReaches2000kbpsDuration?: string
  /** field 1956, wire `max_target_bitrate_vid_reaches500kbps_duration` */
  maxTargetBitrateVidReaches500kbpsDuration?: string
  /** field 1957, wire `peer_year_class2016` */
  peerYearClass2016?: number
  /** field 1958, wire `num_hbh_fec_srtp_pkt_received` */
  numHbhFecSrtpPktReceived?: number
  /** field 1959, wire `num_hbh_fec_srtp_pkt_sent` */
  numHbhFecSrtpPktSent?: number
  /** field 1960, wire `num_media_pkt_recovered_by_hbh_fec_srtp` */
  numMediaPktRecoveredByHbhFecSrtp?: number
  /** field 1961, wire `rx_hbh_fec_srtp_bitrate_kbps` */
  rxHbhFecSrtpBitrateKbps?: number
  /** field 1962, wire `tx_hbh_fec_srtp_bitrate_kbps` */
  txHbhFecSrtpBitrateKbps?: number
  /** field 1963, wire `alloc_error_relay_failover_cnt` */
  allocErrorRelayFailoverCnt?: number
  /** field 1964, wire `call_sampled_for_probing` */
  callSampledForProbing?: boolean
  /** field 1965, wire `second_best_relay_ip` */
  secondBestRelayIp?: string
  /** field 1967, wire `google_play_services_status` */
  googlePlayServicesStatus?: GOOGLEPLAYSERVICESSTATUS
  /** field 1968, wire `ringer_mode` */
  ringerMode?: RINGERMODE
  /** field 1969, wire `downlink_sbwe_rtt_slope_congestion_count` */
  downlinkSbweRttSlopeCongestionCount?: number
  /** field 1970, wire `uplink_sbwe_rtt_slope_congestion_count` */
  uplinkSbweRttSlopeCongestionCount?: number
  /** field 1971, wire `history_ransport_selection_sock_addr_family` */
  historyRansportSelectionSockAddrFamily?: number
  /** field 1972, wire `history_transport_selection_matched_record_count` */
  historyTransportSelectionMatchedRecordCount?: number
  /** field 1973, wire `redial_after_cer` */
  redialAfterCer?: boolean
  /** field 1974, wire `reconnecting_with_e2e_bind_rsp_count` */
  reconnectingWithE2eBindRspCount?: number
  /** field 1975, wire `reconnecting_with_e2e_rsp_count` */
  reconnectingWithE2eRspCount?: number
  /** field 1976, wire `reconnecting_with_relay_pingable_count` */
  reconnectingWithRelayPingableCount?: number
  /** field 1977, wire `reconnecting_with_signaling_accessible_count` */
  reconnectingWithSignalingAccessibleCount?: number
  /** field 1978, wire `has_fbns_push_token` */
  hasFbnsPushToken?: boolean
  /** field 1979, wire `has_fcm_push_token` */
  hasFcmPushToken?: boolean
  /** field 1981, wire `sfu_downlink_rbwe_low_no_cong_cnt` */
  sfuDownlinkRbweLowNoCongCnt?: number
  /** field 1982, wire `sfu_uplink_rbwe_low_no_cong_cnt` */
  sfuUplinkRbweLowNoCongCnt?: number
  /** field 1983, wire `offer_push_provider` */
  offerPushProvider?: PUSHPROVIDER
  /** field 1984, wire `webrtc_compatible` */
  webrtcCompatible?: boolean
  /** field 1985, wire `skip_set_vid_stream_active_from_none_cnt` */
  skipSetVidStreamActiveFromNoneCnt?: number
  /** field 1986, wire `skip_set_vid_stream_active_from_pause_cnt` */
  skipSetVidStreamActiveFromPauseCnt?: number
  /** field 1987, wire `skip_vid_conn_on_create_cnt` */
  skipVidConnOnCreateCnt?: number
  /** field 1988, wire `avg_echo_confidence_before_ec` */
  avgEchoConfidenceBeforeEc?: number
  /** field 1989, wire `echo_confidence_before_ec` */
  echoConfidenceBeforeEc?: number
  /** field 1990, wire `call_trigger` */
  callTrigger?: CALLTRIGGER
  /** field 1991, wire `speaker_view_duration` */
  speakerViewDuration?: number
  /** field 1992, wire `video_rx_bitrate_dominant_speaker_in_speaker_mode` */
  videoRxBitrateDominantSpeakerInSpeakerMode?: number
  /** field 1993, wire `video_rx_bitrate_dominant_speaker_with_peer_in_speaker_mode` */
  videoRxBitrateDominantSpeakerWithPeerInSpeakerMode?: number
  /** field 1994, wire `video_rx_bitrate_non_speaker_in_speaker_mode` */
  videoRxBitrateNonSpeakerInSpeakerMode?: number
  /** field 1995, wire `video_rx_bitrate_non_speaker_with_peer_in_speaker_mode` */
  videoRxBitrateNonSpeakerWithPeerInSpeakerMode?: number
  /** field 1996, wire `transport_srtp_rtp_cb_not_attached_on_cgu` */
  transportSrtpRtpCbNotAttachedOnCgu?: number
  /** field 1997, wire `transport_srtp_rx_auth_fail_on_cgu` */
  transportSrtpRxAuthFailOnCgu?: number
  /** field 1998, wire `transport_srtp_unknown_ssrc_on_cgu` */
  transportSrtpUnknownSsrcOnCgu?: number
  /** field 1999, wire `sfu_downlink_packet_pair_avg_bitrate` */
  sfuDownlinkPacketPairAvgBitrate?: number
  /** field 2000, wire `sfu_downlink_packet_pair_reliable_ratio` */
  sfuDownlinkPacketPairReliableRatio?: string
  /** field 2001, wire `sfu_downlink_packet_pair_underestimate_ratio` */
  sfuDownlinkPacketPairUnderestimateRatio?: string
  /** field 2002, wire `sfu_uplink_packet_pair_avg_bitrate` */
  sfuUplinkPacketPairAvgBitrate?: number
  /** field 2003, wire `sfu_uplink_packet_pair_reliable_ratio` */
  sfuUplinkPacketPairReliableRatio?: string
  /** field 2004, wire `sfu_uplink_packet_pair_underestimate_ratio` */
  sfuUplinkPacketPairUnderestimateRatio?: string
  /** field 2005, wire `dropped_net_event_count` */
  droppedNetEventCount?: number
  /** field 2006, wire `peer_reconnecting_state_count` */
  peerReconnectingStateCount?: number
  /** field 2007, wire `busy_reason` */
  busyReason?: BUSYREASON
  /** field 2008, wire `num_relay_latencies_acked` */
  numRelayLatenciesAcked?: number
  /** field 2009, wire `num_relay_latencies_sent` */
  numRelayLatenciesSent?: number
  /** field 2010, wire `num_cpu_cores` */
  numCpuCores?: number
  /** field 2011, wire `total_memory_gb` */
  totalMemoryGb?: number
  /** field 2012, wire `previous_call_call_end_reconnecting_e2e_pingable` */
  previousCallCallEndReconnectingE2ePingable?: boolean
  /** field 2013, wire `previous_call_call_end_reconnecting_e2e_signaling_accessible` */
  previousCallCallEndReconnectingE2eSignalingAccessible?: boolean
  /** field 2014, wire `previous_call_call_end_reconnecting_relay_pingable` */
  previousCallCallEndReconnectingRelayPingable?: boolean
  /** field 2015, wire `previous_call_call_end_reconnecting_signaling_accessible` */
  previousCallCallEndReconnectingSignalingAccessible?: boolean
  /** field 2016, wire `previous_call_weak_wifi_switch_def_int_success` */
  previousCallWeakWifiSwitchDefIntSuccess?: number
  /** field 2017, wire `previous_call_wifi_switch_non_def_int_success` */
  previousCallWifiSwitchNonDefIntSuccess?: number
  /** field 2019, wire `transport_srtp_tx_ctx_not_found` */
  transportSrtpTxCtxNotFound?: number
  /** field 2020, wire `redial_interval_sec` */
  redialIntervalSec?: string
  /** field 2021, wire `call_result_at_app_exit` */
  callResultAtAppExit?: CALLRESULTTYPE
  /** field 2022, wire `ml_tr_model_avg_pred_len` */
  mlTrModelAvgPredLen?: string
  /** field 2024, wire `ml_tr_model_bwe_action` */
  mlTrModelBweAction?: number
  /** field 2025, wire `ml_tr_model_num_non_tr_predictions` */
  mlTrModelNumNonTrPredictions?: number
  /** field 2026, wire `ml_tr_model_num_skipped_tr_predictions` */
  mlTrModelNumSkippedTrPredictions?: number
  /** field 2027, wire `ml_tr_model_num_tr_predictions` */
  mlTrModelNumTrPredictions?: number
  /** field 2028, wire `ml_tr_model_start_bitrate` */
  mlTrModelStartBitrate?: number
  /** field 2029, wire `bwa_count_prioritize_dom_spkr_in_speaker_mode` */
  bwaCountPrioritizeDomSpkrInSpeakerMode?: number
  /** field 2030, wire `peer_speaker_view_duration_ms` */
  peerSpeakerViewDurationMs?: string
  /** field 2031, wire `device_ar_class` */
  deviceArClass?: number
  /** field 2032, wire `gc_upgrade_attempts` */
  gcUpgradeAttempts?: number
  /** field 2033, wire `gc_upgrade_offer_ack_latency_ms` */
  gcUpgradeOfferAckLatencyMs?: string
  /** field 2034, wire `gc_upgrade_offer_error_code` */
  gcUpgradeOfferErrorCode?: number
  /** field 2035, wire `gc_upgrade_offer_participant_count` */
  gcUpgradeOfferParticipantCount?: number
  /** field 2036, wire `gc_initiation_type` */
  gcInitiationType?: GCINITIATIONTYPE
  /** field 2037, wire `genai_initial_connection_latency_ms` */
  genaiInitialConnectionLatencyMs?: string
  /** field 2038, wire `ml_tr_model_avg_inference_time` */
  mlTrModelAvgInferenceTime?: string
  /** field 2039, wire `ml_tr_model_download_failure_count` */
  mlTrModelDownloadFailureCount?: number
  /** field 2040, wire `ml_tr_model_inference_failure_count` */
  mlTrModelInferenceFailureCount?: number
  /** field 2041, wire `ml_tr_model_max_inference_time` */
  mlTrModelMaxInferenceTime?: string
  /** field 2042, wire `ml_tr_model_min_inference_time` */
  mlTrModelMinInferenceTime?: string
  /** field 2043, wire `ml_tr_shim_avg_creation_time` */
  mlTrShimAvgCreationTime?: string
  /** field 2044, wire `ml_tr_shim_creation_failure_count` */
  mlTrShimCreationFailureCount?: number
  /** field 2045, wire `call_test_bucket_exposure_map` */
  callTestBucketExposureMap?: string
  /** field 2046, wire `prev_call_test_bucket_exposure_map` */
  prevCallTestBucketExposureMap?: string
  /** field 2047, wire `first_offer_push_received_since_call_initiation_ms` */
  firstOfferPushReceivedSinceCallInitiationMs?: string
  /** field 2048, wire `first_offer_push_sent_by_provider_since_call_initiation_ms` */
  firstOfferPushSentByProviderSinceCallInitiationMs?: string
  /** field 2049, wire `first_offer_push_sent_by_pushd_since_call_initiation_ms` */
  firstOfferPushSentByPushdSinceCallInitiationMs?: string
  /** field 2050, wire `transport_p2p_peer_msg_cnt` */
  transportP2pPeerMsgCnt?: number
  /** field 2051, wire `transport_rtp_zero_payload_cnt` */
  transportRtpZeroPayloadCnt?: number
  /** field 2052, wire `transport_rx_alloc_total_cnt` */
  transportRxAllocTotalCnt?: number
  /** field 2053, wire `transport_rx_relay_set_implictly_to_tx` */
  transportRxRelaySetImplictlyToTx?: boolean
  /** field 2054, wire `first_network_medium` */
  firstNetworkMedium?: number
  /** field 2055, wire `gap_recovered_by_p2p_fallback` */
  gapRecoveredByP2pFallback?: number
  /** field 2056, wire `gap_recovered_by_rebind` */
  gapRecoveredByRebind?: number
  /** field 2057, wire `gap_recovered_by_relay_failover` */
  gapRecoveredByRelayFailover?: number
  /** field 2058, wire `gap_recovered_by_weak_wifi` */
  gapRecoveredByWeakWifi?: number
  /** field 2059, wire `is_bridged_ipv6` */
  isBridgedIpv6?: boolean
  /** field 2060, wire `ui_reconnecting` */
  uiReconnecting?: number
  /** field 2061, wire `weak_net_condition_by_jitter` */
  weakNetConditionByJitter?: number
  /** field 2062, wire `weak_net_condition_by_loss_period` */
  weakNetConditionByLossPeriod?: number
  /** field 2063, wire `weak_net_condition_by_plr` */
  weakNetConditionByPlr?: number
  /** field 2064, wire `weak_none_net_condition_detected` */
  weakNoneNetConditionDetected?: number
  /** field 2066, wire `time_since_last_push_received_ms` */
  timeSinceLastPushReceivedMs?: string
  /** field 2067, wire `first_offer_push_delivered_priority` */
  firstOfferPushDeliveredPriority?: DELIVEREDPRIORITY
  /** field 2068, wire `unbound_relay_list` */
  unboundRelayList?: string
  /** field 2069, wire `call_self_v4_ip` */
  callSelfV4Ip?: string
  /** field 2070, wire `call_self_v6_ip` */
  callSelfV6Ip?: string
  /** field 2071, wire `has_working_dual_stack_p2p` */
  hasWorkingDualStackP2p?: boolean
  /** field 2072, wire `is_ipv6_behind_nat` */
  isIpv6BehindNat?: boolean
  /** field 2073, wire `server_preferred_ipv6` */
  serverPreferredIpv6?: boolean
  /** field 2074, wire `gc_rekey_master_error` */
  gcRekeyMasterError?: GCREKEYMASTERERROR
  /** field 2075, wire `is_gc_rekey_master` */
  isGcRekeyMaster?: boolean
  /** field 2076, wire `call_end_relay_binds_failed` */
  callEndRelayBindsFailed?: boolean
  /** field 2077, wire `call_result_anc` */
  callResultAnc?: number
  /** field 2078, wire `group_call_anc_fix_peer_count` */
  groupCallAncFixPeerCount?: number
  /** field 2079, wire `group_call_anc_fix_self_count` */
  groupCallAncFixSelfCount?: number
  /** field 2080, wire `genai_entry_point` */
  genaiEntryPoint?: GENAIENTRYPOINT
  /** field 2081, wire `genai_exit_point` */
  genaiExitPoint?: GENAIEXITPOINT
  /** field 2082, wire `genai_num_requests_sent` */
  genaiNumRequestsSent?: number
  /** field 2083, wire `genai_num_response_images` */
  genaiNumResponseImages?: number
  /** field 2084, wire `genai_num_response_reels` */
  genaiNumResponseReels?: number
  /** field 2085, wire `genai_num_response_search_results` */
  genaiNumResponseSearchResults?: number
  /** field 2086, wire `genai_num_responses_received` */
  genaiNumResponsesReceived?: number
  /** field 2087, wire `genai_response_full_sheet` */
  genaiResponseFullSheet?: boolean
  /** field 2088, wire `dynamic_init_bwe_fallback_count` */
  dynamicInitBweFallbackCount?: number
  /** field 2089, wire `video_render_harmonic_fps_avg` */
  videoRenderHarmonicFpsAvg?: string
  /** field 2090, wire `video_render_harmonic_fps_p5` */
  videoRenderHarmonicFpsP5?: string
  /** field 2091, wire `video_render_harmonic_fps_p50` */
  videoRenderHarmonicFpsP50?: string
  /** field 2092, wire `video_render_harmonic_fps_p95` */
  videoRenderHarmonicFpsP95?: string
  /** field 2093, wire `transport_rx_historical_relay_pkt_cnt` */
  transportRxHistoricalRelayPktCnt?: number
  /** field 2094, wire `genai_num_response_text_results` */
  genaiNumResponseTextResults?: number
  /** field 2095, wire `video_rx_rs_fec_bitrate` */
  videoRxRsFecBitrate?: string
  /** field 2096, wire `video_rx_rs_fec_pkts` */
  videoRxRsFecPkts?: number
  /** field 2097, wire `video_tx_rs_fec_bitrate` */
  videoTxRsFecBitrate?: string
  /** field 2098, wire `video_tx_rs_fec_pkts` */
  videoTxRsFecPkts?: number
  /** field 2099, wire `avg_consecutive_udst_prediction_len` */
  avgConsecutiveUdstPredictionLen?: number
  /** field 2100, wire `genai_response_latency_avg_ms` */
  genaiResponseLatencyAvgMs?: string
  /** field 2101, wire `genai_response_latency_p50_ms` */
  genaiResponseLatencyP50Ms?: string
  /** field 2102, wire `genai_response_latency_p90_ms` */
  genaiResponseLatencyP90Ms?: string
  /** field 2103, wire `one_to_one_terminate_count` */
  oneToOneTerminateCount?: number
  /** field 2104, wire `data_channel_connection_state` */
  dataChannelConnectionState?: DATACHANNELCONNECTIONSTATE
  /** field 2105, wire `data_channel_rx_bytes` */
  dataChannelRxBytes?: number
  /** field 2106, wire `data_channel_rx_bytes_dropped` */
  dataChannelRxBytesDropped?: number
  /** field 2107, wire `data_channel_rx_msgs` */
  dataChannelRxMsgs?: number
  /** field 2108, wire `data_channel_setup_t` */
  dataChannelSetupT?: string
  /** field 2109, wire `data_channel_tx_buffered_msgs` */
  dataChannelTxBufferedMsgs?: number
  /** field 2110, wire `data_channel_tx_bytes` */
  dataChannelTxBytes?: number
  /** field 2111, wire `data_channel_tx_bytes_dropped` */
  dataChannelTxBytesDropped?: number
  /** field 2112, wire `data_channel_tx_msgs` */
  dataChannelTxMsgs?: number
  /** field 2113, wire `data_channel_tx_reliable_msgs` */
  dataChannelTxReliableMsgs?: number
  /** field 2114, wire `dtls_connection_setup_t` */
  dtlsConnectionSetupT?: string
  /** field 2115, wire `dtls_rx_bytes` */
  dtlsRxBytes?: number
  /** field 2116, wire `dtls_rx_packets` */
  dtlsRxPackets?: number
  /** field 2117, wire `dtls_rx_packets_dropped` */
  dtlsRxPacketsDropped?: number
  /** field 2118, wire `dtls_tx_bytes` */
  dtlsTxBytes?: number
  /** field 2119, wire `dtls_tx_packets` */
  dtlsTxPackets?: number
  /** field 2120, wire `dtls_tx_packets_dropped` */
  dtlsTxPacketsDropped?: number
  /** field 2121, wire `sctp_connection_setup_t` */
  sctpConnectionSetupT?: string
  /** field 2122, wire `audio_dev_is_stalled` */
  audioDevIsStalled?: boolean
  /** field 2123, wire `audio_device_startup_status` */
  audioDeviceStartupStatus?: number
  /** field 2124, wire `call_has_no_audio` */
  callHasNoAudio?: boolean
  /** field 2125, wire `no_audio_duration` */
  noAudioDuration?: number
  /** field 2126, wire `hbh_srtcp_tx_warp_tf_pkt_cnt` */
  hbhSrtcpTxWarpTfPktCnt?: number
  /** field 2127, wire `ml_cong_model_avg_inference_time` */
  mlCongModelAvgInferenceTime?: string
  /** field 2128, wire `ml_cong_model_avg_pred_len` */
  mlCongModelAvgPredLen?: string
  /** field 2130, wire `ml_cong_model_download_failure_count` */
  mlCongModelDownloadFailureCount?: number
  /** field 2131, wire `ml_cong_model_inference_failure_count` */
  mlCongModelInferenceFailureCount?: number
  /** field 2132, wire `ml_cong_model_max_inference_time` */
  mlCongModelMaxInferenceTime?: string
  /** field 2133, wire `ml_cong_model_min_inference_time` */
  mlCongModelMinInferenceTime?: string
  /** field 2134, wire `ml_cong_model_num_cong_predictions` */
  mlCongModelNumCongPredictions?: number
  /** field 2135, wire `ml_cong_model_num_non_cong_predictions` */
  mlCongModelNumNonCongPredictions?: number
  /** field 2136, wire `ml_cong_model_start_bitrate` */
  mlCongModelStartBitrate?: number
  /** field 2137, wire `ml_cong_shim_avg_creation_time` */
  mlCongShimAvgCreationTime?: string
  /** field 2138, wire `ml_cong_shim_creation_failure_count` */
  mlCongShimCreationFailureCount?: number
  /** field 2139, wire `genai_voice_selection` */
  genaiVoiceSelection?: string
  /** field 2140, wire `warp_client_nack_rtx_audio` */
  warpClientNackRtxAudio?: number
  /** field 2141, wire `warp_client_nack_rtx_video` */
  warpClientNackRtxVideo?: number
  /** field 2142, wire `warp_server_nack_rtx_audio` */
  warpServerNackRtxAudio?: number
  /** field 2143, wire `warp_server_nack_rtx_video` */
  warpServerNackRtxVideo?: number
  /** field 2144, wire `lobby_entry_point` */
  lobbyEntryPoint?: LOBBYENTRYPOINTTYPE
  /** field 2145, wire `vmos_avg` */
  vmosAvg?: string
  /** field 2146, wire `vmos_p5` */
  vmosP5?: string
  /** field 2147, wire `vmos_p50` */
  vmosP50?: string
  /** field 2148, wire `vmos_p95` */
  vmosP95?: string
  /** field 2149, wire `genai_initial_transcription_latency_ms` */
  genaiInitialTranscriptionLatencyMs?: string
  /** field 2150, wire `warp_sn_error_bad_cnt` */
  warpSnErrorBadCnt?: number
  /** field 2151, wire `warp_sn_error_ooo_cnt` */
  warpSnErrorOooCnt?: number
  /** field 2152, wire `warp_sn_error_reset_cnt` */
  warpSnErrorResetCnt?: number
  /** field 2153, wire `warp_sn_rx_cnt` */
  warpSnRxCnt?: number
  /** field 2154, wire `time_dec_reach1280w` */
  timeDecReach1280w?: string
  /** field 2155, wire `time_dec_reach640w` */
  timeDecReach640w?: string
  /** field 2156, wire `time_enc_reach1280w` */
  timeEncReach1280w?: string
  /** field 2157, wire `time_enc_reach640w` */
  timeEncReach640w?: string
  /** field 2158, wire `e2ee_retry_count` */
  e2eeRetryCount?: number
  /** field 2159, wire `network_reachability_result` */
  networkReachabilityResult?: string
  /** field 2160, wire `connected_to_vpn_at_call_start` */
  connectedToVpnAtCallStart?: boolean
  /** field 2161, wire `time_dec_reach480w` */
  timeDecReach480w?: string
  /** field 2162, wire `time_enc_reach480w` */
  timeEncReach480w?: string
  /** field 2163, wire `sfu_downlink_udst_mcp_avg_start_bitrate` */
  sfuDownlinkUdstMcpAvgStartBitrate?: number
  /** field 2164, wire `sfu_downlink_udst_mcp_avg_stop_bitrate` */
  sfuDownlinkUdstMcpAvgStopBitrate?: number
  /** field 2165, wire `sfu_downlink_undershoot_trigger_mcp_count` */
  sfuDownlinkUndershootTriggerMcpCount?: number
  /** field 2166, wire `sfu_uplink_udst_mcp_avg_start_bitrate` */
  sfuUplinkUdstMcpAvgStartBitrate?: number
  /** field 2167, wire `sfu_uplink_udst_mcp_avg_stop_bitrate` */
  sfuUplinkUdstMcpAvgStopBitrate?: number
  /** field 2168, wire `sfu_uplink_undershoot_trigger_mcp_count` */
  sfuUplinkUndershootTriggerMcpCount?: number
  /** field 2169, wire `avg_rx_delay` */
  avgRxDelay?: string
  /** field 2170, wire `avg_tx_delay` */
  avgTxDelay?: string
  /** field 2171, wire `delay_reset_count` */
  delayResetCount?: number
  /** field 2172, wire `rx_delay_higher_than_rtt_count` */
  rxDelayHigherThanRttCount?: number
  /** field 2173, wire `rx_delay_negative_count` */
  rxDelayNegativeCount?: number
  /** field 2174, wire `sbwe_ceiling_delay_congestion_count` */
  sbweCeilingDelayCongestionCount?: number
  /** field 2175, wire `sbwe_ceiling_rtt_and_delay_congestion_count` */
  sbweCeilingRttAndDelayCongestionCount?: number
  /** field 2176, wire `sfu_downlink_sbwe_ceiling_delay_congestion_count` */
  sfuDownlinkSbweCeilingDelayCongestionCount?: number
  /** field 2177, wire `sfu_downlink_sbwe_ceiling_rtt_and_delay_congestion_count` */
  sfuDownlinkSbweCeilingRttAndDelayCongestionCount?: number
  /** field 2178, wire `sfu_uplink_sbwe_ceiling_delay_congestion_count` */
  sfuUplinkSbweCeilingDelayCongestionCount?: number
  /** field 2179, wire `sfu_uplink_sbwe_ceiling_rtt_and_delay_congestion_count` */
  sfuUplinkSbweCeilingRttAndDelayCongestionCount?: number
  /** field 2180, wire `call_t_dominant_speaker` */
  callTDominantSpeaker?: number
  /** field 2181, wire `time_dec480w_dominant_speaker` */
  timeDec480wDominantSpeaker?: number
  /** field 2182, wire `video_render_avg_fps_dominant_speaker` */
  videoRenderAvgFpsDominantSpeaker?: number
  /** field 2183, wire `video_render_freeze2x_t_dominant_speaker` */
  videoRenderFreeze2xTDominantSpeaker?: number
  /** field 2184, wire `video_render_freeze4x_t_dominant_speaker` */
  videoRenderFreeze4xTDominantSpeaker?: number
  /** field 2185, wire `video_render_freeze8x_t_dominant_speaker` */
  videoRenderFreeze8xTDominantSpeaker?: number
  /** field 2186, wire `video_render_freeze_t_dominant_speaker` */
  videoRenderFreezeTDominantSpeaker?: number
  /** field 2187, wire `video_rx_bitrate_dominant_speaker` */
  videoRxBitrateDominantSpeaker?: number
  /** field 2188, wire `count_in_mcp` */
  countInMcp?: number
  /** field 2189, wire `count_in_sru` */
  countInSru?: number
  /** field 2190, wire `duration_in_mcp` */
  durationInMcp?: string
  /** field 2191, wire `duration_in_sru` */
  durationInSru?: string
  /** field 2192, wire `mcp_disabled_count_clamping_pp` */
  mcpDisabledCountClampingPp?: number
  /** field 2193, wire `mcp_disabled_count_clamping_rbe` */
  mcpDisabledCountClampingRbe?: number
  /** field 2194, wire `mcp_disabled_count_congestion` */
  mcpDisabledCountCongestion?: number
  /** field 2195, wire `mcp_disabled_count_reach_mcp_stop` */
  mcpDisabledCountReachMcpStop?: number
  /** field 2196, wire `ml_disabled_count_close_to_cap` */
  mlDisabledCountCloseToCap?: number
  /** field 2197, wire `ml_disabled_count_low_bitrate` */
  mlDisabledCountLowBitrate?: number
  /** field 2198, wire `ml_disabled_count_media_undershoot` */
  mlDisabledCountMediaUndershoot?: number
  /** field 2199, wire `ml_disabled_count_recent_ramp_up` */
  mlDisabledCountRecentRampUp?: number
  /** field 2200, wire `ml_disabled_count_recent_rd` */
  mlDisabledCountRecentRd?: number
  /** field 2201, wire `ramp_up_count_in_additive` */
  rampUpCountInAdditive?: number
  /** field 2202, wire `ramp_up_count_in_fr` */
  rampUpCountInFr?: number
  /** field 2203, wire `ramp_up_count_in_mcp` */
  rampUpCountInMcp?: number
  /** field 2204, wire `ramp_up_count_in_normal` */
  rampUpCountInNormal?: number
  /** field 2205, wire `ramp_up_count_in_sru` */
  rampUpCountInSru?: number
  /** field 2206, wire `ramp_up_count_in_udst_target` */
  rampUpCountInUdstTarget?: number
  /** field 2207, wire `ramp_up_duration_in_additive` */
  rampUpDurationInAdditive?: string
  /** field 2208, wire `ramp_up_duration_in_fr` */
  rampUpDurationInFr?: string
  /** field 2209, wire `ramp_up_duration_in_mcp` */
  rampUpDurationInMcp?: string
  /** field 2210, wire `ramp_up_duration_in_normal` */
  rampUpDurationInNormal?: string
  /** field 2211, wire `ramp_up_duration_in_sru` */
  rampUpDurationInSru?: string
  /** field 2212, wire `ramp_up_duration_in_udst_target` */
  rampUpDurationInUdstTarget?: string
  /** field 2213, wire `audio_codec_decoded_fec_bitrate_dominant_speaker` */
  audioCodecDecodedFecBitrateDominantSpeaker?: string
  /** field 2214, wire `audio_codec_decoded_normal_bitrate_dominant_speaker` */
  audioCodecDecodedNormalBitrateDominantSpeaker?: string
  /** field 2215, wire `call_avg_rtt_dominant_speaker` */
  callAvgRttDominantSpeaker?: string
  /** field 2216, wire `call_rx_avg_bitrate_dominant_speaker` */
  callRxAvgBitrateDominantSpeaker?: string
  /** field 2217, wire `jb_gets_dominant_speaker` */
  jbGetsDominantSpeaker?: number
  /** field 2218, wire `jb_mean_wait_time_dominant_speaker` */
  jbMeanWaitTimeDominantSpeaker?: string
  /** field 2219, wire `jb_plc_cng_dominant_speaker` */
  jbPlcCngDominantSpeaker?: number
  /** field 2220, wire `jb_plc_dominant_speaker` */
  jbPlcDominantSpeaker?: number
  /** field 2221, wire `jb_puts_dominant_speaker` */
  jbPutsDominantSpeaker?: number
  /** field 2222, wire `enter_pip_before_inflection_point` */
  enterPipBeforeInflectionPoint?: boolean
  /** field 2223, wire `last_pp_during_pip` */
  lastPpDuringPip?: number
  /** field 2224, wire `post_pip_bitrate` */
  postPipBitrate?: number
  /** field 2225, wire `post_pip_start_bitrate` */
  postPipStartBitrate?: number
  /** field 2226, wire `pre_pip_bitrate` */
  prePipBitrate?: number
  /** field 2227, wire `time_pip_recover_to480p` */
  timePipRecoverTo480p?: string
  /** field 2228, wire `time_pip_recover_to720p` */
  timePipRecoverTo720p?: string
  /** field 2229, wire `one_pop_to_xpop_fallback_count` */
  onePopToXpopFallbackCount?: number
  /** field 2230, wire `xpop_to1pop_fallback_count` */
  xpopTo1popFallbackCount?: number
  /** field 2231, wire `dynamic_bitrate_cap_first_fallback_time_since_start` */
  dynamicBitrateCapFirstFallbackTimeSinceStart?: number
  /** field 2232, wire `dynamic_bitrate_cap_last_fallback_time_since_start` */
  dynamicBitrateCapLastFallbackTimeSinceStart?: number
  /** field 2233, wire `recent_playback_fps_diff1215` */
  recentPlaybackFpsDiff1215?: number
  /** field 2234, wire `recent_playback_fps_diff1619` */
  recentPlaybackFpsDiff1619?: number
  /** field 2235, wire `recent_playback_fps_diff47` */
  recentPlaybackFpsDiff47?: number
  /** field 2236, wire `recent_playback_fps_diff811` */
  recentPlaybackFpsDiff811?: number
  /** field 2237, wire `recent_playback_fps_diff_geq20` */
  recentPlaybackFpsDiffGeq20?: number
  /** field 2238, wire `recent_playback_fps_diff_lt4` */
  recentPlaybackFpsDiffLt4?: number
  /** field 2239, wire `recent_record_fps_diff1215` */
  recentRecordFpsDiff1215?: number
  /** field 2240, wire `recent_record_fps_diff1619` */
  recentRecordFpsDiff1619?: number
  /** field 2241, wire `recent_record_fps_diff47` */
  recentRecordFpsDiff47?: number
  /** field 2242, wire `recent_record_fps_diff811` */
  recentRecordFpsDiff811?: number
  /** field 2243, wire `recent_record_fps_diff_geq20` */
  recentRecordFpsDiffGeq20?: number
  /** field 2244, wire `recent_record_fps_diff_lt4` */
  recentRecordFpsDiffLt4?: number
  /** field 2245, wire `num_rs_hbh_fec_srtp_pkt_received` */
  numRsHbhFecSrtpPktReceived?: number
  /** field 2246, wire `num_rs_hbh_fec_srtp_pkt_sent` */
  numRsHbhFecSrtpPktSent?: number
  /** field 2247, wire `ss_receiver_bwe_before_ss` */
  ssReceiverBweBeforeSs?: number
  /** field 2248, wire `ss_receiver_plr_before_ss` */
  ssReceiverPlrBeforeSs?: string
  /** field 2249, wire `ss_sharer_bwe_before_ss` */
  ssSharerBweBeforeSs?: number
  /** field 2250, wire `ss_sharer_plr_before_ss` */
  ssSharerPlrBeforeSs?: string
  /** field 2252, wire `sfu_uplink_first_pp_bitrate` */
  sfuUplinkFirstPpBitrate?: number
  /** field 2253, wire `sfu_uplink_first_reliable_pp_time` */
  sfuUplinkFirstReliablePpTime?: number
  /** field 2254, wire `gc_previous_segment_call_result` */
  gcPreviousSegmentCallResult?: CALLRESULTTYPE
  /** field 2255, wire `sfu_uplink_first_raw_pp_bitrate` */
  sfuUplinkFirstRawPpBitrate?: number
  /** field 2256, wire `sfu_uplink_first_raw_pp_time` */
  sfuUplinkFirstRawPpTime?: number
  /** field 2257, wire `sfu_temporal_scalability_base_layer_duration` */
  sfuTemporalScalabilityBaseLayerDuration?: string
  /** field 2258, wire `sfu_temporal_scalability_base_layer_triggered` */
  sfuTemporalScalabilityBaseLayerTriggered?: number
  /** field 2259, wire `sfu_temporal_scalability_recv_base_layer_only` */
  sfuTemporalScalabilityRecvBaseLayerOnly?: boolean
  /** field 2260, wire `video_dec_error_frames_vav1` */
  videoDecErrorFramesVav1?: number
  /** field 2261, wire `video_enc_time_overshoot10_perc_vav1` */
  videoEncTimeOvershoot10PercVav1?: string
  /** field 2262, wire `video_enc_time_overshoot20_perc_vav1` */
  videoEncTimeOvershoot20PercVav1?: string
  /** field 2263, wire `video_enc_time_overshoot40_perc_vav1` */
  videoEncTimeOvershoot40PercVav1?: string
  /** field 2264, wire `video_enc_time_undershoot10_perc_vav1` */
  videoEncTimeUndershoot10PercVav1?: string
  /** field 2265, wire `video_enc_time_undershoot20_perc_vav1` */
  videoEncTimeUndershoot20PercVav1?: string
  /** field 2266, wire `video_enc_time_undershoot40_perc_vav1` */
  videoEncTimeUndershoot40PercVav1?: string
  /** field 2268, wire `audio_unit_setup_time` */
  audioUnitSetupTime?: string
  /** field 2269, wire `audio_unit_stop_time` */
  audioUnitStopTime?: string
  /** field 2270, wire `driver_init_time` */
  driverInitTime?: string
  /** field 2271, wire `system_volume_during_incoming_call` */
  systemVolumeDuringIncomingCall?: string
  /** field 2272, wire `voip_camera_last_error_device_name` */
  voipCameraLastErrorDeviceName?: string
  /** field 2273, wire `voip_camera_total_errors` */
  voipCameraTotalErrors?: number
  /** field 2274, wire `voip_init_time` */
  voipInitTime?: string
  /** field 2275, wire `voip_mic_last_error_device_name` */
  voipMicLastErrorDeviceName?: string
  /** field 2276, wire `voip_mic_total_errors` */
  voipMicTotalErrors?: number
  /** field 2277, wire `voip_total_camera_devices` */
  voipTotalCameraDevices?: number
  /** field 2278, wire `voip_total_mic_devices` */
  voipTotalMicDevices?: number
  /** field 2279, wire `voip_window_incoming_accept_to_call_layout_time` */
  voipWindowIncomingAcceptToCallLayoutTime?: string
  /** field 2280, wire `voip_window_incoming_offer_to_layout_time` */
  voipWindowIncomingOfferToLayoutTime?: string
  /** field 2281, wire `voip_window_outgoing_launch_time` */
  voipWindowOutgoingLaunchTime?: string
  /** field 2282, wire `network_event_critical_events_retained_count` */
  networkEventCriticalEventsRetainedCount?: number
  /** field 2283, wire `transport_sender_subscription_base_layer_triggered` */
  transportSenderSubscriptionBaseLayerTriggered?: number
  /** field 2284, wire `ml_hd_targeting_model_download_failure_count` */
  mlHdTargetingModelDownloadFailureCount?: number
  /** field 2285, wire `ml_hd_targeting_model_inference_failure_count` */
  mlHdTargetingModelInferenceFailureCount?: number
  /** field 2286, wire `ml_hd_targeting_model_inference_time` */
  mlHdTargetingModelInferenceTime?: string
  /** field 2288, wire `ml_hd_targeting_shim_avg_creation_time` */
  mlHdTargetingShimAvgCreationTime?: string
  /** field 2289, wire `ml_hd_targeting_shim_creation_failure_count` */
  mlHdTargetingShimCreationFailureCount?: number
  /** field 2290, wire `history_video_record_encoder_avg_qp` */
  historyVideoRecordEncoderAvgQp?: number
  /** field 2291, wire `history_video_record_encoder_latency` */
  historyVideoRecordEncoderLatency?: number
  /** field 2292, wire `history_video_record_encoder_overshoot` */
  historyVideoRecordEncoderOvershoot?: number
  /** field 2293, wire `history_video_record_encoder_undershoot` */
  historyVideoRecordEncoderUndershoot?: number
  /** field 2294, wire `history_video_record_freeze_pct` */
  historyVideoRecordFreezePct?: number
  /** field 2295, wire `history_video_record_good480p_decoding` */
  historyVideoRecordGood480pDecoding?: string
  /** field 2296, wire `history_video_record_good480p_encoding` */
  historyVideoRecordGood480pEncoding?: string
  /** field 2297, wire `history_video_record_good720p_decoding` */
  historyVideoRecordGood720pDecoding?: string
  /** field 2298, wire `history_video_record_good720p_encoding` */
  historyVideoRecordGood720pEncoding?: string
  /** field 2299, wire `history_video_record_init_downlink_bwe` */
  historyVideoRecordInitDownlinkBwe?: number
  /** field 2300, wire `history_video_record_init_uplink_bwe` */
  historyVideoRecordInitUplinkBwe?: number
  /** field 2301, wire `history_video_record_stable_max_target_bitrate` */
  historyVideoRecordStableMaxTargetBitrate?: number
  /** field 2302, wire `history_video_record_tx_pkt_loss_pct` */
  historyVideoRecordTxPktLossPct?: number
  /** field 2303, wire `avg_p2p_bind_time_ms` */
  avgP2pBindTimeMs?: string
  /** field 2304, wire `min_p2p_session_ms` */
  minP2pSessionMs?: string
  /** field 2305, wire `p2p_cand_pair_stat` */
  p2pCandPairStat?: string
  /** field 2306, wire `p2p_rtp_pkt_cnts` */
  p2pRtpPktCnts?: string
  /** field 2307, wire `relay_rtp_pkt_cnts` */
  relayRtpPktCnts?: string
  /** field 2308, wire `call_init_jb_gets` */
  callInitJbGets?: string
  /** field 2309, wire `call_init_jb_mean_wait` */
  callInitJbMeanWait?: string
  /** field 2310, wire `call_init_jb_plc` */
  callInitJbPlc?: string
  /** field 2311, wire `call_init_jb_plc_cng` */
  callInitJbPlcCng?: string
  /** field 2312, wire `call_init_reconnecting_state_count` */
  callInitReconnectingStateCount?: number
  /** field 2313, wire `call_init_video_render_avg_fps` */
  callInitVideoRenderAvgFps?: number
  /** field 2314, wire `call_peer_test_bucket_id_list` */
  callPeerTestBucketIdList?: string
  /** field 2315, wire `video_recv_psnr_avg` */
  videoRecvPsnrAvg?: string
  /** field 2316, wire `video_recv_psnr_p5` */
  videoRecvPsnrP5?: string
  /** field 2317, wire `video_recv_psnr_p50` */
  videoRecvPsnrP50?: string
  /** field 2318, wire `video_recv_psnr_p95` */
  videoRecvPsnrP95?: string
  /** field 2320, wire `ml_hd_targeting_model_hd_capable_count` */
  mlHdTargetingModelHdCapableCount?: number
  /** field 2321, wire `weak_net_condition_by_bad_call_ml` */
  weakNetConditionByBadCallMl?: number
  /** field 2322, wire `goodput_peer_downlink` */
  goodputPeerDownlink?: number
  /** field 2323, wire `history_video_record_by_self_and_peer_ip_matching` */
  historyVideoRecordBySelfAndPeerIpMatching?: boolean
  /** field 2324, wire `history_video_record_by_self_only_ip_matching` */
  historyVideoRecordBySelfOnlyIpMatching?: boolean
  /** field 2325, wire `peer_history_downlink_signal` */
  peerHistoryDownlinkSignal?: number
  /** field 2326, wire `transport_rtp_cb_not_attached_pkt_skip_cnt` */
  transportRtpCbNotAttachedPktSkipCnt?: number
  /** field 2327, wire `call_peer_test_bucket_area_exposure_map` */
  callPeerTestBucketAreaExposureMap?: string
  /** field 2328, wire `call_peer_test_bucket_list` */
  callPeerTestBucketList?: string
  /** field 2329, wire `call_test_bucket_area_exposure_map` */
  callTestBucketAreaExposureMap?: string
  /** field 2330, wire `audio_rtp_ts_jump_back_count` */
  audioRtpTsJumpBackCount?: number
  /** field 2331, wire `audio_rtp_ts_jump_back_max_ms` */
  audioRtpTsJumpBackMaxMs?: number
  /** field 2332, wire `audio_rtp_ts_jump_back_total_ms` */
  audioRtpTsJumpBackTotalMs?: number
  /** field 2333, wire `audio_rtp_ts_jump_forward_count` */
  audioRtpTsJumpForwardCount?: number
  /** field 2334, wire `audio_rtp_ts_jump_forward_max_ms` */
  audioRtpTsJumpForwardMaxMs?: number
  /** field 2335, wire `audio_rtp_ts_jump_forward_total_ms` */
  audioRtpTsJumpForwardTotalMs?: number
  /** field 2336, wire `rx_reaction_count` */
  rxReactionCount?: number
  /** field 2337, wire `rx_reaction_error_count` */
  rxReactionErrorCount?: number
  /** field 2338, wire `tx_reaction_count` */
  txReactionCount?: number
  /** field 2339, wire `tx_reaction_error_count` */
  txReactionErrorCount?: number
  /** field 2340, wire `ml_hd_targeting_model_prob_int` */
  mlHdTargetingModelProbInt?: number
  /** field 2341, wire `capi_call_id` */
  capiCallId?: string
  /** field 2342, wire `app_data_rx_rtp_error_count` */
  appDataRxRtpErrorCount?: number
  /** field 2343, wire `app_data_rx_rtp_pkt_count` */
  appDataRxRtpPktCount?: number
  /** field 2344, wire `app_data_tx_rtp_error_count` */
  appDataTxRtpErrorCount?: number
  /** field 2345, wire `app_data_tx_rtp_pkt_count` */
  appDataTxRtpPktCount?: number
  /** field 2346, wire `ml_cong_model_avg_prob_int` */
  mlCongModelAvgProbInt?: number
  /** field 2347, wire `ml_tr_model_avg_prob_int` */
  mlTrModelAvgProbInt?: number
  /** field 2348, wire `camera_on_count` */
  cameraOnCount?: number
  /** field 2349, wire `known_contact_video_upgrade_count` */
  knownContactVideoUpgradeCount?: number
  /** field 2350, wire `unknown_contact_video_upgrade_count` */
  unknownContactVideoUpgradeCount?: number
  /** field 2351, wire `view_unknown_peer_video_count` */
  viewUnknownPeerVideoCount?: number
  /** field 2352, wire `call_t_self_dominant_speaker` */
  callTSelfDominantSpeaker?: string
  /** field 2353, wire `rx_lower_hand_count` */
  rxLowerHandCount?: number
  /** field 2354, wire `rx_raise_hand_count` */
  rxRaiseHandCount?: number
  /** field 2355, wire `rx_raise_or_lower_hand_error_count` */
  rxRaiseOrLowerHandErrorCount?: number
  /** field 2356, wire `tx_lower_hand_count` */
  txLowerHandCount?: number
  /** field 2357, wire `tx_raise_hand_count` */
  txRaiseHandCount?: number
  /** field 2358, wire `tx_raise_or_lower_hand_error_count` */
  txRaiseOrLowerHandErrorCount?: number
  /** field 2359, wire `relay_measured_c2r_rtt_list` */
  relayMeasuredC2rRttList?: string
  /** field 2360, wire `relay_measured_max_peer_c2r_rtt_list` */
  relayMeasuredMaxPeerC2rRttList?: string
  /** field 2361, wire `relay_measured_num_peers_list` */
  relayMeasuredNumPeersList?: string
  /** field 2362, wire `relay_recommended_c2r_rtt_list` */
  relayRecommendedC2rRttList?: string
  /** field 2363, wire `relay_recommended_max_peer_c2r_rtt_list` */
  relayRecommendedMaxPeerC2rRttList?: string
  /** field 2364, wire `time_dec_reach960w` */
  timeDecReach960w?: string
  /** field 2365, wire `time_enc_reach960w` */
  timeEncReach960w?: string
  /** field 2366, wire `num_res_rampdowns` */
  numResRampdowns?: number
  /** field 2367, wire `peer_busy_hours` */
  peerBusyHours?: number
  /** field 2368, wire `self_busy_hours` */
  selfBusyHours?: number
  /** field 2369, wire `camera_off_call_start` */
  cameraOffCallStart?: boolean
  /** field 2370, wire `genai_connection_ready_latency` */
  genaiConnectionReadyLatency?: string
  /** field 2371, wire `is_ugc_call` */
  isUgcCall?: boolean
  /** field 2372, wire `jb_last_total_plc_ms` */
  jbLastTotalPlcMs?: number
  /** field 2373, wire `jb_total_plc1x_ms` */
  jbTotalPlc1xMs?: number
  /** field 2374, wire `jb_total_plc2x_ms` */
  jbTotalPlc2xMs?: number
  /** field 2375, wire `jb_total_plc4x_ms` */
  jbTotalPlc4xMs?: number
  /** field 2376, wire `jb_total_plc8x_ms` */
  jbTotalPlc8xMs?: number
  /** field 2377, wire `hw_dec_reach1s_count` */
  hwDecReach1sCount?: number
  /** field 2378, wire `hw_dec_reach5s_count` */
  hwDecReach5sCount?: number
  /** field 2379, wire `hw_enc_reach1s_count` */
  hwEncReach1sCount?: number
  /** field 2380, wire `hw_enc_reach5s_count` */
  hwEncReach5sCount?: number
  /** field 2381, wire `num_media_pkt_recovered_by_rs_hbh_fec` */
  numMediaPktRecoveredByRsHbhFec?: number
  /** field 2382, wire `ai_voice_backgrounding_time` */
  aiVoiceBackgroundingTime?: string
  /** field 2383, wire `ai_voice_in_app_backgrounded` */
  aiVoiceInAppBackgrounded?: boolean
  /** field 2384, wire `ai_voice_out_of_app_backgrounded` */
  aiVoiceOutOfAppBackgrounded?: boolean
  /** field 2385, wire `genai_bot_type` */
  genaiBotType?: GENAIBOTTYPE
  /** field 2386, wire `send_self_state_video_enabled_video_capture_stream_not_running` */
  sendSelfStateVideoEnabledVideoCaptureStreamNotRunning?: number
  /** field 2387, wire `send_self_state_video_enabled_video_capture_stream_null` */
  sendSelfStateVideoEnabledVideoCaptureStreamNull?: number
  /** field 2388, wire `genai_buffered_active_speech_pct` */
  genaiBufferedActiveSpeechPct?: number
  /** field 2389, wire `genai_initial_audio_buffered_ms` */
  genaiInitialAudioBufferedMs?: number
  /** field 2391, wire `vsr_input_frames` */
  vsrInputFrames?: number
  /** field 2392, wire `vsr_output_frames` */
  vsrOutputFrames?: number
  /** field 2393, wire `red_audio_bytes_decoded` */
  redAudioBytesDecoded?: string
  /** field 2394, wire `red_audio_bytes_sent` */
  redAudioBytesSent?: string
  /** field 2395, wire `red_packets_discarded` */
  redPacketsDiscarded?: number
  /** field 2396, wire `red_packets_inserted` */
  redPacketsInserted?: number
  /** field 2397, wire `red_packets_received` */
  redPacketsReceived?: number
  /** field 2398, wire `red_rtp_packets_received` */
  redRtpPacketsReceived?: number
  /** field 2399, wire `red_rtp_packets_sent` */
  redRtpPacketsSent?: number
  /** field 2400, wire `red_total_redundancy_requested` */
  redTotalRedundancyRequested?: number
  /** field 2401, wire `red_total_redundancy_sent` */
  redTotalRedundancySent?: number
  /** field 2402, wire `ev_queue_overflow_count` */
  evQueueOverflowCount?: number
  /** field 2403, wire `vsr_avg_latency_in_ms` */
  vsrAvgLatencyInMs?: string
  /** field 2406, wire `cell_id_at_end` */
  cellIdAtEnd?: number
  /** field 2407, wire `cell_id_at_start` */
  cellIdAtStart?: number
  /** field 2408, wire `cell_info_at_end` */
  cellInfoAtEnd?: string
  /** field 2409, wire `cell_info_at_start` */
  cellInfoAtStart?: string
  /** field 2410, wire `hardware_state_at_end` */
  hardwareStateAtEnd?: string
  /** field 2411, wire `hardware_state_at_start` */
  hardwareStateAtStart?: string
  /** field 2412, wire `ni_call_id` */
  niCallId?: string
  /** field 2413, wire `phone_state_at_end` */
  phoneStateAtEnd?: string
  /** field 2414, wire `phone_state_at_start` */
  phoneStateAtStart?: string
  /** field 2415, wire `uvm_cell_id` */
  uvmCellId?: string
  /** field 2416, wire `wifi_info_at_end` */
  wifiInfoAtEnd?: string
  /** field 2417, wire `wifi_info_at_start` */
  wifiInfoAtStart?: string
  /** field 2418, wire `transport_rx_warp_pkt_on_invalid_relay_addr_cnt` */
  transportRxWarpPktOnInvalidRelayAddrCnt?: number
  /** field 2419, wire `transport_srtp_rx_auth_fail` */
  transportSrtpRxAuthFail?: number
  /** field 2420, wire `xpop_pop2pop_rtt_ms` */
  xpopPop2popRttMs?: string
  /** field 2421, wire `max_target_bitrate_vid_reaches1200kbps_duration` */
  maxTargetBitrateVidReaches1200kbpsDuration?: string
  /** field 2422, wire `max_target_bitrate_vid_reaches1300kbps_duration` */
  maxTargetBitrateVidReaches1300kbpsDuration?: string
  /** field 2423, wire `peer_camera_off_call_start` */
  peerCameraOffCallStart?: boolean
  /** field 2424, wire `genai_interrupt_ducking_latency_ms` */
  genaiInterruptDuckingLatencyMs?: string
  /** field 2425, wire `genai_user_perceived_interrupt_latency_ms` */
  genaiUserPerceivedInterruptLatencyMs?: string
  /** field 2426, wire `genai_bot_early_connect_voip_latency_ms` */
  genaiBotEarlyConnectVoipLatencyMs?: string
  /** field 2427, wire `genai_ui_presented_latency_ms` */
  genaiUiPresentedLatencyMs?: string
  /** field 2428, wire `call_held` */
  callHeld?: boolean
  /** field 2429, wire `ml_bwe_used_fallback_model` */
  mlBweUsedFallbackModel?: boolean
  /** field 2430, wire `video_comb_psnr_p5` */
  videoCombPsnrP5?: string
  /** field 2431, wire `video_comb_psnr_p50` */
  videoCombPsnrP50?: string
  /** field 2432, wire `video_comb_psnr_p95` */
  videoCombPsnrP95?: string
  /** field 2433, wire `video_enc_psnr_p5` */
  videoEncPsnrP5?: string
  /** field 2434, wire `video_enc_psnr_p50` */
  videoEncPsnrP50?: string
  /** field 2435, wire `video_enc_psnr_p95` */
  videoEncPsnrP95?: string
  /** field 2436, wire `video_scal_psnr_p5` */
  videoScalPsnrP5?: string
  /** field 2437, wire `video_scal_psnr_p50` */
  videoScalPsnrP50?: string
  /** field 2438, wire `video_scal_psnr_p95` */
  videoScalPsnrP95?: string
  /** field 2440, wire `sfu_downlink_avg_consecutive_udst_prediction_len` */
  sfuDownlinkAvgConsecutiveUdstPredictionLen?: number
  /** field 2441, wire `sfu_downlink_ml_bwe_used_fallback_model` */
  sfuDownlinkMlBweUsedFallbackModel?: boolean
  /** field 2442, wire `sfu_downlink_ml_undershoot_model_avg_inference_time` */
  sfuDownlinkMlUndershootModelAvgInferenceTime?: string
  /** field 2443, wire `sfu_downlink_ml_undershoot_model_download_failure_count` */
  sfuDownlinkMlUndershootModelDownloadFailureCount?: number
  /** field 2444, wire `sfu_downlink_ml_undershoot_model_max_inference_time` */
  sfuDownlinkMlUndershootModelMaxInferenceTime?: string
  /** field 2445, wire `sfu_downlink_ml_undershoot_model_min_inference_time` */
  sfuDownlinkMlUndershootModelMinInferenceTime?: string
  /** field 2446, wire `sfu_downlink_ml_undershoot_pytorch_edge_lib_load_error_code` */
  sfuDownlinkMlUndershootPytorchEdgeLibLoadErrorCode?: SFUDOWNLINKMLUNDERSHOOTPYTORCHEDGELIBLOADERRORCODE
  /** field 2447, wire `sfu_downlink_ml_undershoot_pytorch_edge_lib_load_status` */
  sfuDownlinkMlUndershootPytorchEdgeLibLoadStatus?: SFUDOWNLINKMLUNDERSHOOTPYTORCHEDGELIBLOADSTATUS
  /** field 2448, wire `sfu_downlink_ml_undershoot_shim_avg_creation_time` */
  sfuDownlinkMlUndershootShimAvgCreationTime?: string
  /** field 2449, wire `sfu_downlink_ml_undershoot_shim_creation_failure_count` */
  sfuDownlinkMlUndershootShimCreationFailureCount?: number
  /** field 2450, wire `sfu_downlink_non_udst_num_predictions` */
  sfuDownlinkNonUdstNumPredictions?: number
  /** field 2451, wire `sfu_downlink_udst_avg_pred_prob` */
  sfuDownlinkUdstAvgPredProb?: number
  /** field 2452, wire `sfu_downlink_udst_num_predictions` */
  sfuDownlinkUdstNumPredictions?: number
  /** field 2453, wire `sfu_downlink_udst_skipped_predictions` */
  sfuDownlinkUdstSkippedPredictions?: number
  /** field 2454, wire `sfu_downlink_ml_undershoot_model_inference_failure_count` */
  sfuDownlinkMlUndershootModelInferenceFailureCount?: number
  /** field 2455, wire `ml_hd_targeting_sml_delay_ms` */
  mlHdTargetingSmlDelayMs?: string
  /** field 2456, wire `ml_hd_targeting_sml_received` */
  mlHdTargetingSmlReceived?: boolean
  /** field 2457, wire `ml_hd_targeting_sml_value` */
  mlHdTargetingSmlValue?: number
  /** field 2458, wire `call_from_reminder` */
  callFromReminder?: boolean
  /** field 2459, wire `hbh_sml_packet_count` */
  hbhSmlPacketCount?: number
  /** field 2461, wire `bwe_slr_output_bps` */
  bweSlrOutputBps?: number
  /** field 2462, wire `call_peer_is_mv_friction_eligible` */
  callPeerIsMvFrictionEligible?: boolean
  /** field 2463, wire `battery_low` */
  batteryLow?: boolean
  /** field 2464, wire `call_peer_has_badge` */
  callPeerHasBadge?: boolean
  /** field 2465, wire `vc_latency` */
  vcLatency?: string
  /** field 2466, wire `vc_latency_connection` */
  vcLatencyConnection?: string
  /** field 2467, wire `vc_latency_ui` */
  vcLatencyUi?: string
  /** field 2468, wire `time_in2x_downscale_ss` */
  timeIn2xDownscaleSs?: string
  /** field 2469, wire `time_in4x_downscale_ss` */
  timeIn4xDownscaleSs?: string
  /** field 2470, wire `time_in_no_downscale_ss` */
  timeInNoDownscaleSs?: string
  /** field 2471, wire `uaqc_num_state_transitions` */
  uaqcNumStateTransitions?: number
  /** field 2472, wire `uaqc_time_in_bw_managed_state_ms` */
  uaqcTimeInBwManagedStateMs?: string
  /** field 2473, wire `uaqc_time_in_drain_state_ms` */
  uaqcTimeInDrainStateMs?: string
  /** field 2474, wire `uaqc_time_in_high_quality_state_ms` */
  uaqcTimeInHighQualityStateMs?: string
  /** field 2475, wire `uaqc_time_in_low_state_ms` */
  uaqcTimeInLowStateMs?: string
  /** field 2476, wire `uaqc_time_in_probing_state_ms` */
  uaqcTimeInProbingStateMs?: string
  /** field 2477, wire `local_ip_prefix` */
  localIpPrefix?: string
  /** field 2478, wire `jb_plc_cng_before_first_decode` */
  jbPlcCngBeforeFirstDecode?: string
  /** field 2479, wire `jb_plc_cng_before_first_decode_include` */
  jbPlcCngBeforeFirstDecodeInclude?: boolean
  /** field 2480, wire `camera_max_retry_count` */
  cameraMaxRetryCount?: number
  /** field 2481, wire `camera_set_video_port_duration` */
  cameraSetVideoPortDuration?: string
  /** field 2482, wire `capture_device_create_duration` */
  captureDeviceCreateDuration?: string
  /** field 2483, wire `debug_metric1` */
  debugMetric1?: string
  /** field 2484, wire `debug_metric2` */
  debugMetric2?: string
  /** field 2485, wire `debug_metric3` */
  debugMetric3?: string
  /** field 2486, wire `debug_metric4` */
  debugMetric4?: string
  /** field 2487, wire `debug_metric5` */
  debugMetric5?: string
  /** field 2488, wire `calling_history_quickhd_used_bitrate` */
  callingHistoryQuickhdUsedBitrate?: number
  /** field 2489, wire `calling_history_tp_record_both_match_count` */
  callingHistoryTpRecordBothMatchCount?: number
  /** field 2490, wire `calling_history_tp_record_count` */
  callingHistoryTpRecordCount?: number
  /** field 2491, wire `calling_history_tp_record_peer_match_count` */
  callingHistoryTpRecordPeerMatchCount?: number
  /** field 2492, wire `calling_history_tp_record_self_match_count` */
  callingHistoryTpRecordSelfMatchCount?: number
  /** field 2493, wire `short_dec1280w_duration` */
  shortDec1280wDuration?: string
  /** field 2494, wire `short_dec1280w_num` */
  shortDec1280wNum?: number
  /** field 2495, wire `short_dec640w_duration` */
  shortDec640wDuration?: string
  /** field 2496, wire `short_dec640w_num` */
  shortDec640wNum?: number
  /** field 2497, wire `short_enc1280w_duration` */
  shortEnc1280wDuration?: string
  /** field 2498, wire `short_enc1280w_num` */
  shortEnc1280wNum?: number
  /** field 2499, wire `short_enc640w_duration` */
  shortEnc640wDuration?: string
  /** field 2500, wire `short_enc640w_num` */
  shortEnc640wNum?: number
  /** field 2501, wire `proxy_bitmap` */
  proxyBitmap?: number
  /** field 2502, wire `initial_auto_disabled_peer_camera_pause_t` */
  initialAutoDisabledPeerCameraPauseT?: string
  /** field 2503, wire `manually_disabled_peer_camera_pause_t` */
  manuallyDisabledPeerCameraPauseT?: string
  /** field 2504, wire `time_before_first_disabled_peer_camera_pause_t` */
  timeBeforeFirstDisabledPeerCameraPauseT?: string
  /** field 2505, wire `pinning_view_duration` */
  pinningViewDuration?: number
  /** field 2506, wire `pinning_view_peer_duration` */
  pinningViewPeerDuration?: number
  /** field 2507, wire `time_dec1280w_in_pinning_view` */
  timeDec1280wInPinningView?: string
  /** field 2508, wire `time_dec1280w_in_speaker_view` */
  timeDec1280wInSpeakerView?: string
  /** field 2509, wire `time_dec1280w_pinned_user` */
  timeDec1280wPinnedUser?: string
  /** field 2510, wire `time_dec1280w_speaker_in_speaker_view` */
  timeDec1280wSpeakerInSpeakerView?: string
  /** field 2511, wire `time_dec320w_in_pinning_view` */
  timeDec320wInPinningView?: string
  /** field 2512, wire `time_dec320w_in_speaker_view` */
  timeDec320wInSpeakerView?: string
  /** field 2513, wire `time_dec320w_pinned_user` */
  timeDec320wPinnedUser?: string
  /** field 2514, wire `time_dec320w_speaker_in_speaker_view` */
  timeDec320wSpeakerInSpeakerView?: string
  /** field 2515, wire `time_dec480w_in_pinning_view` */
  timeDec480wInPinningView?: string
  /** field 2516, wire `time_dec480w_in_speaker_view` */
  timeDec480wInSpeakerView?: string
  /** field 2517, wire `time_dec480w_pinned_user` */
  timeDec480wPinnedUser?: string
  /** field 2518, wire `time_dec480w_speaker_in_speaker_view` */
  timeDec480wSpeakerInSpeakerView?: string
  /** field 2519, wire `time_dec640w_in_pinning_view` */
  timeDec640wInPinningView?: string
  /** field 2520, wire `time_dec640w_in_speaker_view` */
  timeDec640wInSpeakerView?: string
  /** field 2521, wire `time_dec640w_pinned_user` */
  timeDec640wPinnedUser?: string
  /** field 2522, wire `time_dec640w_speaker_in_speaker_view` */
  timeDec640wSpeakerInSpeakerView?: string
  /** field 2523, wire `time_dec960w_in_pinning_view` */
  timeDec960wInPinningView?: string
  /** field 2524, wire `time_dec960w_in_speaker_view` */
  timeDec960wInSpeakerView?: string
  /** field 2525, wire `time_dec960w_pinned_user` */
  timeDec960wPinnedUser?: string
  /** field 2526, wire `time_dec960w_speaker_in_speaker_view` */
  timeDec960wSpeakerInSpeakerView?: string
  /** field 2527, wire `call_end_battery_pct` */
  callEndBatteryPct?: string
  /** field 2528, wire `call_start_battery_pct` */
  callStartBatteryPct?: string
  /** field 2529, wire `fpp1` */
  fpp1?: number
  /** field 2530, wire `fpp2` */
  fpp2?: number
  /** field 2531, wire `fpp3` */
  fpp3?: number
  /** field 2532, wire `fpp4` */
  fpp4?: number
  /** field 2533, wire `fpp5` */
  fpp5?: number
  /** field 2534, wire `fpp6` */
  fpp6?: number
  /** field 2535, wire `fpp_avg` */
  fppAvg?: string
  /** field 2536, wire `frame_length_ms` */
  frameLengthMs?: number
  /** field 2537, wire `bwa_streamline_validation_failure` */
  bwaStreamlineValidationFailure?: number
  /** field 2538, wire `call_end_thermal_state` */
  callEndThermalState?: number
  /** field 2539, wire `call_peak_thermal_state` */
  callPeakThermalState?: number
  /** field 2540, wire `call_start_thermal_state` */
  callStartThermalState?: number
  /** field 2541, wire `sfu_bwa_simulcast_capability_wait_time_ms` */
  sfuBwaSimulcastCapabilityWaitTimeMs?: string
  /** field 2544, wire `ml_hd_targeting2_model_download_failure_count` */
  mlHdTargeting2ModelDownloadFailureCount?: number
  /** field 2545, wire `ml_hd_targeting2_model_hd_capable_count` */
  mlHdTargeting2ModelHdCapableCount?: number
  /** field 2546, wire `ml_hd_targeting2_model_inference_failure_count` */
  mlHdTargeting2ModelInferenceFailureCount?: number
  /** field 2547, wire `ml_hd_targeting2_model_inference_time` */
  mlHdTargeting2ModelInferenceTime?: string
  /** field 2549, wire `ml_hd_targeting2_model_prob_int` */
  mlHdTargeting2ModelProbInt?: number
  /** field 2550, wire `ml_hd_targeting2_shim_avg_creation_time` */
  mlHdTargeting2ShimAvgCreationTime?: string
  /** field 2551, wire `ml_hd_targeting2_shim_creation_failure_count` */
  mlHdTargeting2ShimCreationFailureCount?: number
  /** field 2555, wire `num_fpp_changes` */
  numFppChanges?: number
  /** field 2556, wire `call_tx_automos_noise_avg` */
  callTxAutomosNoiseAvg?: string
  /** field 2557, wire `call_tx_automos_overall_avg` */
  callTxAutomosOverallAvg?: string
  /** field 2558, wire `call_tx_automos_speech_avg` */
  callTxAutomosSpeechAvg?: string
  /** field 2559, wire `autoeq_algorithm_used` */
  autoeqAlgorithmUsed?: number
  /** field 2560, wire `avg_cpu_time_ml_processing_ms` */
  avgCpuTimeMlProcessingMs?: string
  /** field 2561, wire `ml_ns_stopped_by_user` */
  mlNsStoppedByUser?: boolean
  /** field 2562, wire `ml_ns_stopped_high_cpu` */
  mlNsStoppedHighCpu?: boolean
  /** field 2563, wire `ml_ns_stopped_init_failure` */
  mlNsStoppedInitFailure?: boolean
  /** field 2564, wire `num10ms_frames` */
  num10msFrames?: number
  /** field 2565, wire `num10ms_ml_processed_frames` */
  num10msMlProcessedFrames?: number
  /** field 2566, wire `has_grapevine` */
  hasGrapevine?: boolean
  /** field 2567, wire `ml_offline_rl_bwe_model_avg_sbwe` */
  mlOfflineRlBweModelAvgSbwe?: number
  /** field 2568, wire `ml_offline_rl_bwe_model_avg_std` */
  mlOfflineRlBweModelAvgStd?: string
  /** field 2569, wire `ml_offline_rl_bwe_model_download_failure_count` */
  mlOfflineRlBweModelDownloadFailureCount?: number
  /** field 2570, wire `ml_offline_rl_bwe_model_inference_failure_count` */
  mlOfflineRlBweModelInferenceFailureCount?: number
  /** field 2571, wire `ml_offline_rl_bwe_model_inference_time` */
  mlOfflineRlBweModelInferenceTime?: string
  /** field 2572, wire `ml_offline_rl_bwe_shim_avg_creation_time` */
  mlOfflineRlBweShimAvgCreationTime?: string
  /** field 2573, wire `ml_offline_rl_bwe_shim_creation_failure_count` */
  mlOfflineRlBweShimCreationFailureCount?: number
  /** field 2574, wire `proxy_reason` */
  proxyReason?: string
  /** field 2575, wire `proxy_state` */
  proxyState?: number
  /** field 2576, wire `snr` */
  snr?: string
  /** field 2577, wire `call_rx_automos_noise_avg` */
  callRxAutomosNoiseAvg?: string
  /** field 2578, wire `call_rx_automos_overall_avg` */
  callRxAutomosOverallAvg?: string
  /** field 2579, wire `call_rx_automos_speech_avg` */
  callRxAutomosSpeechAvg?: string
  /** field 2580, wire `call_link_random_id` */
  callLinkRandomId?: string
  /** field 2581, wire `call_initial_echo_likelihood` */
  callInitialEchoLikelihood?: string
  /** field 2582, wire `ml_ns_asp_init_failed` */
  mlNsAspInitFailed?: boolean
  /** field 2583, wire `ml_ns_get_model_path_failed` */
  mlNsGetModelPathFailed?: boolean
  /** field 2584, wire `proxy_reason_dynamic` */
  proxyReasonDynamic?: string
  /** field 2585, wire `proxy_state_dynamic` */
  proxyStateDynamic?: number
  /** field 2586, wire `proxy_time_dynamic` */
  proxyTimeDynamic?: string
  /** field 2587, wire `video_rendered_rx_bitrate` */
  videoRenderedRxBitrate?: string
  /** field 2588, wire `dont_connect_for_paused_vid_target_sample` */
  dontConnectForPausedVidTargetSample?: boolean
  /** field 2589, wire `vid_is_paused_on_create_and_connect_func_cnt` */
  vidIsPausedOnCreateAndConnectFuncCnt?: number
  /** field 2590, wire `vid_is_paused_on_create_func_cnt` */
  vidIsPausedOnCreateFuncCnt?: number
  /** field 2591, wire `vid_port_resume_sub_cnt` */
  vidPortResumeSubCnt?: number
  /** field 2592, wire `first_assert_func` */
  firstAssertFunc?: string
  /** field 2593, wire `audio_player_init_ms` */
  audioPlayerInitMs?: number
  /** field 2594, wire `audio_player_start_ms` */
  audioPlayerStartMs?: number
  /** field 2595, wire `audio_recorder_init_ms` */
  audioRecorderInitMs?: number
  /** field 2596, wire `audio_recorder_start_ms` */
  audioRecorderStartMs?: number
  /** field 2597, wire `peer_local_ip_prefix` */
  peerLocalIpPrefix?: string
  /** field 2598, wire `enhanced_frame_brightness_avg` */
  enhancedFrameBrightnessAvg?: string
  /** field 2599, wire `frame_brightness_avg` */
  frameBrightnessAvg?: string
  /** field 2600, wire `dtmf_bytes_sent` */
  dtmfBytesSent?: number
  /** field 2601, wire `dtmf_bytes_sent_failed` */
  dtmfBytesSentFailed?: number
  /** field 2602, wire `dtmf_event_sent` */
  dtmfEventSent?: number
  /** field 2603, wire `dtmf_event_sent_failed` */
  dtmfEventSentFailed?: number
  /** field 2604, wire `freeze_disable_duration_app_background` */
  freezeDisableDurationAppBackground?: string
  /** field 2605, wire `freeze_disable_duration_app_unsubscribe` */
  freezeDisableDurationAppUnsubscribe?: string
  /** field 2606, wire `freeze_disable_duration_peer_paused` */
  freezeDisableDurationPeerPaused?: string
  /** field 2607, wire `freeze_disable_total_duration` */
  freezeDisableTotalDuration?: string
  /** field 2608, wire `brightness_enhanced_frames_pct` */
  brightnessEnhancedFramesPct?: string
  /** field 2609, wire `brightness_toggle_count` */
  brightnessToggleCount?: number
  /** field 2610, wire `fg_service_types_bitmap` */
  fgServiceTypesBitmap?: number
  /** field 2611, wire `is_app_in_background_at_call_end` */
  isAppInBackgroundAtCallEnd?: boolean
  /** field 2612, wire `is_app_in_bg_when_call_starts` */
  isAppInBgWhenCallStarts?: boolean
  /** field 2613, wire `is_call_answered_with_screen_locked` */
  isCallAnsweredWithScreenLocked?: boolean
  /** field 2614, wire `is_telecom_fallback_path` */
  isTelecomFallbackPath?: boolean
  /** field 2615, wire `audio_dup_enabled_ratio` */
  audioDupEnabledRatio?: string
  /** field 2616, wire `ml_nadl_audio_dup_enabled_ratio` */
  mlNadlAudioDupEnabledRatio?: string
  /** field 2617, wire `ml_nadl_different_result_count` */
  mlNadlDifferentResultCount?: number
  /** field 2618, wire `ml_nadl_model_download_failure_count` */
  mlNadlModelDownloadFailureCount?: number
  /** field 2619, wire `ml_nadl_model_inference_failure_count` */
  mlNadlModelInferenceFailureCount?: number
  /** field 2620, wire `ml_nadl_model_inference_time` */
  mlNadlModelInferenceTime?: string
  /** field 2621, wire `ml_nadl_shim_avg_creation_time` */
  mlNadlShimAvgCreationTime?: string
  /** field 2622, wire `ml_nadl_shim_creation_failure_count` */
  mlNadlShimCreationFailureCount?: number
  /** field 2623, wire `sml_nadl_audio_dup_enabled_ratio` */
  smlNadlAudioDupEnabledRatio?: string
  /** field 2624, wire `sml_nadl_different_result_rcvd_count` */
  smlNadlDifferentResultRcvdCount?: number
  /** field 2625, wire `sml_nadl_first_result_delay_ms` */
  smlNadlFirstResultDelayMs?: string
  /** field 2626, wire `sml_nadl_result_rcvd_count` */
  smlNadlResultRcvdCount?: number
  /** field 2627, wire `ml_hd_targeting_server_ml_enabled` */
  mlHdTargetingServerMlEnabled?: boolean
  /** field 2628, wire `audio_codec_decoded_fec_speech_bitrate` */
  audioCodecDecodedFecSpeechBitrate?: string
  /** field 2629, wire `audio_codec_decoded_normal_speech_bitrate` */
  audioCodecDecodedNormalSpeechBitrate?: string
  /** field 2630, wire `video_dec_error_frames_h265` */
  videoDecErrorFramesH265?: number
  /** field 2631, wire `max_field_stat_struct_entries` */
  maxFieldStatStructEntries?: number
  /** field 2632, wire `is_waiting_room_enabled` */
  isWaitingRoomEnabled?: boolean
  /** field 2633, wire `vmos_avg_inference_latency_ms` */
  vmosAvgInferenceLatencyMs?: string
  /** field 2634, wire `vmos_avg_load_time_in_ms` */
  vmosAvgLoadTimeInMs?: string
  /** field 2635, wire `vmos_download_failure_count` */
  vmosDownloadFailureCount?: number
  /** field 2636, wire `vmos_load_failure_count` */
  vmosLoadFailureCount?: number
  /** field 2637, wire `vsr_avg_inference_latency_ms` */
  vsrAvgInferenceLatencyMs?: string
  /** field 2638, wire `vsr_avg_load_time_in_ms` */
  vsrAvgLoadTimeInMs?: string
  /** field 2639, wire `vsr_avg_post_process_latency_ms` */
  vsrAvgPostProcessLatencyMs?: string
  /** field 2640, wire `vsr_avg_pre_process_latency_ms` */
  vsrAvgPreProcessLatencyMs?: string
  /** field 2641, wire `vsr_download_failure_count` */
  vsrDownloadFailureCount?: number
  /** field 2642, wire `vsr_load_failure_count` */
  vsrLoadFailureCount?: number
  /** field 2643, wire `is_device_switch` */
  isDeviceSwitch?: boolean
  /** field 2644, wire `video_tx_resend_limited_packets` */
  videoTxResendLimitedPackets?: number
  /** field 2645, wire `video_tx_resend_limited_packets_hq` */
  videoTxResendLimitedPacketsHq?: number
  /** field 2646, wire `hbh_srtcp_rx_success_rxsb_pkt_cnt` */
  hbhSrtcpRxSuccessRxsbPktCnt?: number
  /** field 2647, wire `default_mic_mode` */
  defaultMicMode?: number
  /** field 2648, wire `selected_mic_mode` */
  selectedMicMode?: number
  /** field 2649, wire `browser_avg_used_js_heap_size_mb` */
  browserAvgUsedJsHeapSizeMb?: number
  /** field 2650, wire `browser_cpu_pressure_critical_pct` */
  browserCpuPressureCriticalPct?: number
  /** field 2651, wire `browser_cpu_pressure_fair_pct` */
  browserCpuPressureFairPct?: number
  /** field 2652, wire `browser_cpu_pressure_nominal_pct` */
  browserCpuPressureNominalPct?: number
  /** field 2653, wire `browser_cpu_pressure_serious_pct` */
  browserCpuPressureSeriousPct?: number
  /** field 2654, wire `browser_cpu_pressure_supported` */
  browserCpuPressureSupported?: boolean
  /** field 2655, wire `browser_js_heap_size_limit_mb` */
  browserJsHeapSizeLimitMb?: number
  /** field 2656, wire `browser_memory_supported` */
  browserMemorySupported?: boolean
  /** field 2657, wire `browser_peak_used_js_heap_size_mb` */
  browserPeakUsedJsHeapSizeMb?: number
  /** field 2658, wire `browser_total_js_heap_size_mb` */
  browserTotalJsHeapSizeMb?: number
  /** field 2665, wire `last_mic_mode` */
  lastMicMode?: number
  /** field 2666, wire `num_anrs` */
  numAnrs?: number
  /** field 2667, wire `last_voip_activity` */
  lastVoipActivity?: string
  /** field 2668, wire `time_first_anr_since_call_start_sec` */
  timeFirstAnrSinceCallStartSec?: number
  /** field 2675, wire `last_voip_ui_activity` */
  lastVoipUiActivity?: string
  /** field 2676, wire `browser_battery_charging_at_end` */
  browserBatteryChargingAtEnd?: boolean
  /** field 2677, wire `browser_battery_charging_at_start` */
  browserBatteryChargingAtStart?: boolean
  /** field 2678, wire `browser_battery_charging_time_sec` */
  browserBatteryChargingTimeSec?: number
  /** field 2679, wire `browser_battery_discharging_time_sec` */
  browserBatteryDischargingTimeSec?: number
  /** field 2680, wire `browser_battery_drain_pct` */
  browserBatteryDrainPct?: number
  /** field 2681, wire `browser_battery_level_end_pct` */
  browserBatteryLevelEndPct?: number
  /** field 2682, wire `browser_battery_level_start_pct` */
  browserBatteryLevelStartPct?: number
  /** field 2683, wire `browser_battery_supported` */
  browserBatterySupported?: boolean
  /** field 2684, wire `ice_rtt_avg` */
  iceRttAvg?: string
  /** field 2685, wire `ice_rtt_max` */
  iceRttMax?: string
  /** field 2686, wire `ice_rtt_min` */
  iceRttMin?: string
  /** field 2687, wire `renderer_type` */
  rendererType?: string
  /** field 2688, wire `window_dragged` */
  windowDragged?: boolean
  /** field 2689, wire `window_resized` */
  windowResized?: boolean
  /** field 2693, wire `noise_suppression_ui_status` */
  noiseSuppressionUiStatus?: boolean
  /** field 2694, wire `num_noise_suppression_ui_status_transitions` */
  numNoiseSuppressionUiStatusTransitions?: number
  /** field 2696, wire `wzav1_version` */
  wzav1Version?: string
  /** field 2697, wire `quickhd_ml_inference_done` */
  quickhdMlInferenceDone?: boolean
  /** field 2698, wire `quickhd_ml_is_checked` */
  quickhdMlIsChecked?: boolean
  /** field 2699, wire `quickhd_ml_model_download_failure_count` */
  quickhdMlModelDownloadFailureCount?: number
  /** field 2700, wire `quickhd_ml_model_inference_failure_count` */
  quickhdMlModelInferenceFailureCount?: number
  /** field 2701, wire `quickhd_ml_model_inference_time` */
  quickhdMlModelInferenceTime?: string
  /** field 2702, wire `quickhd_ml_predicted_bitrate` */
  quickhdMlPredictedBitrate?: number
  /** field 2703, wire `quickhd_ml_shim_avg_creation_time` */
  quickhdMlShimAvgCreationTime?: string
  /** field 2704, wire `quickhd_ml_shim_creation_failure_count` */
  quickhdMlShimCreationFailureCount?: number
  /** field 2705, wire `last_voip_activity_timestamp_sec` */
  lastVoipActivityTimestampSec?: number
  /** field 2706, wire `last_voip_ui_activity_timestamp_sec` */
  lastVoipUiActivityTimestampSec?: number
  /** field 2710, wire `avg_enc_input_sample_rate` */
  avgEncInputSampleRate?: number
  /** field 2711, wire `avg_enc_internal_sample_rate` */
  avgEncInternalSampleRate?: number
  /** field 2712, wire `ml_ns_asp_init_failure_reason` */
  mlNsAspInitFailureReason?: number
  /** field 2713, wire `native_driver_frames_per_buffer` */
  nativeDriverFramesPerBuffer?: number
  /** field 2714, wire `video_render_freeze2x_t_v2` */
  videoRenderFreeze2xTV2?: string
  /** field 2715, wire `video_render_freeze4x_t_v2` */
  videoRenderFreeze4xTV2?: string
  /** field 2716, wire `video_render_freeze8x_t_v2` */
  videoRenderFreeze8xTV2?: string
  /** field 2717, wire `video_render_freeze_t_v2` */
  videoRenderFreezeTV2?: string
  /** field 2718, wire `js_halt_count` */
  jsHaltCount?: number
  /** field 2719, wire `js_halt_total_ms_t` */
  jsHaltTotalMsT?: string
  /** field 2720, wire `main_tab_hidden_ms_t` */
  mainTabHiddenMsT?: string
  /** field 2721, wire `main_tab_visible_ms_t` */
  mainTabVisibleMsT?: string
  /** field 2722, wire `pip_web_window_ms_t` */
  pipWebWindowMsT?: string
  /** field 2723, wire `popout_web_window_ms_t` */
  popoutWebWindowMsT?: string
  /** field 2724, wire `audio_codec_bitrate_cap` */
  audioCodecBitrateCap?: number
  /** field 2727, wire `audio_caller_accept_received_to_decode_t` */
  audioCallerAcceptReceivedToDecodeT?: string
  /** field 2728, wire `vsr_disable_reason` */
  vsrDisableReason?: number
  /** field 2729, wire `video_dec_no_rtcp_session_num` */
  videoDecNoRtcpSessionNum?: number
  /** field 2730, wire `video_enc_no_rtcp_session_num` */
  videoEncNoRtcpSessionNum?: number
  /** field 2731, wire `video_enc_no_rtcp_session_num_hq` */
  videoEncNoRtcpSessionNumHq?: number
  /** field 2732, wire `avg_rx_frame_length_ms` */
  avgRxFrameLengthMs?: string
  /** field 2733, wire `avg_tx_frame_length_ms` */
  avgTxFrameLengthMs?: string
  /** field 2734, wire `avg_echo_confidence_after30sec` */
  avgEchoConfidenceAfter30sec?: string
  /** field 2735, wire `avg_echo_confidence_first10sec` */
  avgEchoConfidenceFirst10sec?: string
  /** field 2736, wire `avg_echo_confidence_first20sec` */
  avgEchoConfidenceFirst20sec?: string
  /** field 2737, wire `avg_echo_confidence_first30sec` */
  avgEchoConfidenceFirst30sec?: string
  /** field 2738, wire `avg_echo_likelihood_after30sec` */
  avgEchoLikelihoodAfter30sec?: string
  /** field 2739, wire `avg_echo_likelihood_first10sec` */
  avgEchoLikelihoodFirst10sec?: string
  /** field 2740, wire `avg_echo_likelihood_first20sec` */
  avgEchoLikelihoodFirst20sec?: string
  /** field 2741, wire `avg_echo_likelihood_first30sec` */
  avgEchoLikelihoodFirst30sec?: string
  /** field 2742, wire `max_echo_confidence_after30sec` */
  maxEchoConfidenceAfter30sec?: string
  /** field 2743, wire `max_echo_likelihood_after30sec` */
  maxEchoLikelihoodAfter30sec?: string
  /** field 2744, wire `memory_available_mb` */
  memoryAvailableMb?: number
  /** field 2745, wire `uvq_avg_inference_latency_ms` */
  uvqAvgInferenceLatencyMs?: string
  /** field 2746, wire `uvq_avg_score` */
  uvqAvgScore?: string
  /** field 2747, wire `uvq_download_failure_count` */
  uvqDownloadFailureCount?: number
  /** field 2748, wire `uvq_download_success_count` */
  uvqDownloadSuccessCount?: number
  /** field 2749, wire `uvq_inference_failure_count` */
  uvqInferenceFailureCount?: number
  /** field 2750, wire `uvq_inference_success_count` */
  uvqInferenceSuccessCount?: number
  /** field 2751, wire `uvq_load_failure_count` */
  uvqLoadFailureCount?: number
  /** field 2752, wire `uvq_load_success_count` */
  uvqLoadSuccessCount?: number
  /** field 2753, wire `uvq_max_score` */
  uvqMaxScore?: string
  /** field 2754, wire `uvq_min_score` */
  uvqMinScore?: string
  /** field 2755, wire `uvq_p50_score` */
  uvqP50Score?: string
  /** field 2756, wire `uvq_p5_score` */
  uvqP5Score?: string
  /** field 2757, wire `uvq_p95_score` */
  uvqP95Score?: string
  /** field 2758, wire `dec_aspect_ratio_ss` */
  decAspectRatioSs?: string
  /** field 2759, wire `dec_ss1080p_freeze_t` */
  decSs1080pFreezeT?: string
  /** field 2760, wire `dec_ss1080p_pause_t` */
  decSs1080pPauseT?: string
  /** field 2761, wire `dec_ss1440p_freeze_t` */
  decSs1440pFreezeT?: string
  /** field 2762, wire `dec_ss1440p_pause_t` */
  decSs1440pPauseT?: string
  /** field 2763, wire `dec_ss2160p_freeze_t` */
  decSs2160pFreezeT?: string
  /** field 2764, wire `dec_ss2160p_pause_t` */
  decSs2160pPauseT?: string
  /** field 2765, wire `dec_ss320p_freeze_t` */
  decSs320pFreezeT?: string
  /** field 2766, wire `dec_ss320p_pause_t` */
  decSs320pPauseT?: string
  /** field 2767, wire `dec_ss480p_freeze_t` */
  decSs480pFreezeT?: string
  /** field 2768, wire `dec_ss480p_pause_t` */
  decSs480pPauseT?: string
  /** field 2769, wire `dec_ss720p_freeze_t` */
  decSs720pFreezeT?: string
  /** field 2770, wire `dec_ss720p_pause_t` */
  decSs720pPauseT?: string
  /** field 2771, wire `dec_ss960p_freeze_t` */
  decSs960pFreezeT?: string
  /** field 2772, wire `dec_ss960p_pause_t` */
  decSs960pPauseT?: string
  /** field 2773, wire `enc_aspect_ratio_hq_ss` */
  encAspectRatioHqSs?: string
  /** field 2774, wire `enc_aspect_ratio_ss` */
  encAspectRatioSs?: string
  /** field 2775, wire `enc_downscale_ratio_avg_hq_ss` */
  encDownscaleRatioAvgHqSs?: string
  /** field 2776, wire `enc_downscale_ratio_avg_ss` */
  encDownscaleRatioAvgSs?: string
  /** field 2777, wire `stream_duration_dec_ss` */
  streamDurationDecSs?: string
  /** field 2778, wire `stream_duration_enc_hq_ss` */
  streamDurationEncHqSs?: string
  /** field 2779, wire `stream_duration_enc_ss` */
  streamDurationEncSs?: string
  /** field 2780, wire `time_dec_reach1080p_ss` */
  timeDecReach1080pSs?: string
  /** field 2781, wire `time_dec_reach1440p_ss` */
  timeDecReach1440pSs?: string
  /** field 2782, wire `time_dec_reach2160p_ss` */
  timeDecReach2160pSs?: string
  /** field 2783, wire `time_dec_reach320p_ss` */
  timeDecReach320pSs?: string
  /** field 2784, wire `time_dec_reach480p_ss` */
  timeDecReach480pSs?: string
  /** field 2785, wire `time_dec_reach720p_ss` */
  timeDecReach720pSs?: string
  /** field 2786, wire `time_dec_reach960p_ss` */
  timeDecReach960pSs?: string
  /** field 2787, wire `time_dec_ss1080p` */
  timeDecSs1080p?: string
  /** field 2788, wire `time_dec_ss1440p` */
  timeDecSs1440p?: string
  /** field 2789, wire `time_dec_ss2160p` */
  timeDecSs2160p?: string
  /** field 2790, wire `time_dec_ss320p` */
  timeDecSs320p?: string
  /** field 2791, wire `time_dec_ss480p` */
  timeDecSs480p?: string
  /** field 2792, wire `time_dec_ss720p` */
  timeDecSs720p?: string
  /** field 2793, wire `time_dec_ss960p` */
  timeDecSs960p?: string
  /** field 2794, wire `time_enc_reach1080p_ss` */
  timeEncReach1080pSs?: string
  /** field 2795, wire `time_enc_reach1440p_ss` */
  timeEncReach1440pSs?: string
  /** field 2796, wire `time_enc_reach2160p_ss` */
  timeEncReach2160pSs?: string
  /** field 2797, wire `time_enc_reach320p_ss` */
  timeEncReach320pSs?: string
  /** field 2798, wire `time_enc_reach480p_ss` */
  timeEncReach480pSs?: string
  /** field 2799, wire `time_enc_reach720p_ss` */
  timeEncReach720pSs?: string
  /** field 2800, wire `time_enc_reach960p_ss` */
  timeEncReach960pSs?: string
  /** field 2801, wire `time_enc_ss1080p` */
  timeEncSs1080p?: string
  /** field 2802, wire `time_enc_ss1080p_hq` */
  timeEncSs1080pHq?: string
  /** field 2803, wire `time_enc_ss1440p` */
  timeEncSs1440p?: string
  /** field 2804, wire `time_enc_ss1440p_hq` */
  timeEncSs1440pHq?: string
  /** field 2805, wire `time_enc_ss2160p` */
  timeEncSs2160p?: string
  /** field 2806, wire `time_enc_ss2160p_hq` */
  timeEncSs2160pHq?: string
  /** field 2807, wire `time_enc_ss320p` */
  timeEncSs320p?: string
  /** field 2808, wire `time_enc_ss320p_hq` */
  timeEncSs320pHq?: string
  /** field 2809, wire `time_enc_ss480p` */
  timeEncSs480p?: string
  /** field 2810, wire `time_enc_ss480p_hq` */
  timeEncSs480pHq?: string
  /** field 2811, wire `time_enc_ss720p` */
  timeEncSs720p?: string
  /** field 2812, wire `time_enc_ss720p_hq` */
  timeEncSs720pHq?: string
  /** field 2813, wire `time_enc_ss960p` */
  timeEncSs960p?: string
  /** field 2814, wire `time_enc_ss960p_hq` */
  timeEncSs960pHq?: string
  /** field 2815, wire `uvq_avg_normalization_latency_ms` */
  uvqAvgNormalizationLatencyMs?: string
  /** field 2816, wire `uvq_avg_patch_extraction_latency_ms` */
  uvqAvgPatchExtractionLatencyMs?: string
  /** field 2818, wire `ai_voice_has_image_prompt` */
  aiVoiceHasImagePrompt?: boolean
  /** field 2819, wire `avg_lufs_momentary_rx` */
  avgLufsMomentaryRx?: string
  /** field 2820, wire `avg_lufs_momentary_tx` */
  avgLufsMomentaryTx?: string
  /** field 2821, wire `avg_lufs_short_term_rx` */
  avgLufsShortTermRx?: string
  /** field 2822, wire `avg_lufs_short_term_tx` */
  avgLufsShortTermTx?: string
  /** field 2823, wire `video_render_init_freeze16s_t_v2` */
  videoRenderInitFreeze16sTV2?: string
  /** field 2824, wire `video_render_init_freeze2s_t_v2` */
  videoRenderInitFreeze2sTV2?: string
  /** field 2825, wire `video_render_init_freeze4s_t_v2` */
  videoRenderInitFreeze4sTV2?: string
  /** field 2826, wire `video_render_init_freeze8s_t_v2` */
  videoRenderInitFreeze8sTV2?: string
  /** field 2827, wire `video_render_init_freeze_t_v2` */
  videoRenderInitFreezeTV2?: string
  /** field 2828, wire `accept_processing_ms` */
  acceptProcessingMs?: string
  /** field 2829, wire `accept_to_relay_delta_ms` */
  acceptToRelayDeltaMs?: string
  /** field 2830, wire `genai_activity_create_to_first_draw_ms` */
  genaiActivityCreateToFirstDrawMs?: string
  /** field 2831, wire `genai_native_pre_offer_latency_ms` */
  genaiNativePreOfferLatencyMs?: string
  /** field 2832, wire `genai_platform_to_native_crossing_ms` */
  genaiPlatformToNativeCrossingMs?: string
  /** field 2833, wire `genai_pre_native_platform_latency_ms` */
  genaiPreNativePlatformLatencyMs?: string
  /** field 2834, wire `genai_ui_animation_duration_ms` */
  genaiUiAnimationDurationMs?: string
  /** field 2835, wire `genai_voip_to_ui_listening_ms` */
  genaiVoipToUiListeningMs?: string
  /** field 2836, wire `vsr_download_success` */
  vsrDownloadSuccess?: boolean
  /** field 2837, wire `vsr_load_success` */
  vsrLoadSuccess?: boolean
  /** field 2838, wire `web_av_sync_avg_delta_ms` */
  webAvSyncAvgDeltaMs?: string
  /** field 2839, wire `web_av_sync_calibration_count` */
  webAvSyncCalibrationCount?: number
  /** field 2840, wire `web_av_sync_device_change_reset_count` */
  webAvSyncDeviceChangeResetCount?: number
  /** field 2841, wire `web_av_sync_enabled` */
  webAvSyncEnabled?: boolean
  /** field 2842, wire `web_av_sync_force_recalibration_count` */
  webAvSyncForceRecalibrationCount?: number
  /** field 2843, wire `web_av_sync_frames_evicted_total` */
  webAvSyncFramesEvictedTotal?: number
  /** field 2844, wire `web_av_sync_frames_held_total` */
  webAvSyncFramesHeldTotal?: number
  /** field 2845, wire `web_av_sync_frames_rendered_in_sync` */
  webAvSyncFramesRenderedInSync?: number
  /** field 2846, wire `web_av_sync_frames_rendered_late` */
  webAvSyncFramesRenderedLate?: number
  /** field 2847, wire `web_av_sync_max_abs_delta_ms` */
  webAvSyncMaxAbsDeltaMs?: string
  /** field 2848, wire `web_av_sync_max_queue_depth` */
  webAvSyncMaxQueueDepth?: number
  /** field 2849, wire `web_av_sync_p50_delta_ms` */
  webAvSyncP50DeltaMs?: string
  /** field 2850, wire `web_av_sync_p95_delta_ms` */
  webAvSyncP95DeltaMs?: string
  /** field 2851, wire `web_av_sync_recalibration_count` */
  webAvSyncRecalibrationCount?: number
  /** field 2852, wire `web_av_sync_time_out_of_sync_ms` */
  webAvSyncTimeOutOfSyncMs?: number
  /** field 2853, wire `peer_noise_suppression_ui_status` */
  peerNoiseSuppressionUiStatus?: boolean
  /** field 2854, wire `call_accept_rcvd` */
  callAcceptRcvd?: boolean
  /** field 2855, wire `call_accept_sent` */
  callAcceptSent?: boolean
  /** field 2856, wire `last_min_video_render_freeze2x_t_v2` */
  lastMinVideoRenderFreeze2xTV2?: string
  /** field 2857, wire `last_min_video_render_freeze4x_t_v2` */
  lastMinVideoRenderFreeze4xTV2?: string
  /** field 2858, wire `last_min_video_render_freeze8x_t_v2` */
  lastMinVideoRenderFreeze8xTV2?: string
  /** field 2859, wire `last_min_video_render_freeze_t_v2` */
  lastMinVideoRenderFreezeTV2?: string
  /** field 2860, wire `video_render_freeze2x_t_dominant_speaker_v2` */
  videoRenderFreeze2xTDominantSpeakerV2?: string
  /** field 2861, wire `video_render_freeze4x_t_dominant_speaker_v2` */
  videoRenderFreeze4xTDominantSpeakerV2?: string
  /** field 2862, wire `video_render_freeze8x_t_dominant_speaker_v2` */
  videoRenderFreeze8xTDominantSpeakerV2?: string
  /** field 2863, wire `video_render_freeze_t_dominant_speaker_v2` */
  videoRenderFreezeTDominantSpeakerV2?: string
  /** field 2864, wire `ml_offline_rl_bwe_action_fallback_count` */
  mlOfflineRlBweActionFallbackCount?: number
  /** field 2865, wire `ml_offline_rl_bwe_action_pass_count` */
  mlOfflineRlBweActionPassCount?: number
  /** field 2866, wire `ml_offline_rl_bwe_check_not_ready_count` */
  mlOfflineRlBweCheckNotReadyCount?: number
  /** field 2867, wire `ml_offline_rl_bwe_check_range_count` */
  mlOfflineRlBweCheckRangeCount?: number
  /** field 2868, wire `ml_offline_rl_bwe_check_roc_count` */
  mlOfflineRlBweCheckRocCount?: number
  /** field 2869, wire `ml_offline_rl_bwe_check_tfrc_div_count` */
  mlOfflineRlBweCheckTfrcDivCount?: number
  /** field 2870, wire `ml_offline_rl_bwe_check_variance_count` */
  mlOfflineRlBweCheckVarianceCount?: number
  /** field 2871, wire `ml_offline_rl_bwe_total_checks` */
  mlOfflineRlBweTotalChecks?: number
  /** field 2872, wire `ml_offline_rl_bwe_usage_pct` */
  mlOfflineRlBweUsagePct?: string
  /** field 2873, wire `is_lgc_add` */
  isLgcAdd?: boolean
  /** field 2874, wire `video_webcodecs_dec_fatal_error_num` */
  videoWebcodecsDecFatalErrorNum?: number
  /** field 2875, wire `automos_receiver_model_download_failure_count` */
  automosReceiverModelDownloadFailureCount?: number
  /** field 2876, wire `automos_sender_model_download_failure_count` */
  automosSenderModelDownloadFailureCount?: number
  /** field 2877, wire `calling_history_uaqc_record_applied_bitrate_bps` */
  callingHistoryUaqcRecordAppliedBitrateBps?: number
  /** field 2878, wire `calling_history_uaqc_record_bitrate_bps` */
  callingHistoryUaqcRecordBitrateBps?: number
  /** field 2879, wire `calling_history_uaqc_record_both_match_count` */
  callingHistoryUaqcRecordBothMatchCount?: number
  /** field 2880, wire `calling_history_uaqc_record_count` */
  callingHistoryUaqcRecordCount?: number
  /** field 2881, wire `calling_history_uaqc_record_filtered_count` */
  callingHistoryUaqcRecordFilteredCount?: number
  /** field 2882, wire `calling_history_uaqc_record_peer_match_count` */
  callingHistoryUaqcRecordPeerMatchCount?: number
  /** field 2883, wire `calling_history_uaqc_record_plr_pct` */
  callingHistoryUaqcRecordPlrPct?: number
  /** field 2884, wire `calling_history_uaqc_record_remb_bps` */
  callingHistoryUaqcRecordRembBps?: number
  /** field 2885, wire `calling_history_uaqc_record_rtt_ms` */
  callingHistoryUaqcRecordRttMs?: number
  /** field 2886, wire `calling_history_uaqc_record_self_match_count` */
  callingHistoryUaqcRecordSelfMatchCount?: number
  /** field 2887, wire `web_audio_ctx_base_latency_ms` */
  webAudioCtxBaseLatencyMs?: string
  /** field 2888, wire `web_audio_ctx_output_latency_avg_ms` */
  webAudioCtxOutputLatencyAvgMs?: string
  /** field 2889, wire `web_audio_ctx_output_latency_max_ms` */
  webAudioCtxOutputLatencyMaxMs?: string
  /** field 2890, wire `web_audio_platform_delay_ms` */
  webAudioPlatformDelayMs?: string
  /** field 2891, wire `web_audio_rb_delay_avg_ms` */
  webAudioRbDelayAvgMs?: string
  /** field 2892, wire `web_audio_rb_delay_max_ms` */
  webAudioRbDelayMaxMs?: string
  /** field 2893, wire `web_audio_rb_fill_max_pct` */
  webAudioRbFillMaxPct?: number
  /** field 2894, wire `web_audio_underrun_total` */
  webAudioUnderrunTotal?: number
  /** field 2895, wire `web_sctp_ba_peak_avg_bytes` */
  webSctpBaPeakAvgBytes?: string
  /** field 2896, wire `web_sctp_ba_peak_max_bytes` */
  webSctpBaPeakMaxBytes?: string
  /** field 2897, wire `web_sctp_ba_tail_avg_bytes` */
  webSctpBaTailAvgBytes?: string
  /** field 2898, wire `web_sctp_ba_tail_max_bytes` */
  webSctpBaTailMaxBytes?: string
  /** field 2899, wire `peer_render_failure_reason` */
  peerRenderFailureReason?: number
  /** field 2900, wire `web_transport_used` */
  webTransportUsed?: boolean
  /** field 2901, wire `genai_group_call_bot_join_latency` */
  genaiGroupCallBotJoinLatency?: string
  /** field 2902, wire `genai_is_group_call` */
  genaiIsGroupCall?: boolean
  /** field 2903, wire `web_audio_capture_overrun_count` */
  webAudioCaptureOverrunCount?: number
  /** field 2904, wire `web_audio_capture_sab_fill_avg_ms` */
  webAudioCaptureSabFillAvgMs?: string
  /** field 2905, wire `web_audio_capture_sab_fill_max_ms` */
  webAudioCaptureSabFillMaxMs?: string
  /** field 2906, wire `web_audio_capture_startup_seed_ms` */
  webAudioCaptureStartupSeedMs?: string
  /** field 2907, wire `web_video_capture_capture_to_encoded_avg_ms` */
  webVideoCaptureCaptureToEncodedAvgMs?: string
  /** field 2908, wire `web_video_capture_present_to_construct_avg_ms` */
  webVideoCapturePresentToConstructAvgMs?: string
  /** field 2909, wire `genai_bot_speech_duration_avg_ms` */
  genaiBotSpeechDurationAvgMs?: string
  /** field 2910, wire `genai_bot_speech_duration_p90_ms` */
  genaiBotSpeechDurationP90Ms?: string
  /** field 2911, wire `genai_bot_speech_duration_total_ms` */
  genaiBotSpeechDurationTotalMs?: string
  /** field 2912, wire `genai_num_user_interrupts` */
  genaiNumUserInterrupts?: number
  /** field 2913, wire `genai_group_call_bot_invite_failures` */
  genaiGroupCallBotInviteFailures?: number
  /** field 2914, wire `genai_group_call_bot_inviter` */
  genaiGroupCallBotInviter?: boolean
  /** field 2915, wire `genai_group_call_bot_remove_failures` */
  genaiGroupCallBotRemoveFailures?: number
  /** field 2916, wire `genai_group_call_bot_remover` */
  genaiGroupCallBotRemover?: boolean
  /** field 2917, wire `video_nack_rtp_retransmit_retry_count` */
  videoNackRtpRetransmitRetryCount?: number
  /** field 2923, wire `dnd_ring_path` */
  dndRingPath?: DNDRINGPATHTYPE
  /** field 2925, wire `video_avg_comb_psnr_ss` */
  videoAvgCombPsnrSs?: string
  /** field 2926, wire `video_avg_encoding_psnr_ss` */
  videoAvgEncodingPsnrSs?: string
  /** field 2927, wire `video_avg_scaling_psnr_ss` */
  videoAvgScalingPsnrSs?: string
  /** field 2928, wire `rbe_cap` */
  rbeCap?: number
  /** field 2929, wire `rbe_cap_update_count` */
  rbeCapUpdateCount?: number
  /** field 2930, wire `rbe_cap_update_max` */
  rbeCapUpdateMax?: number
  /** field 2931, wire `rbe_cap_update_min` */
  rbeCapUpdateMin?: number
  /** field 2932, wire `rbe_get_index_from_platform_and_network_count` */
  rbeGetIndexFromPlatformAndNetworkCount?: number
  /** field 2933, wire `rbe_get_index_from_platform_and_network_success` */
  rbeGetIndexFromPlatformAndNetworkSuccess?: number
  /** field 2934, wire `rbe_get_max_target_bitrate_count` */
  rbeGetMaxTargetBitrateCount?: number
  /** field 2935, wire `rbe_get_max_target_bitrate_use_rbe_count` */
  rbeGetMaxTargetBitrateUseRbeCount?: number
  /** field 2936, wire `rbe_init_count` */
  rbeInitCount?: number
  /** field 2937, wire `rbe_init_done` */
  rbeInitDone?: number
  /** field 2938, wire `rbe_init_success` */
  rbeInitSuccess?: number
  /** field 2939, wire `rbe_init_vector_done` */
  rbeInitVectorDone?: number
  /** field 2940, wire `rbe_init_vector_success` */
  rbeInitVectorSuccess?: number
  /** field 2941, wire `rbe_instant_ramp_up_count` */
  rbeInstantRampUpCount?: number
  /** field 2942, wire `rbe_instant_ramp_up_success` */
  rbeInstantRampUpSuccess?: number
  /** field 2943, wire `rbe_instant_ramp_up_value` */
  rbeInstantRampUpValue?: number
  /** field 2944, wire `rbe_peer_network_medium` */
  rbePeerNetworkMedium?: number
  /** field 2945, wire `rbe_peer_platform_id` */
  rbePeerPlatformId?: number
  /** field 2946, wire `rbe_self_network_medium` */
  rbeSelfNetworkMedium?: number
  /** field 2947, wire `rbe_self_platform_id` */
  rbeSelfPlatformId?: number
  /** field 2948, wire `rbe_should_fallback_to_vid_dyn` */
  rbeShouldFallbackToVidDyn?: boolean
  /** field 2949, wire `rbe_should_fallback_to_vid_dyn_flip_count` */
  rbeShouldFallbackToVidDynFlipCount?: number
  /** field 2950, wire `rbe_targeting_history_count` */
  rbeTargetingHistoryCount?: number
  /** field 2951, wire `rbe_targeting_history_done` */
  rbeTargetingHistoryDone?: number
  /** field 2952, wire `rbe_targeting_history_success` */
  rbeTargetingHistorySuccess?: number
  /** field 2953, wire `rbe_targeting_history_value` */
  rbeTargetingHistoryValue?: number
  /** field 2954, wire `rbe_targeting_ml_count` */
  rbeTargetingMlCount?: number
  /** field 2955, wire `rbe_targeting_ml_success` */
  rbeTargetingMlSuccess?: number
  /** field 2956, wire `rbe_targeting_ml_value` */
  rbeTargetingMlValue?: number
  /** field 2957, wire `rbe_targeting_pp_count` */
  rbeTargetingPpCount?: number
  /** field 2958, wire `rbe_targeting_pp_hi_count` */
  rbeTargetingPpHiCount?: number
  /** field 2959, wire `rbe_targeting_pp_lo_count` */
  rbeTargetingPpLoCount?: number
  /** field 2960, wire `rbe_targeting_pp_success` */
  rbeTargetingPpSuccess?: number
  /** field 2961, wire `rbe_targeting_pp_value_last` */
  rbeTargetingPpValueLast?: number
  /** field 2962, wire `rbe_targeting_pp_value_max` */
  rbeTargetingPpValueMax?: number
  /** field 2963, wire `rbe_targeting_pp_value_min` */
  rbeTargetingPpValueMin?: number
  /** field 2964, wire `rbe_update_bitmap` */
  rbeUpdateBitmap?: number
  /** field 2965, wire `rbe_vid_dyn_cond_count` */
  rbeVidDynCondCount?: number
  /** field 2966, wire `rbe_vid_dyn_count` */
  rbeVidDynCount?: number
  /** field 2967, wire `rbe_vid_dyn_hd_dyn_max_target_bitrate_count` */
  rbeVidDynHdDynMaxTargetBitrateCount?: number
  /** field 2968, wire `rbe_vid_dyn_max_target_bitrate_count` */
  rbeVidDynMaxTargetBitrateCount?: number
  /** field 2969, wire `rbe_vid_dyn_max_target_bitrate_invoke_count` */
  rbeVidDynMaxTargetBitrateInvokeCount?: number
  /** field 2970, wire `rbe_vid_dyn_max_target_bitrate_overwrite_count` */
  rbeVidDynMaxTargetBitrateOverwriteCount?: number
  /** field 2971, wire `call_eligible_bucket_id_list` */
  callEligibleBucketIdList?: string
  /** field 2972, wire `video_edge_avg` */
  videoEdgeAvg?: number
  /** field 2973, wire `video_motion_avg` */
  videoMotionAvg?: number
  /** field 2974, wire `video_motion_p5` */
  videoMotionP5?: number
  /** field 2975, wire `video_motion_p95` */
  videoMotionP95?: number
  /** field 2976, wire `audio_tx_crest_factor_avg` */
  audioTxCrestFactorAvg?: string
  /** field 2977, wire `audio_tx_crest_factor_p5` */
  audioTxCrestFactorP5?: string
  /** field 2978, wire `audio_tx_crest_factor_p50` */
  audioTxCrestFactorP50?: string
  /** field 2979, wire `audio_tx_crest_factor_p95` */
  audioTxCrestFactorP95?: string
  /** field 2980, wire `audio_tx_sii_snr_avg` */
  audioTxSiiSnrAvg?: string
  /** field 2981, wire `audio_tx_sii_snr_p5` */
  audioTxSiiSnrP5?: string
  /** field 2982, wire `audio_tx_sii_snr_p50` */
  audioTxSiiSnrP50?: string
  /** field 2983, wire `audio_tx_sii_snr_p95` */
  audioTxSiiSnrP95?: string
  /** field 2984, wire `audio_tx_spectral_centroid_avg` */
  audioTxSpectralCentroidAvg?: string
  /** field 2985, wire `audio_tx_spectral_centroid_p5` */
  audioTxSpectralCentroidP5?: string
  /** field 2986, wire `audio_tx_spectral_centroid_p50` */
  audioTxSpectralCentroidP50?: string
  /** field 2987, wire `audio_tx_spectral_centroid_p95` */
  audioTxSpectralCentroidP95?: string
  /** field 2988, wire `audio_tx_spectral_flatness_avg` */
  audioTxSpectralFlatnessAvg?: string
  /** field 2989, wire `audio_tx_spectral_flatness_p5` */
  audioTxSpectralFlatnessP5?: string
  /** field 2990, wire `audio_tx_spectral_flatness_p50` */
  audioTxSpectralFlatnessP50?: string
  /** field 2991, wire `audio_tx_spectral_flatness_p95` */
  audioTxSpectralFlatnessP95?: string
  /** field 2992, wire `audio_tx_spectral_rolloff_avg` */
  audioTxSpectralRolloffAvg?: string
  /** field 2993, wire `audio_tx_spectral_rolloff_p5` */
  audioTxSpectralRolloffP5?: string
  /** field 2994, wire `audio_tx_spectral_rolloff_p50` */
  audioTxSpectralRolloffP50?: string
  /** field 2995, wire `audio_tx_spectral_rolloff_p95` */
  audioTxSpectralRolloffP95?: string
  /** field 2996, wire `video_recv_psnr_avg_ss` */
  videoRecvPsnrAvgSs?: string
  /** field 2997, wire `video_recv_psnr_p50_ss` */
  videoRecvPsnrP50Ss?: string
  /** field 2998, wire `video_recv_psnr_p5_ss` */
  videoRecvPsnrP5Ss?: string
  /** field 2999, wire `video_recv_psnr_p95_ss` */
  videoRecvPsnrP95Ss?: string
  /** field 3000, wire `video_state_reorder_drop_count` */
  videoStateReorderDropCount?: number
  /** field 3001, wire `c50_linked` */
  c50Linked?: boolean
  /** field 3002, wire `peripheral_device_origin` */
  peripheralDeviceOrigin?: PERIPHERALDEVICETYPE
  /** field 3004, wire `wearable_device_types` */
  wearableDeviceTypes?: string
  /** field 3005, wire `call_eligible_bucket_name_list` */
  callEligibleBucketNameList?: string
  /** field 3006, wire `is_transfer_rejoin` */
  isTransferRejoin?: boolean
  /** field 3008, wire `wearable_call_have_used_pov` */
  wearableCallHaveUsedPov?: boolean
  /** field 3009, wire `foa_source_surface` */
  foaSourceSurface?: number
  /** field 3012, wire `call_rx_automos_noise_p5` */
  callRxAutomosNoiseP5?: string
  /** field 3013, wire `call_rx_automos_noise_p50` */
  callRxAutomosNoiseP50?: string
  /** field 3014, wire `call_rx_automos_noise_p95` */
  callRxAutomosNoiseP95?: string
  /** field 3015, wire `call_rx_automos_overall_p5` */
  callRxAutomosOverallP5?: string
  /** field 3016, wire `call_rx_automos_overall_p50` */
  callRxAutomosOverallP50?: string
  /** field 3017, wire `call_rx_automos_overall_p95` */
  callRxAutomosOverallP95?: string
  /** field 3018, wire `call_rx_automos_speech_p5` */
  callRxAutomosSpeechP5?: string
  /** field 3019, wire `call_rx_automos_speech_p50` */
  callRxAutomosSpeechP50?: string
  /** field 3020, wire `call_rx_automos_speech_p95` */
  callRxAutomosSpeechP95?: string
  /** field 3021, wire `call_tx_automos_noise_p5` */
  callTxAutomosNoiseP5?: string
  /** field 3022, wire `call_tx_automos_noise_p50` */
  callTxAutomosNoiseP50?: string
  /** field 3023, wire `call_tx_automos_noise_p95` */
  callTxAutomosNoiseP95?: string
  /** field 3024, wire `call_tx_automos_overall_p5` */
  callTxAutomosOverallP5?: string
  /** field 3025, wire `call_tx_automos_overall_p50` */
  callTxAutomosOverallP50?: string
  /** field 3026, wire `call_tx_automos_overall_p95` */
  callTxAutomosOverallP95?: string
  /** field 3027, wire `call_tx_automos_speech_p5` */
  callTxAutomosSpeechP5?: string
  /** field 3028, wire `call_tx_automos_speech_p50` */
  callTxAutomosSpeechP50?: string
  /** field 3029, wire `call_tx_automos_speech_p95` */
  callTxAutomosSpeechP95?: string
  /** field 3030, wire `video_composite_brightness_avg` */
  videoCompositeBrightnessAvg?: string
  /** field 3031, wire `video_overexposure_avg` */
  videoOverexposureAvg?: string
  /** field 3032, wire `web_video_encoder_type` */
  webVideoEncoderType?: string
  /** field 3033, wire `video_recv_to_render_latency` */
  videoRecvToRenderLatency?: string
  /** field 3034, wire `ca2d_extension_add_t` */
  ca2dExtensionAddT?: string
  /** field 3035, wire `ca2d_extension_connection_state` */
  ca2dExtensionConnectionState?: CA2DEXTENSIONCONNECTIONSTATE
  /** field 3036, wire `ca2d_extension_create_t` */
  ca2dExtensionCreateT?: string
  /** field 3037, wire `ca2d_preview_t` */
  ca2dPreviewT?: string
  /** field 3038, wire `extension_type` */
  extensionType?: number
  /** field 3039, wire `extension_type_bitmask` */
  extensionTypeBitmask?: number
  /** field 3040, wire `extension_user_rid` */
  extensionUserRid?: string
  /** field 3041, wire `imu_tx_bitrate` */
  imuTxBitrate?: number
  /** field 3042, wire `imu_tx_dropped_count` */
  imuTxDroppedCount?: number
  /** field 3043, wire `imu_tx_frame_count` */
  imuTxFrameCount?: number
  /** field 3044, wire `max_num_connected_extensions` */
  maxNumConnectedExtensions?: number
  /** field 3045, wire `num_connected_extensions` */
  numConnectedExtensions?: number
  /** field 3048, wire `mlow_dnn_complexity_trigger_count` */
  mlowDnnComplexityTriggerCount?: number
  /** field 3049, wire `mlow_dnn_loaded` */
  mlowDnnLoaded?: boolean
  /** field 3050, wire `mlow_dnn_permanently_disabled` */
  mlowDnnPermanentlyDisabled?: boolean
  /** field 3051, wire `mlow_dnn_warmup_count` */
  mlowDnnWarmupCount?: number
  /** field 3052, wire `mlow_dnn_weights_used` */
  mlowDnnWeightsUsed?: boolean
  /** field 3053, wire `redial_after_user_hangup` */
  redialAfterUserHangup?: boolean
  /** field 3054, wire `e2ee_type` */
  e2eeType?: E2EETYPE
  /** field 3055, wire `hbh_dc_bytes_received_count` */
  hbhDcBytesReceivedCount?: number
  /** field 3056, wire `hbh_dc_bytes_sent_count` */
  hbhDcBytesSentCount?: number
  /** field 3057, wire `hbh_dc_msgs_received_count` */
  hbhDcMsgsReceivedCount?: number
  /** field 3058, wire `hbh_dc_msgs_sent_count` */
  hbhDcMsgsSentCount?: number
  /** field 3059, wire `hbh_dc_setup_avg_t` */
  hbhDcSetupAvgT?: string
  /** field 3060, wire `hbh_dtls_connection_state` */
  hbhDtlsConnectionState?: HBHDTLSCONNECTIONSTATE
  /** field 3061, wire `hbh_dtls_handshake_completed_count` */
  hbhDtlsHandshakeCompletedCount?: number
  /** field 3062, wire `hbh_dtls_handshake_failed_count` */
  hbhDtlsHandshakeFailedCount?: number
  /** field 3063, wire `hbh_dtls_handshake_setup_avg_t` */
  hbhDtlsHandshakeSetupAvgT?: string
  /** field 3064, wire `hbh_dtls_handshake_started_count` */
  hbhDtlsHandshakeStartedCount?: number
  /** field 3065, wire `hbh_sctp_setup_avg_t` */
  hbhSctpSetupAvgT?: string
  /** field 3066, wire `is_extension_creator` */
  isExtensionCreator?: boolean
  /** field 3067, wire `ca2d_extension_add_failure_reason` */
  ca2dExtensionAddFailureReason?: CA2DEXTENSIONADDFAILUREREASON
  /** field 3068, wire `outgoing_call_setup_active_ms` */
  outgoingCallSetupActiveMs?: string
  /** field 3069, wire `hbh_dc_msgs_sent_broadcast_count` */
  hbhDcMsgsSentBroadcastCount?: number
  /** field 3070, wire `hbh_dc_msgs_sent_relay_only_count` */
  hbhDcMsgsSentRelayOnlyCount?: number
  /** field 3071, wire `hbh_dc_msgs_sent_selective_count` */
  hbhDcMsgsSentSelectiveCount?: number
  /** field 3072, wire `audio_codec_num_bw_switches` */
  audioCodecNumBwSwitches?: number
  /** field 3073, wire `ml_ns_available` */
  mlNsAvailable?: boolean
  /** field 3074, wire `ca2d_receiver_ext_connect_t` */
  ca2dReceiverExtConnectT?: string
  /** field 3075, wire `ca2d_receiver_first_frame_t` */
  ca2dReceiverFirstFrameT?: string
  /** field 3076, wire `video_render_unique_fps` */
  videoRenderUniqueFps?: string
  /** field 3077, wire `ca2d_ever_connected` */
  ca2dEverConnected?: boolean
  /** field 3078, wire `device_soc_manufacturer` */
  deviceSocManufacturer?: string
  /** field 3079, wire `device_soc_model` */
  deviceSocModel?: string
  /** field 3080, wire `ca2d_e2e_network_delay_ms` */
  ca2dE2eNetworkDelayMs?: string
  /** field 3081, wire `ca2d_net_cathode_sfu_rtt_ms` */
  ca2dNetCathodeSfuRttMs?: string
  /** field 3082, wire `ca2d_net_creator_sfu_rtt_ms` */
  ca2dNetCreatorSfuRttMs?: string
  /** field 3083, wire `hbh_dc_connection_lost_crash` */
  hbhDcConnectionLostCrash?: number
  /** field 3084, wire `hbh_dc_connection_lost_goaway` */
  hbhDcConnectionLostGoaway?: number
  /** field 3085, wire `hbh_dc_reconnect_success` */
  hbhDcReconnectSuccess?: number
  /** field 3086, wire `hbh_dc_sframe_decrypt_count` */
  hbhDcSframeDecryptCount?: number
  /** field 3087, wire `hbh_dc_sframe_decrypt_fail_count` */
  hbhDcSframeDecryptFailCount?: number
  /** field 3088, wire `hbh_dc_sframe_encrypt_count` */
  hbhDcSframeEncryptCount?: number
  /** field 3089, wire `hbh_dc_standby_rearm` */
  hbhDcStandbyRearm?: number
  /** field 3090, wire `hbh_dc_teardown_count` */
  hbhDcTeardownCount?: number
  /** field 3091, wire `ca2d_fail_count` */
  ca2dFailCount?: number
  /** field 3092, wire `ca2d_succ_count` */
  ca2dSuccCount?: number
  /** field 3093, wire `ca2d_attempt_count` */
  ca2dAttemptCount?: number
  /** field 3094, wire `aux_video_nack_rtp_retransmit_recvd_count` */
  auxVideoNackRtpRetransmitRecvdCount?: number
  /** field 3095, wire `aux_video_nack_rtp_retransmit_req_count` */
  auxVideoNackRtpRetransmitReqCount?: number
  /** field 3096, wire `aux_video_nack_rtp_retransmit_retry_count` */
  auxVideoNackRtpRetransmitRetryCount?: number
  /** field 3097, wire `aux_video_render_freeze2x_t` */
  auxVideoRenderFreeze2xT?: string
  /** field 3098, wire `aux_video_render_freeze4x_t` */
  auxVideoRenderFreeze4xT?: string
  /** field 3099, wire `aux_video_render_freeze8x_t` */
  auxVideoRenderFreeze8xT?: string
  /** field 3100, wire `aux_video_render_freeze_t` */
  auxVideoRenderFreezeT?: string
  /** field 3101, wire `aux_video_rx_fec_bitrate` */
  auxVideoRxFecBitrate?: string
  /** field 3102, wire `aux_video_rx_rtcp_pli` */
  auxVideoRxRtcpPli?: number
  /** field 3103, wire `dual_stream_camera_auto_off_reason` */
  dualStreamCameraAutoOffReason?: number
  /** field 3104, wire `is_dual_stream_backward_rendering` */
  isDualStreamBackwardRendering?: boolean
  /** field 3105, wire `is_dual_stream_ss` */
  isDualStreamSs?: boolean
  /** field 3106, wire `last_min_aux_video_render_freeze2x_t` */
  lastMinAuxVideoRenderFreeze2xT?: string
  /** field 3107, wire `last_min_aux_video_render_freeze4x_t` */
  lastMinAuxVideoRenderFreeze4xT?: string
  /** field 3108, wire `last_min_aux_video_render_freeze8x_t` */
  lastMinAuxVideoRenderFreeze8xT?: string
  /** field 3109, wire `last_min_aux_video_render_freeze_t` */
  lastMinAuxVideoRenderFreezeT?: string
  /** field 3110, wire `video_rx_bitrate_combined` */
  videoRxBitrateCombined?: string
  /** field 3111, wire `video_rx_total_bytes_ss` */
  videoRxTotalBytesSs?: string
}