export const WamThreadInteractionDataAi = 6410 as const

export interface ThreadInteractionDataAiEvent {
  /** field 1, wire `ai_chat_origins` */
  aiChatOrigins?: AICHATORIGINSTYPE
  /** field 2, wire `bottom_sheet_animated_sent` */
  bottomSheetAnimatedSent?: number
  /** field 3, wire `bottom_sheet_edited_animated_sent` */
  bottomSheetEditedAnimatedSent?: number
  /** field 4, wire `bottom_sheet_edited_sent` */
  bottomSheetEditedSent?: number
  /** field 5, wire `bottom_sheet_images_generated` */
  bottomSheetImagesGenerated?: number
  /** field 6, wire `bottom_sheet_memu_initiated` */
  bottomSheetMemuInitiated?: number
  /** field 7, wire `bottom_sheet_memu_messages_sent` */
  bottomSheetMemuMessagesSent?: number
  /** field 8, wire `bottom_sheet_messages_sent` */
  bottomSheetMessagesSent?: number
  /** field 9, wire `bottom_sheet_prompts_initiated` */
  bottomSheetPromptsInitiated?: number
  /** field 10, wire `bottom_sheet_regenerated_sent` */
  bottomSheetRegeneratedSent?: number
  /** field 11, wire `command_sheet_show` */
  commandSheetShow?: number
  /** field 14, wire `imagine_command_click` */
  imagineCommandClick?: number
  /** field 15, wire `imagine_me_messages_sent` */
  imagineMeMessagesSent?: number
  /** field 16, wire `imagine_me_prompts_initiated_count` */
  imagineMePromptsInitiatedCount?: number
  /** field 17, wire `thread_ds` */
  threadDs?: string
  /** field 19, wire `meta_ai_mention_click` */
  metaAiMentionClick?: number
  /** field 20, wire `meta_ai_mention_show` */
  metaAiMentionShow?: number
  /** field 21, wire `suggestion_prompts_click` */
  suggestionPromptsClick?: number
  /** field 22, wire `suggestion_prompts_show` */
  suggestionPromptsShow?: number
  /** field 24, wire `total_message_from_agent_cnt` */
  totalMessageFromAgentCnt?: number
  /** field 25, wire `total_message_to_agent_cnt` */
  totalMessageToAgentCnt?: number
  /** field 26, wire `thread_id` */
  threadId?: string
  /** field 27, wire `thread_id_by_lid` */
  threadIdByLid?: string
  /** field 28, wire `thread_creation_date` */
  threadCreationDate?: string
  /** field 29, wire `ai_discovery_tab` */
  aiDiscoveryTab?: string
}