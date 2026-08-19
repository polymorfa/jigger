pub const WAM_PRE_CALL_USER_JOURNEY_CALLS_TAB: u32 = 5680;

#[derive(Debug, Default)]
pub struct PreCallUserJourneyCallsTabEvent {
    /// field 1, wire `app_session_id`
    pub app_session_id: Option<String>,
    /// field 2, wire `calls_tab_source`
    pub calls_tab_source: Option<CALLSTABSOURCE>,
    /// field 3, wire `pre_call_action_type`
    pub pre_call_action_type: Option<PRECALLACTIONTYPE>,
    /// field 4, wire `sub_surface`
    pub sub_surface: Option<SUBSURFACE>,
    /// field 5, wire `surface_session_id`
    pub surface_session_id: Option<String>,
    /// field 6, wire `user_journey_funnel_id`
    pub user_journey_funnel_id: Option<String>,
    /// field 7, wire `call_size_type`
    pub call_size_type: Option<CALLSIZETYPE>,
    /// field 9, wire `user_journey_event_ms`
    pub user_journey_event_ms: Option<i64>,
    /// field 10, wire `item_position`
    pub item_position: Option<i64>,
    /// field 11, wire `genai_bots`
    pub genai_bots: Option<String>,
    /// field 12, wire `selected_item_count`
    pub selected_item_count: Option<i64>,
}