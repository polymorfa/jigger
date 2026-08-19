export const WamBotJourney = 4630 as const

export interface BotJourneyEvent {
  /** field 1, wire `action_type` */
  actionType?: CHATFILTERACTIONTYPES
  /** field 2, wire `app_session_id` */
  appSessionId?: string
  /** field 4, wire `ai_discovery_tab` */
  aiDiscoveryTab?: string
  /** field 5, wire `bot_persona_id` */
  botPersonaId?: string
  /** field 6, wire `ui_surface` */
  uiSurface?: TSSURFACE
  /** field 7, wire `bot_entry_point` */
  botEntryPoint?: BOTENTRYPOINTTYPE
  /** field 8, wire `bot_discovery_path` */
  botDiscoveryPath?: BOTDISCOVERYPATHTYPE
  /** field 9, wire `is_meta_ai_character_bot_chat` */
  isMetaAiCharacterBotChat?: boolean
  /** field 10, wire `is_user_created_agent` */
  isUserCreatedAgent?: boolean
  /** field 11, wire `additional_category` */
  additionalCategory?: ADDITIONALCATEGORYTYPE
  /** field 12, wire `is_meta_ai_assistant` */
  isMetaAiAssistant?: boolean
  /** field 13, wire `call_random_id` */
  callRandomId?: string
  /** field 14, wire `xma_reel_index` */
  xmaReelIndex?: number
  /** field 15, wire `xma_reel_max_index` */
  xmaReelMaxIndex?: number
  /** field 16, wire `device_language` */
  deviceLanguage?: string
  /** field 17, wire `metric_count` */
  metricCount?: number
  /** field 18, wire `ai_session_id` */
  aiSessionId?: string
  /** field 19, wire `discovery_origin` */
  discoveryOrigin?: DISCOVERYORIGINTYPE
  /** field 20, wire `inline_tos_notice_id` */
  inlineTosNoticeId?: string
  /** field 21, wire `inline_tos_status` */
  inlineTosStatus?: INLINETOSSTATUS
  /** field 22, wire `conversation_starter_category` */
  conversationStarterCategory?: string
  /** field 23, wire `conversation_starter_index` */
  conversationStarterIndex?: number
  /** field 24, wire `ai_voice_on_selection_default` */
  aiVoiceOnSelectionDefault?: boolean
  /** field 25, wire `ai_voice_selection_enum` */
  aiVoiceSelectionEnum?: string
  /** field 26, wire `ai_creation_personality_category_insert` */
  aiCreationPersonalityCategoryInsert?: string
  /** field 27, wire `ai_creation_personality_category_select` */
  aiCreationPersonalityCategorySelect?: string
  /** field 28, wire `conversation_starter_prompt_mode` */
  conversationStarterPromptMode?: string
  /** field 29, wire `ai_creation_input_type` */
  aiCreationInputType?: INPUTTYPE
  /** field 38, wire `ai_creation_avatar_crop_changes` */
  aiCreationAvatarCropChanges?: string
  /** field 39, wire `interest_categories_selected` */
  interestCategoriesSelected?: number
  /** field 40, wire `category_type` */
  categoryType?: string
  /** field 41, wire `has_continue_chatting` */
  hasContinueChatting?: boolean
  /** field 42, wire `has_your_ai_category` */
  hasYourAiCategory?: boolean
  /** field 43, wire `scroll_fetch_latency` */
  scrollFetchLatency?: number
  /** field 44, wire `scroll_depth` */
  scrollDepth?: number
  /** field 45, wire `is_cache` */
  isCache?: boolean
  /** field 46, wire `conversation_starter_label` */
  conversationStarterLabel?: string
  /** field 47, wire `event_ts_ms` */
  eventTsMs?: number
  /** field 48, wire `raw_bot_entry_point` */
  rawBotEntryPoint?: string
  /** field 49, wire `bot_prompt_type` */
  botPromptType?: BOTPROMPTTYPE
  /** field 50, wire `prompt_trigger_point` */
  promptTriggerPoint?: PROMPTTRIGGERPOINT
  /** field 51, wire `conversation_starter_name` */
  conversationStarterName?: string
  /** field 52, wire `command_name` */
  commandName?: string
  /** field 53, wire `ai_home_qp_promotion_id` */
  aiHomeQpPromotionId?: number
  /** field 54, wire `ai_qp_promotion_id` */
  aiQpPromotionId?: string
}