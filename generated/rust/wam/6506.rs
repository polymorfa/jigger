pub const WAM_FORWARD_ACTION_USER_JOURNEY: u32 = 6506;

#[derive(Debug, Default)]
pub struct ForwardActionUserJourneyEvent {
    /// field 1, wire `app_session_id`
    pub app_session_id: Option<String>,
    /// field 2, wire `forward_action_user_journey_action`
    pub forward_action_user_journey_action: Option<FORWARDACTIONUSERJOURNEYACTION>,
    /// field 3, wire `message_is_from_me`
    pub message_is_from_me: Option<bool>,
    /// field 4, wire `message_media_type`
    pub message_media_type: Option<MEDIATYPE>,
    /// field 5, wire `message_type`
    pub message_type: Option<MESSAGETYPE>,
    /// field 6, wire `ui_surface`
    pub ui_surface: Option<TSSURFACE>,
    /// field 7, wire `user_journey_chat_type`
    pub user_journey_chat_type: Option<USERJOURNEYCHATTYPE>,
    /// field 8, wire `user_journey_funnel_id`
    pub user_journey_funnel_id: Option<String>,
    /// field 9, wire `unified_session_id`
    pub unified_session_id: Option<String>,
    /// field 11, wire `forward_user_journey_funnel_id`
    pub forward_user_journey_funnel_id: Option<String>,
    /// field 12, wire `user_journey_event_ms`
    pub user_journey_event_ms: Option<i64>,
}