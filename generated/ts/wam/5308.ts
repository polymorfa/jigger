export const WamSearchActionEvent = 5308 as const

export interface SearchActionEventEvent {
  /** field 1, wire `biz_search_count` */
  bizSearchCount?: number
  /** field 2, wire `search_action` */
  searchAction?: SEARCHACTIONTYPE
  /** field 3, wire `search_action_entry_point` */
  searchActionEntryPoint?: SEARCHACTIONENTRYPOINTTYPE
  /** field 4, wire `search_ai_suggestion_count` (search_ai_suggestion_count > 0; search_ai_suggestion_count == 1) */
  searchAiSuggestionCount?: number
  /** field 5, wire `search_chats_count` */
  searchChatsCount?: number
  /** field 6, wire `search_contacts_count` */
  searchContactsCount?: number
  /** field 7, wire `search_filter_count` */
  searchFilterCount?: number
  /** field 8, wire `search_groups_count` */
  searchGroupsCount?: number
  /** field 9, wire `search_messages_count` */
  searchMessagesCount?: number
  /** field 10, wire `selected_item_rank` */
  selectedItemRank?: number
  /** field 11, wire `result_page_shown` */
  resultPageShown?: boolean
}