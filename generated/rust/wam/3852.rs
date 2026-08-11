pub const WAM_CALL_LINK_ACTION_EVENT: u32 = 3852;

#[derive(Debug, Default)]
pub struct CallLinkActionEventEvent {
    /// field 1, wire `call_link_action`
    pub call_link_action: Option<CALLLINKACTION>,
    /// field 2, wire `call_link_action_entry_point`
    pub call_link_action_entry_point: Option<CALLLINKACTIONENTRYPOINT>,
    /// field 3, wire `call_link_media`
    pub call_link_media: Option<CALLLINKMEDIA>,
    /// field 4, wire `call_link_shared_app`
    pub call_link_shared_app: Option<String>,
    /// field 5, wire `app_session_id`
    pub app_session_id: Option<String>,
    /// field 6, wire `call_link_share_chat_type`
    pub call_link_share_chat_type: Option<CALLLINKSHARECHATTYPE>,
    /// field 7, wire `call_link_type`
    pub call_link_type: Option<CALLLINKTYPE>,
    /// field 8, wire `user_journey_event_ms`
    pub user_journey_event_ms: Option<i64>,
    /// field 9, wire `user_journey_funnel_id`
    pub user_journey_funnel_id: Option<String>,
    /// field 10, wire `is_waiting_room_enabled`
    pub is_waiting_room_enabled: Option<bool>,
}