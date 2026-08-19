export const WamJoinableCall = 2572 as const

export interface JoinableCallEvent {
  /** field 1, wire `call_random_id` */
  callRandomId?: string
  /** field 2, wire `lobby_entry_point` */
  lobbyEntryPoint?: LOBBYENTRYPOINTTYPE
  /** field 3, wire `is_rejoin` */
  isRejoin?: boolean
  /** field 4, wire `lobby_exit` */
  lobbyExit?: LOBBYEXITTYPE
  /** field 5, wire `lobby_exit_nack_code` */
  lobbyExitNackCode?: number
  /** field 6, wire `legacy_call_result` */
  legacyCallResult?: CALLRESULTTYPE
  /** field 7, wire `lobby_visible_t` */
  lobbyVisibleT?: string
  /** field 8, wire `is_rering` */
  isRering?: boolean
  /** field 9, wire `joinable_during_call` */
  joinableDuringCall?: boolean
  /** field 10, wire `video_enabled` */
  videoEnabled?: boolean
  /** field 12, wire `num_invited_participants` */
  numInvitedParticipants?: number
  /** field 13, wire `num_connected_peers` */
  numConnectedPeers?: number
  /** field 14, wire `is_pending_call` */
  isPendingCall?: boolean
  /** field 16, wire `joinable_accept_before_lobby_ack` */
  joinableAcceptBeforeLobbyAck?: boolean
  /** field 17, wire `joinable_end_call_before_lobby_ack` */
  joinableEndCallBeforeLobbyAck?: boolean
  /** field 18, wire `lobby_query_while_connected` */
  lobbyQueryWhileConnected?: boolean
  /** field 19, wire `lobby_ack_latency_ms` */
  lobbyAckLatencyMs?: string
  /** field 20, wire `num_outgoing_ringing_peers` */
  numOutgoingRingingPeers?: number
  /** field 21, wire `time_since_last_client_poll_minutes` */
  timeSinceLastClientPollMinutes?: string
  /** field 22, wire `rejoin_missing_db_mapping` */
  rejoinMissingDbMapping?: boolean
  /** field 23, wire `accept_ack_latency_ms` */
  acceptAckLatencyMs?: string
  /** field 24, wire `is_linked_group_call` */
  isLinkedGroupCall?: boolean
  /** field 26, wire `has_spam_dialog` */
  hasSpamDialog?: boolean
  /** field 27, wire `nse_enabled` */
  nseEnabled?: boolean
  /** field 28, wire `nse_offline_queue_ms` */
  nseOfflineQueueMs?: string
  /** field 29, wire `received_by_nse` */
  receivedByNse?: boolean
  /** field 30, wire `is_call_full` */
  isCallFull?: boolean
  /** field 31, wire `call_replayer_id` */
  callReplayerId?: string
  /** field 32, wire `is_from_call_link` */
  isFromCallLink?: boolean
  /** field 33, wire `is_link_join` */
  isLinkJoin?: boolean
  /** field 34, wire `join_ack_latency_ms` */
  joinAckLatencyMs?: string
  /** field 35, wire `query_ack_latency_ms` */
  queryAckLatencyMs?: string
  /** field 36, wire `time_since_accept_ms` */
  timeSinceAcceptMs?: string
  /** field 37, wire `group_accept_no_critical_group_update` */
  groupAcceptNoCriticalGroupUpdate?: boolean
  /** field 38, wire `group_accept_to_critical_group_update_ms` */
  groupAcceptToCriticalGroupUpdateMs?: string
  /** field 39, wire `is_link_creator` */
  isLinkCreator?: boolean
  /** field 40, wire `is_scheduled_call` */
  isScheduledCall?: boolean
  /** field 41, wire `call_side` */
  callSide?: CALLSIDE
  /** field 42, wire `has_schedule_exact_alarm_permission` */
  hasScheduleExactAlarmPermission?: boolean
  /** field 43, wire `is_voice_chat` */
  isVoiceChat?: boolean
  /** field 44, wire `random_scheduled_id` */
  randomScheduledId?: number
  /** field 45, wire `is_lid_call` */
  isLidCall?: boolean
  /** field 46, wire `is_phash_based` */
  isPhashBased?: boolean
  /** field 47, wire `is_upgraded_group_call_before_connected` */
  isUpgradedGroupCallBeforeConnected?: boolean
  /** field 48, wire `is_phash_mismatch` */
  isPhashMismatch?: boolean
  /** field 49, wire `lobby_open_duration_ms` */
  lobbyOpenDurationMs?: number
  /** field 50, wire `is_events_link` */
  isEventsLink?: boolean
  /** field 51, wire `call_link_random_id` */
  callLinkRandomId?: string
  /** field 52, wire `is_waiting_room_enabled` */
  isWaitingRoomEnabled?: boolean
  /** field 53, wire `time_in_waiting_room_ms` */
  timeInWaitingRoomMs?: number
  /** field 54, wire `is_one_on_one_call` */
  isOneOnOneCall?: boolean
  /** field 55, wire `is_device_switch` */
  isDeviceSwitch?: boolean
  /** field 56, wire `is_transfer_rejoin` */
  isTransferRejoin?: boolean
}