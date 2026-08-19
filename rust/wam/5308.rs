pub const WAM_SEARCH_ACTION_EVENT: u32 = 5308;

#[derive(Debug, Default)]
pub struct SearchActionEventEvent {
    /// field 1, wire `biz_search_count`
    pub biz_search_count: Option<i64>,
    /// field 2, wire `search_action`
    pub search_action: Option<SEARCHACTIONTYPE>,
    /// field 3, wire `search_action_entry_point`
    pub search_action_entry_point: Option<SEARCHACTIONENTRYPOINTTYPE>,
    /// field 4, wire `search_ai_suggestion_count` (search_ai_suggestion_count > 0; search_ai_suggestion_count == 1)
    pub search_ai_suggestion_count: Option<i64>,
    /// field 5, wire `search_chats_count`
    pub search_chats_count: Option<i64>,
    /// field 6, wire `search_contacts_count`
    pub search_contacts_count: Option<i64>,
    /// field 7, wire `search_filter_count`
    pub search_filter_count: Option<i64>,
    /// field 8, wire `search_groups_count`
    pub search_groups_count: Option<i64>,
    /// field 9, wire `search_messages_count`
    pub search_messages_count: Option<i64>,
    /// field 10, wire `selected_item_rank`
    pub selected_item_rank: Option<i64>,
    /// field 11, wire `result_page_shown`
    pub result_page_shown: Option<bool>,
}