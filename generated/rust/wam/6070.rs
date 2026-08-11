pub const WAM_MARKETING_MESSAGE_USER_CONTROLS_JOURNEY: u32 = 6070;

#[derive(Debug, Default)]
pub struct MarketingMessageUserControlsJourneyEvent {
    /// field 1, wire `is_success`
    pub is_success: Option<bool>,
    /// field 2, wire `mm_user_controls_action`
    pub mm_user_controls_action: Option<MMUSERCONTROLSACTION>,
    /// field 3, wire `mm_user_controls_entry_point`
    pub mm_user_controls_entry_point: Option<MMUSERCONTROLSENTRYPOINT>,
    /// field 4, wire `mm_user_controls_error_type`
    pub mm_user_controls_error_type: Option<String>,
    /// field 5, wire `mm_user_controls_rollout_variant`
    pub mm_user_controls_rollout_variant: Option<i64>,
    /// field 6, wire `sequence_number`
    pub sequence_number: Option<i64>,
    /// field 7, wire `template_id`
    pub template_id: Option<String>,
    /// field 8, wire `unified_session_id`
    pub unified_session_id: Option<String>,
    /// field 9, wire `business_phone_number`
    pub business_phone_number: Option<i64>,
    /// field 10, wire `stop_duration`
    pub stop_duration: Option<String>,
}