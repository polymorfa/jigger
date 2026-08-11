pub const WAM_AI_THREADS_USER_JOURNEY: u32 = 7224;

#[derive(Debug, Default)]
pub struct AiThreadsUserJourneyEvent {
    /// field 1, wire `ai_session_id`
    pub ai_session_id: Option<String>,
    /// field 2, wire `app_session_id`
    pub app_session_id: Option<String>,
    /// field 3, wire `conversation_thread_creation_ts`
    pub conversation_thread_creation_ts: Option<String>,
    /// field 4, wire `conversation_thread_id`
    pub conversation_thread_id: Option<String>,
    /// field 5, wire `event_ts_ms`
    pub event_ts_ms: Option<i64>,
    /// field 6, wire `is_incognito_mode`
    pub is_incognito_mode: Option<bool>,
    /// field 7, wire `raw_bot_entry_point`
    pub raw_bot_entry_point: Option<String>,
    /// field 8, wire `thread_action_type`
    pub thread_action_type: Option<THREADACTIONTYPES>,
    /// field 9, wire `meta_ai_action_entry_point`
    pub meta_ai_action_entry_point: Option<METAAIACTIONENTRYPOINT>,
    /// field 10, wire `is_canonical_thread`
    pub is_canonical_thread: Option<bool>,
}