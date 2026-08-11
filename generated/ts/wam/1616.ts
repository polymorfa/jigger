export const WamChatFilterEvent = 1616 as const

export interface ChatFilterEventEvent {
  /** field 1, wire `action_type` */
  actionType?: CHATFILTERACTIONTYPES
  /** field 2, wire `filter_type` */
  filterType?: CHATFILTERTYPES
  /** field 3, wire `session_id` */
  sessionId?: number
  /** field 4, wire `search_result_type` */
  searchResultType?: CHATSEARCHRESULTTYPE
  /** field 5, wire `target_screen` */
  targetScreen?: CHATFILTERTARGETSCREEN
  /** field 6, wire `activity_session_id` */
  activitySessionId?: string
  /** field 7, wire `metadata` */
  metadata?: string
  /** field 8, wire `search_query_id` */
  searchQueryId?: string
  /** field 9, wire `search_request_id` */
  searchRequestId?: string
  /** field 10, wire `predefined_id` */
  predefinedId?: number
  /** field 11, wire `label_name` */
  labelName?: string
  /** field 12, wire `list_id` */
  listId?: number
  /** field 13, wire `list_index` */
  listIndex?: number
  /** field 14, wire `list_type` */
  listType?: LISTTYPE
  /** field 15, wire `thread_id` */
  threadId?: string
}