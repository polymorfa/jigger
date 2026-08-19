pub const WAM_JOINABLE_CALL: u32 = 2572;

#[derive(Debug, Default)]
pub struct JoinableCallEvent {
    /// field 1, wire `call_random_id`
    pub call_random_id: Option<String>,
    /// field 2, wire `lobby_entry_point`
    pub lobby_entry_point: Option<LOBBYENTRYPOINTTYPE>,
    /// field 3, wire `is_rejoin`
    pub is_rejoin: Option<bool>,
    /// field 4, wire `lobby_exit`
    pub lobby_exit: Option<LOBBYEXITTYPE>,
    /// field 5, wire `lobby_exit_nack_code`
    pub lobby_exit_nack_code: Option<i64>,
    /// field 6, wire `legacy_call_result`
    pub legacy_call_result: Option<CALLRESULTTYPE>,
    /// field 7, wire `lobby_visible_t`
    pub lobby_visible_t: Option<String>,
    /// field 8, wire `is_rering`
    pub is_rering: Option<bool>,
    /// field 9, wire `joinable_during_call`
    pub joinable_during_call: Option<bool>,
    /// field 10, wire `video_enabled`
    pub video_enabled: Option<bool>,
    /// field 12, wire `num_invited_participants`
    pub num_invited_participants: Option<i64>,
    /// field 13, wire `num_connected_peers`
    pub num_connected_peers: Option<i64>,
    /// field 14, wire `is_pending_call`
    pub is_pending_call: Option<bool>,
    /// field 16, wire `joinable_accept_before_lobby_ack`
    pub joinable_accept_before_lobby_ack: Option<bool>,
    /// field 17, wire `joinable_end_call_before_lobby_ack`
    pub joinable_end_call_before_lobby_ack: Option<bool>,
    /// field 18, wire `lobby_query_while_connected`
    pub lobby_query_while_connected: Option<bool>,
    /// field 19, wire `lobby_ack_latency_ms`
    pub lobby_ack_latency_ms: Option<String>,
    /// field 20, wire `num_outgoing_ringing_peers`
    pub num_outgoing_ringing_peers: Option<i64>,
    /// field 21, wire `time_since_last_client_poll_minutes`
    pub time_since_last_client_poll_minutes: Option<String>,
    /// field 22, wire `rejoin_missing_db_mapping`
    pub rejoin_missing_db_mapping: Option<bool>,
    /// field 23, wire `accept_ack_latency_ms`
    pub accept_ack_latency_ms: Option<String>,
    /// field 24, wire `is_linked_group_call`
    pub is_linked_group_call: Option<bool>,
    /// field 26, wire `has_spam_dialog`
    pub has_spam_dialog: Option<bool>,
    /// field 27, wire `nse_enabled`
    pub nse_enabled: Option<bool>,
    /// field 28, wire `nse_offline_queue_ms`
    pub nse_offline_queue_ms: Option<String>,
    /// field 29, wire `received_by_nse`
    pub received_by_nse: Option<bool>,
    /// field 30, wire `is_call_full`
    pub is_call_full: Option<bool>,
    /// field 31, wire `call_replayer_id`
    pub call_replayer_id: Option<String>,
    /// field 32, wire `is_from_call_link`
    pub is_from_call_link: Option<bool>,
    /// field 33, wire `is_link_join`
    pub is_link_join: Option<bool>,
    /// field 34, wire `join_ack_latency_ms`
    pub join_ack_latency_ms: Option<String>,
    /// field 35, wire `query_ack_latency_ms`
    pub query_ack_latency_ms: Option<String>,
    /// field 36, wire `time_since_accept_ms`
    pub time_since_accept_ms: Option<String>,
    /// field 37, wire `group_accept_no_critical_group_update`
    pub group_accept_no_critical_group_update: Option<bool>,
    /// field 38, wire `group_accept_to_critical_group_update_ms`
    pub group_accept_to_critical_group_update_ms: Option<String>,
    /// field 39, wire `is_link_creator`
    pub is_link_creator: Option<bool>,
    /// field 40, wire `is_scheduled_call`
    pub is_scheduled_call: Option<bool>,
    /// field 41, wire `call_side`
    pub call_side: Option<CALLSIDE>,
    /// field 42, wire `has_schedule_exact_alarm_permission`
    pub has_schedule_exact_alarm_permission: Option<bool>,
    /// field 43, wire `is_voice_chat`
    pub is_voice_chat: Option<bool>,
    /// field 44, wire `random_scheduled_id`
    pub random_scheduled_id: Option<i64>,
    /// field 45, wire `is_lid_call`
    pub is_lid_call: Option<bool>,
    /// field 46, wire `is_phash_based`
    pub is_phash_based: Option<bool>,
    /// field 47, wire `is_upgraded_group_call_before_connected`
    pub is_upgraded_group_call_before_connected: Option<bool>,
    /// field 48, wire `is_phash_mismatch`
    pub is_phash_mismatch: Option<bool>,
    /// field 49, wire `lobby_open_duration_ms`
    pub lobby_open_duration_ms: Option<i64>,
    /// field 50, wire `is_events_link`
    pub is_events_link: Option<bool>,
    /// field 51, wire `call_link_random_id`
    pub call_link_random_id: Option<String>,
    /// field 52, wire `is_waiting_room_enabled`
    pub is_waiting_room_enabled: Option<bool>,
    /// field 53, wire `time_in_waiting_room_ms`
    pub time_in_waiting_room_ms: Option<i64>,
    /// field 54, wire `is_one_on_one_call`
    pub is_one_on_one_call: Option<bool>,
    /// field 55, wire `is_device_switch`
    pub is_device_switch: Option<bool>,
    /// field 56, wire `is_transfer_rejoin`
    pub is_transfer_rejoin: Option<bool>,
}