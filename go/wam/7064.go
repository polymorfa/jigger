const WamGroupHistoryReceiverUserJourney = 7064 // channel: regular

type GroupHistoryReceiverUserJourneyEvent struct {
	GroupHistoryMessagesCount int64 `wam:"group_history_messages_count"` // field 1
	GroupHistoryReceiverActionType GROUPHISTORYRECEIVERUSERJOURNEYACTIONTYPE `wam:"group_history_receiver_action_type"` // field 2
	GroupHistoryReceiverGroupId string `wam:"group_history_receiver_group_id"` // field 3
	IsAutoProcess bool `wam:"is_auto_process"` // field 4
	MessageReceivedTs int64 `wam:"message_received_ts"` // field 5
	UiSurface TSSURFACE `wam:"ui_surface"` // field 6
	UnifiedSessionId string `wam:"unified_session_id"` // field 7
	UserJourneyMs int64 `wam:"user_journey_ms"` // field 8
	GroupHistoryDbIgnoredOlderMessages bool `wam:"group_history_db_ignored_older_messages"` // field 9
	MessageKeyHash string `wam:"message_key_hash"` // field 10
	ReceiverFailureReason string `wam:"receiver_failure_reason"` // field 11
	GroupHistoryOutWindowPinsCount int64 `wam:"group_history_out_window_pins_count"` // field 12
	GroupHistoryPinsCount int64 `wam:"group_history_pins_count"` // field 13
	GroupHistoryUncountedMessagesCount int64 `wam:"group_history_uncounted_messages_count"` // field 14
}