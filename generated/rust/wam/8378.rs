pub const WAM_GROUP_HISTORY_SENDER_USER_JOURNEY: u32 = 8378;

#[derive(Debug, Default)]
pub struct GroupHistorySenderUserJourneyEvent {
    /// field 1, wire `bundle_send_source`
    pub bundle_send_source: Option<BUNDLESENDSOURCE>,
    /// field 2, wire `group_history_messages_count`
    pub group_history_messages_count: Option<i64>,
    /// field 3, wire `group_history_out_window_pins_count`
    pub group_history_out_window_pins_count: Option<i64>,
    /// field 4, wire `group_history_pins_count`
    pub group_history_pins_count: Option<i64>,
    /// field 5, wire `group_history_sender_action_type`
    pub group_history_sender_action_type: Option<GROUPHISTORYSENDERACTIONTYPE>,
    /// field 6, wire `group_history_system_message_type`
    pub group_history_system_message_type: Option<GROUPHISTORYSYSTEMMESSAGETYPE>,
    /// field 7, wire `group_history_uncounted_messages_count`
    pub group_history_uncounted_messages_count: Option<i64>,
    /// field 8, wire `group_size`
    pub group_size: Option<i64>,
    /// field 9, wire `ineligible_reason`
    pub ineligible_reason: Option<GROUPHISTORYINELIGIBILITYREASON>,
    /// field 10, wire `recipient_count`
    pub recipient_count: Option<i64>,
    /// field 11, wire `ui_surface`
    pub ui_surface: Option<TSSURFACE>,
    /// field 12, wire `unified_session_id`
    pub unified_session_id: Option<String>,
    /// field 13, wire `user_journey_ts`
    pub user_journey_ts: Option<i64>,
    /// field 14, wire `is_tee_bot_notice_only`
    pub is_tee_bot_notice_only: Option<bool>,
    /// field 15, wire `is_group_history_toggled_on`
    pub is_group_history_toggled_on: Option<bool>,
    /// field 16, wire `x_ineligible_reasons`
    pub x_ineligible_reasons: Option<String>,
}