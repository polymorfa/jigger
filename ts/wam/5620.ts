export const WamImagineActions = 5620 as const

export interface ImagineActionsEvent {
  /** field 1, wire `imagine_action` */
  imagineAction?: IMAGINEACTION
  /** field 3, wire `imagine_action_source` */
  imagineActionSource?: IMAGINEACTIONSOURCE
  /** field 4, wire `imagine_action_target` */
  imagineActionTarget?: IMAGINEACTIONTARGET
  /** field 5, wire `imagine_action_thread_type` */
  imagineActionThreadType?: IMAGINEACTIONTHREADTYPE
  /** field 6, wire `is_cancelled` */
  isCancelled?: boolean
  /** field 7, wire `is_sent` */
  isSent?: boolean
  /** field 8, wire `imagine_action_duration` */
  imagineActionDuration?: string
  /** field 9, wire `max_index` */
  maxIndex?: number
  /** field 10, wire `selected_image_index` */
  selectedImageIndex?: number
  /** field 11, wire `implementation_type` */
  implementationType?: IMPLEMENTATIONTYPE
  /** field 12, wire `imagine_media_type` */
  imagineMediaType?: IMAGINEMEDIATYPE
  /** field 13, wire `imagine_action_source_subtype` */
  imagineActionSourceSubtype?: IMAGINEACTIONSOURCESUBTYPE
  /** field 14, wire `ai_session_id` */
  aiSessionId?: string
  /** field 15, wire `thread_session_id` */
  threadSessionId?: string
  /** field 16, wire `meta_ai_conversation_thread_id` */
  metaAiConversationThreadId?: string
  /** field 17, wire `text_modality` */
  textModality?: TEXTMODALITYTYPE
  /** field 18, wire `unified_session_id` */
  unifiedSessionId?: string
}