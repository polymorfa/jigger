pub const WAM_PTT_MESSAGE_USER_JOURNEY: u32 = 5402;

#[derive(Debug, Default)]
pub struct PttMessageUserJourneyEvent {
    /// field 1, wire `app_session_id`
    pub app_session_id: Option<String>,
    /// field 2, wire `ptt_message_user_journey_action`
    pub ptt_message_user_journey_action: Option<PTTMESSAGEUSERJOURNEYACTION>,
    /// field 3, wire `ptt_message_user_journey_stage`
    pub ptt_message_user_journey_stage: Option<PTTMESSAGEUSERJOURNEYSTAGE>,
    /// field 4, wire `ui_surface`
    pub ui_surface: Option<TSSURFACE>,
    /// field 5, wire `user_journey_chat_type`
    pub user_journey_chat_type: Option<USERJOURNEYCHATTYPE>,
    /// field 6, wire `user_journey_funnel_id`
    pub user_journey_funnel_id: Option<String>,
    /// field 7, wire `chatbar_initial_state`
    pub chatbar_initial_state: Option<CHATBARINITIALSTATE>,
    /// field 8, wire `user_journey_event_ms`
    pub user_journey_event_ms: Option<i64>,
    /// field 9, wire `ptt_message_user_journey_failure_reason`
    pub ptt_message_user_journey_failure_reason: Option<PTTMESSAGEUSERJOURNEYFAILUREREASON>,
    /// field 10, wire `unified_session_id`
    pub unified_session_id: Option<String>,
    /// field 11, wire `ptt_message_user_journey_contains_quoted_item`
    pub ptt_message_user_journey_contains_quoted_item: Option<bool>,
    /// field 12, wire `is_meta_ai_thread`
    pub is_meta_ai_thread: Option<bool>,
    /// field 13, wire `ptt_waveform_result`
    pub ptt_waveform_result: Option<PTTWAVEFORMRESULT>,
    /// field 14, wire `ptt_intensity_aggregate_value`
    pub ptt_intensity_aggregate_value: Option<String>,
}