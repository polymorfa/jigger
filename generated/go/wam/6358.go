const WamSearchUserJourney = 6358 // channel: regular

type SearchUserJourneyEvent struct {
	SearchUjAiSuggestionCount int64 `wam:"search_uj_ai_suggestion_count"` // field 1
	SearchUjBizCount int64 `wam:"search_uj_biz_count"` // field 2
	SearchUjChatsCount int64 `wam:"search_uj_chats_count"` // field 3
	SearchUjContactsCount int64 `wam:"search_uj_contacts_count"` // field 4
	SearchUjCriteriaType SEARCHUJCRITERIATYPE `wam:"search_uj_criteria_type"` // field 5
	SearchUjDismissType SEARCHUJDISMISSTYPE `wam:"search_uj_dismiss_type"` // field 6
	SearchUjFilterCount int64 `wam:"search_uj_filter_count"` // field 7
	SearchUjFilterType SEARCHUJFILTERTYPE `wam:"search_uj_filter_type"` // field 8
	SearchUjGroupsInCommonCount int64 `wam:"search_uj_groups_in_common_count"` // field 9
	SearchUjHasFuzzyResults bool `wam:"search_uj_has_fuzzy_results"` // field 10
	SearchUjItemType SEARCHUJITEMTYPE `wam:"search_uj_item_type"` // field 11
	SearchUjMessagesCount int64 `wam:"search_uj_messages_count"` // field 12
	SearchUjResultCount int64 `wam:"search_uj_result_count"` // field 13
	SearchUjSelectedItemRank int64 `wam:"search_uj_selected_item_rank"` // field 14
	SearchUseCase SEARCHUSECASE `wam:"search_use_case"` // field 15
	SearchUserJourneyAction SEARCHUSERJOURNEYACTION `wam:"search_user_journey_action"` // field 16
	UiSurface TSSURFACE `wam:"ui_surface"` // field 17
	UnifiedSessionId string `wam:"unified_session_id"` // field 18
	UserJourneyEventMs int64 `wam:"user_journey_event_ms"` // field 19
	UserJourneyFunnelId string `wam:"user_journey_funnel_id"` // field 20
	SearchFtsAndSemanticMessagesCount int64 `wam:"search_fts_and_semantic_messages_count"` // field 21
	SearchFtsMessagesCount int64 `wam:"search_fts_messages_count"` // field 22
	SearchHasSemanticSearchResults bool `wam:"search_has_semantic_search_results"` // field 23
	SearchSelectedMessageSource SEARCHSELECTEDMESSAGESOURCE `wam:"search_selected_message_source"` // field 24
	SearchSemanticMessagesCount int64 `wam:"search_semantic_messages_count"` // field 25
	SearchSessionQueryId string `wam:"search_session_query_id"` // field 26
	SearchUniqueSessionId string `wam:"search_unique_session_id"` // field 27
	SelectedMessageDistance string `wam:"selected_message_distance"` // field 28
	SearchUjRecentSearchesGroupCount int64 `wam:"search_uj_recent_searches_group_count"` // field 29
	SearchUjRecentSearchesIndividualCount int64 `wam:"search_uj_recent_searches_individual_count"` // field 30
	SearchUjInviteCount int64 `wam:"search_uj_invite_count"` // field 31
	SearchDsSendContentType SEARCHDSSENDCONTENTTYPE `wam:"search_ds_send_content_type"` // field 32
	SearchDsTimeSpentMs int64 `wam:"search_ds_time_spent_ms"` // field 33
	SearchUjPushnamesCount int64 `wam:"search_uj_pushnames_count"` // field 34
}