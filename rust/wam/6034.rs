pub const WAM_CALL_INFO_USER_JOURNEY: u32 = 6034;

#[derive(Debug, Default)]
pub struct CallInfoUserJourneyEvent {
    /// field 1, wire `app_session_id`
    pub app_session_id: Option<String>,
    /// field 2, wire `call_group_size_bucket`
    pub call_group_size_bucket: Option<CALLSIZEBUCKET>,
    /// field 3, wire `call_size_type`
    pub call_size_type: Option<CALLSIZETYPE>,
    /// field 4, wire `call_type`
    pub call_type: Option<CALLTYPE>,
    /// field 5, wire `pre_call_action_type`
    pub pre_call_action_type: Option<PRECALLACTIONTYPE>,
    /// field 6, wire `surface_session_id`
    pub surface_session_id: Option<String>,
    /// field 7, wire `user_journey_event_ms`
    pub user_journey_event_ms: Option<i64>,
    /// field 8, wire `user_journey_funnel_id`
    pub user_journey_funnel_id: Option<String>,
    /// field 9, wire `num_participants_shown`
    pub num_participants_shown: Option<i64>,
    /// field 10, wire `participant_action_source`
    pub participant_action_source: Option<PARTICIPANTACTIONSOURCE>,
    /// field 11, wire `genai_bots`
    pub genai_bots: Option<String>,
}