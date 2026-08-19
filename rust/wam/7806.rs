pub const WAM_HATCH_USER_JOURNEY: u32 = 7806;

#[derive(Debug, Default)]
pub struct HatchUserJourneyEvent {
    /// field 1, wire `ai_session_id`
    pub ai_session_id: Option<String>,
    /// field 3, wire `hatch_action_type`
    pub hatch_action_type: Option<HATCHACTIONTYPE>,
    /// field 4, wire `unified_session_id`
    pub unified_session_id: Option<String>,
    /// field 5, wire `raw_bot_entry_point`
    pub raw_bot_entry_point: Option<String>,
    /// field 6, wire `hitl_is_multi`
    pub hitl_is_multi: Option<bool>,
}