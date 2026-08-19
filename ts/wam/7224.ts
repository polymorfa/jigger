export const WamAiThreadsUserJourney = 7224 as const

export interface AiThreadsUserJourneyEvent {
  /** field 1, wire `ai_session_id` */
  aiSessionId?: string
  /** field 2, wire `app_session_id` */
  appSessionId?: string
  /** field 3, wire `conversation_thread_creation_ts` */
  conversationThreadCreationTs?: string
  /** field 4, wire `conversation_thread_id` */
  conversationThreadId?: string
  /** field 5, wire `event_ts_ms` */
  eventTsMs?: number
  /** field 6, wire `is_incognito_mode` */
  isIncognitoMode?: boolean
  /** field 7, wire `raw_bot_entry_point` */
  rawBotEntryPoint?: string
  /** field 8, wire `thread_action_type` */
  threadActionType?: THREADACTIONTYPES
  /** field 9, wire `meta_ai_action_entry_point` */
  metaAiActionEntryPoint?: METAAIACTIONENTRYPOINT
  /** field 10, wire `is_canonical_thread` */
  isCanonicalThread?: boolean
}