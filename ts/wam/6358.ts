export const WamSearchUserJourney = 6358 as const

export interface SearchUserJourneyEvent {
  /** field 1, wire `search_uj_ai_suggestion_count` */
  searchUjAiSuggestionCount?: number
  /** field 2, wire `search_uj_biz_count` */
  searchUjBizCount?: number
  /** field 3, wire `search_uj_chats_count` */
  searchUjChatsCount?: number
  /** field 4, wire `search_uj_contacts_count` */
  searchUjContactsCount?: number
  /** field 5, wire `search_uj_criteria_type` */
  searchUjCriteriaType?: SEARCHUJCRITERIATYPE
  /** field 6, wire `search_uj_dismiss_type` */
  searchUjDismissType?: SEARCHUJDISMISSTYPE
  /** field 7, wire `search_uj_filter_count` */
  searchUjFilterCount?: number
  /** field 8, wire `search_uj_filter_type` */
  searchUjFilterType?: SEARCHUJFILTERTYPE
  /** field 9, wire `search_uj_groups_in_common_count` */
  searchUjGroupsInCommonCount?: number
  /** field 10, wire `search_uj_has_fuzzy_results` */
  searchUjHasFuzzyResults?: boolean
  /** field 11, wire `search_uj_item_type` */
  searchUjItemType?: SEARCHUJITEMTYPE
  /** field 12, wire `search_uj_messages_count` */
  searchUjMessagesCount?: number
  /** field 13, wire `search_uj_result_count` */
  searchUjResultCount?: number
  /** field 14, wire `search_uj_selected_item_rank` */
  searchUjSelectedItemRank?: number
  /** field 15, wire `search_use_case` */
  searchUseCase?: SEARCHUSECASE
  /** field 16, wire `search_user_journey_action` */
  searchUserJourneyAction?: SEARCHUSERJOURNEYACTION
  /** field 17, wire `ui_surface` */
  uiSurface?: TSSURFACE
  /** field 18, wire `unified_session_id` */
  unifiedSessionId?: string
  /** field 19, wire `user_journey_event_ms` */
  userJourneyEventMs?: number
  /** field 20, wire `user_journey_funnel_id` */
  userJourneyFunnelId?: string
  /** field 21, wire `search_fts_and_semantic_messages_count` */
  searchFtsAndSemanticMessagesCount?: number
  /** field 22, wire `search_fts_messages_count` */
  searchFtsMessagesCount?: number
  /** field 23, wire `search_has_semantic_search_results` */
  searchHasSemanticSearchResults?: boolean
  /** field 24, wire `search_selected_message_source` */
  searchSelectedMessageSource?: SEARCHSELECTEDMESSAGESOURCE
  /** field 25, wire `search_semantic_messages_count` */
  searchSemanticMessagesCount?: number
  /** field 26, wire `search_session_query_id` */
  searchSessionQueryId?: string
  /** field 27, wire `search_unique_session_id` */
  searchUniqueSessionId?: string
  /** field 28, wire `selected_message_distance` */
  selectedMessageDistance?: string
  /** field 29, wire `search_uj_recent_searches_group_count` */
  searchUjRecentSearchesGroupCount?: number
  /** field 30, wire `search_uj_recent_searches_individual_count` */
  searchUjRecentSearchesIndividualCount?: number
  /** field 31, wire `search_uj_invite_count` */
  searchUjInviteCount?: number
  /** field 32, wire `search_ds_send_content_type` */
  searchDsSendContentType?: SEARCHDSSENDCONTENTTYPE
  /** field 33, wire `search_ds_time_spent_ms` */
  searchDsTimeSpentMs?: number
  /** field 34, wire `search_uj_pushnames_count` */
  searchUjPushnamesCount?: number
}