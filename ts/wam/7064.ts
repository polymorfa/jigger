export const WamGroupHistoryReceiverUserJourney = 7064 as const

export interface GroupHistoryReceiverUserJourneyEvent {
  /** field 1, wire `group_history_messages_count` */
  groupHistoryMessagesCount?: number
  /** field 2, wire `group_history_receiver_action_type` */
  groupHistoryReceiverActionType?: GROUPHISTORYRECEIVERUSERJOURNEYACTIONTYPE
  /** field 3, wire `group_history_receiver_group_id` */
  groupHistoryReceiverGroupId?: string
  /** field 4, wire `is_auto_process` */
  isAutoProcess?: boolean
  /** field 5, wire `message_received_ts` */
  messageReceivedTs?: number
  /** field 6, wire `ui_surface` */
  uiSurface?: TSSURFACE
  /** field 7, wire `unified_session_id` */
  unifiedSessionId?: string
  /** field 8, wire `user_journey_ms` */
  userJourneyMs?: number
  /** field 9, wire `group_history_db_ignored_older_messages` */
  groupHistoryDbIgnoredOlderMessages?: boolean
  /** field 10, wire `message_key_hash` */
  messageKeyHash?: string
  /** field 11, wire `receiver_failure_reason` */
  receiverFailureReason?: string
  /** field 12, wire `group_history_out_window_pins_count` */
  groupHistoryOutWindowPinsCount?: number
  /** field 13, wire `group_history_pins_count` */
  groupHistoryPinsCount?: number
  /** field 14, wire `group_history_uncounted_messages_count` */
  groupHistoryUncountedMessagesCount?: number
}