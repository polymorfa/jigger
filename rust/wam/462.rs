pub const WAM_CALL: u32 = 462;

#[derive(Debug, Default)]
pub struct CallEvent {
    /// field 1, wire `call_side`
    pub call_side: Option<CALLSIDE>,
    /// field 2, wire `call_from_ui`
    pub call_from_ui: Option<CALLFROMUI>,
    /// field 3, wire `xmpp_status`
    pub xmpp_status: Option<XMPPSTATUS>,
    /// field 4, wire `peer_xmpp_status`
    pub peer_xmpp_status: Option<XMPPSTATUS>,
    /// field 5, wire `call_peer_platform`
    pub call_peer_platform: Option<String>,
    /// field 7, wire `call_self_ipv4`
    pub call_self_ipv4: Option<i64>,
    /// field 8, wire `call_peer_ipv4`
    pub call_peer_ipv4: Option<i64>,
    /// field 9, wire `call_self_ip_str`
    pub call_self_ip_str: Option<String>,
    /// field 10, wire `call_peer_ip_str`
    pub call_peer_ip_str: Option<String>,
    /// field 15, wire `call_peer_app_version`
    pub call_peer_app_version: Option<String>,
    /// field 16, wire `call_relay_bind_status`
    pub call_relay_bind_status: Option<CALLRELAYBINDSTATUS>,
    /// field 17, wire `call_relay_server`
    pub call_relay_server: Option<String>,
    /// field 18, wire `call_p2p_disabled`
    pub call_p2p_disabled: Option<bool>,
    /// field 19, wire `call_test_bucket`
    pub call_test_bucket: Option<String>,
    /// field 20, wire `call_user_rate`
    pub call_user_rate: Option<i64>,
    /// field 21, wire `long_connect`
    pub long_connect: Option<bool>,
    /// field 22, wire `call_interrupted`
    pub call_interrupted: Option<bool>,
    /// field 23, wire `call_ended_interrupted`
    pub call_ended_interrupted: Option<bool>,
    /// field 24, wire `call_record_callback_stopped`
    pub call_record_callback_stopped: Option<bool>,
    /// field 25, wire `call_playback_callback_stopped`
    pub call_playback_callback_stopped: Option<bool>,
    /// field 26, wire `call_record_silence_ratio`
    pub call_record_silence_ratio: Option<i64>,
    /// field 28, wire `call_record_frames_ps`
    pub call_record_frames_ps: Option<i64>,
    /// field 29, wire `call_recent_record_frames_ps`
    pub call_recent_record_frames_ps: Option<String>,
    /// field 30, wire `call_sampling_rate`
    pub call_sampling_rate: Option<i64>,
    /// field 31, wire `native_sampling_rate`
    pub native_sampling_rate: Option<String>,
    /// field 33, wire `builtin_aec_available`
    pub builtin_aec_available: Option<bool>,
    /// field 34, wire `builtin_agc_available`
    pub builtin_agc_available: Option<bool>,
    /// field 35, wire `builtin_ns_available`
    pub builtin_ns_available: Option<bool>,
    /// field 36, wire `builtin_aec_implementor`
    pub builtin_aec_implementor: Option<String>,
    /// field 37, wire `builtin_aec_uuid`
    pub builtin_aec_uuid: Option<String>,
    /// field 38, wire `builtin_aec_enabled`
    pub builtin_aec_enabled: Option<bool>,
    /// field 39, wire `call_aec_mode`
    pub call_aec_mode: Option<AECMODE>,
    /// field 40, wire `call_sw_aec_type`
    pub call_sw_aec_type: Option<SWAECTYPE>,
    /// field 41, wire `call_sw_aec_mode`
    pub call_sw_aec_mode: Option<i64>,
    /// field 42, wire `call_aec_offset`
    pub call_aec_offset: Option<i64>,
    /// field 43, wire `call_aec_tail_length`
    pub call_aec_tail_length: Option<i64>,
    /// field 44, wire `call_echo_likelihood`
    pub call_echo_likelihood: Option<i64>,
    /// field 45, wire `call_hist_echo_likelihood`
    pub call_hist_echo_likelihood: Option<String>,
    /// field 46, wire `call_echo_energy`
    pub call_echo_energy: Option<String>,
    /// field 47, wire `call_echo_likelihood_before_ec`
    pub call_echo_likelihood_before_ec: Option<String>,
    /// field 50, wire `call_calculated_ec_offset`
    pub call_calculated_ec_offset: Option<i64>,
    /// field 51, wire `call_calculated_ec_offset_stddev`
    pub call_calculated_ec_offset_stddev: Option<i64>,
    /// field 52, wire `call_agc_mode`
    pub call_agc_mode: Option<AGCMODE>,
    /// field 53, wire `call_ns_mode`
    pub call_ns_mode: Option<NSMODE>,
    /// field 54, wire `call_audio_engine_type`
    pub call_audio_engine_type: Option<AUDIOENGINETYPE>,
    /// field 55, wire `call_android_audio_mode`
    pub call_android_audio_mode: Option<i64>,
    /// field 56, wire `call_android_record_audio_source`
    pub call_android_record_audio_source: Option<i64>,
    /// field 57, wire `call_android_record_audio_preset`
    pub call_android_record_audio_preset: Option<i64>,
    /// field 63, wire `call_result`
    pub call_result: Option<CALLRESULTTYPE>,
    /// field 66, wire `peer_call_result`
    pub peer_call_result: Option<CALLRESULTTYPE>,
    /// field 68, wire `call_server_nack_error_code`
    pub call_server_nack_error_code: Option<i64>,
    /// field 69, wire `call_term_reason`
    pub call_term_reason: Option<CALLTERMREASON>,
    /// field 70, wire `call_end_reconnecting`
    pub call_end_reconnecting: Option<bool>,
    /// field 71, wire `call_setup_error_type`
    pub call_setup_error_type: Option<CALLSETUPERRORTYPE>,
    /// field 72, wire `call_transport`
    pub call_transport: Option<CALLTRANSPORTTYPE>,
    /// field 76, wire `call_network`
    pub call_network: Option<CALLNETWORKMEDIUM>,
    /// field 77, wire `call_network_subtype`
    pub call_network_subtype: Option<i64>,
    /// field 78, wire `call_transition_count`
    pub call_transition_count: Option<i64>,
    /// field 79, wire `call_transport_relay_to_relay_fallback_count`
    pub call_transport_relay_to_relay_fallback_count: Option<i64>,
    /// field 80, wire `call_transport_p2p_to_relay_fallback_count`
    pub call_transport_p2p_to_relay_fallback_count: Option<i64>,
    /// field 81, wire `encoder_comp_stepdowns`
    pub encoder_comp_stepdowns: Option<i64>,
    /// field 83, wire `audio_get_frame_underflow_ps`
    pub audio_get_frame_underflow_ps: Option<i64>,
    /// field 84, wire `record_circular_buffer_frame_count`
    pub record_circular_buffer_frame_count: Option<i64>,
    /// field 86, wire `user_rating`
    pub user_rating: Option<i64>,
    /// field 87, wire `user_description`
    pub user_description: Option<String>,
    /// field 88, wire `user_problems`
    pub user_problems: Option<i64>,
    /// field 89, wire `present_end_call_confirmation`
    pub present_end_call_confirmation: Option<ENDCALLCONFIRMATIONTYPE>,
    /// field 90, wire `end_call_after_confirmation`
    pub end_call_after_confirmation: Option<ENDCALLCONFIRMATIONTYPE>,
    /// field 91, wire `is_ipv6_capable`
    pub is_ipv6_capable: Option<bool>,
    /// field 92, wire `call_t`
    pub call_t: Option<String>,
    /// field 93, wire `call_playback_frames_ps`
    pub call_playback_frames_ps: Option<String>,
    /// field 94, wire `call_recent_playback_frames_ps`
    pub call_recent_playback_frames_ps: Option<String>,
    /// field 96, wire `call_audio_restart_count`
    pub call_audio_restart_count: Option<String>,
    /// field 97, wire `call_audio_restart_reason`
    pub call_audio_restart_reason: Option<String>,
    /// field 98, wire `call_record_max_energy_ratio`
    pub call_record_max_energy_ratio: Option<String>,
    /// field 99, wire `call_ec_restart_count`
    pub call_ec_restart_count: Option<String>,
    /// field 100, wire `call_rx_stopped_t`
    pub call_rx_stopped_t: Option<String>,
    /// field 101, wire `call_setup_t`
    pub call_setup_t: Option<String>,
    /// field 102, wire `call_offer_elapsed_t`
    pub call_offer_elapsed_t: Option<String>,
    /// field 103, wire `call_ringing_t`
    pub call_ringing_t: Option<String>,
    /// field 104, wire `call_relay_create_t`
    pub call_relay_create_t: Option<String>,
    /// field 105, wire `call_min_rtt`
    pub call_min_rtt: Option<String>,
    /// field 106, wire `call_max_rtt`
    pub call_max_rtt: Option<String>,
    /// field 107, wire `call_avg_rtt`
    pub call_avg_rtt: Option<String>,
    /// field 108, wire `call_last_rtt`
    pub call_last_rtt: Option<String>,
    /// field 109, wire `call_initial_rtt`
    pub call_initial_rtt: Option<String>,
    /// field 110, wire `call_tx_pkt_loss_pct`
    pub call_tx_pkt_loss_pct: Option<String>,
    /// field 111, wire `call_tx_pkt_error_pct`
    pub call_tx_pkt_error_pct: Option<String>,
    /// field 112, wire `call_tx_avg_bitrate`
    pub call_tx_avg_bitrate: Option<String>,
    /// field 113, wire `call_tx_avg_bwe`
    pub call_tx_avg_bwe: Option<String>,
    /// field 114, wire `call_tx_min_jitter`
    pub call_tx_min_jitter: Option<String>,
    /// field 115, wire `call_tx_max_jitter`
    pub call_tx_max_jitter: Option<String>,
    /// field 116, wire `call_tx_avg_jitter`
    pub call_tx_avg_jitter: Option<String>,
    /// field 117, wire `call_tx_min_loss_period`
    pub call_tx_min_loss_period: Option<String>,
    /// field 118, wire `call_tx_max_loss_period`
    pub call_tx_max_loss_period: Option<String>,
    /// field 119, wire `call_tx_avg_loss_period`
    pub call_tx_avg_loss_period: Option<String>,
    /// field 120, wire `call_rx_pkt_loss_pct`
    pub call_rx_pkt_loss_pct: Option<String>,
    /// field 121, wire `call_rx_avg_bitrate`
    pub call_rx_avg_bitrate: Option<String>,
    /// field 122, wire `call_rx_avg_bwe`
    pub call_rx_avg_bwe: Option<String>,
    /// field 123, wire `call_rx_min_jitter`
    pub call_rx_min_jitter: Option<String>,
    /// field 124, wire `call_rx_max_jitter`
    pub call_rx_max_jitter: Option<String>,
    /// field 125, wire `call_rx_avg_jitter`
    pub call_rx_avg_jitter: Option<String>,
    /// field 126, wire `call_rx_min_loss_period`
    pub call_rx_min_loss_period: Option<String>,
    /// field 127, wire `call_rx_max_loss_period`
    pub call_rx_max_loss_period: Option<String>,
    /// field 128, wire `call_rx_avg_loss_period`
    pub call_rx_avg_loss_period: Option<String>,
    /// field 129, wire `call_start_func_t`
    pub call_start_func_t: Option<String>,
    /// field 130, wire `call_end_func_t`
    pub call_end_func_t: Option<String>,
    /// field 131, wire `call_reject_func_t`
    pub call_reject_func_t: Option<String>,
    /// field 132, wire `call_accept_func_t`
    pub call_accept_func_t: Option<String>,
    /// field 133, wire `call_sound_port_func_t`
    pub call_sound_port_func_t: Option<String>,
    /// field 134, wire `call_offer_receipt_delay`
    pub call_offer_receipt_delay: Option<String>,
    /// field 135, wire `avg_encode_t`
    pub avg_encode_t: Option<String>,
    /// field 136, wire `avg_decode_t`
    pub avg_decode_t: Option<String>,
    /// field 137, wire `avg_play_cb_t`
    pub avg_play_cb_t: Option<String>,
    /// field 138, wire `avg_record_cb_t`
    pub avg_record_cb_t: Option<String>,
    /// field 139, wire `avg_clock_cb_t`
    pub avg_clock_cb_t: Option<String>,
    /// field 141, wire `avg_target_bitrate`
    pub avg_target_bitrate: Option<String>,
    /// field 142, wire `tx_total_bytes`
    pub tx_total_bytes: Option<String>,
    /// field 143, wire `rx_total_bytes`
    pub rx_total_bytes: Option<String>,
    /// field 144, wire `tx_total_bitrate`
    pub tx_total_bitrate: Option<String>,
    /// field 145, wire `rx_total_bitrate`
    pub rx_total_bitrate: Option<String>,
    /// field 146, wire `jb_avg_delay`
    pub jb_avg_delay: Option<String>,
    /// field 147, wire `jb_min_delay`
    pub jb_min_delay: Option<String>,
    /// field 148, wire `jb_max_delay`
    pub jb_max_delay: Option<String>,
    /// field 149, wire `jb_last_delay`
    pub jb_last_delay: Option<String>,
    /// field 150, wire `jb_discards`
    pub jb_discards: Option<String>,
    /// field 151, wire `jb_empties`
    pub jb_empties: Option<String>,
    /// field 152, wire `jb_gets`
    pub jb_gets: Option<String>,
    /// field 153, wire `jb_puts`
    pub jb_puts: Option<String>,
    /// field 155, wire `rc_maxrtt`
    pub rc_maxrtt: Option<String>,
    /// field 156, wire `call_wakeup_source`
    pub call_wakeup_source: Option<CALLWAKEUPSOURCE>,
    /// field 157, wire `low_data_usage_bitrate`
    pub low_data_usage_bitrate: Option<String>,
    /// field 158, wire `push_to_call_offer_delay`
    pub push_to_call_offer_delay: Option<String>,
    /// field 159, wire `call_offer_ack_timout`
    pub call_offer_ack_timout: Option<String>,
    /// field 160, wire `pings_sent`
    pub pings_sent: Option<String>,
    /// field 161, wire `pongs_received`
    pub pongs_received: Option<String>,
    /// field 163, wire `video_enabled`
    pub video_enabled: Option<bool>,
    /// field 164, wire `video_tx_total_bytes`
    pub video_tx_total_bytes: Option<String>,
    /// field 165, wire `video_tx_bitrate`
    pub video_tx_bitrate: Option<String>,
    /// field 166, wire `video_tx_pkt_loss_pct`
    pub video_tx_pkt_loss_pct: Option<String>,
    /// field 167, wire `video_tx_pkt_error_pct`
    pub video_tx_pkt_error_pct: Option<String>,
    /// field 168, wire `video_rx_total_bytes`
    pub video_rx_total_bytes: Option<String>,
    /// field 169, wire `video_rx_bitrate`
    pub video_rx_bitrate: Option<String>,
    /// field 170, wire `video_rx_pkt_loss_pct`
    pub video_rx_pkt_loss_pct: Option<String>,
    /// field 172, wire `video_dec_input_frames`
    pub video_dec_input_frames: Option<i64>,
    /// field 173, wire `video_dec_output_frames`
    pub video_dec_output_frames: Option<i64>,
    /// field 174, wire `video_dec_error_frames`
    pub video_dec_error_frames: Option<i64>,
    /// field 175, wire `video_dec_keyframes`
    pub video_dec_keyframes: Option<i64>,
    /// field 176, wire `video_enc_input_frames`
    pub video_enc_input_frames: Option<i64>,
    /// field 177, wire `video_enc_output_frames`
    pub video_enc_output_frames: Option<i64>,
    /// field 178, wire `video_enc_error_frames`
    pub video_enc_error_frames: Option<i64>,
    /// field 179, wire `video_enc_drop_frames`
    pub video_enc_drop_frames: Option<i64>,
    /// field 180, wire `video_enc_keyframes`
    pub video_enc_keyframes: Option<i64>,
    /// field 181, wire `video_tx_fec_frames`
    pub video_tx_fec_frames: Option<i64>,
    /// field 182, wire `video_rx_fec_frames`
    pub video_rx_fec_frames: Option<i64>,
    /// field 183, wire `video_fec_recovered`
    pub video_fec_recovered: Option<i64>,
    /// field 184, wire `video_avg_target_bitrate`
    pub video_avg_target_bitrate: Option<String>,
    /// field 185, wire `video_last_sender_bwe`
    pub video_last_sender_bwe: Option<String>,
    /// field 186, wire `video_avg_sender_bwe`
    pub video_avg_sender_bwe: Option<String>,
    /// field 187, wire `video_rx_bwe_hit_tx_bwe`
    pub video_rx_bwe_hit_tx_bwe: Option<bool>,
    /// field 188, wire `video_width`
    pub video_width: Option<i64>,
    /// field 189, wire `video_height`
    pub video_height: Option<i64>,
    /// field 190, wire `peer_video_width`
    pub peer_video_width: Option<i64>,
    /// field 191, wire `peer_video_height`
    pub peer_video_height: Option<i64>,
    /// field 192, wire `av_avg_delta`
    pub av_avg_delta: Option<String>,
    /// field 193, wire `av_max_delta`
    pub av_max_delta: Option<String>,
    /// field 195, wire `call_battery_change_pct`
    pub call_battery_change_pct: Option<String>,
    /// field 196, wire `video_render_delay_t`
    pub video_render_delay_t: Option<String>,
    /// field 197, wire `video_tx_packets`
    pub video_tx_packets: Option<i64>,
    /// field 198, wire `video_tx_resend_packets`
    pub video_tx_resend_packets: Option<i64>,
    /// field 199, wire `video_tx_rtcp_pli`
    pub video_tx_rtcp_pli: Option<i64>,
    /// field 200, wire `video_tx_rtcp_nack`
    pub video_tx_rtcp_nack: Option<i64>,
    /// field 201, wire `video_rx_packets`
    pub video_rx_packets: Option<i64>,
    /// field 202, wire `video_rx_rtcp_pli`
    pub video_rx_rtcp_pli: Option<i64>,
    /// field 203, wire `video_rx_rtcp_nack`
    pub video_rx_rtcp_nack: Option<i64>,
    /// field 204, wire `video_dec_name`
    pub video_dec_name: Option<i64>,
    /// field 205, wire `video_dec_color_id`
    pub video_dec_color_id: Option<i64>,
    /// field 206, wire `video_dec_restart`
    pub video_dec_restart: Option<i64>,
    /// field 207, wire `video_dec_avg_fps`
    pub video_dec_avg_fps: Option<String>,
    /// field 208, wire `video_render_avg_fps`
    pub video_render_avg_fps: Option<i64>,
    /// field 209, wire `video_dec_skip_packets`
    pub video_dec_skip_packets: Option<i64>,
    /// field 210, wire `video_dec_lost_packets`
    pub video_dec_lost_packets: Option<i64>,
    /// field 212, wire `video_enc_name`
    pub video_enc_name: Option<i64>,
    /// field 213, wire `video_enc_color_id`
    pub video_enc_color_id: Option<i64>,
    /// field 214, wire `video_enc_restart`
    pub video_enc_restart: Option<i64>,
    /// field 215, wire `video_enc_avg_target_fps`
    pub video_enc_avg_target_fps: Option<String>,
    /// field 216, wire `video_enc_avg_fps`
    pub video_enc_avg_fps: Option<String>,
    /// field 217, wire `video_enc_discard_frame`
    pub video_enc_discard_frame: Option<i64>,
    /// field 218, wire `video_tx_fec_bitrate`
    pub video_tx_fec_bitrate: Option<String>,
    /// field 219, wire `video_rx_fec_bitrate`
    pub video_rx_fec_bitrate: Option<String>,
    /// field 222, wire `video_capture_avg_fps`
    pub video_capture_avg_fps: Option<i64>,
    /// field 223, wire `video_dec_latency`
    pub video_dec_latency: Option<String>,
    /// field 224, wire `video_enc_latency`
    pub video_enc_latency: Option<String>,
    /// field 225, wire `video_render_converter_ts`
    pub video_render_converter_ts: Option<String>,
    /// field 226, wire `video_capture_converter_ts`
    pub video_capture_converter_ts: Option<String>,
    /// field 227, wire `video_capture_width`
    pub video_capture_width: Option<i64>,
    /// field 228, wire `video_capture_height`
    pub video_capture_height: Option<i64>,
    /// field 229, wire `device_hardware`
    pub device_hardware: Option<String>,
    /// field 230, wire `device_board`
    pub device_board: Option<String>,
    /// field 231, wire `call_radio_type`
    pub call_radio_type: Option<RADIOTYPE>,
    /// field 232, wire `video_decode_paused_count`
    pub video_decode_paused_count: Option<i64>,
    /// field 233, wire `camera_start_mode`
    pub camera_start_mode: Option<CAMERASTARTMODEPARAMS>,
    /// field 235, wire `video_render_freeze_t`
    pub video_render_freeze_t: Option<String>,
    /// field 236, wire `video_codec_type`
    pub video_codec_type: Option<i64>,
    /// field 237, wire `traffic_shaper_overflow_count`
    pub traffic_shaper_overflow_count: Option<i64>,
    /// field 238, wire `traffic_shaper_queue_empty_count`
    pub traffic_shaper_queue_empty_count: Option<i64>,
    /// field 239, wire `traffic_shaper_queued_packet_count`
    pub traffic_shaper_queued_packet_count: Option<i64>,
    /// field 240, wire `traffic_shaper_max_delay_violations`
    pub traffic_shaper_max_delay_violations: Option<i64>,
    /// field 241, wire `traffic_shaper_min_delay_violations`
    pub traffic_shaper_min_delay_violations: Option<i64>,
    /// field 242, wire `traffic_shaper_avg_queue_ms`
    pub traffic_shaper_avg_queue_ms: Option<String>,
    /// field 243, wire `call_offer_delay_t`
    pub call_offer_delay_t: Option<String>,
    /// field 244, wire `initial_estimated_tx_bitrate`
    pub initial_estimated_tx_bitrate: Option<String>,
    /// field 248, wire `speaker_min_power`
    pub speaker_min_power: Option<i64>,
    /// field 249, wire `speaker_max_power`
    pub speaker_max_power: Option<i64>,
    /// field 250, wire `speaker_avg_power`
    pub speaker_avg_power: Option<i64>,
    /// field 251, wire `mic_min_power`
    pub mic_min_power: Option<i64>,
    /// field 252, wire `mic_max_power`
    pub mic_max_power: Option<i64>,
    /// field 253, wire `mic_avg_power`
    pub mic_avg_power: Option<i64>,
    /// field 257, wire `symmetric_nat_port_gap`
    pub symmetric_nat_port_gap: Option<i64>,
    /// field 258, wire `call_avg_rott_tx`
    pub call_avg_rott_tx: Option<String>,
    /// field 259, wire `call_avg_rott_rx`
    pub call_avg_rott_rx: Option<String>,
    /// field 263, wire `wifi_rssi_at_call_start`
    pub wifi_rssi_at_call_start: Option<i64>,
    /// field 264, wire `peer_call_network`
    pub peer_call_network: Option<PEERCALLNETWORKMEDIUM>,
    /// field 265, wire `previous_call_video_enabled`
    pub previous_call_video_enabled: Option<bool>,
    /// field 266, wire `previous_call_interval`
    pub previous_call_interval: Option<String>,
    /// field 267, wire `previous_call_with_same_peer`
    pub previous_call_with_same_peer: Option<bool>,
    /// field 268, wire `call_andr_gcm_fg_enabled`
    pub call_andr_gcm_fg_enabled: Option<bool>,
    /// field 270, wire `video_enabled_at_call_start`
    pub video_enabled_at_call_start: Option<bool>,
    /// field 271, wire `video_upgrade_request_count`
    pub video_upgrade_request_count: Option<i64>,
    /// field 272, wire `video_upgrade_count`
    pub video_upgrade_count: Option<i64>,
    /// field 273, wire `video_downgrade_count`
    pub video_downgrade_count: Option<i64>,
    /// field 274, wire `video_self_state`
    pub video_self_state: Option<CALLVIDEOSTATE>,
    /// field 275, wire `video_peer_state`
    pub video_peer_state: Option<CALLVIDEOSTATE>,
    /// field 276, wire `video_active_time`
    pub video_active_time: Option<String>,
    /// field 277, wire `jb_lost`
    pub jb_lost: Option<String>,
    /// field 287, wire `opus_version`
    pub opus_version: Option<i64>,
    /// field 288, wire `tx_probe_count_total`
    pub tx_probe_count_total: Option<i64>,
    /// field 289, wire `tx_probe_count_success`
    pub tx_probe_count_success: Option<i64>,
    /// field 290, wire `rx_probe_count_total`
    pub rx_probe_count_total: Option<i64>,
    /// field 291, wire `rx_probe_count_success`
    pub rx_probe_count_success: Option<i64>,
    /// field 293, wire `tx_tp_fb_bitrate`
    pub tx_tp_fb_bitrate: Option<String>,
    /// field 294, wire `rx_tp_fb_bitrate`
    pub rx_tp_fb_bitrate: Option<String>,
    /// field 303, wire `video_codec_sub_type`
    pub video_codec_sub_type: Option<i64>,
    /// field 304, wire `video_render_freeze2x_t`
    pub video_render_freeze2x_t: Option<String>,
    /// field 305, wire `video_render_freeze4x_t`
    pub video_render_freeze4x_t: Option<String>,
    /// field 306, wire `video_render_freeze8x_t`
    pub video_render_freeze8x_t: Option<String>,
    /// field 318, wire `call_test_event`
    pub call_test_event: Option<i64>,
    /// field 320, wire `echo_cancellation_ms_per_sec`
    pub echo_cancellation_ms_per_sec: Option<i64>,
    /// field 321, wire `video_initial_codec_type`
    pub video_initial_codec_type: Option<i64>,
    /// field 322, wire `camera_preview_mode`
    pub camera_preview_mode: Option<CAMERAPREVIEWMODE>,
    /// field 323, wire `video_upgrade_cancel_count`
    pub video_upgrade_cancel_count: Option<i64>,
    /// field 324, wire `video_upgrade_reject_count`
    pub video_upgrade_reject_count: Option<i64>,
    /// field 325, wire `video_upgrade_cancel_by_timeout_count`
    pub video_upgrade_cancel_by_timeout_count: Option<i64>,
    /// field 326, wire `video_upgrade_reject_by_timeout_count`
    pub video_upgrade_reject_by_timeout_count: Option<i64>,
    /// field 327, wire `probe_avg_bitrate`
    pub probe_avg_bitrate: Option<String>,
    /// field 328, wire `field_stats_row_type`
    pub field_stats_row_type: Option<FIELDSTATSROWTYPE>,
    /// field 329, wire `group_call_segment_idx`
    pub group_call_segment_idx: Option<i64>,
    /// field 330, wire `num_connected_participants`
    pub num_connected_participants: Option<i64>,
    /// field 331, wire `camera_off_count`
    pub camera_off_count: Option<i64>,
    /// field 334, wire `video_h264_time`
    pub video_h264_time: Option<i64>,
    /// field 335, wire `video_h265_time`
    pub video_h265_time: Option<i64>,
    /// field 337, wire `init_bwe_source`
    pub init_bwe_source: Option<INITBWESOURCE>,
    /// field 339, wire `his_info_could_be_used_for_init_bwe`
    pub his_info_could_be_used_for_init_bwe: Option<bool>,
    /// field 341, wire `used_init_tx_bitrate`
    pub used_init_tx_bitrate: Option<i64>,
    /// field 342, wire `his_based_initial_tx_bitrate`
    pub his_based_initial_tx_bitrate: Option<i64>,
    /// field 348, wire `video_sender_bwe_stddev`
    pub video_sender_bwe_stddev: Option<String>,
    /// field 350, wire `video_target_bitrate_reaches500kbps_t`
    pub video_target_bitrate_reaches500kbps_t: Option<String>,
    /// field 351, wire `video_target_bitrate_reaches1000kbps_t`
    pub video_target_bitrate_reaches1000kbps_t: Option<String>,
    /// field 356, wire `group_call_is_last_segment`
    pub group_call_is_last_segment: Option<bool>,
    /// field 357, wire `group_call_is_group_call_invitee`
    pub group_call_is_group_call_invitee: Option<bool>,
    /// field 358, wire `group_call_total_call_t_since_call_start`
    pub group_call_total_call_tsince_call_start: Option<String>,
    /// field 359, wire `group_call_total_p3_call_t_since_call_start`
    pub group_call_total_p3_call_tsince_call_start: Option<String>,
    /// field 360, wire `group_call_invite_count_since_call_start`
    pub group_call_invite_count_since_call_start: Option<i64>,
    /// field 361, wire `group_call_nack_count_since_call_start`
    pub group_call_nack_count_since_call_start: Option<i64>,
    /// field 363, wire `video_enc_time_overshoot10_perc_h264`
    pub video_enc_time_overshoot10_perc_h264: Option<String>,
    /// field 364, wire `video_enc_time_overshoot20_perc_h264`
    pub video_enc_time_overshoot20_perc_h264: Option<String>,
    /// field 365, wire `video_enc_time_overshoot40_perc_h264`
    pub video_enc_time_overshoot40_perc_h264: Option<String>,
    /// field 366, wire `video_enc_time_overshoot10_perc_h265`
    pub video_enc_time_overshoot10_perc_h265: Option<String>,
    /// field 367, wire `video_enc_time_overshoot20_perc_h265`
    pub video_enc_time_overshoot20_perc_h265: Option<String>,
    /// field 368, wire `video_enc_time_overshoot40_perc_h265`
    pub video_enc_time_overshoot40_perc_h265: Option<String>,
    /// field 369, wire `video_enc_time_overshoot10_perc_vp8`
    pub video_enc_time_overshoot10_perc_vp8: Option<String>,
    /// field 370, wire `video_enc_time_overshoot20_perc_vp8`
    pub video_enc_time_overshoot20_perc_vp8: Option<String>,
    /// field 371, wire `video_enc_time_overshoot40_perc_vp8`
    pub video_enc_time_overshoot40_perc_vp8: Option<String>,
    /// field 375, wire `video_enc_time_undershoot10_perc_h264`
    pub video_enc_time_undershoot10_perc_h264: Option<String>,
    /// field 376, wire `video_enc_time_undershoot20_perc_h264`
    pub video_enc_time_undershoot20_perc_h264: Option<String>,
    /// field 377, wire `video_enc_time_undershoot40_perc_h264`
    pub video_enc_time_undershoot40_perc_h264: Option<String>,
    /// field 378, wire `video_enc_time_undershoot10_perc_h265`
    pub video_enc_time_undershoot10_perc_h265: Option<String>,
    /// field 379, wire `video_enc_time_undershoot20_perc_h265`
    pub video_enc_time_undershoot20_perc_h265: Option<String>,
    /// field 380, wire `video_enc_time_undershoot40_perc_h265`
    pub video_enc_time_undershoot40_perc_h265: Option<String>,
    /// field 381, wire `video_enc_time_undershoot10_perc_vp8`
    pub video_enc_time_undershoot10_perc_vp8: Option<String>,
    /// field 382, wire `video_enc_time_undershoot20_perc_vp8`
    pub video_enc_time_undershoot20_perc_vp8: Option<String>,
    /// field 383, wire `video_enc_time_undershoot40_perc_vp8`
    pub video_enc_time_undershoot40_perc_vp8: Option<String>,
    /// field 387, wire `incoming_call_ui_action`
    pub incoming_call_ui_action: Option<INCOMINGCALLUIACTIONTYPE>,
    /// field 390, wire `video_avg_comb_psnr`
    pub video_avg_comb_psnr: Option<String>,
    /// field 394, wire `weak_wifi_switch_to_def_net_triggered_by_periodical_check`
    pub weak_wifi_switch_to_def_net_triggered_by_periodical_check: Option<i64>,
    /// field 395, wire `weak_wifi_switch_to_def_net_success_by_periodical_check`
    pub weak_wifi_switch_to_def_net_success_by_periodical_check: Option<i64>,
    /// field 396, wire `weak_wifi_switch_to_def_net_triggered`
    pub weak_wifi_switch_to_def_net_triggered: Option<i64>,
    /// field 397, wire `weak_wifi_switch_to_def_net_success`
    pub weak_wifi_switch_to_def_net_success: Option<i64>,
    /// field 398, wire `weak_wifi_switch_to_non_def_net_triggered`
    pub weak_wifi_switch_to_non_def_net_triggered: Option<i64>,
    /// field 399, wire `weak_wifi_switch_to_non_def_net_false_positive`
    pub weak_wifi_switch_to_non_def_net_false_positive: Option<i64>,
    /// field 400, wire `weak_wifi_switch_to_non_def_net_success`
    pub weak_wifi_switch_to_non_def_net_success: Option<i64>,
    /// field 401, wire `video_codec_scheme`
    pub video_codec_scheme: Option<i64>,
    /// field 402, wire `video_initial_codec_scheme`
    pub video_initial_codec_scheme: Option<i64>,
    /// field 405, wire `call_def_network`
    pub call_def_network: Option<CALLNETWORKMEDIUM>,
    /// field 408, wire `video_avg_scaling_psnr`
    pub video_avg_scaling_psnr: Option<String>,
    /// field 410, wire `video_avg_encoding_psnr`
    pub video_avg_encoding_psnr: Option<String>,
    /// field 412, wire `active_relay_protocol`
    pub active_relay_protocol: Option<i64>,
    /// field 413, wire `avg_tcp_conn_count`
    pub avg_tcp_conn_count: Option<i64>,
    /// field 414, wire `avg_tcp_conn_latency_in_msec`
    pub avg_tcp_conn_latency_in_msec: Option<String>,
    /// field 415, wire `last_conn_error_status`
    pub last_conn_error_status: Option<i64>,
    /// field 419, wire `video_dec_crc_mismatch_frames`
    pub video_dec_crc_mismatch_frames: Option<i64>,
    /// field 420, wire `video_max_target_bitrate`
    pub video_max_target_bitrate: Option<String>,
    /// field 421, wire `video_min_target_bitrate`
    pub video_min_target_bitrate: Option<String>,
    /// field 422, wire `call_messages_buffered_count`
    pub call_messages_buffered_count: Option<i64>,
    /// field 423, wire `relay_election_time_in_msec`
    pub relay_election_time_in_msec: Option<String>,
    /// field 424, wire `relay_bind_time_in_msec`
    pub relay_bind_time_in_msec: Option<String>,
    /// field 425, wire `video_max_tx_bitrate`
    pub video_max_tx_bitrate: Option<String>,
    /// field 426, wire `video_max_rx_bitrate`
    pub video_max_rx_bitrate: Option<String>,
    /// field 429, wire `weak_cellular_net_condition_detected`
    pub weak_cellular_net_condition_detected: Option<i64>,
    /// field 430, wire `weak_wifi_net_condition_detected`
    pub weak_wifi_net_condition_detected: Option<i64>,
    /// field 433, wire `video_target_bitrate_reaches250kbps_t`
    pub video_target_bitrate_reaches250kbps_t: Option<String>,
    /// field 434, wire `video_target_bitrate_reaches750kbps_t`
    pub video_target_bitrate_reaches750kbps_t: Option<String>,
    /// field 435, wire `video_target_bitrate_reaches1500kbps_t`
    pub video_target_bitrate_reaches1500kbps_t: Option<String>,
    /// field 436, wire `video_target_bitrate_reaches2000kbps_t`
    pub video_target_bitrate_reaches2000kbps_t: Option<String>,
    /// field 438, wire `call_reconnecting_state_count`
    pub call_reconnecting_state_count: Option<i64>,
    /// field 439, wire `group_call_caller_participant_count_at_call_start`
    pub group_call_caller_participant_count_at_call_start: Option<i64>,
    /// field 440, wire `telecom_framework_call_start_delay_t`
    pub telecom_framework_call_start_delay_t: Option<String>,
    /// field 441, wire `battery_low_triggered`
    pub battery_low_triggered: Option<bool>,
    /// field 442, wire `battery_drop_triggered`
    pub battery_drop_triggered: Option<bool>,
    /// field 443, wire `android_camera_api`
    pub android_camera_api: Option<ANDROIDCAMERAAPI>,
    /// field 444, wire `android_camera2_min_hardware_support_level`
    pub android_camera2_min_hardware_support_level: Option<ANDROIDCAMERA2SUPPORTLEVEL>,
    /// field 445, wire `caller_offer_to_decode_t`
    pub caller_offer_to_decode_t: Option<String>,
    /// field 446, wire `caller_vid_rtp_to_decode_t`
    pub caller_vid_rtp_to_decode_t: Option<String>,
    /// field 447, wire `callee_accept_to_decode_t`
    pub callee_accept_to_decode_t: Option<String>,
    /// field 448, wire `media_stream_setup_t`
    pub media_stream_setup_t: Option<String>,
    /// field 449, wire `total_bytes_on_non_def_cell`
    pub total_bytes_on_non_def_cell: Option<String>,
    /// field 450, wire `audio_total_bytes_on_non_def_cell`
    pub audio_total_bytes_on_non_def_cell: Option<String>,
    /// field 451, wire `video_total_bytes_on_non_def_cell`
    pub video_total_bytes_on_non_def_cell: Option<String>,
    /// field 452, wire `malformed_stanza_xpath`
    pub malformed_stanza_xpath: Option<String>,
    /// field 453, wire `video_update_encoder_failure_count`
    pub video_update_encoder_failure_count: Option<i64>,
    /// field 458, wire `video_tx_rtcp_rpsi`
    pub video_tx_rtcp_rpsi: Option<i64>,
    /// field 459, wire `video_rx_rtcp_rpsi`
    pub video_rx_rtcp_rpsi: Option<i64>,
    /// field 461, wire `video_dec_ltrp_frames_vp8`
    pub video_dec_ltrp_frames_vp8: Option<i64>,
    /// field 462, wire `video_dec_error_ltrp_frames_vp8`
    pub video_dec_error_ltrp_frames_vp8: Option<i64>,
    /// field 463, wire `video_enc_keyframes_vp8`
    pub video_enc_keyframes_vp8: Option<i64>,
    /// field 464, wire `video_enc_avg_size_key_frame_vp8`
    pub video_enc_avg_size_key_frame_vp8: Option<String>,
    /// field 466, wire `video_enc_avg_qp_key_frame_vp8`
    pub video_enc_avg_qp_key_frame_vp8: Option<String>,
    /// field 467, wire `video_enc_ltrp_frames_vp8`
    pub video_enc_ltrp_frames_vp8: Option<i64>,
    /// field 468, wire `video_enc_avg_size_ltrp_frame_vp8`
    pub video_enc_avg_size_ltrp_frame_vp8: Option<String>,
    /// field 470, wire `video_enc_avg_qp_ltrp_frame_vp8`
    pub video_enc_avg_qp_ltrp_frame_vp8: Option<String>,
    /// field 471, wire `video_enc_ltrp_frame_gen_failed_vp8`
    pub video_enc_ltrp_frame_gen_failed_vp8: Option<i64>,
    /// field 472, wire `video_enc_p_frame_prev_ref_vp8`
    pub video_enc_pframe_prev_ref_vp8: Option<i64>,
    /// field 473, wire `video_enc_avg_size_p_frame_prev_ref_vp8`
    pub video_enc_avg_size_pframe_prev_ref_vp8: Option<String>,
    /// field 475, wire `video_enc_avg_qp_p_frame_prev_ref_vp8`
    pub video_enc_avg_qp_pframe_prev_ref_vp8: Option<String>,
    /// field 476, wire `caller_in_contact`
    pub caller_in_contact: Option<bool>,
    /// field 477, wire `android_system_picture_in_picture_t`
    pub android_system_picture_in_picture_t: Option<String>,
    /// field 478, wire `video_dec_error_frames_ignore_consecutive`
    pub video_dec_error_frames_ignore_consecutive: Option<i64>,
    /// field 480, wire `video_dec_error_ltrp_frames_vp8_no_ltr`
    pub video_dec_error_ltrp_frames_vp8_no_ltr: Option<i64>,
    /// field 481, wire `relay_fallback_on_rx_data_from_relay`
    pub relay_fallback_on_rx_data_from_relay: Option<i64>,
    /// field 482, wire `relay_fallback_on_stop_rx_data_on_p2p`
    pub relay_fallback_on_stop_rx_data_on_p2p: Option<i64>,
    /// field 484, wire `video_ave_delay_ltrp`
    pub video_ave_delay_ltrp: Option<String>,
    /// field 485, wire `video_rx_kf_before_ltrp_after_rpsi`
    pub video_rx_kf_before_ltrp_after_rpsi: Option<i64>,
    /// field 486, wire `video_tx_pkt_rtcp_app`
    pub video_tx_pkt_rtcp_app: Option<i64>,
    /// field 487, wire `video_rx_pkt_rtcp_app`
    pub video_rx_pkt_rtcp_app: Option<i64>,
    /// field 488, wire `video_tx_bytes_rtcp_app`
    pub video_tx_bytes_rtcp_app: Option<String>,
    /// field 489, wire `video_rx_bytes_rtcp_app`
    pub video_rx_bytes_rtcp_app: Option<String>,
    /// field 494, wire `video_enc_ltrp_to_kf_fallback_vp8`
    pub video_enc_ltrp_to_kf_fallback_vp8: Option<i64>,
    /// field 495, wire `avg_record_cb_intv_t`
    pub avg_record_cb_intv_t: Option<String>,
    /// field 496, wire `video_capture_frame_overwrite_count`
    pub video_capture_frame_overwrite_count: Option<i64>,
    /// field 497, wire `android_telecom_time_spent_before_reject`
    pub android_telecom_time_spent_before_reject: Option<String>,
    /// field 498, wire `call_pending_calls_count`
    pub call_pending_calls_count: Option<i64>,
    /// field 499, wire `call_pending_calls_rejected_count`
    pub call_pending_calls_rejected_count: Option<i64>,
    /// field 500, wire `call_pending_calls_terminated_count`
    pub call_pending_calls_terminated_count: Option<i64>,
    /// field 501, wire `call_pending_calls_accepted_count`
    pub call_pending_calls_accepted_count: Option<i64>,
    /// field 502, wire `finished_ul_bwe`
    pub finished_ul_bwe: Option<bool>,
    /// field 503, wire `finished_dl_bwe`
    pub finished_dl_bwe: Option<bool>,
    /// field 505, wire `call_creator_hid`
    pub call_creator_hid: Option<String>,
    /// field 506, wire `one_side_init_tx_bitrate`
    pub one_side_init_tx_bitrate: Option<i64>,
    /// field 507, wire `one_side_init_rx_bitrate`
    pub one_side_init_rx_bitrate: Option<i64>,
    /// field 508, wire `one_side_rcvd_peer_rx_bitrate`
    pub one_side_rcvd_peer_rx_bitrate: Option<bool>,
    /// field 509, wire `one_side_min_peer_init_rx_bitrate`
    pub one_side_min_peer_init_rx_bitrate: Option<i64>,
    /// field 510, wire `pool_mem_usage`
    pub pool_mem_usage: Option<i64>,
    /// field 517, wire `call_ended_during_vid_freeze`
    pub call_ended_during_vid_freeze: Option<bool>,
    /// field 518, wire `call_ended_during_aud_freeze`
    pub call_ended_during_aud_freeze: Option<bool>,
    /// field 519, wire `created_from_group_call_downgrade`
    pub created_from_group_call_downgrade: Option<bool>,
    /// field 520, wire `video_tx_rtcp_npsi`
    pub video_tx_rtcp_npsi: Option<i64>,
    /// field 521, wire `video_rx_rtcp_npsi`
    pub video_rx_rtcp_npsi: Option<i64>,
    /// field 522, wire `p2p_success_count`
    pub p2p_success_count: Option<i64>,
    /// field 525, wire `on_mobile_data_saver`
    pub on_mobile_data_saver: Option<bool>,
    /// field 526, wire `video_render_init_freeze_t`
    pub video_render_init_freeze_t: Option<String>,
    /// field 527, wire `clamped_bwe`
    pub clamped_bwe: Option<bool>,
    /// field 528, wire `finished_overall_bwe`
    pub finished_overall_bwe: Option<bool>,
    /// field 529, wire `call_random_id`
    pub call_random_id: Option<String>,
    /// field 530, wire `time_on_non_def_network`
    pub time_on_non_def_network: Option<String>,
    /// field 531, wire `time_on_non_def_network_per_segment`
    pub time_on_non_def_network_per_segment: Option<String>,
    /// field 532, wire `failure_to_create_test_alt_socket`
    pub failure_to_create_test_alt_socket: Option<i64>,
    /// field 534, wire `failure_to_create_alt_socket`
    pub failure_to_create_alt_socket: Option<i64>,
    /// field 535, wire `loss_of_alt_socket`
    pub loss_of_alt_socket: Option<i64>,
    /// field 536, wire `triggered_but_data_limit_reached`
    pub triggered_but_data_limit_reached: Option<i64>,
    /// field 537, wire `data_limit_on_alt_network_reached`
    pub data_limit_on_alt_network_reached: Option<bool>,
    /// field 538, wire `switch_to_def_triggered_by_good_def_net`
    pub switch_to_def_triggered_by_good_def_net: Option<i64>,
    /// field 539, wire `has_restricted_settings_for_audio_calls`
    pub has_restricted_settings_for_audio_calls: Option<bool>,
    /// field 540, wire `on_wifi_at_start`
    pub on_wifi_at_start: Option<bool>,
    /// field 541, wire `system_notification_of_net_change`
    pub system_notification_of_net_change: Option<i64>,
    /// field 551, wire `transport_num_async_write_queued`
    pub transport_num_async_write_queued: Option<i64>,
    /// field 552, wire `transport_cur_time_in_msec_async_write_waiting_in_queue`
    pub transport_cur_time_in_msec_async_write_waiting_in_queue: Option<String>,
    /// field 553, wire `transport_total_time_in_msec_async_write_queue_to_dispatch`
    pub transport_total_time_in_msec_async_write_queue_to_dispatch: Option<String>,
    /// field 554, wire `transport_total_num_send_os_error`
    pub transport_total_num_send_os_error: Option<i64>,
    /// field 555, wire `transport_last_send_os_error`
    pub transport_last_send_os_error: Option<i64>,
    /// field 556, wire `transport_send_error_count`
    pub transport_send_error_count: Option<i64>,
    /// field 558, wire `max_event_queue_depth`
    pub max_event_queue_depth: Option<i64>,
    /// field 559, wire `num_vid_ul_auto_pause`
    pub num_vid_ul_auto_pause: Option<i64>,
    /// field 560, wire `num_vid_ul_auto_pause_fail`
    pub num_vid_ul_auto_pause_fail: Option<i64>,
    /// field 561, wire `num_vid_ul_auto_resume`
    pub num_vid_ul_auto_resume: Option<i64>,
    /// field 562, wire `num_vid_ul_auto_resume_fail`
    pub num_vid_ul_auto_resume_fail: Option<i64>,
    /// field 563, wire `num_vid_ul_auto_resume_reject_audio_lqm`
    pub num_vid_ul_auto_resume_reject_audio_lqm: Option<i64>,
    /// field 564, wire `num_vid_ul_auto_pause_reject_high_sending_rate`
    pub num_vid_ul_auto_pause_reject_high_sending_rate: Option<i64>,
    /// field 565, wire `num_vid_ul_auto_pause_reject_too_early`
    pub num_vid_ul_auto_pause_reject_too_early: Option<i64>,
    /// field 566, wire `num_vid_ul_auto_pause_user_action`
    pub num_vid_ul_auto_pause_user_action: Option<i64>,
    /// field 567, wire `num_critical_group_update_dropped`
    pub num_critical_group_update_dropped: Option<i64>,
    /// field 568, wire `video_render_sum_time_since_last_freeze`
    pub video_render_sum_time_since_last_freeze: Option<String>,
    /// field 569, wire `video_render_num_freezes`
    pub video_render_num_freezes: Option<i64>,
    /// field 570, wire `video_render_num_since_last_freeze5s`
    pub video_render_num_since_last_freeze5s: Option<i64>,
    /// field 571, wire `video_render_num_since_last_freeze10s`
    pub video_render_num_since_last_freeze10s: Option<i64>,
    /// field 572, wire `video_render_num_since_last_freeze30s`
    pub video_render_num_since_last_freeze30s: Option<i64>,
    /// field 573, wire `total_time_vid_ul_auto_pause`
    pub total_time_vid_ul_auto_pause: Option<String>,
    /// field 574, wire `num_vid_dl_auto_pause`
    pub num_vid_dl_auto_pause: Option<i64>,
    /// field 576, wire `num_vid_dl_auto_resume`
    pub num_vid_dl_auto_resume: Option<i64>,
    /// field 579, wire `num_vid_dl_auto_resume_reject_bad_audio`
    pub num_vid_dl_auto_resume_reject_bad_audio: Option<i64>,
    /// field 580, wire `transport_num_async_write_dispatched`
    pub transport_num_async_write_dispatched: Option<i64>,
    /// field 588, wire `call_offer_fanout_count`
    pub call_offer_fanout_count: Option<i64>,
    /// field 589, wire `vid_ul_auto_paused_at_call_end`
    pub vid_ul_auto_paused_at_call_end: Option<bool>,
    /// field 590, wire `vid_ul_time_since_auto_pause_at_call_end`
    pub vid_ul_time_since_auto_pause_at_call_end: Option<String>,
    /// field 591, wire `peer_transport`
    pub peer_transport: Option<CALLTRANSPORTTYPE>,
    /// field 592, wire `group_call_video_maximized_count`
    pub group_call_video_maximized_count: Option<i64>,
    /// field 593, wire `alloc_error_bitmap`
    pub alloc_error_bitmap: Option<i64>,
    /// field 594, wire `video_npsi_gen_failed`
    pub video_npsi_gen_failed: Option<i64>,
    /// field 595, wire `video_npsi_no_nack`
    pub video_npsi_no_nack: Option<i64>,
    /// field 598, wire `pcnt_poor_aud_lqm_before_pause`
    pub pcnt_poor_aud_lqm_before_pause: Option<String>,
    /// field 599, wire `pcnt_poor_aud_lqm_after_pause`
    pub pcnt_poor_aud_lqm_after_pause: Option<String>,
    /// field 600, wire `video_enc_num_error_ltr_hold_failed_vp8`
    pub video_enc_num_error_ltr_hold_failed_vp8: Option<i64>,
    /// field 608, wire `video_enc_regular_ltrp_time_in_msec`
    pub video_enc_regular_ltrp_time_in_msec: Option<String>,
    /// field 609, wire `video_enc_all_ltrp_time_in_msec`
    pub video_enc_all_ltrp_time_in_msec: Option<String>,
    /// field 616, wire `video_dec_num_skipped_frames_vp8`
    pub video_dec_num_skipped_frames_vp8: Option<i64>,
    /// field 618, wire `dtx_tx_duration_t`
    pub dtx_tx_duration_t: Option<String>,
    /// field 619, wire `dtx_tx_count`
    pub dtx_tx_count: Option<i64>,
    /// field 620, wire `video_tx_rtcp_fir_empty_jb`
    pub video_tx_rtcp_fir_empty_jb: Option<i64>,
    /// field 621, wire `video_rx_rtcp_fir`
    pub video_rx_rtcp_fir: Option<i64>,
    /// field 623, wire `conf_bridge_sampling_rate`
    pub conf_bridge_sampling_rate: Option<i64>,
    /// field 625, wire `num_out_of_order_critical_group_update`
    pub num_out_of_order_critical_group_update: Option<i64>,
    /// field 626, wire `call_enter_pip_mode_count`
    pub call_enter_pip_mode_count: Option<i64>,
    /// field 627, wire `call_pip_mode_t`
    pub call_pip_mode_t: Option<String>,
    /// field 643, wire `conservative_ramp_up_held_count`
    pub conservative_ramp_up_held_count: Option<i64>,
    /// field 644, wire `jb_avg_delay_uniform`
    pub jb_avg_delay_uniform: Option<String>,
    /// field 645, wire `audio_nack_req_pkts_sent`
    pub audio_nack_req_pkts_sent: Option<i64>,
    /// field 646, wire `audio_nack_req_pkts_recvd`
    pub audio_nack_req_pkts_recvd: Option<i64>,
    /// field 647, wire `audio_nack_rtp_retransmit_req_count`
    pub audio_nack_rtp_retransmit_req_count: Option<i64>,
    /// field 648, wire `audio_nack_rtp_retransmit_recvd_count`
    pub audio_nack_rtp_retransmit_recvd_count: Option<i64>,
    /// field 649, wire `audio_nack_rtp_retransmit_discard_count`
    pub audio_nack_rtp_retransmit_discard_count: Option<i64>,
    /// field 650, wire `audio_nack_rtp_retransmit_sent_count`
    pub audio_nack_rtp_retransmit_sent_count: Option<i64>,
    /// field 651, wire `audio_nack_rtp_retransmit_fail_count`
    pub audio_nack_rtp_retransmit_fail_count: Option<i64>,
    /// field 652, wire `neteq_expanded_frames`
    pub neteq_expanded_frames: Option<i64>,
    /// field 653, wire `neteq_accelerated_frames`
    pub neteq_accelerated_frames: Option<i64>,
    /// field 654, wire `video_peer_triggered_pause_count`
    pub video_peer_triggered_pause_count: Option<i64>,
    /// field 655, wire `warp_header_tx_total_bytes`
    pub warp_header_tx_total_bytes: Option<String>,
    /// field 656, wire `warp_header_rx_total_bytes`
    pub warp_header_rx_total_bytes: Option<String>,
    /// field 657, wire `sfu_uplink_avg_sender_bwe`
    pub sfu_uplink_avg_sender_bwe: Option<String>,
    /// field 658, wire `sfu_uplink_avg_remote_bwe`
    pub sfu_uplink_avg_remote_bwe: Option<String>,
    /// field 659, wire `sfu_uplink_avg_combined_bwe`
    pub sfu_uplink_avg_combined_bwe: Option<String>,
    /// field 660, wire `sfu_downlink_avg_sender_bwe`
    pub sfu_downlink_avg_sender_bwe: Option<String>,
    /// field 661, wire `sfu_downlink_avg_remote_bwe`
    pub sfu_downlink_avg_remote_bwe: Option<String>,
    /// field 662, wire `sfu_downlink_avg_combined_bwe`
    pub sfu_downlink_avg_combined_bwe: Option<String>,
    /// field 664, wire `sfu_uplink_avg_pkt_loss_pct`
    pub sfu_uplink_avg_pkt_loss_pct: Option<String>,
    /// field 667, wire `sfu_downlink_avg_pkt_loss_pct`
    pub sfu_downlink_avg_pkt_loss_pct: Option<String>,
    /// field 669, wire `sfu_uplink_min_rtt`
    pub sfu_uplink_min_rtt: Option<String>,
    /// field 670, wire `sfu_uplink_avg_rtt`
    pub sfu_uplink_avg_rtt: Option<String>,
    /// field 671, wire `sfu_uplink_max_rtt`
    pub sfu_uplink_max_rtt: Option<String>,
    /// field 672, wire `sfu_min_target_bitrate`
    pub sfu_min_target_bitrate: Option<String>,
    /// field 673, wire `sfu_avg_target_bitrate`
    pub sfu_avg_target_bitrate: Option<String>,
    /// field 674, wire `sfu_max_target_bitrate`
    pub sfu_max_target_bitrate: Option<String>,
    /// field 675, wire `audio_rtx_pkt_sent`
    pub audio_rtx_pkt_sent: Option<i64>,
    /// field 676, wire `audio_rtx_pkt_processed`
    pub audio_rtx_pkt_processed: Option<i64>,
    /// field 677, wire `audio_rtx_pkt_discarded`
    pub audio_rtx_pkt_discarded: Option<i64>,
    /// field 678, wire `audio_inband_fec_encoded`
    pub audio_inband_fec_encoded: Option<i64>,
    /// field 679, wire `audio_inband_fec_decoded`
    pub audio_inband_fec_decoded: Option<i64>,
    /// field 680, wire `video_dec_error_frames_h264`
    pub video_dec_error_frames_h264: Option<i64>,
    /// field 681, wire `video_dec_error_frames_vp8`
    pub video_dec_error_frames_vp8: Option<i64>,
    /// field 682, wire `video_dec_error_frames_outoforder`
    pub video_dec_error_frames_outoforder: Option<i64>,
    /// field 685, wire `video_enc_avg_size_all_ltrp_frame_vp8`
    pub video_enc_avg_size_all_ltrp_frame_vp8: Option<String>,
    /// field 686, wire `video_enc_deviation_all_ltrp_frame_vp8`
    pub video_enc_deviation_all_ltrp_frame_vp8: Option<String>,
    /// field 687, wire `video_enc_deviation_p_frame_prev_ref_vp8`
    pub video_enc_deviation_pframe_prev_ref_vp8: Option<String>,
    /// field 688, wire `vid_correct_retx_detect_pcnt`
    pub vid_correct_retx_detect_pcnt: Option<i64>,
    /// field 693, wire `vid_pkt_rx_state0`
    pub vid_pkt_rx_state0: Option<String>,
    /// field 698, wire `vid_num_retx_dropped`
    pub vid_num_retx_dropped: Option<i64>,
    /// field 699, wire `transport_overshoot10_perc_count`
    pub transport_overshoot10_perc_count: Option<i64>,
    /// field 700, wire `transport_overshoot20_perc_count`
    pub transport_overshoot20_perc_count: Option<i64>,
    /// field 701, wire `transport_overshoot40_perc_count`
    pub transport_overshoot40_perc_count: Option<i64>,
    /// field 702, wire `transport_overshoot_since_last1s_count`
    pub transport_overshoot_since_last1s_count: Option<i64>,
    /// field 703, wire `transport_overshoot_since_last5s_count`
    pub transport_overshoot_since_last5s_count: Option<i64>,
    /// field 704, wire `transport_overshoot_since_last10s_count`
    pub transport_overshoot_since_last10s_count: Option<i64>,
    /// field 705, wire `transport_overshoot_since_last15s_count`
    pub transport_overshoot_since_last15s_count: Option<i64>,
    /// field 706, wire `transport_overshoot_since_last30s_count`
    pub transport_overshoot_since_last30s_count: Option<i64>,
    /// field 707, wire `transport_overshoot_time_between_avg_s`
    pub transport_overshoot_time_between_avg_s: Option<String>,
    /// field 708, wire `transport_overshoot_longest_streak_s`
    pub transport_overshoot_longest_streak_s: Option<i64>,
    /// field 709, wire `transport_overshoot_streak_avg_s`
    pub transport_overshoot_streak_avg_s: Option<String>,
    /// field 710, wire `transport_undershoot10_perc_count`
    pub transport_undershoot10_perc_count: Option<i64>,
    /// field 711, wire `transport_undershoot20_perc_count`
    pub transport_undershoot20_perc_count: Option<i64>,
    /// field 712, wire `transport_undershoot40_perc_count`
    pub transport_undershoot40_perc_count: Option<i64>,
    /// field 713, wire `video_dec_error_frames_duplicate`
    pub video_dec_error_frames_duplicate: Option<i64>,
    /// field 714, wire `video_dec_error_frames_codec_switch`
    pub video_dec_error_frames_codec_switch: Option<i64>,
    /// field 715, wire `time_since_last_rtp_to_call_end_in_msec`
    pub time_since_last_rtp_to_call_end_in_msec: Option<String>,
    /// field 716, wire `vid_wrong_retx_detect_pcnt`
    pub vid_wrong_retx_detect_pcnt: Option<i64>,
    /// field 717, wire `num_vid_rc_dyn_cond_true`
    pub num_vid_rc_dyn_cond_true: Option<i64>,
    /// field 718, wire `time_vid_rc_dyn_cond_true`
    pub time_vid_rc_dyn_cond_true: Option<String>,
    /// field 719, wire `ave_time_bw_vid_rc_dyn_cond_true`
    pub ave_time_bw_vid_rc_dyn_cond_true: Option<String>,
    /// field 720, wire `video_tx_num_codec_switch`
    pub video_tx_num_codec_switch: Option<i64>,
    /// field 721, wire `video_rx_num_codec_switch`
    pub video_rx_num_codec_switch: Option<i64>,
    /// field 722, wire `audio_loss_period_count`
    pub audio_loss_period_count: Option<i64>,
    /// field 723, wire `total_audio_frame_loss_ms`
    pub total_audio_frame_loss_ms: Option<String>,
    /// field 724, wire `audio_frame_loss1x_ms`
    pub audio_frame_loss1x_ms: Option<String>,
    /// field 725, wire `audio_frame_loss2x_ms`
    pub audio_frame_loss2x_ms: Option<String>,
    /// field 726, wire `audio_frame_loss4x_ms`
    pub audio_frame_loss4x_ms: Option<String>,
    /// field 727, wire `audio_frame_loss8x_ms`
    pub audio_frame_loss8x_ms: Option<String>,
    /// field 728, wire `audio_rx_avg_fpp`
    pub audio_rx_avg_fpp: Option<String>,
    /// field 731, wire `video_enc_kf_err_codec_switch_t`
    pub video_enc_kf_err_codec_switch_t: Option<String>,
    /// field 733, wire `sfu_simulcast_enc_sched_event_success_update_count`
    pub sfu_simulcast_enc_sched_event_success_update_count: Option<i64>,
    /// field 735, wire `sfu_simulcast_enc_sched_event_error_count`
    pub sfu_simulcast_enc_sched_event_error_count: Option<i64>,
    /// field 737, wire `wa_voip_history_is_call_record_loaded`
    pub wa_voip_history_is_call_record_loaded: Option<bool>,
    /// field 738, wire `wa_voip_history_is_call_record_saved`
    pub wa_voip_history_is_call_record_saved: Option<bool>,
    /// field 739, wire `wa_voip_history_num_of_call_record_loaded`
    pub wa_voip_history_num_of_call_record_loaded: Option<i64>,
    /// field 741, wire `conservative_ramp_up_holding_t`
    pub conservative_ramp_up_holding_t: Option<String>,
    /// field 742, wire `conservative_ramp_up_ramping_up_t`
    pub conservative_ramp_up_ramping_up_t: Option<String>,
    /// field 743, wire `conservative_ramp_up_exploring_t`
    pub conservative_ramp_up_exploring_t: Option<String>,
    /// field 744, wire `sfu_simulcast_dec_sess_flip_count`
    pub sfu_simulcast_dec_sess_flip_count: Option<i64>,
    /// field 745, wire `warp_tx_pkt_error_count`
    pub warp_tx_pkt_error_count: Option<i64>,
    /// field 746, wire `warp_rx_pkt_error_count`
    pub warp_rx_pkt_error_count: Option<i64>,
    /// field 747, wire `skipped_bwe_cycles`
    pub skipped_bwe_cycles: Option<i64>,
    /// field 748, wire `skipped_bwa_cycles`
    pub skipped_bwa_cycles: Option<i64>,
    /// field 749, wire `switch_to_sfu`
    pub switch_to_sfu: Option<i64>,
    /// field 750, wire `switch_to_non_sfu`
    pub switch_to_non_sfu: Option<i64>,
    /// field 751, wire `audio_codec_encoded_fec_frames`
    pub audio_codec_encoded_fec_frames: Option<i64>,
    /// field 752, wire `audio_codec_encoded_voice_frames`
    pub audio_codec_encoded_voice_frames: Option<i64>,
    /// field 753, wire `audio_codec_encoded_non_voice_frames`
    pub audio_codec_encoded_non_voice_frames: Option<i64>,
    /// field 754, wire `audio_codec_received_fec_frames`
    pub audio_codec_received_fec_frames: Option<i64>,
    /// field 755, wire `audio_codec_decoded_fec_frames`
    pub audio_codec_decoded_fec_frames: Option<i64>,
    /// field 756, wire `audio_codec_decoded_plc_frames`
    pub audio_codec_decoded_plc_frames: Option<i64>,
    /// field 757, wire `vid_num_rx_retx`
    pub vid_num_rx_retx: Option<i64>,
    /// field 759, wire `combined_e2e_min_rtt`
    pub combined_e2e_min_rtt: Option<String>,
    /// field 760, wire `combined_e2e_avg_rtt`
    pub combined_e2e_avg_rtt: Option<String>,
    /// field 761, wire `combined_e2e_max_rtt`
    pub combined_e2e_max_rtt: Option<String>,
    /// field 762, wire `transport_srtp_rx_rejected_pkt_cnt`
    pub transport_srtp_rx_rejected_pkt_cnt: Option<i64>,
    /// field 763, wire `transport_srtp_rx_rejected_bitrate`
    pub transport_srtp_rx_rejected_bitrate: Option<String>,
    /// field 765, wire `camera_formats`
    pub camera_formats: Option<i64>,
    /// field 766, wire `sfu_simulcast_enc_error_bitmap`
    pub sfu_simulcast_enc_error_bitmap: Option<i64>,
    /// field 767, wire `sfu_simulcast_dec_sess_flip_error_count`
    pub sfu_simulcast_dec_sess_flip_error_count: Option<i64>,
    /// field 768, wire `sfu_simulcast_dec_sess_flip_error_bitmap`
    pub sfu_simulcast_dec_sess_flip_error_bitmap: Option<i64>,
    /// field 769, wire `wa_voip_history_is_initialized`
    pub wa_voip_history_is_initialized: Option<bool>,
    /// field 770, wire `wa_voip_history_save_call_record_condition_check_status`
    pub wa_voip_history_save_call_record_condition_check_status: Option<WAVOIPHISTORYSAVECALLRECORDCONDITIONCHECKSTATUS>,
    /// field 772, wire `transport_srtp_rx_rejected_dup_pkt_cnt`
    pub transport_srtp_rx_rejected_dup_pkt_cnt: Option<i64>,
    /// field 773, wire `transport_srtp_tx_max_pkt_size`
    pub transport_srtp_tx_max_pkt_size: Option<i64>,
    /// field 774, wire `transport_srtp_tx_failed_pkt_cnt`
    pub transport_srtp_tx_failed_pkt_cnt: Option<i64>,
    /// field 775, wire `jb_lost_empty_low_peer_bwe_per_sec`
    pub jb_lost_empty_low_peer_bwe_per_sec: Option<String>,
    /// field 776, wire `jb_lost_empty_low_to_high_peer_bwe_per_sec`
    pub jb_lost_empty_low_to_high_peer_bwe_per_sec: Option<String>,
    /// field 777, wire `jb_lost_empty_high_peer_bwe_per_sec`
    pub jb_lost_empty_high_peer_bwe_per_sec: Option<String>,
    /// field 778, wire `render_freeze_low_peer_bwe_t`
    pub render_freeze_low_peer_bwe_t: Option<String>,
    /// field 779, wire `render_freeze_low_to_high_peer_bwe_t`
    pub render_freeze_low_to_high_peer_bwe_t: Option<String>,
    /// field 780, wire `render_freeze_high_peer_bwe_t`
    pub render_freeze_high_peer_bwe_t: Option<String>,
    /// field 781, wire `sbwe_ceiling_count`
    pub sbwe_ceiling_count: Option<i64>,
    /// field 782, wire `sbwe_ceiling_pkt_loss_count`
    pub sbwe_ceiling_pkt_loss_count: Option<i64>,
    /// field 783, wire `sbwe_ceiling_congestion_count`
    pub sbwe_ceiling_congestion_count: Option<i64>,
    /// field 784, wire `sbwe_ceiling_rtt_congestion_count`
    pub sbwe_ceiling_rtt_congestion_count: Option<i64>,
    /// field 785, wire `sbwe_ceiling_zero_rtt_congestion_count`
    pub sbwe_ceiling_zero_rtt_congestion_count: Option<i64>,
    /// field 786, wire `sbwe_ceiling_missing_rtcp_congestion_count`
    pub sbwe_ceiling_missing_rtcp_congestion_count: Option<i64>,
    /// field 787, wire `sbwe_ceiling_no_new_data_received_congestion_count`
    pub sbwe_ceiling_no_new_data_received_congestion_count: Option<i64>,
    /// field 788, wire `sfu_uplink_sbwe_ceiling_count`
    pub sfu_uplink_sbwe_ceiling_count: Option<i64>,
    /// field 789, wire `sfu_uplink_sbwe_ceiling_pkt_loss_count`
    pub sfu_uplink_sbwe_ceiling_pkt_loss_count: Option<i64>,
    /// field 790, wire `sfu_uplink_sbwe_ceiling_congestion_count`
    pub sfu_uplink_sbwe_ceiling_congestion_count: Option<i64>,
    /// field 791, wire `sfu_uplink_sbwe_ceiling_rtt_congestion_count`
    pub sfu_uplink_sbwe_ceiling_rtt_congestion_count: Option<i64>,
    /// field 792, wire `sfu_uplink_sbwe_ceiling_zero_rtt_congestion_count`
    pub sfu_uplink_sbwe_ceiling_zero_rtt_congestion_count: Option<i64>,
    /// field 793, wire `sfu_uplink_sbwe_ceiling_missing_rtcp_congestion_count`
    pub sfu_uplink_sbwe_ceiling_missing_rtcp_congestion_count: Option<i64>,
    /// field 794, wire `sfu_uplink_sbwe_ceiling_no_new_data_received_congestion_count`
    pub sfu_uplink_sbwe_ceiling_no_new_data_received_congestion_count: Option<i64>,
    /// field 795, wire `sfu_downlink_sbwe_ceiling_count`
    pub sfu_downlink_sbwe_ceiling_count: Option<i64>,
    /// field 796, wire `sfu_downlink_sbwe_ceiling_pkt_loss_count`
    pub sfu_downlink_sbwe_ceiling_pkt_loss_count: Option<i64>,
    /// field 797, wire `sfu_downlink_sbwe_ceiling_congestion_count`
    pub sfu_downlink_sbwe_ceiling_congestion_count: Option<i64>,
    /// field 798, wire `sfu_downlink_sbwe_ceiling_rtt_congestion_count`
    pub sfu_downlink_sbwe_ceiling_rtt_congestion_count: Option<i64>,
    /// field 799, wire `sfu_downlink_sbwe_ceiling_zero_rtt_congestion_count`
    pub sfu_downlink_sbwe_ceiling_zero_rtt_congestion_count: Option<i64>,
    /// field 800, wire `sfu_downlink_sbwe_ceiling_missing_rtcp_congestion_count`
    pub sfu_downlink_sbwe_ceiling_missing_rtcp_congestion_count: Option<i64>,
    /// field 801, wire `sfu_downlink_sbwe_ceiling_no_new_data_received_congestion_count`
    pub sfu_downlink_sbwe_ceiling_no_new_data_received_congestion_count: Option<i64>,
    /// field 802, wire `oibwe_e2e_probing_time`
    pub oibwe_e2e_probing_time: Option<String>,
    /// field 803, wire `oibwe_oible_probing_time`
    pub oibwe_oible_probing_time: Option<String>,
    /// field 804, wire `oibwe_ul_probing_time`
    pub oibwe_ul_probing_time: Option<String>,
    /// field 805, wire `oibwe_dl_probing_time`
    pub oibwe_dl_probing_time: Option<String>,
    /// field 806, wire `history_based_bwe_enabled`
    pub history_based_bwe_enabled: Option<bool>,
    /// field 807, wire `history_based_bwe_activated`
    pub history_based_bwe_activated: Option<bool>,
    /// field 808, wire `history_based_bwe_success`
    pub history_based_bwe_success: Option<bool>,
    /// field 809, wire `history_based_bwe_video_tx_bitrate`
    pub history_based_bwe_video_tx_bitrate: Option<i64>,
    /// field 810, wire `video_dec_error_frames_sps_pps_missing_after_resolution_switch`
    pub video_dec_error_frames_sps_pps_missing_after_resolution_switch: Option<i64>,
    /// field 813, wire `sfu_peer_downlink_stddev_all_combined_bwe`
    pub sfu_peer_downlink_stddev_all_combined_bwe: Option<String>,
    /// field 817, wire `video_tx_total_bytes_hq`
    pub video_tx_total_bytes_hq: Option<String>,
    /// field 818, wire `video_tx_packets_hq`
    pub video_tx_packets_hq: Option<i64>,
    /// field 819, wire `video_tx_resend_packets_hq`
    pub video_tx_resend_packets_hq: Option<i64>,
    /// field 820, wire `video_tx_rtcp_pli_hq`
    pub video_tx_rtcp_pli_hq: Option<i64>,
    /// field 821, wire `video_tx_pkt_error_pct_hq`
    pub video_tx_pkt_error_pct_hq: Option<String>,
    /// field 823, wire `video_tx_bitrate_hq`
    pub video_tx_bitrate_hq: Option<String>,
    /// field 824, wire `video_max_tx_bitrate_hq`
    pub video_max_tx_bitrate_hq: Option<String>,
    /// field 825, wire `video_enc_avg_fps_hq`
    pub video_enc_avg_fps_hq: Option<String>,
    /// field 826, wire `video_enc_latency_hq`
    pub video_enc_latency_hq: Option<String>,
    /// field 827, wire `video_enc_avg_target_fps_hq`
    pub video_enc_avg_target_fps_hq: Option<String>,
    /// field 828, wire `video_avg_target_bitrate_hq`
    pub video_avg_target_bitrate_hq: Option<String>,
    /// field 829, wire `video_max_target_bitrate_hq`
    pub video_max_target_bitrate_hq: Option<String>,
    /// field 830, wire `video_min_target_bitrate_hq`
    pub video_min_target_bitrate_hq: Option<String>,
    /// field 833, wire `sfu_simulcast_avg_dec_sess_flip_time`
    pub sfu_simulcast_avg_dec_sess_flip_time: Option<String>,
    /// field 834, wire `wa_voip_history_ip_address_not_available`
    pub wa_voip_history_ip_address_not_available: Option<bool>,
    /// field 837, wire `sfu_simulcast_avg_enc_sched_event_update_time`
    pub sfu_simulcast_avg_enc_sched_event_update_time: Option<String>,
    /// field 838, wire `multiple_tx_rx_relays_in_use`
    pub multiple_tx_rx_relays_in_use: Option<bool>,
    /// field 839, wire `tx_relay_rebind_latency_ms`
    pub tx_relay_rebind_latency_ms: Option<String>,
    /// field 840, wire `tx_relay_reset_latency_ms`
    pub tx_relay_reset_latency_ms: Option<String>,
    /// field 841, wire `rx_relay_rebind_latency_ms`
    pub rx_relay_rebind_latency_ms: Option<String>,
    /// field 842, wire `rx_relay_reset_latency_ms`
    pub rx_relay_reset_latency_ms: Option<String>,
    /// field 843, wire `bi_dir_relay_rebind_latency_ms`
    pub bi_dir_relay_rebind_latency_ms: Option<String>,
    /// field 844, wire `bi_dir_relay_reset_latency_ms`
    pub bi_dir_relay_reset_latency_ms: Option<String>,
    /// field 846, wire `jb_non_speech_discards`
    pub jb_non_speech_discards: Option<String>,
    /// field 848, wire `call_end_reconnecting_soon_after_call_active`
    pub call_end_reconnecting_soon_after_call_active: Option<bool>,
    /// field 849, wire `camera_permission`
    pub camera_permission: Option<bool>,
    /// field 850, wire `camera_issues`
    pub camera_issues: Option<i64>,
    /// field 851, wire `camera_last_issue`
    pub camera_last_issue: Option<i64>,
    /// field 852, wire `camera_start_duration`
    pub camera_start_duration: Option<String>,
    /// field 853, wire `camera_stop_duration`
    pub camera_stop_duration: Option<String>,
    /// field 854, wire `camera_switch_duration`
    pub camera_switch_duration: Option<String>,
    /// field 855, wire `camera_switch_count`
    pub camera_switch_count: Option<i64>,
    /// field 856, wire `camera_start_failure_duration`
    pub camera_start_failure_duration: Option<String>,
    /// field 857, wire `camera_switch_failure_duration`
    pub camera_switch_failure_duration: Option<String>,
    /// field 858, wire `camera_stop_failure_count`
    pub camera_stop_failure_count: Option<i64>,
    /// field 859, wire `mic_permission`
    pub mic_permission: Option<bool>,
    /// field 860, wire `audio_device_issues`
    pub audio_device_issues: Option<i64>,
    /// field 861, wire `audio_device_last_issue`
    pub audio_device_last_issue: Option<i64>,
    /// field 862, wire `mic_start_duration`
    pub mic_start_duration: Option<String>,
    /// field 863, wire `mic_stop_duration`
    pub mic_stop_duration: Option<String>,
    /// field 864, wire `speaker_start_duration`
    pub speaker_start_duration: Option<String>,
    /// field 865, wire `speaker_stop_duration`
    pub speaker_stop_duration: Option<String>,
    /// field 866, wire `audio_device_switch_duration`
    pub audio_device_switch_duration: Option<String>,
    /// field 867, wire `audio_device_switch_count`
    pub audio_device_switch_count: Option<i64>,
    /// field 868, wire `oibwe_not_finished_when_call_active`
    pub oibwe_not_finished_when_call_active: Option<bool>,
    /// field 869, wire `call_end_reconnecting_before_relay_failover`
    pub call_end_reconnecting_before_relay_failover: Option<bool>,
    /// field 870, wire `call_end_reconnecting_soon_after_relay_failover`
    pub call_end_reconnecting_soon_after_relay_failover: Option<bool>,
    /// field 873, wire `sfu_simulcast_bwa_uplink_bottleneck_count`
    pub sfu_simulcast_bwa_uplink_bottleneck_count: Option<i64>,
    /// field 874, wire `sfu_simulcast_bwa_downlink_bottleneck_count`
    pub sfu_simulcast_bwa_downlink_bottleneck_count: Option<i64>,
    /// field 875, wire `call_end_reconnecting_before_p2p_failover`
    pub call_end_reconnecting_before_p2p_failover: Option<bool>,
    /// field 876, wire `call_end_reconnecting_soon_after_p2p_failover`
    pub call_end_reconnecting_soon_after_p2p_failover: Option<bool>,
    /// field 877, wire `call_end_reconnecting_before_network_change`
    pub call_end_reconnecting_before_network_change: Option<bool>,
    /// field 878, wire `call_end_reconnecting_soon_after_network_change`
    pub call_end_reconnecting_soon_after_network_change: Option<bool>,
    /// field 880, wire `sfu_rx_uplink_report_count`
    pub sfu_rx_uplink_report_count: Option<i64>,
    /// field 881, wire `sfu_first_rx_uplink_report_time`
    pub sfu_first_rx_uplink_report_time: Option<String>,
    /// field 882, wire `sfu_rx_participant_report_count`
    pub sfu_rx_participant_report_count: Option<i64>,
    /// field 883, wire `sfu_first_rx_participant_report_time`
    pub sfu_first_rx_participant_report_time: Option<String>,
    /// field 884, wire `high_peer_bwe_t`
    pub high_peer_bwe_t: Option<String>,
    /// field 885, wire `low_peer_bwe_t`
    pub low_peer_bwe_t: Option<String>,
    /// field 886, wire `low_to_high_peer_bwe_t`
    pub low_to_high_peer_bwe_t: Option<String>,
    /// field 889, wire `wa_short_freeze_count`
    pub wa_short_freeze_count: Option<i64>,
    /// field 890, wire `wa_reconnect_freeze_count`
    pub wa_reconnect_freeze_count: Option<i64>,
    /// field 891, wire `wa_long_freeze_count`
    pub wa_long_freeze_count: Option<i64>,
    /// field 892, wire `call_rx_pkt_loss_retransmit_pct`
    pub call_rx_pkt_loss_retransmit_pct: Option<String>,
    /// field 893, wire `joinable_new_ui`
    pub joinable_new_ui: Option<bool>,
    /// field 894, wire `joinable_during_call`
    pub joinable_during_call: Option<bool>,
    /// field 898, wire `traffic_shaper_avg_audio_queue_ms`
    pub traffic_shaper_avg_audio_queue_ms: Option<String>,
    /// field 899, wire `traffic_shaper_avg_video_queue_ms`
    pub traffic_shaper_avg_video_queue_ms: Option<String>,
    /// field 900, wire `started_init_bwe_probing`
    pub started_init_bwe_probing: Option<bool>,
    /// field 901, wire `video_init_rx_bitrate2s`
    pub video_init_rx_bitrate2s: Option<String>,
    /// field 902, wire `video_init_rx_bitrate4s`
    pub video_init_rx_bitrate4s: Option<String>,
    /// field 903, wire `video_init_rx_bitrate8s`
    pub video_init_rx_bitrate8s: Option<String>,
    /// field 904, wire `video_init_rx_bitrate16s`
    pub video_init_rx_bitrate16s: Option<String>,
    /// field 905, wire `video_render_init_freeze2s_t`
    pub video_render_init_freeze2s_t: Option<String>,
    /// field 906, wire `video_render_init_freeze4s_t`
    pub video_render_init_freeze4s_t: Option<String>,
    /// field 907, wire `video_render_init_freeze8s_t`
    pub video_render_init_freeze8s_t: Option<String>,
    /// field 908, wire `video_render_init_freeze16s_t`
    pub video_render_init_freeze16s_t: Option<String>,
    /// field 909, wire `dtx_tx_total_count`
    pub dtx_tx_total_count: Option<i64>,
    /// field 910, wire `dtx_tx_byte_frame_count`
    pub dtx_tx_byte_frame_count: Option<i64>,
    /// field 911, wire `dtx_rx_duration_t`
    pub dtx_rx_duration_t: Option<String>,
    /// field 912, wire `dtx_rx_count`
    pub dtx_rx_count: Option<i64>,
    /// field 913, wire `dtx_rx_total_count`
    pub dtx_rx_total_count: Option<i64>,
    /// field 914, wire `dtx_rx_byte_frame_count`
    pub dtx_rx_byte_frame_count: Option<i64>,
    /// field 916, wire `camera_start_to_first_frame_t`
    pub camera_start_to_first_frame_t: Option<String>,
    /// field 917, wire `sfu_bwa_self_ul_bw_used_pct`
    pub sfu_bwa_self_ul_bw_used_pct: Option<String>,
    /// field 918, wire `sfu_bwa_all_participant_ul_bw_used_pct`
    pub sfu_bwa_all_participant_ul_bw_used_pct: Option<String>,
    /// field 919, wire `sfu_bwa_all_participant_dl_bw_used_pct`
    pub sfu_bwa_all_participant_dl_bw_used_pct: Option<String>,
    /// field 920, wire `sfu_bwa_simulcast_disabled_cnt_reason_battery`
    pub sfu_bwa_simulcast_disabled_cnt_reason_battery: Option<i64>,
    /// field 921, wire `sfu_bwa_simulcast_disabled_cnt_reason_net_medium`
    pub sfu_bwa_simulcast_disabled_cnt_reason_net_medium: Option<i64>,
    /// field 923, wire `sfu_simulcast_bwa_candidate_cnt`
    pub sfu_simulcast_bwa_candidate_cnt: Option<i64>,
    /// field 925, wire `sfu_bwa_vid_enc_lq_stream_scheduled_t`
    pub sfu_bwa_vid_enc_lq_stream_scheduled_t: Option<String>,
    /// field 926, wire `sfu_bwa_vid_enc_hq_stream_scheduled_t`
    pub sfu_bwa_vid_enc_hq_stream_scheduled_t: Option<String>,
    /// field 927, wire `is_rejoin`
    pub is_rejoin: Option<bool>,
    /// field 928, wire `sfu_bwa_change_num_stream_count`
    pub sfu_bwa_change_num_stream_count: Option<i64>,
    /// field 929, wire `num_l1_errors`
    pub num_l1_errors: Option<i64>,
    /// field 931, wire `mic_start_to_first_callback_t`
    pub mic_start_to_first_callback_t: Option<String>,
    /// field 932, wire `speaker_start_to_first_callback_t`
    pub speaker_start_to_first_callback_t: Option<String>,
    /// field 933, wire `num_asserts`
    pub num_asserts: Option<i64>,
    /// field 934, wire `video_enc_input_frames_hq`
    pub video_enc_input_frames_hq: Option<i64>,
    /// field 935, wire `video_enc_output_frames_hq`
    pub video_enc_output_frames_hq: Option<i64>,
    /// field 936, wire `video_enc_error_frames_hq`
    pub video_enc_error_frames_hq: Option<i64>,
    /// field 937, wire `video_enc_drop_frames_hq`
    pub video_enc_drop_frames_hq: Option<i64>,
    /// field 938, wire `video_enc_discard_frame_hq`
    pub video_enc_discard_frame_hq: Option<i64>,
    /// field 939, wire `video_enc_keyframes_hq`
    pub video_enc_keyframes_hq: Option<i64>,
    /// field 940, wire `echo_cancelled_frame_count`
    pub echo_cancelled_frame_count: Option<i64>,
    /// field 941, wire `echo_estimated_frame_count`
    pub echo_estimated_frame_count: Option<i64>,
    /// field 942, wire `sfu_min_target_bitrate_hq`
    pub sfu_min_target_bitrate_hq: Option<String>,
    /// field 943, wire `sfu_avg_target_bitrate_hq`
    pub sfu_avg_target_bitrate_hq: Option<String>,
    /// field 944, wire `sfu_max_target_bitrate_hq`
    pub sfu_max_target_bitrate_hq: Option<String>,
    /// field 945, wire `is_rering`
    pub is_rering: Option<bool>,
    /// field 946, wire `group_call_rering_count_since_call_start`
    pub group_call_rering_count_since_call_start: Option<i64>,
    /// field 947, wire `group_call_rering_nack_count_since_call_start`
    pub group_call_rering_nack_count_since_call_start: Option<i64>,
    /// field 948, wire `call_end_reconnecting_before_relay_reset`
    pub call_end_reconnecting_before_relay_reset: Option<bool>,
    /// field 949, wire `call_end_reconnecting_soon_after_relay_reset`
    pub call_end_reconnecting_soon_after_relay_reset: Option<bool>,
    /// field 950, wire `sfu_simulcast_dec_avg_num_skipped_cached_pkt`
    pub sfu_simulcast_dec_avg_num_skipped_cached_pkt: Option<String>,
    /// field 951, wire `sfu_simulcast_dec_avg_num_replayed_cached_pkt`
    pub sfu_simulcast_dec_avg_num_replayed_cached_pkt: Option<String>,
    /// field 952, wire `sfu_simulcast_dec_avg_kf_recv_time_since_flip`
    pub sfu_simulcast_dec_avg_kf_recv_time_since_flip: Option<String>,
    /// field 953, wire `sfu_simulcast_dec_num_no_kf`
    pub sfu_simulcast_dec_num_no_kf: Option<i64>,
    /// field 954, wire `video_sender_bwe_diff_stddev`
    pub video_sender_bwe_diff_stddev: Option<String>,
    /// field 955, wire `sfu_uplink_sender_bwe_stddev`
    pub sfu_uplink_sender_bwe_stddev: Option<String>,
    /// field 956, wire `sfu_uplink_sender_bwe_diff_stddev`
    pub sfu_uplink_sender_bwe_diff_stddev: Option<String>,
    /// field 957, wire `sfu_downlink_sender_bwe_stddev`
    pub sfu_downlink_sender_bwe_stddev: Option<String>,
    /// field 958, wire `sfu_downlink_sender_bwe_diff_stddev`
    pub sfu_downlink_sender_bwe_diff_stddev: Option<String>,
    /// field 959, wire `sbwe_ramp_up_count`
    pub sbwe_ramp_up_count: Option<i64>,
    /// field 960, wire `sbwe_ramp_down_count`
    pub sbwe_ramp_down_count: Option<i64>,
    /// field 961, wire `sbwe_hold_count`
    pub sbwe_hold_count: Option<i64>,
    /// field 962, wire `sbwe_avg_uptrend`
    pub sbwe_avg_uptrend: Option<String>,
    /// field 963, wire `sbwe_avg_downtrend`
    pub sbwe_avg_downtrend: Option<String>,
    /// field 964, wire `sfu_uplink_sbwe_ramp_up_count`
    pub sfu_uplink_sbwe_ramp_up_count: Option<i64>,
    /// field 965, wire `sfu_uplink_sbwe_ramp_down_count`
    pub sfu_uplink_sbwe_ramp_down_count: Option<i64>,
    /// field 966, wire `sfu_uplink_sbwe_hold_count`
    pub sfu_uplink_sbwe_hold_count: Option<i64>,
    /// field 967, wire `sfu_uplink_sbwe_avg_uptrend`
    pub sfu_uplink_sbwe_avg_uptrend: Option<String>,
    /// field 968, wire `sfu_uplink_sbwe_avg_downtrend`
    pub sfu_uplink_sbwe_avg_downtrend: Option<String>,
    /// field 969, wire `sfu_downlink_sbwe_ramp_up_count`
    pub sfu_downlink_sbwe_ramp_up_count: Option<i64>,
    /// field 970, wire `sfu_downlink_sbwe_ramp_down_count`
    pub sfu_downlink_sbwe_ramp_down_count: Option<i64>,
    /// field 971, wire `sfu_downlink_sbwe_hold_count`
    pub sfu_downlink_sbwe_hold_count: Option<i64>,
    /// field 972, wire `sfu_downlink_sbwe_avg_uptrend`
    pub sfu_downlink_sbwe_avg_uptrend: Option<String>,
    /// field 973, wire `sfu_downlink_sbwe_avg_downtrend`
    pub sfu_downlink_sbwe_avg_downtrend: Option<String>,
    /// field 974, wire `conservative_mode_stopped`
    pub conservative_mode_stopped: Option<bool>,
    /// field 975, wire `sender_bwe_init_bitrate`
    pub sender_bwe_init_bitrate: Option<i64>,
    /// field 976, wire `is_pending_call`
    pub is_pending_call: Option<bool>,
    /// field 981, wire `simulcast_replay_video_render_freeze_t`
    pub simulcast_replay_video_render_freeze_t: Option<String>,
    /// field 982, wire `simulcast_replay_video_render_freeze2x_t`
    pub simulcast_replay_video_render_freeze2x_t: Option<String>,
    /// field 983, wire `simulcast_replay_video_render_freeze4x_t`
    pub simulcast_replay_video_render_freeze4x_t: Option<String>,
    /// field 984, wire `simulcast_replay_video_render_freeze8x_t`
    pub simulcast_replay_video_render_freeze8x_t: Option<String>,
    /// field 985, wire `num_dir_pj_asserts`
    pub num_dir_pj_asserts: Option<i64>,
    /// field 986, wire `l1_locations`
    pub l1_locations: Option<String>,
    /// field 987, wire `echo_speaker_mode_frame_count`
    pub echo_speaker_mode_frame_count: Option<i64>,
    /// field 988, wire `time_enc160w`
    pub time_enc160w: Option<String>,
    /// field 989, wire `time_enc320w`
    pub time_enc320w: Option<String>,
    /// field 990, wire `time_enc480w`
    pub time_enc480w: Option<String>,
    /// field 991, wire `time_enc640w`
    pub time_enc640w: Option<String>,
    /// field 992, wire `time_enc1280w`
    pub time_enc1280w: Option<String>,
    /// field 993, wire `num_res_switch`
    pub num_res_switch: Option<i64>,
    /// field 996, wire `jb_total_empty_periods`
    pub jb_total_empty_periods: Option<String>,
    /// field 997, wire `jb_empty_periods1x`
    pub jb_empty_periods1x: Option<String>,
    /// field 998, wire `jb_empty_periods2x`
    pub jb_empty_periods2x: Option<String>,
    /// field 999, wire `jb_empty_periods4x`
    pub jb_empty_periods4x: Option<String>,
    /// field 1000, wire `jb_empty_periods8x`
    pub jb_empty_periods8x: Option<String>,
    /// field 1002, wire `sfu_avg_lq_hq_target_bitrate_diff`
    pub sfu_avg_lq_hq_target_bitrate_diff: Option<String>,
    /// field 1003, wire `sfu_bwa_self_dl_bw_used_pct`
    pub sfu_bwa_self_dl_bw_used_pct: Option<String>,
    /// field 1007, wire `audio_num_piggyback_tx_pkt`
    pub audio_num_piggyback_tx_pkt: Option<i64>,
    /// field 1008, wire `audio_num_piggyback_rx_pkt`
    pub audio_num_piggyback_rx_pkt: Option<i64>,
    /// field 1009, wire `freeze_bwe_congestion_corr_pct`
    pub freeze_bwe_congestion_corr_pct: Option<String>,
    /// field 1010, wire `video_num_av_sync_discard_frames`
    pub video_num_av_sync_discard_frames: Option<i64>,
    /// field 1012, wire `jb_avg_target_size`
    pub jb_avg_target_size: Option<String>,
    /// field 1013, wire `group_accept_no_critical_group_update`
    pub group_accept_no_critical_group_update: Option<bool>,
    /// field 1014, wire `group_accept_to_critical_group_update_ms`
    pub group_accept_to_critical_group_update_ms: Option<String>,
    /// field 1015, wire `accepted_but_not_connected_time_spent_ms`
    pub accepted_but_not_connected_time_spent_ms: Option<String>,
    /// field 1016, wire `accept_ack_latency_ms`
    pub accept_ack_latency_ms: Option<String>,
    /// field 1017, wire `offer_ack_latency_ms`
    pub offer_ack_latency_ms: Option<String>,
    /// field 1018, wire `video_enc_time_spent_in_negative12_vp8_ms`
    pub video_enc_time_spent_in_negative12_vp8_ms: Option<String>,
    /// field 1019, wire `video_enc_time_spent_in_negative10_vp8_ms`
    pub video_enc_time_spent_in_negative10_vp8_ms: Option<String>,
    /// field 1020, wire `video_enc_time_spent_in_negative8_vp8_ms`
    pub video_enc_time_spent_in_negative8_vp8_ms: Option<String>,
    /// field 1021, wire `video_enc_time_spent_in_negative6_vp8_ms`
    pub video_enc_time_spent_in_negative6_vp8_ms: Option<String>,
    /// field 1022, wire `video_enc_time_spent_in_negative4_vp8_ms`
    pub video_enc_time_spent_in_negative4_vp8_ms: Option<String>,
    /// field 1029, wire `num_render_skip_green_frame`
    pub num_render_skip_green_frame: Option<i64>,
    /// field 1038, wire `transport_srtp_rx_max_pkt_size`
    pub transport_srtp_rx_max_pkt_size: Option<i64>,
    /// field 1039, wire `video_ahead_num_av_sync_discard_frames`
    pub video_ahead_num_av_sync_discard_frames: Option<i64>,
    /// field 1040, wire `video_behind_num_av_sync_discard_frames`
    pub video_behind_num_av_sync_discard_frames: Option<i64>,
    /// field 1045, wire `video_enc_restart_res_change`
    pub video_enc_restart_res_change: Option<i64>,
    /// field 1046, wire `video_enc_restart_preset_change`
    pub video_enc_restart_preset_change: Option<i64>,
    /// field 1047, wire `avg_enc_restart_interval_t`
    pub avg_enc_restart_interval_t: Option<String>,
    /// field 1048, wire `avg_enc_restart_and_kf_gen_t`
    pub avg_enc_restart_and_kf_gen_t: Option<String>,
    /// field 1049, wire `video_enc_fatal_error_num`
    pub video_enc_fatal_error_num: Option<i64>,
    /// field 1050, wire `video_enc_modify_num`
    pub video_enc_modify_num: Option<i64>,
    /// field 1051, wire `freeze_ahead_bwe_congestion_corr_pct`
    pub freeze_ahead_bwe_congestion_corr_pct: Option<String>,
    /// field 1052, wire `num_connected_peers`
    pub num_connected_peers: Option<i64>,
    /// field 1053, wire `num_outgoing_ringing_peers`
    pub num_outgoing_ringing_peers: Option<i64>,
    /// field 1054, wire `num_invited_participants`
    pub num_invited_participants: Option<i64>,
    /// field 1055, wire `android_audio_route_mismatch`
    pub android_audio_route_mismatch: Option<bool>,
    /// field 1056, wire `switch_to_simulcast`
    pub switch_to_simulcast: Option<i64>,
    /// field 1057, wire `switch_to_non_simulcast`
    pub switch_to_non_simulcast: Option<i64>,
    /// field 1058, wire `transport_splitter_tx_err_cnt`
    pub transport_splitter_tx_err_cnt: Option<i64>,
    /// field 1059, wire `transport_splitter_rx_err_cnt`
    pub transport_splitter_rx_err_cnt: Option<i64>,
    /// field 1060, wire `prev_call_test_bucket`
    pub prev_call_test_bucket: Option<String>,
    /// field 1061, wire `vid_jb_lost`
    pub vid_jb_lost: Option<String>,
    /// field 1063, wire `vid_jb_discards`
    pub vid_jb_discards: Option<String>,
    /// field 1064, wire `vid_jb_empties`
    pub vid_jb_empties: Option<String>,
    /// field 1065, wire `vid_jb_gets`
    pub vid_jb_gets: Option<String>,
    /// field 1066, wire `vid_jb_puts`
    pub vid_jb_puts: Option<String>,
    /// field 1067, wire `vid_jb_resets`
    pub vid_jb_resets: Option<String>,
    /// field 1073, wire `sfu_high_ul_pkt_loss_at_congestion`
    pub sfu_high_ul_pkt_loss_at_congestion: Option<i64>,
    /// field 1074, wire `sfu_high_dl_pkt_loss_at_congestion`
    pub sfu_high_dl_pkt_loss_at_congestion: Option<i64>,
    /// field 1075, wire `sfu_balanced_pkt_loss_at_congestion`
    pub sfu_balanced_pkt_loss_at_congestion: Option<i64>,
    /// field 1077, wire `sfu_high_ul_rtt_at_congestion`
    pub sfu_high_ul_rtt_at_congestion: Option<i64>,
    /// field 1078, wire `sfu_high_dl_rtt_at_congestion`
    pub sfu_high_dl_rtt_at_congestion: Option<i64>,
    /// field 1079, wire `sfu_balanced_rtt_at_congestion`
    pub sfu_balanced_rtt_at_congestion: Option<i64>,
    /// field 1081, wire `jb_voice_frames`
    pub jb_voice_frames: Option<i64>,
    /// field 1082, wire `dtx_tx_total_frame_count`
    pub dtx_tx_total_frame_count: Option<i64>,
    /// field 1083, wire `dtx_rx_total_frame_count`
    pub dtx_rx_total_frame_count: Option<i64>,
    /// field 1084, wire `video_dec_fatal_error_num`
    pub video_dec_fatal_error_num: Option<i64>,
    /// field 1085, wire `max_connected_participants`
    pub max_connected_participants: Option<i64>,
    /// field 1086, wire `jb_avg_disorder_target_size`
    pub jb_avg_disorder_target_size: Option<String>,
    /// field 1087, wire `jb_max_disorder_target_size`
    pub jb_max_disorder_target_size: Option<String>,
    /// field 1088, wire `zed_file_write_max_latency`
    pub zed_file_write_max_latency: Option<String>,
    /// field 1089, wire `wav_file_write_max_latency`
    pub wav_file_write_max_latency: Option<String>,
    /// field 1090, wire `is_linked_group_call`
    pub is_linked_group_call: Option<bool>,
    /// field 1091, wire `sfu_avg_ul_plr_at_high_ul_congestion`
    pub sfu_avg_ul_plr_at_high_ul_congestion: Option<String>,
    /// field 1092, wire `sfu_avg_dl_plr_at_high_ul_congestion`
    pub sfu_avg_dl_plr_at_high_ul_congestion: Option<String>,
    /// field 1093, wire `sfu_avg_ul_plr_at_high_dl_congestion`
    pub sfu_avg_ul_plr_at_high_dl_congestion: Option<String>,
    /// field 1094, wire `sfu_avg_dl_plr_at_high_dl_congestion`
    pub sfu_avg_dl_plr_at_high_dl_congestion: Option<String>,
    /// field 1095, wire `sfu_avg_ul_plr_at_balanced_congestion`
    pub sfu_avg_ul_plr_at_balanced_congestion: Option<String>,
    /// field 1096, wire `sfu_avg_dl_plr_at_balanced_congestion`
    pub sfu_avg_dl_plr_at_balanced_congestion: Option<String>,
    /// field 1097, wire `sfu_avg_self_rtt_at_high_self_congestion`
    pub sfu_avg_self_rtt_at_high_self_congestion: Option<i64>,
    /// field 1098, wire `sfu_avg_peer_rtt_at_high_self_congestion`
    pub sfu_avg_peer_rtt_at_high_self_congestion: Option<i64>,
    /// field 1099, wire `sfu_avg_self_rtt_at_high_peer_congestion`
    pub sfu_avg_self_rtt_at_high_peer_congestion: Option<i64>,
    /// field 1100, wire `sfu_avg_peer_rtt_at_high_peer_congestion`
    pub sfu_avg_peer_rtt_at_high_peer_congestion: Option<i64>,
    /// field 1101, wire `sfu_avg_self_rtt_at_balanced_congestion`
    pub sfu_avg_self_rtt_at_balanced_congestion: Option<i64>,
    /// field 1102, wire `sfu_avg_peer_rtt_at_balanced_congestion`
    pub sfu_avg_peer_rtt_at_balanced_congestion: Option<i64>,
    /// field 1103, wire `sbwe_global_min_rtt_congestion_count`
    pub sbwe_global_min_rtt_congestion_count: Option<i64>,
    /// field 1104, wire `sbwe_min_rtt_ema_congestion_count`
    pub sbwe_min_rtt_ema_congestion_count: Option<i64>,
    /// field 1106, wire `sbwe_ceiling_receive_side_count`
    pub sbwe_ceiling_receive_side_count: Option<i64>,
    /// field 1109, wire `app_in_background_during_call`
    pub app_in_background_during_call: Option<bool>,
    /// field 1110, wire `sfu_rx_bandwidth_report_count`
    pub sfu_rx_bandwidth_report_count: Option<i64>,
    /// field 1111, wire `sfu_first_rx_bandwidth_report_time`
    pub sfu_first_rx_bandwidth_report_time: Option<String>,
    /// field 1114, wire `bwa_vid_disabling_candidate`
    pub bwa_vid_disabling_candidate: Option<bool>,
    /// field 1115, wire `bwa_vid_disabling_tx_candidate_duration`
    pub bwa_vid_disabling_tx_candidate_duration: Option<String>,
    /// field 1116, wire `bwa_vid_disabling_rx_candidate_duration`
    pub bwa_vid_disabling_rx_candidate_duration: Option<String>,
    /// field 1117, wire `warp_mi_tx_pkt_error_count`
    pub warp_mi_tx_pkt_error_count: Option<i64>,
    /// field 1118, wire `warp_mi_rx_pkt_error_count`
    pub warp_mi_rx_pkt_error_count: Option<i64>,
    /// field 1119, wire `aud_stream_mix_pct`
    pub aud_stream_mix_pct: Option<String>,
    /// field 1120, wire `log_sample_ratio`
    pub log_sample_ratio: Option<i64>,
    /// field 1121, wire `vid_avg_bursty_pkt_loss_length`
    pub vid_avg_bursty_pkt_loss_length: Option<String>,
    /// field 1122, wire `vid_avg_random_pkt_loss_length`
    pub vid_avg_random_pkt_loss_length: Option<String>,
    /// field 1123, wire `vid_bursty_pkt_loss_time`
    pub vid_bursty_pkt_loss_time: Option<String>,
    /// field 1124, wire `vid_num_rand_to_bursty`
    pub vid_num_rand_to_bursty: Option<i64>,
    /// field 1125, wire `vid_random_pkt_loss_time`
    pub vid_random_pkt_loss_time: Option<String>,
    /// field 1126, wire `total_aqs_msg_sent`
    pub total_aqs_msg_sent: Option<i64>,
    /// field 1127, wire `lobby_visible_t`
    pub lobby_visible_t: Option<String>,
    /// field 1128, wire `nse_enabled`
    pub nse_enabled: Option<bool>,
    /// field 1129, wire `nse_offline_queue_ms`
    pub nse_offline_queue_ms: Option<String>,
    /// field 1130, wire `received_by_nse`
    pub received_by_nse: Option<bool>,
    /// field 1131, wire `camera_pause_t`
    pub camera_pause_t: Option<String>,
    /// field 1132, wire `video_render_pause_t`
    pub video_render_pause_t: Option<String>,
    /// field 1133, wire `sbwe_highest_rtt_congestion_count`
    pub sbwe_highest_rtt_congestion_count: Option<i64>,
    /// field 1134, wire `sbwe_ramp_up_pause_count`
    pub sbwe_ramp_up_pause_count: Option<i64>,
    /// field 1135, wire `network_failover_triggered_count`
    pub network_failover_triggered_count: Option<i64>,
    /// field 1136, wire `voip_params_compressed_size`
    pub voip_params_compressed_size: Option<i64>,
    /// field 1137, wire `voip_params_uncompressed_size`
    pub voip_params_uncompressed_size: Option<i64>,
    /// field 1138, wire `audio_play_cb_interval_gt_default_cnt`
    pub audio_play_cb_interval_gt_default_cnt: Option<i64>,
    /// field 1139, wire `audio_play_cb_latency_gte_max_cnt`
    pub audio_play_cb_latency_gte_max_cnt: Option<i64>,
    /// field 1140, wire `rekey_time`
    pub rekey_time: Option<i64>,
    /// field 1141, wire `transport_srtcp_rx_rejected_pkt_cnt`
    pub transport_srtcp_rx_rejected_pkt_cnt: Option<i64>,
    /// field 1142, wire `call_end_frame_loss_ms`
    pub call_end_frame_loss_ms: Option<String>,
    /// field 1144, wire `v2v_audio_frame_loss2x_ms`
    pub v2v_audio_frame_loss2x_ms: Option<String>,
    /// field 1146, wire `v2v_audio_frame_loss8x_ms`
    pub v2v_audio_frame_loss8x_ms: Option<String>,
    /// field 1147, wire `v2v_audio_loss_period_count`
    pub v2v_audio_loss_period_count: Option<i64>,
    /// field 1148, wire `v2v_total_audio_frame_loss_ms`
    pub v2v_total_audio_frame_loss_ms: Option<String>,
    /// field 1149, wire `is_call_full`
    pub is_call_full: Option<bool>,
    /// field 1150, wire `used_ipv4_count`
    pub used_ipv4_count: Option<i64>,
    /// field 1151, wire `used_ipv6_count`
    pub used_ipv6_count: Option<i64>,
    /// field 1152, wire `avg_play_cb_intv_t`
    pub avg_play_cb_intv_t: Option<String>,
    /// field 1154, wire `warp_relay_change_detect_count`
    pub warp_relay_change_detect_count: Option<i64>,
    /// field 1155, wire `call_replayer_id`
    pub call_replayer_id: Option<String>,
    /// field 1157, wire `call_init_rx_pkt_loss_pct3s`
    pub call_init_rx_pkt_loss_pct3s: Option<String>,
    /// field 1158, wire `sfu_downlink_init_combined_bwe3s`
    pub sfu_downlink_init_combined_bwe3s: Option<String>,
    /// field 1159, wire `sfu_downlink_init_pkt_loss_pct3s`
    pub sfu_downlink_init_pkt_loss_pct3s: Option<String>,
    /// field 1160, wire `sfu_uplink_init_combined_bwe3s`
    pub sfu_uplink_init_combined_bwe3s: Option<String>,
    /// field 1161, wire `sfu_uplink_init_pkt_loss_pct3s`
    pub sfu_uplink_init_pkt_loss_pct3s: Option<String>,
    /// field 1162, wire `wa_voip_history_get_video_tx_bitrate_by_self_and_peer_ip_str_result`
    pub wa_voip_history_get_video_tx_bitrate_by_self_and_peer_ip_str_result: Option<i64>,
    /// field 1163, wire `wa_voip_history_get_video_tx_bitrate_by_self_and_peer_ip_str_success`
    pub wa_voip_history_get_video_tx_bitrate_by_self_and_peer_ip_str_success: Option<bool>,
    /// field 1164, wire `wa_voip_history_get_video_tx_bitrate_by_self_ip_str_result`
    pub wa_voip_history_get_video_tx_bitrate_by_self_ip_str_result: Option<i64>,
    /// field 1165, wire `wa_voip_history_get_video_tx_bitrate_by_self_ip_str_success`
    pub wa_voip_history_get_video_tx_bitrate_by_self_ip_str_success: Option<bool>,
    /// field 1166, wire `wa_voip_history_num_of_call_record_found_by_matching_self_and_peer_ip_str`
    pub wa_voip_history_num_of_call_record_found_by_matching_self_and_peer_ip_str: Option<i64>,
    /// field 1167, wire `wa_voip_history_num_of_call_record_found_by_matching_self_ip_str`
    pub wa_voip_history_num_of_call_record_found_by_matching_self_ip_str: Option<i64>,
    /// field 1168, wire `rx_alloc_resp_no_matching_tid`
    pub rx_alloc_resp_no_matching_tid: Option<i64>,
    /// field 1169, wire `mute_not_supported_count`
    pub mute_not_supported_count: Option<i64>,
    /// field 1170, wire `mute_req_already_muted_count`
    pub mute_req_already_muted_count: Option<i64>,
    /// field 1171, wire `mute_req_timeouts_count`
    pub mute_req_timeouts_count: Option<i64>,
    /// field 1172, wire `peers_mute_succ_count`
    pub peers_mute_succ_count: Option<i64>,
    /// field 1173, wire `peers_rejected_mute_req_count`
    pub peers_rejected_mute_req_count: Option<i64>,
    /// field 1174, wire `reject_mute_req_count`
    pub reject_mute_req_count: Option<i64>,
    /// field 1175, wire `self_mute_success_count`
    pub self_mute_success_count: Option<i64>,
    /// field 1176, wire `self_unmute_after_mute_req_count`
    pub self_unmute_after_mute_req_count: Option<i64>,
    /// field 1177, wire `audio_codec_encoded_throttled_voice_frames`
    pub audio_codec_encoded_throttled_voice_frames: Option<i64>,
    /// field 1178, wire `video_retx_rtcp_nack`
    pub video_retx_rtcp_nack: Option<i64>,
    /// field 1179, wire `video_retx_rtcp_pli`
    pub video_retx_rtcp_pli: Option<i64>,
    /// field 1181, wire `video_rx_rtcp_nack_dropped`
    pub video_rx_rtcp_nack_dropped: Option<i64>,
    /// field 1182, wire `video_rx_rtcp_pli_dropped`
    pub video_rx_rtcp_pli_dropped: Option<i64>,
    /// field 1184, wire `audio_nack_hbh_enabled`
    pub audio_nack_hbh_enabled: Option<bool>,
    /// field 1185, wire `video_nack_hbh_enabled`
    pub video_nack_hbh_enabled: Option<bool>,
    /// field 1186, wire `afl_dis_prefetch_failure1x`
    pub afl_dis_prefetch_failure1x: Option<String>,
    /// field 1187, wire `afl_dis_prefetch_failure2x`
    pub afl_dis_prefetch_failure2x: Option<String>,
    /// field 1188, wire `afl_dis_prefetch_failure4x`
    pub afl_dis_prefetch_failure4x: Option<String>,
    /// field 1189, wire `afl_dis_prefetch_failure8x`
    pub afl_dis_prefetch_failure8x: Option<String>,
    /// field 1190, wire `afl_dis_prefetch_failure_total`
    pub afl_dis_prefetch_failure_total: Option<String>,
    /// field 1191, wire `afl_dis_prefetch_success1x`
    pub afl_dis_prefetch_success1x: Option<String>,
    /// field 1192, wire `afl_dis_prefetch_success2x`
    pub afl_dis_prefetch_success2x: Option<String>,
    /// field 1193, wire `afl_dis_prefetch_success4x`
    pub afl_dis_prefetch_success4x: Option<String>,
    /// field 1194, wire `afl_dis_prefetch_success8x`
    pub afl_dis_prefetch_success8x: Option<String>,
    /// field 1195, wire `afl_dis_prefetch_success_total`
    pub afl_dis_prefetch_success_total: Option<String>,
    /// field 1196, wire `afl_nack_failure1x`
    pub afl_nack_failure1x: Option<String>,
    /// field 1197, wire `afl_nack_failure2x`
    pub afl_nack_failure2x: Option<String>,
    /// field 1198, wire `afl_nack_failure4x`
    pub afl_nack_failure4x: Option<String>,
    /// field 1199, wire `afl_nack_failure8x`
    pub afl_nack_failure8x: Option<String>,
    /// field 1200, wire `afl_nack_failure_total`
    pub afl_nack_failure_total: Option<String>,
    /// field 1201, wire `afl_nack_success1x`
    pub afl_nack_success1x: Option<String>,
    /// field 1202, wire `afl_nack_success2x`
    pub afl_nack_success2x: Option<String>,
    /// field 1203, wire `afl_nack_success4x`
    pub afl_nack_success4x: Option<String>,
    /// field 1204, wire `afl_nack_success8x`
    pub afl_nack_success8x: Option<String>,
    /// field 1205, wire `afl_nack_success_total`
    pub afl_nack_success_total: Option<String>,
    /// field 1206, wire `afl_other1x`
    pub afl_other1x: Option<String>,
    /// field 1207, wire `afl_other2x`
    pub afl_other2x: Option<String>,
    /// field 1208, wire `afl_other4x`
    pub afl_other4x: Option<String>,
    /// field 1209, wire `afl_other8x`
    pub afl_other8x: Option<String>,
    /// field 1210, wire `afl_other_total`
    pub afl_other_total: Option<String>,
    /// field 1211, wire `afl_pure_loss1x`
    pub afl_pure_loss1x: Option<String>,
    /// field 1212, wire `afl_pure_loss2x`
    pub afl_pure_loss2x: Option<String>,
    /// field 1213, wire `afl_pure_loss4x`
    pub afl_pure_loss4x: Option<String>,
    /// field 1214, wire `afl_pure_loss8x`
    pub afl_pure_loss8x: Option<String>,
    /// field 1215, wire `afl_pure_loss_total`
    pub afl_pure_loss_total: Option<String>,
    /// field 1216, wire `video_enc_avg_qp_key_frame_openh264`
    pub video_enc_avg_qp_key_frame_openh264: Option<String>,
    /// field 1218, wire `video_enc_avg_qp_p_frame_prev_ref_openh264`
    pub video_enc_avg_qp_pframe_prev_ref_openh264: Option<String>,
    /// field 1219, wire `hbh_srtcp_rx_rejected_pkt_cnt_from_old_relay`
    pub hbh_srtcp_rx_rejected_pkt_cnt_from_old_relay: Option<i64>,
    /// field 1220, wire `avg_cpu_utilization_pct`
    pub avg_cpu_utilization_pct: Option<String>,
    /// field 1222, wire `bound_socket_ip_address_is_invalid`
    pub bound_socket_ip_address_is_invalid: Option<i64>,
    /// field 1223, wire `cpu_over_utilization_pct`
    pub cpu_over_utilization_pct: Option<String>,
    /// field 1224, wire `time_cpu_utilization_sampling_in_ms`
    pub time_cpu_utilization_sampling_in_ms: Option<String>,
    /// field 1225, wire `call_peer_test_bucket`
    pub call_peer_test_bucket: Option<String>,
    /// field 1226, wire `connected_to_car`
    pub connected_to_car: Option<bool>,
    /// field 1227, wire `is_os_microphone_mute`
    pub is_os_microphone_mute: Option<bool>,
    /// field 1228, wire `pstn_call_exists`
    pub pstn_call_exists: Option<bool>,
    /// field 1248, wire `hbh_srtcp_rx_success_nack_pkt_cnt`
    pub hbh_srtcp_rx_success_nack_pkt_cnt: Option<i64>,
    /// field 1249, wire `hbh_srtcp_rx_success_remb_pkt_cnt`
    pub hbh_srtcp_rx_success_remb_pkt_cnt: Option<i64>,
    /// field 1250, wire `hbh_srtcp_rx_success_sbwa_pkt_cnt`
    pub hbh_srtcp_rx_success_sbwa_pkt_cnt: Option<i64>,
    /// field 1251, wire `hbh_srtcp_rx_success_sp_pkt_cnt`
    pub hbh_srtcp_rx_success_sp_pkt_cnt: Option<i64>,
    /// field 1254, wire `hbh_srtcp_tx_nack_pkt_cnt`
    pub hbh_srtcp_tx_nack_pkt_cnt: Option<i64>,
    /// field 1256, wire `hbh_srtcp_rx_bytes`
    pub hbh_srtcp_rx_bytes: Option<i64>,
    /// field 1257, wire `hbh_srtcp_rx_rej_auth_fail`
    pub hbh_srtcp_rx_rej_auth_fail: Option<i64>,
    /// field 1258, wire `hbh_srtcp_rx_rej_einval`
    pub hbh_srtcp_rx_rej_einval: Option<i64>,
    /// field 1259, wire `hbh_srtcp_tx_bytes`
    pub hbh_srtcp_tx_bytes: Option<i64>,
    /// field 1260, wire `sfu_server_bwa_br_adjusted_for_participant_change`
    pub sfu_server_bwa_br_adjusted_for_participant_change: Option<i64>,
    /// field 1261, wire `sfu_server_bwa_br_capped_by_uplink`
    pub sfu_server_bwa_br_capped_by_uplink: Option<i64>,
    /// field 1262, wire `sfu_server_bwa_invalid_simulcast_result`
    pub sfu_server_bwa_invalid_simulcast_result: Option<i64>,
    /// field 1263, wire `sfu_server_bwa_local_bwa_run`
    pub sfu_server_bwa_local_bwa_run: Option<i64>,
    /// field 1264, wire `echo_cancellation_num_loops`
    pub echo_cancellation_num_loops: Option<i64>,
    /// field 1265, wire `echo_max_converge_frame_count`
    pub echo_max_converge_frame_count: Option<i64>,
    /// field 1266, wire `server_recommended_to_elected_relay_ms`
    pub server_recommended_to_elected_relay_ms: Option<String>,
    /// field 1267, wire `time_to_first_elected_relay_ms`
    pub time_to_first_elected_relay_ms: Option<String>,
    /// field 1268, wire `call_transport_max_alloc_retries`
    pub call_transport_max_alloc_retries: Option<i64>,
    /// field 1269, wire `device_class`
    pub device_class: Option<String>,
    /// field 1270, wire `video_quality_score`
    pub video_quality_score: Option<i64>,
    /// field 1271, wire `audio_nack_req_pkts_processed`
    pub audio_nack_req_pkts_processed: Option<i64>,
    /// field 1272, wire `video_nack_rtp_retransmit_recvd_count`
    pub video_nack_rtp_retransmit_recvd_count: Option<i64>,
    /// field 1273, wire `video_rtcp_nack_processed`
    pub video_rtcp_nack_processed: Option<i64>,
    /// field 1274, wire `video_rtcp_nack_processed_hq`
    pub video_rtcp_nack_processed_hq: Option<i64>,
    /// field 1275, wire `video_tx_resend_cause_kf`
    pub video_tx_resend_cause_kf: Option<i64>,
    /// field 1276, wire `video_tx_resend_cause_kf_hq`
    pub video_tx_resend_cause_kf_hq: Option<i64>,
    /// field 1277, wire `video_tx_resend_failures`
    pub video_tx_resend_failures: Option<i64>,
    /// field 1278, wire `video_tx_resend_failures_hq`
    pub video_tx_resend_failures_hq: Option<i64>,
    /// field 1279, wire `hbwe_history_based_avg_video_tx_bitrate`
    pub hbwe_history_based_avg_video_tx_bitrate: Option<i64>,
    /// field 1280, wire `hbwe_history_based_bwe_instant_ramp_up_done`
    pub hbwe_history_based_bwe_instant_ramp_up_done: Option<bool>,
    /// field 1281, wire `hbwe_history_based_bwe_update_ceiling_done`
    pub hbwe_history_based_bwe_update_ceiling_done: Option<bool>,
    /// field 1282, wire `hbwe_history_based_bwe_update_ceiling_forced`
    pub hbwe_history_based_bwe_update_ceiling_forced: Option<bool>,
    /// field 1283, wire `audio_pkts_not_trigger_out_of_paused`
    pub audio_pkts_not_trigger_out_of_paused: Option<i64>,
    /// field 1285, wire `paused_rtcp_count`
    pub paused_rtcp_count: Option<i64>,
    /// field 1287, wire `stream_dropped_pkts`
    pub stream_dropped_pkts: Option<i64>,
    /// field 1288, wire `stream_paused_time_ms`
    pub stream_paused_time_ms: Option<String>,
    /// field 1289, wire `stream_transitions_to_paused`
    pub stream_transitions_to_paused: Option<i64>,
    /// field 1295, wire `rx_sub_on_screen_dur`
    pub rx_sub_on_screen_dur: Option<String>,
    /// field 1296, wire `rx_sub_request_throttled_cnt`
    pub rx_sub_request_throttled_cnt: Option<i64>,
    /// field 1297, wire `rx_sub_switch_cnt`
    pub rx_sub_switch_cnt: Option<i64>,
    /// field 1298, wire `rx_sub_video_wait_dur`
    pub rx_sub_video_wait_dur: Option<String>,
    /// field 1300, wire `call_relay_error_code`
    pub call_relay_error_code: Option<i64>,
    /// field 1301, wire `call_relays_received`
    pub call_relays_received: Option<i64>,
    /// field 1302, wire `avg_loudness_diff_noise_frames`
    pub avg_loudness_diff_noise_frames: Option<String>,
    /// field 1303, wire `avg_loudness_diff_speech_frames`
    pub avg_loudness_diff_speech_frames: Option<String>,
    /// field 1304, wire `avg_loudness_input_noise_frames`
    pub avg_loudness_input_noise_frames: Option<String>,
    /// field 1305, wire `avg_loudness_input_speech_frames`
    pub avg_loudness_input_speech_frames: Option<String>,
    /// field 1306, wire `avg_loudness_output_noise_frames`
    pub avg_loudness_output_noise_frames: Option<String>,
    /// field 1307, wire `avg_loudness_output_speech_frames`
    pub avg_loudness_output_speech_frames: Option<String>,
    /// field 1308, wire `sbwe_min_rtt_slide_window_count`
    pub sbwe_min_rtt_slide_window_count: Option<i64>,
    /// field 1309, wire `relay_swapped`
    pub relay_swapped: Option<i64>,
    /// field 1310, wire `rx_for_error_relay_bytes`
    pub rx_for_error_relay_bytes: Option<String>,
    /// field 1311, wire `rx_for_other_relay_bytes`
    pub rx_for_other_relay_bytes: Option<String>,
    /// field 1312, wire `rx_for_tx_relay_bytes`
    pub rx_for_tx_relay_bytes: Option<String>,
    /// field 1313, wire `sre_recommended_diff`
    pub sre_recommended_diff: Option<i64>,
    /// field 1314, wire `pct_peers_on_cellular`
    pub pct_peers_on_cellular: Option<String>,
    /// field 1316, wire `is_from_call_link`
    pub is_from_call_link: Option<bool>,
    /// field 1318, wire `audio_jb_resets`
    pub audio_jb_resets: Option<i64>,
    /// field 1319, wire `call_transport_total_rx_alloc_bytes`
    pub call_transport_total_rx_alloc_bytes: Option<String>,
    /// field 1320, wire `call_transport_total_tx_alloc_bytes`
    pub call_transport_total_tx_alloc_bytes: Option<String>,
    /// field 1321, wire `call_transport_tx_alloc_cnt`
    pub call_transport_tx_alloc_cnt: Option<i64>,
    /// field 1322, wire `audio_swb_duration_ms`
    pub audio_swb_duration_ms: Option<String>,
    /// field 1323, wire `is_call_creator`
    pub is_call_creator: Option<bool>,
    /// field 1324, wire `call_test_boolean`
    pub call_test_boolean: Option<bool>,
    /// field 1325, wire `call_test_double`
    pub call_test_double: Option<String>,
    /// field 1326, wire `call_test_integer`
    pub call_test_integer: Option<CALLTESTINTEGER>,
    /// field 1327, wire `call_test_long`
    pub call_test_long: Option<i64>,
    /// field 1328, wire `call_test_string`
    pub call_test_string: Option<String>,
    /// field 1329, wire `call_rx_bwe_cnt`
    pub call_rx_bwe_cnt: Option<i64>,
    /// field 1330, wire `call_tx_bwe_cnt`
    pub call_tx_bwe_cnt: Option<i64>,
    /// field 1331, wire `lonely_t`
    pub lonely_t: Option<String>,
    /// field 1334, wire `audio_jb_resets_partial`
    pub audio_jb_resets_partial: Option<i64>,
    /// field 1335, wire `is_link_join`
    pub is_link_join: Option<bool>,
    /// field 1336, wire `call_audio_output_route`
    pub call_audio_output_route: Option<AUDIOOUTPUTROUTE>,
    /// field 1337, wire `sfu_server_bwa_local_bwa_transition`
    pub sfu_server_bwa_local_bwa_transition: Option<i64>,
    /// field 1338, wire `sfu_server_bwa_longest_sbwa_missing_ms`
    pub sfu_server_bwa_longest_sbwa_missing_ms: Option<String>,
    /// field 1339, wire `server_recommended_relay_received_ms`
    pub server_recommended_relay_received_ms: Option<String>,
    /// field 1340, wire `peer_rx_for_error_relay_bytes`
    pub peer_rx_for_error_relay_bytes: Option<String>,
    /// field 1341, wire `peer_rx_for_other_relay_bytes`
    pub peer_rx_for_other_relay_bytes: Option<String>,
    /// field 1342, wire `peer_rx_for_tx_relay_bytes`
    pub peer_rx_for_tx_relay_bytes: Option<String>,
    /// field 1343, wire `wa_voip_history_is_call_participant_record_saved`
    pub wa_voip_history_is_call_participant_record_saved: Option<bool>,
    /// field 1344, wire `wa_voip_history_num_of_call_participant_record_found`
    pub wa_voip_history_num_of_call_participant_record_found: Option<i64>,
    /// field 1346, wire `wa_voip_history_call_redial_status`
    pub wa_voip_history_call_redial_status: Option<WAVOIPHISTORYCALLREDIALSTATUS>,
    /// field 1347, wire `sbwe_hold_duration`
    pub sbwe_hold_duration: Option<String>,
    /// field 1348, wire `sbwe_ramp_down_duration`
    pub sbwe_ramp_down_duration: Option<String>,
    /// field 1349, wire `sbwe_ramp_up_duration`
    pub sbwe_ramp_up_duration: Option<String>,
    /// field 1350, wire `imbalanced_dl_plr_t_pct`
    pub imbalanced_dl_plr_tpct: Option<String>,
    /// field 1351, wire `audio_target06_ms`
    pub audio_target06_ms: Option<i64>,
    /// field 1352, wire `audio_target1015_ms`
    pub audio_target1015_ms: Option<i64>,
    /// field 1353, wire `audio_target1520_ms`
    pub audio_target1520_ms: Option<i64>,
    /// field 1354, wire `audio_target2030_ms`
    pub audio_target2030_ms: Option<i64>,
    /// field 1355, wire `audio_target30_plus_ms`
    pub audio_target30_plus_ms: Option<i64>,
    /// field 1356, wire `audio_target610_ms`
    pub audio_target610_ms: Option<i64>,
    /// field 1357, wire `audio_target_bitrate_drops`
    pub audio_target_bitrate_drops: Option<i64>,
    /// field 1359, wire `audio_tx_ulp_fec_pkts`
    pub audio_tx_ulp_fec_pkts: Option<i64>,
    /// field 1360, wire `audio_ulp_fec_recovered`
    pub audio_ulp_fec_recovered: Option<i64>,
    /// field 1361, wire `new_end_call_survey_version`
    pub new_end_call_survey_version: Option<i64>,
    /// field 1362, wire `rtcp_remb_in_video_cnt`
    pub rtcp_remb_in_video_cnt: Option<i64>,
    /// field 1363, wire `call_system_pip_duration_t`
    pub call_system_pip_duration_t: Option<String>,
    /// field 1364, wire `dl_only_high_plr_pct`
    pub dl_only_high_plr_pct: Option<String>,
    /// field 1365, wire `ul_only_high_plr_pct`
    pub ul_only_high_plr_pct: Option<String>,
    /// field 1366, wire `rx_sub_video_wait_dur_avg`
    pub rx_sub_video_wait_dur_avg: Option<String>,
    /// field 1367, wire `rx_sub_video_wait_dur_sum`
    pub rx_sub_video_wait_dur_sum: Option<String>,
    /// field 1370, wire `rx_sub_request_sent_cnt`
    pub rx_sub_request_sent_cnt: Option<i64>,
    /// field 1372, wire `is_link_creator`
    pub is_link_creator: Option<bool>,
    /// field 1373, wire `video_nack_rtp_retransmit_req_count`
    pub video_nack_rtp_retransmit_req_count: Option<i64>,
    /// field 1374, wire `alt_af_first_pong_time_ms`
    pub alt_af_first_pong_time_ms: Option<String>,
    /// field 1375, wire `alt_af_pings_sent`
    pub alt_af_pings_sent: Option<i64>,
    /// field 1376, wire `set_ip_version_count`
    pub set_ip_version_count: Option<i64>,
    /// field 1377, wire `call_end_reconnecting_before_call_active`
    pub call_end_reconnecting_before_call_active: Option<bool>,
    /// field 1378, wire `remove_peer_nack_count`
    pub remove_peer_nack_count: Option<i64>,
    /// field 1379, wire `remove_peer_not_in_call_count`
    pub remove_peer_not_in_call_count: Option<i64>,
    /// field 1380, wire `remove_peer_not_supported_count`
    pub remove_peer_not_supported_count: Option<i64>,
    /// field 1381, wire `remove_peer_request_count`
    pub remove_peer_request_count: Option<i64>,
    /// field 1382, wire `remove_peer_success_count`
    pub remove_peer_success_count: Option<i64>,
    /// field 1383, wire `callee_accept_to_connected_t`
    pub callee_accept_to_connected_t: Option<String>,
    /// field 1384, wire `callee_offer_to_ring_t`
    pub callee_offer_to_ring_t: Option<String>,
    /// field 1385, wire `call_end_reconnecting_relay_pingable`
    pub call_end_reconnecting_relay_pingable: Option<bool>,
    /// field 1386, wire `call_end_reconnecting_signaling_accessible`
    pub call_end_reconnecting_signaling_accessible: Option<bool>,
    /// field 1387, wire `echo_prob_gte40_frm_cnt`
    pub echo_prob_gte40_frm_cnt: Option<i64>,
    /// field 1388, wire `echo_prob_gte50_frm_cnt`
    pub echo_prob_gte50_frm_cnt: Option<i64>,
    /// field 1389, wire `echo_prob_gte60_frm_cnt`
    pub echo_prob_gte60_frm_cnt: Option<i64>,
    /// field 1391, wire `avatar_canceled`
    pub avatar_canceled: Option<bool>,
    /// field 1392, wire `avatar_canceled_count`
    pub avatar_canceled_count: Option<i64>,
    /// field 1393, wire `avatar_duration_t`
    pub avatar_duration_t: Option<String>,
    /// field 1394, wire `avatar_enabled`
    pub avatar_enabled: Option<bool>,
    /// field 1395, wire `avatar_enabled_count`
    pub avatar_enabled_count: Option<i64>,
    /// field 1396, wire `avatar_failed`
    pub avatar_failed: Option<bool>,
    /// field 1397, wire `avatar_failed_count`
    pub avatar_failed_count: Option<i64>,
    /// field 1398, wire `avatar_loading_t`
    pub avatar_loading_t: Option<String>,
    /// field 1399, wire `switch_to_avatar_displayed_count`
    pub switch_to_avatar_displayed_count: Option<i64>,
    /// field 1400, wire `video_enc_ms_in_openh264_high_comp`
    pub video_enc_ms_in_openh264_high_comp: Option<String>,
    /// field 1401, wire `video_enc_ms_in_openh264_low_comp`
    pub video_enc_ms_in_openh264_low_comp: Option<String>,
    /// field 1402, wire `video_enc_ms_in_openh264_medium_comp`
    pub video_enc_ms_in_openh264_medium_comp: Option<String>,
    /// field 1403, wire `video_enc_ms_in_openh264_ultrahigh_comp`
    pub video_enc_ms_in_openh264_ultrahigh_comp: Option<String>,
    /// field 1404, wire `privacy_silence_unknown_caller`
    pub privacy_silence_unknown_caller: Option<bool>,
    /// field 1405, wire `privacy_unknown_caller`
    pub privacy_unknown_caller: Option<bool>,
    /// field 1406, wire `call_connection_latency_ms`
    pub call_connection_latency_ms: Option<String>,
    /// field 1407, wire `call_ring_latency_ms`
    pub call_ring_latency_ms: Option<String>,
    /// field 1408, wire `rx_bytes_for_unknown_p2p`
    pub rx_bytes_for_unknown_p2p: Option<String>,
    /// field 1409, wire `xpop_relay_count`
    pub xpop_relay_count: Option<i64>,
    /// field 1410, wire `xpop_relay_error_bitmap`
    pub xpop_relay_error_bitmap: Option<i64>,
    /// field 1412, wire `avatar_attempted`
    pub avatar_attempted: Option<bool>,
    /// field 1413, wire `jb_avg_delay_from_disorder_distance_hist`
    pub jb_avg_delay_from_disorder_distance_hist: Option<String>,
    /// field 1414, wire `jb_avg_delay_from_put_hist`
    pub jb_avg_delay_from_put_hist: Option<String>,
    /// field 1415, wire `jb_avg_put_hist_target_size`
    pub jb_avg_put_hist_target_size: Option<String>,
    /// field 1416, wire `jb_avg_target_size_added_from_disorder_distance_hist`
    pub jb_avg_target_size_added_from_disorder_distance_hist: Option<String>,
    /// field 1417, wire `jb_avg_target_size_from_disorder_distance_hist`
    pub jb_avg_target_size_from_disorder_distance_hist: Option<String>,
    /// field 1418, wire `jb_avg_target_size_from_put_hist`
    pub jb_avg_target_size_from_put_hist: Option<String>,
    /// field 1419, wire `jb_get_from_disorder_distance_hist`
    pub jb_get_from_disorder_distance_hist: Option<String>,
    /// field 1420, wire `jb_get_from_put_hist`
    pub jb_get_from_put_hist: Option<String>,
    /// field 1421, wire `jb_max_delay_from_disorder_distance_hist`
    pub jb_max_delay_from_disorder_distance_hist: Option<String>,
    /// field 1422, wire `jb_max_delay_from_put_hist`
    pub jb_max_delay_from_put_hist: Option<String>,
    /// field 1423, wire `jb_max_put_hist_target_size`
    pub jb_max_put_hist_target_size: Option<String>,
    /// field 1424, wire `jb_max_target_size_added_from_disorder_distance_hist`
    pub jb_max_target_size_added_from_disorder_distance_hist: Option<String>,
    /// field 1425, wire `jb_max_target_size_from_disorder_distance_hist`
    pub jb_max_target_size_from_disorder_distance_hist: Option<String>,
    /// field 1426, wire `jb_max_target_size_from_put_hist`
    pub jb_max_target_size_from_put_hist: Option<String>,
    /// field 1427, wire `hbh_key_inconsistency_cnt`
    pub hbh_key_inconsistency_cnt: Option<i64>,
    /// field 1428, wire `adaptive_tcp_error_bitmap`
    pub adaptive_tcp_error_bitmap: Option<i64>,
    /// field 1429, wire `call_transport_tcp_fallback_to_udp_count`
    pub call_transport_tcp_fallback_to_udp_count: Option<i64>,
    /// field 1430, wire `call_transport_tcp_used_count`
    pub call_transport_tcp_used_count: Option<i64>,
    /// field 1431, wire `history_based_min_rtt_available`
    pub history_based_min_rtt_available: Option<bool>,
    /// field 1432, wire `history_based_min_rtt_congestion_count`
    pub history_based_min_rtt_congestion_count: Option<i64>,
    /// field 1433, wire `history_based_min_rtt_divided_by_runtime_min_rtt`
    pub history_based_min_rtt_divided_by_runtime_min_rtt: Option<String>,
    /// field 1434, wire `accept_to_first_frame_decoded_t_ss`
    pub accept_to_first_frame_decoded_tss: Option<String>,
    /// field 1435, wire `ack_to_first_frame_encoded_t_ss`
    pub ack_to_first_frame_encoded_tss: Option<String>,
    /// field 1437, wire `capture_driver_notify_count_ss`
    pub capture_driver_notify_count_ss: Option<i64>,
    /// field 1438, wire `cropped_columns_ss`
    pub cropped_columns_ss: Option<i64>,
    /// field 1439, wire `cropped_rows_ss`
    pub cropped_rows_ss: Option<i64>,
    /// field 1440, wire `downlink_overshoot_count_ss`
    pub downlink_overshoot_count_ss: Option<i64>,
    /// field 1441, wire `duration_t_ss`
    pub duration_tss: Option<String>,
    /// field 1442, wire `num_crop_capture_content_ss`
    pub num_crop_capture_content_ss: Option<i64>,
    /// field 1443, wire `receiver_video_encoded_height_ss`
    pub receiver_video_encoded_height_ss: Option<i64>,
    /// field 1444, wire `receiver_video_encoded_width_ss`
    pub receiver_video_encoded_width_ss: Option<i64>,
    /// field 1445, wire `ss_receiver_start_fail_count`
    pub ss_receiver_start_fail_count: Option<i64>,
    /// field 1446, wire `ss_receiver_start_request_count`
    pub ss_receiver_start_request_count: Option<i64>,
    /// field 1447, wire `ss_receiver_start_success_count`
    pub ss_receiver_start_success_count: Option<i64>,
    /// field 1448, wire `ss_receiver_stop_fail_count`
    pub ss_receiver_stop_fail_count: Option<i64>,
    /// field 1449, wire `ss_receiver_stop_request_count`
    pub ss_receiver_stop_request_count: Option<i64>,
    /// field 1450, wire `ss_receiver_stop_success_count`
    pub ss_receiver_stop_success_count: Option<i64>,
    /// field 1451, wire `ss_receiver_version`
    pub ss_receiver_version: Option<i64>,
    /// field 1452, wire `ss_sharer_start_fail_count`
    pub ss_sharer_start_fail_count: Option<i64>,
    /// field 1453, wire `ss_sharer_start_request_count`
    pub ss_sharer_start_request_count: Option<i64>,
    /// field 1454, wire `ss_sharer_start_success_count`
    pub ss_sharer_start_success_count: Option<i64>,
    /// field 1455, wire `ss_sharer_stop_fail_count`
    pub ss_sharer_stop_fail_count: Option<i64>,
    /// field 1456, wire `ss_sharer_stop_request_count`
    pub ss_sharer_stop_request_count: Option<i64>,
    /// field 1457, wire `ss_sharer_stop_success_count`
    pub ss_sharer_stop_success_count: Option<i64>,
    /// field 1458, wire `ss_sharer_version`
    pub ss_sharer_version: Option<i64>,
    /// field 1459, wire `ss_time_in_static_content_type`
    pub ss_time_in_static_content_type: Option<String>,
    /// field 1460, wire `ss_time_in_video_content_type`
    pub ss_time_in_video_content_type: Option<String>,
    /// field 1461, wire `total_frames_captured_in_last10sec_ss`
    pub total_frames_captured_in_last10sec_ss: Option<i64>,
    /// field 1462, wire `total_frames_captured_ss`
    pub total_frames_captured_ss: Option<i64>,
    /// field 1463, wire `total_frames_rendered_in_last10sec_ss`
    pub total_frames_rendered_in_last10sec_ss: Option<i64>,
    /// field 1464, wire `total_frames_rendered_ss`
    pub total_frames_rendered_ss: Option<i64>,
    /// field 1465, wire `uplink_overshoot_count_ss`
    pub uplink_overshoot_count_ss: Option<i64>,
    /// field 1466, wire `uplink_undershoot_count_ss`
    pub uplink_undershoot_count_ss: Option<i64>,
    /// field 1467, wire `video_avg_enc_kf_qp_ss`
    pub video_avg_enc_kf_qp_ss: Option<i64>,
    /// field 1468, wire `video_avg_enc_p_frame_qp_ss`
    pub video_avg_enc_pframe_qp_ss: Option<i64>,
    /// field 1469, wire `video_avg_target_bitrate_hq_ss`
    pub video_avg_target_bitrate_hq_ss: Option<String>,
    /// field 1470, wire `video_avg_total_target_bitrate_ss`
    pub video_avg_total_target_bitrate_ss: Option<String>,
    /// field 1471, wire `video_capture_height_ss`
    pub video_capture_height_ss: Option<i64>,
    /// field 1472, wire `video_capture_width_ss`
    pub video_capture_width_ss: Option<i64>,
    /// field 1473, wire `video_dec_avg_fps_ss`
    pub video_dec_avg_fps_ss: Option<String>,
    /// field 1474, wire `video_dec_output_frames_in_last10sec_ss`
    pub video_dec_output_frames_in_last10sec_ss: Option<i64>,
    /// field 1475, wire `video_dec_output_frames_ss`
    pub video_dec_output_frames_ss: Option<i64>,
    /// field 1476, wire `video_enc_bitrate_hq_ss`
    pub video_enc_bitrate_hq_ss: Option<String>,
    /// field 1477, wire `video_enc_input_frames_in_last10sec_ss`
    pub video_enc_input_frames_in_last10sec_ss: Option<i64>,
    /// field 1478, wire `video_enc_input_frames_ss`
    pub video_enc_input_frames_ss: Option<i64>,
    /// field 1479, wire `video_enc_keyframes_ss`
    pub video_enc_keyframes_ss: Option<i64>,
    /// field 1480, wire `video_enc_output_frame_ss`
    pub video_enc_output_frame_ss: Option<i64>,
    /// field 1481, wire `video_encoder_height_ss`
    pub video_encoder_height_ss: Option<i64>,
    /// field 1482, wire `video_encoder_width_ss`
    pub video_encoder_width_ss: Option<i64>,
    /// field 1483, wire `video_rx_bitrate_ss`
    pub video_rx_bitrate_ss: Option<i64>,
    /// field 1484, wire `video_tx_bitrate_ss`
    pub video_tx_bitrate_ss: Option<String>,
    /// field 1488, wire `is_scheduled_call`
    pub is_scheduled_call: Option<bool>,
    /// field 1489, wire `one_side_num_relays_group_offer`
    pub one_side_num_relays_group_offer: Option<i64>,
    /// field 1490, wire `one_side_relay_transaction_id_first_alloc_resp`
    pub one_side_relay_transaction_id_first_alloc_resp: Option<i64>,
    /// field 1491, wire `video_avg_target_bitrate_ss`
    pub video_avg_target_bitrate_ss: Option<String>,
    /// field 1492, wire `call_reconnecting_probe_state`
    pub call_reconnecting_probe_state: Option<i64>,
    /// field 1493, wire `xpop_call_peer_relay_ip`
    pub xpop_call_peer_relay_ip: Option<String>,
    /// field 1494, wire `peer_device_name`
    pub peer_device_name: Option<String>,
    /// field 1495, wire `sbwe_abs_rtt_on_hold_count`
    pub sbwe_abs_rtt_on_hold_count: Option<i64>,
    /// field 1496, wire `sbwe_rtt_slope_congestion_count`
    pub sbwe_rtt_slope_congestion_count: Option<i64>,
    /// field 1497, wire `sbwe_rtt_slope_on_hold_count`
    pub sbwe_rtt_slope_on_hold_count: Option<i64>,
    /// field 1498, wire `net_health_average_count`
    pub net_health_average_count: Option<i64>,
    /// field 1499, wire `net_health_good_count`
    pub net_health_good_count: Option<i64>,
    /// field 1500, wire `net_health_measuring_count`
    pub net_health_measuring_count: Option<i64>,
    /// field 1501, wire `net_health_nonetwork_count`
    pub net_health_nonetwork_count: Option<i64>,
    /// field 1502, wire `net_health_percent_in_average`
    pub net_health_percent_in_average: Option<String>,
    /// field 1503, wire `net_health_percent_in_good`
    pub net_health_percent_in_good: Option<String>,
    /// field 1504, wire `net_health_percent_in_measuring`
    pub net_health_percent_in_measuring: Option<String>,
    /// field 1505, wire `net_health_percent_in_nonetwork`
    pub net_health_percent_in_nonetwork: Option<String>,
    /// field 1506, wire `net_health_percent_in_poor`
    pub net_health_percent_in_poor: Option<String>,
    /// field 1507, wire `net_health_poor_count`
    pub net_health_poor_count: Option<i64>,
    /// field 1508, wire `net_health_slow_poor_by_reconnect`
    pub net_health_slow_poor_by_reconnect: Option<i64>,
    /// field 1509, wire `net_health_slow_poor_by_rx_stop`
    pub net_health_slow_poor_by_rx_stop: Option<i64>,
    /// field 1510, wire `landscape_mode_duration_t`
    pub landscape_mode_duration_t: Option<String>,
    /// field 1511, wire `landscape_mode_locked_duration_t`
    pub landscape_mode_locked_duration_t: Option<String>,
    /// field 1512, wire `landscape_mode_locked_switch_count`
    pub landscape_mode_locked_switch_count: Option<i64>,
    /// field 1513, wire `landscape_mode_pip_mixed_duration_t`
    pub landscape_mode_pip_mixed_duration_t: Option<String>,
    /// field 1514, wire `landscape_mode_switch_count`
    pub landscape_mode_switch_count: Option<i64>,
    /// field 1515, wire `xpop_to1pop_fallback_cnt`
    pub xpop_to1pop_fallback_cnt: Option<i64>,
    /// field 1516, wire `landscape_mode_enabled`
    pub landscape_mode_enabled: Option<i64>,
    /// field 1517, wire `call_end_tx_stopped`
    pub call_end_tx_stopped: Option<bool>,
    /// field 1518, wire `call_tx_stopped_t`
    pub call_tx_stopped_t: Option<String>,
    /// field 1519, wire `tx_stopped_count`
    pub tx_stopped_count: Option<i64>,
    /// field 1520, wire `initial_audio_render_delay_t`
    pub initial_audio_render_delay_t: Option<String>,
    /// field 1521, wire `audio_decode_errors`
    pub audio_decode_errors: Option<i64>,
    /// field 1522, wire `audio_encode_errors`
    pub audio_encode_errors: Option<i64>,
    /// field 1523, wire `audio_packetize_errors`
    pub audio_packetize_errors: Option<i64>,
    /// field 1524, wire `audio_parse_errors`
    pub audio_parse_errors: Option<i64>,
    /// field 1525, wire `relay_ping_avg_rtt`
    pub relay_ping_avg_rtt: Option<String>,
    /// field 1526, wire `relay_ping_max_rtt`
    pub relay_ping_max_rtt: Option<String>,
    /// field 1527, wire `relay_ping_min_rtt`
    pub relay_ping_min_rtt: Option<String>,
    /// field 1528, wire `rx_bytes_for_p2p`
    pub rx_bytes_for_p2p: Option<i64>,
    /// field 1529, wire `greater_than_low_plr_is_random_count`
    pub greater_than_low_plr_is_random_count: Option<i64>,
    /// field 1530, wire `math_plc_remove_high_pkt_loss_cong_count`
    pub math_plc_remove_high_pkt_loss_cong_count: Option<i64>,
    /// field 1531, wire `ml_plc_model_available_in_call`
    pub ml_plc_model_available_in_call: Option<bool>,
    /// field 1532, wire `ml_plc_model_avg_download_time`
    pub ml_plc_model_avg_download_time: Option<String>,
    /// field 1533, wire `ml_plc_model_avg_extraction_time`
    pub ml_plc_model_avg_extraction_time: Option<String>,
    /// field 1534, wire `ml_plc_model_avg_inference_interval`
    pub ml_plc_model_avg_inference_interval: Option<i64>,
    /// field 1535, wire `ml_plc_model_avg_inference_time`
    pub ml_plc_model_avg_inference_time: Option<String>,
    /// field 1536, wire `ml_plc_model_download_failure_count`
    pub ml_plc_model_download_failure_count: Option<i64>,
    /// field 1537, wire `ml_plc_model_inference_failure_count`
    pub ml_plc_model_inference_failure_count: Option<i64>,
    /// field 1538, wire `ml_plc_model_max_inference_time`
    pub ml_plc_model_max_inference_time: Option<String>,
    /// field 1539, wire `ml_plc_model_min_inference_time`
    pub ml_plc_model_min_inference_time: Option<String>,
    /// field 1540, wire `ml_plc_model_short_inference_interval_count`
    pub ml_plc_model_short_inference_interval_count: Option<i64>,
    /// field 1541, wire `ml_plc_remove_high_pkt_loss_cong_count`
    pub ml_plc_remove_high_pkt_loss_cong_count: Option<i64>,
    /// field 1542, wire `ml_shim_avg_creation_time`
    pub ml_shim_avg_creation_time: Option<String>,
    /// field 1543, wire `ml_shim_creation_failure_count`
    pub ml_shim_creation_failure_count: Option<i64>,
    /// field 1544, wire `pytorch_edge_lib_avg_loading_time`
    pub pytorch_edge_lib_avg_loading_time: Option<String>,
    /// field 1545, wire `tx_failed_enc_check_bytes`
    pub tx_failed_enc_check_bytes: Option<String>,
    /// field 1546, wire `tx_failed_enc_check_packets`
    pub tx_failed_enc_check_packets: Option<i64>,
    /// field 1547, wire `wa_sframe_audio_rx_dup_pkts_cnt`
    pub wa_sframe_audio_rx_dup_pkts_cnt: Option<i64>,
    /// field 1548, wire `wa_sframe_audio_rx_error_missing_key`
    pub wa_sframe_audio_rx_error_missing_key: Option<i64>,
    /// field 1549, wire `wa_sframe_audio_rx_reject_pkts_cnt`
    pub wa_sframe_audio_rx_reject_pkts_cnt: Option<i64>,
    /// field 1550, wire `wa_sframe_audio_tx_error_pkt_cnt`
    pub wa_sframe_audio_tx_error_pkt_cnt: Option<i64>,
    /// field 1551, wire `wa_sframe_video_hq_tx_error_pkt_cnt`
    pub wa_sframe_video_hq_tx_error_pkt_cnt: Option<i64>,
    /// field 1552, wire `wa_sframe_video_lq_tx_error_pkt_cnt`
    pub wa_sframe_video_lq_tx_error_pkt_cnt: Option<i64>,
    /// field 1553, wire `wa_sframe_video_rx_dup_pkts_cnt`
    pub wa_sframe_video_rx_dup_pkts_cnt: Option<i64>,
    /// field 1554, wire `wa_sframe_video_rx_error_missing_key`
    pub wa_sframe_video_rx_error_missing_key: Option<i64>,
    /// field 1555, wire `wa_sframe_video_rx_reject_pkts_cnt`
    pub wa_sframe_video_rx_reject_pkts_cnt: Option<i64>,
    /// field 1556, wire `critical_group_update_process_t`
    pub critical_group_update_process_t: Option<String>,
    /// field 1557, wire `tcp_available_count`
    pub tcp_available_count: Option<i64>,
    /// field 1558, wire `tcp_available_on_udp_count`
    pub tcp_available_on_udp_count: Option<i64>,
    /// field 1559, wire `udp_available_count`
    pub udp_available_count: Option<i64>,
    /// field 1560, wire `udp_available_on_tcp_count`
    pub udp_available_on_tcp_count: Option<i64>,
    /// field 1561, wire `audio_stream_recreations`
    pub audio_stream_recreations: Option<i64>,
    /// field 1562, wire `video_stream_recreations`
    pub video_stream_recreations: Option<i64>,
    /// field 1563, wire `pytorch_edge_lib_load_error_code`
    pub pytorch_edge_lib_load_error_code: Option<PYTORCHEDGELIBLOADERRORCODE>,
    /// field 1564, wire `pytorch_edge_lib_load_status`
    pub pytorch_edge_lib_load_status: Option<PYTORCHEDGELIBLOADSTATUS>,
    /// field 1565, wire `audio_callee_accept_to_decode_t`
    pub audio_callee_accept_to_decode_t: Option<i64>,
    /// field 1566, wire `audio_caller_offer_to_decode_t`
    pub audio_caller_offer_to_decode_t: Option<i64>,
    /// field 1568, wire `call_nc_test_id`
    pub call_nc_test_id: Option<String>,
    /// field 1569, wire `call_nc_test_name`
    pub call_nc_test_name: Option<String>,
    /// field 1570, wire `transport_srtp_rx_init_rej_no_dup_pkt_cnt`
    pub transport_srtp_rx_init_rej_no_dup_pkt_cnt: Option<i64>,
    /// field 1571, wire `voip_settings_dict_lookup_failure`
    pub voip_settings_dict_lookup_failure: Option<i64>,
    /// field 1572, wire `voip_settings_dict_lookup_success`
    pub voip_settings_dict_lookup_success: Option<i64>,
    /// field 1573, wire `voip_settings_dict_no_lookup`
    pub voip_settings_dict_no_lookup: Option<i64>,
    /// field 1574, wire `call_used_vpn`
    pub call_used_vpn: Option<bool>,
    /// field 1575, wire `invalid_relay_message_cnt`
    pub invalid_relay_message_cnt: Option<i64>,
    /// field 1576, wire `unknown_relay_message_cnt`
    pub unknown_relay_message_cnt: Option<i64>,
    /// field 1577, wire `is_voice_chat`
    pub is_voice_chat: Option<bool>,
    /// field 1578, wire `group_call_is_first_segment`
    pub group_call_is_first_segment: Option<bool>,
    /// field 1579, wire `is_muted_during_call`
    pub is_muted_during_call: Option<bool>,
    /// field 1580, wire `record_non_silence_frame_count_during_mute`
    pub record_non_silence_frame_count_during_mute: Option<i64>,
    /// field 1581, wire `random_scheduled_id`
    pub random_scheduled_id: Option<i64>,
    /// field 1582, wire `close_tcp_socket_t`
    pub close_tcp_socket_t: Option<String>,
    /// field 1583, wire `num_processed_noise_frames`
    pub num_processed_noise_frames: Option<i64>,
    /// field 1584, wire `num_processed_speech_frames`
    pub num_processed_speech_frames: Option<i64>,
    /// field 1585, wire `hbh_srtp_rx_pkt_cnt`
    pub hbh_srtp_rx_pkt_cnt: Option<i64>,
    /// field 1586, wire `hbh_srtp_rx_rej_auth_fail`
    pub hbh_srtp_rx_rej_auth_fail: Option<i64>,
    /// field 1587, wire `hbh_srtp_rx_rej_einval`
    pub hbh_srtp_rx_rej_einval: Option<i64>,
    /// field 1588, wire `hbh_srtp_tx_pkt_cnt`
    pub hbh_srtp_tx_pkt_cnt: Option<i64>,
    /// field 1589, wire `echo_confidence`
    pub echo_confidence: Option<i64>,
    /// field 1590, wire `echo_delay`
    pub echo_delay: Option<i64>,
    /// field 1591, wire `echo_lt_delay`
    pub echo_lt_delay: Option<i64>,
    /// field 1592, wire `echo_percentage`
    pub echo_percentage: Option<i64>,
    /// field 1593, wire `echo_return_loss`
    pub echo_return_loss: Option<i64>,
    /// field 1594, wire `scheduled_call_join_time_diff_ms`
    pub scheduled_call_join_time_diff_ms: Option<i64>,
    /// field 1595, wire `call_end_reconnecting_expected_bitmap`
    pub call_end_reconnecting_expected_bitmap: Option<i64>,
    /// field 1596, wire `callee_push_latency_ms`
    pub callee_push_latency_ms: Option<String>,
    /// field 1597, wire `do_not_disturb_enabled`
    pub do_not_disturb_enabled: Option<bool>,
    /// field 1598, wire `push_ghost_call_reason`
    pub push_ghost_call_reason: Option<PUSHGHOSTCALLREASON>,
    /// field 1599, wire `push_priority_downgraded`
    pub push_priority_downgraded: Option<bool>,
    /// field 1600, wire `push_rang_with_payload`
    pub push_rang_with_payload: Option<bool>,
    /// field 1601, wire `warp_client_dup_rtx`
    pub warp_client_dup_rtx: Option<i64>,
    /// field 1602, wire `warp_client_nack_rtx`
    pub warp_client_nack_rtx: Option<i64>,
    /// field 1603, wire `warp_server_dup_rtx`
    pub warp_server_dup_rtx: Option<i64>,
    /// field 1604, wire `warp_server_nack_rtx`
    pub warp_server_nack_rtx: Option<i64>,
    /// field 1605, wire `is_lid_call`
    pub is_lid_call: Option<bool>,
    /// field 1606, wire `can_use_full_screen_intent`
    pub can_use_full_screen_intent: Option<bool>,
    /// field 1607, wire `last_min_jb_avg_delay`
    pub last_min_jb_avg_delay: Option<String>,
    /// field 1608, wire `last_min_jb_empties`
    pub last_min_jb_empties: Option<String>,
    /// field 1609, wire `last_min_jb_gets`
    pub last_min_jb_gets: Option<String>,
    /// field 1610, wire `last_min_jb_lost`
    pub last_min_jb_lost: Option<String>,
    /// field 1611, wire `dynamic_transport_event_bitmap`
    pub dynamic_transport_event_bitmap: Option<i64>,
    /// field 1612, wire `p2p_connection_quality_stat`
    pub p2p_connection_quality_stat: Option<String>,
    /// field 1613, wire `relay_connection_quality_stat`
    pub relay_connection_quality_stat: Option<String>,
    /// field 1614, wire `rx_bytes_for_xpop`
    pub rx_bytes_for_xpop: Option<String>,
    /// field 1615, wire `voip_setting_release_type`
    pub voip_setting_release_type: Option<VOIPSETTINGRELEASETYPE>,
    /// field 1616, wire `voip_setting_version`
    pub voip_setting_version: Option<i64>,
    /// field 1617, wire `group_call_video_maximized_duration`
    pub group_call_video_maximized_duration: Option<String>,
    /// field 1618, wire `per_peer_call_network`
    pub per_peer_call_network: Option<CALLNETWORKMEDIUM>,
    /// field 1619, wire `last_min_video_render_enable_duration`
    pub last_min_video_render_enable_duration: Option<String>,
    /// field 1620, wire `last_min_video_render_freeze2x_t`
    pub last_min_video_render_freeze2x_t: Option<String>,
    /// field 1621, wire `last_min_video_render_freeze4x_t`
    pub last_min_video_render_freeze4x_t: Option<String>,
    /// field 1622, wire `last_min_video_render_freeze8x_t`
    pub last_min_video_render_freeze8x_t: Option<String>,
    /// field 1623, wire `last_min_video_render_freeze_t`
    pub last_min_video_render_freeze_t: Option<String>,
    /// field 1624, wire `last_minute_call_avg_rtt`
    pub last_minute_call_avg_rtt: Option<String>,
    /// field 1631, wire `time_enc960w`
    pub time_enc960w: Option<String>,
    /// field 1632, wire `call_notification_state`
    pub call_notification_state: Option<i64>,
    /// field 1633, wire `ml_undershoot_model_available_in_call`
    pub ml_undershoot_model_available_in_call: Option<bool>,
    /// field 1634, wire `ml_undershoot_model_avg_download_time`
    pub ml_undershoot_model_avg_download_time: Option<String>,
    /// field 1635, wire `ml_undershoot_model_avg_extraction_time`
    pub ml_undershoot_model_avg_extraction_time: Option<String>,
    /// field 1636, wire `ml_undershoot_model_avg_inference_interval`
    pub ml_undershoot_model_avg_inference_interval: Option<i64>,
    /// field 1637, wire `ml_undershoot_model_avg_inference_time`
    pub ml_undershoot_model_avg_inference_time: Option<String>,
    /// field 1638, wire `ml_undershoot_model_download_failure_count`
    pub ml_undershoot_model_download_failure_count: Option<i64>,
    /// field 1639, wire `ml_undershoot_model_inference_failure_count`
    pub ml_undershoot_model_inference_failure_count: Option<i64>,
    /// field 1640, wire `ml_undershoot_model_max_inference_time`
    pub ml_undershoot_model_max_inference_time: Option<String>,
    /// field 1641, wire `ml_undershoot_model_min_inference_time`
    pub ml_undershoot_model_min_inference_time: Option<String>,
    /// field 1642, wire `ml_undershoot_model_short_inference_interval_count`
    pub ml_undershoot_model_short_inference_interval_count: Option<i64>,
    /// field 1643, wire `ml_undershoot_shim_avg_creation_time`
    pub ml_undershoot_shim_avg_creation_time: Option<String>,
    /// field 1644, wire `ml_undershoot_shim_creation_failure_count`
    pub ml_undershoot_shim_creation_failure_count: Option<i64>,
    /// field 1645, wire `ml_undershoot_trigger_mcp_count`
    pub ml_undershoot_trigger_mcp_count: Option<i64>,
    /// field 1646, wire `hbh_srtcp_rx_success_pli_pkt_cnt`
    pub hbh_srtcp_rx_success_pli_pkt_cnt: Option<i64>,
    /// field 1647, wire `num_rx_subscribers`
    pub num_rx_subscribers: Option<String>,
    /// field 1648, wire `num_video_streams_disabled`
    pub num_video_streams_disabled: Option<String>,
    /// field 1649, wire `per_peer_video_disabling_event_count`
    pub per_peer_video_disabling_event_count: Option<i64>,
    /// field 1650, wire `tx_subscription_change_count`
    pub tx_subscription_change_count: Option<i64>,
    /// field 1652, wire `video_disabling_event_count`
    pub video_disabling_event_count: Option<i64>,
    /// field 1653, wire `video_disabling_to_call_end_delay`
    pub video_disabling_to_call_end_delay: Option<String>,
    /// field 1654, wire `ml_undershoot_pytorch_edge_lib_load_error_code`
    pub ml_undershoot_pytorch_edge_lib_load_error_code: Option<MLUNDERSHOOTPYTORCHEDGELIBLOADERRORCODE>,
    /// field 1655, wire `ml_undershoot_pytorch_edge_lib_load_status`
    pub ml_undershoot_pytorch_edge_lib_load_status: Option<MLUNDERSHOOTPYTORCHEDGELIBLOADSTATUS>,
    /// field 1656, wire `jb_mean_wait_time`
    pub jb_mean_wait_time: Option<String>,
    /// field 1657, wire `wa_calling_history_dl_sbwe_by_self_ip`
    pub wa_calling_history_dl_sbwe_by_self_ip: Option<i64>,
    /// field 1658, wire `wa_calling_history_group_call_record_save_condition_check_status`
    pub wa_calling_history_group_call_record_save_condition_check_status: Option<WACALLINGHISTORYGROUPCALLRECORDSAVECONDITIONCHECKSTATUS>,
    /// field 1659, wire `wa_calling_history_group_call_self_ip_address_available`
    pub wa_calling_history_group_call_self_ip_address_available: Option<bool>,
    /// field 1660, wire `wa_calling_history_is_group_call_record_saved`
    pub wa_calling_history_is_group_call_record_saved: Option<bool>,
    /// field 1661, wire `wa_calling_history_num_of_group_call_record_loaded`
    pub wa_calling_history_num_of_group_call_record_loaded: Option<i64>,
    /// field 1662, wire `wa_calling_history_ul_sbwe_by_self_ip`
    pub wa_calling_history_ul_sbwe_by_self_ip: Option<i64>,
    /// field 1663, wire `push_accept_to_offer_ms`
    pub push_accept_to_offer_ms: Option<String>,
    /// field 1664, wire `push_offer_result`
    pub push_offer_result: Option<PUSHOFFERRESULT>,
    /// field 1665, wire `wa_bad_call_detector_freq_rtt_cycle`
    pub wa_bad_call_detector_freq_rtt_cycle: Option<bool>,
    /// field 1666, wire `wa_bad_call_detector_high_init_rtt`
    pub wa_bad_call_detector_high_init_rtt: Option<bool>,
    /// field 1667, wire `wa_bad_call_detector_hist_rtt`
    pub wa_bad_call_detector_hist_rtt: Option<bool>,
    /// field 1668, wire `wa_bad_call_detector_mte_bad_combine`
    pub wa_bad_call_detector_mte_bad_combine: Option<i64>,
    /// field 1669, wire `wa_calling_history_last_avg_rtt_by_self_and_peer_ip`
    pub wa_calling_history_last_avg_rtt_by_self_and_peer_ip: Option<i64>,
    /// field 1670, wire `wa_calling_history_last_max_rtt_by_self_and_peer_ip`
    pub wa_calling_history_last_max_rtt_by_self_and_peer_ip: Option<i64>,
    /// field 1671, wire `wa_calling_history_last_min_rtt_by_self_and_peer_ip`
    pub wa_calling_history_last_min_rtt_by_self_and_peer_ip: Option<i64>,
    /// field 1672, wire `is_phash_based`
    pub is_phash_based: Option<bool>,
    /// field 1673, wire `group_call_invite_count_before_connected`
    pub group_call_invite_count_before_connected: Option<i64>,
    /// field 1674, wire `is_upgraded_group_call_before_connected`
    pub is_upgraded_group_call_before_connected: Option<bool>,
    /// field 1675, wire `device_arch`
    pub device_arch: Option<DEVICEARCH>,
    /// field 1676, wire `time_enc240w`
    pub time_enc240w: Option<String>,
    /// field 1677, wire `call_ended_peers_interrupted`
    pub call_ended_peers_interrupted: Option<bool>,
    /// field 1678, wire `call_peers_interrupted`
    pub call_peers_interrupted: Option<bool>,
    /// field 1679, wire `pytorch_edge_lib_first_loading_time`
    pub pytorch_edge_lib_first_loading_time: Option<String>,
    /// field 1680, wire `wa_calling_history_init_dl_sbwe_success`
    pub wa_calling_history_init_dl_sbwe_success: Option<bool>,
    /// field 1681, wire `wa_calling_history_init_ul_sbwe_success`
    pub wa_calling_history_init_ul_sbwe_success: Option<bool>,
    /// field 1682, wire `dynamic_transport_transport_switch_cnt`
    pub dynamic_transport_transport_switch_cnt: Option<i64>,
    /// field 1683, wire `invalid_data_packet_cnt`
    pub invalid_data_packet_cnt: Option<i64>,
    /// field 1684, wire `last_relay_cnt`
    pub last_relay_cnt: Option<i64>,
    /// field 1685, wire `hbh_srtcp_rx_success_srtp_afb_pkt_cnt`
    pub hbh_srtcp_rx_success_srtp_afb_pkt_cnt: Option<i64>,
    /// field 1686, wire `hbh_srtcp_tx_srtp_afb_pkt_cnt`
    pub hbh_srtcp_tx_srtp_afb_pkt_cnt: Option<i64>,
    /// field 1687, wire `video_av1_time`
    pub video_av1_time: Option<i64>,
    /// field 1688, wire `video_dec_error_frames_av1`
    pub video_dec_error_frames_av1: Option<i64>,
    /// field 1689, wire `video_enc_time_overshoot10_perc_av1`
    pub video_enc_time_overshoot10_perc_av1: Option<String>,
    /// field 1690, wire `video_enc_time_overshoot20_perc_av1`
    pub video_enc_time_overshoot20_perc_av1: Option<String>,
    /// field 1691, wire `video_enc_time_overshoot40_perc_av1`
    pub video_enc_time_overshoot40_perc_av1: Option<String>,
    /// field 1692, wire `video_enc_time_undershoot10_perc_av1`
    pub video_enc_time_undershoot10_perc_av1: Option<String>,
    /// field 1693, wire `video_enc_time_undershoot20_perc_av1`
    pub video_enc_time_undershoot20_perc_av1: Option<String>,
    /// field 1694, wire `video_enc_time_undershoot40_perc_av1`
    pub video_enc_time_undershoot40_perc_av1: Option<String>,
    /// field 1695, wire `num_hbh_fec_pkt_received`
    pub num_hbh_fec_pkt_received: Option<i64>,
    /// field 1696, wire `num_hbh_fec_pkt_sent`
    pub num_hbh_fec_pkt_sent: Option<i64>,
    /// field 1697, wire `num_media_pkt_recovered_by_hbh_fec`
    pub num_media_pkt_recovered_by_hbh_fec: Option<i64>,
    /// field 1698, wire `rx_hbh_fec_bitrate_kbps`
    pub rx_hbh_fec_bitrate_kbps: Option<i64>,
    /// field 1699, wire `tx_hbh_fec_bitrate_kbps`
    pub tx_hbh_fec_bitrate_kbps: Option<i64>,
    /// field 1700, wire `avg_echo_confidence`
    pub avg_echo_confidence: Option<i64>,
    /// field 1701, wire `echo_conf2140`
    pub echo_conf2140: Option<i64>,
    /// field 1702, wire `echo_conf4160`
    pub echo_conf4160: Option<i64>,
    /// field 1703, wire `echo_conf_gt60`
    pub echo_conf_gt60: Option<i64>,
    /// field 1704, wire `echo_conf_lt20`
    pub echo_conf_lt20: Option<i64>,
    /// field 1705, wire `duration_t_ss_receiver`
    pub duration_tss_receiver: Option<String>,
    /// field 1706, wire `duration_t_ss_sharer`
    pub duration_tss_sharer: Option<String>,
    /// field 1707, wire `ss_sharer_content_type_change`
    pub ss_sharer_content_type_change: Option<i64>,
    /// field 1708, wire `ss_sharer_text_content_bytes_encoded`
    pub ss_sharer_text_content_bytes_encoded: Option<i64>,
    /// field 1709, wire `ss_sharer_text_content_duration`
    pub ss_sharer_text_content_duration: Option<String>,
    /// field 1710, wire `ss_sharer_text_content_frames`
    pub ss_sharer_text_content_frames: Option<i64>,
    /// field 1711, wire `ss_sharer_text_content_pixels_encoded`
    pub ss_sharer_text_content_pixels_encoded: Option<i64>,
    /// field 1712, wire `ss_sharer_text_content_qp`
    pub ss_sharer_text_content_qp: Option<i64>,
    /// field 1713, wire `ss_sharer_video_content_bytes_encoded`
    pub ss_sharer_video_content_bytes_encoded: Option<i64>,
    /// field 1714, wire `ss_sharer_video_content_duration`
    pub ss_sharer_video_content_duration: Option<String>,
    /// field 1715, wire `ss_sharer_video_content_frames`
    pub ss_sharer_video_content_frames: Option<i64>,
    /// field 1716, wire `ss_sharer_video_content_pixels_encoded`
    pub ss_sharer_video_content_pixels_encoded: Option<i64>,
    /// field 1717, wire `ss_sharer_video_content_qp`
    pub ss_sharer_video_content_qp: Option<i64>,
    /// field 1718, wire `jb_cng`
    pub jb_cng: Option<String>,
    /// field 1719, wire `jb_plc`
    pub jb_plc: Option<String>,
    /// field 1720, wire `jb_plc_cng`
    pub jb_plc_cng: Option<String>,
    /// field 1721, wire `neteq_buffer_flush_count`
    pub neteq_buffer_flush_count: Option<i64>,
    /// field 1722, wire `neteq_preemptive_expanded_frames`
    pub neteq_preemptive_expanded_frames: Option<i64>,
    /// field 1723, wire `neteq_target_delay_ms`
    pub neteq_target_delay_ms: Option<String>,
    /// field 1724, wire `echo_likelihood_diff`
    pub echo_likelihood_diff: Option<i64>,
    /// field 1725, wire `max_echo_likelihood`
    pub max_echo_likelihood: Option<i64>,
    /// field 1726, wire `video_disabling_action_reversal_count`
    pub video_disabling_action_reversal_count: Option<i64>,
    /// field 1728, wire `inbound_video_disabling_duration`
    pub inbound_video_disabling_duration: Option<String>,
    /// field 1729, wire `num_dec_resolution_switches`
    pub num_dec_resolution_switches: Option<i64>,
    /// field 1730, wire `time_dec240w`
    pub time_dec240w: Option<String>,
    /// field 1731, wire `time_dec320w`
    pub time_dec320w: Option<String>,
    /// field 1732, wire `time_dec480w`
    pub time_dec480w: Option<String>,
    /// field 1733, wire `packet_pair_avg_bitrate`
    pub packet_pair_avg_bitrate: Option<i64>,
    /// field 1734, wire `packet_pair_reliable_ratio`
    pub packet_pair_reliable_ratio: Option<String>,
    /// field 1735, wire `packet_pair_underestimate_ratio`
    pub packet_pair_underestimate_ratio: Option<String>,
    /// field 1736, wire `audio_frame_from_server_dup`
    pub audio_frame_from_server_dup: Option<i64>,
    /// field 1737, wire `warp_server_dup_audio_rtx_used`
    pub warp_server_dup_audio_rtx_used: Option<i64>,
    /// field 1738, wire `time_dec1280w`
    pub time_dec1280w: Option<String>,
    /// field 1739, wire `time_dec160w`
    pub time_dec160w: Option<String>,
    /// field 1740, wire `time_dec640w`
    pub time_dec640w: Option<String>,
    /// field 1741, wire `time_dec960w`
    pub time_dec960w: Option<String>,
    /// field 1742, wire `wa_bad_call_detector_init_rtt_stddev`
    pub wa_bad_call_detector_init_rtt_stddev: Option<String>,
    /// field 1743, wire `srtp_enc_type`
    pub srtp_enc_type: Option<i64>,
    /// field 1745, wire `max_pkt_process_latency_ms`
    pub max_pkt_process_latency_ms: Option<String>,
    /// field 1746, wire `max_unbound_relay_count`
    pub max_unbound_relay_count: Option<i64>,
    /// field 1747, wire `mean_pkt_process_latency_ms`
    pub mean_pkt_process_latency_ms: Option<String>,
    /// field 1748, wire `audio_tx_active_bitrate`
    pub audio_tx_active_bitrate: Option<String>,
    /// field 1749, wire `audio_tx_inband_fec_bitrate`
    pub audio_tx_inband_fec_bitrate: Option<String>,
    /// field 1750, wire `audio_tx_nonactive_bitrate`
    pub audio_tx_nonactive_bitrate: Option<String>,
    /// field 1751, wire `audio_tx_pkt_count`
    pub audio_tx_pkt_count: Option<String>,
    /// field 1752, wire `dynamic_transport_first_switch_t`
    pub dynamic_transport_first_switch_t: Option<i64>,
    /// field 1753, wire `dynamic_transport_switch_cnt`
    pub dynamic_transport_switch_cnt: Option<i64>,
    /// field 1754, wire `server_prefer_relay`
    pub server_prefer_relay: Option<bool>,
    /// field 1755, wire `app_exit_reason`
    pub app_exit_reason: Option<APPEXITREASON>,
    /// field 1756, wire `dec1280w_freeze_t`
    pub dec1280w_freeze_t: Option<String>,
    /// field 1757, wire `dec1280w_pause_t`
    pub dec1280w_pause_t: Option<String>,
    /// field 1758, wire `dec160w_freeze_t`
    pub dec160w_freeze_t: Option<String>,
    /// field 1759, wire `dec160w_pause_t`
    pub dec160w_pause_t: Option<String>,
    /// field 1760, wire `dec240w_freeze_t`
    pub dec240w_freeze_t: Option<String>,
    /// field 1761, wire `dec240w_pause_t`
    pub dec240w_pause_t: Option<String>,
    /// field 1762, wire `dec320w_freeze_t`
    pub dec320w_freeze_t: Option<String>,
    /// field 1763, wire `dec320w_pause_t`
    pub dec320w_pause_t: Option<String>,
    /// field 1764, wire `dec480w_freeze_t`
    pub dec480w_freeze_t: Option<String>,
    /// field 1765, wire `dec480w_pause_t`
    pub dec480w_pause_t: Option<String>,
    /// field 1766, wire `dec640w_freeze_t`
    pub dec640w_freeze_t: Option<String>,
    /// field 1767, wire `dec640w_pause_t`
    pub dec640w_pause_t: Option<String>,
    /// field 1768, wire `dec960w_freeze_t`
    pub dec960w_freeze_t: Option<String>,
    /// field 1769, wire `dec960w_pause_t`
    pub dec960w_pause_t: Option<String>,
    /// field 1770, wire `ios_hw_ltr_ack_miss`
    pub ios_hw_ltr_ack_miss: Option<i64>,
    /// field 1771, wire `ltr_acks_acked`
    pub ltr_acks_acked: Option<i64>,
    /// field 1772, wire `ltr_acks_received`
    pub ltr_acks_received: Option<i64>,
    /// field 1773, wire `ltr_frame_count`
    pub ltr_frame_count: Option<i64>,
    /// field 1774, wire `is_phash_mismatch`
    pub is_phash_mismatch: Option<bool>,
    /// field 1775, wire `sfu_downlink_max_combined_bwe`
    pub sfu_downlink_max_combined_bwe: Option<String>,
    /// field 1776, wire `sfu_uplink_max_combined_bwe`
    pub sfu_uplink_max_combined_bwe: Option<String>,
    /// field 1777, wire `uwp_camera_last_device_hresult_error`
    pub uwp_camera_last_device_hresult_error: Option<i64>,
    /// field 1778, wire `uwp_camera_mediacapture_time`
    pub uwp_camera_mediacapture_time: Option<String>,
    /// field 1779, wire `elected_relay_idx`
    pub elected_relay_idx: Option<i64>,
    /// field 1780, wire `signaling_reflexive_ip_peer`
    pub signaling_reflexive_ip_peer: Option<String>,
    /// field 1781, wire `signaling_reflexive_ip_self`
    pub signaling_reflexive_ip_self: Option<String>,
    /// field 1782, wire `audio_codec_decoded_fec_bytes`
    pub audio_codec_decoded_fec_bytes: Option<String>,
    /// field 1783, wire `audio_codec_decoded_normal_bytes`
    pub audio_codec_decoded_normal_bytes: Option<String>,
    /// field 1784, wire `sfu_downlink_init_sender_bwe`
    pub sfu_downlink_init_sender_bwe: Option<String>,
    /// field 1785, wire `sfu_uplink_init_sender_bwe`
    pub sfu_uplink_init_sender_bwe: Option<String>,
    /// field 1786, wire `plc_avg_pred_prob`
    pub plc_avg_pred_prob: Option<i64>,
    /// field 1787, wire `plc_avg_random_prediction_length`
    pub plc_avg_random_prediction_length: Option<i64>,
    /// field 1788, wire `plc_num_bursty_predictions`
    pub plc_num_bursty_predictions: Option<i64>,
    /// field 1789, wire `plc_num_random_predictions`
    pub plc_num_random_predictions: Option<i64>,
    /// field 1790, wire `plc_num_skipped_predictions`
    pub plc_num_skipped_predictions: Option<i64>,
    /// field 1791, wire `udst_avg_pred_prob`
    pub udst_avg_pred_prob: Option<i64>,
    /// field 1792, wire `udst_mcp_avg_end_bitrate`
    pub udst_mcp_avg_end_bitrate: Option<i64>,
    /// field 1793, wire `udst_mcp_avg_start_bitrate`
    pub udst_mcp_avg_start_bitrate: Option<i64>,
    /// field 1794, wire `udst_num_predictions`
    pub udst_num_predictions: Option<i64>,
    /// field 1795, wire `udst_skipped_predictions`
    pub udst_skipped_predictions: Option<i64>,
    /// field 1796, wire `non_udst_num_predictions`
    pub non_udst_num_predictions: Option<i64>,
    /// field 1797, wire `video_target_bitrate_reaches100kbps_t`
    pub video_target_bitrate_reaches100kbps_t: Option<String>,
    /// field 1798, wire `video_target_bitrate_reaches300kbps_t`
    pub video_target_bitrate_reaches300kbps_t: Option<String>,
    /// field 1799, wire `ave_time_bw_aud_rc_dyn_cond_true`
    pub ave_time_bw_aud_rc_dyn_cond_true: Option<String>,
    /// field 1800, wire `num_aud_rc_dyn_cond_true`
    pub num_aud_rc_dyn_cond_true: Option<i64>,
    /// field 1801, wire `time_aud_rc_dyn_cond_true`
    pub time_aud_rc_dyn_cond_true: Option<String>,
    /// field 1802, wire `aud_share_avg_loudness_mic`
    pub aud_share_avg_loudness_mic: Option<String>,
    /// field 1803, wire `aud_share_avg_loudness_mixed`
    pub aud_share_avg_loudness_mixed: Option<String>,
    /// field 1804, wire `aud_share_avg_loudness_system`
    pub aud_share_avg_loudness_system: Option<String>,
    /// field 1805, wire `aud_share_echo_confidence`
    pub aud_share_echo_confidence: Option<i64>,
    /// field 1806, wire `aud_share_max_ducking_proc_time`
    pub aud_share_max_ducking_proc_time: Option<String>,
    /// field 1807, wire `aud_share_num_input_frames`
    pub aud_share_num_input_frames: Option<i64>,
    /// field 1808, wire `aud_share_num_mixed_frames`
    pub aud_share_num_mixed_frames: Option<i64>,
    /// field 1809, wire `aud_share_start_request_count`
    pub aud_share_start_request_count: Option<i64>,
    /// field 1810, wire `aud_share_start_success_count`
    pub aud_share_start_success_count: Option<i64>,
    /// field 1811, wire `aud_share_stop_request_count`
    pub aud_share_stop_request_count: Option<i64>,
    /// field 1812, wire `aud_share_stop_success_count`
    pub aud_share_stop_success_count: Option<i64>,
    /// field 1813, wire `audio_ducking_is_run`
    pub audio_ducking_is_run: Option<bool>,
    /// field 1814, wire `bridge_record_circular_buffer_frame_count`
    pub bridge_record_circular_buffer_frame_count: Option<i64>,
    /// field 1815, wire `dynamic_bitrate_cap_fallback_times`
    pub dynamic_bitrate_cap_fallback_times: Option<i64>,
    /// field 1816, wire `video_average_bitrate_diff_sbwa_to_client_bwa`
    pub video_average_bitrate_diff_sbwa_to_client_bwa: Option<i64>,
    /// field 1817, wire `video_average_lq_bitrate_from_sbwa`
    pub video_average_lq_bitrate_from_sbwa: Option<i64>,
    /// field 1818, wire `video_avg_total_target_bitrate`
    pub video_avg_total_target_bitrate: Option<String>,
    /// field 1819, wire `video_disabling_paused_duration_no_sbwa`
    pub video_disabling_paused_duration_no_sbwa: Option<String>,
    /// field 1820, wire `cpu_utilization_avg`
    pub cpu_utilization_avg: Option<String>,
    /// field 1821, wire `cpu_utilization_peak`
    pub cpu_utilization_peak: Option<String>,
    /// field 1822, wire `gpu_utilization_avg`
    pub gpu_utilization_avg: Option<String>,
    /// field 1823, wire `gpu_utilization_peak`
    pub gpu_utilization_peak: Option<String>,
    /// field 1824, wire `mem_utilization_avg`
    pub mem_utilization_avg: Option<String>,
    /// field 1825, wire `mem_utilization_peak`
    pub mem_utilization_peak: Option<String>,
    /// field 1826, wire `uwp_system_volume_during_incoming_call`
    pub uwp_system_volume_during_incoming_call: Option<String>,
    /// field 1827, wire `uwp_voip_camera_last_error_device_name`
    pub uwp_voip_camera_last_error_device_name: Option<String>,
    /// field 1828, wire `uwp_voip_camera_last_error_manufacturer_name`
    pub uwp_voip_camera_last_error_manufacturer_name: Option<String>,
    /// field 1829, wire `uwp_voip_camera_total_errors`
    pub uwp_voip_camera_total_errors: Option<i64>,
    /// field 1830, wire `uwp_voip_init_time`
    pub uwp_voip_init_time: Option<String>,
    /// field 1831, wire `uwp_voip_last_app_crash_reason`
    pub uwp_voip_last_app_crash_reason: Option<String>,
    /// field 1832, wire `uwp_voip_last_native_crash_reason`
    pub uwp_voip_last_native_crash_reason: Option<String>,
    /// field 1833, wire `uwp_voip_mic_last_error_device_name`
    pub uwp_voip_mic_last_error_device_name: Option<String>,
    /// field 1834, wire `uwp_voip_mic_last_error_manufacturer_name`
    pub uwp_voip_mic_last_error_manufacturer_name: Option<String>,
    /// field 1835, wire `uwp_voip_mic_total_errors`
    pub uwp_voip_mic_total_errors: Option<i64>,
    /// field 1836, wire `uwp_voip_num_anr_events`
    pub uwp_voip_num_anr_events: Option<i64>,
    /// field 1837, wire `uwp_voip_num_critical_events`
    pub uwp_voip_num_critical_events: Option<i64>,
    /// field 1838, wire `uwp_voip_num_unhandled_exception_events`
    pub uwp_voip_num_unhandled_exception_events: Option<i64>,
    /// field 1839, wire `uwp_voip_total_camera_devices`
    pub uwp_voip_total_camera_devices: Option<i64>,
    /// field 1840, wire `uwp_voip_total_mic_devices`
    pub uwp_voip_total_mic_devices: Option<i64>,
    /// field 1841, wire `uwp_voip_window_incoming_accept_to_call_layout_time`
    pub uwp_voip_window_incoming_accept_to_call_layout_time: Option<String>,
    /// field 1842, wire `uwp_voip_window_incoming_offer_to_layout_time`
    pub uwp_voip_window_incoming_offer_to_layout_time: Option<String>,
    /// field 1843, wire `uwp_voip_window_outgoing_launch_time`
    pub uwp_voip_window_outgoing_launch_time: Option<String>,
    /// field 1844, wire `aec_algorithm_used`
    pub aec_algorithm_used: Option<i64>,
    /// field 1845, wire `agc_algorithm_used`
    pub agc_algorithm_used: Option<i64>,
    /// field 1846, wire `ns_algorithm_used`
    pub ns_algorithm_used: Option<i64>,
    /// field 1847, wire `audio_codec_decoded_fec_bitrate`
    pub audio_codec_decoded_fec_bitrate: Option<String>,
    /// field 1848, wire `audio_codec_decoded_normal_bitrate`
    pub audio_codec_decoded_normal_bitrate: Option<String>,
    /// field 1849, wire `hbh_srtp_rx_e2e_enc_cnt`
    pub hbh_srtp_rx_e2e_enc_cnt: Option<i64>,
    /// field 1850, wire `hbh_srtp_rx_e2e_enc_err_cnt`
    pub hbh_srtp_rx_e2e_enc_err_cnt: Option<i64>,
    /// field 1851, wire `hbh_srtp_tx_pkt_error_cnt`
    pub hbh_srtp_tx_pkt_error_cnt: Option<i64>,
    /// field 1852, wire `warp_rx_e2e_srtp`
    pub warp_rx_e2e_srtp: Option<i64>,
    /// field 1853, wire `warp_rx_hbh_srtp`
    pub warp_rx_hbh_srtp: Option<i64>,
    /// field 1854, wire `warp_rx_no_pd_attr`
    pub warp_rx_no_pd_attr: Option<i64>,
    /// field 1855, wire `warp_tx_e2e_srtp`
    pub warp_tx_e2e_srtp: Option<i64>,
    /// field 1856, wire `warp_tx_hbh_srtp`
    pub warp_tx_hbh_srtp: Option<i64>,
    /// field 1857, wire `can_trigger_video_disabling`
    pub can_trigger_video_disabling: Option<bool>,
    /// field 1858, wire `dec_vid_stream_active_time`
    pub dec_vid_stream_active_time: Option<String>,
    /// field 1859, wire `enc_vid_stream_active_time`
    pub enc_vid_stream_active_time: Option<String>,
    /// field 1860, wire `enc_vid_stream_active_time_hq`
    pub enc_vid_stream_active_time_hq: Option<String>,
    /// field 1861, wire `group_call_maximized_peer_count`
    pub group_call_maximized_peer_count: Option<i64>,
    /// field 1862, wire `group_call_video_self_maximized_duration`
    pub group_call_video_self_maximized_duration: Option<String>,
    /// field 1863, wire `video_capture_port_recreate_count`
    pub video_capture_port_recreate_count: Option<i64>,
    /// field 1864, wire `last_min_jb_mean_wait_time`
    pub last_min_jb_mean_wait_time: Option<String>,
    /// field 1865, wire `last_min_jb_plc`
    pub last_min_jb_plc: Option<i64>,
    /// field 1866, wire `last_min_jb_plc_cng`
    pub last_min_jb_plc_cng: Option<i64>,
    /// field 1867, wire `transport_debug_bitmap`
    pub transport_debug_bitmap: Option<i64>,
    /// field 1872, wire `aud_share_avg_ducking_proc_time`
    pub aud_share_avg_ducking_proc_time: Option<String>,
    /// field 1873, wire `aud_share_ducking_proc_time500us_to1ms`
    pub aud_share_ducking_proc_time500us_to1ms: Option<i64>,
    /// field 1874, wire `aud_share_ducking_proc_time_gt1ms`
    pub aud_share_ducking_proc_time_gt1ms: Option<i64>,
    /// field 1875, wire `aud_share_ducking_proc_time_lt500us`
    pub aud_share_ducking_proc_time_lt500us: Option<i64>,
    /// field 1876, wire `sfu_downlink_dynamic_init_bwe_fallback_count`
    pub sfu_downlink_dynamic_init_bwe_fallback_count: Option<i64>,
    /// field 1877, wire `user_redial_count`
    pub user_redial_count: Option<i64>,
    /// field 1878, wire `audio_put_frame_overflow_count`
    pub audio_put_frame_overflow_count: Option<i64>,
    /// field 1879, wire `device_native_sampling_rate`
    pub device_native_sampling_rate: Option<i64>,
    /// field 1880, wire `better_p2p_conn_quality_stat`
    pub better_p2p_conn_quality_stat: Option<String>,
    /// field 1881, wire `better_relay_conn_quality_stat`
    pub better_relay_conn_quality_stat: Option<String>,
    /// field 1882, wire `dual_stack_transport_enabled`
    pub dual_stack_transport_enabled: Option<bool>,
    /// field 1883, wire `p2p_local_cand_af`
    pub p2p_local_cand_af: Option<CLIENTIPVERSION>,
    /// field 1884, wire `p2p_remote_cand_af`
    pub p2p_remote_cand_af: Option<CLIENTIPVERSION>,
    /// field 1885, wire `random_prefer_ipv6_enabled`
    pub random_prefer_ipv6_enabled: Option<bool>,
    /// field 1886, wire `transport_restart_cnt`
    pub transport_restart_cnt: Option<i64>,
    /// field 1887, wire `transport_restart_reason_bitmap`
    pub transport_restart_reason_bitmap: Option<i64>,
    /// field 1888, wire `v4_relay_conn_quality_stat`
    pub v4_relay_conn_quality_stat: Option<String>,
    /// field 1889, wire `v6_relay_conn_quality_stat`
    pub v6_relay_conn_quality_stat: Option<String>,
    /// field 1890, wire `call_test_bucket_id_list`
    pub call_test_bucket_id_list: Option<String>,
    /// field 1891, wire `connect_to_decode_t`
    pub connect_to_decode_t: Option<String>,
    /// field 1892, wire `prev_call_test_bucket_id_list`
    pub prev_call_test_bucket_id_list: Option<String>,
    /// field 1893, wire `wa_calling_init_dl_bwe_reuse2p`
    pub wa_calling_init_dl_bwe_reuse2p: Option<i64>,
    /// field 1894, wire `wa_calling_init_ul_bwe_reuse2p`
    pub wa_calling_init_ul_bwe_reuse2p: Option<i64>,
    /// field 1895, wire `wa_calling_sfu_last2p_segment_sbwe`
    pub wa_calling_sfu_last2p_segment_sbwe: Option<i64>,
    /// field 1896, wire `wa_calling_sfu_last2p_segment_total_rx_bitrate`
    pub wa_calling_sfu_last2p_segment_total_rx_bitrate: Option<i64>,
    /// field 1897, wire `call_end_reconnecting_e2e_pingable`
    pub call_end_reconnecting_e2e_pingable: Option<bool>,
    /// field 1898, wire `call_end_reconnecting_e2e_signaling_accessible`
    pub call_end_reconnecting_e2e_signaling_accessible: Option<bool>,
    /// field 1899, wire `reconnecting_with_probe_rsp_count`
    pub reconnecting_with_probe_rsp_count: Option<i64>,
    /// field 1900, wire `tcp_connected_count`
    pub tcp_connected_count: Option<i64>,
    /// field 1901, wire `reconnecting_with_p2p_e2e_bind_rsp_count`
    pub reconnecting_with_p2p_e2e_bind_rsp_count: Option<i64>,
    /// field 1902, wire `reconnecting_with_relay_e2e_bind_rsp_count`
    pub reconnecting_with_relay_e2e_bind_rsp_count: Option<i64>,
    /// field 1903, wire `call_on_nonoptimal_relay_ms`
    pub call_on_nonoptimal_relay_ms: Option<String>,
    /// field 1904, wire `hbh_srtcp_rx_success_srtp_afb_batch_pkt_cnt`
    pub hbh_srtcp_rx_success_srtp_afb_batch_pkt_cnt: Option<i64>,
    /// field 1905, wire `hbh_srtcp_tx_srtp_afb_batch_pkt_cnt`
    pub hbh_srtcp_tx_srtp_afb_batch_pkt_cnt: Option<i64>,
    /// field 1906, wire `segment_start_to_decode_t`
    pub segment_start_to_decode_t: Option<String>,
    /// field 1907, wire `hbh_srtp_rx_warp_roc_cnt`
    pub hbh_srtp_rx_warp_roc_cnt: Option<i64>,
    /// field 1908, wire `relay_latency_stanzas_received_count`
    pub relay_latency_stanzas_received_count: Option<i64>,
    /// field 1909, wire `call_relay_servers`
    pub call_relay_servers: Option<String>,
    /// field 1910, wire `tcp_failure_status`
    pub tcp_failure_status: Option<String>,
    /// field 1911, wire `network_medium_transition_bitmap`
    pub network_medium_transition_bitmap: Option<i64>,
    /// field 1912, wire `none_net_transition_duration_ms`
    pub none_net_transition_duration_ms: Option<String>,
    /// field 1913, wire `call_minimized_duration_t`
    pub call_minimized_duration_t: Option<String>,
    /// field 1914, wire `incoming_call_notification_state`
    pub incoming_call_notification_state: Option<INCOMINGCALLNOTIFICATIONSTATETYPE>,
    /// field 1915, wire `gc_bad_status_during_video_disabling`
    pub gc_bad_status_during_video_disabling: Option<String>,
    /// field 1917, wire `answer_call_duration_ms`
    pub answer_call_duration_ms: Option<i64>,
    /// field 1918, wire `start_call_duration_ms`
    pub start_call_duration_ms: Option<i64>,
    /// field 1919, wire `call_test_bucket_name_list`
    pub call_test_bucket_name_list: Option<String>,
    /// field 1920, wire `prev_call_test_bucket_name_list`
    pub prev_call_test_bucket_name_list: Option<String>,
    /// field 1921, wire `is_in_sym_nat`
    pub is_in_sym_nat: Option<bool>,
    /// field 1922, wire `peer_is_multi_device`
    pub peer_is_multi_device: Option<bool>,
    /// field 1923, wire `sts_af_switch_cnt`
    pub sts_af_switch_cnt: Option<i64>,
    /// field 1924, wire `transport_max_dns_resolve_delay_ms`
    pub transport_max_dns_resolve_delay_ms: Option<String>,
    /// field 1925, wire `transport_max_neg_rtt_ms`
    pub transport_max_neg_rtt_ms: Option<String>,
    /// field 1928, wire `is_events_link`
    pub is_events_link: Option<bool>,
    /// field 1929, wire `call_avg_rx_stopped_t`
    pub call_avg_rx_stopped_t: Option<String>,
    /// field 1930, wire `call_last_rx_stopped_t`
    pub call_last_rx_stopped_t: Option<String>,
    /// field 1931, wire `call_max_rx_stopped_t`
    pub call_max_rx_stopped_t: Option<String>,
    /// field 1932, wire `call_min_rx_stopped_t`
    pub call_min_rx_stopped_t: Option<String>,
    /// field 1933, wire `loudness_output_noise_frames2650`
    pub loudness_output_noise_frames2650: Option<i64>,
    /// field 1934, wire `loudness_output_noise_frames5175`
    pub loudness_output_noise_frames5175: Option<i64>,
    /// field 1935, wire `loudness_output_noise_frames76100`
    pub loudness_output_noise_frames76100: Option<i64>,
    /// field 1936, wire `loudness_output_noise_frames_gt100`
    pub loudness_output_noise_frames_gt100: Option<i64>,
    /// field 1937, wire `loudness_output_noise_frames_leq25`
    pub loudness_output_noise_frames_leq25: Option<i64>,
    /// field 1938, wire `ar_effect_attempted_count`
    pub ar_effect_attempted_count: Option<i64>,
    /// field 1939, wire `ar_effect_canceled_count`
    pub ar_effect_canceled_count: Option<i64>,
    /// field 1940, wire `ar_effect_duration_t`
    pub ar_effect_duration_t: Option<String>,
    /// field 1941, wire `ar_effect_enabled_count`
    pub ar_effect_enabled_count: Option<i64>,
    /// field 1942, wire `ar_effect_failed_count`
    pub ar_effect_failed_count: Option<i64>,
    /// field 1943, wire `ar_effect_loading_t`
    pub ar_effect_loading_t: Option<String>,
    /// field 1944, wire `iglu_effect_attempted_count`
    pub iglu_effect_attempted_count: Option<i64>,
    /// field 1945, wire `iglu_effect_canceled_count`
    pub iglu_effect_canceled_count: Option<i64>,
    /// field 1946, wire `iglu_effect_duration_t`
    pub iglu_effect_duration_t: Option<String>,
    /// field 1947, wire `iglu_effect_enabled_count`
    pub iglu_effect_enabled_count: Option<i64>,
    /// field 1948, wire `iglu_effect_failed_count`
    pub iglu_effect_failed_count: Option<i64>,
    /// field 1949, wire `iglu_effect_loading_t`
    pub iglu_effect_loading_t: Option<String>,
    /// field 1950, wire `call_end_reconnecting_unexpected_bitmap`
    pub call_end_reconnecting_unexpected_bitmap: Option<i64>,
    /// field 1951, wire `hscroll_interact_count`
    pub hscroll_interact_count: Option<i64>,
    /// field 1952, wire `unified_session_id`
    pub unified_session_id: Option<String>,
    /// field 1953, wire `max_target_bitrate_vid_reaches1000kbps_duration`
    pub max_target_bitrate_vid_reaches1000kbps_duration: Option<String>,
    /// field 1954, wire `max_target_bitrate_vid_reaches1500kbps_duration`
    pub max_target_bitrate_vid_reaches1500kbps_duration: Option<String>,
    /// field 1955, wire `max_target_bitrate_vid_reaches2000kbps_duration`
    pub max_target_bitrate_vid_reaches2000kbps_duration: Option<String>,
    /// field 1956, wire `max_target_bitrate_vid_reaches500kbps_duration`
    pub max_target_bitrate_vid_reaches500kbps_duration: Option<String>,
    /// field 1957, wire `peer_year_class2016`
    pub peer_year_class2016: Option<i64>,
    /// field 1958, wire `num_hbh_fec_srtp_pkt_received`
    pub num_hbh_fec_srtp_pkt_received: Option<i64>,
    /// field 1959, wire `num_hbh_fec_srtp_pkt_sent`
    pub num_hbh_fec_srtp_pkt_sent: Option<i64>,
    /// field 1960, wire `num_media_pkt_recovered_by_hbh_fec_srtp`
    pub num_media_pkt_recovered_by_hbh_fec_srtp: Option<i64>,
    /// field 1961, wire `rx_hbh_fec_srtp_bitrate_kbps`
    pub rx_hbh_fec_srtp_bitrate_kbps: Option<i64>,
    /// field 1962, wire `tx_hbh_fec_srtp_bitrate_kbps`
    pub tx_hbh_fec_srtp_bitrate_kbps: Option<i64>,
    /// field 1963, wire `alloc_error_relay_failover_cnt`
    pub alloc_error_relay_failover_cnt: Option<i64>,
    /// field 1964, wire `call_sampled_for_probing`
    pub call_sampled_for_probing: Option<bool>,
    /// field 1965, wire `second_best_relay_ip`
    pub second_best_relay_ip: Option<String>,
    /// field 1967, wire `google_play_services_status`
    pub google_play_services_status: Option<GOOGLEPLAYSERVICESSTATUS>,
    /// field 1968, wire `ringer_mode`
    pub ringer_mode: Option<RINGERMODE>,
    /// field 1969, wire `downlink_sbwe_rtt_slope_congestion_count`
    pub downlink_sbwe_rtt_slope_congestion_count: Option<i64>,
    /// field 1970, wire `uplink_sbwe_rtt_slope_congestion_count`
    pub uplink_sbwe_rtt_slope_congestion_count: Option<i64>,
    /// field 1971, wire `history_ransport_selection_sock_addr_family`
    pub history_ransport_selection_sock_addr_family: Option<i64>,
    /// field 1972, wire `history_transport_selection_matched_record_count`
    pub history_transport_selection_matched_record_count: Option<i64>,
    /// field 1973, wire `redial_after_cer`
    pub redial_after_cer: Option<bool>,
    /// field 1974, wire `reconnecting_with_e2e_bind_rsp_count`
    pub reconnecting_with_e2e_bind_rsp_count: Option<i64>,
    /// field 1975, wire `reconnecting_with_e2e_rsp_count`
    pub reconnecting_with_e2e_rsp_count: Option<i64>,
    /// field 1976, wire `reconnecting_with_relay_pingable_count`
    pub reconnecting_with_relay_pingable_count: Option<i64>,
    /// field 1977, wire `reconnecting_with_signaling_accessible_count`
    pub reconnecting_with_signaling_accessible_count: Option<i64>,
    /// field 1978, wire `has_fbns_push_token`
    pub has_fbns_push_token: Option<bool>,
    /// field 1979, wire `has_fcm_push_token`
    pub has_fcm_push_token: Option<bool>,
    /// field 1981, wire `sfu_downlink_rbwe_low_no_cong_cnt`
    pub sfu_downlink_rbwe_low_no_cong_cnt: Option<i64>,
    /// field 1982, wire `sfu_uplink_rbwe_low_no_cong_cnt`
    pub sfu_uplink_rbwe_low_no_cong_cnt: Option<i64>,
    /// field 1983, wire `offer_push_provider`
    pub offer_push_provider: Option<PUSHPROVIDER>,
    /// field 1984, wire `webrtc_compatible`
    pub webrtc_compatible: Option<bool>,
    /// field 1985, wire `skip_set_vid_stream_active_from_none_cnt`
    pub skip_set_vid_stream_active_from_none_cnt: Option<i64>,
    /// field 1986, wire `skip_set_vid_stream_active_from_pause_cnt`
    pub skip_set_vid_stream_active_from_pause_cnt: Option<i64>,
    /// field 1987, wire `skip_vid_conn_on_create_cnt`
    pub skip_vid_conn_on_create_cnt: Option<i64>,
    /// field 1988, wire `avg_echo_confidence_before_ec`
    pub avg_echo_confidence_before_ec: Option<i64>,
    /// field 1989, wire `echo_confidence_before_ec`
    pub echo_confidence_before_ec: Option<i64>,
    /// field 1990, wire `call_trigger`
    pub call_trigger: Option<CALLTRIGGER>,
    /// field 1991, wire `speaker_view_duration`
    pub speaker_view_duration: Option<i64>,
    /// field 1992, wire `video_rx_bitrate_dominant_speaker_in_speaker_mode`
    pub video_rx_bitrate_dominant_speaker_in_speaker_mode: Option<i64>,
    /// field 1993, wire `video_rx_bitrate_dominant_speaker_with_peer_in_speaker_mode`
    pub video_rx_bitrate_dominant_speaker_with_peer_in_speaker_mode: Option<i64>,
    /// field 1994, wire `video_rx_bitrate_non_speaker_in_speaker_mode`
    pub video_rx_bitrate_non_speaker_in_speaker_mode: Option<i64>,
    /// field 1995, wire `video_rx_bitrate_non_speaker_with_peer_in_speaker_mode`
    pub video_rx_bitrate_non_speaker_with_peer_in_speaker_mode: Option<i64>,
    /// field 1996, wire `transport_srtp_rtp_cb_not_attached_on_cgu`
    pub transport_srtp_rtp_cb_not_attached_on_cgu: Option<i64>,
    /// field 1997, wire `transport_srtp_rx_auth_fail_on_cgu`
    pub transport_srtp_rx_auth_fail_on_cgu: Option<i64>,
    /// field 1998, wire `transport_srtp_unknown_ssrc_on_cgu`
    pub transport_srtp_unknown_ssrc_on_cgu: Option<i64>,
    /// field 1999, wire `sfu_downlink_packet_pair_avg_bitrate`
    pub sfu_downlink_packet_pair_avg_bitrate: Option<i64>,
    /// field 2000, wire `sfu_downlink_packet_pair_reliable_ratio`
    pub sfu_downlink_packet_pair_reliable_ratio: Option<String>,
    /// field 2001, wire `sfu_downlink_packet_pair_underestimate_ratio`
    pub sfu_downlink_packet_pair_underestimate_ratio: Option<String>,
    /// field 2002, wire `sfu_uplink_packet_pair_avg_bitrate`
    pub sfu_uplink_packet_pair_avg_bitrate: Option<i64>,
    /// field 2003, wire `sfu_uplink_packet_pair_reliable_ratio`
    pub sfu_uplink_packet_pair_reliable_ratio: Option<String>,
    /// field 2004, wire `sfu_uplink_packet_pair_underestimate_ratio`
    pub sfu_uplink_packet_pair_underestimate_ratio: Option<String>,
    /// field 2005, wire `dropped_net_event_count`
    pub dropped_net_event_count: Option<i64>,
    /// field 2006, wire `peer_reconnecting_state_count`
    pub peer_reconnecting_state_count: Option<i64>,
    /// field 2007, wire `busy_reason`
    pub busy_reason: Option<BUSYREASON>,
    /// field 2008, wire `num_relay_latencies_acked`
    pub num_relay_latencies_acked: Option<i64>,
    /// field 2009, wire `num_relay_latencies_sent`
    pub num_relay_latencies_sent: Option<i64>,
    /// field 2010, wire `num_cpu_cores`
    pub num_cpu_cores: Option<i64>,
    /// field 2011, wire `total_memory_gb`
    pub total_memory_gb: Option<i64>,
    /// field 2012, wire `previous_call_call_end_reconnecting_e2e_pingable`
    pub previous_call_call_end_reconnecting_e2e_pingable: Option<bool>,
    /// field 2013, wire `previous_call_call_end_reconnecting_e2e_signaling_accessible`
    pub previous_call_call_end_reconnecting_e2e_signaling_accessible: Option<bool>,
    /// field 2014, wire `previous_call_call_end_reconnecting_relay_pingable`
    pub previous_call_call_end_reconnecting_relay_pingable: Option<bool>,
    /// field 2015, wire `previous_call_call_end_reconnecting_signaling_accessible`
    pub previous_call_call_end_reconnecting_signaling_accessible: Option<bool>,
    /// field 2016, wire `previous_call_weak_wifi_switch_def_int_success`
    pub previous_call_weak_wifi_switch_def_int_success: Option<i64>,
    /// field 2017, wire `previous_call_wifi_switch_non_def_int_success`
    pub previous_call_wifi_switch_non_def_int_success: Option<i64>,
    /// field 2019, wire `transport_srtp_tx_ctx_not_found`
    pub transport_srtp_tx_ctx_not_found: Option<i64>,
    /// field 2020, wire `redial_interval_sec`
    pub redial_interval_sec: Option<String>,
    /// field 2021, wire `call_result_at_app_exit`
    pub call_result_at_app_exit: Option<CALLRESULTTYPE>,
    /// field 2022, wire `ml_tr_model_avg_pred_len`
    pub ml_tr_model_avg_pred_len: Option<String>,
    /// field 2024, wire `ml_tr_model_bwe_action`
    pub ml_tr_model_bwe_action: Option<i64>,
    /// field 2025, wire `ml_tr_model_num_non_tr_predictions`
    pub ml_tr_model_num_non_tr_predictions: Option<i64>,
    /// field 2026, wire `ml_tr_model_num_skipped_tr_predictions`
    pub ml_tr_model_num_skipped_tr_predictions: Option<i64>,
    /// field 2027, wire `ml_tr_model_num_tr_predictions`
    pub ml_tr_model_num_tr_predictions: Option<i64>,
    /// field 2028, wire `ml_tr_model_start_bitrate`
    pub ml_tr_model_start_bitrate: Option<i64>,
    /// field 2029, wire `bwa_count_prioritize_dom_spkr_in_speaker_mode`
    pub bwa_count_prioritize_dom_spkr_in_speaker_mode: Option<i64>,
    /// field 2030, wire `peer_speaker_view_duration_ms`
    pub peer_speaker_view_duration_ms: Option<String>,
    /// field 2031, wire `device_ar_class`
    pub device_ar_class: Option<i64>,
    /// field 2032, wire `gc_upgrade_attempts`
    pub gc_upgrade_attempts: Option<i64>,
    /// field 2033, wire `gc_upgrade_offer_ack_latency_ms`
    pub gc_upgrade_offer_ack_latency_ms: Option<String>,
    /// field 2034, wire `gc_upgrade_offer_error_code`
    pub gc_upgrade_offer_error_code: Option<i64>,
    /// field 2035, wire `gc_upgrade_offer_participant_count`
    pub gc_upgrade_offer_participant_count: Option<i64>,
    /// field 2036, wire `gc_initiation_type`
    pub gc_initiation_type: Option<GCINITIATIONTYPE>,
    /// field 2037, wire `genai_initial_connection_latency_ms`
    pub genai_initial_connection_latency_ms: Option<String>,
    /// field 2038, wire `ml_tr_model_avg_inference_time`
    pub ml_tr_model_avg_inference_time: Option<String>,
    /// field 2039, wire `ml_tr_model_download_failure_count`
    pub ml_tr_model_download_failure_count: Option<i64>,
    /// field 2040, wire `ml_tr_model_inference_failure_count`
    pub ml_tr_model_inference_failure_count: Option<i64>,
    /// field 2041, wire `ml_tr_model_max_inference_time`
    pub ml_tr_model_max_inference_time: Option<String>,
    /// field 2042, wire `ml_tr_model_min_inference_time`
    pub ml_tr_model_min_inference_time: Option<String>,
    /// field 2043, wire `ml_tr_shim_avg_creation_time`
    pub ml_tr_shim_avg_creation_time: Option<String>,
    /// field 2044, wire `ml_tr_shim_creation_failure_count`
    pub ml_tr_shim_creation_failure_count: Option<i64>,
    /// field 2045, wire `call_test_bucket_exposure_map`
    pub call_test_bucket_exposure_map: Option<String>,
    /// field 2046, wire `prev_call_test_bucket_exposure_map`
    pub prev_call_test_bucket_exposure_map: Option<String>,
    /// field 2047, wire `first_offer_push_received_since_call_initiation_ms`
    pub first_offer_push_received_since_call_initiation_ms: Option<String>,
    /// field 2048, wire `first_offer_push_sent_by_provider_since_call_initiation_ms`
    pub first_offer_push_sent_by_provider_since_call_initiation_ms: Option<String>,
    /// field 2049, wire `first_offer_push_sent_by_pushd_since_call_initiation_ms`
    pub first_offer_push_sent_by_pushd_since_call_initiation_ms: Option<String>,
    /// field 2050, wire `transport_p2p_peer_msg_cnt`
    pub transport_p2p_peer_msg_cnt: Option<i64>,
    /// field 2051, wire `transport_rtp_zero_payload_cnt`
    pub transport_rtp_zero_payload_cnt: Option<i64>,
    /// field 2052, wire `transport_rx_alloc_total_cnt`
    pub transport_rx_alloc_total_cnt: Option<i64>,
    /// field 2053, wire `transport_rx_relay_set_implictly_to_tx`
    pub transport_rx_relay_set_implictly_to_tx: Option<bool>,
    /// field 2054, wire `first_network_medium`
    pub first_network_medium: Option<i64>,
    /// field 2055, wire `gap_recovered_by_p2p_fallback`
    pub gap_recovered_by_p2p_fallback: Option<i64>,
    /// field 2056, wire `gap_recovered_by_rebind`
    pub gap_recovered_by_rebind: Option<i64>,
    /// field 2057, wire `gap_recovered_by_relay_failover`
    pub gap_recovered_by_relay_failover: Option<i64>,
    /// field 2058, wire `gap_recovered_by_weak_wifi`
    pub gap_recovered_by_weak_wifi: Option<i64>,
    /// field 2059, wire `is_bridged_ipv6`
    pub is_bridged_ipv6: Option<bool>,
    /// field 2060, wire `ui_reconnecting`
    pub ui_reconnecting: Option<i64>,
    /// field 2061, wire `weak_net_condition_by_jitter`
    pub weak_net_condition_by_jitter: Option<i64>,
    /// field 2062, wire `weak_net_condition_by_loss_period`
    pub weak_net_condition_by_loss_period: Option<i64>,
    /// field 2063, wire `weak_net_condition_by_plr`
    pub weak_net_condition_by_plr: Option<i64>,
    /// field 2064, wire `weak_none_net_condition_detected`
    pub weak_none_net_condition_detected: Option<i64>,
    /// field 2066, wire `time_since_last_push_received_ms`
    pub time_since_last_push_received_ms: Option<String>,
    /// field 2067, wire `first_offer_push_delivered_priority`
    pub first_offer_push_delivered_priority: Option<DELIVEREDPRIORITY>,
    /// field 2068, wire `unbound_relay_list`
    pub unbound_relay_list: Option<String>,
    /// field 2069, wire `call_self_v4_ip`
    pub call_self_v4_ip: Option<String>,
    /// field 2070, wire `call_self_v6_ip`
    pub call_self_v6_ip: Option<String>,
    /// field 2071, wire `has_working_dual_stack_p2p`
    pub has_working_dual_stack_p2p: Option<bool>,
    /// field 2072, wire `is_ipv6_behind_nat`
    pub is_ipv6_behind_nat: Option<bool>,
    /// field 2073, wire `server_preferred_ipv6`
    pub server_preferred_ipv6: Option<bool>,
    /// field 2074, wire `gc_rekey_master_error`
    pub gc_rekey_master_error: Option<GCREKEYMASTERERROR>,
    /// field 2075, wire `is_gc_rekey_master`
    pub is_gc_rekey_master: Option<bool>,
    /// field 2076, wire `call_end_relay_binds_failed`
    pub call_end_relay_binds_failed: Option<bool>,
    /// field 2077, wire `call_result_anc`
    pub call_result_anc: Option<i64>,
    /// field 2078, wire `group_call_anc_fix_peer_count`
    pub group_call_anc_fix_peer_count: Option<i64>,
    /// field 2079, wire `group_call_anc_fix_self_count`
    pub group_call_anc_fix_self_count: Option<i64>,
    /// field 2080, wire `genai_entry_point`
    pub genai_entry_point: Option<GENAIENTRYPOINT>,
    /// field 2081, wire `genai_exit_point`
    pub genai_exit_point: Option<GENAIEXITPOINT>,
    /// field 2082, wire `genai_num_requests_sent`
    pub genai_num_requests_sent: Option<i64>,
    /// field 2083, wire `genai_num_response_images`
    pub genai_num_response_images: Option<i64>,
    /// field 2084, wire `genai_num_response_reels`
    pub genai_num_response_reels: Option<i64>,
    /// field 2085, wire `genai_num_response_search_results`
    pub genai_num_response_search_results: Option<i64>,
    /// field 2086, wire `genai_num_responses_received`
    pub genai_num_responses_received: Option<i64>,
    /// field 2087, wire `genai_response_full_sheet`
    pub genai_response_full_sheet: Option<bool>,
    /// field 2088, wire `dynamic_init_bwe_fallback_count`
    pub dynamic_init_bwe_fallback_count: Option<i64>,
    /// field 2089, wire `video_render_harmonic_fps_avg`
    pub video_render_harmonic_fps_avg: Option<String>,
    /// field 2090, wire `video_render_harmonic_fps_p5`
    pub video_render_harmonic_fps_p5: Option<String>,
    /// field 2091, wire `video_render_harmonic_fps_p50`
    pub video_render_harmonic_fps_p50: Option<String>,
    /// field 2092, wire `video_render_harmonic_fps_p95`
    pub video_render_harmonic_fps_p95: Option<String>,
    /// field 2093, wire `transport_rx_historical_relay_pkt_cnt`
    pub transport_rx_historical_relay_pkt_cnt: Option<i64>,
    /// field 2094, wire `genai_num_response_text_results`
    pub genai_num_response_text_results: Option<i64>,
    /// field 2095, wire `video_rx_rs_fec_bitrate`
    pub video_rx_rs_fec_bitrate: Option<String>,
    /// field 2096, wire `video_rx_rs_fec_pkts`
    pub video_rx_rs_fec_pkts: Option<i64>,
    /// field 2097, wire `video_tx_rs_fec_bitrate`
    pub video_tx_rs_fec_bitrate: Option<String>,
    /// field 2098, wire `video_tx_rs_fec_pkts`
    pub video_tx_rs_fec_pkts: Option<i64>,
    /// field 2099, wire `avg_consecutive_udst_prediction_len`
    pub avg_consecutive_udst_prediction_len: Option<i64>,
    /// field 2100, wire `genai_response_latency_avg_ms`
    pub genai_response_latency_avg_ms: Option<String>,
    /// field 2101, wire `genai_response_latency_p50_ms`
    pub genai_response_latency_p50_ms: Option<String>,
    /// field 2102, wire `genai_response_latency_p90_ms`
    pub genai_response_latency_p90_ms: Option<String>,
    /// field 2103, wire `one_to_one_terminate_count`
    pub one_to_one_terminate_count: Option<i64>,
    /// field 2104, wire `data_channel_connection_state`
    pub data_channel_connection_state: Option<DATACHANNELCONNECTIONSTATE>,
    /// field 2105, wire `data_channel_rx_bytes`
    pub data_channel_rx_bytes: Option<i64>,
    /// field 2106, wire `data_channel_rx_bytes_dropped`
    pub data_channel_rx_bytes_dropped: Option<i64>,
    /// field 2107, wire `data_channel_rx_msgs`
    pub data_channel_rx_msgs: Option<i64>,
    /// field 2108, wire `data_channel_setup_t`
    pub data_channel_setup_t: Option<String>,
    /// field 2109, wire `data_channel_tx_buffered_msgs`
    pub data_channel_tx_buffered_msgs: Option<i64>,
    /// field 2110, wire `data_channel_tx_bytes`
    pub data_channel_tx_bytes: Option<i64>,
    /// field 2111, wire `data_channel_tx_bytes_dropped`
    pub data_channel_tx_bytes_dropped: Option<i64>,
    /// field 2112, wire `data_channel_tx_msgs`
    pub data_channel_tx_msgs: Option<i64>,
    /// field 2113, wire `data_channel_tx_reliable_msgs`
    pub data_channel_tx_reliable_msgs: Option<i64>,
    /// field 2114, wire `dtls_connection_setup_t`
    pub dtls_connection_setup_t: Option<String>,
    /// field 2115, wire `dtls_rx_bytes`
    pub dtls_rx_bytes: Option<i64>,
    /// field 2116, wire `dtls_rx_packets`
    pub dtls_rx_packets: Option<i64>,
    /// field 2117, wire `dtls_rx_packets_dropped`
    pub dtls_rx_packets_dropped: Option<i64>,
    /// field 2118, wire `dtls_tx_bytes`
    pub dtls_tx_bytes: Option<i64>,
    /// field 2119, wire `dtls_tx_packets`
    pub dtls_tx_packets: Option<i64>,
    /// field 2120, wire `dtls_tx_packets_dropped`
    pub dtls_tx_packets_dropped: Option<i64>,
    /// field 2121, wire `sctp_connection_setup_t`
    pub sctp_connection_setup_t: Option<String>,
    /// field 2122, wire `audio_dev_is_stalled`
    pub audio_dev_is_stalled: Option<bool>,
    /// field 2123, wire `audio_device_startup_status`
    pub audio_device_startup_status: Option<i64>,
    /// field 2124, wire `call_has_no_audio`
    pub call_has_no_audio: Option<bool>,
    /// field 2125, wire `no_audio_duration`
    pub no_audio_duration: Option<i64>,
    /// field 2126, wire `hbh_srtcp_tx_warp_tf_pkt_cnt`
    pub hbh_srtcp_tx_warp_tf_pkt_cnt: Option<i64>,
    /// field 2127, wire `ml_cong_model_avg_inference_time`
    pub ml_cong_model_avg_inference_time: Option<String>,
    /// field 2128, wire `ml_cong_model_avg_pred_len`
    pub ml_cong_model_avg_pred_len: Option<String>,
    /// field 2130, wire `ml_cong_model_download_failure_count`
    pub ml_cong_model_download_failure_count: Option<i64>,
    /// field 2131, wire `ml_cong_model_inference_failure_count`
    pub ml_cong_model_inference_failure_count: Option<i64>,
    /// field 2132, wire `ml_cong_model_max_inference_time`
    pub ml_cong_model_max_inference_time: Option<String>,
    /// field 2133, wire `ml_cong_model_min_inference_time`
    pub ml_cong_model_min_inference_time: Option<String>,
    /// field 2134, wire `ml_cong_model_num_cong_predictions`
    pub ml_cong_model_num_cong_predictions: Option<i64>,
    /// field 2135, wire `ml_cong_model_num_non_cong_predictions`
    pub ml_cong_model_num_non_cong_predictions: Option<i64>,
    /// field 2136, wire `ml_cong_model_start_bitrate`
    pub ml_cong_model_start_bitrate: Option<i64>,
    /// field 2137, wire `ml_cong_shim_avg_creation_time`
    pub ml_cong_shim_avg_creation_time: Option<String>,
    /// field 2138, wire `ml_cong_shim_creation_failure_count`
    pub ml_cong_shim_creation_failure_count: Option<i64>,
    /// field 2139, wire `genai_voice_selection`
    pub genai_voice_selection: Option<String>,
    /// field 2140, wire `warp_client_nack_rtx_audio`
    pub warp_client_nack_rtx_audio: Option<i64>,
    /// field 2141, wire `warp_client_nack_rtx_video`
    pub warp_client_nack_rtx_video: Option<i64>,
    /// field 2142, wire `warp_server_nack_rtx_audio`
    pub warp_server_nack_rtx_audio: Option<i64>,
    /// field 2143, wire `warp_server_nack_rtx_video`
    pub warp_server_nack_rtx_video: Option<i64>,
    /// field 2144, wire `lobby_entry_point`
    pub lobby_entry_point: Option<LOBBYENTRYPOINTTYPE>,
    /// field 2145, wire `vmos_avg`
    pub vmos_avg: Option<String>,
    /// field 2146, wire `vmos_p5`
    pub vmos_p5: Option<String>,
    /// field 2147, wire `vmos_p50`
    pub vmos_p50: Option<String>,
    /// field 2148, wire `vmos_p95`
    pub vmos_p95: Option<String>,
    /// field 2149, wire `genai_initial_transcription_latency_ms`
    pub genai_initial_transcription_latency_ms: Option<String>,
    /// field 2150, wire `warp_sn_error_bad_cnt`
    pub warp_sn_error_bad_cnt: Option<i64>,
    /// field 2151, wire `warp_sn_error_ooo_cnt`
    pub warp_sn_error_ooo_cnt: Option<i64>,
    /// field 2152, wire `warp_sn_error_reset_cnt`
    pub warp_sn_error_reset_cnt: Option<i64>,
    /// field 2153, wire `warp_sn_rx_cnt`
    pub warp_sn_rx_cnt: Option<i64>,
    /// field 2154, wire `time_dec_reach1280w`
    pub time_dec_reach1280w: Option<String>,
    /// field 2155, wire `time_dec_reach640w`
    pub time_dec_reach640w: Option<String>,
    /// field 2156, wire `time_enc_reach1280w`
    pub time_enc_reach1280w: Option<String>,
    /// field 2157, wire `time_enc_reach640w`
    pub time_enc_reach640w: Option<String>,
    /// field 2158, wire `e2ee_retry_count`
    pub e2ee_retry_count: Option<i64>,
    /// field 2159, wire `network_reachability_result`
    pub network_reachability_result: Option<String>,
    /// field 2160, wire `connected_to_vpn_at_call_start`
    pub connected_to_vpn_at_call_start: Option<bool>,
    /// field 2161, wire `time_dec_reach480w`
    pub time_dec_reach480w: Option<String>,
    /// field 2162, wire `time_enc_reach480w`
    pub time_enc_reach480w: Option<String>,
    /// field 2163, wire `sfu_downlink_udst_mcp_avg_start_bitrate`
    pub sfu_downlink_udst_mcp_avg_start_bitrate: Option<i64>,
    /// field 2164, wire `sfu_downlink_udst_mcp_avg_stop_bitrate`
    pub sfu_downlink_udst_mcp_avg_stop_bitrate: Option<i64>,
    /// field 2165, wire `sfu_downlink_undershoot_trigger_mcp_count`
    pub sfu_downlink_undershoot_trigger_mcp_count: Option<i64>,
    /// field 2166, wire `sfu_uplink_udst_mcp_avg_start_bitrate`
    pub sfu_uplink_udst_mcp_avg_start_bitrate: Option<i64>,
    /// field 2167, wire `sfu_uplink_udst_mcp_avg_stop_bitrate`
    pub sfu_uplink_udst_mcp_avg_stop_bitrate: Option<i64>,
    /// field 2168, wire `sfu_uplink_undershoot_trigger_mcp_count`
    pub sfu_uplink_undershoot_trigger_mcp_count: Option<i64>,
    /// field 2169, wire `avg_rx_delay`
    pub avg_rx_delay: Option<String>,
    /// field 2170, wire `avg_tx_delay`
    pub avg_tx_delay: Option<String>,
    /// field 2171, wire `delay_reset_count`
    pub delay_reset_count: Option<i64>,
    /// field 2172, wire `rx_delay_higher_than_rtt_count`
    pub rx_delay_higher_than_rtt_count: Option<i64>,
    /// field 2173, wire `rx_delay_negative_count`
    pub rx_delay_negative_count: Option<i64>,
    /// field 2174, wire `sbwe_ceiling_delay_congestion_count`
    pub sbwe_ceiling_delay_congestion_count: Option<i64>,
    /// field 2175, wire `sbwe_ceiling_rtt_and_delay_congestion_count`
    pub sbwe_ceiling_rtt_and_delay_congestion_count: Option<i64>,
    /// field 2176, wire `sfu_downlink_sbwe_ceiling_delay_congestion_count`
    pub sfu_downlink_sbwe_ceiling_delay_congestion_count: Option<i64>,
    /// field 2177, wire `sfu_downlink_sbwe_ceiling_rtt_and_delay_congestion_count`
    pub sfu_downlink_sbwe_ceiling_rtt_and_delay_congestion_count: Option<i64>,
    /// field 2178, wire `sfu_uplink_sbwe_ceiling_delay_congestion_count`
    pub sfu_uplink_sbwe_ceiling_delay_congestion_count: Option<i64>,
    /// field 2179, wire `sfu_uplink_sbwe_ceiling_rtt_and_delay_congestion_count`
    pub sfu_uplink_sbwe_ceiling_rtt_and_delay_congestion_count: Option<i64>,
    /// field 2180, wire `call_t_dominant_speaker`
    pub call_tdominant_speaker: Option<i64>,
    /// field 2181, wire `time_dec480w_dominant_speaker`
    pub time_dec480w_dominant_speaker: Option<i64>,
    /// field 2182, wire `video_render_avg_fps_dominant_speaker`
    pub video_render_avg_fps_dominant_speaker: Option<i64>,
    /// field 2183, wire `video_render_freeze2x_t_dominant_speaker`
    pub video_render_freeze2x_tdominant_speaker: Option<i64>,
    /// field 2184, wire `video_render_freeze4x_t_dominant_speaker`
    pub video_render_freeze4x_tdominant_speaker: Option<i64>,
    /// field 2185, wire `video_render_freeze8x_t_dominant_speaker`
    pub video_render_freeze8x_tdominant_speaker: Option<i64>,
    /// field 2186, wire `video_render_freeze_t_dominant_speaker`
    pub video_render_freeze_tdominant_speaker: Option<i64>,
    /// field 2187, wire `video_rx_bitrate_dominant_speaker`
    pub video_rx_bitrate_dominant_speaker: Option<i64>,
    /// field 2188, wire `count_in_mcp`
    pub count_in_mcp: Option<i64>,
    /// field 2189, wire `count_in_sru`
    pub count_in_sru: Option<i64>,
    /// field 2190, wire `duration_in_mcp`
    pub duration_in_mcp: Option<String>,
    /// field 2191, wire `duration_in_sru`
    pub duration_in_sru: Option<String>,
    /// field 2192, wire `mcp_disabled_count_clamping_pp`
    pub mcp_disabled_count_clamping_pp: Option<i64>,
    /// field 2193, wire `mcp_disabled_count_clamping_rbe`
    pub mcp_disabled_count_clamping_rbe: Option<i64>,
    /// field 2194, wire `mcp_disabled_count_congestion`
    pub mcp_disabled_count_congestion: Option<i64>,
    /// field 2195, wire `mcp_disabled_count_reach_mcp_stop`
    pub mcp_disabled_count_reach_mcp_stop: Option<i64>,
    /// field 2196, wire `ml_disabled_count_close_to_cap`
    pub ml_disabled_count_close_to_cap: Option<i64>,
    /// field 2197, wire `ml_disabled_count_low_bitrate`
    pub ml_disabled_count_low_bitrate: Option<i64>,
    /// field 2198, wire `ml_disabled_count_media_undershoot`
    pub ml_disabled_count_media_undershoot: Option<i64>,
    /// field 2199, wire `ml_disabled_count_recent_ramp_up`
    pub ml_disabled_count_recent_ramp_up: Option<i64>,
    /// field 2200, wire `ml_disabled_count_recent_rd`
    pub ml_disabled_count_recent_rd: Option<i64>,
    /// field 2201, wire `ramp_up_count_in_additive`
    pub ramp_up_count_in_additive: Option<i64>,
    /// field 2202, wire `ramp_up_count_in_fr`
    pub ramp_up_count_in_fr: Option<i64>,
    /// field 2203, wire `ramp_up_count_in_mcp`
    pub ramp_up_count_in_mcp: Option<i64>,
    /// field 2204, wire `ramp_up_count_in_normal`
    pub ramp_up_count_in_normal: Option<i64>,
    /// field 2205, wire `ramp_up_count_in_sru`
    pub ramp_up_count_in_sru: Option<i64>,
    /// field 2206, wire `ramp_up_count_in_udst_target`
    pub ramp_up_count_in_udst_target: Option<i64>,
    /// field 2207, wire `ramp_up_duration_in_additive`
    pub ramp_up_duration_in_additive: Option<String>,
    /// field 2208, wire `ramp_up_duration_in_fr`
    pub ramp_up_duration_in_fr: Option<String>,
    /// field 2209, wire `ramp_up_duration_in_mcp`
    pub ramp_up_duration_in_mcp: Option<String>,
    /// field 2210, wire `ramp_up_duration_in_normal`
    pub ramp_up_duration_in_normal: Option<String>,
    /// field 2211, wire `ramp_up_duration_in_sru`
    pub ramp_up_duration_in_sru: Option<String>,
    /// field 2212, wire `ramp_up_duration_in_udst_target`
    pub ramp_up_duration_in_udst_target: Option<String>,
    /// field 2213, wire `audio_codec_decoded_fec_bitrate_dominant_speaker`
    pub audio_codec_decoded_fec_bitrate_dominant_speaker: Option<String>,
    /// field 2214, wire `audio_codec_decoded_normal_bitrate_dominant_speaker`
    pub audio_codec_decoded_normal_bitrate_dominant_speaker: Option<String>,
    /// field 2215, wire `call_avg_rtt_dominant_speaker`
    pub call_avg_rtt_dominant_speaker: Option<String>,
    /// field 2216, wire `call_rx_avg_bitrate_dominant_speaker`
    pub call_rx_avg_bitrate_dominant_speaker: Option<String>,
    /// field 2217, wire `jb_gets_dominant_speaker`
    pub jb_gets_dominant_speaker: Option<i64>,
    /// field 2218, wire `jb_mean_wait_time_dominant_speaker`
    pub jb_mean_wait_time_dominant_speaker: Option<String>,
    /// field 2219, wire `jb_plc_cng_dominant_speaker`
    pub jb_plc_cng_dominant_speaker: Option<i64>,
    /// field 2220, wire `jb_plc_dominant_speaker`
    pub jb_plc_dominant_speaker: Option<i64>,
    /// field 2221, wire `jb_puts_dominant_speaker`
    pub jb_puts_dominant_speaker: Option<i64>,
    /// field 2222, wire `enter_pip_before_inflection_point`
    pub enter_pip_before_inflection_point: Option<bool>,
    /// field 2223, wire `last_pp_during_pip`
    pub last_pp_during_pip: Option<i64>,
    /// field 2224, wire `post_pip_bitrate`
    pub post_pip_bitrate: Option<i64>,
    /// field 2225, wire `post_pip_start_bitrate`
    pub post_pip_start_bitrate: Option<i64>,
    /// field 2226, wire `pre_pip_bitrate`
    pub pre_pip_bitrate: Option<i64>,
    /// field 2227, wire `time_pip_recover_to480p`
    pub time_pip_recover_to480p: Option<String>,
    /// field 2228, wire `time_pip_recover_to720p`
    pub time_pip_recover_to720p: Option<String>,
    /// field 2229, wire `one_pop_to_xpop_fallback_count`
    pub one_pop_to_xpop_fallback_count: Option<i64>,
    /// field 2230, wire `xpop_to1pop_fallback_count`
    pub xpop_to1pop_fallback_count: Option<i64>,
    /// field 2231, wire `dynamic_bitrate_cap_first_fallback_time_since_start`
    pub dynamic_bitrate_cap_first_fallback_time_since_start: Option<i64>,
    /// field 2232, wire `dynamic_bitrate_cap_last_fallback_time_since_start`
    pub dynamic_bitrate_cap_last_fallback_time_since_start: Option<i64>,
    /// field 2233, wire `recent_playback_fps_diff1215`
    pub recent_playback_fps_diff1215: Option<i64>,
    /// field 2234, wire `recent_playback_fps_diff1619`
    pub recent_playback_fps_diff1619: Option<i64>,
    /// field 2235, wire `recent_playback_fps_diff47`
    pub recent_playback_fps_diff47: Option<i64>,
    /// field 2236, wire `recent_playback_fps_diff811`
    pub recent_playback_fps_diff811: Option<i64>,
    /// field 2237, wire `recent_playback_fps_diff_geq20`
    pub recent_playback_fps_diff_geq20: Option<i64>,
    /// field 2238, wire `recent_playback_fps_diff_lt4`
    pub recent_playback_fps_diff_lt4: Option<i64>,
    /// field 2239, wire `recent_record_fps_diff1215`
    pub recent_record_fps_diff1215: Option<i64>,
    /// field 2240, wire `recent_record_fps_diff1619`
    pub recent_record_fps_diff1619: Option<i64>,
    /// field 2241, wire `recent_record_fps_diff47`
    pub recent_record_fps_diff47: Option<i64>,
    /// field 2242, wire `recent_record_fps_diff811`
    pub recent_record_fps_diff811: Option<i64>,
    /// field 2243, wire `recent_record_fps_diff_geq20`
    pub recent_record_fps_diff_geq20: Option<i64>,
    /// field 2244, wire `recent_record_fps_diff_lt4`
    pub recent_record_fps_diff_lt4: Option<i64>,
    /// field 2245, wire `num_rs_hbh_fec_srtp_pkt_received`
    pub num_rs_hbh_fec_srtp_pkt_received: Option<i64>,
    /// field 2246, wire `num_rs_hbh_fec_srtp_pkt_sent`
    pub num_rs_hbh_fec_srtp_pkt_sent: Option<i64>,
    /// field 2247, wire `ss_receiver_bwe_before_ss`
    pub ss_receiver_bwe_before_ss: Option<i64>,
    /// field 2248, wire `ss_receiver_plr_before_ss`
    pub ss_receiver_plr_before_ss: Option<String>,
    /// field 2249, wire `ss_sharer_bwe_before_ss`
    pub ss_sharer_bwe_before_ss: Option<i64>,
    /// field 2250, wire `ss_sharer_plr_before_ss`
    pub ss_sharer_plr_before_ss: Option<String>,
    /// field 2252, wire `sfu_uplink_first_pp_bitrate`
    pub sfu_uplink_first_pp_bitrate: Option<i64>,
    /// field 2253, wire `sfu_uplink_first_reliable_pp_time`
    pub sfu_uplink_first_reliable_pp_time: Option<i64>,
    /// field 2254, wire `gc_previous_segment_call_result`
    pub gc_previous_segment_call_result: Option<CALLRESULTTYPE>,
    /// field 2255, wire `sfu_uplink_first_raw_pp_bitrate`
    pub sfu_uplink_first_raw_pp_bitrate: Option<i64>,
    /// field 2256, wire `sfu_uplink_first_raw_pp_time`
    pub sfu_uplink_first_raw_pp_time: Option<i64>,
    /// field 2257, wire `sfu_temporal_scalability_base_layer_duration`
    pub sfu_temporal_scalability_base_layer_duration: Option<String>,
    /// field 2258, wire `sfu_temporal_scalability_base_layer_triggered`
    pub sfu_temporal_scalability_base_layer_triggered: Option<i64>,
    /// field 2259, wire `sfu_temporal_scalability_recv_base_layer_only`
    pub sfu_temporal_scalability_recv_base_layer_only: Option<bool>,
    /// field 2260, wire `video_dec_error_frames_vav1`
    pub video_dec_error_frames_vav1: Option<i64>,
    /// field 2261, wire `video_enc_time_overshoot10_perc_vav1`
    pub video_enc_time_overshoot10_perc_vav1: Option<String>,
    /// field 2262, wire `video_enc_time_overshoot20_perc_vav1`
    pub video_enc_time_overshoot20_perc_vav1: Option<String>,
    /// field 2263, wire `video_enc_time_overshoot40_perc_vav1`
    pub video_enc_time_overshoot40_perc_vav1: Option<String>,
    /// field 2264, wire `video_enc_time_undershoot10_perc_vav1`
    pub video_enc_time_undershoot10_perc_vav1: Option<String>,
    /// field 2265, wire `video_enc_time_undershoot20_perc_vav1`
    pub video_enc_time_undershoot20_perc_vav1: Option<String>,
    /// field 2266, wire `video_enc_time_undershoot40_perc_vav1`
    pub video_enc_time_undershoot40_perc_vav1: Option<String>,
    /// field 2268, wire `audio_unit_setup_time`
    pub audio_unit_setup_time: Option<String>,
    /// field 2269, wire `audio_unit_stop_time`
    pub audio_unit_stop_time: Option<String>,
    /// field 2270, wire `driver_init_time`
    pub driver_init_time: Option<String>,
    /// field 2271, wire `system_volume_during_incoming_call`
    pub system_volume_during_incoming_call: Option<String>,
    /// field 2272, wire `voip_camera_last_error_device_name`
    pub voip_camera_last_error_device_name: Option<String>,
    /// field 2273, wire `voip_camera_total_errors`
    pub voip_camera_total_errors: Option<i64>,
    /// field 2274, wire `voip_init_time`
    pub voip_init_time: Option<String>,
    /// field 2275, wire `voip_mic_last_error_device_name`
    pub voip_mic_last_error_device_name: Option<String>,
    /// field 2276, wire `voip_mic_total_errors`
    pub voip_mic_total_errors: Option<i64>,
    /// field 2277, wire `voip_total_camera_devices`
    pub voip_total_camera_devices: Option<i64>,
    /// field 2278, wire `voip_total_mic_devices`
    pub voip_total_mic_devices: Option<i64>,
    /// field 2279, wire `voip_window_incoming_accept_to_call_layout_time`
    pub voip_window_incoming_accept_to_call_layout_time: Option<String>,
    /// field 2280, wire `voip_window_incoming_offer_to_layout_time`
    pub voip_window_incoming_offer_to_layout_time: Option<String>,
    /// field 2281, wire `voip_window_outgoing_launch_time`
    pub voip_window_outgoing_launch_time: Option<String>,
    /// field 2282, wire `network_event_critical_events_retained_count`
    pub network_event_critical_events_retained_count: Option<i64>,
    /// field 2283, wire `transport_sender_subscription_base_layer_triggered`
    pub transport_sender_subscription_base_layer_triggered: Option<i64>,
    /// field 2284, wire `ml_hd_targeting_model_download_failure_count`
    pub ml_hd_targeting_model_download_failure_count: Option<i64>,
    /// field 2285, wire `ml_hd_targeting_model_inference_failure_count`
    pub ml_hd_targeting_model_inference_failure_count: Option<i64>,
    /// field 2286, wire `ml_hd_targeting_model_inference_time`
    pub ml_hd_targeting_model_inference_time: Option<String>,
    /// field 2288, wire `ml_hd_targeting_shim_avg_creation_time`
    pub ml_hd_targeting_shim_avg_creation_time: Option<String>,
    /// field 2289, wire `ml_hd_targeting_shim_creation_failure_count`
    pub ml_hd_targeting_shim_creation_failure_count: Option<i64>,
    /// field 2290, wire `history_video_record_encoder_avg_qp`
    pub history_video_record_encoder_avg_qp: Option<i64>,
    /// field 2291, wire `history_video_record_encoder_latency`
    pub history_video_record_encoder_latency: Option<i64>,
    /// field 2292, wire `history_video_record_encoder_overshoot`
    pub history_video_record_encoder_overshoot: Option<i64>,
    /// field 2293, wire `history_video_record_encoder_undershoot`
    pub history_video_record_encoder_undershoot: Option<i64>,
    /// field 2294, wire `history_video_record_freeze_pct`
    pub history_video_record_freeze_pct: Option<i64>,
    /// field 2295, wire `history_video_record_good480p_decoding`
    pub history_video_record_good480p_decoding: Option<String>,
    /// field 2296, wire `history_video_record_good480p_encoding`
    pub history_video_record_good480p_encoding: Option<String>,
    /// field 2297, wire `history_video_record_good720p_decoding`
    pub history_video_record_good720p_decoding: Option<String>,
    /// field 2298, wire `history_video_record_good720p_encoding`
    pub history_video_record_good720p_encoding: Option<String>,
    /// field 2299, wire `history_video_record_init_downlink_bwe`
    pub history_video_record_init_downlink_bwe: Option<i64>,
    /// field 2300, wire `history_video_record_init_uplink_bwe`
    pub history_video_record_init_uplink_bwe: Option<i64>,
    /// field 2301, wire `history_video_record_stable_max_target_bitrate`
    pub history_video_record_stable_max_target_bitrate: Option<i64>,
    /// field 2302, wire `history_video_record_tx_pkt_loss_pct`
    pub history_video_record_tx_pkt_loss_pct: Option<i64>,
    /// field 2303, wire `avg_p2p_bind_time_ms`
    pub avg_p2p_bind_time_ms: Option<String>,
    /// field 2304, wire `min_p2p_session_ms`
    pub min_p2p_session_ms: Option<String>,
    /// field 2305, wire `p2p_cand_pair_stat`
    pub p2p_cand_pair_stat: Option<String>,
    /// field 2306, wire `p2p_rtp_pkt_cnts`
    pub p2p_rtp_pkt_cnts: Option<String>,
    /// field 2307, wire `relay_rtp_pkt_cnts`
    pub relay_rtp_pkt_cnts: Option<String>,
    /// field 2308, wire `call_init_jb_gets`
    pub call_init_jb_gets: Option<String>,
    /// field 2309, wire `call_init_jb_mean_wait`
    pub call_init_jb_mean_wait: Option<String>,
    /// field 2310, wire `call_init_jb_plc`
    pub call_init_jb_plc: Option<String>,
    /// field 2311, wire `call_init_jb_plc_cng`
    pub call_init_jb_plc_cng: Option<String>,
    /// field 2312, wire `call_init_reconnecting_state_count`
    pub call_init_reconnecting_state_count: Option<i64>,
    /// field 2313, wire `call_init_video_render_avg_fps`
    pub call_init_video_render_avg_fps: Option<i64>,
    /// field 2314, wire `call_peer_test_bucket_id_list`
    pub call_peer_test_bucket_id_list: Option<String>,
    /// field 2315, wire `video_recv_psnr_avg`
    pub video_recv_psnr_avg: Option<String>,
    /// field 2316, wire `video_recv_psnr_p5`
    pub video_recv_psnr_p5: Option<String>,
    /// field 2317, wire `video_recv_psnr_p50`
    pub video_recv_psnr_p50: Option<String>,
    /// field 2318, wire `video_recv_psnr_p95`
    pub video_recv_psnr_p95: Option<String>,
    /// field 2320, wire `ml_hd_targeting_model_hd_capable_count`
    pub ml_hd_targeting_model_hd_capable_count: Option<i64>,
    /// field 2321, wire `weak_net_condition_by_bad_call_ml`
    pub weak_net_condition_by_bad_call_ml: Option<i64>,
    /// field 2322, wire `goodput_peer_downlink`
    pub goodput_peer_downlink: Option<i64>,
    /// field 2323, wire `history_video_record_by_self_and_peer_ip_matching`
    pub history_video_record_by_self_and_peer_ip_matching: Option<bool>,
    /// field 2324, wire `history_video_record_by_self_only_ip_matching`
    pub history_video_record_by_self_only_ip_matching: Option<bool>,
    /// field 2325, wire `peer_history_downlink_signal`
    pub peer_history_downlink_signal: Option<i64>,
    /// field 2326, wire `transport_rtp_cb_not_attached_pkt_skip_cnt`
    pub transport_rtp_cb_not_attached_pkt_skip_cnt: Option<i64>,
    /// field 2327, wire `call_peer_test_bucket_area_exposure_map`
    pub call_peer_test_bucket_area_exposure_map: Option<String>,
    /// field 2328, wire `call_peer_test_bucket_list`
    pub call_peer_test_bucket_list: Option<String>,
    /// field 2329, wire `call_test_bucket_area_exposure_map`
    pub call_test_bucket_area_exposure_map: Option<String>,
    /// field 2330, wire `audio_rtp_ts_jump_back_count`
    pub audio_rtp_ts_jump_back_count: Option<i64>,
    /// field 2331, wire `audio_rtp_ts_jump_back_max_ms`
    pub audio_rtp_ts_jump_back_max_ms: Option<i64>,
    /// field 2332, wire `audio_rtp_ts_jump_back_total_ms`
    pub audio_rtp_ts_jump_back_total_ms: Option<i64>,
    /// field 2333, wire `audio_rtp_ts_jump_forward_count`
    pub audio_rtp_ts_jump_forward_count: Option<i64>,
    /// field 2334, wire `audio_rtp_ts_jump_forward_max_ms`
    pub audio_rtp_ts_jump_forward_max_ms: Option<i64>,
    /// field 2335, wire `audio_rtp_ts_jump_forward_total_ms`
    pub audio_rtp_ts_jump_forward_total_ms: Option<i64>,
    /// field 2336, wire `rx_reaction_count`
    pub rx_reaction_count: Option<i64>,
    /// field 2337, wire `rx_reaction_error_count`
    pub rx_reaction_error_count: Option<i64>,
    /// field 2338, wire `tx_reaction_count`
    pub tx_reaction_count: Option<i64>,
    /// field 2339, wire `tx_reaction_error_count`
    pub tx_reaction_error_count: Option<i64>,
    /// field 2340, wire `ml_hd_targeting_model_prob_int`
    pub ml_hd_targeting_model_prob_int: Option<i64>,
    /// field 2341, wire `capi_call_id`
    pub capi_call_id: Option<String>,
    /// field 2342, wire `app_data_rx_rtp_error_count`
    pub app_data_rx_rtp_error_count: Option<i64>,
    /// field 2343, wire `app_data_rx_rtp_pkt_count`
    pub app_data_rx_rtp_pkt_count: Option<i64>,
    /// field 2344, wire `app_data_tx_rtp_error_count`
    pub app_data_tx_rtp_error_count: Option<i64>,
    /// field 2345, wire `app_data_tx_rtp_pkt_count`
    pub app_data_tx_rtp_pkt_count: Option<i64>,
    /// field 2346, wire `ml_cong_model_avg_prob_int`
    pub ml_cong_model_avg_prob_int: Option<i64>,
    /// field 2347, wire `ml_tr_model_avg_prob_int`
    pub ml_tr_model_avg_prob_int: Option<i64>,
    /// field 2348, wire `camera_on_count`
    pub camera_on_count: Option<i64>,
    /// field 2349, wire `known_contact_video_upgrade_count`
    pub known_contact_video_upgrade_count: Option<i64>,
    /// field 2350, wire `unknown_contact_video_upgrade_count`
    pub unknown_contact_video_upgrade_count: Option<i64>,
    /// field 2351, wire `view_unknown_peer_video_count`
    pub view_unknown_peer_video_count: Option<i64>,
    /// field 2352, wire `call_t_self_dominant_speaker`
    pub call_tself_dominant_speaker: Option<String>,
    /// field 2353, wire `rx_lower_hand_count`
    pub rx_lower_hand_count: Option<i64>,
    /// field 2354, wire `rx_raise_hand_count`
    pub rx_raise_hand_count: Option<i64>,
    /// field 2355, wire `rx_raise_or_lower_hand_error_count`
    pub rx_raise_or_lower_hand_error_count: Option<i64>,
    /// field 2356, wire `tx_lower_hand_count`
    pub tx_lower_hand_count: Option<i64>,
    /// field 2357, wire `tx_raise_hand_count`
    pub tx_raise_hand_count: Option<i64>,
    /// field 2358, wire `tx_raise_or_lower_hand_error_count`
    pub tx_raise_or_lower_hand_error_count: Option<i64>,
    /// field 2359, wire `relay_measured_c2r_rtt_list`
    pub relay_measured_c2r_rtt_list: Option<String>,
    /// field 2360, wire `relay_measured_max_peer_c2r_rtt_list`
    pub relay_measured_max_peer_c2r_rtt_list: Option<String>,
    /// field 2361, wire `relay_measured_num_peers_list`
    pub relay_measured_num_peers_list: Option<String>,
    /// field 2362, wire `relay_recommended_c2r_rtt_list`
    pub relay_recommended_c2r_rtt_list: Option<String>,
    /// field 2363, wire `relay_recommended_max_peer_c2r_rtt_list`
    pub relay_recommended_max_peer_c2r_rtt_list: Option<String>,
    /// field 2364, wire `time_dec_reach960w`
    pub time_dec_reach960w: Option<String>,
    /// field 2365, wire `time_enc_reach960w`
    pub time_enc_reach960w: Option<String>,
    /// field 2366, wire `num_res_rampdowns`
    pub num_res_rampdowns: Option<i64>,
    /// field 2367, wire `peer_busy_hours`
    pub peer_busy_hours: Option<i64>,
    /// field 2368, wire `self_busy_hours`
    pub self_busy_hours: Option<i64>,
    /// field 2369, wire `camera_off_call_start`
    pub camera_off_call_start: Option<bool>,
    /// field 2370, wire `genai_connection_ready_latency`
    pub genai_connection_ready_latency: Option<String>,
    /// field 2371, wire `is_ugc_call`
    pub is_ugc_call: Option<bool>,
    /// field 2372, wire `jb_last_total_plc_ms`
    pub jb_last_total_plc_ms: Option<i64>,
    /// field 2373, wire `jb_total_plc1x_ms`
    pub jb_total_plc1x_ms: Option<i64>,
    /// field 2374, wire `jb_total_plc2x_ms`
    pub jb_total_plc2x_ms: Option<i64>,
    /// field 2375, wire `jb_total_plc4x_ms`
    pub jb_total_plc4x_ms: Option<i64>,
    /// field 2376, wire `jb_total_plc8x_ms`
    pub jb_total_plc8x_ms: Option<i64>,
    /// field 2377, wire `hw_dec_reach1s_count`
    pub hw_dec_reach1s_count: Option<i64>,
    /// field 2378, wire `hw_dec_reach5s_count`
    pub hw_dec_reach5s_count: Option<i64>,
    /// field 2379, wire `hw_enc_reach1s_count`
    pub hw_enc_reach1s_count: Option<i64>,
    /// field 2380, wire `hw_enc_reach5s_count`
    pub hw_enc_reach5s_count: Option<i64>,
    /// field 2381, wire `num_media_pkt_recovered_by_rs_hbh_fec`
    pub num_media_pkt_recovered_by_rs_hbh_fec: Option<i64>,
    /// field 2382, wire `ai_voice_backgrounding_time`
    pub ai_voice_backgrounding_time: Option<String>,
    /// field 2383, wire `ai_voice_in_app_backgrounded`
    pub ai_voice_in_app_backgrounded: Option<bool>,
    /// field 2384, wire `ai_voice_out_of_app_backgrounded`
    pub ai_voice_out_of_app_backgrounded: Option<bool>,
    /// field 2385, wire `genai_bot_type`
    pub genai_bot_type: Option<GENAIBOTTYPE>,
    /// field 2386, wire `send_self_state_video_enabled_video_capture_stream_not_running`
    pub send_self_state_video_enabled_video_capture_stream_not_running: Option<i64>,
    /// field 2387, wire `send_self_state_video_enabled_video_capture_stream_null`
    pub send_self_state_video_enabled_video_capture_stream_null: Option<i64>,
    /// field 2388, wire `genai_buffered_active_speech_pct`
    pub genai_buffered_active_speech_pct: Option<i64>,
    /// field 2389, wire `genai_initial_audio_buffered_ms`
    pub genai_initial_audio_buffered_ms: Option<i64>,
    /// field 2391, wire `vsr_input_frames`
    pub vsr_input_frames: Option<i64>,
    /// field 2392, wire `vsr_output_frames`
    pub vsr_output_frames: Option<i64>,
    /// field 2393, wire `red_audio_bytes_decoded`
    pub red_audio_bytes_decoded: Option<String>,
    /// field 2394, wire `red_audio_bytes_sent`
    pub red_audio_bytes_sent: Option<String>,
    /// field 2395, wire `red_packets_discarded`
    pub red_packets_discarded: Option<i64>,
    /// field 2396, wire `red_packets_inserted`
    pub red_packets_inserted: Option<i64>,
    /// field 2397, wire `red_packets_received`
    pub red_packets_received: Option<i64>,
    /// field 2398, wire `red_rtp_packets_received`
    pub red_rtp_packets_received: Option<i64>,
    /// field 2399, wire `red_rtp_packets_sent`
    pub red_rtp_packets_sent: Option<i64>,
    /// field 2400, wire `red_total_redundancy_requested`
    pub red_total_redundancy_requested: Option<i64>,
    /// field 2401, wire `red_total_redundancy_sent`
    pub red_total_redundancy_sent: Option<i64>,
    /// field 2402, wire `ev_queue_overflow_count`
    pub ev_queue_overflow_count: Option<i64>,
    /// field 2403, wire `vsr_avg_latency_in_ms`
    pub vsr_avg_latency_in_ms: Option<String>,
    /// field 2406, wire `cell_id_at_end`
    pub cell_id_at_end: Option<i64>,
    /// field 2407, wire `cell_id_at_start`
    pub cell_id_at_start: Option<i64>,
    /// field 2408, wire `cell_info_at_end`
    pub cell_info_at_end: Option<String>,
    /// field 2409, wire `cell_info_at_start`
    pub cell_info_at_start: Option<String>,
    /// field 2410, wire `hardware_state_at_end`
    pub hardware_state_at_end: Option<String>,
    /// field 2411, wire `hardware_state_at_start`
    pub hardware_state_at_start: Option<String>,
    /// field 2412, wire `ni_call_id`
    pub ni_call_id: Option<String>,
    /// field 2413, wire `phone_state_at_end`
    pub phone_state_at_end: Option<String>,
    /// field 2414, wire `phone_state_at_start`
    pub phone_state_at_start: Option<String>,
    /// field 2415, wire `uvm_cell_id`
    pub uvm_cell_id: Option<String>,
    /// field 2416, wire `wifi_info_at_end`
    pub wifi_info_at_end: Option<String>,
    /// field 2417, wire `wifi_info_at_start`
    pub wifi_info_at_start: Option<String>,
    /// field 2418, wire `transport_rx_warp_pkt_on_invalid_relay_addr_cnt`
    pub transport_rx_warp_pkt_on_invalid_relay_addr_cnt: Option<i64>,
    /// field 2419, wire `transport_srtp_rx_auth_fail`
    pub transport_srtp_rx_auth_fail: Option<i64>,
    /// field 2420, wire `xpop_pop2pop_rtt_ms`
    pub xpop_pop2pop_rtt_ms: Option<String>,
    /// field 2421, wire `max_target_bitrate_vid_reaches1200kbps_duration`
    pub max_target_bitrate_vid_reaches1200kbps_duration: Option<String>,
    /// field 2422, wire `max_target_bitrate_vid_reaches1300kbps_duration`
    pub max_target_bitrate_vid_reaches1300kbps_duration: Option<String>,
    /// field 2423, wire `peer_camera_off_call_start`
    pub peer_camera_off_call_start: Option<bool>,
    /// field 2424, wire `genai_interrupt_ducking_latency_ms`
    pub genai_interrupt_ducking_latency_ms: Option<String>,
    /// field 2425, wire `genai_user_perceived_interrupt_latency_ms`
    pub genai_user_perceived_interrupt_latency_ms: Option<String>,
    /// field 2426, wire `genai_bot_early_connect_voip_latency_ms`
    pub genai_bot_early_connect_voip_latency_ms: Option<String>,
    /// field 2427, wire `genai_ui_presented_latency_ms`
    pub genai_ui_presented_latency_ms: Option<String>,
    /// field 2428, wire `call_held`
    pub call_held: Option<bool>,
    /// field 2429, wire `ml_bwe_used_fallback_model`
    pub ml_bwe_used_fallback_model: Option<bool>,
    /// field 2430, wire `video_comb_psnr_p5`
    pub video_comb_psnr_p5: Option<String>,
    /// field 2431, wire `video_comb_psnr_p50`
    pub video_comb_psnr_p50: Option<String>,
    /// field 2432, wire `video_comb_psnr_p95`
    pub video_comb_psnr_p95: Option<String>,
    /// field 2433, wire `video_enc_psnr_p5`
    pub video_enc_psnr_p5: Option<String>,
    /// field 2434, wire `video_enc_psnr_p50`
    pub video_enc_psnr_p50: Option<String>,
    /// field 2435, wire `video_enc_psnr_p95`
    pub video_enc_psnr_p95: Option<String>,
    /// field 2436, wire `video_scal_psnr_p5`
    pub video_scal_psnr_p5: Option<String>,
    /// field 2437, wire `video_scal_psnr_p50`
    pub video_scal_psnr_p50: Option<String>,
    /// field 2438, wire `video_scal_psnr_p95`
    pub video_scal_psnr_p95: Option<String>,
    /// field 2440, wire `sfu_downlink_avg_consecutive_udst_prediction_len`
    pub sfu_downlink_avg_consecutive_udst_prediction_len: Option<i64>,
    /// field 2441, wire `sfu_downlink_ml_bwe_used_fallback_model`
    pub sfu_downlink_ml_bwe_used_fallback_model: Option<bool>,
    /// field 2442, wire `sfu_downlink_ml_undershoot_model_avg_inference_time`
    pub sfu_downlink_ml_undershoot_model_avg_inference_time: Option<String>,
    /// field 2443, wire `sfu_downlink_ml_undershoot_model_download_failure_count`
    pub sfu_downlink_ml_undershoot_model_download_failure_count: Option<i64>,
    /// field 2444, wire `sfu_downlink_ml_undershoot_model_max_inference_time`
    pub sfu_downlink_ml_undershoot_model_max_inference_time: Option<String>,
    /// field 2445, wire `sfu_downlink_ml_undershoot_model_min_inference_time`
    pub sfu_downlink_ml_undershoot_model_min_inference_time: Option<String>,
    /// field 2446, wire `sfu_downlink_ml_undershoot_pytorch_edge_lib_load_error_code`
    pub sfu_downlink_ml_undershoot_pytorch_edge_lib_load_error_code: Option<SFUDOWNLINKMLUNDERSHOOTPYTORCHEDGELIBLOADERRORCODE>,
    /// field 2447, wire `sfu_downlink_ml_undershoot_pytorch_edge_lib_load_status`
    pub sfu_downlink_ml_undershoot_pytorch_edge_lib_load_status: Option<SFUDOWNLINKMLUNDERSHOOTPYTORCHEDGELIBLOADSTATUS>,
    /// field 2448, wire `sfu_downlink_ml_undershoot_shim_avg_creation_time`
    pub sfu_downlink_ml_undershoot_shim_avg_creation_time: Option<String>,
    /// field 2449, wire `sfu_downlink_ml_undershoot_shim_creation_failure_count`
    pub sfu_downlink_ml_undershoot_shim_creation_failure_count: Option<i64>,
    /// field 2450, wire `sfu_downlink_non_udst_num_predictions`
    pub sfu_downlink_non_udst_num_predictions: Option<i64>,
    /// field 2451, wire `sfu_downlink_udst_avg_pred_prob`
    pub sfu_downlink_udst_avg_pred_prob: Option<i64>,
    /// field 2452, wire `sfu_downlink_udst_num_predictions`
    pub sfu_downlink_udst_num_predictions: Option<i64>,
    /// field 2453, wire `sfu_downlink_udst_skipped_predictions`
    pub sfu_downlink_udst_skipped_predictions: Option<i64>,
    /// field 2454, wire `sfu_downlink_ml_undershoot_model_inference_failure_count`
    pub sfu_downlink_ml_undershoot_model_inference_failure_count: Option<i64>,
    /// field 2455, wire `ml_hd_targeting_sml_delay_ms`
    pub ml_hd_targeting_sml_delay_ms: Option<String>,
    /// field 2456, wire `ml_hd_targeting_sml_received`
    pub ml_hd_targeting_sml_received: Option<bool>,
    /// field 2457, wire `ml_hd_targeting_sml_value`
    pub ml_hd_targeting_sml_value: Option<i64>,
    /// field 2458, wire `call_from_reminder`
    pub call_from_reminder: Option<bool>,
    /// field 2459, wire `hbh_sml_packet_count`
    pub hbh_sml_packet_count: Option<i64>,
    /// field 2461, wire `bwe_slr_output_bps`
    pub bwe_slr_output_bps: Option<i64>,
    /// field 2462, wire `call_peer_is_mv_friction_eligible`
    pub call_peer_is_mv_friction_eligible: Option<bool>,
    /// field 2463, wire `battery_low`
    pub battery_low: Option<bool>,
    /// field 2464, wire `call_peer_has_badge`
    pub call_peer_has_badge: Option<bool>,
    /// field 2465, wire `vc_latency`
    pub vc_latency: Option<String>,
    /// field 2466, wire `vc_latency_connection`
    pub vc_latency_connection: Option<String>,
    /// field 2467, wire `vc_latency_ui`
    pub vc_latency_ui: Option<String>,
    /// field 2468, wire `time_in2x_downscale_ss`
    pub time_in2x_downscale_ss: Option<String>,
    /// field 2469, wire `time_in4x_downscale_ss`
    pub time_in4x_downscale_ss: Option<String>,
    /// field 2470, wire `time_in_no_downscale_ss`
    pub time_in_no_downscale_ss: Option<String>,
    /// field 2471, wire `uaqc_num_state_transitions`
    pub uaqc_num_state_transitions: Option<i64>,
    /// field 2472, wire `uaqc_time_in_bw_managed_state_ms`
    pub uaqc_time_in_bw_managed_state_ms: Option<String>,
    /// field 2473, wire `uaqc_time_in_drain_state_ms`
    pub uaqc_time_in_drain_state_ms: Option<String>,
    /// field 2474, wire `uaqc_time_in_high_quality_state_ms`
    pub uaqc_time_in_high_quality_state_ms: Option<String>,
    /// field 2475, wire `uaqc_time_in_low_state_ms`
    pub uaqc_time_in_low_state_ms: Option<String>,
    /// field 2476, wire `uaqc_time_in_probing_state_ms`
    pub uaqc_time_in_probing_state_ms: Option<String>,
    /// field 2477, wire `local_ip_prefix`
    pub local_ip_prefix: Option<String>,
    /// field 2478, wire `jb_plc_cng_before_first_decode`
    pub jb_plc_cng_before_first_decode: Option<String>,
    /// field 2479, wire `jb_plc_cng_before_first_decode_include`
    pub jb_plc_cng_before_first_decode_include: Option<bool>,
    /// field 2480, wire `camera_max_retry_count`
    pub camera_max_retry_count: Option<i64>,
    /// field 2481, wire `camera_set_video_port_duration`
    pub camera_set_video_port_duration: Option<String>,
    /// field 2482, wire `capture_device_create_duration`
    pub capture_device_create_duration: Option<String>,
    /// field 2483, wire `debug_metric1`
    pub debug_metric1: Option<String>,
    /// field 2484, wire `debug_metric2`
    pub debug_metric2: Option<String>,
    /// field 2485, wire `debug_metric3`
    pub debug_metric3: Option<String>,
    /// field 2486, wire `debug_metric4`
    pub debug_metric4: Option<String>,
    /// field 2487, wire `debug_metric5`
    pub debug_metric5: Option<String>,
    /// field 2488, wire `calling_history_quickhd_used_bitrate`
    pub calling_history_quickhd_used_bitrate: Option<i64>,
    /// field 2489, wire `calling_history_tp_record_both_match_count`
    pub calling_history_tp_record_both_match_count: Option<i64>,
    /// field 2490, wire `calling_history_tp_record_count`
    pub calling_history_tp_record_count: Option<i64>,
    /// field 2491, wire `calling_history_tp_record_peer_match_count`
    pub calling_history_tp_record_peer_match_count: Option<i64>,
    /// field 2492, wire `calling_history_tp_record_self_match_count`
    pub calling_history_tp_record_self_match_count: Option<i64>,
    /// field 2493, wire `short_dec1280w_duration`
    pub short_dec1280w_duration: Option<String>,
    /// field 2494, wire `short_dec1280w_num`
    pub short_dec1280w_num: Option<i64>,
    /// field 2495, wire `short_dec640w_duration`
    pub short_dec640w_duration: Option<String>,
    /// field 2496, wire `short_dec640w_num`
    pub short_dec640w_num: Option<i64>,
    /// field 2497, wire `short_enc1280w_duration`
    pub short_enc1280w_duration: Option<String>,
    /// field 2498, wire `short_enc1280w_num`
    pub short_enc1280w_num: Option<i64>,
    /// field 2499, wire `short_enc640w_duration`
    pub short_enc640w_duration: Option<String>,
    /// field 2500, wire `short_enc640w_num`
    pub short_enc640w_num: Option<i64>,
    /// field 2501, wire `proxy_bitmap`
    pub proxy_bitmap: Option<i64>,
    /// field 2502, wire `initial_auto_disabled_peer_camera_pause_t`
    pub initial_auto_disabled_peer_camera_pause_t: Option<String>,
    /// field 2503, wire `manually_disabled_peer_camera_pause_t`
    pub manually_disabled_peer_camera_pause_t: Option<String>,
    /// field 2504, wire `time_before_first_disabled_peer_camera_pause_t`
    pub time_before_first_disabled_peer_camera_pause_t: Option<String>,
    /// field 2505, wire `pinning_view_duration`
    pub pinning_view_duration: Option<i64>,
    /// field 2506, wire `pinning_view_peer_duration`
    pub pinning_view_peer_duration: Option<i64>,
    /// field 2507, wire `time_dec1280w_in_pinning_view`
    pub time_dec1280w_in_pinning_view: Option<String>,
    /// field 2508, wire `time_dec1280w_in_speaker_view`
    pub time_dec1280w_in_speaker_view: Option<String>,
    /// field 2509, wire `time_dec1280w_pinned_user`
    pub time_dec1280w_pinned_user: Option<String>,
    /// field 2510, wire `time_dec1280w_speaker_in_speaker_view`
    pub time_dec1280w_speaker_in_speaker_view: Option<String>,
    /// field 2511, wire `time_dec320w_in_pinning_view`
    pub time_dec320w_in_pinning_view: Option<String>,
    /// field 2512, wire `time_dec320w_in_speaker_view`
    pub time_dec320w_in_speaker_view: Option<String>,
    /// field 2513, wire `time_dec320w_pinned_user`
    pub time_dec320w_pinned_user: Option<String>,
    /// field 2514, wire `time_dec320w_speaker_in_speaker_view`
    pub time_dec320w_speaker_in_speaker_view: Option<String>,
    /// field 2515, wire `time_dec480w_in_pinning_view`
    pub time_dec480w_in_pinning_view: Option<String>,
    /// field 2516, wire `time_dec480w_in_speaker_view`
    pub time_dec480w_in_speaker_view: Option<String>,
    /// field 2517, wire `time_dec480w_pinned_user`
    pub time_dec480w_pinned_user: Option<String>,
    /// field 2518, wire `time_dec480w_speaker_in_speaker_view`
    pub time_dec480w_speaker_in_speaker_view: Option<String>,
    /// field 2519, wire `time_dec640w_in_pinning_view`
    pub time_dec640w_in_pinning_view: Option<String>,
    /// field 2520, wire `time_dec640w_in_speaker_view`
    pub time_dec640w_in_speaker_view: Option<String>,
    /// field 2521, wire `time_dec640w_pinned_user`
    pub time_dec640w_pinned_user: Option<String>,
    /// field 2522, wire `time_dec640w_speaker_in_speaker_view`
    pub time_dec640w_speaker_in_speaker_view: Option<String>,
    /// field 2523, wire `time_dec960w_in_pinning_view`
    pub time_dec960w_in_pinning_view: Option<String>,
    /// field 2524, wire `time_dec960w_in_speaker_view`
    pub time_dec960w_in_speaker_view: Option<String>,
    /// field 2525, wire `time_dec960w_pinned_user`
    pub time_dec960w_pinned_user: Option<String>,
    /// field 2526, wire `time_dec960w_speaker_in_speaker_view`
    pub time_dec960w_speaker_in_speaker_view: Option<String>,
    /// field 2527, wire `call_end_battery_pct`
    pub call_end_battery_pct: Option<String>,
    /// field 2528, wire `call_start_battery_pct`
    pub call_start_battery_pct: Option<String>,
    /// field 2529, wire `fpp1`
    pub fpp1: Option<i64>,
    /// field 2530, wire `fpp2`
    pub fpp2: Option<i64>,
    /// field 2531, wire `fpp3`
    pub fpp3: Option<i64>,
    /// field 2532, wire `fpp4`
    pub fpp4: Option<i64>,
    /// field 2533, wire `fpp5`
    pub fpp5: Option<i64>,
    /// field 2534, wire `fpp6`
    pub fpp6: Option<i64>,
    /// field 2535, wire `fpp_avg`
    pub fpp_avg: Option<String>,
    /// field 2536, wire `frame_length_ms`
    pub frame_length_ms: Option<i64>,
    /// field 2537, wire `bwa_streamline_validation_failure`
    pub bwa_streamline_validation_failure: Option<i64>,
    /// field 2538, wire `call_end_thermal_state`
    pub call_end_thermal_state: Option<i64>,
    /// field 2539, wire `call_peak_thermal_state`
    pub call_peak_thermal_state: Option<i64>,
    /// field 2540, wire `call_start_thermal_state`
    pub call_start_thermal_state: Option<i64>,
    /// field 2541, wire `sfu_bwa_simulcast_capability_wait_time_ms`
    pub sfu_bwa_simulcast_capability_wait_time_ms: Option<String>,
    /// field 2544, wire `ml_hd_targeting2_model_download_failure_count`
    pub ml_hd_targeting2_model_download_failure_count: Option<i64>,
    /// field 2545, wire `ml_hd_targeting2_model_hd_capable_count`
    pub ml_hd_targeting2_model_hd_capable_count: Option<i64>,
    /// field 2546, wire `ml_hd_targeting2_model_inference_failure_count`
    pub ml_hd_targeting2_model_inference_failure_count: Option<i64>,
    /// field 2547, wire `ml_hd_targeting2_model_inference_time`
    pub ml_hd_targeting2_model_inference_time: Option<String>,
    /// field 2549, wire `ml_hd_targeting2_model_prob_int`
    pub ml_hd_targeting2_model_prob_int: Option<i64>,
    /// field 2550, wire `ml_hd_targeting2_shim_avg_creation_time`
    pub ml_hd_targeting2_shim_avg_creation_time: Option<String>,
    /// field 2551, wire `ml_hd_targeting2_shim_creation_failure_count`
    pub ml_hd_targeting2_shim_creation_failure_count: Option<i64>,
    /// field 2555, wire `num_fpp_changes`
    pub num_fpp_changes: Option<i64>,
    /// field 2556, wire `call_tx_automos_noise_avg`
    pub call_tx_automos_noise_avg: Option<String>,
    /// field 2557, wire `call_tx_automos_overall_avg`
    pub call_tx_automos_overall_avg: Option<String>,
    /// field 2558, wire `call_tx_automos_speech_avg`
    pub call_tx_automos_speech_avg: Option<String>,
    /// field 2559, wire `autoeq_algorithm_used`
    pub autoeq_algorithm_used: Option<i64>,
    /// field 2560, wire `avg_cpu_time_ml_processing_ms`
    pub avg_cpu_time_ml_processing_ms: Option<String>,
    /// field 2561, wire `ml_ns_stopped_by_user`
    pub ml_ns_stopped_by_user: Option<bool>,
    /// field 2562, wire `ml_ns_stopped_high_cpu`
    pub ml_ns_stopped_high_cpu: Option<bool>,
    /// field 2563, wire `ml_ns_stopped_init_failure`
    pub ml_ns_stopped_init_failure: Option<bool>,
    /// field 2564, wire `num10ms_frames`
    pub num10ms_frames: Option<i64>,
    /// field 2565, wire `num10ms_ml_processed_frames`
    pub num10ms_ml_processed_frames: Option<i64>,
    /// field 2566, wire `has_grapevine`
    pub has_grapevine: Option<bool>,
    /// field 2567, wire `ml_offline_rl_bwe_model_avg_sbwe`
    pub ml_offline_rl_bwe_model_avg_sbwe: Option<i64>,
    /// field 2568, wire `ml_offline_rl_bwe_model_avg_std`
    pub ml_offline_rl_bwe_model_avg_std: Option<String>,
    /// field 2569, wire `ml_offline_rl_bwe_model_download_failure_count`
    pub ml_offline_rl_bwe_model_download_failure_count: Option<i64>,
    /// field 2570, wire `ml_offline_rl_bwe_model_inference_failure_count`
    pub ml_offline_rl_bwe_model_inference_failure_count: Option<i64>,
    /// field 2571, wire `ml_offline_rl_bwe_model_inference_time`
    pub ml_offline_rl_bwe_model_inference_time: Option<String>,
    /// field 2572, wire `ml_offline_rl_bwe_shim_avg_creation_time`
    pub ml_offline_rl_bwe_shim_avg_creation_time: Option<String>,
    /// field 2573, wire `ml_offline_rl_bwe_shim_creation_failure_count`
    pub ml_offline_rl_bwe_shim_creation_failure_count: Option<i64>,
    /// field 2574, wire `proxy_reason`
    pub proxy_reason: Option<String>,
    /// field 2575, wire `proxy_state`
    pub proxy_state: Option<i64>,
    /// field 2576, wire `snr`
    pub snr: Option<String>,
    /// field 2577, wire `call_rx_automos_noise_avg`
    pub call_rx_automos_noise_avg: Option<String>,
    /// field 2578, wire `call_rx_automos_overall_avg`
    pub call_rx_automos_overall_avg: Option<String>,
    /// field 2579, wire `call_rx_automos_speech_avg`
    pub call_rx_automos_speech_avg: Option<String>,
    /// field 2580, wire `call_link_random_id`
    pub call_link_random_id: Option<String>,
    /// field 2581, wire `call_initial_echo_likelihood`
    pub call_initial_echo_likelihood: Option<String>,
    /// field 2582, wire `ml_ns_asp_init_failed`
    pub ml_ns_asp_init_failed: Option<bool>,
    /// field 2583, wire `ml_ns_get_model_path_failed`
    pub ml_ns_get_model_path_failed: Option<bool>,
    /// field 2584, wire `proxy_reason_dynamic`
    pub proxy_reason_dynamic: Option<String>,
    /// field 2585, wire `proxy_state_dynamic`
    pub proxy_state_dynamic: Option<i64>,
    /// field 2586, wire `proxy_time_dynamic`
    pub proxy_time_dynamic: Option<String>,
    /// field 2587, wire `video_rendered_rx_bitrate`
    pub video_rendered_rx_bitrate: Option<String>,
    /// field 2588, wire `dont_connect_for_paused_vid_target_sample`
    pub dont_connect_for_paused_vid_target_sample: Option<bool>,
    /// field 2589, wire `vid_is_paused_on_create_and_connect_func_cnt`
    pub vid_is_paused_on_create_and_connect_func_cnt: Option<i64>,
    /// field 2590, wire `vid_is_paused_on_create_func_cnt`
    pub vid_is_paused_on_create_func_cnt: Option<i64>,
    /// field 2591, wire `vid_port_resume_sub_cnt`
    pub vid_port_resume_sub_cnt: Option<i64>,
    /// field 2592, wire `first_assert_func`
    pub first_assert_func: Option<String>,
    /// field 2593, wire `audio_player_init_ms`
    pub audio_player_init_ms: Option<i64>,
    /// field 2594, wire `audio_player_start_ms`
    pub audio_player_start_ms: Option<i64>,
    /// field 2595, wire `audio_recorder_init_ms`
    pub audio_recorder_init_ms: Option<i64>,
    /// field 2596, wire `audio_recorder_start_ms`
    pub audio_recorder_start_ms: Option<i64>,
    /// field 2597, wire `peer_local_ip_prefix`
    pub peer_local_ip_prefix: Option<String>,
    /// field 2598, wire `enhanced_frame_brightness_avg`
    pub enhanced_frame_brightness_avg: Option<String>,
    /// field 2599, wire `frame_brightness_avg`
    pub frame_brightness_avg: Option<String>,
    /// field 2600, wire `dtmf_bytes_sent`
    pub dtmf_bytes_sent: Option<i64>,
    /// field 2601, wire `dtmf_bytes_sent_failed`
    pub dtmf_bytes_sent_failed: Option<i64>,
    /// field 2602, wire `dtmf_event_sent`
    pub dtmf_event_sent: Option<i64>,
    /// field 2603, wire `dtmf_event_sent_failed`
    pub dtmf_event_sent_failed: Option<i64>,
    /// field 2604, wire `freeze_disable_duration_app_background`
    pub freeze_disable_duration_app_background: Option<String>,
    /// field 2605, wire `freeze_disable_duration_app_unsubscribe`
    pub freeze_disable_duration_app_unsubscribe: Option<String>,
    /// field 2606, wire `freeze_disable_duration_peer_paused`
    pub freeze_disable_duration_peer_paused: Option<String>,
    /// field 2607, wire `freeze_disable_total_duration`
    pub freeze_disable_total_duration: Option<String>,
    /// field 2608, wire `brightness_enhanced_frames_pct`
    pub brightness_enhanced_frames_pct: Option<String>,
    /// field 2609, wire `brightness_toggle_count`
    pub brightness_toggle_count: Option<i64>,
    /// field 2610, wire `fg_service_types_bitmap`
    pub fg_service_types_bitmap: Option<i64>,
    /// field 2611, wire `is_app_in_background_at_call_end`
    pub is_app_in_background_at_call_end: Option<bool>,
    /// field 2612, wire `is_app_in_bg_when_call_starts`
    pub is_app_in_bg_when_call_starts: Option<bool>,
    /// field 2613, wire `is_call_answered_with_screen_locked`
    pub is_call_answered_with_screen_locked: Option<bool>,
    /// field 2614, wire `is_telecom_fallback_path`
    pub is_telecom_fallback_path: Option<bool>,
    /// field 2615, wire `audio_dup_enabled_ratio`
    pub audio_dup_enabled_ratio: Option<String>,
    /// field 2616, wire `ml_nadl_audio_dup_enabled_ratio`
    pub ml_nadl_audio_dup_enabled_ratio: Option<String>,
    /// field 2617, wire `ml_nadl_different_result_count`
    pub ml_nadl_different_result_count: Option<i64>,
    /// field 2618, wire `ml_nadl_model_download_failure_count`
    pub ml_nadl_model_download_failure_count: Option<i64>,
    /// field 2619, wire `ml_nadl_model_inference_failure_count`
    pub ml_nadl_model_inference_failure_count: Option<i64>,
    /// field 2620, wire `ml_nadl_model_inference_time`
    pub ml_nadl_model_inference_time: Option<String>,
    /// field 2621, wire `ml_nadl_shim_avg_creation_time`
    pub ml_nadl_shim_avg_creation_time: Option<String>,
    /// field 2622, wire `ml_nadl_shim_creation_failure_count`
    pub ml_nadl_shim_creation_failure_count: Option<i64>,
    /// field 2623, wire `sml_nadl_audio_dup_enabled_ratio`
    pub sml_nadl_audio_dup_enabled_ratio: Option<String>,
    /// field 2624, wire `sml_nadl_different_result_rcvd_count`
    pub sml_nadl_different_result_rcvd_count: Option<i64>,
    /// field 2625, wire `sml_nadl_first_result_delay_ms`
    pub sml_nadl_first_result_delay_ms: Option<String>,
    /// field 2626, wire `sml_nadl_result_rcvd_count`
    pub sml_nadl_result_rcvd_count: Option<i64>,
    /// field 2627, wire `ml_hd_targeting_server_ml_enabled`
    pub ml_hd_targeting_server_ml_enabled: Option<bool>,
    /// field 2628, wire `audio_codec_decoded_fec_speech_bitrate`
    pub audio_codec_decoded_fec_speech_bitrate: Option<String>,
    /// field 2629, wire `audio_codec_decoded_normal_speech_bitrate`
    pub audio_codec_decoded_normal_speech_bitrate: Option<String>,
    /// field 2630, wire `video_dec_error_frames_h265`
    pub video_dec_error_frames_h265: Option<i64>,
    /// field 2631, wire `max_field_stat_struct_entries`
    pub max_field_stat_struct_entries: Option<i64>,
    /// field 2632, wire `is_waiting_room_enabled`
    pub is_waiting_room_enabled: Option<bool>,
    /// field 2633, wire `vmos_avg_inference_latency_ms`
    pub vmos_avg_inference_latency_ms: Option<String>,
    /// field 2634, wire `vmos_avg_load_time_in_ms`
    pub vmos_avg_load_time_in_ms: Option<String>,
    /// field 2635, wire `vmos_download_failure_count`
    pub vmos_download_failure_count: Option<i64>,
    /// field 2636, wire `vmos_load_failure_count`
    pub vmos_load_failure_count: Option<i64>,
    /// field 2637, wire `vsr_avg_inference_latency_ms`
    pub vsr_avg_inference_latency_ms: Option<String>,
    /// field 2638, wire `vsr_avg_load_time_in_ms`
    pub vsr_avg_load_time_in_ms: Option<String>,
    /// field 2639, wire `vsr_avg_post_process_latency_ms`
    pub vsr_avg_post_process_latency_ms: Option<String>,
    /// field 2640, wire `vsr_avg_pre_process_latency_ms`
    pub vsr_avg_pre_process_latency_ms: Option<String>,
    /// field 2641, wire `vsr_download_failure_count`
    pub vsr_download_failure_count: Option<i64>,
    /// field 2642, wire `vsr_load_failure_count`
    pub vsr_load_failure_count: Option<i64>,
    /// field 2643, wire `is_device_switch`
    pub is_device_switch: Option<bool>,
    /// field 2644, wire `video_tx_resend_limited_packets`
    pub video_tx_resend_limited_packets: Option<i64>,
    /// field 2645, wire `video_tx_resend_limited_packets_hq`
    pub video_tx_resend_limited_packets_hq: Option<i64>,
    /// field 2646, wire `hbh_srtcp_rx_success_rxsb_pkt_cnt`
    pub hbh_srtcp_rx_success_rxsb_pkt_cnt: Option<i64>,
    /// field 2647, wire `default_mic_mode`
    pub default_mic_mode: Option<i64>,
    /// field 2648, wire `selected_mic_mode`
    pub selected_mic_mode: Option<i64>,
    /// field 2649, wire `browser_avg_used_js_heap_size_mb`
    pub browser_avg_used_js_heap_size_mb: Option<i64>,
    /// field 2650, wire `browser_cpu_pressure_critical_pct`
    pub browser_cpu_pressure_critical_pct: Option<i64>,
    /// field 2651, wire `browser_cpu_pressure_fair_pct`
    pub browser_cpu_pressure_fair_pct: Option<i64>,
    /// field 2652, wire `browser_cpu_pressure_nominal_pct`
    pub browser_cpu_pressure_nominal_pct: Option<i64>,
    /// field 2653, wire `browser_cpu_pressure_serious_pct`
    pub browser_cpu_pressure_serious_pct: Option<i64>,
    /// field 2654, wire `browser_cpu_pressure_supported`
    pub browser_cpu_pressure_supported: Option<bool>,
    /// field 2655, wire `browser_js_heap_size_limit_mb`
    pub browser_js_heap_size_limit_mb: Option<i64>,
    /// field 2656, wire `browser_memory_supported`
    pub browser_memory_supported: Option<bool>,
    /// field 2657, wire `browser_peak_used_js_heap_size_mb`
    pub browser_peak_used_js_heap_size_mb: Option<i64>,
    /// field 2658, wire `browser_total_js_heap_size_mb`
    pub browser_total_js_heap_size_mb: Option<i64>,
    /// field 2665, wire `last_mic_mode`
    pub last_mic_mode: Option<i64>,
    /// field 2666, wire `num_anrs`
    pub num_anrs: Option<i64>,
    /// field 2667, wire `last_voip_activity`
    pub last_voip_activity: Option<String>,
    /// field 2668, wire `time_first_anr_since_call_start_sec`
    pub time_first_anr_since_call_start_sec: Option<i64>,
    /// field 2675, wire `last_voip_ui_activity`
    pub last_voip_ui_activity: Option<String>,
    /// field 2676, wire `browser_battery_charging_at_end`
    pub browser_battery_charging_at_end: Option<bool>,
    /// field 2677, wire `browser_battery_charging_at_start`
    pub browser_battery_charging_at_start: Option<bool>,
    /// field 2678, wire `browser_battery_charging_time_sec`
    pub browser_battery_charging_time_sec: Option<i64>,
    /// field 2679, wire `browser_battery_discharging_time_sec`
    pub browser_battery_discharging_time_sec: Option<i64>,
    /// field 2680, wire `browser_battery_drain_pct`
    pub browser_battery_drain_pct: Option<i64>,
    /// field 2681, wire `browser_battery_level_end_pct`
    pub browser_battery_level_end_pct: Option<i64>,
    /// field 2682, wire `browser_battery_level_start_pct`
    pub browser_battery_level_start_pct: Option<i64>,
    /// field 2683, wire `browser_battery_supported`
    pub browser_battery_supported: Option<bool>,
    /// field 2684, wire `ice_rtt_avg`
    pub ice_rtt_avg: Option<String>,
    /// field 2685, wire `ice_rtt_max`
    pub ice_rtt_max: Option<String>,
    /// field 2686, wire `ice_rtt_min`
    pub ice_rtt_min: Option<String>,
    /// field 2687, wire `renderer_type`
    pub renderer_type: Option<String>,
    /// field 2688, wire `window_dragged`
    pub window_dragged: Option<bool>,
    /// field 2689, wire `window_resized`
    pub window_resized: Option<bool>,
    /// field 2693, wire `noise_suppression_ui_status`
    pub noise_suppression_ui_status: Option<bool>,
    /// field 2694, wire `num_noise_suppression_ui_status_transitions`
    pub num_noise_suppression_ui_status_transitions: Option<i64>,
    /// field 2696, wire `wzav1_version`
    pub wzav1_version: Option<String>,
    /// field 2697, wire `quickhd_ml_inference_done`
    pub quickhd_ml_inference_done: Option<bool>,
    /// field 2698, wire `quickhd_ml_is_checked`
    pub quickhd_ml_is_checked: Option<bool>,
    /// field 2699, wire `quickhd_ml_model_download_failure_count`
    pub quickhd_ml_model_download_failure_count: Option<i64>,
    /// field 2700, wire `quickhd_ml_model_inference_failure_count`
    pub quickhd_ml_model_inference_failure_count: Option<i64>,
    /// field 2701, wire `quickhd_ml_model_inference_time`
    pub quickhd_ml_model_inference_time: Option<String>,
    /// field 2702, wire `quickhd_ml_predicted_bitrate`
    pub quickhd_ml_predicted_bitrate: Option<i64>,
    /// field 2703, wire `quickhd_ml_shim_avg_creation_time`
    pub quickhd_ml_shim_avg_creation_time: Option<String>,
    /// field 2704, wire `quickhd_ml_shim_creation_failure_count`
    pub quickhd_ml_shim_creation_failure_count: Option<i64>,
    /// field 2705, wire `last_voip_activity_timestamp_sec`
    pub last_voip_activity_timestamp_sec: Option<i64>,
    /// field 2706, wire `last_voip_ui_activity_timestamp_sec`
    pub last_voip_ui_activity_timestamp_sec: Option<i64>,
    /// field 2710, wire `avg_enc_input_sample_rate`
    pub avg_enc_input_sample_rate: Option<i64>,
    /// field 2711, wire `avg_enc_internal_sample_rate`
    pub avg_enc_internal_sample_rate: Option<i64>,
    /// field 2712, wire `ml_ns_asp_init_failure_reason`
    pub ml_ns_asp_init_failure_reason: Option<i64>,
    /// field 2713, wire `native_driver_frames_per_buffer`
    pub native_driver_frames_per_buffer: Option<i64>,
    /// field 2714, wire `video_render_freeze2x_t_v2`
    pub video_render_freeze2x_tv2: Option<String>,
    /// field 2715, wire `video_render_freeze4x_t_v2`
    pub video_render_freeze4x_tv2: Option<String>,
    /// field 2716, wire `video_render_freeze8x_t_v2`
    pub video_render_freeze8x_tv2: Option<String>,
    /// field 2717, wire `video_render_freeze_t_v2`
    pub video_render_freeze_tv2: Option<String>,
    /// field 2718, wire `js_halt_count`
    pub js_halt_count: Option<i64>,
    /// field 2719, wire `js_halt_total_ms_t`
    pub js_halt_total_ms_t: Option<String>,
    /// field 2720, wire `main_tab_hidden_ms_t`
    pub main_tab_hidden_ms_t: Option<String>,
    /// field 2721, wire `main_tab_visible_ms_t`
    pub main_tab_visible_ms_t: Option<String>,
    /// field 2722, wire `pip_web_window_ms_t`
    pub pip_web_window_ms_t: Option<String>,
    /// field 2723, wire `popout_web_window_ms_t`
    pub popout_web_window_ms_t: Option<String>,
    /// field 2724, wire `audio_codec_bitrate_cap`
    pub audio_codec_bitrate_cap: Option<i64>,
    /// field 2727, wire `audio_caller_accept_received_to_decode_t`
    pub audio_caller_accept_received_to_decode_t: Option<String>,
    /// field 2728, wire `vsr_disable_reason`
    pub vsr_disable_reason: Option<i64>,
    /// field 2729, wire `video_dec_no_rtcp_session_num`
    pub video_dec_no_rtcp_session_num: Option<i64>,
    /// field 2730, wire `video_enc_no_rtcp_session_num`
    pub video_enc_no_rtcp_session_num: Option<i64>,
    /// field 2731, wire `video_enc_no_rtcp_session_num_hq`
    pub video_enc_no_rtcp_session_num_hq: Option<i64>,
    /// field 2732, wire `avg_rx_frame_length_ms`
    pub avg_rx_frame_length_ms: Option<String>,
    /// field 2733, wire `avg_tx_frame_length_ms`
    pub avg_tx_frame_length_ms: Option<String>,
    /// field 2734, wire `avg_echo_confidence_after30sec`
    pub avg_echo_confidence_after30sec: Option<String>,
    /// field 2735, wire `avg_echo_confidence_first10sec`
    pub avg_echo_confidence_first10sec: Option<String>,
    /// field 2736, wire `avg_echo_confidence_first20sec`
    pub avg_echo_confidence_first20sec: Option<String>,
    /// field 2737, wire `avg_echo_confidence_first30sec`
    pub avg_echo_confidence_first30sec: Option<String>,
    /// field 2738, wire `avg_echo_likelihood_after30sec`
    pub avg_echo_likelihood_after30sec: Option<String>,
    /// field 2739, wire `avg_echo_likelihood_first10sec`
    pub avg_echo_likelihood_first10sec: Option<String>,
    /// field 2740, wire `avg_echo_likelihood_first20sec`
    pub avg_echo_likelihood_first20sec: Option<String>,
    /// field 2741, wire `avg_echo_likelihood_first30sec`
    pub avg_echo_likelihood_first30sec: Option<String>,
    /// field 2742, wire `max_echo_confidence_after30sec`
    pub max_echo_confidence_after30sec: Option<String>,
    /// field 2743, wire `max_echo_likelihood_after30sec`
    pub max_echo_likelihood_after30sec: Option<String>,
    /// field 2744, wire `memory_available_mb`
    pub memory_available_mb: Option<i64>,
    /// field 2745, wire `uvq_avg_inference_latency_ms`
    pub uvq_avg_inference_latency_ms: Option<String>,
    /// field 2746, wire `uvq_avg_score`
    pub uvq_avg_score: Option<String>,
    /// field 2747, wire `uvq_download_failure_count`
    pub uvq_download_failure_count: Option<i64>,
    /// field 2748, wire `uvq_download_success_count`
    pub uvq_download_success_count: Option<i64>,
    /// field 2749, wire `uvq_inference_failure_count`
    pub uvq_inference_failure_count: Option<i64>,
    /// field 2750, wire `uvq_inference_success_count`
    pub uvq_inference_success_count: Option<i64>,
    /// field 2751, wire `uvq_load_failure_count`
    pub uvq_load_failure_count: Option<i64>,
    /// field 2752, wire `uvq_load_success_count`
    pub uvq_load_success_count: Option<i64>,
    /// field 2753, wire `uvq_max_score`
    pub uvq_max_score: Option<String>,
    /// field 2754, wire `uvq_min_score`
    pub uvq_min_score: Option<String>,
    /// field 2755, wire `uvq_p50_score`
    pub uvq_p50_score: Option<String>,
    /// field 2756, wire `uvq_p5_score`
    pub uvq_p5_score: Option<String>,
    /// field 2757, wire `uvq_p95_score`
    pub uvq_p95_score: Option<String>,
    /// field 2758, wire `dec_aspect_ratio_ss`
    pub dec_aspect_ratio_ss: Option<String>,
    /// field 2759, wire `dec_ss1080p_freeze_t`
    pub dec_ss1080p_freeze_t: Option<String>,
    /// field 2760, wire `dec_ss1080p_pause_t`
    pub dec_ss1080p_pause_t: Option<String>,
    /// field 2761, wire `dec_ss1440p_freeze_t`
    pub dec_ss1440p_freeze_t: Option<String>,
    /// field 2762, wire `dec_ss1440p_pause_t`
    pub dec_ss1440p_pause_t: Option<String>,
    /// field 2763, wire `dec_ss2160p_freeze_t`
    pub dec_ss2160p_freeze_t: Option<String>,
    /// field 2764, wire `dec_ss2160p_pause_t`
    pub dec_ss2160p_pause_t: Option<String>,
    /// field 2765, wire `dec_ss320p_freeze_t`
    pub dec_ss320p_freeze_t: Option<String>,
    /// field 2766, wire `dec_ss320p_pause_t`
    pub dec_ss320p_pause_t: Option<String>,
    /// field 2767, wire `dec_ss480p_freeze_t`
    pub dec_ss480p_freeze_t: Option<String>,
    /// field 2768, wire `dec_ss480p_pause_t`
    pub dec_ss480p_pause_t: Option<String>,
    /// field 2769, wire `dec_ss720p_freeze_t`
    pub dec_ss720p_freeze_t: Option<String>,
    /// field 2770, wire `dec_ss720p_pause_t`
    pub dec_ss720p_pause_t: Option<String>,
    /// field 2771, wire `dec_ss960p_freeze_t`
    pub dec_ss960p_freeze_t: Option<String>,
    /// field 2772, wire `dec_ss960p_pause_t`
    pub dec_ss960p_pause_t: Option<String>,
    /// field 2773, wire `enc_aspect_ratio_hq_ss`
    pub enc_aspect_ratio_hq_ss: Option<String>,
    /// field 2774, wire `enc_aspect_ratio_ss`
    pub enc_aspect_ratio_ss: Option<String>,
    /// field 2775, wire `enc_downscale_ratio_avg_hq_ss`
    pub enc_downscale_ratio_avg_hq_ss: Option<String>,
    /// field 2776, wire `enc_downscale_ratio_avg_ss`
    pub enc_downscale_ratio_avg_ss: Option<String>,
    /// field 2777, wire `stream_duration_dec_ss`
    pub stream_duration_dec_ss: Option<String>,
    /// field 2778, wire `stream_duration_enc_hq_ss`
    pub stream_duration_enc_hq_ss: Option<String>,
    /// field 2779, wire `stream_duration_enc_ss`
    pub stream_duration_enc_ss: Option<String>,
    /// field 2780, wire `time_dec_reach1080p_ss`
    pub time_dec_reach1080p_ss: Option<String>,
    /// field 2781, wire `time_dec_reach1440p_ss`
    pub time_dec_reach1440p_ss: Option<String>,
    /// field 2782, wire `time_dec_reach2160p_ss`
    pub time_dec_reach2160p_ss: Option<String>,
    /// field 2783, wire `time_dec_reach320p_ss`
    pub time_dec_reach320p_ss: Option<String>,
    /// field 2784, wire `time_dec_reach480p_ss`
    pub time_dec_reach480p_ss: Option<String>,
    /// field 2785, wire `time_dec_reach720p_ss`
    pub time_dec_reach720p_ss: Option<String>,
    /// field 2786, wire `time_dec_reach960p_ss`
    pub time_dec_reach960p_ss: Option<String>,
    /// field 2787, wire `time_dec_ss1080p`
    pub time_dec_ss1080p: Option<String>,
    /// field 2788, wire `time_dec_ss1440p`
    pub time_dec_ss1440p: Option<String>,
    /// field 2789, wire `time_dec_ss2160p`
    pub time_dec_ss2160p: Option<String>,
    /// field 2790, wire `time_dec_ss320p`
    pub time_dec_ss320p: Option<String>,
    /// field 2791, wire `time_dec_ss480p`
    pub time_dec_ss480p: Option<String>,
    /// field 2792, wire `time_dec_ss720p`
    pub time_dec_ss720p: Option<String>,
    /// field 2793, wire `time_dec_ss960p`
    pub time_dec_ss960p: Option<String>,
    /// field 2794, wire `time_enc_reach1080p_ss`
    pub time_enc_reach1080p_ss: Option<String>,
    /// field 2795, wire `time_enc_reach1440p_ss`
    pub time_enc_reach1440p_ss: Option<String>,
    /// field 2796, wire `time_enc_reach2160p_ss`
    pub time_enc_reach2160p_ss: Option<String>,
    /// field 2797, wire `time_enc_reach320p_ss`
    pub time_enc_reach320p_ss: Option<String>,
    /// field 2798, wire `time_enc_reach480p_ss`
    pub time_enc_reach480p_ss: Option<String>,
    /// field 2799, wire `time_enc_reach720p_ss`
    pub time_enc_reach720p_ss: Option<String>,
    /// field 2800, wire `time_enc_reach960p_ss`
    pub time_enc_reach960p_ss: Option<String>,
    /// field 2801, wire `time_enc_ss1080p`
    pub time_enc_ss1080p: Option<String>,
    /// field 2802, wire `time_enc_ss1080p_hq`
    pub time_enc_ss1080p_hq: Option<String>,
    /// field 2803, wire `time_enc_ss1440p`
    pub time_enc_ss1440p: Option<String>,
    /// field 2804, wire `time_enc_ss1440p_hq`
    pub time_enc_ss1440p_hq: Option<String>,
    /// field 2805, wire `time_enc_ss2160p`
    pub time_enc_ss2160p: Option<String>,
    /// field 2806, wire `time_enc_ss2160p_hq`
    pub time_enc_ss2160p_hq: Option<String>,
    /// field 2807, wire `time_enc_ss320p`
    pub time_enc_ss320p: Option<String>,
    /// field 2808, wire `time_enc_ss320p_hq`
    pub time_enc_ss320p_hq: Option<String>,
    /// field 2809, wire `time_enc_ss480p`
    pub time_enc_ss480p: Option<String>,
    /// field 2810, wire `time_enc_ss480p_hq`
    pub time_enc_ss480p_hq: Option<String>,
    /// field 2811, wire `time_enc_ss720p`
    pub time_enc_ss720p: Option<String>,
    /// field 2812, wire `time_enc_ss720p_hq`
    pub time_enc_ss720p_hq: Option<String>,
    /// field 2813, wire `time_enc_ss960p`
    pub time_enc_ss960p: Option<String>,
    /// field 2814, wire `time_enc_ss960p_hq`
    pub time_enc_ss960p_hq: Option<String>,
    /// field 2815, wire `uvq_avg_normalization_latency_ms`
    pub uvq_avg_normalization_latency_ms: Option<String>,
    /// field 2816, wire `uvq_avg_patch_extraction_latency_ms`
    pub uvq_avg_patch_extraction_latency_ms: Option<String>,
    /// field 2818, wire `ai_voice_has_image_prompt`
    pub ai_voice_has_image_prompt: Option<bool>,
    /// field 2819, wire `avg_lufs_momentary_rx`
    pub avg_lufs_momentary_rx: Option<String>,
    /// field 2820, wire `avg_lufs_momentary_tx`
    pub avg_lufs_momentary_tx: Option<String>,
    /// field 2821, wire `avg_lufs_short_term_rx`
    pub avg_lufs_short_term_rx: Option<String>,
    /// field 2822, wire `avg_lufs_short_term_tx`
    pub avg_lufs_short_term_tx: Option<String>,
    /// field 2823, wire `video_render_init_freeze16s_t_v2`
    pub video_render_init_freeze16s_tv2: Option<String>,
    /// field 2824, wire `video_render_init_freeze2s_t_v2`
    pub video_render_init_freeze2s_tv2: Option<String>,
    /// field 2825, wire `video_render_init_freeze4s_t_v2`
    pub video_render_init_freeze4s_tv2: Option<String>,
    /// field 2826, wire `video_render_init_freeze8s_t_v2`
    pub video_render_init_freeze8s_tv2: Option<String>,
    /// field 2827, wire `video_render_init_freeze_t_v2`
    pub video_render_init_freeze_tv2: Option<String>,
    /// field 2828, wire `accept_processing_ms`
    pub accept_processing_ms: Option<String>,
    /// field 2829, wire `accept_to_relay_delta_ms`
    pub accept_to_relay_delta_ms: Option<String>,
    /// field 2830, wire `genai_activity_create_to_first_draw_ms`
    pub genai_activity_create_to_first_draw_ms: Option<String>,
    /// field 2831, wire `genai_native_pre_offer_latency_ms`
    pub genai_native_pre_offer_latency_ms: Option<String>,
    /// field 2832, wire `genai_platform_to_native_crossing_ms`
    pub genai_platform_to_native_crossing_ms: Option<String>,
    /// field 2833, wire `genai_pre_native_platform_latency_ms`
    pub genai_pre_native_platform_latency_ms: Option<String>,
    /// field 2834, wire `genai_ui_animation_duration_ms`
    pub genai_ui_animation_duration_ms: Option<String>,
    /// field 2835, wire `genai_voip_to_ui_listening_ms`
    pub genai_voip_to_ui_listening_ms: Option<String>,
    /// field 2836, wire `vsr_download_success`
    pub vsr_download_success: Option<bool>,
    /// field 2837, wire `vsr_load_success`
    pub vsr_load_success: Option<bool>,
    /// field 2838, wire `web_av_sync_avg_delta_ms`
    pub web_av_sync_avg_delta_ms: Option<String>,
    /// field 2839, wire `web_av_sync_calibration_count`
    pub web_av_sync_calibration_count: Option<i64>,
    /// field 2840, wire `web_av_sync_device_change_reset_count`
    pub web_av_sync_device_change_reset_count: Option<i64>,
    /// field 2841, wire `web_av_sync_enabled`
    pub web_av_sync_enabled: Option<bool>,
    /// field 2842, wire `web_av_sync_force_recalibration_count`
    pub web_av_sync_force_recalibration_count: Option<i64>,
    /// field 2843, wire `web_av_sync_frames_evicted_total`
    pub web_av_sync_frames_evicted_total: Option<i64>,
    /// field 2844, wire `web_av_sync_frames_held_total`
    pub web_av_sync_frames_held_total: Option<i64>,
    /// field 2845, wire `web_av_sync_frames_rendered_in_sync`
    pub web_av_sync_frames_rendered_in_sync: Option<i64>,
    /// field 2846, wire `web_av_sync_frames_rendered_late`
    pub web_av_sync_frames_rendered_late: Option<i64>,
    /// field 2847, wire `web_av_sync_max_abs_delta_ms`
    pub web_av_sync_max_abs_delta_ms: Option<String>,
    /// field 2848, wire `web_av_sync_max_queue_depth`
    pub web_av_sync_max_queue_depth: Option<i64>,
    /// field 2849, wire `web_av_sync_p50_delta_ms`
    pub web_av_sync_p50_delta_ms: Option<String>,
    /// field 2850, wire `web_av_sync_p95_delta_ms`
    pub web_av_sync_p95_delta_ms: Option<String>,
    /// field 2851, wire `web_av_sync_recalibration_count`
    pub web_av_sync_recalibration_count: Option<i64>,
    /// field 2852, wire `web_av_sync_time_out_of_sync_ms`
    pub web_av_sync_time_out_of_sync_ms: Option<i64>,
    /// field 2853, wire `peer_noise_suppression_ui_status`
    pub peer_noise_suppression_ui_status: Option<bool>,
    /// field 2854, wire `call_accept_rcvd`
    pub call_accept_rcvd: Option<bool>,
    /// field 2855, wire `call_accept_sent`
    pub call_accept_sent: Option<bool>,
    /// field 2856, wire `last_min_video_render_freeze2x_t_v2`
    pub last_min_video_render_freeze2x_tv2: Option<String>,
    /// field 2857, wire `last_min_video_render_freeze4x_t_v2`
    pub last_min_video_render_freeze4x_tv2: Option<String>,
    /// field 2858, wire `last_min_video_render_freeze8x_t_v2`
    pub last_min_video_render_freeze8x_tv2: Option<String>,
    /// field 2859, wire `last_min_video_render_freeze_t_v2`
    pub last_min_video_render_freeze_tv2: Option<String>,
    /// field 2860, wire `video_render_freeze2x_t_dominant_speaker_v2`
    pub video_render_freeze2x_tdominant_speaker_v2: Option<String>,
    /// field 2861, wire `video_render_freeze4x_t_dominant_speaker_v2`
    pub video_render_freeze4x_tdominant_speaker_v2: Option<String>,
    /// field 2862, wire `video_render_freeze8x_t_dominant_speaker_v2`
    pub video_render_freeze8x_tdominant_speaker_v2: Option<String>,
    /// field 2863, wire `video_render_freeze_t_dominant_speaker_v2`
    pub video_render_freeze_tdominant_speaker_v2: Option<String>,
    /// field 2864, wire `ml_offline_rl_bwe_action_fallback_count`
    pub ml_offline_rl_bwe_action_fallback_count: Option<i64>,
    /// field 2865, wire `ml_offline_rl_bwe_action_pass_count`
    pub ml_offline_rl_bwe_action_pass_count: Option<i64>,
    /// field 2866, wire `ml_offline_rl_bwe_check_not_ready_count`
    pub ml_offline_rl_bwe_check_not_ready_count: Option<i64>,
    /// field 2867, wire `ml_offline_rl_bwe_check_range_count`
    pub ml_offline_rl_bwe_check_range_count: Option<i64>,
    /// field 2868, wire `ml_offline_rl_bwe_check_roc_count`
    pub ml_offline_rl_bwe_check_roc_count: Option<i64>,
    /// field 2869, wire `ml_offline_rl_bwe_check_tfrc_div_count`
    pub ml_offline_rl_bwe_check_tfrc_div_count: Option<i64>,
    /// field 2870, wire `ml_offline_rl_bwe_check_variance_count`
    pub ml_offline_rl_bwe_check_variance_count: Option<i64>,
    /// field 2871, wire `ml_offline_rl_bwe_total_checks`
    pub ml_offline_rl_bwe_total_checks: Option<i64>,
    /// field 2872, wire `ml_offline_rl_bwe_usage_pct`
    pub ml_offline_rl_bwe_usage_pct: Option<String>,
    /// field 2873, wire `is_lgc_add`
    pub is_lgc_add: Option<bool>,
    /// field 2874, wire `video_webcodecs_dec_fatal_error_num`
    pub video_webcodecs_dec_fatal_error_num: Option<i64>,
    /// field 2875, wire `automos_receiver_model_download_failure_count`
    pub automos_receiver_model_download_failure_count: Option<i64>,
    /// field 2876, wire `automos_sender_model_download_failure_count`
    pub automos_sender_model_download_failure_count: Option<i64>,
    /// field 2877, wire `calling_history_uaqc_record_applied_bitrate_bps`
    pub calling_history_uaqc_record_applied_bitrate_bps: Option<i64>,
    /// field 2878, wire `calling_history_uaqc_record_bitrate_bps`
    pub calling_history_uaqc_record_bitrate_bps: Option<i64>,
    /// field 2879, wire `calling_history_uaqc_record_both_match_count`
    pub calling_history_uaqc_record_both_match_count: Option<i64>,
    /// field 2880, wire `calling_history_uaqc_record_count`
    pub calling_history_uaqc_record_count: Option<i64>,
    /// field 2881, wire `calling_history_uaqc_record_filtered_count`
    pub calling_history_uaqc_record_filtered_count: Option<i64>,
    /// field 2882, wire `calling_history_uaqc_record_peer_match_count`
    pub calling_history_uaqc_record_peer_match_count: Option<i64>,
    /// field 2883, wire `calling_history_uaqc_record_plr_pct`
    pub calling_history_uaqc_record_plr_pct: Option<i64>,
    /// field 2884, wire `calling_history_uaqc_record_remb_bps`
    pub calling_history_uaqc_record_remb_bps: Option<i64>,
    /// field 2885, wire `calling_history_uaqc_record_rtt_ms`
    pub calling_history_uaqc_record_rtt_ms: Option<i64>,
    /// field 2886, wire `calling_history_uaqc_record_self_match_count`
    pub calling_history_uaqc_record_self_match_count: Option<i64>,
    /// field 2887, wire `web_audio_ctx_base_latency_ms`
    pub web_audio_ctx_base_latency_ms: Option<String>,
    /// field 2888, wire `web_audio_ctx_output_latency_avg_ms`
    pub web_audio_ctx_output_latency_avg_ms: Option<String>,
    /// field 2889, wire `web_audio_ctx_output_latency_max_ms`
    pub web_audio_ctx_output_latency_max_ms: Option<String>,
    /// field 2890, wire `web_audio_platform_delay_ms`
    pub web_audio_platform_delay_ms: Option<String>,
    /// field 2891, wire `web_audio_rb_delay_avg_ms`
    pub web_audio_rb_delay_avg_ms: Option<String>,
    /// field 2892, wire `web_audio_rb_delay_max_ms`
    pub web_audio_rb_delay_max_ms: Option<String>,
    /// field 2893, wire `web_audio_rb_fill_max_pct`
    pub web_audio_rb_fill_max_pct: Option<i64>,
    /// field 2894, wire `web_audio_underrun_total`
    pub web_audio_underrun_total: Option<i64>,
    /// field 2895, wire `web_sctp_ba_peak_avg_bytes`
    pub web_sctp_ba_peak_avg_bytes: Option<String>,
    /// field 2896, wire `web_sctp_ba_peak_max_bytes`
    pub web_sctp_ba_peak_max_bytes: Option<String>,
    /// field 2897, wire `web_sctp_ba_tail_avg_bytes`
    pub web_sctp_ba_tail_avg_bytes: Option<String>,
    /// field 2898, wire `web_sctp_ba_tail_max_bytes`
    pub web_sctp_ba_tail_max_bytes: Option<String>,
    /// field 2899, wire `peer_render_failure_reason`
    pub peer_render_failure_reason: Option<i64>,
    /// field 2900, wire `web_transport_used`
    pub web_transport_used: Option<bool>,
    /// field 2901, wire `genai_group_call_bot_join_latency`
    pub genai_group_call_bot_join_latency: Option<String>,
    /// field 2902, wire `genai_is_group_call`
    pub genai_is_group_call: Option<bool>,
    /// field 2903, wire `web_audio_capture_overrun_count`
    pub web_audio_capture_overrun_count: Option<i64>,
    /// field 2904, wire `web_audio_capture_sab_fill_avg_ms`
    pub web_audio_capture_sab_fill_avg_ms: Option<String>,
    /// field 2905, wire `web_audio_capture_sab_fill_max_ms`
    pub web_audio_capture_sab_fill_max_ms: Option<String>,
    /// field 2906, wire `web_audio_capture_startup_seed_ms`
    pub web_audio_capture_startup_seed_ms: Option<String>,
    /// field 2907, wire `web_video_capture_capture_to_encoded_avg_ms`
    pub web_video_capture_capture_to_encoded_avg_ms: Option<String>,
    /// field 2908, wire `web_video_capture_present_to_construct_avg_ms`
    pub web_video_capture_present_to_construct_avg_ms: Option<String>,
    /// field 2909, wire `genai_bot_speech_duration_avg_ms`
    pub genai_bot_speech_duration_avg_ms: Option<String>,
    /// field 2910, wire `genai_bot_speech_duration_p90_ms`
    pub genai_bot_speech_duration_p90_ms: Option<String>,
    /// field 2911, wire `genai_bot_speech_duration_total_ms`
    pub genai_bot_speech_duration_total_ms: Option<String>,
    /// field 2912, wire `genai_num_user_interrupts`
    pub genai_num_user_interrupts: Option<i64>,
    /// field 2913, wire `genai_group_call_bot_invite_failures`
    pub genai_group_call_bot_invite_failures: Option<i64>,
    /// field 2914, wire `genai_group_call_bot_inviter`
    pub genai_group_call_bot_inviter: Option<bool>,
    /// field 2915, wire `genai_group_call_bot_remove_failures`
    pub genai_group_call_bot_remove_failures: Option<i64>,
    /// field 2916, wire `genai_group_call_bot_remover`
    pub genai_group_call_bot_remover: Option<bool>,
    /// field 2917, wire `video_nack_rtp_retransmit_retry_count`
    pub video_nack_rtp_retransmit_retry_count: Option<i64>,
    /// field 2923, wire `dnd_ring_path`
    pub dnd_ring_path: Option<DNDRINGPATHTYPE>,
    /// field 2925, wire `video_avg_comb_psnr_ss`
    pub video_avg_comb_psnr_ss: Option<String>,
    /// field 2926, wire `video_avg_encoding_psnr_ss`
    pub video_avg_encoding_psnr_ss: Option<String>,
    /// field 2927, wire `video_avg_scaling_psnr_ss`
    pub video_avg_scaling_psnr_ss: Option<String>,
    /// field 2928, wire `rbe_cap`
    pub rbe_cap: Option<i64>,
    /// field 2929, wire `rbe_cap_update_count`
    pub rbe_cap_update_count: Option<i64>,
    /// field 2930, wire `rbe_cap_update_max`
    pub rbe_cap_update_max: Option<i64>,
    /// field 2931, wire `rbe_cap_update_min`
    pub rbe_cap_update_min: Option<i64>,
    /// field 2932, wire `rbe_get_index_from_platform_and_network_count`
    pub rbe_get_index_from_platform_and_network_count: Option<i64>,
    /// field 2933, wire `rbe_get_index_from_platform_and_network_success`
    pub rbe_get_index_from_platform_and_network_success: Option<i64>,
    /// field 2934, wire `rbe_get_max_target_bitrate_count`
    pub rbe_get_max_target_bitrate_count: Option<i64>,
    /// field 2935, wire `rbe_get_max_target_bitrate_use_rbe_count`
    pub rbe_get_max_target_bitrate_use_rbe_count: Option<i64>,
    /// field 2936, wire `rbe_init_count`
    pub rbe_init_count: Option<i64>,
    /// field 2937, wire `rbe_init_done`
    pub rbe_init_done: Option<i64>,
    /// field 2938, wire `rbe_init_success`
    pub rbe_init_success: Option<i64>,
    /// field 2939, wire `rbe_init_vector_done`
    pub rbe_init_vector_done: Option<i64>,
    /// field 2940, wire `rbe_init_vector_success`
    pub rbe_init_vector_success: Option<i64>,
    /// field 2941, wire `rbe_instant_ramp_up_count`
    pub rbe_instant_ramp_up_count: Option<i64>,
    /// field 2942, wire `rbe_instant_ramp_up_success`
    pub rbe_instant_ramp_up_success: Option<i64>,
    /// field 2943, wire `rbe_instant_ramp_up_value`
    pub rbe_instant_ramp_up_value: Option<i64>,
    /// field 2944, wire `rbe_peer_network_medium`
    pub rbe_peer_network_medium: Option<i64>,
    /// field 2945, wire `rbe_peer_platform_id`
    pub rbe_peer_platform_id: Option<i64>,
    /// field 2946, wire `rbe_self_network_medium`
    pub rbe_self_network_medium: Option<i64>,
    /// field 2947, wire `rbe_self_platform_id`
    pub rbe_self_platform_id: Option<i64>,
    /// field 2948, wire `rbe_should_fallback_to_vid_dyn`
    pub rbe_should_fallback_to_vid_dyn: Option<bool>,
    /// field 2949, wire `rbe_should_fallback_to_vid_dyn_flip_count`
    pub rbe_should_fallback_to_vid_dyn_flip_count: Option<i64>,
    /// field 2950, wire `rbe_targeting_history_count`
    pub rbe_targeting_history_count: Option<i64>,
    /// field 2951, wire `rbe_targeting_history_done`
    pub rbe_targeting_history_done: Option<i64>,
    /// field 2952, wire `rbe_targeting_history_success`
    pub rbe_targeting_history_success: Option<i64>,
    /// field 2953, wire `rbe_targeting_history_value`
    pub rbe_targeting_history_value: Option<i64>,
    /// field 2954, wire `rbe_targeting_ml_count`
    pub rbe_targeting_ml_count: Option<i64>,
    /// field 2955, wire `rbe_targeting_ml_success`
    pub rbe_targeting_ml_success: Option<i64>,
    /// field 2956, wire `rbe_targeting_ml_value`
    pub rbe_targeting_ml_value: Option<i64>,
    /// field 2957, wire `rbe_targeting_pp_count`
    pub rbe_targeting_pp_count: Option<i64>,
    /// field 2958, wire `rbe_targeting_pp_hi_count`
    pub rbe_targeting_pp_hi_count: Option<i64>,
    /// field 2959, wire `rbe_targeting_pp_lo_count`
    pub rbe_targeting_pp_lo_count: Option<i64>,
    /// field 2960, wire `rbe_targeting_pp_success`
    pub rbe_targeting_pp_success: Option<i64>,
    /// field 2961, wire `rbe_targeting_pp_value_last`
    pub rbe_targeting_pp_value_last: Option<i64>,
    /// field 2962, wire `rbe_targeting_pp_value_max`
    pub rbe_targeting_pp_value_max: Option<i64>,
    /// field 2963, wire `rbe_targeting_pp_value_min`
    pub rbe_targeting_pp_value_min: Option<i64>,
    /// field 2964, wire `rbe_update_bitmap`
    pub rbe_update_bitmap: Option<i64>,
    /// field 2965, wire `rbe_vid_dyn_cond_count`
    pub rbe_vid_dyn_cond_count: Option<i64>,
    /// field 2966, wire `rbe_vid_dyn_count`
    pub rbe_vid_dyn_count: Option<i64>,
    /// field 2967, wire `rbe_vid_dyn_hd_dyn_max_target_bitrate_count`
    pub rbe_vid_dyn_hd_dyn_max_target_bitrate_count: Option<i64>,
    /// field 2968, wire `rbe_vid_dyn_max_target_bitrate_count`
    pub rbe_vid_dyn_max_target_bitrate_count: Option<i64>,
    /// field 2969, wire `rbe_vid_dyn_max_target_bitrate_invoke_count`
    pub rbe_vid_dyn_max_target_bitrate_invoke_count: Option<i64>,
    /// field 2970, wire `rbe_vid_dyn_max_target_bitrate_overwrite_count`
    pub rbe_vid_dyn_max_target_bitrate_overwrite_count: Option<i64>,
    /// field 2971, wire `call_eligible_bucket_id_list`
    pub call_eligible_bucket_id_list: Option<String>,
    /// field 2972, wire `video_edge_avg`
    pub video_edge_avg: Option<i64>,
    /// field 2973, wire `video_motion_avg`
    pub video_motion_avg: Option<i64>,
    /// field 2974, wire `video_motion_p5`
    pub video_motion_p5: Option<i64>,
    /// field 2975, wire `video_motion_p95`
    pub video_motion_p95: Option<i64>,
    /// field 2976, wire `audio_tx_crest_factor_avg`
    pub audio_tx_crest_factor_avg: Option<String>,
    /// field 2977, wire `audio_tx_crest_factor_p5`
    pub audio_tx_crest_factor_p5: Option<String>,
    /// field 2978, wire `audio_tx_crest_factor_p50`
    pub audio_tx_crest_factor_p50: Option<String>,
    /// field 2979, wire `audio_tx_crest_factor_p95`
    pub audio_tx_crest_factor_p95: Option<String>,
    /// field 2980, wire `audio_tx_sii_snr_avg`
    pub audio_tx_sii_snr_avg: Option<String>,
    /// field 2981, wire `audio_tx_sii_snr_p5`
    pub audio_tx_sii_snr_p5: Option<String>,
    /// field 2982, wire `audio_tx_sii_snr_p50`
    pub audio_tx_sii_snr_p50: Option<String>,
    /// field 2983, wire `audio_tx_sii_snr_p95`
    pub audio_tx_sii_snr_p95: Option<String>,
    /// field 2984, wire `audio_tx_spectral_centroid_avg`
    pub audio_tx_spectral_centroid_avg: Option<String>,
    /// field 2985, wire `audio_tx_spectral_centroid_p5`
    pub audio_tx_spectral_centroid_p5: Option<String>,
    /// field 2986, wire `audio_tx_spectral_centroid_p50`
    pub audio_tx_spectral_centroid_p50: Option<String>,
    /// field 2987, wire `audio_tx_spectral_centroid_p95`
    pub audio_tx_spectral_centroid_p95: Option<String>,
    /// field 2988, wire `audio_tx_spectral_flatness_avg`
    pub audio_tx_spectral_flatness_avg: Option<String>,
    /// field 2989, wire `audio_tx_spectral_flatness_p5`
    pub audio_tx_spectral_flatness_p5: Option<String>,
    /// field 2990, wire `audio_tx_spectral_flatness_p50`
    pub audio_tx_spectral_flatness_p50: Option<String>,
    /// field 2991, wire `audio_tx_spectral_flatness_p95`
    pub audio_tx_spectral_flatness_p95: Option<String>,
    /// field 2992, wire `audio_tx_spectral_rolloff_avg`
    pub audio_tx_spectral_rolloff_avg: Option<String>,
    /// field 2993, wire `audio_tx_spectral_rolloff_p5`
    pub audio_tx_spectral_rolloff_p5: Option<String>,
    /// field 2994, wire `audio_tx_spectral_rolloff_p50`
    pub audio_tx_spectral_rolloff_p50: Option<String>,
    /// field 2995, wire `audio_tx_spectral_rolloff_p95`
    pub audio_tx_spectral_rolloff_p95: Option<String>,
    /// field 2996, wire `video_recv_psnr_avg_ss`
    pub video_recv_psnr_avg_ss: Option<String>,
    /// field 2997, wire `video_recv_psnr_p50_ss`
    pub video_recv_psnr_p50_ss: Option<String>,
    /// field 2998, wire `video_recv_psnr_p5_ss`
    pub video_recv_psnr_p5_ss: Option<String>,
    /// field 2999, wire `video_recv_psnr_p95_ss`
    pub video_recv_psnr_p95_ss: Option<String>,
    /// field 3000, wire `video_state_reorder_drop_count`
    pub video_state_reorder_drop_count: Option<i64>,
    /// field 3001, wire `c50_linked`
    pub c50_linked: Option<bool>,
    /// field 3002, wire `peripheral_device_origin`
    pub peripheral_device_origin: Option<PERIPHERALDEVICETYPE>,
    /// field 3004, wire `wearable_device_types`
    pub wearable_device_types: Option<String>,
    /// field 3005, wire `call_eligible_bucket_name_list`
    pub call_eligible_bucket_name_list: Option<String>,
    /// field 3006, wire `is_transfer_rejoin`
    pub is_transfer_rejoin: Option<bool>,
    /// field 3008, wire `wearable_call_have_used_pov`
    pub wearable_call_have_used_pov: Option<bool>,
    /// field 3009, wire `foa_source_surface`
    pub foa_source_surface: Option<i64>,
    /// field 3012, wire `call_rx_automos_noise_p5`
    pub call_rx_automos_noise_p5: Option<String>,
    /// field 3013, wire `call_rx_automos_noise_p50`
    pub call_rx_automos_noise_p50: Option<String>,
    /// field 3014, wire `call_rx_automos_noise_p95`
    pub call_rx_automos_noise_p95: Option<String>,
    /// field 3015, wire `call_rx_automos_overall_p5`
    pub call_rx_automos_overall_p5: Option<String>,
    /// field 3016, wire `call_rx_automos_overall_p50`
    pub call_rx_automos_overall_p50: Option<String>,
    /// field 3017, wire `call_rx_automos_overall_p95`
    pub call_rx_automos_overall_p95: Option<String>,
    /// field 3018, wire `call_rx_automos_speech_p5`
    pub call_rx_automos_speech_p5: Option<String>,
    /// field 3019, wire `call_rx_automos_speech_p50`
    pub call_rx_automos_speech_p50: Option<String>,
    /// field 3020, wire `call_rx_automos_speech_p95`
    pub call_rx_automos_speech_p95: Option<String>,
    /// field 3021, wire `call_tx_automos_noise_p5`
    pub call_tx_automos_noise_p5: Option<String>,
    /// field 3022, wire `call_tx_automos_noise_p50`
    pub call_tx_automos_noise_p50: Option<String>,
    /// field 3023, wire `call_tx_automos_noise_p95`
    pub call_tx_automos_noise_p95: Option<String>,
    /// field 3024, wire `call_tx_automos_overall_p5`
    pub call_tx_automos_overall_p5: Option<String>,
    /// field 3025, wire `call_tx_automos_overall_p50`
    pub call_tx_automos_overall_p50: Option<String>,
    /// field 3026, wire `call_tx_automos_overall_p95`
    pub call_tx_automos_overall_p95: Option<String>,
    /// field 3027, wire `call_tx_automos_speech_p5`
    pub call_tx_automos_speech_p5: Option<String>,
    /// field 3028, wire `call_tx_automos_speech_p50`
    pub call_tx_automos_speech_p50: Option<String>,
    /// field 3029, wire `call_tx_automos_speech_p95`
    pub call_tx_automos_speech_p95: Option<String>,
    /// field 3030, wire `video_composite_brightness_avg`
    pub video_composite_brightness_avg: Option<String>,
    /// field 3031, wire `video_overexposure_avg`
    pub video_overexposure_avg: Option<String>,
    /// field 3032, wire `web_video_encoder_type`
    pub web_video_encoder_type: Option<String>,
    /// field 3033, wire `video_recv_to_render_latency`
    pub video_recv_to_render_latency: Option<String>,
    /// field 3034, wire `ca2d_extension_add_t`
    pub ca2d_extension_add_t: Option<String>,
    /// field 3035, wire `ca2d_extension_connection_state`
    pub ca2d_extension_connection_state: Option<CA2DEXTENSIONCONNECTIONSTATE>,
    /// field 3036, wire `ca2d_extension_create_t`
    pub ca2d_extension_create_t: Option<String>,
    /// field 3037, wire `ca2d_preview_t`
    pub ca2d_preview_t: Option<String>,
    /// field 3038, wire `extension_type`
    pub extension_type: Option<i64>,
    /// field 3039, wire `extension_type_bitmask`
    pub extension_type_bitmask: Option<i64>,
    /// field 3040, wire `extension_user_rid`
    pub extension_user_rid: Option<String>,
    /// field 3041, wire `imu_tx_bitrate`
    pub imu_tx_bitrate: Option<i64>,
    /// field 3042, wire `imu_tx_dropped_count`
    pub imu_tx_dropped_count: Option<i64>,
    /// field 3043, wire `imu_tx_frame_count`
    pub imu_tx_frame_count: Option<i64>,
    /// field 3044, wire `max_num_connected_extensions`
    pub max_num_connected_extensions: Option<i64>,
    /// field 3045, wire `num_connected_extensions`
    pub num_connected_extensions: Option<i64>,
    /// field 3048, wire `mlow_dnn_complexity_trigger_count`
    pub mlow_dnn_complexity_trigger_count: Option<i64>,
    /// field 3049, wire `mlow_dnn_loaded`
    pub mlow_dnn_loaded: Option<bool>,
    /// field 3050, wire `mlow_dnn_permanently_disabled`
    pub mlow_dnn_permanently_disabled: Option<bool>,
    /// field 3051, wire `mlow_dnn_warmup_count`
    pub mlow_dnn_warmup_count: Option<i64>,
    /// field 3052, wire `mlow_dnn_weights_used`
    pub mlow_dnn_weights_used: Option<bool>,
    /// field 3053, wire `redial_after_user_hangup`
    pub redial_after_user_hangup: Option<bool>,
    /// field 3054, wire `e2ee_type`
    pub e2ee_type: Option<E2EETYPE>,
    /// field 3055, wire `hbh_dc_bytes_received_count`
    pub hbh_dc_bytes_received_count: Option<i64>,
    /// field 3056, wire `hbh_dc_bytes_sent_count`
    pub hbh_dc_bytes_sent_count: Option<i64>,
    /// field 3057, wire `hbh_dc_msgs_received_count`
    pub hbh_dc_msgs_received_count: Option<i64>,
    /// field 3058, wire `hbh_dc_msgs_sent_count`
    pub hbh_dc_msgs_sent_count: Option<i64>,
    /// field 3059, wire `hbh_dc_setup_avg_t`
    pub hbh_dc_setup_avg_t: Option<String>,
    /// field 3060, wire `hbh_dtls_connection_state`
    pub hbh_dtls_connection_state: Option<HBHDTLSCONNECTIONSTATE>,
    /// field 3061, wire `hbh_dtls_handshake_completed_count`
    pub hbh_dtls_handshake_completed_count: Option<i64>,
    /// field 3062, wire `hbh_dtls_handshake_failed_count`
    pub hbh_dtls_handshake_failed_count: Option<i64>,
    /// field 3063, wire `hbh_dtls_handshake_setup_avg_t`
    pub hbh_dtls_handshake_setup_avg_t: Option<String>,
    /// field 3064, wire `hbh_dtls_handshake_started_count`
    pub hbh_dtls_handshake_started_count: Option<i64>,
    /// field 3065, wire `hbh_sctp_setup_avg_t`
    pub hbh_sctp_setup_avg_t: Option<String>,
    /// field 3066, wire `is_extension_creator`
    pub is_extension_creator: Option<bool>,
    /// field 3067, wire `ca2d_extension_add_failure_reason`
    pub ca2d_extension_add_failure_reason: Option<CA2DEXTENSIONADDFAILUREREASON>,
    /// field 3068, wire `outgoing_call_setup_active_ms`
    pub outgoing_call_setup_active_ms: Option<String>,
    /// field 3069, wire `hbh_dc_msgs_sent_broadcast_count`
    pub hbh_dc_msgs_sent_broadcast_count: Option<i64>,
    /// field 3070, wire `hbh_dc_msgs_sent_relay_only_count`
    pub hbh_dc_msgs_sent_relay_only_count: Option<i64>,
    /// field 3071, wire `hbh_dc_msgs_sent_selective_count`
    pub hbh_dc_msgs_sent_selective_count: Option<i64>,
    /// field 3072, wire `audio_codec_num_bw_switches`
    pub audio_codec_num_bw_switches: Option<i64>,
    /// field 3073, wire `ml_ns_available`
    pub ml_ns_available: Option<bool>,
    /// field 3074, wire `ca2d_receiver_ext_connect_t`
    pub ca2d_receiver_ext_connect_t: Option<String>,
    /// field 3075, wire `ca2d_receiver_first_frame_t`
    pub ca2d_receiver_first_frame_t: Option<String>,
    /// field 3076, wire `video_render_unique_fps`
    pub video_render_unique_fps: Option<String>,
    /// field 3077, wire `ca2d_ever_connected`
    pub ca2d_ever_connected: Option<bool>,
    /// field 3078, wire `device_soc_manufacturer`
    pub device_soc_manufacturer: Option<String>,
    /// field 3079, wire `device_soc_model`
    pub device_soc_model: Option<String>,
    /// field 3080, wire `ca2d_e2e_network_delay_ms`
    pub ca2d_e2e_network_delay_ms: Option<String>,
    /// field 3081, wire `ca2d_net_cathode_sfu_rtt_ms`
    pub ca2d_net_cathode_sfu_rtt_ms: Option<String>,
    /// field 3082, wire `ca2d_net_creator_sfu_rtt_ms`
    pub ca2d_net_creator_sfu_rtt_ms: Option<String>,
    /// field 3083, wire `hbh_dc_connection_lost_crash`
    pub hbh_dc_connection_lost_crash: Option<i64>,
    /// field 3084, wire `hbh_dc_connection_lost_goaway`
    pub hbh_dc_connection_lost_goaway: Option<i64>,
    /// field 3085, wire `hbh_dc_reconnect_success`
    pub hbh_dc_reconnect_success: Option<i64>,
    /// field 3086, wire `hbh_dc_sframe_decrypt_count`
    pub hbh_dc_sframe_decrypt_count: Option<i64>,
    /// field 3087, wire `hbh_dc_sframe_decrypt_fail_count`
    pub hbh_dc_sframe_decrypt_fail_count: Option<i64>,
    /// field 3088, wire `hbh_dc_sframe_encrypt_count`
    pub hbh_dc_sframe_encrypt_count: Option<i64>,
    /// field 3089, wire `hbh_dc_standby_rearm`
    pub hbh_dc_standby_rearm: Option<i64>,
    /// field 3090, wire `hbh_dc_teardown_count`
    pub hbh_dc_teardown_count: Option<i64>,
    /// field 3091, wire `ca2d_fail_count`
    pub ca2d_fail_count: Option<i64>,
    /// field 3092, wire `ca2d_succ_count`
    pub ca2d_succ_count: Option<i64>,
    /// field 3093, wire `ca2d_attempt_count`
    pub ca2d_attempt_count: Option<i64>,
    /// field 3094, wire `aux_video_nack_rtp_retransmit_recvd_count`
    pub aux_video_nack_rtp_retransmit_recvd_count: Option<i64>,
    /// field 3095, wire `aux_video_nack_rtp_retransmit_req_count`
    pub aux_video_nack_rtp_retransmit_req_count: Option<i64>,
    /// field 3096, wire `aux_video_nack_rtp_retransmit_retry_count`
    pub aux_video_nack_rtp_retransmit_retry_count: Option<i64>,
    /// field 3097, wire `aux_video_render_freeze2x_t`
    pub aux_video_render_freeze2x_t: Option<String>,
    /// field 3098, wire `aux_video_render_freeze4x_t`
    pub aux_video_render_freeze4x_t: Option<String>,
    /// field 3099, wire `aux_video_render_freeze8x_t`
    pub aux_video_render_freeze8x_t: Option<String>,
    /// field 3100, wire `aux_video_render_freeze_t`
    pub aux_video_render_freeze_t: Option<String>,
    /// field 3101, wire `aux_video_rx_fec_bitrate`
    pub aux_video_rx_fec_bitrate: Option<String>,
    /// field 3102, wire `aux_video_rx_rtcp_pli`
    pub aux_video_rx_rtcp_pli: Option<i64>,
    /// field 3103, wire `dual_stream_camera_auto_off_reason`
    pub dual_stream_camera_auto_off_reason: Option<i64>,
    /// field 3104, wire `is_dual_stream_backward_rendering`
    pub is_dual_stream_backward_rendering: Option<bool>,
    /// field 3105, wire `is_dual_stream_ss`
    pub is_dual_stream_ss: Option<bool>,
    /// field 3106, wire `last_min_aux_video_render_freeze2x_t`
    pub last_min_aux_video_render_freeze2x_t: Option<String>,
    /// field 3107, wire `last_min_aux_video_render_freeze4x_t`
    pub last_min_aux_video_render_freeze4x_t: Option<String>,
    /// field 3108, wire `last_min_aux_video_render_freeze8x_t`
    pub last_min_aux_video_render_freeze8x_t: Option<String>,
    /// field 3109, wire `last_min_aux_video_render_freeze_t`
    pub last_min_aux_video_render_freeze_t: Option<String>,
    /// field 3110, wire `video_rx_bitrate_combined`
    pub video_rx_bitrate_combined: Option<String>,
    /// field 3111, wire `video_rx_total_bytes_ss`
    pub video_rx_total_bytes_ss: Option<String>,
}