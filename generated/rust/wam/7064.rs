pub const WAM_GROUP_HISTORY_RECEIVER_USER_JOURNEY: u32 = 7064;

#[derive(Debug, Default)]
pub struct GroupHistoryReceiverUserJourneyEvent {
    /// field 1, wire `group_history_messages_count`
    pub group_history_messages_count: Option<i64>,
    /// field 2, wire `group_history_receiver_action_type`
    pub group_history_receiver_action_type: Option<GROUPHISTORYRECEIVERUSERJOURNEYACTIONTYPE>,
    /// field 3, wire `group_history_receiver_group_id`
    pub group_history_receiver_group_id: Option<String>,
    /// field 4, wire `is_auto_process`
    pub is_auto_process: Option<bool>,
    /// field 5, wire `message_received_ts`
    pub message_received_ts: Option<i64>,
    /// field 6, wire `ui_surface`
    pub ui_surface: Option<TSSURFACE>,
    /// field 7, wire `unified_session_id`
    pub unified_session_id: Option<String>,
    /// field 8, wire `user_journey_ms`
    pub user_journey_ms: Option<i64>,
    /// field 9, wire `group_history_db_ignored_older_messages`
    pub group_history_db_ignored_older_messages: Option<bool>,
    /// field 10, wire `message_key_hash`
    pub message_key_hash: Option<String>,
    /// field 11, wire `receiver_failure_reason`
    pub receiver_failure_reason: Option<String>,
    /// field 12, wire `group_history_out_window_pins_count`
    pub group_history_out_window_pins_count: Option<i64>,
    /// field 13, wire `group_history_pins_count`
    pub group_history_pins_count: Option<i64>,
    /// field 14, wire `group_history_uncounted_messages_count`
    pub group_history_uncounted_messages_count: Option<i64>,
}