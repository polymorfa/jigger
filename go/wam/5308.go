const WamSearchActionEvent = 5308 // channel: regular

type SearchActionEventEvent struct {
	BizSearchCount int64 `wam:"biz_search_count"` // field 1
	SearchAction SEARCHACTIONTYPE `wam:"search_action"` // field 2
	SearchActionEntryPoint SEARCHACTIONENTRYPOINTTYPE `wam:"search_action_entry_point"` // field 3
	SearchAiSuggestionCount int64 `wam:"search_ai_suggestion_count"` // field 4 (search_ai_suggestion_count > 0; search_ai_suggestion_count == 1)
	SearchChatsCount int64 `wam:"search_chats_count"` // field 5
	SearchContactsCount int64 `wam:"search_contacts_count"` // field 6
	SearchFilterCount int64 `wam:"search_filter_count"` // field 7
	SearchGroupsCount int64 `wam:"search_groups_count"` // field 8
	SearchMessagesCount int64 `wam:"search_messages_count"` // field 9
	SelectedItemRank int64 `wam:"selected_item_rank"` // field 10
	ResultPageShown bool `wam:"result_page_shown"` // field 11
}