pub const WAM_MESSAGING_USER_JOURNEY: u32 = 5134;

#[derive(Debug, Default)]
pub struct MessagingUserJourneyEvent {
    /// field 1, wire `app_session_id`
    pub app_session_id: Option<String>,
    /// field 2, wire `messaging_action_type`
    pub messaging_action_type: Option<ACTIONTYPE>,
    /// field 3, wire `pin_in_chat_expiry_secs`
    pub pin_in_chat_expiry_secs: Option<i64>,
    /// field 4, wire `thread_type`
    pub thread_type: Option<THREADTYPE>,
    /// field 5, wire `ui_surface`
    pub ui_surface: Option<TSSURFACE>,
    /// field 6, wire `user_journey_funnel_id`
    pub user_journey_funnel_id: Option<String>,
    /// field 7, wire `user_role`
    pub user_role: Option<USERROLETYPE>,
    /// field 8, wire `is_self_pin`
    pub is_self_pin: Option<bool>,
    /// field 9, wire `media_type`
    pub media_type: Option<MEDIATYPE>,
    /// field 10, wire `unified_session_id`
    pub unified_session_id: Option<String>,
}