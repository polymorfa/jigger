pub const WAM_PRE_CALL_USER_JOURNEY_CHAT_THREAD: u32 = 5634;

#[derive(Debug, Default)]
pub struct PreCallUserJourneyChatThreadEvent {
    /// field 1, wire `app_session_id`
    pub app_session_id: Option<String>,
    /// field 2, wire `group_size`
    pub group_size: Option<i64>,
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
    /// field 9, wire `call_size`
    pub call_size: Option<i64>,
    /// field 10, wire `user_journey_event_ms`
    pub user_journey_event_ms: Option<i64>,
    /// field 11, wire `is_community_group`
    pub is_community_group: Option<bool>,
    /// field 12, wire `is_video_call`
    pub is_video_call: Option<bool>,
    /// field 13, wire `call_random_id`
    pub call_random_id: Option<String>,
    /// field 14, wire `genai_bots`
    pub genai_bots: Option<String>,
}