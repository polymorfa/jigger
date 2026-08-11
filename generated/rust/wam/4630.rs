pub const WAM_BOT_JOURNEY: u32 = 4630;

#[derive(Debug, Default)]
pub struct BotJourneyEvent {
    /// field 1, wire `action_type`
    pub action_type: Option<CHATFILTERACTIONTYPES>,
    /// field 2, wire `app_session_id`
    pub app_session_id: Option<String>,
    /// field 4, wire `ai_discovery_tab`
    pub ai_discovery_tab: Option<String>,
    /// field 5, wire `bot_persona_id`
    pub bot_persona_id: Option<String>,
    /// field 6, wire `ui_surface`
    pub ui_surface: Option<TSSURFACE>,
    /// field 7, wire `bot_entry_point`
    pub bot_entry_point: Option<BOTENTRYPOINTTYPE>,
    /// field 8, wire `bot_discovery_path`
    pub bot_discovery_path: Option<BOTDISCOVERYPATHTYPE>,
    /// field 9, wire `is_meta_ai_character_bot_chat`
    pub is_meta_ai_character_bot_chat: Option<bool>,
    /// field 10, wire `is_user_created_agent`
    pub is_user_created_agent: Option<bool>,
    /// field 11, wire `additional_category`
    pub additional_category: Option<ADDITIONALCATEGORYTYPE>,
    /// field 12, wire `is_meta_ai_assistant`
    pub is_meta_ai_assistant: Option<bool>,
    /// field 13, wire `call_random_id`
    pub call_random_id: Option<String>,
    /// field 14, wire `xma_reel_index`
    pub xma_reel_index: Option<i64>,
    /// field 15, wire `xma_reel_max_index`
    pub xma_reel_max_index: Option<i64>,
    /// field 16, wire `device_language`
    pub device_language: Option<String>,
    /// field 17, wire `metric_count`
    pub metric_count: Option<i64>,
    /// field 18, wire `ai_session_id`
    pub ai_session_id: Option<String>,
    /// field 19, wire `discovery_origin`
    pub discovery_origin: Option<DISCOVERYORIGINTYPE>,
    /// field 20, wire `inline_tos_notice_id`
    pub inline_tos_notice_id: Option<String>,
    /// field 21, wire `inline_tos_status`
    pub inline_tos_status: Option<INLINETOSSTATUS>,
    /// field 22, wire `conversation_starter_category`
    pub conversation_starter_category: Option<String>,
    /// field 23, wire `conversation_starter_index`
    pub conversation_starter_index: Option<i64>,
    /// field 24, wire `ai_voice_on_selection_default`
    pub ai_voice_on_selection_default: Option<bool>,
    /// field 25, wire `ai_voice_selection_enum`
    pub ai_voice_selection_enum: Option<String>,
    /// field 26, wire `ai_creation_personality_category_insert`
    pub ai_creation_personality_category_insert: Option<String>,
    /// field 27, wire `ai_creation_personality_category_select`
    pub ai_creation_personality_category_select: Option<String>,
    /// field 28, wire `conversation_starter_prompt_mode`
    pub conversation_starter_prompt_mode: Option<String>,
    /// field 29, wire `ai_creation_input_type`
    pub ai_creation_input_type: Option<INPUTTYPE>,
    /// field 38, wire `ai_creation_avatar_crop_changes`
    pub ai_creation_avatar_crop_changes: Option<String>,
    /// field 39, wire `interest_categories_selected`
    pub interest_categories_selected: Option<i64>,
    /// field 40, wire `category_type`
    pub category_type: Option<String>,
    /// field 41, wire `has_continue_chatting`
    pub has_continue_chatting: Option<bool>,
    /// field 42, wire `has_your_ai_category`
    pub has_your_ai_category: Option<bool>,
    /// field 43, wire `scroll_fetch_latency`
    pub scroll_fetch_latency: Option<i64>,
    /// field 44, wire `scroll_depth`
    pub scroll_depth: Option<i64>,
    /// field 45, wire `is_cache`
    pub is_cache: Option<bool>,
    /// field 46, wire `conversation_starter_label`
    pub conversation_starter_label: Option<String>,
    /// field 47, wire `event_ts_ms`
    pub event_ts_ms: Option<i64>,
    /// field 48, wire `raw_bot_entry_point`
    pub raw_bot_entry_point: Option<String>,
    /// field 49, wire `bot_prompt_type`
    pub bot_prompt_type: Option<BOTPROMPTTYPE>,
    /// field 50, wire `prompt_trigger_point`
    pub prompt_trigger_point: Option<PROMPTTRIGGERPOINT>,
    /// field 51, wire `conversation_starter_name`
    pub conversation_starter_name: Option<String>,
    /// field 52, wire `command_name`
    pub command_name: Option<String>,
    /// field 53, wire `ai_home_qp_promotion_id`
    pub ai_home_qp_promotion_id: Option<i64>,
    /// field 54, wire `ai_qp_promotion_id`
    pub ai_qp_promotion_id: Option<String>,
}