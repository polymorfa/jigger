pub const WAM_UI_ACTION: u32 = 472;

#[derive(Debug, Default)]
pub struct UiActionEvent {
    /// field 1, wire `ui_action_type`
    pub ui_action_type: Option<UIACTIONTYPE>,
    /// field 2, wire `ui_action_preloaded`
    pub ui_action_preloaded: Option<bool>,
    /// field 3, wire `ui_action_t`
    pub ui_action_t: Option<String>,
    /// field 4, wire `size_bucket`
    pub size_bucket: Option<SIZEBUCKET>,
    /// field 5, wire `device_count`
    pub device_count: Option<i64>,
    /// field 6, wire `participant_count`
    pub participant_count: Option<i64>,
    /// field 7, wire `ui_action_chat_type`
    pub ui_action_chat_type: Option<UIACTIONCHATTYPE>,
    /// field 8, wire `is_lid`
    pub is_lid: Option<bool>,
    /// field 9, wire `agent_engagement_type`
    pub agent_engagement_type: Option<AGENTENGAGEMENTENUMTYPE>,
    /// field 10, wire `local_addressing_mode`
    pub local_addressing_mode: Option<ADDRESSINGMODE>,
    /// field 11, wire `bot_type`
    pub bot_type: Option<BOTTYPE>,
    /// field 12, wire `ui_action_ttrc_surface_name`
    pub ui_action_ttrc_surface_name: Option<String>,
    /// field 13, wire `db_main_thread_count`
    pub db_main_thread_count: Option<i64>,
    /// field 14, wire `db_reads_count`
    pub db_reads_count: Option<i64>,
    /// field 15, wire `db_writes_count`
    pub db_writes_count: Option<i64>,
    /// field 16, wire `peripheral_connected`
    pub peripheral_connected: Option<String>,
    /// field 17, wire `db_bg_thread_reads_duration_t`
    pub db_bg_thread_reads_duration_t: Option<String>,
    /// field 18, wire `db_bg_thread_writes_duration_t`
    pub db_bg_thread_writes_duration_t: Option<String>,
    /// field 19, wire `db_main_thread_reads_duration_t`
    pub db_main_thread_reads_duration_t: Option<String>,
    /// field 20, wire `db_main_thread_writes_duration_t`
    pub db_main_thread_writes_duration_t: Option<String>,
    /// field 21, wire `app_context`
    pub app_context: Option<String>,
    /// field 22, wire `app_context_bitfield`
    pub app_context_bitfield: Option<i64>,
    /// field 23, wire `is_low_power_mode`
    pub is_low_power_mode: Option<bool>,
    /// field 25, wire `ui_action_presentation_source`
    pub ui_action_presentation_source: Option<String>,
    /// field 26, wire `app_session_id`
    pub app_session_id: Option<String>,
    /// field 27, wire `unified_session_id`
    pub unified_session_id: Option<String>,
    /// field 28, wire `trace_id_int`
    pub trace_id_int: Option<i64>,
    /// field 29, wire `has_open_ai_participant`
    pub has_open_ai_participant: Option<bool>,
    /// field 30, wire `has_tee_ai_participant`
    pub has_tee_ai_participant: Option<bool>,
}