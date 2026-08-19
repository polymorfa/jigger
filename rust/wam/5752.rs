pub const WAM_REACTION_USER_JOURNEY: u32 = 5752;

#[derive(Debug, Default)]
pub struct ReactionUserJourneyEvent {
    /// field 1, wire `app_session_id`
    pub app_session_id: Option<String>,
    /// field 2, wire `message_has_own_reaction`
    pub message_has_own_reaction: Option<bool>,
    /// field 3, wire `message_has_reaction`
    pub message_has_reaction: Option<bool>,
    /// field 4, wire `message_type`
    pub message_type: Option<MESSAGETYPE>,
    /// field 5, wire `reaction_user_journey_action`
    pub reaction_user_journey_action: Option<REACTIONUSERJOURNEYACTION>,
    /// field 6, wire `reaction_user_journey_entry_point`
    pub reaction_user_journey_entry_point: Option<REACTIONUSERJOURNEYENTRYPOINT>,
    /// field 7, wire `ui_surface`
    pub ui_surface: Option<TSSURFACE>,
    /// field 8, wire `user_journey_chat_type`
    pub user_journey_chat_type: Option<USERJOURNEYCHATTYPE>,
    /// field 9, wire `user_journey_funnel_id`
    pub user_journey_funnel_id: Option<String>,
    /// field 10, wire `message_media_type`
    pub message_media_type: Option<MEDIATYPE>,
    /// field 11, wire `user_journey_event_ms`
    pub user_journey_event_ms: Option<i64>,
    /// field 12, wire `unified_session_id`
    pub unified_session_id: Option<String>,
}