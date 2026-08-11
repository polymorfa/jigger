pub const WAM_QUOTED_MESSAGE_USER_JOURNEY: u32 = 6444;

#[derive(Debug, Default)]
pub struct QuotedMessageUserJourneyEvent {
    /// field 1, wire `app_session_id`
    pub app_session_id: Option<String>,
    /// field 2, wire `message_media_type`
    pub message_media_type: Option<MEDIATYPE>,
    /// field 3, wire `message_type`
    pub message_type: Option<MESSAGETYPE>,
    /// field 4, wire `quoted_media_type`
    pub quoted_media_type: Option<MEDIATYPE>,
    /// field 5, wire `quoted_message_type_enum`
    pub quoted_message_type_enum: Option<MESSAGETYPE>,
    /// field 6, wire `quoted_message_user_journey_action`
    pub quoted_message_user_journey_action: Option<QUOTEDMESSAGEUSERJOURNEYACTION>,
    /// field 7, wire `quoted_message_user_journey_entry_point`
    pub quoted_message_user_journey_entry_point: Option<QUOTEDMESSAGEUSERJOURNEYENTRYPOINT>,
    /// field 8, wire `ui_surface`
    pub ui_surface: Option<TSSURFACE>,
    /// field 9, wire `user_journey_chat_type`
    pub user_journey_chat_type: Option<USERJOURNEYCHATTYPE>,
    /// field 10, wire `user_journey_funnel_id`
    pub user_journey_funnel_id: Option<String>,
    /// field 11, wire `unified_session_id`
    pub unified_session_id: Option<String>,
    /// field 12, wire `chatbar_initial_state`
    pub chatbar_initial_state: Option<CHATBARINITIALSTATE>,
    /// field 13, wire `quoted_message_user_journey_navigate_result`
    pub quoted_message_user_journey_navigate_result: Option<QUOTEDMESSAGEUSERJOURNEYNAVIGATERESULT>,
}