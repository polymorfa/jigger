pub const WAM_TEXT_MESSAGE_USER_JOURNEY: u32 = 5404;

#[derive(Debug, Default)]
pub struct TextMessageUserJourneyEvent {
    /// field 1, wire `app_session_id`
    pub app_session_id: Option<String>,
    /// field 2, wire `text_message_user_journey_action`
    pub text_message_user_journey_action: Option<TEXTMESSAGEUSERJOURNEYACTION>,
    /// field 3, wire `ui_surface`
    pub ui_surface: Option<TSSURFACE>,
    /// field 4, wire `user_journey_chat_type`
    pub user_journey_chat_type: Option<USERJOURNEYCHATTYPE>,
    /// field 5, wire `user_journey_funnel_id`
    pub user_journey_funnel_id: Option<String>,
    /// field 6, wire `chatbar_initial_state`
    pub chatbar_initial_state: Option<CHATBARINITIALSTATE>,
    /// field 7, wire `user_journey_event_ms`
    pub user_journey_event_ms: Option<i64>,
    /// field 8, wire `unified_session_id`
    pub unified_session_id: Option<String>,
    /// field 9, wire `text_message_user_journey_contains_quoted_item`
    pub text_message_user_journey_contains_quoted_item: Option<bool>,
    /// field 10, wire `bot_type`
    pub bot_type: Option<BOTTYPE>,
}